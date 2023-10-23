import styled, { css } from "styled-components";
import { ImageProps } from "../../types";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;

  justify-content: center;
  align-items: center;
  background: #0D0D0D;

  gap: 0.75rem;

  P {
    font-size: 2.5rem;
    font-weight: 900;
    color: #5E60CE;
  }
  
  span {
    color: #4EA8DE;
  }
`

const Image = styled('img')<ImageProps>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`

const WrapperHeader = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export { Container, WrapperHeader, Image }