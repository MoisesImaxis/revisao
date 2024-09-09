import logoImg from '@assets/logo.png';

import {BackButton, BackIcon, Container, Logo } from "./styles";
import { Text, TouchableOpacity } from 'react-native';


type Props = {
    showBackButton?: boolean;
    callbackHome?: ()=>void;
  }
  
  export function Header({ showBackButton = false,callbackHome }: Props) {
    return (
      <Container>
        {
          showBackButton &&
          <BackButton onPress={callbackHome}>
            <BackIcon name='arrow-back-ios' />
          </BackButton>
        }
  
        <Logo source={logoImg} />
      </Container>
    )
  }