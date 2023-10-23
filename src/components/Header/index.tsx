import * as S from './styles'

const Header = () => {
  return ( 
    <S.Container>
      <S.WrapperHeader>
        <S.Image width='22px' heigth='36px' src="../../../public/rocket.svg" />
        <p><span>to</span>do</p>
      </S.WrapperHeader>
    </S.Container>
  )
} 

export { Header }