import { useState } from "react";

const useFormulario = (initialState) =>{
const [formulario, setFormulario] = useState(initialState);
const handleChange = ({target}) => {
  setFormulario({
    ...formulario,
    [target.name]: target.value
  })
}
const reset = () =>{
  setFormulario(initialState)
}
return [formulario,handleChange,reset]
}
export default useFormulario;