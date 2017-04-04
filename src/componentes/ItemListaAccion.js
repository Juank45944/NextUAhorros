import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ItemListaAccion extends Component {

    iconoTipo() {
        if (this.props.aumento) {
            return <Icon style={styles.itemStyle} name="ios-arrow-up" size={20} color="#42A93B" />;
        }
        return <Icon style={styles.itemStyle} name="ios-arrow-down" size={20} color="#FA3636" />;
    }

    render() {
        const { contenedor, nombreStyle, itemStyle } = styles;
        return (
            <View style={contenedor}>
                <Text style={nombreStyle}>{this.props.nombre}</Text>
                <Text style={itemStyle}>{this.props.cambio.toString()}</Text>
                {this.iconoTipo()}
            </View>
        );
    }
}

const styles = {
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 5
    },
    nombreStyle: {
        flex: 2
    },
    itemStyle: {
        textAlign: 'center',
        flex: 1
    }
};

export default ItemListaAccion;
