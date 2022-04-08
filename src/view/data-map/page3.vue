<template>
    <Row class="page3">
        <Col style="width:26%;">
            <div class="left">
                <span class='title'><span class="title-text">历史信息</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
                <div class="left1" style="height:50%;">
                    <div style="height:65%;">
                        <channel-bar
                            id="left_1"
                            title="过去五天订单完成数"
                            :data="data1"
                            ref="channelBar1"
                        ></channel-bar>
<!--                        <distribution-solider-->
<!--                            id="left_2"-->
<!--                            :data="data2"-->
<!--                            ref="distributionSolider1"-->
<!--                        ></distribution-solider>-->
                    </div>
                    <div style="height: 35%; display: flex">
                        <div style="height: 100%; width: 100%;">
                            <pie ref="chart3" id="pie_1" :data="pieData1"></pie>
                        </div>
<!--                        <div style="height: 100%; width: 33.33%;">-->
<!--                            <pie ref="chart3" id="pie_3" :data="pieData2"></pie>-->
<!--                        </div>-->
<!--                        <div style="height: 100%; width: 33.33%;">-->
<!--                            <pie ref="chart3" id="pie_2" :data="pieData3"></pie>-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="left1" style="height:50%;">
                    <red-pocket ref="redPocket"></red-pocket>
                </div>
<!--                <div style="height:22%;">-->
<!--                    <div style="height:100%;">-->
<!--                        <channel-bar-->
<!--                            id="left_5"-->
<!--                            title="小标题2"-->
<!--                            :data="data3"-->
<!--                            ref="channelBar2"-->
<!--                        ></channel-bar>-->
<!--                        <distribution-solider-->
<!--                            id="left_6"-->
<!--                            :data="data4"-->
<!--                            ref="distributionSolider2"-->
<!--                        ></distribution-solider>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;                        <div style="height:45%;"></div>&ndash;&gt;-->
<!--                </div>-->
            </div>
        </Col>
        <Col style="width:48%;padding:0 1%;">
            <div class="center-top">
                <china-map ref="chinaMap"></china-map>
            </div>
            <div class="center-bottom">
                <span class='title'><span class="title-text">边端信息</span></span>
                <span class="angle1"></span>
                <span class="angle2"></span>
                <span class="angle3"></span>
                <span class="angle4"></span>
                <Row class="bottom-radars">
<!--                  <Col span="8">-->
<!--                    <div class="circlePie" id="circlePie">-->
<!--                      <canvas id="main" width="500" height="500"></canvas>-->
<!--                      &lt;!&ndash;                    <canvas id="dot"></canvas>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </Col>-->
                  <div class="circlePie" id="circlePie">
                    <canvas id="main" width="500" height="500"></canvas>
<!--                                        <canvas id="dot"></canvas>-->
                  </div>
