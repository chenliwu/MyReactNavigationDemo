import {
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import NotificationDetailsPage from './pages/NotificationDetailsPage';
import SettingPage from './pages/SettingPage';

// MainTabNavigator.navigationOptions = ({navigation}) => {
//     console.log('TabNavigator navigationOptions');
//     console.log(navigation);
//     const {routeName} = navigation.state.routes[navigation.state.index];
//
//     // You can do whatever you like here to pick the title based on the route name
//     const headerTitle = routeName;
//     console.log('headerTitle:' + headerTitle);
//     return {
//         headerTitle,
//     };
// };


/**
 * 主页栈
 */
const MainNavigator = createStackNavigator(
    {
        MainTabNavigator: {
            screen: MainTabNavigator,
            // navigationOptions: {
            //     header: null,
            // }
        },
        NotificationDetailsPage: {
            screen: NotificationDetailsPage
        },

        SettingPage: {
            screen: SettingPage
        },
    },
    {
        initialRouteName: 'MainTabNavigator',
        //mode: 'modal',
        //headerMode: 'none',     //主页栈不显示header组件
    }
);

export default MainNavigator;

// export default createStackNavigator(
//     {
//         MainNavigator: MainNavigator
//     },
//     {
//         headerMode: 'none',     //主页栈不显示header组件
//     }
// );