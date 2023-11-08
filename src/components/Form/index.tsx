import * as S from './styles'
import { Input } from './Input'
import { Button } from '../Button'
import { FromProps } from '../../types'
import { ChangeEvent, useState, FormEvent, InvalidEvent } from 'react'


const Form = ({onAddTask}:FromProps) => {

  // console.log(onAddTask)
  const [input, setInput] = useState('')

  const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    event.target.setCustomValidity("")
  }

  const handleNewTask = (event: FormEvent) => {
    //Trazer o valor
    event.preventDefault()
    onAddTask(input)  
    setInput("")
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Este campo é obrigatório")
  }

  const inputEmpityDisabled = input.length === 0


  return (
    <S.WrapperForm onSubmit={handleNewTask}>
      <Input name='input' value={input} onChange={handleInputText} onInvalid={handleNewTaskInvalid} required/>
      <Button text='Criar' disabled={inputEmpityDisabled} />
    </S.WrapperForm>
  )
}

export { Form }
