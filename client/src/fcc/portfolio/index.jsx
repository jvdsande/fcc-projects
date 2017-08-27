/******************************************************************************/
/* file: index.jsx                                                            */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Main component for the Portfolio app                                       */
/******************************************************************************/


/* Import React as our main framework   */
import React from 'react'

/* ScrollableAnchor helps creating a smooth navigation  */
import ScrollableAnchor from 'react-scrollable-anchor'

/* Import the custom styles from 'styles.jsx'.
 * 'styled-components' is used to keep the best of both the React and CSS
 * worlds   */
import {
  PortfolioBody,
  Link, Title,
  Nav, Section,
  Achievements, AchievementLink, AchievementHidden, AchievementTitle,
  Preview, NoClick,
  LinkedIn,
  Footer,
} from './styles'



/* Create an array of personal projects */
const personalAchievements = [
  {
    title: "Amplitude (French)",
    href: "http://amplitude.cc"
  },
  /* Not ready yet
  {
    title: "Enhanced Media Player",
    href: "emp/"
  },
  */
]

/* Create an array with each FreeCodeCamp project  */
const fccAchievements = [
  {
    title: "Calculator",
    href: "fcc/calculator/"
  },
  {
    title: "Pomodoro",
    href: "fcc/pomodoro/"
  },
  {
    title: "Quote Machine",
    href: "fcc/quote/"
  },
  {
    title: "Simon Game",
    href: "fcc/simon/"
  },
  {
    title: "Tic Tac Toe",
    href: "fcc/tictactoe/"
  },
  {
    title: "Tribute Page",
    href: "fcc/tribute/"
  },
  {
    title: "Twitch",
    href: "fcc/twitch/"
  },
  {
    title: "Weather",
    href: "fcc/weather/"
  },
  {
    title: "Wikipedia Viewer",
    href: "fcc/wikipedia/"
  }
]



/* The Achievement component renders an IFrame with a title and link to the
 * corresponding page   */
class Achievement extends React.Component {
  render() {
    return (
      <AchievementLink href={this.props.href}>
        <AchievementTitle>{this.props.title}</AchievementTitle>
        <Preview sandbox="allow-scripts" scrolling="no" src={this.props.href} />
        <NoClick />
      </AchievementLink>
    )
  }
}

/* The Portfolio component is the Root element of this site. It contains the
 * HTML code for the complete site, and uses the Achievement component  */
export class Portfolio extends React.Component
{
  render() {
    return (
      <PortfolioBody>
        {/* Create the navigation sidebar */}
        <Nav>
          <Section href="#about_me">
            About Me
          </Section>
          <Section href="#fcc_projects">
            FreeCodeCamp Projects
          </Section>
          <Section href="#other_projects">
            Personal Projects
          </Section>
        </Nav>


        <Title>
          Jeremie van der Sande
        </Title>
        <h2>Self-taught programmer & Web developer</h2>
        <br />


        {/* First section: introductory paragraph */}
        <ScrollableAnchor id='about_me'>
          <h3>About me</h3>
        </ScrollableAnchor>
        <p>
          Started coding at the age of 12 in Ruby, using the game development software <Link href="http://www.rpgmakerweb.com/products/programs/rpg-maker-xp">RPG Maker XP</Link>.
          Never stopped since, and taught myself how to use C++ and Java.
          Then, at aged 18, joined a software engineering school where I learned C,
          which led me to embedded programming.
          Now full-time embedded engineer at <Link href="https://www.renesas.com/en-eu/">Renesas Electronics</Link>.
        </p>
        <p>
          During my embedded programming studies, I discovered Web programming which became my favorite pastime, and JavaScript quickly became my all-time favorite programming language. I used it for personal projects, and also succeeded to merge the embedded and JS worlds first through IoT projects, and then using <Link href="https://electron.atom.io">Electron</Link> for developping debugging tools.
        </p>
        <p>
          I also invested in a small machine on which I run various servers for development, which helped me widen my Web knowledge to also include backend development, first using a classic LAMP server, and since a few months using Node.
        </p>
        <hr />
        <p>
          I recently decided to officialize my Web development skills by following <Link href="http://freecodecamp.com/">FreeCodeCamp</Link> formation and getting my frontend certifications.
        </p>
        <br />


        {/* Second section: list of FreeCodeCamp projects */}
        <ScrollableAnchor id='fcc_projects'>
          <h3>FreeCodeCamp projects</h3>
        </ScrollableAnchor>
        <p>Below is a list of the various projects executed during my FreeCodeCamp certification.</p>
        <Achievements>
          {
            /* Go through each FreeCodeCamp project */
            fccAchievements.map(function(a) {
              /* Create the corresponding Achievement */
              return (
                <Achievement title={a.title} href={a.href} />
              )
            })
          }

          {/* The AchievementHidden elements align other elements to the left despite justify-content: space-around */}
          <AchievementHidden />
          <AchievementHidden />
          <AchievementHidden />
        </Achievements>
        <br />


        {/* Third section: list of Personal projects */}
        <ScrollableAnchor id='other_projects'>
          <h3>Other projects</h3>
        </ScrollableAnchor>
        <p>Here are other projects that I've been developing in my free time.</p>
        <Achievements>
          {
            /* Go through each personal project */
            personalAchievements.map(function(a) {
              /* Create the corresponding Achievement */
              return (
                <Achievement title={a.title} href={a.href} />
              )
            })
          }

          {/* The AchievementHidden elements align other elements to the left despite justify-content: space-around */}
          <AchievementHidden />
          <AchievementHidden />
          <AchievementHidden />
        </Achievements>

        {/* Add a footer with the link to my LinkedIn and GitHub accounts */}
        <Footer>
          <LinkedIn href="https://www.linkedin.com/in/jeremievds/" />
          {/* <GitHub href="https://github.com/jvdsande/" /> */}
        </Footer>
      </PortfolioBody>
    )
  }
}
