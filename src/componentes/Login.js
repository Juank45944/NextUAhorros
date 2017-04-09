import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Input, Card, CardSection, Boton, Spinner } from './lib';

class Login extends Component {
    state = { email: '', password: '', error: '', cargando: false };

    enviarFormulario() {
        const { email, password } = this.state;
        this.setState({ cargando: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginExitoso.bind(this))
            .catch(this.loginError.bind(this));
    }
    loginError() {
        this.setState({ error: 'Error de autenticación', cargando: false });
    }
    loginExitoso() {
        this.setState({ cargando: false });
        console.log('logged in');
    }
    mostrarBoton() {
        if (this.state.cargando) {
            return <Spinner />;
        }
        return (
            <Boton onPress={this.enviarFormulario.bind(this)}>
                <Text>Iniciar Sesión</Text>
            </Boton>
        );
    }

    render() {
        return (
            <View>
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
                        {this.mostrarBoton()}
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
