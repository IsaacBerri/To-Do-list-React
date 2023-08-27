import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const useFilterTask = () => {
  const { setListToDo, listaGuardada, setSectionFilter } = useContext(ToDoContext);

  const handleChange = (e) => {
    const search = e.target.value;
    if (search === "") {
      setListToDo(listaGuardada);
    } else {
      const searchTask = listaGuardada.filter((objs) =>
        objs.Nombre.toLowerCase().includes(search.toLowerCase())
      );
      setListToDo(searchTask);
    }
  };

  const handleClickFilter = (tipo) => {
    switch (tipo) {
      case "Todo":
        setListToDo(listaGuardada);
        setSectionFilter("")
        break;
      case "Prioridad":
        const prioridadValor = {
          Alta: 3,
          Media: 2,
          Baja: 1,
        };
        const filterPrioridad = listaGuardada.filter(
          (objs) => objs.Prioridad !== "Ninguna"
        );
        const ordenPrioridad = filterPrioridad.sort(
          (a, b) => prioridadValor[b.Prioridad] - prioridadValor[a.Prioridad]
        );
        setListToDo(ordenPrioridad);
        setSectionFilter("en el filtro: Prioridad")
        break;
      case "Fecha":
        const filterFecha = listaGuardada.filter((objs) => objs.Fecha !== "");
      const ordenFecha = filterFecha.sort(
        (a, b) => new Date(a.Fecha) - new Date(b.Fecha)
      );
      setListToDo(ordenFecha);
      setSectionFilter("en el filtro: Fecha")
        break;
      default:
        const filtroCategoria = listaGuardada.filter((objs) => objs.Categoria === tipo)
        setListToDo(filtroCategoria)
        setSectionFilter(`en el filtro: Categoria-${tipo}`)
        break;
    }
  };

  return {
    handleChange,
    handleClickFilter,
  };
};

export default useFilterTask;
