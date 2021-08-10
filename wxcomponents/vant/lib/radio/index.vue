<template>
<uni-shadow-root class="vant-lib-radio-index"><view class="van-radio custom-class">
  <view v-if="labelPosition === 'left'" :class="'label-class '+(utils.bem('radio__label', [labelPosition, { disabled }]))" @click="onClickLabel">
    <slot></slot>
  </view>
  <view class="van-radio__icon-wrap" @click="onChange">
    <slot v-if="useIconSlot" name="icon"></slot>
    <van-icon v-else name="success" :class="utils.bem('radio__icon', [shape, { disabled, checked: value === name }])" :style="checkedColor && !disabled && value === name ? 'border-color:' + checkedColor + '; background-color:' + checkedColor : ''" custom-class="icon-class" custom-style="line-height: 20px;"></van-icon>
  </view>
  <view v-if="labelPosition === 'right'" :class="'label-class '+(utils.bem('radio__label', [labelPosition, { disabled }]))" @click="onClickLabel">
    <slot></slot>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'van-icon': VanIcon}}

global['__wxRoute'] = 'vant/lib/radio/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        linked: function (target) {
            this.parent = target;
        },
        unlinked: function () {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        }
    },
    methods: {
        emitChange: function (value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function (event) {
            console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel: function () {
            var _a = this.data, disabled = _a.disabled, labelDisabled = _a.labelDisabled, name = _a.name;
            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
export default global['__wxComponents']['vant/lib/radio/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-radio{display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}.van-radio__icon-wrap,.van-radio__label{line-height:20px}.van-radio__icon-wrap{-webkit-flex:none;flex:none}.van-radio__icon{display:block;width:20px;height:20px;font-size:14px;color:transparent;text-align:center;border:1px solid #e5e5e5;box-sizing:border-box;transition:.2s}.van-radio__icon--round{border-radius:100%}.van-radio__icon--checked{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-radio__icon--disabled{background-color:#eee;border-color:#c9c9c9}.van-radio__icon--disabled.van-radio__icon--checked{color:#c9c9c9}.van-radio__label{margin-left:10px;color:#333;word-break:break-all}.van-radio__label--left{float:left;margin:0 10px 0 0}.van-radio__label--disabled{color:#c9c9c9}.van-radio__label:empty{margin:0}
</style>