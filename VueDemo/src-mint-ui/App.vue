<template>
  <mt-button  @click.native="handleClick" type="primary" style="width: 100%">LOVES</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
      methods:{
        handleClick(){
          Toast('LIULI');
        }
      }
    }
</script>

<style>

</style>
