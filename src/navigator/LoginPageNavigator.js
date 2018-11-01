import LoginPage from './../pages/LoginPage';
import ArgeementPage from './../pages/ArgeementPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';
import FaceDetectionPage from './../pages/Settings/FaceDetectionPage';
import MainPage from './../pages/MainPage';

import {
    createStackNavigator
} from 'react-navigation';

export default createStackNavigator(
    {
        LoginPage: {
            screen: LoginPage,
        },
        ArgeementPage: {
            screen: ArgeementPage,
        },
        AppSettingPage: {
            screen: AppSettingPage,
        },
        FaceDetectionPage: {
            screen: FaceDetectionPage,
        },
        MainPage: {
            screen: MainPage,
            navigationOptions: {
                header: null,
            }
        },
    },
    {
        initialRouteName: "LoginPage"
    }
)