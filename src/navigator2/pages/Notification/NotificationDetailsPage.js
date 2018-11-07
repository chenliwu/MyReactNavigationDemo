import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 消息详情页面
 */
export default class NotificationPage extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>消息详情页面</Text>
            </View>
        );
    }

}