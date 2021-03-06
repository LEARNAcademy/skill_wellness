import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Status from './Status'


function ActivityCard({ activity }){
  return(
    <Card
      style={ styles }
      title={ activity.title }
      image={{ uri:activity.image }}
    >
      <Text style={{ marginBottom: 10 }}>
        { activity.subtitle }
      </Text>
      <Text>{ activity.description }</Text>
      <Status value={activity.status} />
      <Button
        icon={ <Icon name='code' color='#ffffff' /> }
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='VIEW NOW'
      />
    </Card>
  )

  const styles = StyleSheet.create({

  });
}

export default ActivityCard
