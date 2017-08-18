import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {
  Panel,
  Name, Title, Content, Quote, SongQuote,
  ScrollerBody, ScrollerImage,
  More,
} from './styles'

class Scroller extends Component {
  constructor() {
    super()

    this.state = {
      scrollTop: 0
    }

    this.body = null

    window.addEventListener('scroll', () => {
      if(this.body) {
        this.body.scrollTop = window.scrollY * 0.7
      }
    })

        window.addEventListener('touchmove', () => {
          if(this.body) {
            this.body.scrollTop = window.scrollY * 0.7
          }
        })
  }
  render() {
    return (
      <ScrollerBody innerRef={(b) => this.body = b}>
        <ScrollerImage src='./linkin-1.jpg' />
        <ScrollerImage src='./linkin-2.jpg' />
        <ScrollerImage src='./linkin-3.jpg' />
      </ScrollerBody>
    )
  }
}

class Tribute extends Component {
  render() {
    return (
      <div>
        <Scroller />
        <Panel>
          <Name>Chester Bennington</Name>
          <Title>1976 - 2017</Title>
          <Content>
            Chester Charles Bennington (March 20, 1976 – July 20, 2017) was an American singer and songwriter best known as the frontman for the rock band Linkin Park. He was also the lead singer for Dead by Sunrise and fronted Stone Temple Pilots from 2013 to 2015.
          </Content>

          <SongQuote>
            " Pretending someone else can come and save me from myself "
          </SongQuote>
        </Panel>
        <Panel>
          <Title>Linkin Park Lead Singer</Title>
          <Content>
             Linkin Park recruited vocalist Chester Bennington in March 1999. Bennington became a standout among applicants because of the dynamic in his singing style.
             The newborn vocal chemistry between Shinoda and Bennington helped revive the band, inciting them to work on new material.
             In 1999 the band released a self-titled extended play. The band released its breakthrough album, Hybrid Theory, the following year.
          </Content>

          <SongQuote>
            " Who cares if one more light goes out?
              <br />In a sky of a million stars "
          </SongQuote>
        </Panel>
        <Panel>
          <Title>Death</Title>
          <Content>Bennington committed suicide on July 20, 2017. Mike Shinoda confirmed his death on Twitter, writing
            <br />
            <Quote>Shocked and heartbroken, but it's true.</Quote>

            Bennington's death occurred on what would have been Chris Cornell's 53rd birthday. Shinoda noted that Bennington was very emotional when the band performed "One More Light" in his honor, where he could not finish singing the song, be it in rehearsal or in a live performance setting.
            <br />
            Bennington's funeral was held at South Coast Botanic Garden in Palos Verdes, California on July 29.
          </Content>

          <SongQuote>
            " All you said to do was slow down
            <br />But I was already gone "
          </SongQuote>
        </Panel>

        <More>
          <Title>More</Title>
          <Content>
            You can read more about Bennington's life <a href='https://en.wikipedia.org/wiki/Chester_Bennington'>here</a>. Linkin Park also created their own <a href='http://chester.linkinpark.com'>tribute page</a> in the hope of raising awareness about suicide.
          </Content>
        </More>
      </div>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(
  <Tribute />, target)
