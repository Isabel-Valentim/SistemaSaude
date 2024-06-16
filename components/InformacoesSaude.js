import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CheckboxGroup from './CheckboxGroup.js'; // Um componente para gerenciar grupos de checkboxes

const InformacoesSaude = () => {
  const [condicoesMedicas, setCondicoesMedicas] = useState([]);
  const [tratamentos, setTratamentos] = useState([]);

  const handleSave = () => {
    console.log('Informações de Saúde Salvas');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações de Saúde</Text>
      <CheckboxGroup
        options={['Diabetes', 'Hipertensão', 'Asma', 'Doença Cardíaca Crônica', 'Depressão', 'Ansiedade']}
        selectedOptions={condicoesMedicas}
        onSelectionChange={setCondicoesMedicas}
        title="Condições Médicas"
      />
      <CheckboxGroup
        options={['Insulina ou Medicação oral', 'Medicamentos anti-hipertensivos', 'Inaladores', 'Antidepressivos', 'Corticosteroides']}
        selectedOptions={tratamentos}
        onSelectionChange={setTratamentos}
        title="Tratamentos Atuais"
      />
      <Button title="Salvar" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InformacoesSaude;