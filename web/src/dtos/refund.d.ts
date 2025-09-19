type RefundAPIResponse = {
    id: string
    userId: string
    name: string
    category: CategoiesAPIEnum
    amount: number
    filename: string
    user: {
        name: string
    }
}

type RefundsPaginationAPIResponse = {
    refunds: RefundAPIResponse[],
    pagination: {
        page: number
        perPage: number
        totalRecords: number
        totalPages: number
    }
}