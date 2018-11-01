import { AppRegistry } from 'react-native';
import App from './App';

import MySwitchNavigator from './src/switchNavigator/MySwitchNavigator';
import StackNavigatorBasics from './src/OldReactNavigation/StackNavigator/StackNavigatorBasics';

//StackNavigator
import StackNavigator from './src/stackNavigator/StackNavigator';
import createStackNavigator from './src/stackNavigator/createStackNavigator';

//SwitchNavigator
import createSwitchNavigator from './src/switchNavigator/createSwitchNavigator';

/**
 * 测试
 */
AppRegistry.registerComponent('MyReactNavigationDemo', () => createSwitchNavigator);
