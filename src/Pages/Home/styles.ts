import styled, { css } from "styled-components";

type ImageProps = { 
  width: string
  heigth: string
}

const WrapperContainer = styled('div')`
  margin: 0 auto;
  width: 1440px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled('div')`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;

  justify-content: center;
  align-items: center;
  background: #0D0D0D;

  gap: 0.75rem;

  P {
    font-size: 2.5rem;
    font-weight: 900;
    color: #5E60CE;
  }
  
  span {
    color: #4EA8DE;
  }
`

const WrapperHeader = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Image = styled('img')<ImageProps>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  background-color:  #1A1A1A;
` 





const WrapperContent = styled('div') `
  width: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentHeader = styled('div') `
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;
`

const WapperContentHeaderTasks = styled('div')`
  display: flex;
  gap: 0.5rem;
`

const WrapperToDo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
/* 
  :first-child{ 
    margin-bottom: 1rem;
  } */

  width: 100%;
  padding: 4rem 1.5rem;
  border-top: 1px solid #333;
  margin-top: 1.5625rem;
  border-radius: 8px;
  
`

export { 
  WrapperContainer,
  Header,
  Image,
  Content,
  WrapperContent,
  WapperContentHeaderTasks,
  WrapperHeader,
  ContentHeader,
  WrapperToDo
}
