import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView
} from 'react-native';
import { computed, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

/**
 * @observer：使用此标签检测当数据变化要更新页面的组件。将组件变成响应式组件。
 */
/**
 * @inject表示调用缓存,observer表示当缓存数据生效时，刷新当前页面
 */
@inject("notificationStore")
@observer
export default class TestMobxPage extends React.Component {

    static navigationOptions = {
        headerTitle: "测试Mobx"
    }

    /**
     * 获取消息数量
     */
    @computed
    get getNotificationCount() {
        return this.props.notificationStore.count;
    }

    /**
     * 设置消息数量
     * @param {*} num 
     */
    @action
    setNotificationCount(num) {
        this.props.notificationStore.setNotificationCount(num);
    }

    /**
     * 减少消息数量
     */
    @action
    reduceNotification() {
        this.props.notificationStore.reduceNotification();
    }

    render() {
        //获取消息状态：notificationStore存储对象可以通过Provider在组件的props属性当中进行传递。
        const { notificationStore } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="设置消息数量" onPress={() => {
                    this.setNotificationCount(55);
                    //notificationStore.setNotificationCount(55);
                }}></Button>
                <Button title="减少消息数量" onPress={() => {
                    this.reduceNotification();
                    //notificationStore.reduceNotification();
                }}></Button>
                <Text>消息数量：{this.getNotificationCount}</Text>

            </View>
        );
    }
}


