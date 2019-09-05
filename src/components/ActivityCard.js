import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

function ActivityCard({ activity }){
  return(
    <View>
      <Text>{activity.title}</Text>
      <Text>{activity.subtitle}</Text>
      <Text>{activity.description}</Text>
      <Image source={{uri:activity.image}} style={{width:50, height:50}}/>
      <Text>{activity.status}</Text>
    </View>
  )
}


export default ActivityCard
