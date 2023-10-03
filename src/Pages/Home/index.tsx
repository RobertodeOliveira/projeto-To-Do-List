import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TaskCard } from '../../components/TaskCard'
import { Text } from '../../components/Text'
import * as S from './styles'

const Home = () => {
  return ( 
    <S.WrapperContainer>
      <S.Header>
        <S.WrapperHeader>
        <S.Image width='22px' heigth='36px' src="../../../public/rocket.svg" />
        <p><span>to</span>do</p>
        </S.WrapperHeader>
      </S.Header>

      <S.Content>
        <S.WrapperContent>
          <S.WrapperForm>
            <Input />
            <Button text='Criar'/>
          </S.WrapperForm>

          <S.ContentHeader>
            <S.WapperContentHeaderTasks>
              <Text color='#4EA8DE' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
              <Badge />
            </S.WapperContentHeaderTasks>
            <S.WapperContentHeaderTasks>
              <Text color='#8284FA' text='Tarefas criadas' weight={700} fontSize='0.875rem'/>
              <Badge />
            </S.WapperContentHeaderTasks>
          </S.ContentHeader>

          <S.WrapperToDo>
            {/* <S.Image width='56px' heigth='56px' src='../../../public/Clipboard.png' /> 
            <Text text='Você ainda não tem tarefas cadastradas' color='#808080' weight={700} fontSize='1rem'/>
            <Text text='Crie tarefas e organize seus itens a fazer' color='#808080' fontSize='1rem'/> */}
            <TaskCard>Preciso trocar o lixo</TaskCard>
          </S.WrapperToDo>
        </S.WrapperContent>

      </S.Content>
    </S.WrapperContainer>
  ) 
} 

export { Home }