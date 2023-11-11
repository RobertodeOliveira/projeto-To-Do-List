import styled from "styled-components"

const Wrapper = styled('div') `
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;

  @media(max-width: 768px){
    margin-top: 2.5rem;
  }
`
const Content = styled('div')`
  display: flex;
  gap: 0.5rem;
`

export { Wrapper, Content }