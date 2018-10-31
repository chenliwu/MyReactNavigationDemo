import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    createSwitchNavigator,
    SwitchNavigator
} from 'react-navigation';


import LanuchPage from './../pages/LanuchPage';
import MainPage from './../pages/MainPage';
import LoginPage from './../pages/LoginPage';

/**
 * SwitchNavigator 的用途是一次只显示一个页面。 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态。
 * 
 */
// const MySwitchNavigator  = SwitchNavigator(
//     {
//         LanuchPage:{
//             screen:LanuchPage,
//         },
//         MainPage:MainPage,
//         LoginPage:LoginPage,
//     },
//     {
//         initialRouteName:"LanuchPage",
//     }
// );
const MySwitchNavigator = createSwitchNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
        },
        MainPage: MainPage,
        LoginPage: LoginPage,
    },
    {
        initialRouteName: "LanuchPage",
    }
);

export default class MySwitchNavigatorPage extends React.Component {

    render() {
        return (
            <MySwitchNavigator />
        );
    }

}


