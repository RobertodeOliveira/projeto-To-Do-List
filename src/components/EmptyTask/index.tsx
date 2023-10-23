import * as S from './styles'
import { Text } from '../Text'

const EmptyTask = () => {
  return ( 
      <S.WrapperToDo>
        <S.Image width='56px' heigth='56px' src='../../../public/Clipboard.png' /> 
        <Text text='Você ainda não tem tarefas cadastradas' color='#808080' weight={700} fontSize='1rem'/>
        <Text text='Crie tarefas e organize seus itens a fazer' color='#808080' fontSize='1rem'/> 
      </S.WrapperToDo>
  )
} 

export { EmptyTask }