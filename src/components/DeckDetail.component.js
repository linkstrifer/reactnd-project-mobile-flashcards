import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import Button from './Button.component'

class DeckDetail extends PureComponent {
	onAddCardPressHandler = () => {
		const { navigation } = this.props
		const deck = navigation.getParam('deck')

		navigation.navigate('AddCard', {
			deck
		})
	}

	onQuizPressHandler = () => {
		const { navigation } = this.props
		const deck = navigation.getParam('deck')

		navigation.navigate('Quiz', {
			deck
		})
	}

	render() {
		const { onAddCardPressHandler, onQuizPressHandler } = this
		const deck = this.props.navigation.getParam('deck')
		const { title, cards, backgroundColor } = deck

		return (
			<View style={[
				styles.container,
				{
					backgroundColor: backgroundColor,
				}
			]}>
				<Text style={[styles.text, styles.title]}>
					{title}
				</Text>
				<Text style={styles.text}>
					{`${cards.length}`} cards
				</Text>
				<Button label="Add Card" onPress={onAddCardPressHandler} />
				{cards.length > 0 && <Button label="Start Quiz" onPress={onQuizPressHandler} />}
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
		fontSize: 32,
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 15,
	},
})

export default DeckDetail
