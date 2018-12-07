import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ApprovePage from './../Approve/ApprovePage';
import ChartsPage from './../Charts/ChartsPage';
import NotificationPage from './../Notification/NotificationPage';
import MyPage from './../My/MyPage';

import MyTabBar from './MyTabBar';

import {
    View,
    Text,
    TouchableOpacity,
    BackHandler,
    ToastAndroid
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

var lastBackPressed = Date.now();

/**
 * renderTabBar：渲染Tab视图的顶部标题栏
 */
@inject("notificationStore", 'appNavigatorStore')
@observer
export default class MainPageTab extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        headerTitle: 'title'
    });

    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props) {
        super(props);

        ///要隐藏页面的下标
        const hideTabIndexSet = new Set();
        //hideTabIndexSet.add(4);

        this.state = {
            activeIndex: 0,
            hideTabIndexSet: hideTabIndexSet,
        };
        this.props.appNavigatorStore.setMainPageNavigation(this.props.navigation);

        //订阅navigation 的生命周期方法 
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload => {
            BackHandler.addEventListener('hardwareBackPress', this.onHardwareBackPress);
        });
    }

    /**
     * 组件加载之后添加监听
     */
    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
            BackHandler.removeEventListener('hardwareBackPress', this.onHardwareBackPress);
        });
    }
    /**
     * 组件卸载之前移除监听
     */
    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }


    /**
    * 监听返回键点击事件
    * 2018-11-05
    * chenlw
    * work：重写此事件，已适应react-navigation
    */
    onHardwareBackPress() {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            return false;
        }
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    render() {
        let initialPage = 0;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#6a91f8" }} />
                <ScrollableTabView
                    initialPage={initialPage}   //初始化页面的下标，从0开始
                    tabBarPosition={"bottom"}
                    tabBarBackgroundColor={"#fff"}
                    tabBarActiveTextColor={"#6a91f8"}
                    tabBarInactiveTextColor={"#7b7b7b"}
                    scrollWithoutAnimation={true}   //不使用切换动画
                    locked={true}   //true表示不允许滑动
                    renderTabBar={() => {
                        //渲染自定的TabBar
                        return (<MyTabBar hideTabIndexSet={this.state.hideTabIndexSet}>
                        </MyTabBar>)
                    }}
                    onChangeTab={(tab) => {
                        //alert("activeIndex:" + tab.i);
                        this.setState({ activeIndex: tab.i });
                    }}>
                    <ApprovePage navigation={this.props.navigation} tabLabel="审批"></ApprovePage>
                    <ChartsPage navigation={this.props.navigation} tabLabel="报表"></ChartsPage>
                    <NotificationPage navigation={this.props.navigation} tabLabel="消息"></NotificationPage>
                    <MyPage navigation={this.props.navigation} tabLabel="我的"></MyPage>
                </ScrollableTabView>
            </View>
        );
    }
}