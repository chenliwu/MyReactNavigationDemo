import LanuchPage from './pages/LanuchPage';
import LoginPageNavigator from './LoginPageNavigator';
import MainPageNavigator from './MainPageNavigator';
import AppSettingNavigator from './AppSettingNavigator';

import {
    createSwitchNavigator
} from 'react-navigation';

const LanuchPageNavigator = createSwitchNavigator(
    {
        LanuchPage: {
            //启动页面
            screen: LanuchPage,
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
        initialRouteName: "LanuchPage"
    }
);
export default LanuchPageNavigator;