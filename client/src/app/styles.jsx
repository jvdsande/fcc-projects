import styled from 'styled-components'


export const Link = styled.a`
  text-decoration: none;
  color: #1976D2;
  position: relative;

  &:visited {
    color: #1976D2;
  }
`

export const Title = styled.h1`
  padding: 16px;

  &::after {
    display: block;
    content: ' ';
    height: 1px;
    background: #00695C;
    width: 50%;
    margin: auto;
    margin-top: 16px;
  }
`


/* Navigation panel     */
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 64px;
  background: #009688;
`

export const Section = styled(Link)`
  flex: 1;
  writing-mode: tb-rl;
  transform: rotate(180deg);
  background: #009688;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
  color: white !important;

  &:hover {
    cursor: pointer;
    background: #00695C;
    text-decoration: none;
  }
`

/* Portfolio          */
export const PortfolioBody = styled.div`
  display: block;
  box-sizing: border-box;
  background: white;
  width: calc(100% - 64px);
  padding: 24px;
  margin: 0;
  margin-left: 64px;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 420px;

  & p {
    text-align: justify;
  }
`

/* Achievements       */
export const Preview = styled.embed`
  transform: scale(0.3);
  transform-origin: 0 0;
  width: 1280;
  height: 720;
  border: none;
  position: relative;
  margin-top: 44px;
`
export const NoClick = styled.div`
  display: block;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0);
`

export const Achievements = styled.div`
  display: flex;
  background: #CCCCCC;
  padding: 8px;
  margin-left: -24px;
  margin-right: -24px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.16), inset 0 1px 3px rgba(0,0,0,0.23);
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const AchievementLink = styled(Link)`
  position: relative;
  display: block;
  width: 384px;
  height: 260px;
  margin-bottom: 16px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: hidden;

  & h1 {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    color: #00695C;
    font-size: 160%;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  & h1::after {
    display: none;
  }
`

export const AchievementHidden = styled.div`
  display: block;
  width: 384px;
  height: 0px;
`


/* Footer             */
export const Footer = styled.footer`
  margin-top: 16px;
  margin-bottom: -16px;
  text-align: right;
  width: 100%;
  display: block;
`

export const LinkedIn = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url("linkedin.png");
  background-size: cover;
`
