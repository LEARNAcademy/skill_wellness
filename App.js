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
      <View style={ styles.container }>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  // fontStyles: {
  //   color: 'orange',
  //   fontWeight: 'bold',
  //   fontSize: 100,
  //   textAlign: 'center'
  // },
  // buttonStyle: {
  //   // flex: 1,
  //   // justifyContent: 'flex-end',
  //   position: 'absolute',
  //   bottom: 0,
  //   backgroundColor: 'green',
  //   borderColor: 'black',
  //   width: 400,
  //   height: 70,
  //   borderWidth: 2,
  //   borderRadius: 50,
  //   padding: 12,
  //   textAlign:'center',
  //   opacity: .5,
  // },
});
