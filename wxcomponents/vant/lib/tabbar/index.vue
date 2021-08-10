<template>
<uni-shadow-root class="vant-lib-tabbar-index"><view :class="'custom-class '+(border ? 'van-hairline--top-bottom' : '')+' '+(utils.bem('tabbar', { fixed, safe: isIPhoneX && safeAreaInsetBottom }))" :style="zIndex ? 'z-index: ' + zIndex : ''">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = 'vant/lib/tabbar/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var safe_area_1 = require("../mixins/safe-area");
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function (target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function (target) {
            this.children = this.children.filter(function (item) { return item !== target; });
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: [Number, String],
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    beforeCreate: function () {
        this.children = [];
    },
    methods: {
        updateChildren: function () {
            var children = this.children;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) { return child.updateFromParent(); }));
        },
        onChange: function (child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
export default global['__wxComponents']['vant/lib/tabbar/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-tabbar{display:-webkit-flex;display:flex;width:100%;height:50px;background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--safe{padding-bottom:34px}
</style>