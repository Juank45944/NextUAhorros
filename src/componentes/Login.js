import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Card, CardSection, Boton, Encabezado } from './lib';

class Login extends Component {
    state = { email: '', password: '', error: '' };
    render() {
        return (
            <View>
                <Encabezado tituloEncabezado="Bienvenido" />
                <Card addStyle={styles.cardStyle}>
                    <CardSection>
                        <Input
                            texto={'Email'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder={'usuario@mail.com'}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            texto={'Contraseña'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='contraseña'
                            secureTextEntry
                        />
                    </CardSection>

                    <Text style={styles.errorMsgStyle}>{this.state.error}</Text>

                    <CardSection>
                        <Boton>
                            <Text>Iniciar Sesión</Text>
                        </Boton>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    errorMsgStyle: {
        fontSize: 17,
        color: 'red',
        alignSelf: 'center'
    },
    cardStyle: {
        marginTop: 188,
        marginLeft: 20,
        marginRight: 20
    }
};

export default Login;
