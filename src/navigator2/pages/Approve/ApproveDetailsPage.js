import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 审批详情页面
 */
export default class ApproveDetailsPage extends Component {

    static navigationOptions = {
        title: "审批详情"
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>审批详情页面</Text>
                <Button title="进入手写审批页面" onPress={() => {
                    this.props.navigation.push("SketchCanvasPage");
                }}></Button>
            </View>
        );
    }

}