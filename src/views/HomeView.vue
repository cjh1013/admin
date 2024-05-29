<template>
  <div class="box">
    <div class="top">积云消息登录</div>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
      class="demo-ruleForm" status-icon>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="ruleForm.mobile" />
      </el-form-item>
      <el-form-item label="密码" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="resetForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router';
import { login } from "@/api/index"
const router = useRouter()
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { lingList } from "@/api/loginlist/index"

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<lingList>({
  mobile: "14725895475",
  code: "246810"
})
const rules = reactive<FormRules<lingList>>({
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})
const resetForm = () => {
  login(ruleForm).then(res => {
    console.log(res);
    localStorage.setItem("token", res.data.token)
    router.push('/about')
  })
}
</script>
<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100%;

  .top {
    text-align: center;
    background-color: blue;
    padding: 10px;
    color: white;
  }

  .demo-ruleForm {
    margin-top: 5px;

    .el-input {
      border: 0;
    }

    .el-button {
      border-radius: 50px;
      width: 100%;
    }
  }
}
</style>