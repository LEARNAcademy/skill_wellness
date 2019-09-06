import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function ActivityCard({ activity }){
  return(
    <Card
      title={activity.title}
      image={{uri:activity.image}}>
      <Text style={{marginBottom: 10}}>
        {activity.subtitle}
      </Text>
      <Text>{activity.description}</Text>
      <Text>{activity.status}</Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>
  )
}


export default ActivityCard
