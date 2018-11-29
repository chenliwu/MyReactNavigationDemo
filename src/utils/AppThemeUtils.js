/**
 * 2018-11-26
 * chenlw
 * work：封装APP样式工具类
 *
 */
import PhoneModelUtils from './PhoneModelUtils';

const globalSafeAreaViewForceInset = {
    top: PhoneModelUtils.isIphoneX() ? 'always' : 'always',
    bottom: PhoneModelUtils.isIphoneX() ? 'always' : 'never',
};

export default {
    forceInset: globalSafeAreaViewForceInset,
}