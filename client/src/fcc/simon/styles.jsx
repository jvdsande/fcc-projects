import styled from 'styled-components'

/* Title    */
export const Title = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  top: 2vh;
  left: 0;
  right: 0;
  font-size: 15vmin;
  text-align: center;
  color: #F5F5F5;
`
export const TitleSimon = styled.span`
  color: #FFEBEE;
`
export const TitleGame = styled.span`
  color: #F1F8E9;
`


/* Game Board     */
export const BoardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.fail ? '#FFCDD2' : (props.win ? '#E3F2FD' : 'white')};
  transition: all .5s
`

export const BoardBody = styled.div`
  position: absolute;
  bottom: 15vh;
  left: calc(50% - 25vh);
  width: 50vh;
  height: 50vh;
`

export const BoardMiddle = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  text-align: center;
  color: #757575;

  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;

  background: #FAFAFA;
  border-radius: 150px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

export const Cell = styled.a`
  display: inline-block;
  width: 50%;
  height: 50%;

  opacity: ${props => props.lit ? 0.3 : 0.6};
  cursor: ${props => props.frozen ? 'default' : 'pointer'};


  background: ${props => {
    switch(props.position) {
      case 'top-left':
        return '#D32F2F'
      case 'top-right':
        return '#303F9F'
      case 'bottom-right':
        return '#689F38'
      case 'bottom-left':
        return '#FFA000'
    }
  }};

  border-radius: ${props => {
    switch(props.position) {
      case 'top-left':
        return '100% 0 0 0'
      case 'top-right':
        return '0 100% 0 0'
      case 'bottom-right':
        return '0 0 100% 0'
      case 'bottom-left':
        return '0 0 0 100%'
    }
  }};

${props => {
  if(!props.frozen)
    return '&:hover { opacity: 0.7; }'
}}

${props => {
  if(!props.frozen)
    return '&:active { opacity: 0.3; }'
}}

  transition: all .3s;
`


/* Option Panel   */

export const OptionMode = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  display: inline-block;

  padding: 0.5vh 2vh;
  width: 5vh;

  font-size: 1.8vh;

  background-color: ${props => props.selected == props.value ? '#757575' : '#EEEEEE'};
  color: ${props => props.selected == props.value ? '#EEEEEE' : '#757575'};

  border-radius: 0 1vh 1vh 0;
  &:first-child {
    border-radius: 1vh 0 0 1vh;
  }

  &:hover {
    background-color: ${props => props.selected == props.value ? '#757575' : '#BDBDBD'};
    color:  ${props => props.selected == props.value ? '#EEEEEE' : '#FAFAFA'};
  }
`

export const Option = styled.div`
  color: #757575;
  cursor: pointer;
`


export const NumberOfSteps = styled.div`
  font-size: 7vh;
`

export const Reset = styled.div`
   background-color: #EEEEEE;
   color: #757575;
   cursor: pointer;
   padding: 0.5vh 2vh;
   border-radius: 1vh;
   font-size: 1.8vh;

   &:hover {
     background-color: #757575;
     color: #EEEEEE;
   }
`

/*  Score     */

export const Score = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  bottom: 2vmin;
  left: 0;
  right: 0;
  font-size: 10vmin;
  text-align: center;
  color: #BDBDBD;
`
export const Wins = styled.span`
  color: ${props => props.player == 'x' ? '#FF8F00' : '#4527A0'};
`
