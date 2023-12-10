import styled from "styled-components";

const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  /* height: 100vh; */

  display: flex;
  position: fixed;
  background-color:  #1A1A1A;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Content = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 736px;
  background-color: #1A1A1A;

  @media(max-width: 768px){
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
  }
` 

const WrapperContent = styled('div') `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  box-sizing: border-box;
  background-color: yellow;
`

const WrapperToDo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: 300px;
  overflow: auto;
  overflow-x: clip;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  border-top: 1px solid #333;
  margin-top: 1.5625rem;
  border-radius: 8px;
  
  ::-webkit-scrollbar-thumb{
    color: red;
  }

  @media(max-width: 768px){
    margin-top: 1rem;
    max-height: 250px;
  }
`

export { 
  Container,
  Content,
  WrapperContent,
  WrapperToDo
}
