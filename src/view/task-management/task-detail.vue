<template>
  <Form ref="formItem" :model="formItem" :label-width="80">
    <Card class="card">
      <p slot="title">任务基础信息</p>
      <FormItem label="任务名称">
        <span>{{ this.$store.state.taskInfo.name }}</span>
      </FormItem>
      <FormItem label="优先级">
        <span>{{ this.$store.state.taskInfo.priority }}</span>
      </FormItem>
      <FormItem label="截止日期">
        <span>{{ this.$store.state.taskInfo.dueTime }}</span>
      </FormItem>
      <FormItem label="发布日期">
        <span>{{ this.$store.state.taskInfo.releaseTime }}</span>
      </FormItem>
      <FormItem label="完成日期">
        <span>{{ this.$store.state.taskInfo.finishTime }}</span>
      </FormItem>
      <FormItem label="状态">
        <span>{{ this.$store.state.taskInfo.status }}</span>
      </FormItem>
    </Card>
    <Card>
      <p slot="title">详细信息</p>

      <paged-table
        :loading="loading"
        :columns="columns"
        :data-source=" this.$store.state.taskInfo.content"
        :total=" this.$store.state.taskInfo.content.length"
        style="margin-bottom: 50px"
      />

    </Card>
  </Form>
</template>

<script>
import PagedTable from '_c/paged-table/paged-table.vue'
import PopConfirmButton from '_c/pop-confirm-button'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'taskDetail',
  components: {
    PagedTable
  },
  data: function () {
    return {
      formItem: this.task,
      loading: false,
      issueProcess: null,
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '数量',
          key: 'number'
        },
        {
          title: '型号',
          key: 'model'
        },
        {
          title: 'bomID',
          key: 'bomID'
        },
        {
          title: '详情',
          key: 'detail'
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
  },
  computed: {
    ...mapState({
      task: (state) => state.task.taskInfo
    })
  }
}
</script>

<style scoped>

</style>
