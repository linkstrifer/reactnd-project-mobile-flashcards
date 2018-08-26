import { AsyncStorage } from 'react-native'

let callbacks = []
let data = {
	decks: [],
}

function callCallbacks() {
	callbacks.forEach(callback => callback(data.decks))
}

export async function getDecks(callback) {
	callbacks.push(callback)

	// await AsyncStorage.setItem('flashcards:data', JSON.stringify(data))

	try {
		data = await AsyncStorage.getItem('flashcards:data') || data
		data = JSON.parse(data)
	} catch (error) {
		console.log(error)
	}

	console.log(data)

	callCallbacks()
}

export async function getDeck(id) {}

export async function saveDeck(title) {
	data.decks.push({
		cards: [],
		id: new Date().getTime(),
		title,
	})

	try {
		await AsyncStorage.setItem('flashcards:data', JSON.stringify(data))
	} catch (error) {
		console.log(error)
	}

	callCallbacks()
}

export async function addCardToDeck(deck, card) {}
