import { useState } from 'react'
import * as S from './styles'

type CheckBoxProps = {
  onState: () => void
  handleConcluidTask: (taskId: number) => void 
  taskId: number
}

const CheckBox = ({onState, handleConcluidTask, taskId}: CheckBoxProps) => {
  const [check, setCheck] = useState(true)
  
  const HandleCheck = () => {
    setCheck(!check)
    onState()
    handleConcluidTask(taskId)
  }

  return (
    <>
      <S.ButtonCheckbox onClick={HandleCheck}> 
          <S.Image src={check ? '../../../public/check-empty.svg' : '../../../public/check.svg'}/>
      </S.ButtonCheckbox>
    </>
  )
} 

export { CheckBox }