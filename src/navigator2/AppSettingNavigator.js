import AppSettingPage from './pages/Settings/AppSettingPage';
import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';


const AppSettingNavigator = createStackNavigator(
    {
        AppSettingPage: {
            //APP配置页面
            screen: AppSettingPage,
        },
    },
    {
        initialRouteName: "AppSettingPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
        headerMode: 'float',            //指定页眉的呈现方式
    }
);
export default AppSettingNavigator;