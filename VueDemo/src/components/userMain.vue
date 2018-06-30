<template>
  <div>
    <div class="row">
      <h2 v-if="initView">输入用户名搜索</h2>
      <h2 v-if="searchLoading">Loading...</h2>
      <h2 v-if="errorMsg">{{ errorMsg }}</h2>
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.imgSrc" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import Axios from 'axios'
    export default {
      data(){
        return {
          initView: true,
          searchLoading: false,
          users: null, // [{url: '', imgSrc: '', name: ''}]
          errorMsg: ''
        }
      },
      mounted(){
        // 订阅发布搜索消息
        Pubsub.subscribe('search', (msg, searchName) =>{ // 使用 ajax 发送请求
          //更新状态
          this.initView = false
          this.searchLoading = true
          this.users = null
          this.errorMsg = ''
          console.log('=======================')
          //发 ajax 请求
          const url = `https://api.github.com/search/users?q=${searchName}`
          Axios.get(url).then(response => {
            const result = response.data
            console.log(url)
            console.log('-------------------')
            console.log(response)
            const users = result.items.map(item => ({
              url: item.html_url,
              imgSrc: item.avatar_url,
              name: item.login
            }))
            if(response.data.items.length > 0){
              //成功,更新状态（成功）
              this.searchLoading = false
              this.users = users
            }else{
              this.searchLoading = false
              this.errorMsg = '无该用户！'
            }

          }).catch(error => {
            //失败,更新状态（失败）
            this.searchLoading = false
            this.errorMsg = '搜索失败...'
          })

        })
      }
    }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
