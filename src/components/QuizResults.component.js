import React, { PureComponent, Fragment } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import Button from './Button.component'

class QuizResults extends PureComponent {
	onRestartPressHandler = () => {
		const { navigation } = this.props

		const deck = navigation.getParam('deck')

		navigation.navigate('Quiz', {
			deck,
		})
	}

	onBackPressHandler = () => {
		const { navigation } = this.props

		navigation.navigate('DeckDetail')
	}

	render() {
		const { onRestartPressHandler, onBackPressHandler } = this
		const { navigation } = this.props

		const deck = navigation.getParam('deck')
		const results = navigation.getParam('results')

		const { backgroundColor, cards } = deck
		const { correctAnswers } = results

		return (
			<View style={[styles.container]}>
				<Text style={[styles.text, styles.title]}>
					Results
				</Text>
				<Text style={[styles.text, styles.precent, { color: backgroundColor }]}>
					{ (correctAnswers / cards.length) * 100 } %
				</Text>
				<Text style={[styles.text, { color: backgroundColor }]}>
					{`${correctAnswers}/${cards.length}`}
				</Text>
				<Button label="Restart Quiz" onPress={onRestartPressHandler} />
				<Button label="Back to Deck" onPress={onBackPressHandler} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 48,
		marginBottom: 20,
	},
	precent: {
		fontSize: 56,
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 15,
	},
})

export default QuizResults
