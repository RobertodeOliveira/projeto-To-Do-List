import styled, { css } from "styled-components";

type TextStyleProps = {
  color: string
}

const Text = styled('p')<TextStyleProps>`
  ${({ color }) => css `
    color: ${color}
    font-size: 0.875rem;
    font-weight: 700;
  `}
  
`
// export type { TextStyleProps }

export { Text  }