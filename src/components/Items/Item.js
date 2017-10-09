/**
 * Componenete Item
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { 
	Text,
	Card,
	Left,
	Body,
	Right,
} from 'native-base';

export default class Item extends Component {
	constructor(props) {
		super();

		// Definir valor inicial del state
		this.state = {
			item: props.item
		};
	}

	render() {
		const { name } = this.state.item
		return (
			<Card>
				<Left>
					
				</Left>
				<Body>
					<Text style={styles.name}>{ name } lorem</Text>
				</Body>
				<Right>
					<Text note>3:43 pm</Text>
				</Right>
				<View>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	name: {
		color: 'gray',
	}
});