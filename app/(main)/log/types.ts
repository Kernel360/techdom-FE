import { ListItemModel } from '@/types/history'

export interface LogListResponse {
    content: ListItemModel[]
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
}
