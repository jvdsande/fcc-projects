/******************************************************************************/
/* file: styles.jsx                                                           */
/* author: Jeremie van der Sande                                              */
/******************************************************************************/
/* Styles for the NumberSelect component                                      */
/******************************************************************************/

/* 'styled-components' is used to keep the best of both the React and CSS
 * worlds                                                                     */
import styled from 'styled-components'


/* Body: <div> element for the root of the NumberSelect component             */
export const Body = styled.div`
  position: relative;
  margin: 24px;
  text-align: center;
  font-size: 150%;
  color: #313131;
`

/* Main: <div> element containing the buttons and the value                   */
export const Main = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.3);
  width: 200px;
  border-radius: 56px;
`

/* Button: <button> element reacting to its disabled state. Round button with no
           focus outline                                                      */
export const Button = styled.button`
  display: inline-block;
  border: none;
  background: none;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background: rgba(255,255,255,0.6);
  font-size: 110%;
  cursor: pointer;
  font-weight: bold;
  outline: 0 !important;

  &:hover {
    background: rgba(255,255,255,0.9);
  }

  &:disabled {
    background: rgba(255,255,255,0.2);
  }
`

/* Title: <div> element for the title of the NumberSelect. Small text shadow to
          make it readable on colored backgrounds                             */
export const Title = styled.div`
  font-size: 120%;
  text-align: center;
  margin-bottom: 12px;
  color: #FAFAFA;
  text-shadow: 0 0 8px #9E9E9E;
  opacity: 0.8;
`
