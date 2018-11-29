import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, StatusBar, Platform, Dimensions} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    TabNavigator,
    DrawerNavigator,
    SafeAreaView
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


import PhoneModelUtils from './../utils/PhoneModelUtils';
import AppThemeUtils from './../utils/AppThemeUtils';

const isAndroid = Platform.OS === 'android';

/**
 * 测试屏幕的宽度（主要测试IOS端的刘海屏机型）
 * iPhone X  width=375,height=812
 * iPhone XS  width=375,height=812
 *
 *
 *
 */

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


class Screen1 extends React.Component {

    static navigationOptions = {
        //header: null,
        headerTitle: 'Screen1',
        headerStyle: {
            backgroundColor: 'green'
        }
    };

    /**
     * SafeAreaView
     *
     * 注意：react-native也有SafeAreaView这个组件；这里使用的react-navigation库的SafeAreaView组件。
     *
     * SafeAreaView默认会设置padding，所以使用SafeAreaView作为根组件的时候，内容会有内边距。
     * forceInset可以设置padding的大小
     *
     * forceInset使用 key（取值：top | bottom | left | right | vertical | horizontal）和
     * value（取值：'always' | 'never'）组成一个对象 或者，您可以通过传递一个整数来完全重写填充。
     *
     * （1）在iPhone X/XR系列的手机设置forInset属性没有效果，内边距依然会存在，这就是SafeAreaView适配刘海屏做的适配工作。
     *      IOS端实际上是没有状态栏的概念，通常页面都是布满整个屏幕的，状态栏实际上是悬浮在页面的顶端，它并不占用空间。
     *
     * （2）如果不是刘海屏的手机，如果不设置forInset属性，顶部会有内边距，那内边距就是状态栏的高度，我们就暂且称之为状态栏区域吧。
     *      这时候问题来了，空出来的那块状态栏区域有可能跟页面的颜色不一致，这样页面就会显得很突兀。
     *      我们希望状态栏跟页面或者跟标题栏的颜色保持一致，这时候我们就要设置forceInset的top属性了，top:'never'。
     *
     *
     *  SafeAreaView作为根组件，会自动设置paddingTop和paddingBottom，在刘海屏的情况下，顶部和底部会空出一块区域以适应页面的布局。
     *
     *
     */
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                //paddingTop: 20,
                backgroundColor: '#6a51ae'
            }} forceInset={AppThemeUtils.forceInset}
            >
                <View style={{
                    flex: 1,
                    //paddingTop: 44,
                    //justifyContent: 'center',
                    //alignItems: 'center',
                    backgroundColor: 'red'
                }}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#6a51ae"
                    />
                    <Text style={[styles.paragraph, {color: '#fff'}]}>
                        Light Screen
                    </Text>
                    <Text>
                        isIphoneX:{PhoneModelUtils.isIphoneX() ? "true" : "false"},
                        screen width:{screenWidth},
                        screen height:{screenHeight}
                    </Text>

                    <Button
                        title="Next screen"
                        onPress={() => this.props.navigation.navigate('Screen2')}
                        color={isAndroid ? "blue" : "#fff"}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

class Screen2 extends React.Component {


    static navigationOptions = {
        //header:null,  //不显示header
        headerTitle: 'Screen2',
        headerStyle: {
            backgroundColor: 'gray'
        }
    };

    render() {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="pink"
                />
                <Text style={styles.paragraph}>
                    Dark Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </SafeAreaView>
        );
    }
}


// const Screen2 = ({navigation}) => (
//     <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
//         <StatusBar
//             barStyle="dark-content"
//             backgroundColor="pink"
//         />
//         <Text style={styles.paragraph}>
//             Dark Screen
//         </Text>
//         <Button
//             title="Next screen"
//             onPress={() => navigation.navigate('Screen1')}
//         />
//         {/* <Button
//       title="Toggle Drawer"
//       onPress={() => navigation.navigate('DrawerToggle')}
//     /> */}
//     </SafeAreaView>
//);


/**
 * 2018-11-24
 * chenlw
 * SwitchNavigator状态栏设置
 * （1）IOS状态栏的颜色跟页面背景色一样
 *
 */
const switchNavigator = createSwitchNavigator(
    {
        Screen1: {
            screen: Screen1,
        },
        Screen2: {
            screen: Screen2,
        },
    },
    {
        initialRouteName: 'Screen1'
    });


const RootStackNavigator = createStackNavigator(
    {
        Root: {
            screen: switchNavigator,
        }
    },
    {
        initialRouteName: 'Root',
        navigationOptions: {
            header: null,
            headerStyle: {
                backgroundColor: 'gray'
            }
        }

    }
);
export default RootStackNavigator;


/**
 * 2018-11-24
 * chenlw
 * StackNavigator状态栏
 * （1）如果设置header，IOS状态栏的颜色跟header背景色一样。
 * （2）如果隐藏了header，IOS状态栏的颜色跟页面背景色一样。
 *
 */
// const stackNavigator = createStackNavigator(
//     {
//         Screen1: {
//             screen: Screen1,
//         },
//         Screen2: {
//             screen: Screen2,
//         },
//     },
//     {
//         //headerMode: 'none',
//         navigationOptions: {
//             headerStyle: {
//                 //backgroundColor: 'red',//顶部标题栏的背景色
//                 borderBottomWidth: 0,   //去除横线
//                 elevation: 0,   //去除android 的 Bar底部有一条阴影
//                 borderColor: '#00000000',
//                 paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight / 2 + 5,
//             },
//         }
//     });
//export default stackNavigator;


// export default DrawerNavigator({
//     Screen1: {
//         screen: Screen1,
//     },
//     Screen2: {
//         screen: Screen2,
//     },
// });
//
// export default TabNavigator(
//     {
//         Screen1: {
//             screen: Screen1,
//             navigationOptions: {
//                 tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//                     // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
//                     StatusBar.setBarStyle('light-content');
//                     isAndroid && StatusBar.setBackgroundColor('#6a51ae');
//                     jumpToIndex(scene.index);
//                 },
//             },
//         },
//         Screen2: {
//             screen: Screen2,
//             navigationOptions: {
//                 tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//                     StatusBar.setBarStyle('dark-content');
//                     isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
//                     jumpToIndex(scene.index);
//                 },
//             },
//         },
//     },
//     {
//         tabBarPosition: 'bottom',
//     }
// );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
