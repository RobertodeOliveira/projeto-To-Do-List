import * as S from './styles'
import { Input } from './Input'
import { Button } from '../Button'
import { FromProps } from '../../types'
import { ChangeEvent, useState, FormEvent } from 'react'


const Form = ({onAddTask}:FromProps) => {

  // console.log(onAddTask)
  const [input, setInput] = useState('')

  const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleNewTask = (event: FormEvent) => {
    //Trazer o valor
    event.preventDefault()
    onAddTask(input)  
    setInput("")
  }

  return (
    <S.WrapperForm onSubmit={handleNewTask}>
      <Input name='input' value={input} onChange={handleInputText}  />
      <Button text='Criar' />
    </S.WrapperForm>
  )
}

export { Form }
