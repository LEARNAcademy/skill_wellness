import React, { Component } from 'react';
import ActivityCard from './src/components/ActivityCard'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { observer } from 'mobx-react'

@observer
class App extends Component{
  constructor(props){
    super(props)
    this.props.store.getActivities()
  }
  render(){
    const store = this.props.store
    return (
      <View>
        {store.activities.map((activity, index) => {
          return (
            <ActivityCard key={ index } activity={ activity }/>
          )
        })}
      </View>
    );
  }
}

export default App
