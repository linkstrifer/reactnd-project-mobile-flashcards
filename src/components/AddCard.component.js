import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import Button from './Button.component'
import Input from './Input.component'
import { addCardToDeck } from '../utils/data'

class AddCard extends Component {
	state = {
		answer: '',
		question: '',
	}

	constructor(props) {
		super(props)

		this.onSubmitPressHandler = this.onSubmitPressHandler.bind(this)
	}

	async onSubmitPressHandler() {
		const { question, answer } = this.state
		const { navigation } = this.props
		const deck = this.props.navigation.getParam('deck')

		const newDeckData = await addCardToDeck(deck, { question, answer })

		navigation.navigate('DeckDetail', {
			deck: {
				...deck,
				...newDeckData
			}
		})
	}

	onCancelPressHandler = () => {
		const { navigation } = this.props

		navigation.goBack()
	}

	render() {
		const { onSubmitPressHandler, onCancelPressHandler } = this
		const { question, answer } = this.state

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Add Deck</Text>
				<Input
					placeholder="Question"
					onChangeText={question => this.setState({ question })}
					value={question}
				/>
				<Input
					placeholder="Answer"
					onChangeText={answer => this.setState({ answer })}
					value={answer}
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

export default AddCard
