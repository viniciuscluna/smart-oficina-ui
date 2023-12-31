import { useEffect, useRef } from "react";

import { useReactToPrint } from "react-to-print";
import { useQuery } from "@tanstack/react-query";
import { getId } from "../../../services/prestacaoServicoService";
import ComponentPrint from "./componentPrint";
import Loader from "../../loader";

type PrintContainerProps = {
  prestacaoId: string;
}
const PrintContainer = ({prestacaoId} : PrintContainerProps) => {
  
  const componentRef = useRef<HTMLElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { isLoading, data } = useQuery({
    queryKey: ["prestacaoById", prestacaoId],
    queryFn: () => getId(prestacaoId || ""),
  });

  useEffect(() => {
    if (!isLoading) document.title = `OS: ${data?.referencia}`;
  }, [isLoading, data?.referencia]);

  if (isLoading && data) return <Loader />;
  else
    return (
      <section className="flex flex-col gap-5 w-full items-center">
        <div className="my-5 text-center">
          <button
            onClick={() => handlePrint()}
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Imprimir!
          </button>
        </div>
        <section className="block w-[60%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 overflow-x-auto">
          {data ? (
            <ComponentPrint ref={componentRef} prestacao={data} />
          ) : (
            <></>
          )}
        </section>
      </section>
    );
};
export default PrintContainer;
