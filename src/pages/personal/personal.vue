<template>
<!-- 个人登录页,未登录显示很少的信息 -->
    <div class="personalWrap" ref="personalWrap">
        <!-- 以登录显示界面 -->
        <div class="hadLoginWrap" v-if="isLogin">
            <!-- 头部 -->
            <div class="header">
                <div class="headerMain">
                    <div class="userInfo">
                        <img class="userAvatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
                        <div class="userData">
                            <div class="userName">严选用户XXXXXXXXX</div>
                            <div class="userType">普通用户</div>
                        </div>
                    </div>
                    <!-- 右侧试用会员 -->
                    <div class="tryVip">
                        <div class="iconfont icon-namecard"></div>
                        <div class="proVip">
                            <div class="iconfont icon-jewelry"></div>
                            <div class="proInfo">
                                <div class="proName">Pro会员</div>
                                <div class="proUse">立即试用</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的资产 -->
            <div class="property">
                <!-- 顶部标题 -->
                <div class="propertyTitle">我的资产</div>
                <div class="line"></div>
                <!-- 下半区域 -->
                <div class="myPurse">
                    <div class="myCard">
                        <div class="money">￥0</div>
                        <div class="cardName">回馈金</div>
                    </div>
                    <div class="myCard">
                        <div class="money">0</div>
                        <div class="cardName">红包</div>
                    </div>
                    <div class="myCard">
                        <div class="money">0</div>
                        <div class="cardName">优惠券</div>
                    </div>
                    <div class="myCard">
                        <div class="money">￥0</div>
                        <div class="cardName">津贴</div>
                    </div>
                    <div class="myCard">
                        <div class="money">0</div>
                        <div class="cardName">礼品卡</div>
                    </div>
                </div>
            </div>
            <!-- 我的功能 -->
            <div class="myFunction">
                <div class="functionItem">
                    <div class="iconfont  icon-calendar"></div>
                    <div class="funName ">我的订单</div>
                </div>
                <div class="functionItem">
                      <div class="iconfont icon-email"></div>
                      <div class="funName ">周六一起拼</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-inquiry-template"></div>
                    <div class="funName ">售后服务</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-Newuserzone"></div>
                    <div class="funName ">邀请返利</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-goumaipianhao"></div>
                    <div class="funName ">优先购</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-rmb1"></div>
                    <div class="funName ">积分中心</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-zhidetuijian"></div>
                    <div class="funName ">会员俱乐部</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-map"></div>
                    <div class="funName ">地址管理</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-security"></div>
                    <div class="funName ">账号安全</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-service"></div>
                    <div class="funName ">帮助与客服</div>
                </div>
                <div class="functionItem">
                    <div class="iconfont icon-confirm"></div>
                    <div class="funName ">意见反馈</div>
                </div>
                <div class="functionItem">
                </div>
            </div>
            <!-- 退出登录 -->
            <div class="exit" @click="isQuit">
                退出登录
            </div> 
            <div class="bottomBorder"></div>
        </div>
        <!-- 未登录显示界面 -->
        <div class="unLoginWrap" v-else>
                <!-- 头部导航栏 -->
            <div class="headerMerit">
                <!-- 头部内芯 -->
                <div class="header_Main">
                    <div class="iconfont icon-zhuye"></div>
                    <div class="middle">
                        <img src="@/common/images/logo.png" alt="">
                    </div>
                    <div class="right">
                        <div class="iconfont icon-Group-"></div>
                        <div class="iconfont icon-cart-full"></div>
                    </div>
                </div>
            </div>
            <div class="unLoginMain">
                <!-- img图标 -->
                <img class="logoWy" src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">

                <div class="loginType">
                    <div class="loginMassage">
                        <div class="iconfont icon-mobile-phone"></div>
                        手机号登录
                        </div> 
                    <div class="loginEmail">
                        <div class="iconfont icon-email"></div>
                        邮箱账号登录
                        </div> 
                </div>

                <div class="weixinQqweibo">
                    <div class="weix">
                        <div class="iconfont icon-weixin"></div>
                        <div class="wxTitle">微信</div>
                    </div>
                    <div class="line">|</div>
                    <div class="qq">
                        <div class="iconfont icon-qq"></div>
                        <div class="qqTitle">QQ</div>
                    </div>
                    <div class="line">|</div>
                    <div class="weibo">
                        <div class="iconfont icon-weibo"></div>
                        <div class="wbTitle">微博</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import BScroll from "better-scroll"
