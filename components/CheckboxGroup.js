import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CheckboxGroup = ({ options, selectedOptions, onSelectionChange, title }) => {

  const toggleSelection = (option) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      onSelectionChange(selectedOptions.filter(item => item !== option));
    } else {
      onSelectionChange([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.checkboxContainer}
          onPress={() => toggleSelection(option)}
        >
          <View style={[styles.checkbox, selectedOptions.includes(option) ? styles.checkboxSelected : null]} />
          <Text style={styles.label}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#777',
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    backgroundColor: '#007bff',
  },
  label: {
    fontSize: 16,
  },
});

export default CheckboxGroup;