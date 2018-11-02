import LoginPage from './../pages/LoginPage';
import ArgeementPage from './../pages/ArgeementPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';
import FaceDetectionPage from './../pages/Settings/FaceDetectionPage';
import MainPageNavigator from './../navigator/MainPageNavigator';

import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';

export default createStackNavigator(
    {
        LoginPage: {
            screen: LoginPage,
        },
        ArgeementPage: {
            screen: ArgeementPage,
        },
        // AppSettingPage: {
        //     screen: AppSettingPage,
        // },
        FaceDetectionPage: {
            screen: FaceDetectionPage,
        },
        MainTabPage: {
            screen: MainPageNavigator,
            navigationOptions: {
                header: null,
            }
        },
    },
    {
        initialRouteName: "LoginPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center'
    }
)