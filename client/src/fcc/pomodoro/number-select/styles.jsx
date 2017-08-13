import styled from 'styled-components'

export const Body = styled.div`
  position: relative;
  margin: 24px;
  text-align: center;
  font-size: 150%;
  color: #313131;
`

export const Main = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.3);
  width: 200px;
  border-radius: 56px;
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  background: none;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background: rgba(255,255,255,${props => props.disabled?0.2:0.6});
  font-size: 110%;
  cursor: pointer;
  font-weight: bold;
  &:active, &:focus {
    outline: 0 !important;
  }
  &:hover {
    background: rgba(255,255,255,${props => props.disabled?0.2:0.9});
  }
`

export const Value = styled.div`
  display: inline-block;
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
`
export const Title = styled.div`
  font-size: 120%;
  text-align: center;
  margin-bottom: 12px;
  color: #FAFAFA;
  text-shadow: 0 0 8px #9E9E9E;
  opacity: 0.8;
`
