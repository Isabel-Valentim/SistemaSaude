import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import CadastroCliente from './components/CadastroCliente';
import InformacoesSaude from './components/InformacoesSaude';
import Preferencias from './components/Preferencias';
import PlanoSaude from './components/PlanoSaude';
import DadosPlanoSaude from './components/DadosPlanoSaude';
import Perfil from './components/Perfil';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <CadastroCliente />
      <InformacoesSaude />
      <Preferencias />
      <PlanoSaude />
      <DadosPlanoSaude />
      <Perfil />
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