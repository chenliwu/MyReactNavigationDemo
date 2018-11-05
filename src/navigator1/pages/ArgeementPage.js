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
            </View>
        );
    }


}