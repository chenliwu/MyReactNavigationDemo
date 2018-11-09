//审批相关页面
import ApprovePage from './pages/Approve/ApprovePage';
import ApproveDetailsPage from './pages/Approve/ApproveDetailsPage';
import ConditionPage from './pages/Approve/ConditionPage';
//报表相关页面
import ChartsPage from './pages/Charts/ChartsPage';
//消息相关页面
import NotificationPage from './pages/Notification/NotificationPage';
import NotificationDetailsPage from './pages/Notification/NotificationDetailsPage';
//我的相关页面
import MyPage from './pages/My/MyPage';
import SettingsPage from './pages/Settings/SettingsPage';
import FaceDetectionPage from './pages/Settings/FaceDetectionPage';
import ProtectTimePage from './pages/Settings/ProtectTimePage';
import UpdateAppPage from './pages/Settings/UpdateAppPage';
import AboutUsPage from './pages/Settings/AboutUsPage';

import MainTabPage from './pages/MainTabPage/MainTabPage';

import { observer, inject } from 'mobx-react/native';

import React from 'react';
import {
    View,
    Image
} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';


import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';
import AppTheme from './../theme/theme';
import MyBottomTabBar from './component/MyBottomTabBar';
const MyTabBarComponent = (props) => (<MyBottomTabBar {...props} />);

@inject("notificationStore", 'appNavigatorStore')
@observer
class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.appNavigatorStore.setMainPageNavigation(this.props.navigation);
    }

    render() {
        const TabNavigator = createBottomTabNavigator(
            {
                ApprovePage: {
                    screen: ApprovePage,
                    navigationOptions: {
                        tabBarLabel: "审批", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({ focused, tintColor }) => {
                            //设置获得焦点或、失去焦点显示的图片
                            if (focused) {
                                return (<Image source={require('./../icon/icon_home_yes.png')}></Image>);
                            } else {
                                return (<Image source={require('./../icon/icon_home_no.png')}></Image>);
                            }
                        },
                    }
                },
                ChartsPage: {
                    screen: ChartsPage,
                    navigationOptions: {
                        //tabBarVisible:false,  //如果设置为false，点击该tab的时候，页面全屏显示。
                        tabBarLabel: "报表", //标签栏或 React 元素中显示的选项卡的标题字符串
                        tabBarIcon: ({ focused, tintColor }) => {
                            //设置获得焦点或、失去焦点显示的图片
                            if (focused) {
                                return (<Image source={require('./../icon/icon_report_yes.png')}></Image>);
                            } else {
                                return (<Image source={require('./../icon/icon_report_no.png')}></Image>);
                            }
                        },
                        // tabBarButtonComponent:  //自定义导航按钮
                        //     (props) => {
                        //         return (
                        //             <View>
                        //                 <Text>tabBarButtonComponent:</Text>
                        //             </View>
                        //         );

                        //     },
                    }
                },
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
                initialRouteName: "ApprovePage",
                tabBarComponent: props =>
                    <MyTabBarComponent
                        {...props}
                        style={{ borderTopColor: '#605F60' }}
                    />,
                backBehavior: "none",   //控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
                tabBarOptions: {
                    labelStyle: {    //选项卡标签的样式对象。
                        fontSize: AppTheme.labelFontSizeSM,
                    },

                },
            }
        );

        return (
            <TabNavigator ></TabNavigator>
        )
    }
}


const MainPageNavigator = createStackNavigator(
    {
        MainPage: {
            //主页tab
            screen: MainTabPage,
            navigationOptions: {
                header: null,
            }
        },
        ApproveDetailsPage: {
            //审批详情页面
            screen: ApproveDetailsPage,
        },
        ConditionPage: {
            //筛选条件页面
            screen: ConditionPage,
        },

        ChartsPage: {
            //报表详情页面
            screen: ChartsPage
        },

        NotificationDetailsPage: {
            //消息详情页面
            screen: NotificationDetailsPage,
        },

        FaceDetectionPage: {
            //人脸识别页面
            screen: FaceDetectionPage,
        },
        SettingsPage: {
            //设置页面
            screen: SettingsPage,
        },
        ProtectTimePage: {
            //保护时间设置页面
            screen: ProtectTimePage,
        },
        UpdateAppPage: {
            //升级APP页面
            screen: UpdateAppPage,
        },
        AboutUsPage: {
            //关于我们页面
            screen: AboutUsPage,
        },

    },
    {
        initialRouteName: "MainPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
        headerMode: 'float', //指定页眉的呈现方式
    }
);

export default MainPageNavigator;