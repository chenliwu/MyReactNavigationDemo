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
        const {navigation}=this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MessagePage</Text>

                {/*<Text>主页控制子页:{this.props.content}</Text>*/}

                <Button title={'隐藏tabBar'} onPress={()=>{
                    this.props.hideTabBar && this.props.hideTabBar();
                }}/>

                <Button title={'显示tabBar'} onPress={()=>{
                    this.props.showTabBar && this.props.showTabBar();
                }}/>

                <Button title={'进入消息详情页面'} onPress={()=>{
                    //const navigation = this.props.navigation.getParam('navigation',"");
                    //navigation && navigation.navigate('NotificationDetailsPage');
                    navigation && navigation.navigate("NotificationDetailsPage");
                }}/>
            </View>
        );
    }

}

