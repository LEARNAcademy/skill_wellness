import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.props.store.addActivity({name: "example"})
  }
  render(){
    const store = this.props.store
    return (
      <View style={ styles.container }>
        {store.activities.map((activity, index) => {
          return (
            <View
              key={index}
            >
              <Text>{activity.name}</Text>
            </View>
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
