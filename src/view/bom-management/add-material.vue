<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="8">
        <material-form ref="formRef" :submit="handleSubmit" mode="ADD" />
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MaterialForm from '_c/material-form/form'

export default {
  name: 'add-material',
  components: {
    MaterialForm
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['insertMaterialAction']),
    async handleSubmit (data) {
      this.$Spin.show()
      this.insertMaterialAction(data).then(() => {
        this.$Message.success('原料添加成功')
        this.$refs.formRef.handleReset()
      }).catch(err => this.$Message.error(err.message))
        .finally(() => this.$Spin.hide())
      // console.log(data)
      // let formData = new FormData()
      // formData.append('id', data.id)
      // formData.append('name', data.name)
      // formData.append('supplier', data.supplier)
      // formData.append('annotation', data.annotation)
      // this.$Spin.show()
      // await this.insertMaterialAction(formData)
      //   .then(() => {
      //     this.$Message.success('原料添加成功')
      //     this.$refs.formRef.handleReset()
      //   })
      //   .catch((err) => this.$Message.error(err.message))
      //   .finally(() => this.$Spin.hide())
    }
  }
}
</script>

<style scoped>
</style>
