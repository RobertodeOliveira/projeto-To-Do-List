import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: ButtonProps) => { 
  return (
     <S.Button {...props} > 
    {text}
    <S.Icon src='../../../public/icon-plus.svg' /> 
  </S.Button>
  )

}

export { Button }