import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

import SettingsPage from '../Settings/SettingsPage';

/**
 * 个人中心页面
 * 
 * 使用StackNavigator
 * 
 * 为你的应用程序提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。
 * 
 */
export default class MyPage extends Component {

    static navigationOptions = {
        header: null,
        headerTitle: "启动页面",
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Page</Text>
                <Button title="进入设置页面" onPress={() => {
                    this.props.navigation.navigate("SettingsPage");
                }}></Button>
                <Button title="进入人脸采集页面" onPress={() => {
                    this.props.navigation.navigate("FaceDetectionPage", { type: "collection", headerTitle: "人类采集" });
                }}></Button>
                <Button title="注销：返回登录页面" onPress={() => {
                    this.props.navigation.navigate("LoginPage");
                }}></Button>
            </View>
        );
    }

}

// export default createStackNavigator(
//     {
//         MyPage: {
//             screen: MyPage,
//         },
//         SettingsPage: {
//             screen: SettingsPage,
//         },
//     },
//     {
//         initialRouteName: "MyPage",
//         //headerMode:'none',  //不呈现页眉
//         headerLayoutPreset: 'center',
//     }
// );



