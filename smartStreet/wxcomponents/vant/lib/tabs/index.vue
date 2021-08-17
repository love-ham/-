<template>
<uni-shadow-root class="vant-lib-tabs-index"><view :class="'custom-class '+(utils.bem('tabs', [type]))">
  <view :style="'z-index: '+(zIndex)+'; '+(wrapStyle)" :class="(utils.bem('tabs__wrap', { scrollable }))+' '+(type === 'line' && border ? 'van-hairline--top-bottom' : '')">
    <slot name="nav-left"></slot>

    <scroll-view :scroll-x="scrollable" scroll-with-animation :scroll-left="scrollLeft" :class="'van-tabs__scroll--'+(type)" :style="color ? 'border-color: ' + color : ''">
      <view :class="(utils.bem('tabs__nav', [type]))+' nav-class'">
        <view v-if="type === 'line'" class="van-tabs__line" :style="lineStyle"></view>
        <view v-for="(item,index) in (tabs)" :key="item.index" :data-index="index" :class="'van-ellipsis tab-class '+(index === active ? 'tab-active-class' : '')+' '+(utils.bem('tab', { active: index === active, disabled: item.disabled }))" :style="(color && index !== active && type === 'card' && !item.disabled ? 'color: ' + color : '')+' '+(color && index === active && type === 'card' ? ';background-color:' + color : '')+' '+(color ? ';border-color: ' + color : '')+' '+(scrollable ? ';flex-basis:' + (88 / swipeThreshold) + '%' : '')" @click="onTap">
          <view :class="'van-ellipsis '+(utils.bem('tab__title', { dot: item.dot }))" :style="item.titleStyle">
            {{ item.title }}
            <van-info v-if="item.info !== null" :info="item.info" custom-class="van-tab__title__info"></van-info>
          </view>
        </view>
      </view>
    </scroll-view>

    <slot name="nav-right"></slot>
  </view>
  <view class="van-tabs__content" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
    <view class="van-tabs__track" :style="trackStyle">
      <slot></slot>
    </view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanInfo from '../info/index.vue'
global['__wxVueOptions'] = {components:{'van-info': VanInfo}}

