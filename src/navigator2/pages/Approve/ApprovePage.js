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
 * 审批页面
 */
export default class ApprovePage extends Component {

    static navigationOptions = {
        title: "审批"
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Approve Page</Text>
                <Button title="进入审批详情页面" onPress={() => {
                    this.props.navigation.push("ApproveDetailsPage");
                }}></Button>
                <Button title="进入筛选条件页面" onPress={() => {
                    this.props.navigation.push("ConditionPage");
                }}></Button>
            </View>
        );
    }

}