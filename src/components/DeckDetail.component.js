import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import Button from './Button.component';

class DeckDetail extends PureComponent {
	render() {
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
				<Button label="Add Card" />
				<Button label="Start Quiz" />
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
	button: {
		backgroundColor: '#ff4757',
		borderRadius: 30,
		marginTop: 15,
		width: 150,
		padding: 15,
	},
	buttonLabel: {
		color: 'white',
		
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
