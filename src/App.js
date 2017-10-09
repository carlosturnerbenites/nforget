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
import itemAddScene from './components/Items/Add';

export default class App extends Component {

	render() {
		return (
			<Router>
				<Stack key="root" hideNavBar>
					<Stack key="items">
						<Scene key="home" component={HomeScene} />
						<Scene key="detailItem" component={itemDetailScene} />
						<Scene key="addItem" component={itemAddScene} />
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