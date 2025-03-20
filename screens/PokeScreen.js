import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet,Text } from "react-native";
import PokeList from "../components/PokeList";


const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

export default function PokeScreen() {
  const [poke, setPoke] = useState([]);


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPoke(data.results))
      .catch((error) => console.error("Error:", error))   
  }, []);

  return (
    <View style={styles.container} >
      <Text style={styles.header}>Lista de Pokemons</Text>
      <FlatList
        data={poke}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokeList poke={item} />}
        
      />
    </View>
  );
}   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c8c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  
});
