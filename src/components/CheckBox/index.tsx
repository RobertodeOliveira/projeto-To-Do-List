import { useState } from 'react'
import * as S from './styles'



const CheckBox = () => {
  const [check, setCheck] = useState(false)
  const HandleCheck = () => {
    setCheck(!check)
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