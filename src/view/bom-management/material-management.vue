<template>
  <Card>
    <Row type="flex" justify="end">
      <Button
        class="add-edge"
        type="primary"
        icon="md-add"
        ghost
        to="/bom_management/add_material"
      >
        添加原料
      </Button>
    </Row>
    <Row>
      <paged-table
        :loading="loading"
        :columns="columns"
        :data-source=" materialList"
        :total=" materialList.length"
        style="margin-bottom: 50px"
      />
    </Row>
  </Card>
</template>

<script>
import PagedTable from '_c/paged-table/paged-table.vue'
import PopConfirmButton from '_c/pop-confirm-button'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MaterialManagement',
  components: {
    PagedTable
  },
  data: function () {
    return {
      loading: true,
      issueProcess: null,
      columns: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '供应商',
          key: 'supplier'
        },
        {
          title: '备注',
          key: 'annotation'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'getAllMaterialListAction'
    ]),
    ...mapMutations(['setMaterialList'])
  },
  mounted () {
    this.loading = true
    this.getAllMaterialListAction().then(() => {
      this.loading = false
    }).catch((err) => this.$Message.error(err.message))
  },
  computed: {
    ...mapState({
      materialList: (state) => state.material.materialList
    })
  }
}
</script>

<style scoped>

</style>
