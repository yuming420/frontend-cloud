<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="8">
        <task-form ref="formRef" :submit="handleSubmit"/>
      </Col>
    </Row>
  </div>
</template>

<script>
import TaskForm from '_c/task/form'
import { mapActions } from 'vuex'

export default {
  name: 'create-task',
  components: {
    TaskForm
  },
  data () {
    return {

    }
  },
  methods: {
    handleSubmit (data) {
      this.$Spin.show()
      this.addEdgeAction(data).then(() => {
        this.$Message.success('边缘端添加成功')
        this.$refs.formRef.handleReset()
      }).catch(err => this.$Message.error(err.message))
        .finally(() => this.$Spin.hide())
    },
    ...mapActions(['addEdgeAction'])
  }
}
</script>

<style scoped>

</style>
