import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

import {
    NavigationActions
} from 'react-navigation';

/**
 * 服务协议页面
 */
export default class ArgeementPage extends React.Component {

    static navigationOptions = {
        headerTitle: "服务协议",
        gesturesEnabled: true,//设置滑动退出
        headerRight:
            <View>
                <TouchableOpacity onPress={() => {
                    alert("aaa");
                }}>
                    <Image source={require("./../../icon/icon_more.png")} ></Image>
                    {/* <ImageBackground style={{ flex: 1 }} source={require("./../../icon/icon_more.png")}>
                    </ImageBackground > */}
                </TouchableOpacity >
            </View>,
        headerRightContainerStyle: {
            padding: 10,
        }
    }

    renderNavigationRightView() {

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>服务协议页面</Text>
                <Button title="dismiss" onPress={() => {
                    //如果您在嵌套（子）堆栈中并且想要关闭整个堆栈，则返回父堆栈，请调用此方法。
                    this.props.navigation.dismiss();
                }}></Button>
                <Button title="reset" onPress={() => {
                    //擦除导航器状态并将其替换为多个操作的结果。
                    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LanuchPage' })], 0);
                }}></Button>
                <Button title="返回栈顶" onPress={() => {
                    this.props.navigation.popToTop();
                }}></Button>
            </View>
        );
    }


}