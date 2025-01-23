import * as XLSX from 'xlsx'

import { ListItemModel } from '@/types/log'

import { EXCEL_FILE_NAME, EXCEL_SHEET_NAME } from '../constants'

export const downloadExcel = (data: ListItemModel[]) => {
    if (!data) return

    const excelData = data.map((item) => ({
        차량번호: item.vehicleNumber,
        차종: item.vehicleModel,
        운행일수: item.drivingDays,
        총운행거리: `${item.totalDistance}km`,
        차량현황: item.status,
    }))

    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(excelData)
    XLSX.utils.book_append_sheet(wb, ws, EXCEL_SHEET_NAME)
    XLSX.writeFile(wb, EXCEL_FILE_NAME)
}
