import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput, FlatList, Text, } from "react-native";
import films from '../Helpers/films_data'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchText } from "../api/tmdb_api";


export default class Search extends Component {
  _loadFilms() {
    getFilmsFromApiWithSearchText("star").then(data => console.log(data))
  }


  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button title="Recherche" onPress={() => { this._loadFilms() }} />
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  }
})