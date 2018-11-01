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

    /**
     * 在这里配置navigationOptions
     * 也可以在StackNavigatorConfig当中配置，如果两边都配置的话，StackNavigatorConfig优先
     */
    static navigationOptions = {
        headerTitle: "启动页面",
    }

    constructor(props) {
        super(props);
    }

    // this._toLoginPage来调用
    _toLoginPage = () => {

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
                <Button title="进入登录页面" onPress={() => {
                    //跳转页面并传递参数
                    this.props.navigation.navigate("LoginPage", {
                        account: "chenliwu",
                    });
                }}></Button>
                <Button title="进入配置页面" onPress={() => {
                    //跳转页面并传递参数
                    this.props.navigation.navigate("AppSettingPage", {
                        account: "chenliwu",
                    });
                }}></Button>
                <Button title="进入主页" onPress={() => {
                    //跳转页面并传递参数
                    this.props.navigation.navigate("MainTabPage", {
                        account: "chenliwu",
                    });
                }}></Button>
            </View>
        );
    }


}