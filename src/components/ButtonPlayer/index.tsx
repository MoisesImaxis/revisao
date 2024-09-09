
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  colorTitle: string;
}

export function ButtonPlayer({ title,colorTitle, ...rest }: Props) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Game', { player: title });
  };
  return (
    <Container {...rest} onPress={handlePress}>
      <Icon name="groups" />
      <Title style={{ color: colorTitle }}>
        Player {title}
      </Title>
    </Container>
  )
}
