import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


export default class NotificationDetailsPage extends Component {

    static navigationOptions = {
        headerTitle:'NotificationDetailsPage'
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>消息详情页面</Text>
            </View>
        );
    }

}

