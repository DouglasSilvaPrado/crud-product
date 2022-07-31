import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore  } from "vuex";
import IProduct from "../interfaces/IProduct";

interface Estado {
    produtos: IProduct[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore({
    state: {
        produtos: []    
    },
    mutations: {

    },
    actions: {

    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key);
}