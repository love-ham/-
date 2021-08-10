<template>
<uni-shadow-root class="vant-lib-picker-column-index"><view class="van-picker-column custom-class" :style="'height: '+(itemHeight * visibleItemCount)+'px'" @touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
  <view :style="wrapperStyle">
    <view v-for="(option,index) in (options)" :key="option.index" :data-index="index" :style="'height: '+(itemHeight)+'px'" :class="'van-ellipsis van-picker-column__item '+(option && option.disabled ? 'van-picker-column__item--disabled' : '')+' '+(index === currentIndex ? 'van-picker-column__item--selected active-class' : '')" @click="onClickItem">{{ getOptionText(option, valueKey) }}</view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="getOptionText"></wxs>
<script>

global['__wxRoute'] = 'vant/lib/picker-column/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
var DEFAULT_DURATION = 200;
component_1.VantComponent({
    classes: ['active-class'],
    props: {
        valueKey: String,
        className: String,
        itemHeight: Number,
        visibleItemCount: Number,
        initialOptions: {
            type: Array,
            value: []
        },
        defaultIndex: {
            type: Number,
            value: 0
        }
    },
    data: {
        startY: 0,
        offset: 0,
        duration: 0,
        startOffset: 0,
        options: [],
        currentIndex: 0
    },
    created: function () {
        var _this = this;
        var _a = this.data, defaultIndex = _a.defaultIndex, initialOptions = _a.initialOptions;
        this.set({
            currentIndex: defaultIndex,
            options: initialOptions
        }).then(function () {
            _this.setIndex(defaultIndex);
        });
    },
    computed: {
        count: function () {
            return this.data.options.length;
        },
        baseOffset: function () {
            var data = this.data;
            return (data.itemHeight * (data.visibleItemCount - 1)) / 2;
        },
        wrapperStyle: function () {
            var data = this.data;
            return [
                "transition: " + data.duration + "ms",
                "transform: translate3d(0, " + (data.offset + data.baseOffset) + "px, 0)",
                "line-height: " + data.itemHeight + "px"
            ].join('; ');
        }
    },
    watch: {
        defaultIndex: function (value) {
            this.setIndex(value);
        }
    },
    methods: {
        onTouchStart: function (event) {
            this.set({
                startY: event.touches[0].clientY,
                startOffset: this.data.offset,
                duration: 0
            });
        },
        onTouchMove: function (event) {
            var data = this.data;
            var deltaY = event.touches[0].clientY - data.startY;
            this.set({
                offset: utils_1.range(data.startOffset + deltaY, -(data.count * data.itemHeight), data.itemHeight)
            });
        },
        onTouchEnd: function () {
            var data = this.data;
            if (data.offset !== data.startOffset) {
                this.set({
                    duration: DEFAULT_DURATION
                });
                var index = utils_1.range(Math.round(-data.offset / data.itemHeight), 0, data.count - 1);
                this.setIndex(index, true);
            }
        },
        onClickItem: function (event) {
            var index = event.currentTarget.dataset.index;
            this.setIndex(index, true);
        },
        adjustIndex: function (index) {
            var data = this.data;
            index = utils_1.range(index, 0, data.count);
            for (var i = index; i < data.count; i++) {
                if (!this.isDisabled(data.options[i]))
                    return i;
            }
            for (var i = index - 1; i >= 0; i--) {
                if (!this.isDisabled(data.options[i]))
                    return i;
            }
        },
        isDisabled: function (option) {
            return utils_1.isObj(option) && option.disabled;
        },
        getOptionText: function (option) {
            var data = this.data;
            return utils_1.isObj(option) && data.valueKey in option
                ? option[data.valueKey]
                : option;
        },
        setIndex: function (index, userAction) {
            var _this = this;
            var data = this.data;
            index = this.adjustIndex(index) || 0;
            var offset = -index * data.itemHeight;
            if (index !== data.currentIndex) {
                return this.set({ offset: offset, currentIndex: index }).then(function () {
                    userAction && _this.$emit('change', index);
                });
            }
            return this.set({ offset: offset });
        },
        setValue: function (value) {
            var options = this.data.options;
            for (var i = 0; i < options.length; i++) {
                if (this.getOptionText(options[i]) === value) {
                    return this.setIndex(i);
                }
            }
            return Promise.resolve();
        },
        getValue: function () {
            var data = this.data;
            return data.options[data.currentIndex];
        }
    }
});
export default global['__wxComponents']['vant/lib/picker-column/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-picker-column{overflow:hidden;font-size:16px;color:#999;text-align:center}.van-picker-column__item{padding:0 5px}.van-picker-column__item--selected{font-weight:500;color:#333}.van-picker-column__item--disabled{opacity:.3}
</style>