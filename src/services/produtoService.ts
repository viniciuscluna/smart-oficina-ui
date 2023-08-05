import { Produto } from "../domain/produto";
import { instanceApi } from "./axiosConfig";

export const getAll = async (): Promise<Produto[]> => {
  return (await instanceApi.get<Produto[]>("/produto")).data;
};

export const add = async (
    produto: Produto
): Promise<Produto> => {
  return (
    await instanceApi.post<Produto>("/produto", produto)
  ).data;
};

export const edit = async (produto: Produto): Promise<Produto> => {
  return (await instanceApi.put<Produto>("/produto", produto)).data;
};

export const getId = async (id: string): Promise<Produto> => {
  return (await instanceApi.get<Produto>(`/produto/${id}`)).data;
};
