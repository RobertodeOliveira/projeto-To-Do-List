import * as S from './styles'

type TextProps = {
  text: string
  fontSize?: string
  color?: string
  weight?: number
}

const Text = ({ text, color, weight, fontSize }: TextProps) => {
  return ( 
    <>
      <S.Text color={color} weight={weight} fontSize={fontSize}>{text}</S.Text>
    </>
  )
}

export { Text }