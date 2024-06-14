import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const handleButtonPress = () => {
    // Use a função Speech API do navegador ou de alguma biblioteca para falar
    // aqui você pode usar um pacote como 'expo-speech' se estiver usando Expo
    // Por simplicidade, vou apenas exibir um alerta
    alert("Brasil é melhor que Argentina!");
  };

  return (
    <View style={styles.container}>
      
      <Button mode="contained" onPress={handleButtonPress}>Clique para ver a verdade</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
