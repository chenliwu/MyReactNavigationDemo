import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    StackActions,
    NavigationActions
} from 'react-navigation';

import { observer, inject } from 'mobx-react/native';

/**
 * 人脸采集页面
 */
@inject("rootNavigatorStore")
@observer
export default class SettingsPage extends Component {

    /**
     * 动态获取参数设置标题
     */
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: navigation.state.params.headerTitle,
    });

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.type = navigation.getParam('type', 'collection');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>type:{this.type}</Text>
                <Text>headerTitle:{this.props.navigation.getParam("headerTitle")}</Text>
                <Button title="跳转到主页" onPress={() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'MainPage' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                    //切换到switchNavigator的MainPage
                    //const parentNavigation = this.props.navigation.dangerouslyGetParent();
                    //parentNavigation && parentNavigation.navigate("MainPage");
                }}></Button>
                <Button title="测试pop" onPress={() => {
                    this.props.rootNavigatorStore.pop();
                }}></Button>
            </View>
        );
    }

}