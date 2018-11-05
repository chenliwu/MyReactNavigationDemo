import LanuchPage from './pages/LanuchPage';
import LoginPage from './pages/LoginPage';
import AppSettingPage from './pages/Settings/AppSettingPage';
import SettingsPage from './pages/Settings/SettingsPage';
import ArgeementPage from './pages/ArgeementPage';
import FaceDetectionPage from './pages/Settings/FaceDetectionPage';

import TestMobxPage from './pages/TestMobxPage';

import MainTabNavigator from './MainTabNavigator';

import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';

/**
 * 2018-11-02
 * chenlw
 * work：
 * （1）使用navigator1目录的页面来测试stackNavigator。
 * （2）整个app只使用一个StackNavigator来导航，统一管理和配置，提高可读性和可维护性。
 * （3）页面导航使用push和replace等方法来切换页面。
 */
export default createStackNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
            navigationOptions: {
                header: null,
            }
        },
        LoginPage: {
            screen: LoginPage,
            navigationOptions: {
                header: null,
            }
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
        ArgeementPage: {
            screen: ArgeementPage,
        },
        MainPage: {
            screen: MainTabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        TestMobxPage: {
            //测试mobx页面
            screen: TestMobxPage,
        }
    },
    {
        initialRouteName: "LanuchPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center'
    }
);

