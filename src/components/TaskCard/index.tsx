import * as S from './styles'

import { CheckBox } from '../CheckBox'
import { TaskCardProps } from '../../types'
import { useState } from 'react'
import { Trash } from 'phosphor-react'

const TaskCard = ({ children, handleConcluidTask, taskId, onDelete }: TaskCardProps) => { 

  console.log(taskId)
  const [concluid, setConcluid] = useState(false)

  const handleStatsuTask = () => {
    setConcluid(!concluid)
  }

  const handleDeleteTask = () => {
    onDelete(taskId)
  }  
  // console.log(onDelete)

  console.log(concluid)
  // console.log(concluid)
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
        {/* <Trash size={14} color='#808080'/> */}
        {/* <S.IconContainer> */}
          <S.StylesIconTrash name='Trash' size={20}  />
        {/* </S.IconContainer> */}
      </S.Button>
    </S.Wrapper>
  )
}

export { TaskCard }