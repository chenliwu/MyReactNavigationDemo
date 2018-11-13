import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBar
} from 'react-navigation-tabs';

import NotificationPage from './NotificationPage';
import MyPage from './MyPage';

import AppTheme from '../theme/theme';

import MyBottomTabBar from './component/MyBottomTabBar';

const MyTabBarComponent = (props) => (<MyBottomTabBar {...props} />);

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        //实现页面隐藏功能
        const hideRouteNames = new Set();
        //hideRouteNames.add("MyPage");
        this.state = {
            hideRouteNames: hideRouteNames,
        }
    }

    render() {
        const TabNavigator = createBottomTabNavigator(
            {
                NotificationPage: {
                    screen: NotificationPage,
                    navigationOptions: {
                        tabBarLabel: "消息", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({ focused, tintColor }) => {
                            //设置获得焦点或、失去焦点显示的图片
                            if (focused) {
                                return (<Image source={require('./../icon/icon_news_yes.png')}></Image>);
                            } else {
                                return (<Image source={require('./../icon/icon_news_no.png')}></Image>);
                            }
                        },
                    }
                },
                MyPage: {
                    screen: MyPage,
                    navigationOptions: {
                        tabBarLabel: "我的", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({ focused, tintColor }) => {
                            //设置获得焦点或、失去焦点显示的图片
                            if (focused) {
                                return (<Image source={require('./../icon/icon_my_yes.png')}></Image>);
                            } else {
                                return (<Image source={require('./../icon/icon_my_no.png')}></Image>);
                            }
                        },
                    }
                },
            },
            {
                initialRouteName: "NotificationPage",
                tabBarComponent: props =>
                    <MyTabBarComponent
                        hideRouteNames={this.state.hideRouteNames}
                        {...props}
                        style={{ borderTopColor: '#605F60' }}
                    />,
                backBehavior: "none",   //控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
                tabBarOptions: {
                    //activeTintColor: 'tomato',  //label和icon的背景色，活跃状态下
                    //inactiveTintColor: 'gray',  //label和icon的背景色，不活跃状态下
                    //activeBackgroundColor:'blue',   //活动选项卡的背景色。
                    //inactiveBackgroundColor:'red',  //非活动选项卡的背景色。
                    labelStyle: {    //选项卡标签的样式对象。
                        fontSize: AppTheme.labelFontSizeSM,
                    },
                    tabStyle: {  //选项卡的样式对象。

                    },
                    style: {    //选项卡栏的样式对象。
                        //backgroundColor: 'blue',
                    },
                },
            }
        );

        return (
            <TabNavigator ></TabNavigator>
        )
    }
}

/**
 * 2018-11-05
 * chenlw
 * work：测试自定义 tabBarComponent
 */

// const TabBarComponent = (props) => (<BottomTabBar {...props} />);

// const TabScreens = createBottomTabNavigator(
//     {
//         tabBarComponent: props =>
//             <TabBarComponent
//                 {...props}
//                 style={{ borderTopColor: '#605F60' }}
//             />,
//     },
// );

export default MainPage;
