import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const isAndroid = Platform.OS === 'android';

const Screen1 = ({ navigation }) => (
    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#6a51ae"
        />
        <Text style={[styles.paragraph, { color: '#fff' }]}>
            Light Screen
    </Text>
        <Button
            title="Next screen"
            onPress={() => navigation.navigate('Screen2')}
            color={isAndroid ? "blue" : "#fff"}
        />
        {/* <Button
      title="Toggle Drawer"
      onPress={() => navigation.navigate('DrawerToggle')}
      color={isAndroid ? "blue" : "#fff"}
    /> */}
    </SafeAreaView>
);

const Screen2 = ({ navigation }) => (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="#ecf0f1"
        />
        <Text style={styles.paragraph}>
            Dark Screen
    </Text>
        <Button
            title="Next screen"
            onPress={() => navigation.navigate('Screen1')}
        />
        {/* <Button
      title="Toggle Drawer"
      onPress={() => navigation.navigate('DrawerToggle')}
    /> */}
    </SafeAreaView>
);

// export default createStackNavigator({
//   Screen1: {
//     screen: Screen1,
//   },
//   Screen2: {
//     screen: Screen2,
//   },
// }, {
//   headerMode: 'none',
// });

// export default createDrawerNavigator({
//     Screen1: {
//         screen: Screen1,
//     },
//     Screen2: {
//         screen: Screen2,
//     },
// });

export default createBottomTabNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
                StatusBar.setBarStyle('light-content');
                isAndroid && StatusBar.setBackgroundColor('#6a51ae');
                console.log(navigation);
                console.log(defaultHandler);
                //jumpToIndex(scene.index);
            },
        },
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                StatusBar.setBarStyle('dark-content');
                isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
                console.log(navigation);
                console.log(defaultHandler);
                //jumpToIndex(scene.index);
            },
        },
    },
});

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
