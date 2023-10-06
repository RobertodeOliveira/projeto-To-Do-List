import styled from "styled-components"

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

const WrapperForm = styled('form') `
  margin-top: -25px;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export { Input, WrapperForm }