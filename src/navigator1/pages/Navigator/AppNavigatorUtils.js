import {
    StackActions,
    NavigationActions
} from 'react-navigation';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainPage' })],
});

const AppNavigatorUtils = {

    /**
     * 重置导航到主页
     */
    resetToMainPage: (navigation) => {
        if (navigation != null) {
            navigation.dispatch(resetAction);
        }
    }

}

export default AppNavigatorUtils;