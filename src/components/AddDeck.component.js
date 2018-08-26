import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import Button from './Button.component';
import Input from './Input.component';
import { saveDeck } from '../utils/data';

class AddDeck extends Component {
	state = {
		title: '',
	}

	onSubmitPressHandler = () => {
		const { title } = this.state
		const { navigation } = this.props

		saveDeck(title)
		navigation.navigate('Decks')
	}

	onCancelPressHandler = () => {
		const { navigation } = this.props

		navigation.goBack()
	}

	render() {
		const { onSubmitPressHandler, onCancelPressHandler } = this
		const { title } = this.state

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Add Deck</Text>
				<Input
					placeholder="Title"
					onChangeText={text => this.setState({ title: text })}
					value={title}
				/>
				<Button
					label="Add"
					onPress={onSubmitPressHandler}
				/>
				<Button
					label="Cancel"
					onPress={onCancelPressHandler}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
})

export default AddDeck
