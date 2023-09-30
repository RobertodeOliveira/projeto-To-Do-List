import * as S from './styles'

type Color = `${string}`

type TextProps = {
  text: string
  color: Color
}

const Text = ({ text, color }: TextProps) => {
  return ( 
    <>
      <S.Text color={color}>{text}</S.Text>
    </>
  )
}

export { Text }