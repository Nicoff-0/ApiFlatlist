import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from "react-native";


export default function DogItem({ dog }) {

  const imageUrl = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;
  console.log(`URL generada para ${dog.name}: ${imageUrl}`);


    return (
      <View style={styles.container}>
        <Text style={styles.title} >{dog.name}</Text>
        <Image style={styles.image} source={{ uri: imageUrl }} />

        <Text style={styles.temperament} > Temperamento: 
        <Text style={styles.info} >
              {dog.temperament}
          </Text>
        </Text>

        <Text style={styles.temperament} >Origen: <Text style={styles.info}>{dog.origin || "Desconocido"}</Text> </Text>
        
        <Text style={styles.temperament} > Esperanza de vida:  
          <Text style={styles.info} >
              {dog.life_span}
          </Text>
        </Text>
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