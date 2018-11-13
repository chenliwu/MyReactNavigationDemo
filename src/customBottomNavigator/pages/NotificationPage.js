import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


export default class NotificationPage extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MessagePage</Text>
            </View>
        );
    }

}

