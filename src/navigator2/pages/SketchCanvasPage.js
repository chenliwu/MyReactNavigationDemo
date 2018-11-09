import React from 'react';
import {
    View,
    Text
} from 'react-native';
export default class SketchCanvasPage extends React.Component {

    static navigationOptions = {
        title: "手写审批"
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SketchCanvas Page</Text>
            </View>
        );
    }

}