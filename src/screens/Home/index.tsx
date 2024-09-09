import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Highlight } from '@components/Highlight';
import { Container, Content, HeaderContainer } from './styles';
import { Header } from '@components/Header/Index';
import { ButtonPlayer } from '@components/ButtonPlayer';
import { TouchableOpacity } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  const handlePlayerSelection = (player: 'X' | 'O') => {
    navigation.navigate('Game', { player });
  };

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Highlight title="Jogo da Velha" subtitle="Vamos começar" />
      </HeaderContainer>
      <Content>
        <ButtonPlayer title="X" colorTitle="blue" onPress={() => handlePlayerSelection('X')} />
        <ButtonPlayer title="O" colorTitle="red" onPress={() => handlePlayerSelection('O')} />
      </Content>
    </Container>
  );
}