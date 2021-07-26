import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Context2 from './Context2'
import { CharacterContext } from '../context/PeopleProvider'

function Context1() {
  const people = useContext(CharacterContext)
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <View style={styles.mapView}>
              <Text style={styles.people}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <Context2 people={people} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  mapView: {
    paddingBottom: 10,
    // backgroundColor: 'red',
  },
  people: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    width: '100%',
    height: '100%',
  },
})

export default Context1
