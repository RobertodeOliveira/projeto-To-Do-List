import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Text } from '../../components/Text'
import * as S from './styles'

const Home = () => {
  return ( 
    <S.WrapperContainer>
      <S.Header>
        <S.WrapperHeader>
        <S.imageRocket src="../../../public/rocket.svg" />
        <p><span>to</span>do</p>
        </S.WrapperHeader>
      </S.Header>

      <S.Content>
        <S.WrapperContent>
          <S.WrapperForm>
            <Input />
            <Button text='Criar'/>
          </S.WrapperForm>
        
          <S.WrapperContentHeader>
              <Text color='#4EA8DE' text='Tarefas criadas' />
              <Text color='#4EA8DE' text='Tarefas criadas' />
          </S.WrapperContentHeader>
        </S.WrapperContent>

      </S.Content>
    </S.WrapperContainer>
  ) 
} 

export { Home }