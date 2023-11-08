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

  // console.log(taskList)

  const handleNewtaks = (newTask: string) => (
    setTaskList([...taskList, {
      id: Math.floor(Math.random()*100),
      newTask,
      concluid: false,
    }])
  )

    const countTasksNotConcluid = taskList.length;
  
  const countTasksConcluid = taskList.filter(item => item.concluid).length;

    const handleConcluidTask = (taskId: number) => {
      const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, concluid: !task.concluid } : task
    );
    setTaskList(updatedTaskList);
    }

    console.log(taskList)

    // const handleToggleConcluida = (taskId) => {
    //   const updatedTaskList = taskList.map((task) =>
    //     task.id === taskId ? { ...task, concluida: !task.concluida } : task
    //   );
    //   setTaskList(updatedTaskList);
    // };

    const deleteTask = (taskToDelete: number) => {
      const tasksWithoutDeleteOne = taskList.filter(tasks => {
        return tasks.id !== taskToDelete
      })
      setTaskList(tasksWithoutDeleteOne)
    }

    console.log(taskList)

  return ( 
    <S.Container>
      <Header />
      <S.Content>
        <S.WrapperContent>
          <Form onAddTask={handleNewtaks}/>
          <HeaderCount countTasksConcluid={countTasksConcluid} countTasksNotConcluid={countTasksNotConcluid} />    
          <S.WrapperToDo>
            {
              taskList.map(({ id, newTask}) => {
                return (
                  <TaskCard concluid handleConcluidTask={handleConcluidTask} onDelete={deleteTask} taskId={id} key={id}>{newTask}</TaskCard>
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


    // const updateTaskList = taskList.map( (item) => {
      //   if(item.id === taskId) {
      //     return {
      //       ...item, 
      //       concluid: !item.concluid,

      //   };
      //   }
      //   return item
      // })
      // setTaskList(updateTaskList)