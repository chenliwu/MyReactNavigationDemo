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
    createSwitchNavigator
} from 'react-navigation';

import NotificationPage from './pages/NotificationPage';

import MyPage from './pages/MyPage';

import AppTheme from '../theme/theme';

import MyBottomTabBar from './component/MyBottomTabBar';


const MyTabBarComponent = (props) => (<MyBottomTabBar {...props} />);

/**
 * 2018-12-7
 * chenlw
 * work：寻求Tab切换页面的解决方案，以达到IOS端原生Header切换的效果。
 *
 * 添加另一个 Stack Navigator 作为 Tab Navigator 的父级, 并将 Detail 页面放在里面。官方建议这样做。
 * 存在的问题：
 *  （1）header组件只会显示主页栈的header，事实上，每个页面都应当有自己的header组件以响应自己页面的操作。
 *  （2）如果多个页面都使用主页的header组件，将会使得组件的控制逻辑变得很复杂，也不利于维护。
 */
class MainPage extends React.Component {

    // static navigationOptions = ({navigation, screenProps}) => {
    //     console.log(navigation);
    //     return {
    //         title: 'MainPage',
    //         //headerTransparent: true,
    //         //headerBackgroundTransitionPreset:'translate'
    //     };
    // };

    constructor(props) {
        super(props);
        //实现页面隐藏功能
        const hideRouteNames = new Set();
        //hideRouteNames.add("MyPage");
        this.state = {
            hideRouteNames: hideRouteNames,
        }
    }


    switchTabPage = (route) => {
        this.props.navigation.setParams({
            headerTitle: route.routeName
        })
    };

    render() {

        ///消息页面 导航栈
        const NotificationPageNavigator = createStackNavigator(
            {
                NotificationPage: {
                    screen: NotificationPage
                },
            }, {
                initialRouteName: 'NotificationPage',
                initialRouteParams: {
                    navigation: this.props.navigation
                },
                headerMode: 'none'
            }
        );

        ///我的页眉 导航栈
        const MyPageNavigator = createStackNavigator(
            {
                MyPage: {
                    screen: MyPage
                },
            }, {
                initialRouteName: 'MyPage',
                initialRouteParams: {
                    navigation: this.props.navigation
                },
                headerMode: 'none'
            }
        );


        const TabNavigator = createBottomTabNavigator(
            {
                NotificationPage: {
                    screen: NotificationPageNavigator,
                    navigationOptions: {
                        headerTitle: '消息',//对页面的配置
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
                        headerTitle:'我的',
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
                        switchTabPage={this.switchTabPage}
                        {...props}
                        style={{borderTopColor: '#605F60'}}
                    />,
                backBehavior: "none",   //控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
                tabBarOptions: {
                    labelStyle: {    //选项卡标签的样式对象。
                        fontSize: AppTheme.labelFontSizeSM,
                    },
                },
                // tabBarOnPress: (obj: any) => {
                //     console.log('tabBarOnPress');
                //     console.log(obj);
                //     // try {
                //     //     const userData = await AsyncStorage.getItem('USER_INFO');
                //     //     if (userData) {
                //     //         obj.defaultHandler();
                //     //     }
                //     //     else {
                //     //         obj.navigation.navigate('Login');
                //     //     }
                //     // } catch (e) {
                //     //     Toast.show(e.message, 'center', 1000);
                //     // }
                // },
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
