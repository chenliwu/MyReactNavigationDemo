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
@inject("rootNavigatorStore", 'appNavigatorStore')
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
        this.props.appNavigatorStore.setLanuchPageNavigation(this.props.navigation);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>启动页面</Text>
                <Button title="进入登录页面" onPress={() => {
                    this.props.navigation.navigate("LoginPage");
                }}></Button>
                <Button title="进入配置页面" onPress={() => {
                    this.props.navigation.navigate("AppSettingPage");
                }}></Button>
                <Button title="进入主页" onPress={() => {
                    this.props.navigation.navigate("MainPage");
                }}></Button>

            </View>
        );
    }

}