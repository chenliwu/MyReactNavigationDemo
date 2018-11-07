import { observable, computed, action } from 'mobx';

/**
 * 2018-11-06
 * chenlw
 * work：封装全局导航器到mobx
 * 注意：要在启动页面对全局导航器属性进行初始化，这样其他页面才能使用全局导航器
 */
class AppNavigatorStore {

    @observable
    lanuchPageNavigation = null;

    @observable
    loginPageNavigation = null;

    @observable
    mainPageNavigation = null;


    @action
    setLanuchPageNavigation = (lanuchPageNavigation) => {
        this.lanuchPageNavigation = lanuchPageNavigation;
    }

    @action
    setLoginPageNavigation = (loginPageNavigation) => {
        this.loginPageNavigation = loginPageNavigation;
    }

    @action
    setMainPageNavigation = (mainPageNavigation) => {
        this.mainPageNavigation = mainPageNavigation;
    }

    navigate = (navigation, routeName) => {
        navigation && navigation.navigate(routeName);
    }
    navigate = (navigation, routeName, params) => {
        navigation && navigation.navigate(routeName, params);
    }

    push = (navigation, routeName) => {
        navigation && navigation.push(routeName);
    }
    push = (navigation, routeName, params) => {
        navigation && navigation.push(routeName, params);
    }

    replace = (navigation, routeName) => {
        navigation && navigation.replace(routeName);
    }
    replace = (navigation, routeName, params) => {
        navigation && navigation.replace(routeName, params);
    }

    pop = (navigation) => {
        navigation && navigation.pop();
    }

}

export default new AppNavigatorStore();