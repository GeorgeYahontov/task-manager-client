export const ApiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    me: '/auth/me',
  },
  tasks: {
    base: '/tasks',
    byId: (id: string | number) => `/tasks/${id}`
  }
};
