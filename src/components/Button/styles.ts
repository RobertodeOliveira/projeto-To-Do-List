import styled from "styled-components";

const Button = styled('button')`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  font-weight: 700;
  color: #F2F2F2;
  cursor: pointer;
 
  gap: 0.5rem;
  border: none;
  padding: 1rem;  
  border-radius: 0.5rem;
  background-color: #1E6F9F;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

`

const Icon = styled('img')`
`

export { Button, Icon }