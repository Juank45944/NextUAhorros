import React, { Component } from 'react';
import { View } from 'react-native';
import { Encabezado, BarraInferior } from './lib';
import Resumen from './Resumen';

class Inicio extends Component {
    render() {
        return (
            <View>
                <Encabezado tituloEncabezado="Inicio" />
                <Resumen />
                <BarraInferior 
                    primero="ios-home" 
                    segundo="ios-refresh" 
                    tercero="ios-list" 
                    cuarto="ios-person" 
                />
            </View>
        );
    }
}

export default Inicio;
