import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    ViewPropTypes
} from 'react-native';

import {
    Badge
} from 'teaset';

/**
 * 自定义ScrollableTabViewPage的TabBar
 */
export default class MyTabBar extends React.Component {

    propTypes = {
        goToPage: PropTypes.func, // 跳转到对应tab的方法
        activeTab: PropTypes.number, // 当前被选中的tab下标
        tabs: PropTypes.array, // 所有tabs集合
        goToPage: PropTypes.func,
        backgroundColor: PropTypes.string,
        activeTextColor: PropTypes.string,
        inactiveTextColor: PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: ViewPropTypes.style,
        renderTab: PropTypes.func,
        underlineStyle: ViewPropTypes.style,
    }

    //未选中的图标
    tabUnselectedIcons = [
        require('./../../../icon/icon_home_no.png'),
        require('./../../../icon/icon_report_no.png'),
        require('./../../../icon/icon_news_no.png'),
        require('./../../../icon/icon_my_no.png'),
    ];
    //选中的图标
    tabSelectedIcons = [
        require('./../../../icon/icon_home_yes.png'),
        require('./../../../icon/icon_report_yes.png'),
        require('./../../../icon/icon_news_yes.png'),
        require('./../../../icon/icon_my_yes.png'),
    ];


    constructor(props) {
        super(props);
    }

    static defaultProps = {
        activeTextColor: 'navy',
        inactiveTextColor: 'black',
        backgroundColor: null,
    };

    /**
     * 是否显示该Tab
     * @param {*} pageIndex 
     */
    isRenderTab(pageIndex) {
        // let showTabNamesSet = this.props.showTabNamesSet;
        // if (showTabNamesSet) {
        //     return showTabNamesSet.has(name);
        // }
        let hideTabIndexSet = this.props.hideTabIndexSet;
        if (hideTabIndexSet) {
            return !hideTabIndexSet.has(pageIndex);
        }
        return true;
    }

    render() {
        return (
            <View style={[styles.tabs, { backgroundColor: this.props.backgroundColor }, this.props.style,]}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this.props.tabs.map((name, pageIndex) => {
                        if (this.isRenderTab(pageIndex)) {
                            //判断是否渲染该页面
                            const isTabActive = this.props.activeTab === pageIndex;
                            return this.renderTab(name, pageIndex, isTabActive, this.props.goToPage);
                        }
                    })}
                </View>
            </View>
        );
    }


    renderTab(name, pageIndex, isTabActive, onPressHandler) {
        const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        const fontWeight = isTabActive ? 'bold' : 'normal';

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => onPressHandler(pageIndex)}>
                    <View style={[styles.tab, this.props.tabStyle,]}>
                        {
                            this.renderTabBadge(name)
                        }
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {
                                this.renderTabIcon(pageIndex, isTabActive)
                            }
                            <Text style={{ color: textColor }}>{name}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    /**
     显示Tab的图标
     * require指令不支持变量类型
     * @param {*} pageIndex 
     * @param {*} isTabActive 
     */
    renderTabIcon(pageIndex, isTabActive) {
        if (isTabActive) {
            return <Image source={this.tabSelectedIcons[pageIndex]}></Image>;;
        } else {
            return <Image source={this.tabUnselectedIcons[pageIndex]}></Image>;;
        }
    }

    /**
     * 显示消息红点
     * @param {*} pageName 
     */
    renderTabBadge(pageName) {
        switch (pageName) {
            case "审批":
                return <Badge style={{ position: 'absolute', right: 5, top: 5, }} count={6} />;
            case "报表":
                return <Badge style={{ position: 'absolute', right: 5, top: 5, }} count={10} />;
            case "消息":
                return <Badge style={{ position: 'absolute', right: 5, top: 5, }} count={10} />;
            case "我的":
                return <Badge style={{ position: 'absolute', right: 5, top: 5, }} count={12} />;
        }
        return null;
    }

}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ccc',
    },
});