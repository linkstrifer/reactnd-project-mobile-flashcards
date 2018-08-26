import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
} from 'react-native'

class Input extends PureComponent {
	render() {
		return (
			<TextInput
				style={styles.input}
				{...this.props}
			/>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		borderBottomColor: '#dfe4ea',
		borderBottomWidth: 1,
		fontSize: 20,
		margin: 15,
		padding: 15,
		width: 250,
	},
})

export default Input
