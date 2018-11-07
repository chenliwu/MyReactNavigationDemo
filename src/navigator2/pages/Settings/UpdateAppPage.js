import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 更新APP页面
 */
export default class UpdateAppPage extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>更新APP页面</Text>
            </View>
        );
    }

}