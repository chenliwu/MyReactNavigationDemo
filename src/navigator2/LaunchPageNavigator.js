import LaunchPage from './pages/LaunchPage';
import LoginPageNavigator from './LoginPageNavigator';
import MainPageNavigator from './MainPageNavigator';
import AppSettingNavigator from './AppSettingNavigator';

import {
    createSwitchNavigator
} from 'react-navigation';

const LaunchPageNavigator = createSwitchNavigator(
    {
        LaunchPage: {
            //启动页面
            screen: LaunchPage,
        },
        LoginPage: {
            //登录页面
            screen: LoginPageNavigator,
        },
        MainPage: {
            //主页
            screen: MainPageNavigator,
        },
        AppSettingPage: {
            //APP配置页面
            screen: AppSettingNavigator,
        },
    },
    {
        initialRouteName: "LaunchPage"
    }
);
export default LaunchPageNavigator;