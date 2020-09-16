import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BigButton = ({ label, operate }) => {
    
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => operate()}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 48,
      fontWeight: '500',
      color:'#bbb',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 75,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#836953',
      borderRadius: 20,
    },
  });
  

export default BigButton;