import React, { Component } from 'react'
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
	View,
} from 'react-native'
import Deck from './Deck.component'
import { Constants } from 'expo'
import { getDecks, callCallbacks } from '../utils/data';

class Decks extends Component {
	state = {
		decks: [],
		lastupdated: null,
	}

	async componentDidMount() {
		const { updateDecks } = this
		const { navigation } = this.props

		getDecks(updateDecks)

		navigation.addListener('willFocus', callCallbacks)
	}

	updateDecks = (decks) => {
		this.setState({
			decks,
			lastupdated: new Date(),
		})
	}

	onDeckPressHandler = (deck) => {
		const { navigation } = this.props

		navigation.navigate('DeckDetail', {
			deck
		})
	}

	onAddDeckPressHandler = () => {
		const { navigation } = this.props

		navigation.navigate('AddDeck')
	}

	render() {
		const { onDeckPressHandler, onAddDeckPressHandler, state } = this
		const { decks, lastupdated } = state

		return (
			<View style={styles.container}>
				<FlatList
					style={styles.list}
					data={decks}
					extraData={lastupdated}
					keyExtractor={({ id }) => `${id}`}
					renderItem={({ item }) => <Deck data={item} onPress={onDeckPressHandler}/>}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={onAddDeckPressHandler}
				>
					<Text style={styles.buttonLabel}>Create Deck</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	list: {
		flex: 1,
	},
	button: {
		backgroundColor: '#ff4757',
		padding: 15,
	},
	buttonLabel: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default Decks
