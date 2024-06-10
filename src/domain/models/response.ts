export type Response<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};