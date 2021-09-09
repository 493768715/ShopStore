<template>
    <div>
      <div v-if="this.$store.state.ide">
        <shoptype></shoptype>
        <router-view name="body"></router-view>
      </div>
      <div v-else>
        <router-view name="body"></router-view>
      </div>
    </div>
</template>
<script>
import shoptype from './shoptype'
export default {
  components:{
    shoptype:shoptype
  },
  data(){
    return{
      
    }
  }
}
</script>
<style lang="scss" scoped>

</style>