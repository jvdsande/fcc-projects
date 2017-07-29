import React from 'react'
import {
  Link, Title,
  Nav, Section,
  Preview,
  LinkedIn,
} from './styles'

let personalAchievements = [
  {
    title: "React Pie Charts",
    href: "http://jeremie-vds.com/piechart"
  }
]

let fccAchievements = [
  {
    title: "Calculator",
    href: "http://jeremie-vds.com/fcc/calculator",
    style: {
      transform: "scale(0.1)"
    }
  },
  {
    title: "Pomodoro",
    href: "http://jeremie-vds.com/fcc/pomodoro"
  },
  {
    title: "Quote Machine",
    href: "http://jeremie-vds.com/fcc/quote"
  },
  {
    title: "Tic Tac Toe",
    href: "http://jeremie-vds.com/fcc/tictactoe"
  },
  {
    title: "Tribute Page",
    href: "http://jeremie-vds.com/fcc/tribute"
  },
  {
    title: "Twitch",
    href: "http://jeremie-vds.com/fcc/twitch"
  },
  {
    title: "Weather",
    href: "http://jeremie-vds.com/fcc/weather"
  }
]



class Achievement extends React.Component {
  render() {
    return (
      <Link href={this.props.href} className="achievement">
        <Title>{this.props.title}</Title>
        <Preview scrolling="no" src={this.props.href} />
      </Link>
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
      <div id="portfolio">
        <Nav>
          <Section href="#about_me">
            About Me
          </Section>
          <Section href="#fcc_projects">
            FreeCodeCamp Projects
          </Section>
          <Section href="#o_projects">
            Personal Projects
          </Section>
        </Nav>
        <Title>
          Jeremie van der Sande
        </Title>
        <h2>Self-taught programmer & Web developer</h2>
        <br />
        <h3 id="about_me">About me</h3>
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
          I also invested in a small machine on which I run various servers for development, which helped me widen my Web knowledge to also include backend develpment, first using a classic LAMP server, and since a few months using Node.
        </p>
        <hr />
        <p>
          I recently decided to officialize my Web development skills by following <Link href="http://freecodecamp.com/">FreeCodeCamp</Link> formation and getting my frontend and backend certifications.
        </p>
        <br />
        <h3 id="fcc_projects">FreeCodeCamp projects</h3>
        <p>Below is a list of the various projects executed during my FreeCodeCamp certification.</p>
        <div className="achievements">
          {
            fccAchievements.map(function(a) {
              return (
                <Achievement title={a.title}
                  href={a.href} />
              )
            })
          }
          <div className="achievement-hidden"></div>
          <div className="achievement-hidden"></div>
          <div className="achievement-hidden"></div>
        </div>

        <br />
        <h3 id="o_projects">Other projects</h3>
        <p>Here are other open-source projects that I've been developing in my free time.</p>
        <div className="achievements">
          {
            personalAchievements.map(function(a) {
              return (
                <Achievement title={a.title}
                  href={a.href} />
              )
            })
          }
          <div className="achievement-hidden"></div>
          <div className="achievement-hidden"></div>
          <div className="achievement-hidden"></div>
        </div>


        <footer>
          <LinkedIn href="https://www.linkedin.com/in/jeremievds/" />
        </footer>
      </div>
    )
  }
}
