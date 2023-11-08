import styled, { css } from "styled-components";
import { Trash } from 'phosphor-react'

type ConluidProps  = {
  onConcluid: boolean;
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 736px;
  height: 72px;

  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  background:  #262626;
  margin-bottom: 1rem;
`

const ContainerText = styled('div')<ConluidProps>`
  ${({onConcluid}) => css`
    position: relative;
    width: 100%;
    margin-left: 0.75rem;
    color: ${onConcluid ? "#808080" : "#F2F2F2"};
    line-height: 19px;
    font-size: 0.875rem;
    overflow-x: unset;
    display: flex;
    align-items: center;
  `}
`

const Text = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
`


const LineOfConluid = styled('hr')<ConluidProps>`
  ${({ onConcluid }) => css`
    display: ${onConcluid ? "block" : "none"};
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

// const IconContainer = styled('span')`

// `

export { 
  Wrapper,
  Button,
  ContainerText,
  LineOfConluid,
  Text,
  StylesIconTrash
 }