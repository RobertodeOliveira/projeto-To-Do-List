// import { Input } from '../../components/Input'
import * as S from './styles'

const Home = () => {
  return ( 
    <S.WrapperContainer>
      <S.Header>
        {/* <img src="../../../public/rocket.svg" style={{width: "25px"}} alt="" /> */}
        <S.imageRocket src="../../../public/rocket.svg" />
        <p><span>to</span>do</p>
      </S.Header>
      <S.Content>
        <S.Wrapper>
          {/* <Input /> */}
        </S.Wrapper>
        <S.Input autoComplete='on' placeholder='Adicione uma tarefa' />
        <h1>Qualquer coisa</h1>
      </S.Content>
    </S.WrapperContainer>
  ) 
} 

export { Home }