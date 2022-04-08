<template>
    <Form ref="formItem" :model="formItem" :label-width="80">
      <Card class="card">
        <p slot="title">bom单基础信息</p>
        <FormItem label="bom单名称">
          <span>{{ this.$store.state.bomInfo.name }}</span>
        </FormItem>
        <FormItem label="型号">
          <span>{{ this.$store.state.bomInfo.model }}</span>
        </FormItem>
        <FormItem label="设备描述">
          <span>{{ this.$store.state.bomInfo.description }}</span>
        </FormItem>
      </Card>
      <Card>
          <p slot="title">物料信息</p>

            <paged-table
              :loading="loading"
              :columns="columns"
              :data-source=" this.$store.state.bomInfo.values"
              :total=" this.$store.state.bomInfo.values.length"
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
  name: 'BomDetail',
  components: {
    PagedTable
  },
  data: function () {
    return {
      formItem: this.bom,
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
      bom: (state) => state.bom.bomInfo
    })
  }
}
</script>

<style scoped>

</style>
