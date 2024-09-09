import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.View`
  width: 305px; 
  height: 305px;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid #000;
  background-color: #fff; 
`;

export const Cell = styled(TouchableOpacity)`
  width: 100px; 
  height: 100px; 
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

 export const CellText = styled(Text)`
 font-size: 36px;
 font-weight: bold;
`;