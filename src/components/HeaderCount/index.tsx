import * as S from './styles'
import { Text } from '../Text'
import { Badge } from '../Badge'

type HeaderCountProps = {
  countTasksNotConcluid: number
  countTasksConcluid: number
}

const HeaderCount = ({countTasksNotConcluid, countTasksConcluid}: HeaderCountProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Text color='#4EA8DE' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
        <Badge count={countTasksNotConcluid} />
      </S.Content>
      <S.Content>
        <Text color='#8284FA' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
        <Badge  count={countTasksConcluid}/>
    </S.Content>
  </S.Wrapper>
  )
}

export { HeaderCount }