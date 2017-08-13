import styled from 'styled-components'

const AbsoluteFullWidth = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

export const Background = styled(AbsoluteFullWidth)`
  bottom: 0;
  background-color: #C5E1A5;
  transition: all .5s;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    right: 0;
    width: 9%;
    background-color: #9CCC65;
    top: 0;
    bottom: 0;
  }
`

export const Foreground = styled(AbsoluteFullWidth)`
  min-height: 40%;
  max-height: 100%;
  padding-bottom: 64px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: none;
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    left: 0;
    width: 12%;
    background-color: #EEEEEE;
    top: 0;
    bottom: 0;
  }
`

const RelativeText = styled.div`
  position: relative;
  display: inline-block;
  max-width: 720px;
  width: 70%;
`

export const Content = styled(RelativeText)`
  color: #424242;
  text-align: left;
  font-size: calc(24px + 2vmin);
  font-family: sans-serif;
`

export const Author = styled(RelativeText)`
  text-align: right;
  font-family: serif;
  font-size: calc(24px + 1vmin);
  font-style: italic;
`

export const NewQuote = styled.button`
  position: absolute;
  background-color: #C5E1A5;
  opacity: 0.7;
  width: 100px;
  height: 44px;
  border: none;
  outline: none;
  font-size: 100%;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  bottom: 8px;
  right: 15%;
  cursor: pointer;
`

export const Twitter = styled.a`
  position: absolute;
  background-color: #C5E1A5;
  background-image: url('./twitter.png');
  background-size: cover;
  opacity: 0.7;
  width: 44px;
  height: 44px;
  border: none;
  outline: none;
  font-size: 100%;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  bottom: 8px;
  right: calc(15% + 110px);
  cursor: pointer;
`
