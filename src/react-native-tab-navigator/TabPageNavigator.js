import React from 'react';

import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import NotificationPage from './pages/NotificationPage';
import NotificationDetailsPage from './pages/NotificationDetailsPage';
import MyPage from './pages/MyPage';
import SettingPage from './pages/SettingPage';

import px2dp from './utils/px2dp';

import {
    createStackNavigator
} from 'react-navigation';

class MainTabPage extends React.Component {


    static navigationOptions = ({navigation, navigationOptions}) => {
        console.log(navigation);
        const {params} = navigation.state;
        console.log(params);
        if (params && params.headerTitle === 'notification') {
            //消息页面的header
            return ({
                headerTitle: params.headerTitle,
                headerRight: (
                    <TouchableOpacity
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => {
                            params.onHeaderRightClick && params.onHeaderRightClick();
                        }}
                    >
                        <Text>右边</Text>
                    </TouchableOpacity>
                )
            });
        }
        return ({
            headerTitle: params && params.headerTitle !== undefined ? params.headerTitle : 'notification',
        });
    };

    static defaultProps = {
        selectedColor: '#6a91f8',
        normalColor: '#a9a9a9'
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'notification',
            tabBarVisible: true,

            notificationContent:''
        }
    }


    onHeaderRightClick = () => {
        //alert('onHeaderRightClick');
        //this.props.navigation.navigate('NotificationDetailsPage');
        this.setState({
            notificationContent: '主页传递到子页的内容',
        });
    };

    hideTabBar = () => {
        this.setState({
            tabBarVisible: false,
        });
    };

    showTabBar=()=>{
        this.setState({
            tabBarVisible: true,
        });
    };


    componentWillMount() {
        this.props.navigation.setParams({
            headerTitle: 'notification',
            onHeaderRightClick: this.onHeaderRightClick
        });
    }

    render() {
        const {selectedColor} = this.props;

        // NotificationNavigator.navigationOptions = ({navigation}) => {
        //     console.log(navigation);
        //     if (navigation.state.index > 0) {
        //         this.state.tabBarVisible = false;
        //     }
        // };

        return (
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={{
                    height: this.state.tabBarVisible ? px2dp(50) : 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    overflow: 'hidden'
                }}
                sceneStyle={{paddingBottom: styles.tabbar.height}}
            >
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={'消息'}
                    badgeText={99}
                    // renderBadge={() => {
                    //     return <Text>11</Text>
                    // }}
                    selected={this.state.selectedTab === 'notification'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image source={require('./../icon/icon_news_no.png')}></Image>}
                    renderSelectedIcon={() => <Image source={require('./../icon/icon_news_yes.png')}></Image>}
                    onPress={() => {
                        this.setState({selectedTab: 'notification'});
                        this.props.navigation.setParams({
                            headerTitle: 'notification',
                        });
                    }}>

                    {<NotificationPage content={this.state.notificationContent} showTabBar={this.showTabBar} hideTabBar={this.hideTabBar} navigation={this.props.navigation}/>}

                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={'我的'}
                    selected={this.state.selectedTab === 'myPage'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image source={require('./../icon/icon_my_no.png')}></Image>}
                    renderSelectedIcon={() => <Image source={require('./../icon/icon_my_yes.png')}></Image>}
                    onPress={() => {
                        this.setState({selectedTab: 'myPage'});
                        this.props.navigation.setParams({
                            headerTitle: 'myPage',
                        });
                    }}>

                    {<MyPage showTabBar={this.showTabBar} hideTabBar={this.hideTabBar} navigation={this.props.navigation}/>}

                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabbar: {
        //height: px2dp(50),
        height: px2dp(50),
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        //overflow: 'hidden'
    },
    tabStyle: {
        padding: px2dp(8)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});

const MainPageNavigator = createStackNavigator(
    {
        MainTabPage: {
            screen: MainTabPage
        },
        NotificationDetailsPage: {
            screen: NotificationDetailsPage
        },
        SettingPage: {
            screen: SettingPage
        }
    },
    {
        initialRouteName: 'MainTabPage',
        //headerMode: 'none'
    }
);

export default MainPageNavigator;

