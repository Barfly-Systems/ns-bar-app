export interface GetProductDetails_Result
{
    id: number;
    product_ID: number;
    imagePath: string | null;
    description: string | null;
    calories: number | null;
    geographicOrigin: string | null;
    containsAllergens: boolean;
}