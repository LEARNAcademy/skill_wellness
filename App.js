import React, { Component } from 'react';
import ActivityCard from './src/components/ActivityCard'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.props.store.addActivity({title: "example", subtitle: "sub-example", description: "blah blah", image: "http://www.iconninja.com/files/463/382/476/development-code-curly-brackets-programming-coding-website-icon.png", status: "available"})
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
