import * as S from './styles'
// import { useState } from 'react'

type BadgePprops = {
  count: number
}

const Badge = ({count}:BadgePprops) => {
  // const [ count, setCount ] = useState()

  return (
    <S.Wrapper>{count}</S.Wrapper>
  )
}

export { Badge }