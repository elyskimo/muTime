import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import Constants from 'expo-constants';
import { Assets } from 'react-navigation-stack';
import * as firebase from "firebase";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Paramètres',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ouvrir Deezer',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// function logout(){
//   firebase.auth().signOut();
// }

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <ImageBackground source={require('../assets/profil.jpg')} style={{width: '100%', height: '100%'}}>
      <Text>Profil</Text>
     </ImageBackground>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: Constants.statusBarHeight,

  },
  item: {
    padding: 5,
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  text: {
    marginVertical: 12,
    textAlign: "center",
    fontSize: 15,
  },
});
