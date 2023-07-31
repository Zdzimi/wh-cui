export interface Document {
  documentId: number,
  receiptDayOrder: number,
  order: number,
  entryOrder: number,
  date: Date,
  code: string,
  type: number,
  increased: number,
  decreased: number,
  amountAfterReceipt: number,
  amountBeforeReceipt: number
}
