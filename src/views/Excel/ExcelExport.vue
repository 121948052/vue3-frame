<!--
 * @Author: Bug Router
 * @Date: 2024-04-26 14:20:26
 * @Description: Default
-->
<template>
  <a-button @click="handleExport">
    Export File
  </a-button>
  <a-table
    :dataSource="dataSource.data"
    :columns="columns"
  />
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { xlsxExport } from '@/utils/excel'

export default defineComponent({
  setup () {

    const dataSource = reactive({
      header: 'try-xlsx导出功能',
      data: [{
        "表头1": "表头1值a",
        "表头2": "表头2值b",
        "表头3": "表头3值c",
        "表头4": "表头4值d",
        "表头5": "表头5值e"
      }]
    })

    const handleExport = () => {
      xlsxExport({
        data: dataSource.data
      })
    }

    return {
      columns: [
        {
          title: '表头1',
          dataIndex: '表头1',
          key: '表头1',
        },
        {
          title: '表头2',
          dataIndex: '表头2',
          key: '表头2',
        },
        {
          title: '表头3',
          dataIndex: '表头3',
          key: '表头3',
        },
        {
          title: '表头4',
          dataIndex: '表头4',
          key: '表头4',
        },
        {
          title: '表头5',
          dataIndex: '表头5',
          key: '表头5',
        },
      ],
      dataSource,
      handleExport
    }
  }
})
</script>