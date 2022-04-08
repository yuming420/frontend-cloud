<template>
  <!-- TODO: paceholder -->
  <div>
    <Form ref="formItem" :model="formItem" :label-width="80">
      <FormItem label="产品名称">
        <Input
          :disabled="isUpdateMode"
          v-model="formItem.name"
        ></Input>
      </FormItem>
      <!-- <FormItem label="类型">
            <Input v-model="category"></Input>
        </FormItem> -->
      <FormItem label="型号">
        <Input
          :disabled="isUpdateMode"
          v-model="formItem.model"
        ></Input>
      </FormItem>
      <FormItem label="产品描述">
        <Input
          :disabled="isUpdateMode"
          v-model="formItem.description"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
        ></Input>
      </FormItem>
      <!-- TODO: validate -->
      <FormItem
        v-for="(item, listIndex) in formItem.values"
        :key="listIndex"
        :label="'物料 ' + `${listIndex + 1}`"
        :prop="'values.' + listIndex + '.value'"
        :rules="{
          required: false,
          message: '物料 ' + `${listIndex + 1}` + ' 不能为空',
          trigger: 'blur',
        }"
      >
        <Row :gutter="10">
          <Col span="10">
            编号
          </Col>
          <Col span="10">
            <label>
              <Input v-model="item.name" />
            </label>
          </Col>
          <Col span="10">
            数量
          </Col>
          <Col span="10">
            <label>
              <Input v-model="item.number" />
            </label>
          </Col>
          <Col span="1">
            <Button
              @click="handleRemove(listIndex)"
              size="small"
              shape="circle"
            >
              <Icon type="md-close" />
            </Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Row type="flex" justify="start">
          <Col span="24">
            <Button type="dashed" long @click="handleAdd" icon="md-add">
              新增原料数据
            </Button>
          </Col>
        </Row>
      </FormItem>
      <Row :gutter="8" type="flex" justify="end">
        <Col>
          <!-- <span @click="cancelSlotClick">
            <slot name="cancelBtn" />
          </span> -->
          <Button @click="cancelBtnClick">取消</Button>
        </Col>
        <Col>
          <!-- <span @click="confirmSlotClick">
            <slot name="confirmBtn" />
          </span> -->
          <Button type="primary" :loading="loading" @click="confirmBtnClick">
            确认
          </Button>
        </Col>
      </Row>
    </Form>
  </div>
</template>
<script>
// TODO: remove property valueIndex
import { mapState } from 'vuex'
export default {
  name: 'bomInfoForm',
  components: {
  },
  props: {
    bomInfo: {
      type: Object
    },
    parentCancelBtnClick: {
      type: Function
    },
    parentConfirmBtnClick: {
      type: Function
    }
  },
  data () {
    let valueIndex = 1
    let formItem = JSON.parse(JSON.stringify(this.bomInfo))
    // formItem.values[0] = {...formItem.values[0], valueIndex}
    return {
      valueIndex,
      formItem,
      loading: false,
      bindingModalControl: false,
      activeDataSource: {},
      bindingList: []
    }
  },
  computed: {
    ...mapState({
      // deviceDataTypeList: (state) => state.bom.deviceDataTypeList,
      // deviceDataProtocolList: (state) => state.device.deviceDataProtocolList,
      mode: (state) => state.device.mode
    }),
    isUpdateMode () {
      return this.mode === 'UPDATE'
    }
  },
  methods: {
    // 因为当parentConfirmBtnClick为Component addDevice所传的方法时，是异步方法，所以要在这加async用来等待异步完成
    async confirmBtnClick () {
      let newBom = this.formItem
      this.loading = true
      await this.parentConfirmBtnClick(newBom)
      this.loading = false
      this.resetFormItem()
    },
    cancelBtnClick () {
      this.parentCancelBtnClick()
      this.resetFormItem()
    },
    resetFormItem () {
      // this.valueIndex = 1
      this.formItem = JSON.parse(JSON.stringify(this.bomInfo))
      // console.log(`reset: ${JSON.stringify(this.deviceInfo)}`)
    },
    handleAdd () {
      // this.valueIndex++
      this.formItem.values.push({
        // valueIndex: this.valueIndex,
        name: '',
        number: ''
      })
    },
    handleRemove (listIndex) {
      // console.log("Delete listItem: " + listIndex);
      this.formItem.values.splice(listIndex, 1)
    }
  },
  watch: {
    bomInfo (val) {
      this.formItem = JSON.parse(JSON.stringify(val))
      // console.log(`deviceInfo: ${JSON.stringify(val)}`)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // console.log(this._uid)
    })
  }
}
</script>
