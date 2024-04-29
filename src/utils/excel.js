/*
 * @Author: Bug Router
 * @Date: 2024-04-26 14:01:07
 * @Description: Default
 */
import { utils, writeFile } from 'xlsx'

export const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = (ev) => {
      resolve(ev.target.result)
    }
  })
}

export const xlsxExport = ({
  data,
  header,
  fileName = 'vue-xlsx.xlsx',
  options = { skipHeader: true },
  write2excelOpts = { bookType: 'xlsx' }
}) => {
  let arrData = [...data]
  if (header) {
    arrData.unshift(header)
    const filterKeys = Object.keys(header)
    arrData = arrData.map((item) =>
      filterKeys.reduce((p, k) => ((p[k] = item[k]), p), {})
    )
  }
  const worksheet = utils.json_to_sheet(arrData, options)
  const workbook = {
    SheetNames: [fileName],
    Sheets: {
      [fileName]: worksheet
    }
  }
  writeFile(workbook, fileName, write2excelOpts)
}
