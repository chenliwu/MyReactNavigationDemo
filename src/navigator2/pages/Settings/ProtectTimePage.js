import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 保护时间设置页面
 */
export default class ProtectTimePage extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>保护时间设置页面</Text>
            </View>
        );
    }

}