<!--                    <Col span="6">-->
<!--                        <radar-->
<!--                            id='bottom_1_1'-->
<!--                            :data=data5-->
<!--                            ref="chart1"-->
<!--                        ></radar>-->
<!--                    </Col>-->
                    <Col span="6">
                        <radar
                            id='bottom_1_2'
                            :data=data6
                            ref="chart2"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_3'
                            :data=data7
                            ref="chart3"
                        ></radar>
                    </Col>
                    <Col span="6">
                        <radar
                            id='bottom_1_4'
                            :data=data8
                            ref="chart4"
                        ></radar>
                    </Col>
                </Row>
                <Row class="bottom-bars">
                    <Col span="6">
                        <double-bar
                            id="bottom_2_1"
                            :data="data9"
                            ref="chart5"
                        ></double-bar>
                    </Col>
                    <Col span="6">
                        <double-bar
                            id="bottom_2_2"
                            :data="data10"
                            ref="chart6"
                        ></double-bar>
                    </Col>
                    <Col span="6">
                        <double-bar
                            id="bottom_2_3"
                            :data="data11"
                            ref="chart7"
                        ></double-bar>
                    </Col>
                    <Col span="6">
                        <double-bar
                            id="bottom_2_4"
                            :data="data12"
                            ref="chart8"
                        ></double-bar>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col style="width:26%">
            <div class="right-1">
                <div class="right1-1">
                    <span class='title'><span class="title-text">设备信息</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <webcasts-risk ref='webcastsRisk'></webcasts-risk>
                </div>
            </div>
            <div class="right-1">
                <div class="right1-1">
                    <span class='title'><span class="title-text">任务分析</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <device-safe-risk ref='deviceSafeRisk'></device-safe-risk>
                </div>
            </div>
            <div class="right-2">
                <div class="right1-1">
                    <span class='title'><span class="title-text">异常</span></span>
                    <span class="angle1"></span>
                    <span class="angle2"></span>
                    <span class="angle3"></span>
                    <span class="angle4"></span>
                    <div class="circular">
                        <div class="canvas">
                            <div class="subtitle"></div>
                            <div class="canvasList">
                                <double-ring
                                    id='canvas_1'
                                    title="a"
                                    color='#00CCFF'
                                    ref="ring1"
                                ></double-ring>
<!--                                <double-ring-->
<!--                                    id='canvas_2'-->
<!--                                    title="b"-->
<!--                                    color='#EDCE43'-->
<!--                                    ref="ring2"-->
<!--                                ></double-ring>-->
<!--                                <double-ring-->
<!--                                    id='canvas_3'-->
<!--                                    title="c"-->
<!--                                    color='#F83552'-->
<!--                                    ref="ring3"-->
<!--                                ></double-ring>-->
                            </div>
                        </div>
<!--                        <hot-words ref="hotWords"></hot-words>-->
                    </div>
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
const chinaMap = () => import('./components/page3/chinaMap')
const channelBar = () => import('./components/page3/channelBar')
const distributionSolider = () => import('./components/page3/distributionSolider')
const pie = () => import('./components/pie')
const redPocket = () => import('./components/page3/redPocket')
const radar = () => import('./components/radar')
const doubleBar = () => import('./components/page3/doubleBar')
const webcastsRisk = () => import('./components/page3/webcastsRisk')
const deviceSafeRisk = () => import('./components/page3/deviceSafeRisk')
const doubleRing = () => import('./components/page3/doubleRing')
const hotWords = () => import('./components/page3/hotWords')

