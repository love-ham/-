<template>
<uni-shadow-root class="vant-lib-goods-action-button-index"><van-button square :id="id" size="large" :lang="lang" :type="type" :loading="loading" :disabled="disabled" :open-type="openType" custom-class="custom-class" :business-id="businessId" :session-from="sessionFrom" :app-parameter="appParameter" :send-message-img="sendMessageImg" :send-message-path="sendMessagePath" :show-message-card="showMessageCard" :send-message-title="sendMessageTitle" @click="onClick" @error="bindError" @contact="bindContact" @opensetting="bindOpenSetting" @getuserinfo="bindGetUserInfo" @getphonenumber="bindGetPhoneNumber" @launchapp="bindLaunchApp">
  {{ text }}
</van-button></uni-shadow-root>
</template>

<script>
import VanButton from '../button/index.vue'
global['__wxVueOptions'] = {components:{'van-button': VanButton}}

global['__wxRoute'] = 'vant/lib/goods-action-button/index'
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var link_1 = require("../mixins/link");
var button_1 = require("../mixins/button");
var open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    methods: {
        onClick: function (event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
export default global['__wxComponents']['vant/lib/goods-action-button/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.vant-lib-goods-action-button-index{-webkit-flex:1;flex:1}
</style>