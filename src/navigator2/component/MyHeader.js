import React from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

/**
 * 2018-11-09
 * chenlw
 * work：自定义页面，顶部组件
 * 可配置属性，后期还可扩展
 * （1）statusBarBackGroundColor：状态栏的背景色
 * （2）headerBackgroundColor：组件的背景色
 * （3）headerHeight：组件的高度
 * （4）headerTitle：组件的标题
 * （5）headerTitleStyle：组件标题的样式
 */
export default class MyHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { statusBarBackGroundColor, headerBackgroundColor, headerHeight, headerTitle, headerTitleStyle, } = this.props;
        return (
            <View style={{ height: headerHeight, backgroundColor: headerBackgroundColor }}>
                <StatusBar backgroundColor={statusBarBackGroundColor}></StatusBar>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={headerTitleStyle}>{headerTitle}</Text>
                </View>
            </View>
        )
    }
}