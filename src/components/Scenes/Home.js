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

// Componenete Listado de Items
import ItemsList from './../Items/List';

export default class Home extends Component {

	// Definir valor inicial del state
	state = {
		items: [{id:1,name: 'Boku no Hero'}]
	}

	render() {

		const items = this.state.items

		return (
			<Container style={styles.container}>
				{!items && <ActivityIndicator size="large" />}
				{items && <ItemsList items={items} />}
			</Container>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	}
});