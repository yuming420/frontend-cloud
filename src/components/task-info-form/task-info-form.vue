<template>
  <!-- TODO: paceholder -->
  <div>
    <Form ref="formItem" :model="formItem" :label-width="80">
      <FormItem label="任务名称">
        <Input
          :disabled="isUpdateMode"
          v-model="formItem.name"
        ></Input>
      </FormItem>
      <!-- <FormItem label="类型">
            <Input v-model="category"></Input>
        </FormItem> -->
      <FormItem label="完成时间">
        <Input
          :disabled="isUpdateMode"
          type="datetime-local"
          v-model="formItem.dueTime"
        ></Input>
      </FormItem>
      <FormItem label="优先级">
        <Input
          :disabled="isUpdateMode"
          v-model="formItem.priority"
        ></Input>
      </FormItem>
      <!-- TODO: validate -->
      <FormItem
        v-for="(content, listIndex) in formItem.values"
        :key="listIndex"
        :label="'子任务 ' + `${listIndex + 1}`"
        :prop="'values.' + listIndex + '.value'"
        :rules="{
          required: false,
          message: '子任务 ' + `${listIndex + 1}` + ' 不能为空',
          trigger: 'blur',
        }"
      >
        <Row :gutter="10">
          <Col span="10">名称</Col>
          <Col span="10">
            <label>
              <Input v-model="content.name" />
            </label>
          </Col>
          <Col span="10">型号</Col>
          <Col span="10">
            <label>
              <Input v-model="content.model" />
            </label>
          </Col>
          <Col span="10">数量</Col>
          <Col span="10">
            <label>
              <Input v-model="content.number" />
            </label>
          </Col>
          <Col span="10">BOM单</Col>
          <Col span="10">
            <label>
              <Input v-model="content.bomID" />
            </label>
          </Col>
          <Col span="10">详情</Col>
          <Col span="10">
            <label>
              <Input v-model="content.detail" />
            </label>
          </Col>
          <!--          <Col span="5">-->
          <!--            <Select v-model="item.type">-->
          <!--              <Option-->
          <!--                v-for="dataTypeItem in deviceDataTypeList"-->
          <!--                :value="dataTypeItem.value"-->
          <!--                :key="dataTypeItem.value"-->
          <!--              >-->
          <!--                {{ dataTypeItem.label }}-->
          <!--              </Option>-->
          <!--            </Select>-->
          <!--          </Col>-->
          <!--          <Col span="6">-->
          <!--            <Select v-model="item.protocol">-->
          <!--              <Option-->
          <!--                v-for="protocolItem in deviceDataProtocolList"-->
          <!--                :value="protocolItem.value"-->
          <!--                :key="protocolItem.value"-->
          <!--              >-->
          <!--                {{ protocolItem.label }}-->
          <!--              </Option>-->
          <!--            </Select>-->
          <!--          </Col>-->
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
              新增生产内容
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
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'taskInfoForm',
  components: {
  },
  props: {
    taskInfo: {
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
    let formItem = JSON.parse(JSON.stringify(this.taskInfo))
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
    // ...mapGetters(['formItem']),
    ...mapState({
      mode: (state) => state.device.mode
    }),
    isUpdateMode () {
      return this.mode === 'UPDATE'
    }
  },
  methods: {
    // 因为当parentConfirmBtnClick为Component addDevice所传的方法时，是异步方法，所以要在这加async用来等待异步完成
    async confirmBtnClick () {
      let newTask = this.formItem
      this.loading = true
      await this.parentConfirmBtnClick(newTask)
      this.loading = false
      this.resetFormItem()
    },
    cancelBtnClick () {
      this.parentCancelBtnClick()
      this.resetFormItem()
    },
    resetFormItem () {
      // this.valueIndex = 1
      this.formItem = JSON.parse(JSON.stringify(this.taskInfo))
      // console.log(`reset: ${JSON.stringify(this.deviceInfo)}`)
    },
    handleAdd () {
      // this.valueIndex++
      this.formItem.values.push({
        // valueIndex: this.valueIndex,
        name: '',
        model: '',
        number: '',
        bomID: '',
        detail: ''
      })
    },
    handleRemove (listIndex) {
      // console.log("Delete listItem: " + listIndex);
      this.formItem.values.splice(listIndex, 1)
    }
  },
  watch: {
    deviceInfo (val) {
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
