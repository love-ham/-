<template>
<uni-shadow-root class="vant-lib-stepper-index"><view class="van-stepper custom-class">
  <view :class="'minus-class '+(utils.bem('stepper__minus', { disabled: minusDisabled }))" :style="showMinus ? '' : 'display: none;'" hover-class="van-stepper__minus--hover" hover-stay-time="70" @click="onMinus"></view>
  <input :type="integer ? 'number' : 'digit'" :class="'input-class '+(utils.bem('stepper__input', { disabled: disabled || disableInput }))" :style="inputWidth ? 'width: ' + inputWidth : ''" :value="value" :focus="focus" :disabled="disabled || disableInput" @input="onInput" @focus="onFocus" @blur="onBlur"></input>
  <view :class="'plus-class '+(utils.bem('stepper__plus', { disabled: plusDisabled }))" :style="showPlus ? '' : 'display: none;'" hover-class="van-stepper__plus--hover" hover-stay-time="70" @click="onPlus"></view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = 'vant/lib/stepper/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    field: true,
    classes: [
        'input-class',
        'plus-class',
        'minus-class'
    ],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: String,
        asyncChange: Boolean,
        disableInput: Boolean,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
        },
        disablePlus: Boolean,
        disableMinus: Boolean
    },
    computed: {
        minusDisabled: function () {
            return this.data.disabled || this.data.disableMinus || this.data.value <= this.data.min;
        },
        plusDisabled: function () {
            return this.data.disabled || this.data.disablePlus || this.data.value >= this.data.max;
        }
    },
    watch: {
        value: function (value) {
            if (value === '') {
                return;
            }
            var newValue = this.range(value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.set({ value: newValue });
            }
        },
        max: 'check',
        min: 'check',
    },
    data: {
        focus: false
    },
    created: function () {
        this.set({
            value: this.range(this.data.value)
        });
    },
    methods: {
        check: function () {
            var newValue = this.range(this.data.value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.set({ value: newValue });
            }
        },
        onFocus: function (event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function (event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },
        // limit value range
        range: function (value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput: function (event) {
            var _a = (event.detail || {}).value, value = _a === void 0 ? '' : _a;
            this.triggerInput(value);
        },
        onChange: function (type) {
            if (this.data[type + "Disabled"]) {
                this.$emit('overlimit', type);
                return;
            }
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = Math.round((+this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onMinus: function () {
            this.onChange('minus');
        },
        onPlus: function () {
            this.onChange('plus');
        },
        triggerInput: function (value) {
            this.set({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        }
    }
});
export default global['__wxComponents']['vant/lib/stepper/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-stepper{font-size:0}.van-stepper__minus,.van-stepper__plus{position:relative;display:inline-block;width:28px;height:28px;padding:5px;margin:1px;vertical-align:middle;background-color:#f2f3f5;border:0;box-sizing:border-box}.van-stepper__minus:before,.van-stepper__plus:before{width:9px;height:1px}.van-stepper__minus:after,.van-stepper__plus:after{width:1px;height:9px}.van-stepper__minus:after,.van-stepper__minus:before,.van-stepper__plus:after,.van-stepper__plus:before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;background-color:#333;content:""}.van-stepper__minus--hover,.van-stepper__plus--hover{background-color:#e8e8e8}.van-stepper__minus--disabled,.van-stepper__plus--disabled{background-color:#f7f8fa}.van-stepper__minus--disabled:after,.van-stepper__minus--disabled:before,.van-stepper__plus--disabled:after,.van-stepper__plus--disabled:before{background-color:#c9c9c9}.van-stepper__minus--disabled.van-stepper__minus--hover,.van-stepper__minus--disabled.van-stepper__plus--hover,.van-stepper__plus--disabled.van-stepper__minus--hover,.van-stepper__plus--disabled.van-stepper__plus--hover{background-color:#f7f8fa}.van-stepper__minus{border-radius:4px 0 0 4px}.van-stepper__minus:after{display:none}.van-stepper__plus{border-radius:0 4px 4px 0}.van-stepper__input{display:inline-block;width:30px;height:26px;padding:1px;margin:1px;font-size:14px;color:#333;text-align:center;vertical-align:middle;background-color:#f2f3f5;border:0;border-width:1px 0;border-radius:0;box-sizing:initial;-webkit-appearance:none}.van-stepper__input--disabled{color:#c9c9c9;background-color:#f2f3f5}
</style>