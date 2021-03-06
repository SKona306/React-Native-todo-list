import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Task's</Text>
        <View style={styles.items}>

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  }, 
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {

  }
})

export default HomePage