export default {
  name: 'page3',
  components: {
    chinaMap,
    channelBar,
    distributionSolider,
    pie,
    redPocket,
    radar,
    doubleBar,
    webcastsRisk,
    deviceSafeRisk,
    doubleRing,
    hotWords
  },
  data () {
    return {
      circle: {
        x: 250,
        y: 250,
        radius: 218
      },
      title: ['边端个数:19', '在线边端个数:17', '累计办公时长:134,23', '累计服务好友次数:234,234', '累计服务好友数量:123,123', '累计设备连接个数:8,123'],
      warea: { x: 250, y: 250, max: 700 },
      dots: [],
      animationFrame1: null,
      animationFrame2: null,
      centerBox: {
        width: 0,
        height: 0
      },
      data1: [
        {
          // subtitle: '675人（2345次/4533元）',
          top: '20%',
          data: { name: '2022/4/3', value: 85, color: '#0E4CFF' }
        },
        {
          // subtitle: '675人（2345次/4533元）',
          top: '36%',
          data: { name: '2022/4/2', value: 60, color: '#B405FD' }
        },
        {
          // subtitle: '675人（2345次/4533元）',
          top: '53%',
          data: { name: '2022/4/1', value: 50, color: '#FE9900' }
        },
        {
          // subtitle: '675人（2345次/4533元）',
          top: '69%',
          data: { name: '2022/3/31', value: 74, color: '#FF6600' }
        },
        {
          // subtitle: '675人（2345次/4533元）',
          top: '85%',
          data: { name: '2022/3/30', value: 81, color: '#7F05FD' }

        }
      ],
      data3: [
        {
          subtitle: '675人（2345次/4533元）',
          top: '29%',
          data: { name: '红包转账', value: 45, color: '#0E4CFF' }
        },
        {
          subtitle: '675人（2345次/4533元）',
          top: '54%',
          data: { name: '访问涉赌应用', value: 60, color: '#FE9900' }
        },
        {
          subtitle: '675人（2345次/4533元）',
          top: '78%',
          data: { name: '使用炒股应用', value: 12, color: '#7F05FD' }
        }
      ],
      data2: [ // 网赌用户排名数据
        {
          top: '16%',
          color: '14,73,245',
          data: [
            { name: 'a', value: 10 },
            { name: 'b', value: 9 },
            { name: 'c', value: 8 },
            { name: 'd', value: 7 },
            { name: 'e', value: 6 },
            { name: 'f', value: 5 },
            { name: 'g', value: 4 },
            { name: 'h', value: 3 },
            { name: 'i', value: 2 },
            { name: 'j', value: 1 }
          ]
        },
        {
          top: '34%',
          color: '170,6,243',
          data: [
            { name: 'k', value: 10 },
            { name: 'l', value: 9 },
            { name: 'm', value: 8 },
            { name: 'n', value: 7 },
            { name: 'o', value: 6 },
            { name: 'p', value: 5 },
            { name: 'q', value: 4 },
            { name: 'r', value: 3 },
            { name: 's', value: 2 },
            { name: 't', value: 1 }
          ]
        },
        {
          top: '50%',
          color: '254,153,0',
          data: [
            { name: 'u', value: 10 },
            { name: 'v', value: 9 },
            { name: 'w', value: 8 },
            { name: 'x', value: 7 },
            { name: 'y', value: 6 },
            { name: 'z', value: 5 },
            { name: 'a', value: 4 },
            { name: 'b', value: 3 },
            { name: 'c', value: 2 },
            { name: 'd', value: 1 }
          ]
        },
        {
          top: '68%',
          color: '255,102,0',
          data: [
            { name: 'e', value: 10 },
            { name: 'f', value: 9 },
            { name: 'g', value: 8 },
            { name: 'h', value: 7 },
            { name: 'i', value: 6 },
            { name: 'j', value: 5 },
            { name: 'k', value: 4 },
            { name: 'l', value: 3 },
            { name: 'm', value: 2 },
            { name: 'n', value: 1 }
          ]
        },
        {
          top: '85%',
          color: '127,5,253',
          data: [
            { name: 'o', value: 10 },
            { name: 'p', value: 9 },
            { name: 'q', value: 8 },
            { name: 'r', value: 7 },
            { name: 's', value: 6 },
            { name: 't', value: 5 },
            { name: 'u', value: 4 },
            { name: 'v', value: 3 },
            { name: 'w', value: 2 },
            { name: 'x', value: 1 }
          ]
        }
      ],
      data4: [
        {
          top: '30%',
          color: '14,73,245',
          data: [
            { name: '1', value: 10 },
            { name: '2', value: 9 },
            { name: '3', value: 8 },
            { name: '4', value: 7 },
            { name: '5', value: 6 },
            { name: '6', value: 5 },
            { name: '7', value: 4 },
            { name: '8', value: 3 },
            { name: '9', value: 2 },
            { name: '10', value: 1 }
          ]
        },
        {
          top: '57%',
          color: '254,153,0',
          data: [
            { name: '1', value: 10 },
            { name: '2', value: 9 },
            { name: '3', value: 8 },
            { name: '4', value: 7 },
            { name: '5', value: 6 },
            { name: '6', value: 5 },
            { name: '7', value: 4 },
            { name: '8', value: 3 },
            { name: '9', value: 2 },
            { name: '10', value: 1 }
          ]
        },
        {
          top: '83%',
          color: '127,5,253',
          data: [
            { name: '1', value: 10 },
            { name: '2', value: 9 },
            { name: '3', value: 8 },
            { name: '4', value: 7 },
            { name: '5', value: 6 },
            { name: '6', value: 5 },
            { name: '7', value: 4 },
            { name: '8', value: 3 },
            { name: '9', value: 2 },
            { name: '10', value: 1 }
          ]
        }
      ],
      data5: {
        title: '分析1',
        position: ['5%', '14%'],
        center: ['50%', '60%'],
        indicator: [
          { text: '微信' },
          { text: 'QQ' },
          { text: '微博' },
          { text: '陌陌' },
          { text: 'INS' },
          { text: '抖音' }
        ],
        data: [
          {
            name: '安装量',
            color: '#0DE4EE',
            value: [100, 8, 0.40, -80, 2000, 345]
          },
          {
            name: '使用时长',
            color: '#0D88F3',
            value: [60, 5, 0.30, -100, 1500, 232]
          }
        ]
      },
      data6: {
        title: '分析2',
        position: ['5%', '14%'],
        center: ['50%', '60%'],
        indicator: [
          { text: '微信' },
          { text: 'QQ' },
          { text: 'SNS' },
          { text: '漂流瓶' },
          { text: '陌陌' },
          { text: '摇一摇' },
          { text: 'INS' },
          { text: '抖音' }
        ],
        data: [
          {
            name: '个人信息涉军',
            color: '#6514FF',
            value: [100, 8, 0.40, -80, 2000, 345, 12, 654]
          },
          {
            name: '内容涉军',
            color: '#B370FD',
            value: [60, 5, 0.30, -100, 1500, 232, 432, 43]
          }
        ]
      },
      data7: {
        title: '分析3',
        position: ['5%', '14%'],
        center: ['50%', '60%'],
        indicator: [
          { text: '面对面' },
          { text: '手机号' },
          { text: '手机联系人' },
          { text: '摇一摇' },
          { text: '微博' },
          { text: '微信' },
          { text: '名片' },
          { text: '快手' },
          { text: 'INS' },
          { text: '扫一扫' },
          { text: '附近的人' },
          { text: '漂流瓶' }
        ],
        data: [
          {
            name: '主动',
            color: '#0096FE',
            value: [100, 8, 0.40, -80, 2000, 345, 123, 21, 34, 54, 431, 876]
          },
          {
            name: '被动',
            color: '#9EEAFF',
            value: [60, 5, 0.30, -100, 1500, 232, 78, 32, 567, 43, 765, 432]
          }
        ]
      },
      data8: {
        title: '分析4',
        position: ['5%', '14%'],
        center: ['50%', '60%'],
        indicator: [
          { text: 'a' },
          { text: 'b' },
          { text: 'c' },
          { text: 'd' },
          { text: 'e' },
          { text: 'f' }
        ],
        data: [
          {
            name: '微信',
            color: '#FD9800',
            value: [100, 8, 0.40, -80, 2000, 345]
          },
          {
            name: 'QQ',
            color: '#FDC673',
            value: [60, 5, 0.30, -100, 1500, 232]
          }
        ]
      },
      data9: {
        title: '重点关注用户',
        data: [
          {
            name: '个数',
            color: '#00CCFF',
            value: ['112', '212', '42', '232', '123', '67']
          },
          {
            name: '使用时长',
            color: '#142AFE',
            value: ['112', '212', '42', '232', '123', '67']
          }
        ]
      },
      data10: {
        title: '重点关注用户',
        data: [
          {
            name: '个人信息涉军应用个数',
            color: '#6514FF',
            value: ['112', '212', '42', '232', '123', '67']
          },
          {
            name: '涉军内容条数',
            color: '#B370FD',
            value: ['112', '212', '42', '232', '123', '67']
          }
        ]
      },
      data11: {
        title: '重点关注异常交友用户',
        data: [
          {
            name: '主动',
            color: '#05467D',
            value: ['112', '212', '42', '232', '123', '67']
          },
          {
            name: '被动',
            color: '#52B8FF',
            value: ['112', '212', '42', '232', '123', '67']
          }
        ]
      },
      data12: {
        title: '重点关注用户',
        data: [
          {
            name: '个数',
            color: '#FD9800',
            value: ['112', '212', '42', '232', '123', '67']
          },
          {
            name: '使用时长',
            color: '#FDC673',
            value: ['112', '212', '42', '232', '123', '67']
          }
        ]
      },
      pieData1: { // 饼图数据1
        title: 'TOP数据1',
        color: '#2C7BFE',

        data: [
          {
            value: 60,
            name: '分类1',
            itemStyle: {
              color: '#1456FE'
            }

          },
          {
            value: 20,
            name: '分类2',
            itemStyle: {
              color: '#00CCFF'
            }
          },
          {
            value: 80,
            name: '分类3',
            itemStyle: {
              color: '#142AFE'
            }
          },
          {
            value: 40,
            name: '分类4',
            itemStyle: {
              color: '#1493FE'
            }
          },
          {
            value: 40,
            name: '分类5',
            itemStyle: {
              color: '#252448'
            }
          }
        ]
      },
      pieData2: { // 饼图数据1
        title: 'TOP数据2',
        color: '#2C7BFE',

        data: [
          {
            value: 60,
            name: '分类1',
            itemStyle: {
              color: '#142AFE'
            }

          },
          {
            value: 20,
            name: '分类2',
            itemStyle: {
              color: '#1493FE'
            }
          },
          {
            value: 80,
            name: '分类3',
            itemStyle: {
              color: '#252448'
            }
          },
          {
            value: 40,
            name: '分类4',
            itemStyle: {
              color: '#00CCFF'
            }
          },
          {
            value: 40,
            name: '分类5',
            itemStyle: {
              color: '#1456FE'
            }
          }
        ]
      },
      pieData3: { // 饼图数据1
        title: 'TOP数据3',
        color: '#2C7BFE',

        data: [
          {
            value: 60,
            name: '分类1',
            itemStyle: {
              color: '#1493FE'
            }

          },
          {
            value: 20,
            name: '分类2',
            itemStyle: {
              color: '#142AFE'
            }
          },
          {
            value: 80,
            name: '分类3',
            itemStyle: {
              color: '#1456FE'
            }
          },
          {
            value: 40,
            name: '分类4',
            itemStyle: {
              color: '#00CCFF'
            }
          },
          {
            value: 40,
            name: '分类5',
            itemStyle: {
              color: '#252448'
            }
          }
        ]
      },
      resizeFn: null
    }
  },
  methods: {
    drawDot () {
      let canvas = document.getElementById('dot')
      canvas.width = document.querySelector('#circlePie').offsetWidth
      canvas.height = document.querySelector('#circlePie').offsetHeight
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
      let ndots = [this.warea].concat(this.dots)
      this.dots.forEach((dot) => {
        // 粒子位移
        dot.x += dot.xa
        dot.y += dot.ya
        // 遇到边界将加速度反向
        dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1
        dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1
        // 绘制点
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(dot.x - 0.5, dot.y - 0.5, 2, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        // 循环比对粒子间的距离
        for (let i = 0; i < ndots.length; i++) {
          let d2 = ndots[i]
          if (dot === d2 || d2.x === null || d2.y === null) continue
          let xc = dot.x - d2.x
          let yc = dot.y - d2.y
          // 两个粒子之间的距离
          let dis = Math.sqrt(xc * xc + yc * yc)
          // 距离比
          let ratio
          // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
          if (dis < d2.max) {
            // 计算距离比
            ratio = (d2.max - dis) / d2.max
            // 画线
            ctx.beginPath()
            ctx.lineWidth = ratio / 2
            if (d2 === this.warea) {
              ctx.strokeStyle = 'rgba(255,255,255,0)'
            } else {
              // 距离变大 连线颜色变浅
              ctx.strokeStyle = 'rgba(255,255,255,' + (ratio + 0.2) + ')'
            }
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(d2.x, d2.y)
            ctx.stroke()
          }
        }
        // 将已经计算过的粒子从数组中删除
        ndots.splice(ndots.indexOf(dot), 1)
      })
      this.animationFrame1 = window.requestAnimationFrame(this.drawDot)
    },
    rads (x) { // 弧度转换
      return Math.PI * x / 180
    },
    act () {
      // 清空画布
      const canvas = document.querySelector('#main')
      canvas.style.width = this.centerBox.height + 'px'
      canvas.style.height = this.centerBox.height + 'px'
      const context = canvas.getContext('2d')
      context.clearRect(0, 0, canvas.width, canvas.height)
      this.drawPie(this.everyPer, context)
      this.animationFrame2 = window.requestAnimationFrame(this.act)
      this.everyPer += Math.PI / 180
      let speed = 0.07 // 波浪速度，数越大速度越快
      this.xOffset += speed
    },
    drawPie (everyPer, context) {
      context.save()
      context.fillStyle = 'rgba(18,55,88,.2)'
      context.beginPath()
      context.arc(this.circle.x, this.circle.y, 245, 0, 2 * Math.PI, true)
      context.closePath()
      context.fill()
      context.restore()

      // 外圆
      context.save()
      context.shadowBlur = 50
      context.shadowColor = '#123959'
      context.fillStyle = '#080D27'
      context.beginPath()
      context.arc(this.circle.x, this.circle.y, 235, 0, 2 * Math.PI, true)
      context.closePath()
      context.fill()
      context.restore()
      for (let i = 0; i < this.title.length; i++) { // 绘制文字。
        context.save()
        // 画文字
        this.drawCircularText(this.circle, this.title[i], this.rads(i * 60 - 110), this.rads(i * 60 - 65), i, context)
        context.restore()
      }
      // 旋转小球
      let x = 240 * Math.cos(everyPer)
      let y = 240 * Math.sin(everyPer)
      context.save()
      context.fillStyle = 'rgb(56,252,253)'
      context.shadowBlur = 80
      context.shadowColor = '#39E9EE'
      context.translate(this.circle.x, this.circle.y)
      context.beginPath()
      context.arc(x, y, 5, 0, 2 * Math.PI)
      context.arc(-x, -y, 5, 0, 2 * Math.PI)
      context.closePath()
      context.fill()
      context.restore()
      //
      context.save()
      context.fillStyle = '#153776'
      context.beginPath()
      context.arc(this.circle.x, this.circle.y, 200, 0, 2 * Math.PI, true)
      context.closePath()
      context.fill()

      context.fillStyle = '#121535'
      context.beginPath()
      context.arc(this.circle.x, this.circle.y, 190, 0, 2 * Math.PI, true)
      context.closePath()
      context.fill()
      // 内圆
      let nowRange = 95
      context.save()
      this.drawCircle(context)
      this.drawSin(this.xOffset, context, nowRange)
      this.drawText(context, nowRange)
      context.restore()
      for (let i = 0; i < 6; i++) { // 绘制刻度。
        context.save()
        context.translate(this.circle.x, this.circle.y)
        context.rotate((-Math.PI / 2 + Math.PI / 6) + i * Math.PI / 3) // 旋转坐标轴。坐标轴x的正方形从 向上开始算起
        context.beginPath()
        context.moveTo(190, 0)
        context.lineTo(200, 0)
        context.lineWidth = 4
        context.strokeStyle = '#0A122D'
        context.stroke()
        context.closePath()
        context.restore()
      }
    },
    drawCircle (ctx) { // 画圆 中心圆
      ctx.beginPath()
      ctx.fillStyle = '#209ADF'
      ctx.arc(this.circle.x, this.circle.y, 120, 0, 2 * Math.PI)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(this.circle.x, this.circle.y, 120, 0, 2 * Math.PI)
      ctx.clip()
    },
    drawSin (xOffset, ctx, nowRange) { // 画sin 曲线函数
      let mW = 240
      let mH = 240
      let sX = 0
      let axisLength = mW // 轴长
      let waveWidth = 0.04 // 波浪宽度,数越小越宽
      let waveHeight = 12 // 波浪高度,数越大越高
      ctx.save()
      ctx.translate(130, 130)
      let points = [] // 用于存放绘制Sin曲线的点
      ctx.beginPath()
      // 在整个轴长上取点
      for (let x = sX; x < sX + axisLength; x += 20 / axisLength) {
        // 此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
        let y = -Math.sin((sX + x) * waveWidth + xOffset)
        let dY = mH * (1 - nowRange / 100)
        points.push([x, dY, dY + y * waveHeight])
        ctx.lineTo(x, dY + y * waveHeight)
      }
      // 封闭路径
      ctx.lineTo(axisLength, mH)
      ctx.lineTo(sX, mH)
      ctx.lineTo(points[0][0], points[0][1])
      ctx.fillStyle = '#2C50B1'
      ctx.fill()

      ctx.restore()
    },
    // 中心显示文字
    drawText (ctx, nowRange) {
      ctx.save()
      ctx.translate(130, 130)
      let size = 50
      ctx.font = size + 'px Microsoft Yahei'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#95EFFF'
      ctx.fillText(nowRange + '%', 120, 120 - size / 2)
      ctx.restore()
      ctx.save()
      size = 25
      ctx.translate(130, 130)
      ctx.font = size + 'px Microsoft Yahei'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#95EFFF'
      ctx.fillText('平均营销质量指数', 120, 120 + size)
      ctx.restore()
    },
    // 旋转的文字
    drawCircularText (s, string, startAngle, endAngle, n, context) {
      let radius = s.radius // 文字环绕的中心圆半径
      let angleDecrement // 一个文字所占的角度
      let angle = parseFloat(startAngle) // 文字的起始角度
      let index = 0 // 文字的索引值
      let character // 当前要画的文字
      let arr = string.split(':')
      context.save()
      context.fillStyle = '#fff'
      context.font = '12px 微软雅黑 '
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      if (n < 2 || n === 5) { // 上三个不需要反转的文字
        while (index < string.length) {
          character = string.charAt(index)
          if (arr[0].indexOf(character) >= 0) {
            if (arr[0].length > 6) {
              angleDecrement = (startAngle - endAngle) / (string.length - 3)
            } else {
              angleDecrement = (startAngle - endAngle) / (string.length - 1)
            }
          } else {
            angleDecrement = (startAngle - endAngle) / (string.length + 6)
          }
          context.save()
          context.beginPath()
          context.translate(s.x + Math.cos(angle) * radius,
            s.y + Math.sin(angle) * radius)
          context.rotate(Math.PI / 2 + angle)
          context.fillText(character, 0, 0)
          angle -= angleDecrement
          index++
          context.restore()
        }
      } else { // 下面三个需要反转的文字
        while (index < string.length) {
          character = string.split('').reverse().join('').charAt(index)// 字符串反转
          if (arr[1].indexOf(character) >= 0) {
            angleDecrement = (startAngle - endAngle) / (string.length + 6)
          } else {
            if (arr[0].length > 6) {
              angleDecrement = (startAngle - endAngle) / (string.length - 3)
            } else {
              angleDecrement = (startAngle - endAngle) / (string.length - 1)
            }
          }
          context.save()
          context.beginPath()
          context.translate(s.x + Math.cos(angle) * radius,
            s.y + Math.sin(angle) * radius)
          context.rotate(-Math.PI / 2 + angle)// 旋转文字
          context.fillText(character, 0, 0)
          angle -= angleDecrement
          index++
          context.restore()
        }
      }
      context.restore()
    }

  },
  mounted () {
    this.centerBox = {
      width: document.querySelector('#circlePie').offsetWidth,
      height: document.querySelector('#circlePie').offsetHeight
    }
    for (let i = 0; i < 200; i++) {
      // 随机200个运动的圆点
      let x = Math.random() * this.centerBox.width // 随机的x偏移量
      let y = Math.random() * this.centerBox.height // 随机y轴偏移量
      let xa = Math.random() * 2 - 1 // x轴运动速度
      let ya = Math.random() * 2 - 1 // y轴运动速度
      this.dots.push({
        x: x,
        y: y,
        xa: xa,
        ya: ya,
        // 两个圆点之间需要连线的距离
        max: 40
      })
    }
    this.act()
    this.drawDot()
    this.resizeFn = this.$debounce(() => {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      this.$refs.channelBar1.setChart()
      this.$refs.distributionSolider1.setChart()
      this.$refs.channelBar2.setChart()
      this.$refs.distributionSolider2.setChart()
      // this.$refs.pies.setPies();
      this.$refs.redPocket.setPocket()
      this.$refs.webcastsRisk.setWebcasts()
      this.$refs.deviceSafeRisk.setDeviceSafe()
      this.$refs.ring1.drawRing()
      this.$refs.ring2.drawRing()
      this.$refs.ring3.drawRing()
      this.centerBox = {
        width: document.querySelector('#circlePie').offsetWidth,
        height: document.querySelector('#circlePie').offsetHeight
      }
      for (let i = 1; i < 9; i++) {
        this.$refs['chart' + i].setChart()
      }
      this.$refs.chinaMap.setMap()
      this.$refs.hotWords.setChart()
    }, 500)
    window.addEventListener('resize', this.resizeFn)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeFn)
  }
}
</script>

