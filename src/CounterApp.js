import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {

  render() {
    return (
      // <Search />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 200, justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.button, { fontSize: 20 }}> Increase</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, }}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 20 }} >Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER', }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

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
