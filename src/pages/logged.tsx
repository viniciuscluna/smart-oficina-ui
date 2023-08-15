import { useEffect, useMemo } from "react";

import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";

import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Loader from "../components/loader";

import { getAll as getAllSubServico } from "../services/subServicoService";
import { getAll as getAllCliente } from "../services/clienteService";
import { getAll as getVeiculo } from "../services/veiculoService";
import { getMarcas } from "../services/fipeService";
import { STORAGE_KEY } from "../constants/key";

const Logged = () => {
  const [, setLocalStorage] = useLocalStorage<string>(STORAGE_KEY, "");
  const subServicoResult = useQuery({
    queryKey: ["subServico"],
    queryFn: getAllSubServico,
  });

  const clienteResult = useQuery({
    queryKey: ["cliente"],
    queryFn: getAllCliente,
  });

  const veiculoResult = useQuery({
    queryKey: ["veiculo"],
    queryFn: getVeiculo,
  });

  const marcaResult = useQuery({
    queryKey: ["veiculoMarcas"],
    queryFn: getMarcas,
  });

  useEffect(() => {
    if (subServicoResult.isError) {
      setLocalStorage("");
    }
  }, [subServicoResult.isError, setLocalStorage]);

  const isLoading = useMemo(
    () =>
      clienteResult.isLoading ||
      subServicoResult.isLoading ||
      veiculoResult.isLoading ||
      marcaResult.isLoading,
    [
      clienteResult.isLoading,
      subServicoResult.isLoading,
      veiculoResult.isLoading,
      marcaResult.isLoading,
    ]
  );

  if (isLoading) return <Loader />;
  return (
    <main className="dark:bg-gray-900 h-full flex flex-col sm:flex-row">
      <Sidebar />
      <section className="px-4 sm:ml-64 w-full flex flex-col overflow-auto">
        <div className="flex flex-col grow">
          <Outlet />
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default Logged;
