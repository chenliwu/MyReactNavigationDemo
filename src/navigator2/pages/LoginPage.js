import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

/**
 * 登录页面
 */
@inject("rootNavigatorStore", 'appNavigatorStore')
@observer
export default class LoginPage extends React.Component {

    static navigationOptions = {
        header: null,
        headerTitle: "登录",
        gesturesEnabled: false,//不允许滑动退出
    }

    constructor(props) {
        super(props);
        this.props.appNavigatorStore.setLoginPageNavigation(this.props.navigation);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>登录页面</Text>
                <Button title="进入配置页面" onPress={() => {
                    //切换到switchNavigator的AppSettingPage
                    this.props.navigation.navigate("AppSettingPage");
                }}></Button>
                <Button title="进入协议页面" onPress={() => {
                    this.props.navigation.push("ArgeementPage");
                }}></Button>
                <Button title="进入主页" onPress={() => {
                    //切换到switchNavigator的MainPage
                    //this.props.navigation.navigate("MainPage");
                    this.props.appNavigatorStore.lanuchPageNavigation.navigate("MainPage");
                }}></Button>
                <Button title="进入人脸登录页面" onPress={() => {
                    this.props.navigation.push("FaceDetectionPage", { type: 'login', headerTitle: "人脸登录" });
                }}></Button>
            </View>
        );
    }
}