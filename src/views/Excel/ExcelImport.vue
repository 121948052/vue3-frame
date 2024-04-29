<!--
 * @Author: Bug Router
 * @Date: 2024-04-26 14:20:26
 * @Description: Default
-->
<template>
  <a-upload
    :file-list="fileList"
    :before-upload="beforeUpload"
  >
    <a-button>
      Select File
    </a-button>
  </a-upload>
  <a-table
    :dataSource="dataSource.data"
    :columns="columns"
  />
</template>
<script>
import * as XLSX from 'xlsx'
import { defineComponent, ref, reactive } from 'vue'
import { readFile } from '@/utils/excel'
export default defineComponent({
  setup () {
    const fileList = ref([]);
    const dataSource = reactive({
      data: []
    })
    const beforeUpload = async file => {
      const dataBinary = await readFile(file)
      const workBook = XLSX.read(dataBinary, { type: 'binary', cellDates: true })
      const workSheet = workBook.Sheets[workBook.SheetNames[0]]
      dataSource.data = XLSX.utils.sheet_to_json(workSheet)
      fileList.value = [...fileList.value, file];
      return false;
    };
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
      fileList,
      beforeUpload
    }
  }
})
</script>