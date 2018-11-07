import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


import { observer, inject } from 'mobx-react/native';

/**
 * 个人中心页面
 * 
 * 使用StackNavigator
 * 
 * 为你的应用程序提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。
 * 
 */

@inject('appNavigatorStore')
@observer
export default class MyPage extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Page</Text>
                <Button title="进入设置页面" onPress={() => {
                    this.props.appNavigatorStore.mainPageNavigation.push("SettingsPage");
                    //this.props.navigation.push("SettingsPage");
                }}></Button>
                <Button title="进入人脸采集页面" onPress={() => {
                    this.props.appNavigatorStore.mainPageNavigation.push("FaceDetectionPage", { type: "collection", headerTitle: "人脸采集" });
                    //this.props.navigation.push("FaceDetectionPage", { type: "collection", headerTitle: "人脸采集" });
                }}></Button>
                <Button title="注销：返回登录页面" onPress={() => {
                    //切换到switchNavigator的LoginPage
                    this.props.appNavigatorStore.mainPageNavigation.navigate("LoginPage");
                    //this.props.navigation.navigate("LoginPage");
                }}></Button>
            </View>
        );
    }

}

