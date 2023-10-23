import styled, { css } from "styled-components"
import { ImageProps } from "../../types"

const Image = styled('img')<ImageProps>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`

const WrapperToDo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  :first-child{ 
    margin-bottom: 1rem;
  }

  width: 100%;
  padding: 4rem 1.5rem;
  border-top: 1px solid #333;
  margin-top: 1.5625rem;
  border-radius: 8px;
  
`

export { Image, WrapperToDo } 