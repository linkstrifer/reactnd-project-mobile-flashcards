import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

const colors = [
	'#ffa502',
	'#ff7f50',
	'#ff6b81',
	'#2ed573',
	'#1e90ff',
	'#5352ed',
]

class Deck extends PureComponent {
	getRandomColor = () => Math.floor(Math.random() * (colors.length))

	render() {
		const { getRandomColor } = this
		const { onPress, data } = this.props
		const { title, cards } = data
		const backgroundColor = colors[getRandomColor()]

		return (
			<TouchableOpacity
				style={[
					styles.container,
					{ backgroundColor }
				]}
				onPress={() => onPress({ ...data, backgroundColor })}
			>
				<Text style={[
					styles.text,
					styles.title,
				]}>
					{title}
				</Text>
				<Text style={styles.text}>{`${cards.length}`} cards</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: 15,
		justifyContent: 'center',
		margin: 15,
		minHeight: 200,
		padding: 15,
	},
	text: {
		color: 'white',
		textAlign: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 15,
	},
})

export default Deck
