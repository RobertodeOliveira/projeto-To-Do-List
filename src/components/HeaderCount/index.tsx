import * as S from './styles'
import { Text } from '../Text'
import { Badge } from '../Badge'

const HeaderCount = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Text color='#4EA8DE' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
        <Badge />
      </S.Content>
      <S.Content>
        <Text color='#8284FA' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
        <Badge />
    </S.Content>
  </S.Wrapper>
  )
}

export { HeaderCount }