import * as S from './styles'

import { CheckBox } from '../CheckBox'
import { TaskCardProps } from '../../types'
import { useState } from 'react'

const TaskCard = ({ children, handleConcluidTask, taskId, onDelete }: TaskCardProps) => { 
  const [isConcluid, setIsConcluid] = useState(false)

  const handleStatsuTask = () => {
    setIsConcluid(!isConcluid)
  }

  const handleDeleteTask = () => {
    onDelete(taskId)
  }  

  return (
    <S.Wrapper>
      <CheckBox taskId={taskId} handleConcluidTask={handleConcluidTask} onState={handleStatsuTask}/>
      {/* <S.ContainerText Concluid={isConcluid}> */}
        <S.Text Concluid={isConcluid}>
        {/* <S.LineOfConluid Concluid={isConcluid} /> */}
          {children}
        </S.Text>
        {/* </S.ContainerText> */}
      <S.Button onClick={handleDeleteTask}>
          <S.StylesIconTrash name='Trash' size={20}  />
      </S.Button>
    </S.Wrapper>
  )
}

export { TaskCard }