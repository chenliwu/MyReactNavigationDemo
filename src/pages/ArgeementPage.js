import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
/**
 * 服务协议页面
 */
export default class ArgeementPage extends React.Component {

    static navigationOptions = {
        headerTitle: "服务协议",
        gesturesEnabled: true,//设置滑动退出
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>服务协议页面</Text>
            </View>
        );
    }


}