import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'

import CardDetail from './src/components/CardDetail.component'
import DeckDetail from './src/components/DeckDetail.component'
import Decks from './src/components/Decks.component'
import AddDeck from './src/components/AddDeck.component'

const Routes = createStackNavigator({
  Decks,
  AddDeck,
  DeckDetail,
  CardDetail,
}, {
  headerMode: 'none',
})

export default class App extends Component {
  render() {
    return <Routes />
  }
}
