// import { EmptyTask } from '../../components/EmptyTask'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { HeaderCount } from '../../components/HeaderCount'
import { TaskCard } from '../../components/TaskCard'
import { useState } from 'react'
import * as S from './styles'
import { TaskListProps } from '../../types'

const Home = () => {

  const [taskList, setTaskList] = useState<TaskListProps[]>([])

  console.log(taskList)

  const handleNewtaks = (newTask) => (
    setTaskList([...taskList, {
      id: Math.floor(Math.random()*100),
      newTask,
      concluid: false,
    }])
  )
  
  return ( 
    <S.Container>
      <Header />
      <S.Content>
        <S.WrapperContent>
          <Form onAddTask={handleNewtaks}/>
          <HeaderCount />    
          <S.WrapperToDo>
            {
              taskList.map(({ id, newTask}) => {
                return (
                  <TaskCard concluid key={id}>{newTask}</TaskCard>
                )
              })
            }
          </S.WrapperToDo>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  ) 
} 

export { Home }