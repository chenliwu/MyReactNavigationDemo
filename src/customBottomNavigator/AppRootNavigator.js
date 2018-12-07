import {
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

/**
 * 主页栈
 */
export default createStackNavigator(
    {
        MainTabNavigator:{
            screen:MainTabNavigator
        },
    },
    {
        initialRouteName:'MainTabNavigator',
        headerMode: 'none',     //主页栈不显示header组件
    }
);