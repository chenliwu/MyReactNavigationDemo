import { AppRegistry } from 'react-native';
import App from './App';
import MyStackNavigator from './src/stackNavigator/MyStackNavigator';
import MySwitchNavigator from './src/switchNavigator/MySwitchNavigator';

import StackNavigatorBasics from './src/OldReactNavigation/StackNavigator/StackNavigatorBasics';

AppRegistry.registerComponent('MyReactNavigationDemo', () => StackNavigatorBasics);
