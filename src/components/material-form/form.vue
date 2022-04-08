<template>
  <Form ref="formRef" :model="form" :rules="rules">
    <h2>原料信息</h2>
    <FormItem label="原料编号" prop="id"
    ><Input v-model="form.id"></Input
    ></FormItem>
    <FormItem label="原料名称" prop="name"
    ><Input v-model="form.name"></Input
    ></FormItem>
    <FormItem label="供应商" prop="supplier"
    ><Input v-model="form.supplier"></Input
    ></FormItem>
    <FormItem label="备注" prop="annotation"
    ><Input v-model="form.annotation"></Input
    ></FormItem>
    <FormItem class="footer">
      <Button type="primary" @click="handleSubmit()">提交</Button>
      <Button @click="handleReset()">重置</Button>
    </FormItem>
  </Form>
</template>
<style scoped>
button {
  margin-right: 8px;
}
.footer {
  margin-top: 50px;
}
</style>
<script>
import {
  requiredBlur as required
} from '@/libs/form.validation'
import { getOr } from 'lodash/fp'
import { timeUnitNames, timeUnits } from '@/constants/timeUnits'

export default {
  props: {
    submit: { type: Function },
    materialData: { type: Object, default: null },
    mode: { type: String }
  },
  data () {
    /**
     * 默认表单信息
     */
    const form = {
      id: getOr('')('id')(this.materialData),
      name: getOr('')('name')(this.materialData),
      supplier: getOr('')('supplier')(this.materialData),
      annotation: getOr('')('annotation')(this.materialData),
    }

    return {
      /**
       * 表单数据对象
       */
      form,
      timeUnits,
      timeUnitNames,
      /**
       * 表单验证规则
       */
      rules: {
        name: [required('名称不可为空')]
      }
    }
  },
  methods: {
    /**
     * 提交表单
     */
    handleSubmit () {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.submit({ ...this.form })
        }
      })
    },
    /**
     * 表单重置
     */
    handleReset () {
      this.$refs.formRef.resetFields()
    }
  },
  mounted () {}
}
</script>
