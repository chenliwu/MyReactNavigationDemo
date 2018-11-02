import MainTabPage from './MainTabNavigator';
import SettingsPage from './../pages/Settings/SettingsPage';
import FaceDetectionPage from './../pages/Settings/FaceDetectionPage';
import LoginPage from './../pages/LoginPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';


import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';

/**
 * 2018-11-02
 * chenlw
 * work: 封装主页导航器
 */
export default createStackNavigator(
    {
        MainTabPage: {
            screen: MainTabPage,
            navigationOptions: {
                header: null,
            }
        },
        LoginPage: {
            screen: LoginPage,
        },
        AppSettingPage: {
            screen: AppSettingPage,
        },
        SettingsPage: {
            screen: SettingsPage,
        },
        FaceDetectionPage: {
            screen: FaceDetectionPage,
        },

    },
    {
        initialRouteName: "MainTabPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',
    }
);

