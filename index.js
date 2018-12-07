import { AppRegistry,YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
//  */
// import AuthenticationFlowsBasics from './src/authenticationFlows/AuthenticationFlowsBasics';
// AppRegistry.registerComponent('MyReactNavigationDemo', () => AuthenticationFlowsBasics);

/**
 * 2018-11-21
 * chenlw
 * work：基于路由的不同状态栏设置
 */
// import StatusBarSettingBasics from './src/statusBarSetting/StatusBarSettingBasics';
// import StatusBarSettingBasics_1 from './src/statusBarSetting/StatusBarSettingBasics_1';
// AppRegistry.registerComponent('MyReactNavigationDemo', () => StatusBarSettingBasics_1);



// /**
//  * 2018-12-7
//  * chenlw
//  * work：试IOS端的页眉切换效果
//  *
//  * 将navigation添加到Tab navigator，将TabBar设为隐藏。具体取决于哪个路由处于活动状态。
//  * 存在的问题：反复切换TabBar的可见性，看起来会很奇怪。我们应该只设置TabBar是可见的。
//  *
//  */
// import AppRootNavigator from './src/customBottomNavigator/AppRootNavigator';
// AppRegistry.registerComponent('MyReactNavigationDemo', () => AppRootNavigator);

/**
 * 2018-12-7
 * chenlw
 * work：试IOS端的页眉切换效果
 *
 *
 */
import AppRootNavigator from './src/customBottomNavigator1/AppRootNavigator';
AppRegistry.registerComponent('MyReactNavigationDemo', () => AppRootNavigator);



