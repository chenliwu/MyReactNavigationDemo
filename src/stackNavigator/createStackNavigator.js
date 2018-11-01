import {
    createStackNavigator
} from 'react-navigation';

import LanuchPage from './../pages/LanuchPage';
import LoginPage from './../pages/LoginPage';
import AppSettingPage from './../pages/Settings/AppSettingPage';

const HeaderViewConfig = {
    headerMode: 'float',
    headerLayoutPreset: 'center',
};

/**
 * 2018-11-1
 * chenlw
 */
/**
 * StackNavigatorConfig
 * （1）路由选项
 * （2）视觉选项
 */
const StackNavigatorConfig = {
    initialRouteName: 'LanuchPage',
    navigationOptions: {
        /**
         * gesturesEnabled: true,//设置滑动退出
         */
        //gesturesEnabled: true,
    },
    /**
     * 定义渲染和转换的样式
     * (1)card - 使用标准的 iOS 和 Android 屏幕转换。 这是默认设置。
     * (2)modal - -使屏幕从底部滑动, 这是一个常见的 iOS 模式。仅在 iOS 上工作, 对 Android 没有影响。
     * 注意：当mode设置为modal，滑动退出失效了
     */
    mode: 'card',
    /**
     * headerMode  指定页眉的呈现方式
     * (1)float：呈现一个位于顶部的单个页眉, 并在屏幕被更改时进行动画显示。这是 iOS 上常见的模式。
     * (2)screen：每个屏幕都有一个标头, 并且页眉随屏幕一起淡入和淡出。这是 Android 的常见模式。
     * (3)none：不会呈现页眉。
     */
    headerMode: 'float',
    /**
    * headerTransitionPreset
    * 指定页眉应如何从一个屏幕过渡到另一屏时
    * (1)`headerMode`: float` 已启用
    * (2)`fade-in-place` - Header 组件淡出而不移动, 类似于 Twitter、Instagram 和 Facebook 应用程序的 iOS。这是默认值。
    * (3)`uikit` -iOS 的默认行为的近似值。
    */
    headerTransitionPreset: 'float',
    /**
     * 指定 Header 组件如何布局
     */
    headerLayoutPreset: 'center',
}

/**
 * createStackNavigator
 */
const StackNavigator = createStackNavigator(
    {
        LanuchPage: {
            screen: LanuchPage,
        },
        LoginPage: {
            screen: LoginPage,
        },

        AppSettingPage: {
            screen: AppSettingPage,
        },
    },
    StackNavigatorConfig
);

export default StackNavigator;
