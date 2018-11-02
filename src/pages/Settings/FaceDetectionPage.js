import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

/**
 * 人脸采集页面
 */
export default class SettingsPage extends Component {

    /**
     * 动态获取参数设置标题
     */
    static navigationOptions = ({ navigation }) => ({
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
                    this.props.navigation.replace("MainTabPage");
                }}></Button>
            </View>
        );
    }

}