import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import {
  Card,
  ListItem
} from 'react-native-elements'

import Status from '../components/Status'

class ActivityDetail extends Component{
  render(){
    const{ activity } = this.props
    return(
      <View style={styles.container}>
        <Status value={activity.status} />
        <Card
          title={activity.title}
        >
          <View style={styles.imageContainer}>
            <Image 
              source={{uri: activity.image}} 
              style={styles.platformImage}
            />
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle} >{activity.subtitle}</Text>
          </View>
        </Card>

        <View>
          <ListItem
            title="Platform"
            subtitle={activity.platform.description}
            leftAvatar={{source: {uri: activity.platform.avatar}}}
          
          />
          <ListItem
            title="Skill Level"
            subtitle={activity.skillLevel.description}
            leftAvatar={{source: {uri: activity.skillLevel.avatar}}}
          
          />
          <ListItem
            title="Details"
            subtitle={activity.description}
            leftAvatar={{source: {uri: "http://cdn.onlinewebfonts.com/svg/img_501919.png"}}}
            chevron
          
          />

          <ListItem
            title="Expected Outcome"
            subtitle={activity.outcome.description}
            leftAvatar={{source: {uri: activity.outcome.avatar}}}
          
          />
          <ListItem
            title="How to Enroll"
            subtitle={activity.howToEnroll}
            chevron
            leftAvatar={{source: {uri: "http://cdn.onlinewebfonts.com/svg/img_501919.png"}}}
          />

          <ListItem
            title="Cost"
            subtitle={activity.cost.description}
            leftAvatar={{source: {uri: activity.cost.avatar}}}
          />

        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 100,
  },
  subtitleContainer:{
    marginTop: 10,
  },
  subtitle:{
    textAlign: 'center'
  },
  imageContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  platformImage:{
    width: 60, 
    height: 60
  }
})

export default ActivityDetail 
