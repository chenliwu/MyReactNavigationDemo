import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    StackNavigator,
    createStackNavigator
} from 'react-navigation';

import LanuchPage from './../pages/LanuchPage';
import MainPage from './../pages/MainPage';
import LoginPage from './../pages/LoginPage';

/**
 * StackNavigator这个API是react-navigation2.x版本以前的API。
 * StackNavigator方法返回的是一个组件（Component）
 * 
 * （1）StackNavigator创建的页面默认是有页眉的，
 * 
 */
const MyStackNavigator = StackNavigator(
    {
        LanuchPage: LanuchPage,
        MainPage: MainPage,
        LoginPage: LoginPage,
    },
    {
        initialRouteName: "LanuchPage",      //初始化页面
    }
);

/**
 * 2.x版本后新增了createStackNavigator这个方式来创建StackNavigator，它们的方法参数是一样的
 * createStackNavigator方法返回的也是一个组件（Component）
 * 
 * 
 */
const MyStackNavigator1 = createStackNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
            navigationOptions: {
                //这里可以配置navigationOptions，
                //在LanuchPage中也可配置static的navigationOptions，这里的优先级高
                //建议在具体LanuchPage配置navigationOptions
                //headerTitle: "启动页面",
            }
        },
        MainPage: MainPage,
        LoginPage: LoginPage,
    },
    {
        initialRouteName: "LanuchPage",      //初始化页面
        headerLayoutPreset: 'center',        //指定header组件的布局
        navigationOptions: {
            gesturesEnabled: true,   //是否允许使用手势来关闭页面，在 iOS 上默认为true，在 Android 上默认为false。
        }
    }
);

//export default MyStackNavigator;
export default class MyStackNavigatorPage extends React.Component {
    render() {
        return (
            <MyStackNavigator1 />
        )
    }
}

