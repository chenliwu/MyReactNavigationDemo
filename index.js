import { AppRegistry } from 'react-native';

import MySwitchNavigator from './src/switchNavigator/MySwitchNavigator';
import StackNavigatorBasics from './src/OldReactNavigation/StackNavigator/StackNavigatorBasics';

//StackNavigator
import StackNavigator from './src/stackNavigator/StackNavigator';
import createStackNavigator from './src/stackNavigator/createStackNavigator';

//SwitchNavigator
import createSwitchNavigator from './src/switchNavigator/createSwitchNavigator';

/**
 * 测试LanuchPageNavigator
 */
//import LanuchPageNavigator from './src/navigator/LanuchPageNavigator';
//AppRegistry.registerComponent('MyReactNavigationDemo', () => LanuchPageNavigator);

/**
 * 2018-11-02
 * chenlw
 * work：测试APP只使用一个StackNavigator
 */
//import AppNavigator from './src/navigator1/AppNavigator';
//AppRegistry.registerComponent('MyReactNavigationDemo', () => AppNavigator);

// import AppNavigator from './src/navigator1/AppNavigator';
// import App from './src/App';

// AppRegistry.registerComponent('MyReactNavigationDemo', () => App);


/**
 * 2018-11-13
 * chenlw
 * work：测试自定义TabBar
 */
// import customBottomNavigator from './src/customBottomNavigator/MainTabNavigator';
// AppRegistry.registerComponent('MyReactNavigationDemo', () => customBottomNavigator);

/**
 * 2018-11-21
 * chenlw
 * work：测试身份验证流程
 */
import AuthenticationFlowsBasics from './src/authenticationFlows/AuthenticationFlowsBasics';
AppRegistry.registerComponent('MyReactNavigationDemo', () => AuthenticationFlowsBasics);



