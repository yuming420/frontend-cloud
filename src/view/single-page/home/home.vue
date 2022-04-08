<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" text="边缘端状态"></chart-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="上周订单完成情况"/>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="efficiencyData" text="边缘端生产效率"/>
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <example style="height: 310px;"/>
      </Card>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '进行中任务', icon: 'md-person-add', count: 8, color: '#2d8cf0' },
        { title: '累计完成', icon: 'md-locate', count: 203, color: '#19be6b' },
        { title: '新增任务', icon: 'md-help-circle', count: 2, color: '#ff9900' },
        { title: '异常数量', icon: 'md-share', count: 6, color: '#ed3f14' },
        { title: '边缘端数量', icon: 'md-chatbubbles', count: 9, color: '#E46CBB' },
        { title: '总设备数量', icon: 'md-map', count: 100, color: '#9A66E4' }
      ],
      pieData: [
        { value: 2, name: '休息中' },
        { value: 5, name: '生产中' },
        { value: 1, name: '异常停止' },
        { value: 1, name: '离线' }
      ],
      barData: {
        Mon: 2,
        Tue: 4,
        Wed: 3,
        Thu: 5,
        Fri: 2,
        Sat: 3,
        Sun: 6
      },
      efficiencyData: {
        edge_1: 0.89,
        edge_2: 0.91,
        edge_3: 0,
        edge_4: 0,
        edge_5: 0.93,
        edge_6: 0.88,
        edge_7: 0,
        edge_8: 0,
        edge_9: 0.95
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
