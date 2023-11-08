import * as S from './styles'

import { CheckBox } from '../CheckBox'
import { TaskCardProps } from '../../types'
import { useState } from 'react'

const TaskCard = ({ children, handleConcluidTask, taskId, onDelete }: TaskCardProps) => { 
  const [concluid, setConcluid] = useState(false)

  const handleStatsuTask = () => {
    setConcluid(!concluid)
  }

  const handleDeleteTask = () => {
    onDelete(taskId)
  }  

  return (
    <S.Wrapper>
      <CheckBox taskId={taskId} handleConcluidTask={handleConcluidTask} onState={handleStatsuTask}/>
      <S.ContainerText onConcluid={concluid}>
        <S.Text>
        <S.LineOfConluid onConcluid={concluid} />
          {children}
        </S.Text>
        </S.ContainerText>
      <S.Button onClick={handleDeleteTask}>
          <S.StylesIconTrash name='Trash' size={20}  />
      </S.Button>
    </S.Wrapper>
  )
}

export { TaskCard }