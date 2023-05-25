import { Marcas, Years, Planes } from "../constants"
import { } from '../styles/style.css'
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

export default function Formulario() {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        cotizarSeguro()
        
    }

    return (
        <>

            {error && <Error/>}
            <form 
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>

                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">Seleccione marca</option>

                        {Marcas.map(marca => (

                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>

                    <label className="block mb-3 mt-5 font-bold text-gray-400 uppercase">Año</label>

                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}

                    >
                        <option value="">Seleccione marca</option>

                        {Years.map(year => (

                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>

                    <div className="my-5">
                        <label className="block mb-3 font-bold text-gray-400 uppercase">Seleccione un plan </label>
                        <div className="flex gap-3 items-center">
                            {Planes.map(plan => (
                                <Fragment key={plan.id}>
                                    <label htmlFor="">{plan.nombre}</label>
                                    <div class="radio-input mt-5">
                                        <input
                                            name="plan"
                                            value={plan.id}
                                            type="radio"
                                            onChange={e => handleChangeDatos(e)}
                                        />

                                        <div class="plus1">
                                            <div class="plus2"></div>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>

                </div>
                <input 
                type="submit" 
                class="w-full flex justify-center bg-purple-600  
                hover:bg-purple-800 text-gray-100 p-3 rounded-lg tracking-wide font-semibold 
                cursor-pointer transition ease-in duration-500 mb-10"
                value='Cotizar'
                />      
            </form>

        </>
    )
}
