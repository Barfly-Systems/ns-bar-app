import { GetProductDetails_Result } from './get-product-details-result.model'
import { GetPricingForProduct_Result } from './get-pricing-for-product-result.model'

export interface ProductDetailedPricing
{
    productDetails: GetProductDetails_Result;
    productPrices: GetPricingForProduct_Result[];
}