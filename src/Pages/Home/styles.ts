import styled from "styled-components";

const WrapperContainer = styled('div')`
  margin: 0 auto;
  max-width: 1440px;
  background-color: aliceblue;
`
const Header = styled('div')`
  display: flex;
  height: 200px;
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

const imageRocket = styled('img')`
  width: 22px;
  height: 36px;
`

const Content = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #1A1A1A;
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

const Wrapper = styled('div') `
  margin-top: -18px;
`

export { 
  WrapperContainer,
  Header,
  imageRocket,
  Content,
  Input, 
  Wrapper
}
