import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
/**
 * 启动页面
 */
@inject("rootNavigatorStore")
@observer
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
        //初始化全局导航器
        this.props.rootNavigatorStore.setRootNavigation(this.props.navigation);
    }

    // this._toLoginPage来调用
    _toLoginPage = () => {

    }

    _toMainPage = () => {
        /**
         * 跳转到MainPage页面，并传参
         */
        // this.props.navigation.navigate("MainPage", {
        //     account: "chenliwu",
        // });

        alert("测试全局rootNavigator来导航")
        //测试全局rootNavigator进行导航
        this.props.rootNavigatorStore.navigate("MainPage", {
            account: "chenliwu",
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>启动页面</Text>
                <Button title="进入登录页面" onPress={() => {
                    //跳转页面并传递参数
                    // this.props.navigation.replace("LoginPage", {
                    //     account: "chenliwu",
                    // });
                    this.props.rootNavigatorStore.replace("LoginPage");
                }}></Button>
                <Button title="进入配置页面" onPress={() => {
                    //跳转页面并传递参数
                    // this.props.navigation.replace("AppSettingPage", {
                    //     account: "chenliwu",
                    // });
                    this.props.rootNavigatorStore.push("AppSettingPage");
                }}></Button>
                <Button title="进入主页" onPress={() => {
                    //跳转页面并传递参数
                    //alert("测试全局rootNavigator来导航")
                    //测试全局rootNavigator进行导航
                    this.props.rootNavigatorStore.replace("MainPage");
                    // this.props.navigation.replace("MainPage", {
                    //     account: "chenliwu",
                    // });
                }}></Button>
                <Button title="进入测试mobx页面" onPress={() => {
                    //this.props.navigation.push("TestMobxPage");
                    this.props.rootNavigatorStore.push("TestMobxPage");
                }}></Button>
            </View>
        );
    }

}