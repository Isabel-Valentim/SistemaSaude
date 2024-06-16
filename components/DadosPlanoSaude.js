import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DadosPlanoSaude = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plano de Saúde</Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para completar seu cadastro:</Text>
      <TextInput placeholder="Nome da seguradora" style={styles.input} />
      <TextInput placeholder="Número do cartão do plano de saúde" style={styles.input} />
      <TextInput placeholder="Número da apólice" style={styles.input} />
      <TextInput placeholder="Data de validade" style={styles.input} />
      <TextInput placeholder="CPF do titular do plano" style={styles.input} />
      <Button title="Concluir cadastro" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DadosPlanoSaude;