export declare const ApiRoutes: {
    auth: {
        login: string;
        register: string;
        me: string;
    };
    tasks: {
        base: string;
        byId: (id: string | number) => string;
    };
};
