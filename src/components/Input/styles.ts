import styled from "styled-components";


const Input = styled('input')`
  width: 736px;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #262626;
  color: white;
  border: none;
  border-
  
  &:focus {
    outline: none;
  }

  ::placeholder{
    color: red;
  }
`

export { Input }