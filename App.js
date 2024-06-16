import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import CadastroCliente from './components/CadastroCliente';
import InformacoesSaude from './components/InformacoesSaude';
import PlanoSaude from './components/PlanoSaude';
import DadosPlanoSaude from './components/DadosPlanoSaude';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <CadastroCliente />
      <InformacoesSaude />
      <PlanoSaude />
      <DadosPlanoSaude />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});