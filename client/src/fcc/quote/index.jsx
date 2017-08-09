import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

import get from 'simple-get'
import {AllHtmlEntities} from 'html-entities'

const entities = new AllHtmlEntities()


const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #C5E1A5;
  transition: all .5s;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    right: 0;
    width: 12%;
    background-color: #9CCC65;
    top: 0;
    bottom: 0;
  }
`

const Foreground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 40%;
  max-height: 100%;
  padding-bottom: 64px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: none;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    left: 0;
    width: 12%;
    background-color: #EEEEEE;
    top: 0;
    bottom: 0;
  }
`

const Content = styled.div`
  position: relative;
  color: #424242;
  text-align: left;
  font-size: calc(24px + 2vmin);
  font-family: sans-serif;
  display: inline-block;
  max-width: 720px;
  width: 70%;
`

const Author = styled.div`
  position: relative;
  text-align: right;
  font-family: serif;
  font-size: calc(24px + 1vmin);
  font-style: italic;
  display: inline-block;
  max-width: 720px;
  width: 70%;
`

const NewQuote = styled.button`
  position: absolute;
  background-color: #C5E1A5;
  opacity: 0.7;
  width: 100px;
  height: 44px;
  border: none;
  outline: none;
  font-size: 100%;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  bottom: 8px;
  right: 15%;
  cursor: pointer;
`

const Twitter = styled.a`
  position: absolute;
  background-color: #C5E1A5;
  background-image: url('./twitter.png');
  background-size: cover;
  opacity: 0.7;
  width: 44px;
  height: 44px;
  border: none;
  outline: none;
  font-size: 100%;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  bottom: 8px;
  right: calc(15% + 110px);
  cursor: pointer;
`

let test = `
`



class Quote extends Component {
  constructor() {
    super()

    this.next = {
      quote: '',
      author: '',
      twitterQuote: '',
    }

    this.nextPending = true

    this.state = {
      quote: '',
      author: '',
      twitterQuote: '',
    }

  }

  getNextQuote = () => {
    get.concat('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp='+( new Date().getTime()), function(err, res, data) {
      let obj = JSON.parse(data)[0]
      let quote = entities.decode(obj.content)
      let author = entities.decode(obj.title)

      let twitterQuote = quote.replace(/<[a-zA-Z \/]*>/g, '')
      twitterQuote = encodeURIComponent(twitterQuote+'\n - '+author+'\n\n')

      author = ' - ' + author

      if(twitterQuote.length > 140) {
        this.getNextQuote()
      } else {
        if(!this.nextPending) {
          this.next = {quote, author, twitterQuote}
          this.nextReady = true
        }
        else {
          this.setState({quote, author, twitterQuote})
          this.nextPending = false
          this.nextReady = false
          this.getNextQuote()
        }
      }
    }.bind(this))
  }

  getQuote = (noColor) => {
    if(this.nextReady) {
      this.nextReady = false
      this.setState(this.next)
    } else {
      this.nextPending = true
      this.setState({quote:'<i><small>Fetching quote...</small></i>', author: '', twitterQuote: ''})
    }
    this.getNextQuote()
  }

  componentDidMount() {
    this.getQuote(true)
  }

  render() {
    let twitterMessage = 'https://twitter.com/intent/tweet?hashtags=quotes,fcc&related=freecodecamp&text=' + this.state.twitterQuote
    return (
      <div>
        <Background />
        <Foreground>
          <Content dangerouslySetInnerHTML={{__html: this.state.quote}}></Content>
          <Author>{this.state.author}</Author>
          <NewQuote onClick={this.getQuote}>New quote</NewQuote>
          <Twitter href={twitterMessage} />
        </Foreground>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(<Quote />, target)
