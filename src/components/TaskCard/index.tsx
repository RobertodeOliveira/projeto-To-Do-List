import { CheckBox } from '../CheckBox'
import { TaskCardProps } from '../../types'
import * as S from './styles'

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