<template>
  <div class="hopper">
    <span class="card-title">
      <svg-icon icon-class="hopper" class-name="red-color mr05"/>
      倒计时
    </span>
    <div class="progress-list">
      <div class="progress-inner">
        <div class="progress-inner-title">今天已经过去{{ currHouse }}个小时</div>
        <div class="progress-inner-rate">
          <el-progress
              :text-inside="true"
              :percentage="currHouseSpeed"
              :stroke-width="20"
              :color="houseColor">
          </el-progress>
        </div>
      </div>
      <div class="progress-inner">
        <div class="progress-inner-title">这周已经过去{{ currWeek }}天</div>
        <div class="progress-inner-rate">
          <el-progress
              :text-inside="true"
              :percentage="currWeekSpeed"
              :stroke-width="20"
              :color="weekColor">
          </el-progress>
        </div>
      </div>
      <div class="progress-inner">
        <div class="progress-inner-title">本月已经过去{{ currDay }}天</div>
        <div class="progress-inner-rate">
          <el-progress
              :text-inside="true"
              :percentage="currDaySpeed"
              :stroke-width="20"
              :color="dayColor">
          </el-progress>
        </div>
      </div>
      <div class="progress-inner">
        <div class="progress-inner-title">今年已经过去{{ currMonth }}个月</div>
        <div class="progress-inner-rate">
          <el-progress
              :text-inside="true"
              :percentage="currMonthSpeed"
              :stroke-width="20"
              :color="monthColor">
          </el-progress>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Hopper",
  data() {
    return {
      houseColor: '#f56c6c',
      weekColor: '#e6a23c',
      dayColor: '#5cb87a',
      monthColor: '#1989fa',
      timer: null,
      currHouse: 0,
      currHouseSpeed: 0,
      currWeek: 0,
      currWeekSpeed: 0,
      currDay: 0,
      currDaySpeed: 0,
      currMonth: 0,
      currMonthSpeed: 0
    }
  },
  mounted() {
    let that = this
    that.updateTime()
    this.timer = setInterval(that.updateTime, 60000)
  },
  methods: {
    updateTime() {
      let date = new Date()
      let year = date.getFullYear()
      let house = date.getHours()
      let week = date.getDay() === 0 ? 7 : date.getDay()
      let day = date.getDate()
      let month = date.getMonth() + 1

      this.currHouse = house
      this.currWeek = week
      this.currDay = day
      this.currMonth = month
      this.currHouseSpeed = parseInt((house / 24 * 100).toFixed(0))
      this.currWeekSpeed = parseInt((week / 7 * 100).toFixed(0))
      this.currMonthSpeed = parseInt((month / 12 * 100).toFixed(0))

      let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        days[1] = 29
      }
      this.currDaySpeed = parseInt((day / days[date.getMonth()] * 100).toFixed(0))
    }
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.hopper {
  width: 100%;
  background: var(--main-bg-color);
  box-shadow: var(--main-box-show);
  border-radius: var(--main-border-radius);

  .progress-list {
    padding: 10px 15px;

    .progress-inner {
      height: 50px;

      .progress-inner-title {
        color: #909399;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>