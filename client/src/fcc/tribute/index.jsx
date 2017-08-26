/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Entry point and main component for the Tribute project                     */
/******************************************************************************/


/* Import React as our main framework                                         */
import React, {Component} from 'react'

/* Import React DOM to inject our components                                  */
import ReactDOM from 'react-dom'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import {
  Panel,
  Name, Title, Content, Quote, SongQuote,
  Image,
  More,
} from './styles'

/* Get the Scroller component                                                 */
import Scroller from './scroller'


/* The Tribute component is used to render the complete page. It has a static
 * HTML content, and a parallax background                                    */
class Tribute extends Component {
  render() {
    return (
      <div>

        {/* Add a Scroller component as the background of the app, using three
          * images of Chester Bennington                                      */}
        <Scroller>
          <Image src='./linkin-1.jpg' />
          <Image src='./linkin-2.jpg' />
          <Image src='./linkin-3.jpg' />
        </Scroller>


        {/* Add a first panel with a quick introduction on Chester            */}
        <Panel>
          {/* The Name component is a bigger title to introduce the man       */}
          <Name>Chester Bennington</Name>

          {/* Title adds a centered title to the Panel                        */}
          <Title>1976 - 2017</Title>

          {/* Add a short introduction on Chester                             */}
          <Content>
            Chester Charles Bennington (March 20, 1976 – July 20, 2017) was an American singer and songwriter best known as the frontman for the rock band Linkin Park.
            He was also the lead singer for Dead by Sunrise and fronted Stone Temple Pilots from 2013 to 2015.
          </Content>

          {/* Add a first Linkin Park quote overlaying the background image   */}
          <SongQuote>
            " Pretending someone else can come and save me from myself "
          </SongQuote>
        </Panel>


        {/* A second Panel focuses on his role inside Linkin Park             */}
        <Panel>
          <Title>Linkin Park Lead Singer</Title>
          <Content>
             Linkin Park recruited vocalist Chester Bennington in March 1999. Bennington became a standout among applicants because of the dynamic in his singing style.
             The newborn vocal chemistry between Shinoda and Bennington helped revive the band, inciting them to work on new material.
             In 1999 the band released a self-titled extended play. The band released its breakthrough album, Hybrid Theory, the following year.
          </Content>

          {/* A quote from their last album, about departed people            */}
          <SongQuote>
            " Who cares if one more light goes out?
              <br />In a sky of a million stars "
          </SongQuote>
        </Panel>


        {/* Add a last panel about his untimely death                         */}
        <Panel>
          <Title>Death</Title>
          <Content>Bennington committed suicide on July 20, 2017. Mike Shinoda confirmed his death on Twitter, writing
            <br />
            <Quote>Shocked and heartbroken, but it's true.</Quote>

            Bennington's death occurred on what would have been Chris Cornell's 53rd birthday. Shinoda noted that Bennington was very emotional when the band performed "One More Light" in his honor, where he could not finish singing the song, be it in rehearsal or in a live performance setting.
            <br />
            Bennington's funeral was held at South Coast Botanic Garden in Palos Verdes, California on July 29.
          </Content>

          {/* A final quote, also from their last album, about addiction      */}
          <SongQuote>
            " All you said to do was slow down
            <br />But I was already gone "
          </SongQuote>
        </Panel>

        {/* Finally, add a footer zone with links to more on Chester          */}
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


/* The <div id='root'> element of our HTML will render our components         */
let target = document.getElementById('root')

/* Render the Tribute Page project                                            */
ReactDOM.render(<Tribute />, target)
