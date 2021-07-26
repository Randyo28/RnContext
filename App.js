import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { PeopleProvider } from './context/PeopleProvider'
import Context1 from './components/Context1'

export default function App() {
  return (
    <View style={styles.container}>
      <PeopleProvider>
        <Context1 />
      </PeopleProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
