
import React, { useState } from 'react';
import { View, Alert, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Container, Cell, CellText } from './styles'; 
import { useNavigation } from '@react-navigation/native';

type CellValue = 'X' | 'O' | null;

const initialBoard: CellValue[] = Array(9).fill(null);

type TableProps = {
  board: CellValue[];
  onPress: (index: number) => void;
};

export default function Table({ board, onPress }: TableProps) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      {board.map((cell, index) => (
        <Cell key={index} onPress={() => onPress(index)}>
          <CellText style={{ color: cell === 'O' ? 'blue' : cell === 'X' ? 'red' : 'black' }}>
            {cell}
            </CellText>
        </Cell>
      ))}
    </Container>
  );
}