import React from 'react'
import {
  Text,
  View
} from 'react-native'

function Status(props){
  return (
    <View>
      <Text>{props.value}</Text>
    </View>
  )
}
export default Status
