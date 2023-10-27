import * as S from './styles'
// import { useState } from 'react'

type BadgePprops = {
  countTasksNotConcluid: number
}

const Badge = ({countTasksNotConcluid}:BadgePprops) => {
  // const [ count, setCount ] = useState()

  return (
    <S.Wrapper>{countTasksNotConcluid}</S.Wrapper>
  )
}

export { Badge }