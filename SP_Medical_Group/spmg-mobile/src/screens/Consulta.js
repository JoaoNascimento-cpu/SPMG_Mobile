import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Image, FlatList, Text, View, ScrollView } from 'react-native';
import api from '../services/api';

export default class Consulta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaMed: []
        }
    }

    listaMed = async () => {
        const valorToken = await AsyncStorage.getItem('usuarioToken');

        const resp = await api.get('/Consulta/MedicoConsultas', {
            headers: {
                'Authorization': 'Bearer ' + valorToken
            }
        });

        const dadosApi = resp.data;
        this.setState({ listaMed: dadosApi })
    }

    componentDidMount() {
        this.listaMed()
    }

    render() {
        return (
            <View>

                <View >
                    <Text>consultas</Text>
                </View>

                <ScrollView>

                    <FlatList
                        data={this.state.listaMed}
                        keyExtractor={item => item.idConsulta}
                        renderItem={this.renderItem}
                    />

                </ScrollView>

            </View>
        )
    }

    renderItem = ({ item }) => (
        <ScrollView>

            <View>

                <View>
                    <Text >paciente:</Text>
                    <Text >situação:</Text>
                    <Text >exames:</Text>
                    <Text >dia:</Text>
                </View>

                <View >
                    <Text >{item.idPacienteNavigation.nomePaciente}</Text>
                    <Text>{item.idSituacaoNavigation.tipoSituacao}</Text>
                    <Text >{item.consultas}</Text>
                    
                </View>
            </View>
        </ScrollView>


    )
}