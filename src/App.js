import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { observer } from 'mobx-react'

import ActivityDetail from './pages/ActivityDetail'

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
        {this.props.store.activities.length > 0 &&
          <ActivityDetail activity={this.props.store.activities[0]} />
        }
      </View>
    );
  }
}

export default App
