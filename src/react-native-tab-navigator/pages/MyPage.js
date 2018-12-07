

import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

/**
 * 个人中心页面
 * 
 * 使用StackNavigator
 * 
 * 为你的应用程序提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。
 * 
 */
export default class MyPage extends Component {

    static navigationOptions = {
        headerTitle: 'MyPage',
    };

    render() {
        const {navigation}=this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Page</Text>
                <Button title={'进入设置页面'} onPress={()=>{
                    //const navigation = this.props.navigation.getParam('navigation',"");
                    //navigation && navigation.navigate('SettingPage');
                    navigation && navigation.navigate("SettingPage");

                }}/>
            </View>
        );
    }

}

