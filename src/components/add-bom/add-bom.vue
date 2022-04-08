<template>
  <div>
    <Button type="primary" @click="addBomBtnClick" icon="md-add-circle">
      新增BOM单
    </Button>
    <Modal v-model="modalControl" title="新增BOM单" footer-hide :closable="false">
      <bom-info-form
        :bomInfo="formItem"
        :parentCancelBtnClick="modalCancelBtnClick"
        :parentConfirmBtnClick="modalConfirmBtnClick"
      >
      </bom-info-form>
    </Modal>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import bomInfoForm from '_c/bom-info-form'
export default {
  name: 'addBom',
  components: {
    bomInfoForm
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
    ...mapActions(['addBomAction']),
    async modalConfirmBtnClick (newBom) {
      console.log('添加bom' + newBom)
      await new Promise((resolve) => {
        this.addBomAction(newBom)
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
    addBomBtnClick () {
      this.modalControl = true
      this.modeChange('ADD')
    }
  }
}
</script>