import {Dialog } from "vant"
Vue.use(Dialog);
    export default {
        name:"personal",
        data(){
            return{
                isLogin:false
            }
        },
        mounted(){
            new BScroll(this.$refs.personalWrap,{
                bounce:false,
                click:true
            })
        },
        methods:{
            isQuit(){
                console.log('123');
                
                Dialog.confirm({
                    width:'100%',
                    title: '',
                    message: '是否退出登录',
                    className:"dialog",
                    confirmButtonColor: "#EE3B3B"
                    })
                    .then(() => {
                        console.log("点击了退出登录");
                        
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .personalWrap
        width 100%
        height calc(100vh - 100px)
        background #f4f4f4
        .hadLoginWrap
            width 100%
            .header
                width 100%
                height 270px
                background-size cover
                background-image url('http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp')
                .headerMain
                    width 95%
                    height 100%
                    margin-left 37px
                    display flex
                    justify-content space-between
                    align-items center
                    .userInfo
                        width 73%
                        height 100%
                        display flex
                        justify-content start
                        align-items center
                        .userAvatar
                            width 140px
                            height 140px
                            border-radius 50%
                            margin-right 35px
                        .userData
                            width 340px
                            height 100px
                            font-size 35px
                            color white
                            .userName
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space:nowrap
                            .userType
                                font-size 26px
                    .tryVip
                        width 100%
                        height 150px
                        display flex
                        flex-direction column
                        justify-content space-around
                        align-items flex-end
                        .iconfont
                            margin-right 20px
                            font-size 50px
                            color #CD0000
                        .proVip
                            width 100%
                            height 80px
                            border-radius 50px 0 0 50px
                            background rgba(0,0,0,.8)
                            color wheat
                            display flex
                            justify-content center
                            align-items center
                            .iconfont
                                color wheat
                            .proInfo
                                .proName
                                    font-weight bold
                                .proUse
                                    font-size 20px
            .property
                height 280px
                background white
                .propertyTitle
                    height 40%
                    padding-left 40px
                    font-size 30px
                    line-height 100px
                .line
                    height 1%
                    width 95%
                    background #ccc 
                    margin-left 35px
                .myPurse
                    width 100%
                    height 59%
                    display flex
                    align-items center
                    .myCard
                        width 20% 
                        height 100px
                        display flex
                        flex-direction column
                        align-items center
                        justify-content center
                        .money
                            font-weight 700
                            font-size 30px
                        .cardName
                            font-size 26px
            .myFunction
                margin-top 20px
                width 100%
                height 720px                
                display flex
                flex-wrap wrap
                justify-content space-between
                align-items space-between
                &:after
                    content ""
                    width 33%
                    height 0
                .functionItem
                    width 33%
                    height 24.5%
                    display flex
                    flex-direction column
                    align-items center
                    justify-content center
                    background white
                    .iconfont
                        font-size 80px
                        color #666
                    .funName
                        font-size 30px
            .exit
                margin-top 30px
                width 100%
                height 70px
                line-height 70px
                background white
                text-align center
                font-size 30px
            .bottomBorder
                width 100%
                height 15px
            .dialog
                height 500px
                font-size 100px
        .unLoginWrap
            width 100%
            position relative
            .headerMerit
                width 100%
                height 97px
                background #fafafa
                border-bottom 3px solid #999
                .header_Main
                    width 95%
                    height 100%
                    margin 0 auto
                    display flex
                    justify-content space-between
                    align-items center
                    .iconfont
                        color #717171
                        font-size 50px
                    .middle
                        font-size 40px
                        color black
                        img
                            width 180px
                            height 50px
                    .right
                        width 120px
                        height 100%
                        display flex
                        justify-content space-between
                        align-items center  
            .unLoginMain
                .logoWy
                    width 270px
                    height 90px
                    position absolute
                    top 250px
                    left 250px
                .loginType
                    width 90%
                    height 220px
                    margin 450px auto 350px
                    display flex
                    flex-direction column
                    justify-content space-between
                    .loginMassage
                        width 100%
                        height 43%
                        background #DD1A21
                        display flex
                        justify-content center
                        align-items center
                        font-size 30px
                        color white
                        .iconfont
                            font-size 50px
                            margin-right 10px
                    .loginEmail
                        width 100%
                        height 43%
                        background white    
                        box-sizing border-box
                        border 1px solid red
                        display flex
                        justify-content center
                        align-items center
                        font-size 30px
                        color red
                        .iconfont
                            font-size 50px
                            margin-right 10px
                .weixinQqweibo
                    width 70%
                    height 50px
                    margin 0 auto
                    display flex
                    justify-content space-between
                    align-items center
                    font-size 30px
                    .iconfont
                        font-size 30px
                        margin-right 10px
                    .weix
                        display flex
                        align-items center
                    .qq
                        display flex
                        align-items center
                    .weibo
                        display flex
                        align-items center
                    

</style>