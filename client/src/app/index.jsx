import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import {
  PortfolioBody,
  Link, Title,
  Nav, Section,
  Achievements, AchievementLink, AchievementHidden,
  Preview, NoClick,
  LinkedIn,
  Footer,
} from './styles'

let personalAchievements = [
  {
    title: "React Pie Charts",
    href: "piechart/"
  }
]

let fccAchievements = [
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



class Achievement extends React.Component {
  render() {
    let href = window.location.href
    href = href.split('/')
    href.pop()
    href.push('')
    href = href.join('/')
    return (
      <AchievementLink href={href+this.props.href}>
        <Title>{this.props.title}</Title>
        <Preview scrolling="no" src={href+this.props.href} />
        <NoClick />
      </AchievementLink>
    )
  }
}


export class Portfolio extends React.Component
{
  componentDidMount() {
    console.log("Hello");
  }
  render() {
    return (
      <PortfolioBody>
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
        <ScrollableAnchor id='about_me'>
          <h3>About me</h3>
        </ScrollableAnchor>
        <p>
          Started coding at the age of 12 in Ruby, using the game development software <Link href="http://www.rpgmakerweb.com/products/programs/rpg-maker-xp">RPG Maker XP</Link>.
          Never stopped since, and taught myself how to use C++ and Java.
          Then, at aged 18, joined a software engineering school were I completed my discovery of POO and learned C,
          which led me to embedded programming.
          Now full-time embedded engineer at <Link href="https://www.renesas.com/en-eu/">Renesas Electronics</Link>.
        </p>
        <p>
          During my embedded programming studies, I discovered Web programming which became my favorite past-time, and JavaScript quickly became my all-time favorite programming language. I used it for personal projects, and also succeeded to merge the embedded and JS worlds first throught IoT projects, and then using <Link href="https://electron.atom.io">Electron</Link> for developping debugging tools.
        </p>
        <p>
          I also invested in a small machine on which I run various servers for development, which helped me widen my Web knowledge to also include backend development, first using a classic LAMP server, and since a few months using Node.
        </p>
        <hr />
        <p>
          I recently decided to officialize my Web development skills by following <Link href="http://freecodecamp.com/">FreeCodeCamp</Link> formation and getting my frontend and backend certifications.
        </p>
        <br />
        <ScrollableAnchor id='fcc_projects'>
          <h3>FreeCodeCamp projects</h3>
        </ScrollableAnchor>
        <p>Below is a list of the various projects executed during my FreeCodeCamp certification.</p>
        <Achievements>
          {
            fccAchievements.map(function(a) {
              return (
                <Achievement title={a.title}
                  href={a.href} />
              )
            })
          }
          <AchievementHidden />
          <AchievementHidden />
          <AchievementHidden />
        </Achievements>

        <br />
        <ScrollableAnchor id='other_projects'>
          <h3>Other projects</h3>
        </ScrollableAnchor>
        <p>Here are other open-source projects that I've been developing in my free time.</p>
        <Achievements>
          {
            personalAchievements.map(function(a) {
              return (
                <Achievement title={a.title}
                  href={a.href} />
              )
            })
          }
          <AchievementHidden />
          <AchievementHidden />
          <AchievementHidden />
        </Achievements>


        <Footer>
          <LinkedIn href="https://www.linkedin.com/in/jeremievds/" />
        </Footer>
      </PortfolioBody>
    )
  }
}
