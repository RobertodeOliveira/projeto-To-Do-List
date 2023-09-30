import styled from "styled-components";


const Input = styled('input')`
  box-sizing: border-box;
  width: 736px;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #262626;
  color: white;
  border: none;
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #808080;
  }
`

export { Input }