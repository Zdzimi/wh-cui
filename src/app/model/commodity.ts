import { Document } from "./document"

export interface Commodity {
  id: number,
  name: string
  shortName: string,
  code: string,
  netPrice: number,
  tax: number,
  grossPrice: number,
  amount: number,
  receipts: Array<Document>
}
