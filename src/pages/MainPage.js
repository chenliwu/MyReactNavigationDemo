import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
/**
 * 主页
 */
export default class MainPage extends React.Component {

    static navigationOptions = {
        headerTitle: "主页",
        gesturesEnabled: true,//设置滑动退出 
    }

    constructor(props) {
        super(props);
    }

    render() {
        //const { navigation } = this.props;
        const account = this.props.navigation.getParam("account");
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>主页</Text>
                <Text>
                    页面传递过来的参数值：{account}
                </Text>
            </View>
        );
    }


}