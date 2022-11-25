import { defineStore } from "pinia";
import UsersService from "@/views/users/services/Users.service";

const _UsersService = new UsersService()

export const useAuth = defineStore({
    id: "useAuth",
    state: () => ({
        user: {},
        users: []
    }),
    getters: {
        getUser: (state) => state.user,
        getUsers: (state) => state.users
    },
    actions: {
        storeUser (payload = {}) {
            this.user = payload;
        },
        saveUser (payload = {}) {
            return _UsersService.post(payload)
        },
        actionGetUsers () {
            _UsersService.get().then(({ data }) => {
                this.users = data
            })
        },
        actionGetUser (uid) {
            return _UsersService.findByUid(uid).then(({ data }) => {
                return data
            })
        },
        actionDeleteUser (id) {
            return _UsersService.delete(id)
        },
        actionUpdateUser (id, payload) {
            return _UsersService.put(id, payload)
        }
    },
});
