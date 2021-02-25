export interface Entry{
    id: number,
    name: string,
    value: number,
    description: string,
    date: string,
    entryType: number,
    categoryId: number
}

export interface EntryPage{
    content: Array<Entry>;
    pageable: Pageable,
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    sort: Sort,
    number: number,
    numberOfElements: number,
    first: boolean,
    empty: boolean
}

interface Pageable{
    sort: Sort,
    offset: number,
    pageSize: number,
    pageNumber: number,
    paged: boolean,
    unpaged: boolean
}

interface Sort{
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
}