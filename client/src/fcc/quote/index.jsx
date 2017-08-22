/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Quote project                       */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import get to generate GET requests                                        */
import get from 'simple-get'

/* Get an handler for HTML entities                                           */
import {AllHtmlEntities} from 'html-entities'
const entities = new AllHtmlEntities()

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Background, Foreground,
  Content, Author,
  NewQuote, Twitter,
} from './styles'


class Quote extends Component {
  constructor() {
    super()

    /* Our state contains the quote, its author, and the related twitter
     * message                                                                */
    this.state = {
      quote: '',
      author: '',
      twitterQuote: '',
    }

    /* Keep the next state ready in a double-buffering fashion                */
    this.next = {
      quote: '',
      author: '',
      twitterQuote: '',
    }

    /* Keep a boolean of the double-buffering state                           */
    this.nextPending = true
    this.nextReady = false
  }

  /* Get a next quote, ready to be displayed                                  */
  getNextQuote = () => {
    /* The API chosen here is QuotesOnDesign. We configure it to load a random
     * quote. The timestamp helps to avoid cache issues                       */
    get.concat('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp='+( new Date().getTime()),
      (err, res, data) => {
        let obj = ''

        /* Safely parse the JSON object fetched                               */
        try {
          obj = JSON.parse(data)[0]
        } catch(err) {
          obj = {content: 'An error occured', author: ''}
        }

        /* Get the quote and author free of special HTML entities             */
        let quote = entities.decode(obj.content)
        let author = ' - ' + entities.decode(obj.title)

        /* Remove all HTML styling to get the raw twitter quote               */
        let twitterQuote = quote.replace(/<[a-zA-Z \/]*>/g, '')
        /* Add the Author to the twitter message  */
        twitterQuote = encodeURIComponent(twitterQuote+'\n'+author+'\n')

        /* If the twitter message is longer than 128 characters (we have 12
         * characters of hashtags pending), fetch another                     */
        if(twitterQuote.length > 128) {
          this.getNextQuote()
        }
        /* If not, then use this quote                                        */
        else {
          /* If there is no quote waiting to be displayed, then set this quote
           * as the next quote                                                */
          if(!this.nextPending) {
            this.next = {quote, author, twitterQuote}

            /* Tell the app a quote is ready                                  */
            this.nextReady = true
          }
          /* If the user has requested a quote, then show it right away       */
          else {
            this.setState({quote, author, twitterQuote})
            this.nextPending = false
            this.nextReady = false

            /* Preload the next quote                                         */
            this.getNextQuote()
          }
        }
      })
  }

  /* Fetch a new quote and display it                                         */
  getQuote = () => {
    /* If there is already a quote loaded, display it                         */
    if(this.nextReady) {
      this.nextReady = false
      this.setState(this.next)
    }
    /* Else, tell the user to wait for a bit                                  */
    else {
      /* Tell the app the next quote should be displayed right away           */
      this.nextPending = true
      this.setState({quote:'<i><small>Fetching quote...</small></i>', author: '', twitterQuote: ''})
    }

    /* Start loading another quote                                            */
    this.getNextQuote()
  }

  /* Load a quote at mount                                                    */
  componentDidMount() {
    this.getQuote()
  }

  /* Render the quote component                                               */
  render() {
    /* Prepare the complete twitter URL                                       */
    let twitterMessage = 'https://twitter.com/intent/tweet?hashtags=quotes,fcc&related=freecodecamp&text=' + this.state.twitterQuote

    return (
      <div>
        {/* Add a background                                                  */}
        <Background />

        {/* Add the foreground and the content                                */}
        <Foreground>
          {/* For the content, use the HTML code from QuotesOnDesign}         */}
          <Content dangerouslySetInnerHTML={{__html: this.state.quote}} />
          <Author>{this.state.author}</Author>

          {/* Add a button for fetching a new quote                           */}
          <NewQuote onClick={this.getQuote}>New quote</NewQuote>

          {/* Add a button for sharing on twittera                            */}
          <a href={twitterMessage}>
            <Twitter href={twitterMessage} />
          </a>
        </Foreground>
      </div>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Pomodoro project                                                */
ReactDOM.render(<Quote />, target)
