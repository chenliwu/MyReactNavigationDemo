import LanuchPage from './../pages/LanuchPage';
import MainPage from './../pages/MainPage';

import LoginPageNavigator from './LoginPageNavigator';

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
        MainPage: {
            screen: MainPage,
        },
    },
    {
        initialRouteName: 'LanuchPage',
    }
);

