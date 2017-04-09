import React, { Component } from 'react';
import { View, Text } from 'react-native';
import request from 'superagent';
import { BarraInferior, Card } from './lib';
import ItemListaAccion from './ItemListaAccion';

class Acciones extends Component {
    state = { acciones: [] }
    componentWillMount() {
        request
            .get('https://marketdata.websol.barchart.com/getQuote.json?key=b4a29a5732af428a4e32304bc91407f3&symbols=AAPL,ZC*1,IBM,GOOGL,^EURUSD')
            .end((err, res) => {
                this.setState({ acciones: res.body.results });
            });
    }
    mostrarAcciones() {
        return this.state.acciones.map(accion => 
            <ItemListaAccion
                key={accion.volume}
                nombre={accion.name} 
                cambio={accion.percentChange} 
                aumento={accion.percentChange > 0} 
            />
        );
    }
    render() {
        return (
            <View>
                <Card addStyle={styles.cardStyles}>
                    <View style={styles.headerStyle}>
                        <Text style={styles.headerNameStyle}>Nombre</Text>
                        <Text style={styles.headerItemStyle}>% de Cambio</Text>
                        <Text style={styles.headerItemStyle}>Tipo</Text>
                    </View>
                    {this.mostrarAcciones()}
                    
                </Card>
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

const styles = {
    cardStyles: {
        marginTop: 30,
        minHeight: 400,
        padding: 20,
        marginBottom: 100
    },
    headerStyle: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    headerNameStyle: {
        flex: 2
    },
    headerItemStyle: {
        flex: 1,
        textAlign: 'center'
    }
};

export default Acciones;
