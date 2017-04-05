import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Input, Card, CardSection, Boton, Encabezado, Spinner } from './lib';

class Login extends Component {
    state = { email: '', password: '', passwordRepeat: '', error: '', cargando: false };

    enviarFormulario() {
        this.setState({ cargando: true });
        const { email, password, passwordRepeat } = this.state;
        if (password === passwordRepeat) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.registroExitoso.bind(this))
                .catch(this.registroFallido.bind(this));
        } else this.setState({ error: 'Las contraseñas no coinciden ', cargando: false });
    }
    registroFallido() {
        this.setState({ error: 'Ha ocurrido un error en el registro', cargando: false });
    }
    registroExitoso() {
        this.setState({ cargando: false });
        console.log('registered');
    }

    mostrarBoton() {
        if (this.state.cargando) {
            return <Spinner />;
        }
        return (
            <Boton onPress={this.enviarFormulario.bind(this)}>
                <Text>Enviar</Text>
            </Boton>
        );
    }


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
        marginTop: 130,
        marginLeft: 20,
        marginRight: 20
    }
};

export default Login;
