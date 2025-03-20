import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from "react-native";


export default function PokeItem({ poke }) {

    return (
      <View style={styles.container}>
        <Text style={styles.title} >{poke.name}</Text>
        <Text style={styles.info} >{poke.id}</Text>
        <Image style={styles.image} source={{ uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`  }} />
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginHorizontal: 20,
    
    },
    image: { width: 150, height: 150, borderRadius: 10, marginBottom:20 },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    temperament: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 15,
      textAlign: "center",
      color: "#555"

    },
    info: {
      fontSize: 14,
      marginTop: 15,
      textAlign: "center",
      fontWeight: "normal",
      color: "#222"
    },

  });