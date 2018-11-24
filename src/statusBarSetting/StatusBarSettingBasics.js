import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Button,
    Platform
} from 'react-native';
import {
    SafeAreaView,
    createStackNavigator
} from 'react-navigation';


const isAndroid = Platform.OS === 'android';

class Screen1 extends React.Component {

    /**
     * 通过参数动态设置页眉
     */
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: 'Screen1',
            // headerStyle: {
            //     backgroundColor: navigationOptions.headerTintColor,
            // },
            // headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                    color={isAndroid ? "blue" : "#fff"}
                />
            </SafeAreaView>
        );
    }
};

class Screen2 extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: 'Screen2',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ecf0f1"
                />
                <Text style={styles.paragraph}>Dark Screen</Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </SafeAreaView>
        );
    }
};

export default createStackNavigator(
    {
        Screen1: {
            screen: Screen1,
        },
        Screen2: {
            screen: Screen2,
        },
    },
    {
        //headerMode: 'none', //隐藏页眉
        initialRouteName: 'Screen1',
        headerTintColor: '#6a51ae',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#6a51ae',
                borderBottomWidth: 0,   //去除横线
                elevation: 0,   //去除android 的 Bar底部有一条阴影
            }
        }
    }
);

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