import {IProduct} from "@/models/product-models";

export interface IResponseProducts {
    data: IProduct[];
}

export interface IResponseProduct {
    data: IProduct;
}