import BaseApproveListPage1 from './../navigator1/pages/Approve/BaseApproveListPage';
import BaseApproveListPage2 from './../navigator1/pages/Approve/BaseApproveListPage';
import {
    createMaterialTopTabNavigator
} from 'react-navigation';

export default createMaterialTopTabNavigator(
    {
        BaseApproveListPage1: {
            screen: BaseApproveListPage1,
            navigationOptions: {
                title: "TAB1",
            }
        },
        BaseApproveListPage2: {
            screen: BaseApproveListPage2,
            navigationOptions: {
                title: "TAB2",
            }
        }
    },
    {
        initialRouteName: "BaseApproveListPage1",
        tabBarOptions: {
            activeTintColor: 'blue',    //活动选项卡的标签和图标颜色。
            initialLayout: {
                width: 200
            },
            style: {
                backgroundColor: 'red'
            },
            tabStyle: {
                width: 150,
            }
        }
    }
)
