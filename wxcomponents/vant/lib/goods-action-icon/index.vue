<template>
<uni-shadow-root class="vant-lib-goods-action-icon-index"><van-button square :id="id" size="large" :lang="lang" :loading="loading" :disabled="disabled" :open-type="openType" :business-id="businessId" custom-class="van-goods-action-icon" :session-from="sessionFrom" :app-parameter="appParameter" :send-message-img="sendMessageImg" :send-message-path="sendMessagePath" :show-message-card="showMessageCard" :send-message-title="sendMessageTitle" @click="onClick" @error="bindError" @contact="bindContact" @opensetting="bindOpenSetting" @getuserinfo="bindGetUserInfo" @getphonenumber="bindGetPhoneNumber" @launchapp="bindLaunchApp">
  <view class="van-goods-action-icon__content van-hairline--right">
    <van-icon size="20px" :name="icon" :info="info" class="van-goods-action-icon__icon" custom-class="icon-class"></van-icon>
    <text class="text-class">{{ text }}</text>
  </view>
</van-button></uni-shadow-root>
</template>

<script>
import VanIcon from '../icon/index.vue'
import VanButton from '../button/index.vue'
global['__wxVueOptions'] = {components:{'van-icon': VanIcon,'van-button': VanButton}}

global['__wxRoute'] = 'vant/lib/goods-action-icon/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var link_1 = require("../mixins/link");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    classes: ['icon-class', 'text-class'],
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function (event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
export default global['__wxComponents']['vant/lib/goods-action-icon/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-goods-action-icon{width:50px!important;border:none!important}.van-goods-action-icon__content{display:-webkit-flex;display:flex;height:100%;font-size:10px;line-height:1;color:#7d7e80;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center}.van-goods-action-icon__icon{margin-bottom:4px}
</style>