<template>
  <div class="flex gap-4 p-4">
    <Dropdown v-model="dateType" :options="dateTypes" optionLabel="name" optionValue="value" @change="dateTypeChange()"/>
    <Calendar v-if="dateType === 'month'" v-model="date" view="month" dateFormat="mm/yy" @date-select="search()"/>
    <Calendar v-else v-model="date" view="year" dateFormat="yy" @date-select="search()"/>
    <Button label="Buscar" @click="search()"/>
  </div>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex gap-4">
      <div class="box w-1/2 p-4">
        <Chart type="bar" :data="basicData" class="w-full"/>
      </div>
      <div class="box w-1/2 p-4">
        <Chart type="line" :data="basicData" class="w-full"/>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="box w-1/2 p-4">
        <Chart type="pie" :data="basicData" class="w-full"/>
      </div>
      <div class="box w-1/2 p-4">
        <Chart type="doughnut" :data="basicData" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import dayjs from 'dayjs'

export default {
  name: "DashboardMain",
  setup () {
    const calendar = ref()
    const dateType = ref('month')
    const date = ref(dayjs().format('MM/YYYY'))
    const basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    const dateTypes = [
      {name: 'Mes', value: 'month'},
      {name: 'Año', value: 'year'}
    ]

    const search = () => {
      // console.log('date', dayjs(date.value).format('YYYY-MM'))
      console.log('date', calendar.value)
    }

    const dateTypeChange = () => {
      if (dateType.value === 'month') {
        date.value = dayjs().format('MM/YYYY')
      } else {
        date.value = dayjs().format('YYYY')
      }
    }

    return {
      calendar,
      basicData,
      date,
      dateType,
      dateTypes,
      search,
      dateTypeChange
    }
  }
}
</script>

<style scoped>

</style>