global['__wxRoute'] = 'vant/lib/tabs/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var touch_1 = require("../mixins/touch");
var utils_1 = require("../common/utils");
component_1.VantComponent({
    mixins: [touch_1.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function (child) {
            this.child.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked: function (child) {
            var index = this.child.indexOf(child);
            var tabs = this.data.tabs;
            tabs.splice(index, 1);
            this.child.splice(index, 1);
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: Number,
            value: -1
        },
        lineHeight: {
            type: Number,
            value: -1
        },
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: ''
    },
    watch: {
        swipeThreshold: function () {
            this.set({
                scrollable: this.child.length > this.data.swipeThreshold
            });
        },
        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate: function () {
        this.child = [];
    },
    mounted: function () {
        var _this = this;
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then(function (rect) {
            _this.navHeight = rect.height;
            _this.observerContentScroll();
        });
    },
    destroyed: function () {
        // @ts-ignore
        this.createIntersectionObserver().disconnect();
    },
    methods: {
        updateTabs: function (tabs) {
            tabs = tabs || this.data.tabs;
            this.set({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function (eventName, index) {
            this.$emit(eventName, {
                index: index,
                title: this.data.tabs[index].title
            });
        },
        onTap: function (event) {
            var index = event.currentTarget.dataset.index;
            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', index);
            }
            else {
                this.trigger('click', index);
                this.setActive(index);
            }
        },
        setActive: function (active) {
            if (active !== this.data.active) {
                this.trigger('change', active);
                this.set({ active: active });
                this.setActiveTab();
            }
        },
        setLine: function (skipTransition) {
            var _this = this;
            if (this.data.type !== 'line') {
                return;
            }
            var _a = this.data, color = _a.color, active = _a.active, duration = _a.duration, lineWidth = _a.lineWidth, lineHeight = _a.lineHeight;
            this.getRect('.van-tab', true).then(function (rects) {
                var rect = rects[active];
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? "height: " + lineHeight + "px;" : '';
                var left = rects
                    .slice(0, active)
                    .reduce(function (prev, curr) { return prev + curr.width; }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition
                    ? ''
                    : "transition-duration: " + duration + "s; -webkit-transition-duration: " + duration + "s;";
                _this.set({
                    lineStyle: "\n            " + height + "\n            width: " + width + "px;\n            background-color: " + color + ";\n            -webkit-transform: translateX(" + left + "px);\n            transform: translateX(" + left + "px);\n            " + transition + "\n          "
                });
            });
        },
        setTrack: function () {
            var _this = this;
            var _a = this.data, animated = _a.animated, active = _a.active, duration = _a.duration;
            if (!animated)
                return '';
            this.getRect('.van-tabs__content').then(function (rect) {
                var width = rect.width;
                _this.set({
                    trackStyle: "\n            width: " + width * _this.child.length + "px;\n            left: " + -1 * active * width + "px;\n            transition: left " + duration + "s;\n            display: -webkit-box;\n            display: flex;\n          "
                });
                var props = { width: width, animated: animated };
                _this.child.forEach(function (item) {
                    item.set(props);
                });
            });
        },
        setActiveTab: function () {
            var _this = this;
            this.child.forEach(function (item, index) {
                var data = {
                    active: index === _this.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.set(data);
                }
            });
            utils_1.nextTick(function () {
                _this.setLine();
                _this.setTrack();
                _this.scrollIntoView();
            });
        },
        // scroll active tab into view
        scrollIntoView: function () {
            var _this = this;
            var _a = this.data, active = _a.active, scrollable = _a.scrollable;
            if (!scrollable) {
                return;
            }
            Promise.all([
                this.getRect('.van-tab', true),
                this.getRect('.van-tabs__nav')
            ]).then(function (_a) {
                var tabRects = _a[0], navRect = _a[1];
                var tabRect = tabRects[active];
                var offsetLeft = tabRects
                    .slice(0, active)
                    .reduce(function (prev, curr) { return prev + curr.width; }, 0);
                _this.set({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart: function (event) {
            if (!this.data.swipeable)
                return;
            this.touchStart(event);
        },
        onTouchMove: function (event) {
            if (!this.data.swipeable)
                return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd: function () {
            if (!this.data.swipeable)
                return;
            var _a = this.data, active = _a.active, tabs = _a.tabs;
            var _b = this, direction = _b.direction, deltaX = _b.deltaX, offsetX = _b.offsetX;
            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && active !== 0) {
                    this.setActive(active - 1);
                }
                else if (deltaX < 0 && active !== tabs.length - 1) {
                    this.setActive(active + 1);
                }
            }
        },
        setWrapStyle: function () {
            var _a = this.data, offsetTop = _a.offsetTop, position = _a.position;
            var wrapStyle;
            switch (position) {
                case 'top':
                    wrapStyle = "\n            top: " + offsetTop + "px;\n            position: fixed;\n          ";
                    break;
                case 'bottom':
                    wrapStyle = "\n            top: auto;\n            bottom: 0;\n          ";
                    break;
                default:
                    wrapStyle = '';
            }
            // cut down `set`
            if (wrapStyle === this.data.wrapStyle)
                return;
            this.set({ wrapStyle: wrapStyle });
        },
        observerContentScroll: function () {
            var _this = this;
            if (!this.data.sticky) {
                return;
            }
            var offsetTop = this.data.offsetTop;
            var windowHeight = wx.getSystemInfoSync().windowHeight;
            // @ts-ignore
            this.createIntersectionObserver().disconnect();
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ top: -(this.navHeight + offsetTop) })
                .observe('.van-tabs', function (res) {
                var top = res.boundingClientRect.top;
                if (top > offsetTop) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver()
                .relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) })
                .observe('.van-tabs', function (res) {
                var _a = res.boundingClientRect, top = _a.top, bottom = _a.bottom;
                if (bottom < _this.navHeight) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
        },
        setPosition: function (position) {
            var _this = this;
            if (position !== this.data.position) {
                this.set({ position: position }).then(function () {
                    _this.setWrapStyle();
                });
            }
        }
    }
});
export default global['__wxComponents']['vant/lib/tabs/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-tabs{position:relative;-webkit-tap-highlight-color:transparent}.van-tabs__wrap{position:absolute;top:0;right:0;left:0;display:-webkit-flex;display:flex;background-color:#fff}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__wrap--scrollable .van-tab{-webkit-flex:0 0 22%;flex:0 0 22%}.van-tabs__scroll--card{border:1px solid #f44;border-radius:2px}.van-tabs__nav{position:relative;display:-webkit-flex;display:flex;-webkit-user-select:none;user-select:none}.van-tabs__nav--line{height:100%}.van-tabs__nav--card{height:30px}.van-tabs__nav--card .van-tab{line-height:30px;color:#f44;border-right:1px solid #f44}.van-tabs__nav--card .van-tab:last-child{border-right:none}.van-tabs__nav--card .van-tab.van-tab--active{color:#fff;background-color:#f44}.van-tabs__line{position:absolute;bottom:0;left:0;z-index:1;height:3px;background-color:#f44;border-radius:3px}.van-tabs--line{padding-top:44px}.van-tabs--line .van-tabs__wrap{height:44px}.van-tabs--card{padding-top:30px;margin:0 15px}.van-tabs--card .van-tabs__wrap{height:30px}.van-tabs__content{overflow:hidden}.van-tab,.van-tabs__track{position:relative}.van-tab{min-width:0;padding:0 5px;font-size:14px;line-height:44px;color:#7d7e80;text-align:center;cursor:pointer;box-sizing:border-box;-webkit-flex:1;flex:1}.van-tab--active{font-weight:500;color:#333}.van-tab--disabled{color:#c9c9c9}.van-tab__title--dot:after{display:inline-block;width:8px;height:8px;vertical-align:middle;background-color:#f44;border-radius:100%;content:""}.van-tab__title__info{position:relative!important;top:-1px!important;display:inline-block;-webkit-transform:translateX(0)!important;transform:translateX(0)!important}
</style>