import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'

import AddCard from './src/components/AddCard.component'
import AddDeck from './src/components/AddDeck.component'
import DeckDetail from './src/components/DeckDetail.component'
import Decks from './src/components/Decks.component'
import Quiz from './src/components/Quiz.component'
import QuizResults from './src/components/QuizResults.component'

const Routes = createStackNavigator({
  Decks,
  AddDeck,
  AddCard,
  DeckDetail,
  Quiz,
  QuizResults,
}, {
  headerMode: 'none',
})

export default class App extends Component {
  render() {
    return <Routes />
  }
}
