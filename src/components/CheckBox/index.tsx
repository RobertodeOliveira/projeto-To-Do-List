import { useState } from 'react'
import * as S from './styles'
// import { CheckBoxProps } from '../../types'


const CheckBox = ({onState}) => {
  console.log(onState)
  const [check, setCheck] = useState(true)
  const HandleCheck = () => {
    setCheck(!check)
    onState()
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