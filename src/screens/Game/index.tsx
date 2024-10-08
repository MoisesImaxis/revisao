import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Table from '@components/Table';
import { Container, HeaderContainer, Content } from './styles';
import { Header } from '@components/Header/Index';
import { Highlight } from '@components/Highlight';

type RouteParams = {
  player: 'X' | 'O'; 
};

type CellValue = 'X' | 'O' | null;

const initialBoard: CellValue[] = Array(9).fill(null);

export default function Game() {
  const route = useRoute();
  const { player } = route.params as RouteParams;
  const navigation = useNavigation();

  const [board, setBoard] = useState<CellValue[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(player);

  useEffect(() => {
    if (currentPlayer !== player) {
      handleBotMove();
    }
  }, [currentPlayer]);

  const handleCellPress = (index: number) => {
    if (board[index] || checkWinner(board) || currentPlayer !== player) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert(`Player ${winner} wins!`);
      resetGame();
      return;
    }

    if (newBoard.every(cell => cell !== null)) {
      Alert.alert('Empate!');
      resetGame();
      return;
    }


    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleBotMove = () => {
    if (checkWinner(board) || board.every(cell => cell !== null)) return;

    const emptyIndices = board
      .map((cell, index) => (cell === null ? index : null))
      .filter(index => index !== null);

    if (emptyIndices.length === 0) return;

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex as number] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert(`Player ${winner} wins!`);
      resetGame();
      return;
    }

    if (newBoard.every(cell => cell !== null)) {
      Alert.alert('Empate!');
      resetGame();
      return;
    }

    setCurrentPlayer(player);
  };

  const checkWinner = (board: CellValue[]): CellValue => {
    const winningCombination: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombination) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer(player);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton callbackHome={() => handleGoBack()} />
        <Highlight title="Jogo da Velha" subtitle={`Jogador Atual: ${currentPlayer}`} />
      </HeaderContainer>
      <Content>
        <Table board={board} onPress={handleCellPress} />
      </Content>
    </Container>
  );
}
