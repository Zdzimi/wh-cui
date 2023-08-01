export interface Document {
  documentId: number,
  receiptDayOrder: number,
  date: Date,
  code: string,
  type: number,
  increased: number,
  decreased: number,
  amountAfterReceipt: number,
  amountBeforeReceipt: number,
  lowerPartOfSales?: number,
  higherPartOfSales?: number,
  sales?: number,
  partOfSales?: number
}
