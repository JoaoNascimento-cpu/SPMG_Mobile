import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, Text, TouchableOpacity, View } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import api from '../services/api';
import jwtDecode from 'jwt-decode';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    }

  }
  Login = async () => {
    console.warn(this.state.email + '' + this.state.senha)

    try {

      const resp = await api.post('/Login', {
        email: this.state.email,
        senha: this.state.senha
      });

      const token = resposta.data.token;
            
      console.warn(token);
            
      await AsyncStorage.setItem('userToken', token);
            
      this.props.navigation.navigate('main');

    } catch (error) {
      console.warn(error)
    }
  }
  render() {
    return (
      <View >

        <TextInput
          
          placeholder="Email"
          placeholderTextColor="white"
          keyboardType='email-address'
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          
          placeholder="Senha"
          placeholderTextColor="white"
          secureTextEntry={true}
          keyboardType='email-address'
          onChangeText={senha => this.setState({ senha })}
        />

        <TouchableOpacity onPress={this.login}>
          <Text >login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}