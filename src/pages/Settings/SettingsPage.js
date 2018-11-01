import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

/**
 * 设置页面
 */
export default class SettingsPage extends Component {

    static navigationOptions = {
        headerTitle: "设置",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Page</Text>
            </View>
        );
    }

}