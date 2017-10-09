/**
 * Componenete Contenedor de Listado de Items
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {
	Container,
	Header
} from 'native-base';

import {
	Router,
	Stack,
	Scene,
} from 'react-native-router-flux';

// Componenete Listado de Items
import ItemsList from './components/Items/List';
import LoginScene from './components/Scenes/Login';
import HomeScene from './components/Scenes/Home';
import itemDetailScene from './components/Items/Detail';

export default class App extends Component {

	// Definir valor inicial del state
	state = {
		items: [{id:1,name: 'Boku no Hero'}]
	}

	render() {
		return (
			<Router>
				<Stack key="root" hideNavBar>
					<Stack key="items">
						<Scene key="home" component={HomeScene} />
						<Scene key="detail" component={itemDetailScene} />
					</Stack>
					<Stack key="auth">
						<Scene key="login" component={LoginScene} hideNavBar />
					</Stack>
				</Stack>

			</Router>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	}
});