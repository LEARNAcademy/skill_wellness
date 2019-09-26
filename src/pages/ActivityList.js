import React from 'react'

import {
  View
} from 'react-native'

import ActivityCard from './ActivityCard'

function ActivityList(props){
  return(
    <View>
      {props.activities.map((activity, index) => {
        return (
          <ActivityCard key={ index } activity={ activity }/>
        )
      })}
    </View>
  )
}

export default ActivityList 
