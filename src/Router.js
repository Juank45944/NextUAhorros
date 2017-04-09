import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Inicio from './componentes/Inicio';
import Periodicos from './componentes/Periodicos';
import Acciones from './componentes/Acciones';
import Login from './componentes/Login';
import Registro from './componentes/Registro';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 70 }}>
            <Scene
                key="Inicio"
                component={Inicio}
                title="Inicio"
                initial
            />
            <Scene
                key="Periodicos"
                component={Periodicos}
                title="Movimientos Periódicos"
            />
            <Scene
                key="Acciones"
                component={Acciones}
                title="Acciones"
            />
            <Scene
                key="Login"
                component={Login}
                title="Inicia Sesión"
                rightTitle="Regístrate"
                onRight={() => Actions.Registro()}
            />
            <Scene
                key="Registro"
                component={Registro}
                title="Regístrate"
            />
        </Router>
    );
};

export default RouterComponent;
