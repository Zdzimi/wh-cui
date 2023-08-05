import { CommodityStats } from "./commodityStats";

export interface OrderOrDiscountCandidates {
  lessThan: number,
  order: Array<CommodityStats>,
  moreThan: number,
  discount: Array<CommodityStats>
}
