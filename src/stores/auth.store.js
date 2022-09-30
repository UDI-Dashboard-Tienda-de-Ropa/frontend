import { defineStore } from "pinia";
// import MedicamentosService from "../services/medicamentos.service";

// const _MedicamentosService = new MedicamentosService();

export const useAuth = defineStore({
    id: "useAuth",
    state: () => ({
        // listMedicamentos: [],
        user: {}
    }),
    getters: {
        // getListMedicamentos: (state) => state.listMedicamentos,
        getUser: (state) => state.user
    },
    actions: {
        // storeGetSearch(payload = {}) {
        //     return _MedicamentosService.getSearch(payload).then(({ data }) => {
        //         this.listMedicamentos = data;
        //         return true;
        //     });
        // },
        storeUser (payload = {}) {
            this.user = payload;
        }
    },
});
