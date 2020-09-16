import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CalcButton = ({ operator, operate }) => {
    
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => operate()}
      >
        <Text style={styles.text}>{operator}</Text>
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
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#836953',
      borderRadius: 75,
      paddingBottom: 7,
    },
  });
  

export default CalcButton;