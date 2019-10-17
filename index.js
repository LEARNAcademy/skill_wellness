/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import App from './src/App';
import ObservableActivitiesStore from './stores/ObservableActivitiesStore';
import React from 'react';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => (props) => <App store = {ObservableActivitiesStore} { ...props }/>);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});

