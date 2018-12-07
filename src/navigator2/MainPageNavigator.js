//审批相关页面
import ApproveDetailsPage from './pages/Approve/ApproveDetailsPage';
import ConditionPage from './pages/Approve/ConditionPage';
import SketchCanvasPage from './pages/SketchCanvasPage';
//报表相关页面
import ChartsPage from './pages/Charts/ChartsPage';
//消息相关页面
import NotificationDetailsPage from './pages/Notification/NotificationDetailsPage';
//我的相关页面
import SettingsPage from './pages/Settings/SettingsPage';
import FaceDetectionPage from './pages/Settings/FaceDetectionPage';
import ProtectTimePage from './pages/Settings/ProtectTimePage';
import UpdateAppPage from './pages/Settings/UpdateAppPage';
import AboutUsPage from './pages/Settings/AboutUsPage';

import MainTabPage from './pages/MainTabPage/MainTabPage';

import {
    createStackNavigator
} from 'react-navigation';

import GlobalNavigationOptions from './../navigatorConfig/GlobalNavigationOptions';

const MainPageNavigator = createStackNavigator(
    {
        MainPage: {
            //主页tab
            screen: MainTabPage,
            navigationOptions: {
                //header: null,
            }
        },
        ApproveDetailsPage: {
            //审批详情页面
            screen: ApproveDetailsPage,
        },
        ConditionPage: {
            //筛选条件页面
            screen: ConditionPage,
        },
        SketchCanvasPage: {
            //手写审批页面
            screen: SketchCanvasPage,
        },

        ChartsPage: {
            //报表详情页面
            screen: ChartsPage
        },

        NotificationDetailsPage: {
            //消息详情页面
            screen: NotificationDetailsPage,
        },

        FaceDetectionPage: {
            //人脸识别页面
            screen: FaceDetectionPage,
        },
        SettingsPage: {
            //设置页面
            screen: SettingsPage,
        },
        ProtectTimePage: {
            //保护时间设置页面
            screen: ProtectTimePage,
        },
        UpdateAppPage: {
            //升级APP页面
            screen: UpdateAppPage,
        },
        AboutUsPage: {
            //关于我们页面
            screen: AboutUsPage,
        },

    },
    {
        initialRouteName: "MainPage",
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
        headerMode: 'float',            //指定页眉的呈现方式
    }
);

export default MainPageNavigator;