import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Search from './components/search'


/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */
const initialState = {
	counter: 0
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNTER':
			return { counter: state.counter + 1 }
		case 'DECREASE_COUNTER':
			return { counter: state.counter - 1 }
	}
	return state
}

const store = createStore(reducer);
class App extends Component {


	render() {
		return (
			// <Search />
			<Provider store={store}>
				<CounterApp />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: '#294552',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		// fontSize: 20,
		backgroundColor: '#294500',
	}
});

export default App