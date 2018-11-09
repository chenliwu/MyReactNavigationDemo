import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableHighlight
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

/**
 * 设置页面
 */
export default class SettingsPage extends Component {

    static navigationOptions = {
        headerTitle: "设置",
        // headerRight:
        //     <TouchableHighlight onPress={() => {
        //         alert("点击了菜单");
        //     }}><Text style={{ marginLeft: 20 }}>菜单</Text>
        //     </TouchableHighlight>,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Page</Text>
                <Button title="返回登录页" onPress={() => {
                    this.props.navigation.navigate("LoginPage");
                }}></Button>
            </View>
        );
    }

}