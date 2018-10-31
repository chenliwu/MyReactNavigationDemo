import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
/**
 * 启动页面
 */
export default class LanuchPage extends React.Component {

    //
    // static navigationOptions = {
    //     headerTitle:"启动页面",
    // }

    constructor(props) {
        super(props);
    }

    // this._toLoginPage来调用
    _toLoginPage = () => {
        //跳转页面并传递参数
        this.props.navigation.navigate("LoginPage", {
            account: "chenliwu",
        });
    }

    _toMainPage = () => {
        /**
         * 跳转到MainPage页面，并传参
         */
        this.props.navigation.navigate("MainPage", {
            account: "chenliwu",
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>启动页面</Text>
                <Button title="进入登录页面" onPress={
                    this._toLoginPage
                }></Button>
                <Button title="进入主页面" onPress={
                    this._toMainPage
                }></Button>
            </View>
        );
    }


}