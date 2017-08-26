/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Wikipedia project                   */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import jsonp to handle the JSON requests                                   */
import jsonp from 'jsonp'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Body,
  Header, SearchBox, Random,
  Articles, Article, ArticleSpacer,
  Thumbnail, Title, Content, Link,
} from './styles'


/* Helper for creating a Wikipedia API call                                   */
function constructWikiAPI(format, props, options, search) {
  /* Start with the base URL                                                  */
  let url = 'https://en.wikipedia.org/w/api.php?'

  /* Append the format and the action & generator                             */
  url += `format=${format}&`
  url += 'action=query&generator=search&'

  /* Add all passed props                                                     */
  url += 'prop='
  props.map((p,i) => url += p + (i == props.length - 1 ? '&' : '|'))

  /* Add all options                                                          */
  Object.keys(options).map(o => {
    if(typeof options[o] == 'boolean' && options[o] == false)
      return

    if(typeof options[o] == 'boolean')
      url += o
    else
      url += `${o}=${options[o]}`

    url += '&'
  })

  /* Append the search term                                                   */
  url += `gsrsearch=${search}&`

  /* Add a dummy callback for jsonp                                           */
  url += 'callback=JSON_CALLBACK'

  /* Return the constructed url                                               */
  return url
}


/* The Wikipedia component render our complete page                           */
class Wikipedia extends Component {
  /* Keep a reference for our input timeout                                   */
  timeout = null

  constructor() {
    super()

    /* We will have a controlled input, and a list of results                 */
    this.state = {
      value: '',
      results: []
    }
  }

  /* Control the input by updating value on change                            */
  onChange = (e) => {
    let value = e.target.value

    /* When the value changes, clear the timeout, and start it again          */
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.search, 200)

    /* Update the app state with the new value                                */
    this.setState({value})
  }

  /* Search Wikipedia for the entered value                                   */
  search = () => {
    /* Start by creating the URL with our parameters                          */
    let url = constructWikiAPI(
      'json',
      ['pageimages', 'extracts'],
      {
        explaintext: true,
        exintro: true,
        exlimit: 'max',
        exsentences: 3,
      },
      this.state.value
    )

    /* Then call the API, and use the results                                 */
    jsonp(url, (err, data) => {
      if(data.query)
        this.setState({results: data.query.pages})
      else
        this.setState({results: []})
    })
  }

  /* Render our app                                                           */
  render() {
    return (
      <Body>
        {/* Start with a title for the page                                   */}
        <Header>Wikipedia Viewer</Header>

        {/* Then add our controlled input, focused at page load               */}
        <SearchBox type='text' value={this.state.value} onChange={this.onChange} innerRef={(i) => {if(i) i.focus()}} />

        <br />

        {/* We also provide a link to a random wikipedia page                 */}
        <Random href='https://en.wikipedia.org/wiki/Special:Random' target='_blank'>Random article</Random>

        {/* Finally we display a list of matched articles                     */}
        <Articles>
          {/* We go through the list of matched articles                      */}
          {Object.keys(this.state.results).map(p => {
            let page = this.state.results[p]

            /* We either get the loaded thumbnail or fall back to a default   */
            let thumbnail = (page.thumbnail || {source: './wikipedia.png'}).source

            /* And we construct our Article element                           */
            return (
              <Article>
                {/* Start with a thumbnail                                    */}
                <Thumbnail src={thumbnail} />

                {/* Add the article's title                                   */}
                <Title>{page.title}</Title>

                {/* Fill in the extract of the article                        */}
                <Content>{page.extract}</Content>

                {/* Add a link to the complete article                        */}
                <Link href={`https://en.wikipedia.org/?curid=${page.pageid}`}>{'Read full article'}</Link>
              </Article>)
          })}

          {/* The ArticleSpacer allow to align items to the left despite
            * the flex 'space-around' property                                */}
          <ArticleSpacer />
          <ArticleSpacer />
          <ArticleSpacer />
          <ArticleSpacer />
        </Articles>
      </Body>
    )
  }
}


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Wikipedia project                                                */
ReactDOM.render(<Wikipedia />, target)
