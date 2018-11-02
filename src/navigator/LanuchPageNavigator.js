import LanuchPage from './../pages/LanuchPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';

import LoginPageNavigator from './LoginPageNavigator';
import MainPageNavigator from './MainPageNavigator'

import {
    createSwitchNavigator
} from 'react-navigation';

export default createSwitchNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
        },
        LoginPage: {
            screen: LoginPageNavigator,
        },
        AppSettingPage: {
            screen: AppSettingPage,
        },
        MainTabPage: {
            screen: MainPageNavigator,
        },
    },
    {
        initialRouteName: 'LanuchPage',
    }
);

