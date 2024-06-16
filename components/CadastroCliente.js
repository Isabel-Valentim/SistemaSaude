import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroCliente = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro Cliente</Text>
        <TextInput placeholder="Nome Completo" style={styles.input} />
        <TextInput placeholder="Data de Nascimento" style={styles.input} />
        <TextInput placeholder="Gênero" style={styles.input} />
        <TextInput placeholder="CPF" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="CEP" style={styles.input} />
        <TextInput placeholder="Número" style={styles.input} />
        <TextInput placeholder="Complemento" style={styles.input} />
        <Button title="Criar Conta" onPress={() => {}} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
  });
  
  export default CadastroCliente;