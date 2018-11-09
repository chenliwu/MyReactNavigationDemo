import LoginPage from './pages/LoginPage';
import MainPageNavigator from './MainPageNavigator';
import ArgeementPage from './pages/ArgeementPage';
import FaceDetectionPage from './pages/Settings/FaceDetectionPage';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';


import {
    createStackNavigator
} from 'react-navigation';

const LoginPageNavigator = createStackNavigator(
    {
        LoginPage: {
            //登录页面
            screen: LoginPage,
        },
        // MainPage: {
        //     //主页
        //     screen: MainPageNavigator,
        // },
        ArgeementPage: {
            //服务协议页面
            screen: ArgeementPage,
        },
        FaceDetectionPage: {
            //人脸登录页面
            screen: FaceDetectionPage,
        },
    },
    {
        initialRouteName: "LoginPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
        headerMode: 'float',            //指定页眉的呈现方式
    }
);

export default LoginPageNavigator;

