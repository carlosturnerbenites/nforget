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
	ListItem,
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
		console.warn(name)
		return (
			<ListItem>
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
			</ListItem>
		);
	}
}

const styles = StyleSheet.create({
	name: {
		color: 'gray',
	}
});