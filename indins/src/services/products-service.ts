import {ApiUrlFactory} from "@/services/api-url-factory";
import axios from "axios";
import {IResponseProducts} from "@/models/product-models";

export class ProductService {
    private readonly url= ApiUrlFactory.create('products');

    getAllProducts(): Promise<IResponseProducts> {
        return axios.get(this.url.toString());
    }
}