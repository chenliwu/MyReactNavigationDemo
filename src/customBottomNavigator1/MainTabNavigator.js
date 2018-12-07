import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    BottomTabBar
} from 'react-navigation-tabs';

import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';

import NotificationPage from './pages/NotificationPage';
import NotificationDetailsPage from './pages/NotificationDetailsPage';

import MyPage from './pages/MyPage';
import SettingPage from './pages/SettingPage';

import AppTheme from '../theme/theme';

import MyBottomTabBar from './component/MyBottomTabBar';

const MyTabBarComponent = (props) => (<MyBottomTabBar {...props} />);

/**
 * 2018-12-6
 * chenlw
 * work：寻求Tab切换页面的解决方案，以达到IOS端原生Header切换的效果。
 *  Tab navigator 包含 stack navigator，你希望隐藏特定页面上的 tabbar
 *
 *
 */
class MainPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'MainPage'
    };

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

        ///消息页面 导航栈
        const NotificationPageNavigator = createStackNavigator(
            {
                NotificationPage: {
                    screen: NotificationPage
                },
                NotificationDetailsPage: {
                    screen: NotificationDetailsPage
                },
            }, {
                initialRouteName: 'NotificationPage',
            }
        );

        NotificationPageNavigator.navigationOptions = ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }

            return {
                tabBarVisible,
            };
        };

        ///我的页眉 导航栈
        const MyPageNavigator = createStackNavigator(
            {
                MyPage: {
                    screen: MyPage
                },
                SettingPage: {
                    screen: SettingPage
                },
            }, {
                initialRouteName: 'MyPage',
            }
        );

        const TabNavigator = createBottomTabNavigator(
            {
                NotificationPage: {
                    screen: NotificationPageNavigator,
                    navigationOptions: {
                        tabBarLabel: "消息", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({focused, tintColor}) => {
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
                    screen: MyPageNavigator,
                    navigationOptions: {
                        tabBarLabel: "我的", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({focused, tintColor}) => {
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
                        style={{borderTopColor: '#605F60'}}
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
            <TabNavigator/>
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
