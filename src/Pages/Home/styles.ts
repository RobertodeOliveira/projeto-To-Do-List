import styled from "styled-components";

const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  display: flex;
  background-color:  #1A1A1A;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const WrapperToDo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
/* 
  :first-child{ 
    margin-bottom: 1rem;
  } */

  width: 100%;
  max-height: 350px;
  overflow: auto;
  overflow-x: clip;
  padding: 4rem 1.5rem;
  border-top: 1px solid #333;
  margin-top: 1.5625rem;
  border-radius: 8px;
  
`

export { 
  Container,
  Content,
  WrapperContent,
  WrapperToDo
}
