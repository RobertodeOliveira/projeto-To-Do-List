import styled, { css } from "styled-components";

type TextStyleProps = {
  color?: string
  weight?: number
  fontSize?: string
}

const Text = styled('p')<TextStyleProps>`
  ${({ color, weight, fontSize }) => css `
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${weight};
    // font-weight: 700;
  `}
  
`

export { Text  }