import { http } from "./config";

import IProduct from "../interfaces/IProduct";

export default {

    list: () => {
        return http.get("produtos");
    },

    create: (product: IProduct) => {
        return http.post("produtos", product);
    },

    update: (product: IProduct) =>  {
        return http.put(`produtos/${product.id}`, product);
    },

    delete: (product: IProduct)  =>  {
        return http.delete(`produtos/${product.id}`);
    },

}
