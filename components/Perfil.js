import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pela URL real da imagem
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Carlos Eduardo Pereira Silva, 33</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados pessoais</Text>
        <TouchableOpacity>
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados de saúde</Text>
        <TouchableOpacity>
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plano de saúde</Text>
        <TouchableOpacity>
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferências</Text>
        <TouchableOpacity>
          <AntDesign name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Button title="Excluir Perfil" color="#007bff" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    position: 'relative',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Perfil;