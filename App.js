import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={ styles.container }>
      <Image source={require('./coding-icon.png')} style={{width: 100, height: 100, margin: 50}}/>
      <Text style={ styles.fontStyles }>Hello World!</Text>
      <Text>The count is: { count }</Text>
        <View style={ styles.buttonStyle }>
          <Button
            onPress={ () => setCount(count+1) }
            title='Add One!'
            accessibilityLabel='counter button'
            color='#fff'
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  fontStyles: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 100,
    textAlign: 'center'
  },
  buttonStyle: {
    // flex: 1,
    // justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'green',
    borderColor: 'black',
    width: 400,
    height: 70,
    borderWidth: 2,
    borderRadius: 50,
    padding: 12,
    textAlign:'center',
    opacity: .5,
  },
});
