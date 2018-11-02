import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

/**
 * 设置页面
 */
export default class SettingsPage extends Component {

    static navigationOptions = {
        headerTitle: "设置",
        headerRight: <TouchableHighlight onPress={() => {
            alert("点击了菜单");
        }}><Text style={{ marginLeft: 20 }}>菜单</Text></TouchableHighlight>,
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Page</Text>
            </View>
        );
    }

}