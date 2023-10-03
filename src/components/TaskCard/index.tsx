import { CheckBox } from '../CheckBox'
import * as S from './styles'

type TaskCardProps = {
  children: string
}

const TaskCard = ({ children }: TaskCardProps) => { 
  return (
    <S.Wrapper>
      <CheckBox />
      <S.ContainerText>{children}</S.ContainerText>
      <S.Image src='../../../public/tarsh.svg'/>
    </S.Wrapper>
  )
}

export { TaskCard }