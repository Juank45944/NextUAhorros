import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../actions';
import { Card, CardSection, Boton } from './lib';

class Movimiento extends Component {
    tipoMov() {
        if (this.props.isIngreso) {
            return { backgroundColor: '#ABFF4F' };
        }
        return { backgroundColor: '#F0687F' };
    }

    checkIfRender() {
        const { titulo, fechaPago, monto } = this.props;
        const { tituloStyle,
            contenidoStyle,
            textoStyle,
            botonesContenedorStyle,
            botonStyle,
            cardStyle } = styles;
        let found = false;
        for (const mov of this.props.periodicos) {
            if (mov.titulo === this.props.titulo) {
                found = true;
            }
        }
        if (!found) {
            return <View />;
        }
        return (
            <Card addStyle={cardStyle}>
                <CardSection addStyle={this.tipoMov()}>
                    <Text style={tituloStyle}>{titulo}</Text>
                </CardSection>
                <CardSection>
                    <View>
                        <View style={contenidoStyle}>
                            <View style={textoStyle}>
                                <Text>Fecha de pago:</Text>
                            </View>
                            <View style={textoStyle}>
                                <Text>{fechaPago}</Text>
                            </View>
                        </View>
                        <View style={contenidoStyle}>
                            <View style={textoStyle}>
                                <Text>Monto:</Text>
                            </View>
                            <View style={textoStyle}>
                                <Text>{monto}</Text>
                            </View>
                        </View>
                    </View>
                </CardSection>
                <CardSection style={botonesContenedorStyle}>
                    <Boton style={botonStyle}>
                        <Icon name="ios-create" size={20} color="#08BDBD" />
                    </Boton>
                    <Boton onPress={() => this.props.eliminarMovimiento(titulo)}>
                        <Icon name="ios-trash" size={20} color="#08BDBD" />
                    </Boton>
                </CardSection>
            </Card>
        );
    }

    render() {     
        return (
            this.checkIfRender()
        );
    }
}

const styles = {
    tituloStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    contenidoStyle: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20
    },
    textoStyle: {
        width: '50%'
    },
    botonesContenedorStyle: {
        flexDirection: 'row'
    },
    botonStyle: {
        flex: 1
    },
    cardStyle: {
        marginBottom: 10
    }
};

const mapStateToProps = state => ({ periodicos: state.periodicos });

export default connect(mapStateToProps, actions)(Movimiento);
