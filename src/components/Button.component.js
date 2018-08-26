import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native'

class Button extends PureComponent {
	render() {
		const { label } = this.props

		return (
			<TouchableOpacity
				style={styles.button}
				{...this.props}
			>
				<Text style={styles.buttonLabel}>
					{label}
				</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#ff4757',
		borderRadius: 30,
		marginTop: 15,
		width: 150,
		padding: 15,
	},
	buttonLabel: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default Button
