import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    Button
} from 'react-native';

import MyHeader from './../../component/MyHeader';

import AppTheme from './../../../theme/theme';

/**
 * 审批页面
 */
export default class ApprovePage extends Component {

    static navigationOptions = {
        title: "审批"
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <MyHeader
                    headerBackgroundColor={AppTheme.primaryColor}
                    headerHeight={60}
                    statusBarBackGroundColor={AppTheme.primaryColor}
                    headerTitle={"自定义标题"}
                    headerTitleStyle={{ color: AppTheme.defaultColor }}
                >
                </MyHeader>
                {/* <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'red' }}>
                    <StatusBar backgroundColor={'blue'}></StatusBar>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                        <Text>左边</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
                        <Text>中级</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
                        <Text>右边</Text>
                    </View>
                </View> */}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Approve Page</Text>
                    <Button title="进入审批详情页面" onPress={() => {
                        this.props.navigation.push("ApproveDetailsPage");
                    }}></Button>
                    <Button title="进入筛选条件页面" onPress={() => {
                        this.props.navigation.push("ConditionPage");
                    }}></Button>
                </View>

            </ View>
        );
    }

}