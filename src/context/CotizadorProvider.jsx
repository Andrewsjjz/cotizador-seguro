import { createContext, useState } from "react";
import {DiferenciaYear, calcularMarca, calcularPlan, FormatearDinero} from '../helpers/index'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    
    const [datos, setDatos] = useState({
        marca : '',
        year : '',
        plan : ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)


const handleChangeDatos = e => {
    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}

const cotizarSeguro = () => {

    //Cantidad base
    let resultado = 2000

    //Diferencia de año
    const diferencia = DiferenciaYear(datos.year)


    //Restar 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100


    //Europeo 30%
    //Americano 15%
    //Asiatico 5%
    resultado *= calcularMarca(datos.marca)


    //Precio dependiendo del plan
    //Basico 20%
    //Completo 50%
    resultado *= calcularPlan(datos.plan)
    resultado = FormatearDinero(resultado)

setCargando(true)

setTimeout(() => {
    setResultado(`$ ${resultado}`)
    setCargando(false)
}, 2800)

}

    return(
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error, 
            setError,
            cotizarSeguro,
            resultado,
            cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )

}


export{
    CotizadorProvider
}

export default CotizadorContext