<template>
  <Card>
    <Row style="margin: 0 1%">
      <Col span="2">
        <add-bom />
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
        :data-source=" bomList"
        :total=" bomList.length"
        style="margin-bottom: 50px"
      />
    </Row>
  </Card>
</template>

<script>
import PagedTable from '_c/paged-table/paged-table.vue'
import PopConfirmButton from '_c/pop-confirm-button'
import { mapState, mapActions, mapMutations } from 'vuex'
import addBom from '_c/add-bom'

export default {
  name: 'BomDetail',
  components: {
    addBom,
    PagedTable
  },
  data: function () {
    return {
      loading: true,
      issueProcess: null,
      columns: [
        {
          title: '编号',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '型号',
          key: 'model'
        },
        {
          title: '描述',
          key: 'description'
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, { row }) => {
            const deleteButton = h(PopConfirmButton, {
              props: {
                buttonProps: {
                  size: 'small', type: 'error'
                },
                buttonText: '删除',
                popTipTitle: '确定要删除这个bom单？',
                ok: () => this.handleDelete(row.id)
              }
            })
            const editButton = h('Button',
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
                    this.handleEdit(row)
                  }
                }
              },
              '编辑'
            )
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
                    this.$store.state.bomInfo = row
                    // console.log('row:' + `${JSON.stringify(row)}`)
                    console.log('bomInfo: ' + `${JSON.stringify(this.$store.state.bomInfo)}`)
                    this.$router.push('/bom_management/bom_detail')
                  }
                }
              },
              '详情'
            )
            const buttons = [detailButton, editButton, deleteButton]
            return h('div', buttons)
          }
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getBomListAction'
    ]),
    ...mapMutations(['setBomList'])
  },
  mounted () {
    this.loading = true
    this.getBomListAction().then(() => {
      this.loading = false
    }).catch((err) => this.$Message.error(err.message))
  },
  computed: {
    ...mapState({
      bomList: (state) => state.bom.bomList
    })
  }
}
</script>

<style scoped>

</style>
