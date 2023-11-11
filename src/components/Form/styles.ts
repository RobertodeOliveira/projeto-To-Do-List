import styled from "styled-components"

const Input = styled('input')`
  width: 100%;
  padding: 1rem;

  background: #262626;
  color: white;
  border: none;

  &:placeholder {
    color: red;
  }

  &:focus{ 
    outline: none;
  }

  @media(max-width: 768px){}
`

const WrapperForm = styled('form') `
  margin-top: -25px;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

export { Input, WrapperForm }