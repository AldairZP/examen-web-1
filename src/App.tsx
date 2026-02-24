import { Check, X } from "lucide-react";
import { CustomInput } from "./components/CustomInput";
import { type ChangeEvent, type FormEvent, useState } from "react";

export const App = () => {
  const [inputs, setInputs] = useState<Record<string, string>>({
    nombre: "",
    editorial: "",
    autor: "",
    fechaEdicion: "",
    cantidad: "",
    fechaSalida: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // validar que no haya campos vacíos
    e.preventDefault();
    const hasEmptyFields = Object.values(inputs).some((value) => value === "");
    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`El campo ${key} no puede estar vacío.`);
        return;
      }
    }
    if (hasEmptyFields) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert("Formulario enviado con éxito");
  };
  return (
    <div className="min-h-dvh w-full flex items-center justify-center p-4">
      <form
        className="w-full max-w-3xl rounded-2xl p-5 sm:p-6 bg-amber-400 font-bold shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full text-2xl justify-center font-bold text-white text-shadow-md">
          Ingreso de Libros
        </div>
        <div className="flex w-full justify-center font-bold text-white text-shadow-md">
          <div className="flex justify-center items-end gap-2">
            <CustomInput
              inputType="text"
              label="Código"
              value={inputs.codigo}
              name="codigo"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="flex justify-center items-center font-bold rounded-md p-1 bg-green-400 shadow-xs text-white gap-2 w-full sm:w-auto active:bg-green-700 active:text-white hover:outline-2"
            >
              <span>Registrar</span>
              <Check />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <CustomInput
            inputType="text"
            label="Nombre del libro"
            value={inputs.nombre}
            name="nombre"
            onChange={handleInputChange}
          />
          <div className="flex flex-col w-full min-w-0 text-white font-bold shadow-xl">
            <label htmlFor="">Editorial</label>
            <select
              name="editorial"
              id="editorial"
              className="p-0 bg-white rounded-md h-9  w-full active:outline-0 focus:outline-2 focus:outline-black text-black"
              value={inputs.editorial}
              onChange={handleInputChange}
            >
              <option value="santillana">Santidalla</option>
              <option value="sm">SM</option>
              <option value="norma">Norma</option>
            </select>
          </div>
          <CustomInput
            inputType="text"
            label="Autor:"
            value={inputs.autor}
            name="autor"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="date"
            label="Fecha Edición:"
            value={inputs.fechaEdicion}
            name="fechaEdicion"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="number"
            label="Cantidad:"
            value={inputs.cantidad}
            name="cantidad"
            onChange={handleInputChange}
          />
          <CustomInput
            inputType="date"
            label="Fecha Salida:"
            value={inputs.fechaSalida}
            name="fechaSalida"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-3">
          <button className="flex justify-center items-center font-bold rounded-md p-2 bg-red-400 text-white gap-2 w-full sm:w-auto active:bg-red-700 active:text-white hover:outline-2">
            <span>cancelar</span>
            <X />
          </button>
        </div>
      </form>
    </div>
  );
};
