import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import jsonp from 'jsonp'

import {
  Body,
  Header, SearchBox, Random,
  Articles, Article, ArticleSpacer,
  Thumbnail, Title, Content, Link,
} from './styles'


function constructWikiAPI(format, props, options, search) {
  let url = 'https://en.wikipedia.org/w/api.php?'

  url += `format=${format}&`
  url += 'action=query&generator=search&'

  url += 'prop='
  props.map((p,i) => url += p + (i == props.length - 1 ? '&' : '|'))

  Object.keys(options).map(o => {
    if(typeof options[o] == 'boolean' && options[o] == false)
      return

    if(typeof options[o] == 'boolean')
      url += o
    else
      url += `${o}=${options[o]}`

    url += '&'
  })

  url += `gsrsearch=${search}&`

  url += 'callback=JSON_CALLBACK'

  return url
}

function crop(text, length) {
  if(text.length > length - 3)
    return {text: text.substring(0, length - 3) + '...', true: true}

  return {text, true: false}
}

class Wikipedia extends Component {
  constructor() {
    super()

    this.timeout = null

    this.state = {
      value: '',
      results: []
    }
  }

  onChange = (e) => {
    let value = e.target.value
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.search, 200)
    this.setState({value})
  }

  search = () => {
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
    jsonp(url, (err, data) => {
      if(data.query)
        this.setState({results: data.query.pages})
      else
        this.setState({results: []})
    })
  }

  render() {
    return (
      <Body>
        <Header>Wikipedia Viewer</Header>
        <SearchBox type='text' value={this.state.value} onChange={this.onChange} /><br />
        <Random href='https://en.wikipedia.org/wiki/Special:Random' target='_blank'>Random article</Random>
        <Articles>
          {Object.keys(this.state.results).map(p => {
            let page = this.state.results[p]
            let thumbnail = (page.thumbnail || {source: './wikipedia.png'}).source
            let cropped = crop(page.extract, 400)
            console.log(page)
            return (
              <Article>
                <Thumbnail src={thumbnail} />
                <Title>{page.title}</Title>
                <Content>{page.extract}</Content>
                <Link href={`https://en.wikipedia.org/?curid=${page.pageid}`}>{'Read full article'}</Link>
              </Article>)
          })}
          <ArticleSpacer />
          <ArticleSpacer />
          <ArticleSpacer />
          <ArticleSpacer />
        </Articles>
      </Body>
    )
  }
}


let target = document.getElementById('root')
ReactDOM.render(
  <Wikipedia />, target)
