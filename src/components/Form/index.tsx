import * as S from './styles'
import { Input } from './Input'
import { Button} from '../Button'
import { ChangeEvent, useState, FormEvent } from 'react'

const Form = () => {

  const [ input, setInput ] = useState('')
  const [ task, setTask ] = useState<any>([])

  // console.log(input)
  console.log(task)

  const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
     setInput(event.target.value)
  }

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault()
    setTask(input)
    setInput('')
  }


  return ( 
    <S.WrapperForm>
      <Input name='input'  onChange={handleInputText}/> 
      <Button text='Criar' onClick={handleNewTask} />
  </S.WrapperForm>
  )
}

export { Form }