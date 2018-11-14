import AppTheme from '../theme/theme';
/**
 * 2018-11-02
 * chenlw
 * work：封装全局配置navigationOptions
 */
const GlobalNavigationOptions = {
    //headerTransparent: true,    //设置header为透明
    headerTintColor: AppTheme.defaultColor,
    headerStyle: {
        backgroundColor: AppTheme.primaryColor,//顶部标题栏的背景色
    },
    headerTitleStyle: {
        color: AppTheme.defaultColor,   //标题的字体颜色
    },
    // headerBackTitleStyle: {
    //     backgroundColor: AppTheme.defaultColor, //顶部标题栏的背景色
    // },
    gesturesEnabled: true,   //允许滑动退出
};

export default GlobalNavigationOptions;