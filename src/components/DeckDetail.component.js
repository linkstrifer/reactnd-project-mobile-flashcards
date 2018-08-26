import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

class DeckDetail extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<Text>Deck title</Text>
				<Text># cards</Text>
				<TouchableOpacity
					style={styles.button}
				>
					<Text tyle={styles.buttonLabel}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
				>
					<Text tyle={styles.buttonLabel}>Start Quiz</Text>
				</TouchableOpacity>
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
})

export default DeckDetail
