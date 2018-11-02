import { observable, computed, action } from 'mobx';
/**
* @observable：使用此标签检测要检测的数据。
* @observer：使用此标签来检测数据变化时要更新页面的组件
* @action：使用此标签来检测数据改变的自定义方法。
*/
class NotificationStore {

    /**
     * 消息数量
     */
    @observable
    count = 0;

    /**
     * 消息列表
     */
    @observable
    dataList = [];

    /**
     * 设置数据
     */
    @action
    setDataList = (list) => {
        this.dataList = list;
    };

    /**
     * 添加数据
     */
    @action
    addData = (item) => {
        this.dataList.push(item);
    };

    /**
     * 移除数据
     */
    @action
    remove = (item) => {
        const list = this.dataList.filter(i => i.id !== item.id);
        this.setDataList(list);
    };

    /**
     * 获取消息数量
     */
    @action
    getNotificationCount = () => {
        return this.count;
    };

    /**
     * 设置消息数量
     */
    @action
    setNotificationCount = (number) => {
        this.count = number;
    };

    /**
     * 减少消息数量
     */
    @action
    reduceNotification = () => {
        this.count--;
    };

}

export default new NotificationStore();