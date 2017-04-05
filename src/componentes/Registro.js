import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Card, CardSection, Boton, Encabezado } from './lib';

class Login extends Component {
    state = { email: '', password: '', passwordRepeat: '', error: '' };
    render() {
        return (
            <View>
                <Encabezado tituloEncabezado="Regístrate" />
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

                    <CardSection>
                        <Input
                            texto={'Confirma la contraseña'}
                            value={this.state.passwordRepeat}
                            onChangeText={passwordRepeat => this.setState({ passwordRepeat })}
                            placeholder='contraseña'
                            secureTextEntry
                        />
                    </CardSection>

                    <Text style={styles.errorMsgStyle}>{this.state.error}</Text>

                    <CardSection>
                        <Boton>
                            <Text>Enviar</Text>
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
        marginTop: 130,
        marginLeft: 20,
        marginRight: 20
    }
};

export default Login;
