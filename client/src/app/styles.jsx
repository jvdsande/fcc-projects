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

/* achievements       */
export const Preview = styled.iframe`
  transform: scale(0.2);
  transform-origin: 0 0;
  width: 1920;
  height: 1080;
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


/* Footer             */
export const LinkedIn = styled.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url("linkedin.png");
  background-size: cover;
`
