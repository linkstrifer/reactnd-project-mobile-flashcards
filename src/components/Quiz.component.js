import React, { Component, Fragment } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Button from './Button.component'

const initialState = {
	currentCard: 0,
	showAnswer: false,
	correctAnswers: 0,
	incorrectAnswers: 0,
}

let willFocus

class Quiz extends Component {
	state = initialState

	componentDidMount() {
		const { navigation } = this.props

		willFocus = navigation.addListener('willFocus', () => this.setState(initialState))
	}

	componentWillUnmount() {
		willFocus.remove()
	}

	onCorrectIncorrectPressHandler = (correct) => {
		let { currentCard, correctAnswers, incorrectAnswers } = this.state
		const { navigation } = this.props
		const deck = navigation.getParam('deck')
		const { cards } = deck

		if (correct) {
			correctAnswers++
		} else {
			incorrectAnswers++
		}

		currentCard++

		if (currentCard < cards.length) {
			this.setState({
				correctAnswers,
				currentCard,
				incorrectAnswers,
				showAnswer: false,
			})
		} else {
			this.setState({
				correctAnswers,
				incorrectAnswers,
				showAnswer: false,
			})
			navigation.navigate('QuizResults', {
				deck,
				results: {
					correctAnswers,
					incorrectAnswers,
				}
			})
		}
	}

	onBackPressHandler = () => {
		const { navigation } = this.props

		navigation.navigate('DeckDetail')
	}

	render() {
		const { onCorrectIncorrectPressHandler, onBackPressHandler } = this
		const { currentCard, showAnswer } = this.state
		const { navigation } = this.props
		const deck = navigation.getParam('deck')
		const { backgroundColor, cards } = deck
		const { question, answer } = cards[currentCard]

		return (
			<View style={[styles.container, { backgroundColor }]}>
				<TouchableOpacity style={styles.back} onPress={onBackPressHandler}>
					<Ionicons name="ios-arrow-back" size={32} color="white" />
				</TouchableOpacity>
				<View style={styles.card}>
					<Text style={[styles.text, styles.title]}>
						{question}
					</Text>
					{
						showAnswer
						? (
							<Fragment>
								<Text style={styles.text}>
									{answer}
								</Text>
								<Button label="Correct" onPress={() => {onCorrectIncorrectPressHandler(true)}} />
								<Button label="Incorrect" onPress={() => onCorrectIncorrectPressHandler(false)} />
							</Fragment>
						)
						: <Button label="Show Answer" onPress={() => this.setState({ showAnswer: true })} />
					}
					<Text style={[styles.text, styles.remaining]}>
						Remaining cards: {cards.length - currentCard}
					</Text>
				</View>
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
	card: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 15,
		paddingHorizontal: 15,
		paddingVertical: 30,
		width: '80%',
	},
	title: {
		fontSize: 32,
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 15,
	},
	remaining: {
		marginTop: 15,
	},
	back: {
		left: 30,
		position: 'absolute',
		top: 30,
	},
})

export default Quiz
