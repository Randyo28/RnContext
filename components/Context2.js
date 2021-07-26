import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CharacterContext } from '../context/PeopleProvider'

function Context2() {
  const people = useContext(CharacterContext)
  return (
    <View style={styles.container}>
      <Text>{people[0].name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 30,
  },
})

export default Context2
