import { useForm } from "react-hook-form";
import { Produto } from "../../domain/produto";
import { usePageStore } from "../../stores/pageStore";
import { useEffect } from "react";

type ProductFormProps = {
  submitCallback: (produto: Produto) => void;
  backCallback: () => void;
  defaultValues?: Produto;
  label: string;
  editMode: boolean;
};

const ProdutoForm = ({
  submitCallback,
  backCallback,
  defaultValues,
  label,
  editMode,
}: ProductFormProps) => {
  const prestadorId = usePageStore((state) => state.prestadorId);

  const { register, handleSubmit, setValue } = useForm<Produto>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (prestadorId) setValue("prestadorId", prestadorId);
  }, [prestadorId, setValue]);

  return (
    <form onSubmit={handleSubmit(submitCallback)}>
      <div className="mb-6">
        <label
          htmlFor="nome"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nome
        </label>
        <input
          {...register("nome")}
          type="text"
          id="nome"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="marca"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Marca
        </label>
        <input
          type="text"
          id="marca"
          {...register("marca")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="marca"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Marca
        </label>
        <input
          type="text"
          id="marca"
          {...register("marca")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="valor_compra"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Valor Compra
        </label>
        <input
          type="number"
          id="valor_compra"
          {...register("valor_compra")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="valor_venda"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Valor Venda
        </label>
        <input
          type="number"
          id="valor_venda"
          {...register("valor_venda")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="tipoMedida"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tipo Medida
        </label>
        <select
          id="tipoMedida"
          {...register("tipoMedidaItem")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="0">Litro</option>
          <option value="1">Peça</option>
        </select>
      </div>
      {!editMode ? (
        <></>
      ) : (
        <div className="mb-6">
          <label
            htmlFor="quantidade"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantidade
          </label>
          <input
            type="number"
            id="quantidade"
            {...register("quantidade")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="data_validade"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Data Validade
        </label>
        <input
          type="date"
          id="data_validade"
          {...register("data_validade")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => backCallback()}
        >
          Voltar
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {label}
        </button>
      </div>
    </form>
  );
};

export default ProdutoForm;