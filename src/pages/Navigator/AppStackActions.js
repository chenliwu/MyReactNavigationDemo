import {
    StackActions,
    NavigationActions
} from 'react-navigation';



/**
 * Reset操作会擦除整个导航状态，并将其替换为多个操作的结果。
 * (1)index - * number * - required routes数组中state的活动路由的索引。
 * (2)actions - array - 必需 - 将取代导航状态的导航行为数组。
 * (3)key - string or null - 可选 - 如果设置，具有给定 key 的导航器将重置。 如果为null，则根导航器将重置。
 */
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainTabPage' })],
});

const AppStackActions = {

    /**
     * 导航到主页
     */
    resetActionToMainPage: (navigation) => {
        if (navigation != null) {
            navigation.dispatch(resetAction);
        }
    }

}
export default AppStackActions;

