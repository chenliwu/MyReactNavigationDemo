import MainTabPage from './../pages/MainTabPage';
import SettingsPage from './../pages/Settings/SettingsPage';
import FaceDetectionPage from './../pages/Settings/FaceDetectionPage';

import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';


export default createStackNavigator(
    {
        MainTabPage: {
            screen: MainTabPage,
            navigationOptions: {
                header: null,
            }
        },
        SettingsPage: {
            screen: SettingsPage,
        },
        FaceDetectionPage: {
            screen: FaceDetectionPage,
        }
    },
    {
        initialRouteName: "MainTabPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',
    }
);

