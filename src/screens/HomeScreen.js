import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import CalcButton from '../components/CalcButton.js';

const HomeScreen = () => {

    const [operand1, setOperand1] = useState('0')
    const [operand2, setOperand2] = useState('0')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState(0)

    const compute = (operand1, operand2, operator) => {
        switch(operator) {
            case "+":
            setResult(Number(operand1) + Number(operand2));
            break;
            case "−":
            setResult(Number(operand1) - Number(operand2));
            break;
            case "×":
            setResult(Number(operand1) * Number(operand2));
            break;
            case "÷":
            setResult(Number(operand1) / Number(operand2));
            break;
            default:
                Alert.alert('Error', 'Select an Operator.', [{text: 'OK'}]);
                break;
        }
    }
    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.textOutput}>
                <Text style={styles.fontOutput}>{result}</Text>
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.textInput} 
                    keyboardType='number-pad'
                    defaultValue={operand1}
                    value={operand1}
                    onChangeText={(text) => {
                    setOperand1(text);
                    }}
                    clearTextOnFocus
                />
                <Text style={styles.fontOperator} >{operator}</Text>
                <TextInput
                    style={styles.textInput} 
                    keyboardType='number-pad'
                    defaultValue={operand2}
                    value={operand2}
                    onChangeText={(text) => {
                    setOperand2(text);
                    }}
                    clearTextOnFocus
                />
            </View>
            <View style={styles.buttonRow}>
                <CalcButton
                    operate={() => setOperator("+")}
                    operator="+"
                />
                <CalcButton
                    operate={() => setOperator("−")}
                    operator="−"
                />
                <CalcButton
                    operate={() => setOperator("×")}
                    operator="×"
                />
                <CalcButton
                    operate={() => setOperator("÷")}
                    operator="÷"
                />
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.buttonMed}
                    onPress={() => {
                        setOperand1('0');
                        setOperand2('0');
                        setOperator('');
                        setResult(0);
                    }}
                >
                    <Text style={{...styles.fontOperator}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonBig}
                    onPress={() => {
                        compute(operand1, operand2, operator);
                    }}
                >
                    <Text style={{...styles.fontOperator, color: '#fff'}}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#222',
  },
  inputRow: {
    paddingHorizontal: 45,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonRow: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 75,
    width: 125,
    borderColor: '#444',
    backgroundColor: '#999',
    borderWidth: 5,
    margin: 5,
    paddingLeft: 5,
    fontSize: 48,
  },
  textOutput: {
    alignSelf: 'center',
    height: 100,
    width: 350,
    borderColor: '#444',
    backgroundColor: '#999',
    borderWidth: 5,
    paddingLeft: 5,
  },
  fontOutput: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  fontOperator: {
    fontSize: 48,
    fontWeight: '500',
    color:'#bbb',
  },
  buttonMed: {
    height: 75,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A72127',
    borderRadius: 20,
  },
  buttonBig: {
    height: 75,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB347',
    borderRadius: 20,
    paddingBottom: 5,
  },
});

export default HomeScreen;