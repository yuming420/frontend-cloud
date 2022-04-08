<template>
  <Card>
    <Row type="flex" justify="end">
      <Button
        class="add-edge"
        type="primary"
        icon="md-add"
        ghost
        to="/edge_management/create-edge"
      >
        新增边缘端
      </Button>
    </Row>
    <Row>
      <paged-table
        :loading="loading"
        :columns="columns"
        :data-source="edgeList"
        :total="edgeList.length"
        style="margin-bottom: 50px"
      />
    </Row>
  </Card>
</template>

<script>
import PagedTable from '_c/paged-table/paged-table.vue'
import PopConfirmButton from '_c/pop-confirm-button'
import { mapState, mapActions, mapMutations } from 'vuex'
import { timeUnitNames } from '@/constants/timeUnits'
import { edgeStatusNames } from '@/constants/edgeStatus'

export default {
  name: 'edge-detail',
  components: {
    PagedTable
  },
  data: function () {
    return {
      loading: true,
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '描述',
          key: 'description'
        },
        {
          title: '状态',
          key: 'status',
          render: (h, { row }) => h('span', edgeStatusNames[row.status])
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, { row }) => {
            const connectButton = h(
              'Button',
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
                    this.handleConnect(row.id)
                  }
                }
              },
              '详情'
            )
            const buttons = [
              connectButton
            ]
            return h('div', buttons)
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getEdgeListAction',
      'removeEdgeAction',
      'connectEdgeAction',
      'connectStopEdgeAction'
    ]),
    ...mapMutations(['setEdge']),
    handleDelete (id) {
      this.removeEdgeAction(id)
        .then(() => this.$Message.success('删除成功'))
        .catch((err) => this.$Message.error(err.message))
    },
    handleEdit (data) {
      this.setEdge(data)
      this.$router.push({ path: 'modify-edge' })
    },
    handleConnect (id) {
      this.loading = true
      this.connectEdgeAction(id)
        .then(() => {})
        .catch((err) => this.$Message.error(err.message))
        .finally(() => {
          this.loading = false
        })
    },
    handleDisconnect (id) {
      this.loading = true
      this.connectStopEdgeAction(id)
        .then(() => {})
        .catch((err) => this.$Message.error(err.message))
        .finally(() => {
          this.loading = false
        })
    }
  },
  mounted () {
    this.loading = true
    this.getEdgeListAction()
      .then(() => {
        this.loading = false
      })
      .catch((err) => this.$Message.error(err.message))
  },
  computed: {
    ...mapState({
      edgeList: (state) => state.edgeManagement.edgeList
    })
  }
}
</script>

<style scoped>
</style>
