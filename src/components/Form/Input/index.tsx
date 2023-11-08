import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{}

const Input = ({...props}:InputProps) => {

  return (
    <S.Input type='text' placeholder='Adicione uma tarefa' {...props} />
  )
}

export { Input }