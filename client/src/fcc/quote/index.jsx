import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import get from 'simple-get'
import {AllHtmlEntities} from 'html-entities'

const entities = new AllHtmlEntities()

import {
  Background, Foreground,
  Content, Author,
  NewQuote, Twitter,
} from './styles'


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
    get.concat('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp='+( new Date().getTime()), function(err, res, data) {
      let obj = ''
      try {
        obj = JSON.parse(data)[0]
      } catch(err) {
        obj = {content: 'An error occured', author: ''}
      }
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
