export type SourceType = {
    id: string,
    source: string,
    amount: number,
    date: Date,
}

export type BalanceType = {
    incomes: SourceType[],
    expense: SourceType[],
}