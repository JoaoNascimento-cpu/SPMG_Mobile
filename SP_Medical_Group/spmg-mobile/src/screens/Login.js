import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, Text, TouchableOpacity, View} from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import api from '../services/api';
import jwtDecode from 'jwt-decode';

export default class Login extends Component () {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      senha : ''
    }

  }
  Login = async () =>{
    console.warn(this.state.email + '' + this.state.senha)

    try {
      
      const resp = await api.post('/Login' , {
        email : this.state.email,
        senha : this.state.senha
      });

      const token = resp.data.token;

      console.warn(token)

      await AsyncStorage.setItem('usuarioToken', token)

      var decoded = jwtDecode(token).role;

      console.warn(decoded)

      if (decoded === "2") {
        this.props.navigation.navigate('medico')
      }

      if (decoded === "3") {
        this.props.navigation.navigate('paciente')
      }

    } catch (error) {
      console.warn(error)
    }   
  } 
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.inputsLogin}>
              <TextInput
                  style={styles.mainInput}
                  placeholder="Email"
                  placeholderTextColor="white"
                  keyboardType='email-address'
                  onChangeText={email => this.setState({email})}
                  />

                  <TextInput
                  style={styles.mainInput}
                  placeholder="Senha"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  keyboardType='email-address'
                  onChangeText={senha => this.setState({senha})}
                  />

                  <TouchableOpacity style={styles.btnStyle} onPress={this.login}>
                      <Text style={styles.btnLogin}>login</Text>
                  </TouchableOpacity>
          </View>
        </View>
    );
  }
}

