import { CommodityStats } from "./commodityStats";

export interface OrderOrDiscountCandidates {
  order: Array<CommodityStats>,
  discount: Array<CommodityStats>
}
