import {
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NotificationDetailsPage from './pages/NotificationDetailsPage';

export default createStackNavigator(
    {
        MainTabNavigator:{
            screen:MainTabNavigator
        },

        NotificationDetailsPage:{
            screen:NotificationDetailsPage
        }
    },
    {
        initialRouteName:'MainTabNavigator'
    }
);