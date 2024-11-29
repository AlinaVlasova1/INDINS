export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating?: {
        count: number,
        rate: number
    },
}

export interface IResponseProducts {
    data: IProduct[];
}

export interface IResponseProduct {
    data: IProduct;
}