"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoutes = void 0;
exports.ApiRoutes = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        me: '/auth/me',
    },
    tasks: {
        base: '/tasks',
        byId: (id) => `/tasks/${id}`
    }
};
//# sourceMappingURL=api-routes.constant.js.map