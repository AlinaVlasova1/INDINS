export interface IProduct {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating?: {
        count: number,
        rate: number
    },
}

export interface IPlacementInBasket {
    product: IProduct,
    count: number,
    cost: number,
}