import React from 'react';

import {
    createSwitchNavigator
} from 'react-navigation';
import LanuchPage from './../pages/LanuchPage';
import LoginPage from './../pages/LoginPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';
import MainTabNavigator from './../navigator/MainTabNavigator';


/**
 * 2018-11-1
 * chenlw
 */
const LanuchPageNavigator = createSwitchNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
        },
        LoginPage: {
            screen: LoginPage,
        },
        AppSettingPage: {
            screen: AppSettingPage,
        },
        MainTabPage: {
            screen: MainTabNavigator,
        },
    },
    {
        initialRouteName: 'LanuchPage',
    }
);
export default LanuchPageNavigator;

