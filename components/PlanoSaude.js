import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CheckboxGroup from './CheckboxGroup';

const PlanoSaude = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    'Sim',
    'Não'
  ];

  return (
    <View style={styles.container}>
      <CheckboxGroup
        title="Você possui seguro saúde?"
        options={options}
        selectedOptions={selectedOptions}
        onSelectionChange={setSelectedOptions}
      />
      <Button title="Concluir cadastro" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default PlanoSaude;