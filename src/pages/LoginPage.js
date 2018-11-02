import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

/**
 * 登录页面
 */
export default class LoginPage extends React.Component {

    static navigationOptions = {
        header: null,
        headerTitle: "登录",
        gesturesEnabled: false,//不允许滑动退出
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>登录页面</Text>
                <Button title="进入配置页面" onPress={() => {
                    this.props.navigation.replace("AppSettingPage");
                }}></Button>
                <Button title="进入协议页面" onPress={() => {
                    this.props.navigation.navigate("ArgeementPage");
                }}></Button>
                <Button title="进入主页" onPress={() => {
                    this.props.navigation.replace("MainTabPage");
                }}></Button>
                <Button title="进入人脸登录页面" onPress={() => {
                    this.props.navigation.replace("FaceDetectionPage", { type: 'login', headerTitle: "人脸登录" });
                    //this.props.navigation.navigate("FaceDetectionPage", { type: 'login', headerTitle: "人脸登录" });
                }}></Button>
            </View>
        );
    }
}