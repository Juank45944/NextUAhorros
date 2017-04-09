import React, { Component } from 'react';
import { View } from 'react-native';
import { BarraInferior } from './lib';
import Resumen from './Resumen';

class Inicio extends Component {
    render() {
        return (
            <View>
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
