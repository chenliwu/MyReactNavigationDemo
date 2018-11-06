import { observable, computed, action } from 'mobx';

/**
 * 2018-11-06
 * chenlw
 * work：封装全局导航器到mobx
 * 注意：要在启动页面对全局导航器属性进行初始化，这样其他页面才能使用全局导航器
 */
class RootNavigatorStore {

    /**
     * 全局导航器属性
     */
    @observable
    rootNavigation = null;

    /**
     * 初始化全局导航器属性
     */
    @action
    setRootNavigation = (rootNavigation) => {
        this.rootNavigation = rootNavigation;
    }

    navigate = (routeName) => {
        this.rootNavigation && this.rootNavigation.navigate(routeName);
    }
    navigate = (routeName, params) => {
        this.rootNavigation && this.rootNavigation.navigate(routeName, params);
    }

    push = (routeName) => {
        this.rootNavigation && this.rootNavigation.push(routeName);
    }
    push = (routeName, params) => {
        this.rootNavigation && this.rootNavigation.push(routeName, params);
    }

    replace = (routeName) => {
        this.rootNavigation && this.rootNavigation.replace(routeName);
    }
    replace = (routeName, params) => {
        this.rootNavigation && this.rootNavigation.replace(routeName, params);
    }

    pop = () => {
        this.rootNavigation && this.rootNavigation.pop();
    }

}

export default new RootNavigatorStore();