<style lang="less" scoped>
.page3 {
    height: 100%;
    width: 100%;
    padding: 14px 20px 20px;
    background: #001529;//#03044A
    overflow: hidden;
    .ivu-col {
        height: 100%;
        float: left;
    }

    .left, .right1-1, .center-bottom {
        height: 100%;
        border: 1px solid #0D2451;
        position: relative;
        background: #001529;//#151456

        #left_5 {
            height: 100%;
            width: 45%;
            float: left;
        }

        #left_6 {
            height: 100%;
            width: 55%;
            float: left;
        }

        .circular {
            height: 100%;

            .canvas {
                height: 100%;
                width: 30%;
                float: left;

                .subtitle {
                    font-size: 12px;
                    font-weight: bold;
                    color: #fff;//#fff
                    height: 25px;
                    padding: 10px 0 ;
                    text-align: center;
                }

                .canvasList {
                    height: calc(~'100% - 25px');
                    text-align: center
                }
            }
        }

        .left1 {
            border-bottom: 1px solid #0D2451;
            background: #001529;//#151456
        }

        .title {
            position: absolute;
            display: inline-block;
            color: #6EDDF1;
            border: 2px solid #6EDDF1;
            height: 18px;
            padding: 0 2px;
            left: 50%;
            transform: translate(-50%, -50%);

            .title-text {
                position: relative;
                font-size: 16px;
                background: #09102E;
                display: inline-block;
                padding: 0 4px;
                transform: translateY(-5px);
            }
        }
    }

    .center-top {
        height: 60%;
    }

    .center-bottom {
        height: 40%;

        .bottom-radars {
            height: 55%;
        }

        .bottom-bars {
            height: 45%;
        }
    }

    .right-1 {
        height: 30%;

        .right1-1 {
            height: 92%;
        }
    }

    .right-2 {
        height: 40%;

    }
}
</style>
