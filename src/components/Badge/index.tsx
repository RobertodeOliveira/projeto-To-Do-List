import * as S from './styles'

type BadgePprops = {
  count: number
}

const Badge = ({count}:BadgePprops) => {
  return (
    <S.Wrapper>{count}</S.Wrapper>
  )
}

export { Badge }