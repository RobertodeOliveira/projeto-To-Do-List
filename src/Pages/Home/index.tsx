// import { EmptyTask } from '../../components/EmptyTask'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { HeaderCount } from '../../components/HeaderCount'
import { TaskCard } from '../../components/TaskCard'
import { useState } from 'react'
import * as S from './styles'
import { ContentProps } from '../../types'

const Home = () => {

  const [taskList, setTask] = useState<ContentProps[]>([])
  console.log(taskList)
  const handleNewtaks = (newTask) => (
    setTask([...taskList, newTask])
  )
  
  return ( 
    <S.Container>
      <Header />
      <S.Content>
        <S.WrapperContent>
          <Form onAddTask={handleNewtaks}/>
          <HeaderCount />    
          <S.WrapperToDo>
            <TaskCard>Preciso trocar o lixo</TaskCard>
          </S.WrapperToDo>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  ) 
} 

export { Home }