import styled, { css } from "styled-components";
import { Trash } from 'phosphor-react'

type Conluid  = {
  Concluid: boolean;
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  /* height: 72px; */

  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  background:  #262626;
  margin-bottom: 1rem;

  @media(max-width: 768px){
    width: 100%;
    max-height: 300px;
  }
`

// const ContainerText = styled('div')<Conluid>`
//   ${({Concluid}) => css`
//     width: 100%;
//     margin-left: 0.75rem;

//     display: flex;
//     flex-wrap: wrap;
    
//     line-height: 19px;
    
//     overflow-x: unset;
//     display: flex;
//     align-items: center;
//   `}
// `

const Text = styled('p')<Conluid>`
${({Concluid}) => css`
  display: flex;
  align-items: center;
  width: 100%;

  text-decoration: ${Concluid ? "line-through" : ""};
  color: ${Concluid ? "#808080" : "#F2F2F2"};
  word-break: break-all;
  font-size: 0.875rem;
  padding: 0.375rem;
  display: flex:;
  flex-wrap: wrap;
  /* text-decoration: line-through; */
`}
`

const LineOfConluid = styled('hr')<Conluid>`
  ${({ Concluid }) => css`
    display: ${Concluid ? "block" : "none"};
    position: absolute;
    width: 100%;
    border-color: #808080;
    z-index: 999;
  `}
`

const StylesIconTrash = styled(Trash)`
  color: #808080;
`

const Button = styled('button')`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  
  padding: 0.3125rem;
  margin-left: 0.75rem;

  &:hover{
    cursor: pointer;
    ${StylesIconTrash} {
     color: red;
    }
  }
`

export { 
  Wrapper,
  Button,
  // ContainerText,
  LineOfConluid,
  Text,
  StylesIconTrash
 }