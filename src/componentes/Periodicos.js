import React, { Component } from 'react';
import { View, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { BarraInferior } from './lib';
import Movimiento from './Movimiento';
import TituloMovimiento from './TituloMovimiento';

class Periodicos extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.periodicos);
    }
    mostrarIngreso(movimiento) {
        if (movimiento.esIngreso) {
            return (
                <Movimiento
                    titulo={movimiento.titulo}
                    fechaPago={movimiento.fechaPago}
                    monto={movimiento.monto}
                    isIngreso
                />);
        }
        return <View />;
    }
    mostrarEgreso(movimiento) {
        if (!movimiento.esIngreso) {
            return (
                <Movimiento
                    titulo={movimiento.titulo}
                    fechaPago={movimiento.fechaPago}
                    monto={movimiento.monto}
                    isIngreso={false}
                />);
        }
        return <View />;
    }
    render() {
        const { mainContenedor } = styles;
        return (
            <View>
                <ScrollView style={mainContenedor}>
                    <TituloMovimiento texto="Ingresos" isIngreso />
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.mostrarIngreso}
                    />

                    <TituloMovimiento texto="Egresos" isIngreso={false} />
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.mostrarEgreso}
                    />

                </ScrollView>
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
    mainContenedor: {
        padding: 10,
        paddingTop: 10,
        marginTop: 10,
        height: 520
    }
};

const mapStateToProps = state => ({ periodicos: state.periodicos });

export default connect(mapStateToProps)(Periodicos);
