import {
    StackNavigator
} from 'react-navigation';

import LanuchPage from './../Pages/LanuchPage';
import LoginPage from './../Pages/LoginPage';
import MainPage from './../Pages/MainPage';

const RouteConfigs = {
    LanuchPage: {
        screen: LanuchPage,
    },
    LoginPage: {
        screen: LoginPage,
    },
    MainPage: {
        screen: MainPage,
    },
};

const StackNavigatorConfig = {
    initialRouteName: "LanuchPage"
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);


