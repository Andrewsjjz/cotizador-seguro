import { useCallback, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import {Marcas, Planes} from '../constants/index'

export default function Resultado() {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year)


    const [nombreMarca] = useCallback (

    Marcas.filter(m => m.id === Number(marca)), 

    [resultado])

    const [nombrePlan] = useCallback (

    Planes.filter(p => p.id === Number(plan)),
        
    [resultado])

    

    if(resultado === 0) return null
  return (
<>
<div className="bg-purple-200 rounded-lg px-24 text-center mt-5 shadow w-auto">
    <h2 className="text-black font-bold uppercase text-2xl mb-5">Resumen</h2>

    <p className="my-2">
        <span className="font-bold text-black">Marca: </span>
        {nombreMarca.nombre}
    </p>

    <p className="my-2">
        <span className="font-bold text-black">Plan: </span>
        {nombrePlan.nombre}
    </p>

    <p className="my-2">
        <span className="font-bold text-black">Año del vehiculo: </span>
        {yearRef.current}
    </p>

    <p className="my-2 text-2xl">
        <span className="font-bold text-black">Total cotizacion: </span>
        {resultado}
    </p>
</div>
</>
  )
}
