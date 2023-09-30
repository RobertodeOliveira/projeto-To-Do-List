import * as S from './styles'

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => { 
  return (
     <S.Button>
    {text}
    <S.Icon src='../../../public/icon-plus.svg' /> 
  </S.Button>
  )

}

export { Button }