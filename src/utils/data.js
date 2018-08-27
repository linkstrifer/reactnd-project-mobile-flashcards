import { AsyncStorage } from 'react-native'

let callbacks = []
let data = {
	decks: [],
}

function callCallbacks() {
	callbacks.forEach(callback => callback([...data.decks]))
}

async function saveData() {
	try {
		await AsyncStorage.setItem('flashcards:data', JSON.stringify(data))
	} catch (error) {
		console.log(error)
	}
}

async function loadData() {
	// await AsyncStorage.setItem('flashcards:data', JSON.stringify(data))

	try {
		data = await AsyncStorage.getItem('flashcards:data') || data
		data = JSON.parse(data)
	} catch (error) {
		console.log(error)
	}

	return
}

export async function getDecks(callback) {
	callbacks.push(callback)

	await loadData()

	callCallbacks()
}

export async function getDeck(id) {}

export async function saveDeck(title) {
	data.decks.push({
		cards: [],
		id: new Date().getTime(),
		title,
	})

	saveData()

	callCallbacks()
}

export async function addCardToDeck(deck, card) {
	data.decks = data.decks.map((deckData) => {
		const newDeck = deckData
		if (newDeck.id === deck.id) {
			newDeck.cards.push(card)
		}

		return newDeck
	})

	saveData()

	callCallbacks()
}
