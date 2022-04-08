<template>
  <div>
    <Button type="primary" @click="addTaskBtnClick" icon="md-add-circle">
      新增任务
    </Button>
    <Modal v-model="modalControl" title="新增任务" footer-hide :closable="false">
      <task-info-form
        :taskInfo="formItem"
        :parentCancelBtnClick="modalCancelBtnClick"
        :parentConfirmBtnClick="modalConfirmBtnClick"
      >
      </task-info-form>
    </Modal>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import taskInfoForm from '_c/task-info-form'
export default {
  name: 'addTask',
  components: {
    taskInfoForm
  },
  // props: {
  //   deviceInfo: {
  //     type: Object
  //   }
  // },
  data () {
    return {
      modalControl: false
    }
  },
  computed: {
    ...mapGetters(['formItem'])
  },
  methods: {
    ...mapMutations(['resetFormItem', 'modeChange']),
    ...mapActions(['addTaskAction']),
    async modalConfirmBtnClick (newTask) {
      console.log('add-task' + `${JSON.stringify(newTask)}`)
      await new Promise((resolve) => {
        this.addTaskAction(newTask)
        setTimeout(() => {
          this.modalControl = false
          this.resetFormItem()
          resolve()
        }, 1000)
      })
      // console.log("AddDevice ConfirmBtnClick")
    },
    modalCancelBtnClick () {
      this.modalControl = false
      this.resetFormItem()
      // console.log("AddDevice cancelBtnClick")
    },
    addTaskBtnClick () {
      this.modalControl = true
      this.modeChange('ADD')
    }
  }
}
</script>
