<template>
  <div>
    <div>用户名：<input type="text" v-model="username" /></div>
    <div>密码：<input type="password" v-model="passwd" /></div>

    <div><input type="button" value="登录" @click="login" /></div>

    <div>{{computedMsg}}</div>

    <div>{{190 | toFixed}}</div>
  </div>
</template>

<script lang="ts">
import * as API from '@/api/index'
import * as varTools from '@/utils/var-tools'
import Encode from '@/utils/sha1'
import { Component, Prop, Vue, Provide } from 'vue-property-decorator'
import { setCookie } from '@/utils/cookies'

// 引入组件
@Component({
  components: {
    // input
  }
})
export default class Login extends Vue {
  // data
  @Provide() private username: string = ''
  @Provide() private passwd: string = ''
  @Provide() private test!: string
  @Provide() private uid: string = varTools.uid()

  @Prop() private msg!: string // props参数

  // methods
  login () {
    console.log('login')
    // 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.
    // 不能直接new一个函数，通过重新as一个变量，或者new其原型的constructor 都可以解决
    // const encodePsw = new Encode.prototype.constructor().encodePsw(this.passwd)
    const E = Encode as any
    const encodePsw = new E().encodePsw(this.passwd)
    let params = {
      loginId: this.username,
      saltedPassword: encodePsw.token,
      salt: encodePsw.salt,
      host: varTools.host,
      captchaKey: 'ffkk',
      captchaCode: '3344',
      randomStr: this.uid,
      checkQrCode: 1,
      otp: 1,
      domain: varTools.host
    }
    API.login(params).then((res: any) => {
      console.log(res, 'data')
      setCookie('token', res.result.sessionId)
      setCookie('userName', params.loginId)
      setCookie('userId', res.result.userId)
      setCookie('sn', res.result.sn)
      this.$router.push({name: 'home/index'})
    }).catch(err => {
      alert(err.error.message)
    })
  }

  // computed
  get computedMsg () {
    return 'username: ' + this.username
  }

  // life cycle
  mounted () {
  }
}
</script>
