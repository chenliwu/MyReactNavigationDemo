import React from 'react';

// 获取store实例
import rootStore from './mobx/store/RootStore';
// 全局注册并注入mobx，首页新品，分类页，商品详情页，购物车页面都要用到store
import { Provider } from 'mobx-react/native';

import AppNavigator from './navigator1/AppNavigator';

// /**
//  * 2018-11-02
//  * chenlw
//  * work：
//  * 
//  */
// export default class App extends React.Component {

//     render() {
//         return (
//             <Provider {...rootStore}>
//                 <AppNavigator></AppNavigator>
//             </Provider>
//         )
//     }

//     componentDidMount = () => {
//         console.disableYellowBox = true; //去除黄色弹框警告
//     };

// }


import LaunchPageNavigator from './navigator2/LaunchPageNavigator';
/**
 * 2018-11-06
 * chenlw
 * work：重构
 * 
 */
export default class App extends React.Component {

    render() {
        return (
            <Provider {...rootStore}>
                <LaunchPageNavigator></LaunchPageNavigator>
            </Provider>
        )
    }

    componentDidMount = () => {
        console.disableYellowBox = true; //去除黄色弹框警告
    };

}
