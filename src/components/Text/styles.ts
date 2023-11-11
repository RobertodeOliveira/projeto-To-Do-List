import styled, { css } from "styled-components";

type TextStyleProps = {
  color?: string
  weight?: number
  fontSize?: string
}

const Text = styled('p')<TextStyleProps>`
  ${({ color, weight, fontSize }) => css`
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${weight};

    @media(max-width: 768px){
      font-size: 12px;
    }
  `}
  
`

export { Text  }