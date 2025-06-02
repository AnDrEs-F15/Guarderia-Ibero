import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onSuccess: (data) => console.log("Exitoso")
    }
  }
});
