import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet,Text } from "react-native";
import DogList from "../components/DogList";

const API_KEY = "live_thK8V61HPmX5SxgL3UjAQVBs7iYMHNvnkMdMMTjdo2tB7tj2lxMm2Wrxhgka2tRq";
const API_URL = "https://api.thedogapi.com/v1/breeds";

export default function DogsScreen() {
  const [dogs, setDogs] = useState([]);


  useEffect(() => {
    fetch(API_URL, { headers: { "x-api-key": API_KEY } })
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error("Error:", error))   
  }, []);

  return (
    <View style={styles.container} >
      <Text style={styles.header}>🐶 Lista de Razas de Perros</Text>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DogList dog={item} />}
        
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
