import styled from "styled-components";

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 736px;
  height: 72px;

  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  background:  #262626;
`

const ContainerText = styled('div')`
  width: 100%;
  margin-left: 0.75rem;
  color: #F2F2F2;
  line-height: 19px;
  font-size: 0.875rem;
`


const Image = styled('img')`
  padding: 0.3125rem 0.375rem;
  height: 0.875rem;
  width: 0.75rem;
`

export { Wrapper, Image, ContainerText }