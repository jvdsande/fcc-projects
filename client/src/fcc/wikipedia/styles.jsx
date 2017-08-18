import styled from 'styled-components'


export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: auto;

  background: #EEEEEE;
  font-family: 'Bree Serif', serif;
  font-size: 120%;
  text-align: center;
`

export const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 300%;
`

export const SearchBox = styled.input`
  width: 320px;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  padding-bottom: 4px;
  font-size: 120%;
  border: 2px solid black;
  border-radius: 100px;
  display: inline-block;
  margin: 16px;
  outline: none;
  font-family: inherit;

  background-image: url('./search.png');
  background-size: contain;
  background-position: calc(100% - 3px) center;
  background-repeat: no-repeat;
`

const A = styled.a`
  color: #AD1457;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`

export const Random = styled(A)`
  display: inline-block;
  margin-bottom: 16px;
`

export const Articles = styled.div`
  display: flex;

  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
`

export const Article = styled.div`
  position: relative;

  max-width: 95%;
  width: 440px;
  min-width: calc(20% - 16px);

  text-align: center;

  font-size: 16px;

  padding: 16px;
  margin: 8px;

  background: #FFFFFF;
  box-shadow: 0 0 5px 3px #E0E0E0;

  box-sizing: border-box;

  border-radius: 5px;
`

export const ArticleSpacer = styled(Article)`
  height: 0;
  padding: 0;
  box-shadow: none;
`

export const Thumbnail = styled.img`
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin-bottom: 16px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 5px #E0E0E0;
`

export const Title = styled.div`
  font-size: 110%;
  margin-bottom: 10px;
`

export const Content = styled.div`
  padding-bottom: 24px;
  color: #424242;
  text-align: justify;
`

export const Link = styled(A)`
  color: #AD1457;
  text-align: right;
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`
