import {ApiUrlFactory} from "@/services/api-url-factory";
import axios from "axios";
import {IResponseProduct, IResponseProducts} from "@/models/product-models-responce";

export class ProductService {
    private readonly url= ApiUrlFactory.create('products');

    getAllProducts(): Promise<IResponseProducts> {
        return axios.get(this.url.toString());
    }

    getProductById(id:number): Promise<IResponseProduct> {
        return axios.get(`${this.url}/${id}`);
    }
}