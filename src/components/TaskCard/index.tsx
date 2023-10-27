import { CheckBox } from '../CheckBox'
import { TaskCardProps } from '../../types'
import * as S from './styles'
import { useState } from 'react'

const TaskCard = ({ children, handleConcluidTask, taskId }: TaskCardProps) => { 

  const [concluid, setConcluid] = useState(false)

  const handleStatsuTask = () => {
    setConcluid(!concluid)

  }

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
      <S.Image src='../../../public/tarsh.svg'/>
    </S.Wrapper>
  )
}

export { TaskCard }