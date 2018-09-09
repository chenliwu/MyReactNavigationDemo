import React from 'react';
import { 
    View,
    Text,
    TextInput,
    Button
 } from 'react-native';
/**
 * 登录页面
 */
 export default class LoginPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>登录页面</Text>
            </View>
        );
    }


 }