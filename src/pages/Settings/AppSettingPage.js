import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';

import LoginPage from '../LoginPage';

/**
 * 设置页面
 */
class AppSettingPage extends React.Component {

    static navigationOptions = {
        headerTitle: "设置",
        //gesturesEnabled: true,//设置滑动退出
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>App Setting Page</Text>
                <Button title="进入登录页面" onPress={() => {
                    this.props.navigation.navigate("LoginPage");
                }}></Button>
            </View>
        );
    }
}

const AppSettingPageNavigator = createSwitchNavigator(
    {
        AppSettingPage: AppSettingPage,
        LoginPage: LoginPage,
    },
    {
        initialRouteName: 'AppSettingPage',
    }
);
export default AppSettingPageNavigator;

