<template>
  <div class="flex gap-4 p-4">
    <Calendar input-id="fecha" v-model="date" view="year" dateFormat="yy" @date-select="search()"/>
    <!--    <Button label="Buscar" @click="search()"/>-->
  </div>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex gap-4">
      <div class="box w-1/2 p-4">
        <Chart ref="refPrimerGrafico" type="line" :data="primerGrafico" class="w-full"/>
      </div>
      <div class="box w-1/2 p-4">
        <Chart ref="refSegundoGrafico" type="bar" :data="segundoGrafico" class="w-full"/>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="box w-1/2 p-4">
        <Chart ref="refTercerGrafico" type="line" :data="tercerGrafico" class="w-full"/>
      </div>
      <div class="box w-1/2 p-4">
        <Chart ref="refCuartoGrafico" type="pie" :data="cuartoGrafico" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, watch, computed} from 'vue'
import dayjs from 'dayjs'
import DashboardService from "./services/Dashboard.service";

export default {
  name: "DashboardMain",
  setup() {
    const refPrimerGrafico = ref()
    const refSegundoGrafico = ref()
    const refTercerGrafico = ref()
    const refCuartoGrafico = ref()
    const _DashboardService = new DashboardService()
    const dateType = ref('month')
    const date = ref(dayjs().format('YYYY'))

    const search = () => {
      document.getElementById("fecha").blur();
      _DashboardService.getMargenBruto(dayjs(date.value).format('YYYY'))
          .then(({data}) => {
            const chart = refPrimerGrafico.value.chart
            chart.data.datasets[0].data = data
            chart.update()
          })

      _DashboardService.getPromedioInventario(dayjs(date.value).format('YYYY'))
          .then(({data}) => {
            const chart = refSegundoGrafico.value.chart
            chart.data.datasets[0].data = data.arrayResult
            chart.data.labels = data.arrayLabels
            chart.update()
          })

      _DashboardService.getTopTres(dayjs(date.value).format('YYYY'))
          .then(({data}) => {
            const chart = refTercerGrafico.value.chart
            chart.data.datasets = data
            chart.update()
          })

      _DashboardService.getVendidosPorcentaje(dayjs(date.value).format('YYYY'))
          .then(({data}) => {
            const chart = refCuartoGrafico.value.chart
            chart.data.datasets[0].data = data.porcentajeIndividual
            chart.data.labels = data.labels
            chart.update()
          })
    }

    onMounted(() => {
      search()
    })

    return {
      date,
      dateType,
      search,
      refPrimerGrafico,
      refSegundoGrafico,
      refTercerGrafico,
      refCuartoGrafico,
      primerGrafico: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: '% Margen Bruto',
            backgroundColor: '#42A5F5',
            data: []
          }
        ]
      },
      segundoGrafico: {
        labels: [],
        datasets: [
          {
            label: 'Inventario promedio',
            backgroundColor: ['#3E6B72', '#19C76B', '#1ECCD4', '#E557E0', '#6FE4B9', '#5E0A10', '#53D42E'],
            data: []
          }
        ]
      },
      tercerGrafico: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      },
      cuartoGrafico: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#3E6B72', '#19C76B', '#1ECCD4', '#E557E0', '#6FE4B9', '#5E0A10', '#53D42E'],
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>