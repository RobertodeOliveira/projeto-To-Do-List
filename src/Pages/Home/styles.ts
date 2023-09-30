import styled from "styled-components";

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

const imageRocket = styled('img')`
  width: 22px;
  height: 36px;
`

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  background-color:  #1A1A1A;
` 

const Input = styled('input')`
  width: 736px;
  padding: 1rem;

  background: #262626;
  color: white;
  border: none;

  ::placeholder {
    color: red;
  }

  &:focus{ 
    outline: none;
  }

`

const WrapperForm = styled('div') `
  margin-top: -25px;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

const WrapperContent = styled('div') `
  width: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapperContentHeader = styled('div') `
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #333;
  margin-top: 4rem;
`

export { 
  WrapperContainer,
  Header,
  imageRocket,
  Content,
  Input, 
  WrapperForm,
  WrapperContent,
  WrapperHeader,
  WrapperContentHeader
}
