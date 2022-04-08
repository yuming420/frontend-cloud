<template>
  <Card>
    <Row style="margin: 0 1%">
      <Col span="2">
        <add-task />
      </Col>
    </Row>
    <!--    <Row type="flex" justify="end">-->
    <!--      <Button-->
    <!--        class="add-edge"-->
    <!--        type="primary"-->
    <!--        icon="md-add"-->
    <!--        ghost-->
    <!--        to="/bom_management/add_material"-->
    <!--      >-->
    <!--        添加bom单-->
    <!--      </Button>-->
    <!--    </Row>-->
    <Row>
      <paged-table
        :loading="loading"
        :columns="columns"
        :data-source=" taskList"
        :total=" taskList.length"
        style="margin-bottom: 50px"
      />
    </Row>
  </Card>
</template>

<script>
import PagedTable from '_c/paged-table/paged-table.vue'
import PopConfirmButton from '_c/pop-confirm-button'
import { mapState, mapActions, mapMutations } from 'vuex'
import addTask from '_c/add-task'

export default {
  name: 'TaskManagement',
  components: {
    addTask,
    PagedTable
  },
  data: function () {
    return {
      loading: true,
      issueProcess: null,
      columns: [
        {
          title: '发布人',
          key: 'owner'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '发布时间',
          key: 'releaseTime'
        },
        {
          title: '截止时间',
          key: 'dueTime'
        },
        {
          title: '优先级',
          key: 'priority'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, { row }) => {
            const detailButton = h('Button',
              {
                props: {
                  size: 'small',
                  type: 'primary'
                },
                style: {
                  marginRight: '1%'
                },
                on: {
                  click: () => {
                    this.$store.state.taskInfo = row
                    // console.log('row:' + `${JSON.stringify(row)}`)
                    console.log('taskInfo: ' + `${JSON.stringify(this.$store.state.taskInfo)}`)
                    this.$router.push('/task_management/task_detail')
                  }
                }
              },
              '详情'
            )
            const buttons = [detailButton]
            return h('div', buttons)
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getTaskListAction'
    ]),
    ...mapMutations(['setTaskList'])
  },
  mounted () {
    this.loading = true
    this.getTaskListAction().then(() => {
      this.loading = false
    }).catch((err) => this.$Message.error(err.message))
  },
  computed: {
    ...mapState({
      taskList: (state) => state.task.taskList
    })
  }
}
</script>

<style scoped>

</style>
