import styled, { css } from "styled-components";

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
    max-height: 350px;
    overflow: auto;
    margin-left: 0.75rem;
    color: ${onConcluid ? "#808080" :" #F2F2F2"};
    line-height: 19px;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
  `}
`

type ConluidProps  = {
  onConcluid: boolean;
}

const LineOfConluid = styled('hr')<ConluidProps>`
  ${({ onConcluid }) => css`
    display: ${onConcluid ? "block" : "none"};
    position: absolute;
    width: 100%;
    border-color: #808080;
    z-index: 999;
  `}
`


const Image = styled('img')`
  padding: 0.3125rem 0.375rem;
  height: 0.875rem;
  width: 0.75rem;

  margin-left: 0.75rem;
`

export { 
  Wrapper,
  Image,
  ContainerText,
  LineOfConluid
 }