import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


export default class NotificationPage extends Component {

    static navigationOptions = {
        headerTitle: 'NotificationPage',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MessagePage</Text>
                <Button title={'进入消息详情页眉'} onPress={()=>{
                    this.props.navigation.navigate("NotificationDetailsPage");
                }}/>
            </View>
        );
    }

}

