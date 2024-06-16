import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CheckboxGroup from './CheckboxGroup';

const Preferencias = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const preferences = [
    'Médico Clínico Geral',
    'Psicólogo',
    'Nutricionista',
    'Fisioterapeuta',
    'Dentistas',
    'Medicina do Trabalho',
    'Outro...',
  ];

  return (
    <View style={styles.container}>
      <CheckboxGroup
        title="Preferências"
        options={preferences}
        selectedOptions={selectedPreferences}
        onSelectionChange={setSelectedPreferences}
      />
      <Button title="Continuar" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Preferencias;