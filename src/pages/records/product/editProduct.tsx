import { useMemo } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../../components/loader";
import { getId, edit } from "../../../services/produtoService";
import { Produto } from "../../../domain/produto";
import ProductForm from "../../../components/records/productForm";
import { PathCrudProps } from "../../../types/pathCrudProps";

const EditProduct = () => {
  const params = useParams<PathCrudProps>();
  const backPage = "/logged/records/product";
  const navigate = useNavigate();

  const editProdutoResult = useMutation({
    mutationKey: ["editProduto"],
    mutationFn: edit,
    onSuccess: () => {
      navigate(backPage);
    },
  });

  const produtoResult = useQuery({
    queryKey: ["produto", params.id],
    queryFn: () => getId(params.id || ""),
  });

  const onSubmit = (produto: Produto) => {
    editProdutoResult.mutateAsync(produto);
  };

  const isLoading = useMemo(
    () => produtoResult.isLoading || editProdutoResult.isLoading,
    [editProdutoResult.isLoading, produtoResult.isLoading]
  );

  return (
    <div>
      <h3 className="text-2xl font-extrabold dark:text-white my-6">
        Incluir Produto
      </h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductForm
          backCallback={() => navigate(backPage)}
          submitCallback={onSubmit}
          defaultValues={produtoResult.data}
          label="Editar"
          editMode={true}
        />
      )}
    </div>
  );
};

export default EditProduct;
