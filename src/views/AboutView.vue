<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between; background-color: blue; color: white; padding: 10px;">
      <p>头部</p>
      <p><el-icon>
          <Search />
        </el-icon></p>
    </div>
    <div class="box">
      <ul v-for="(item, index) in arr" :key="index">
        <li>{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { user } from "@/api/index"
const arr = ref([])
user().then(res => {
  console.log(res);
  arr.value = res.data.channels
})
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  align-items: center;
}
ul {
  width: 300px;
  li {
    width: 80px;
    list-style: none;
  }
}
</style>
