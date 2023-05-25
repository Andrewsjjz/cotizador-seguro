export const Marcas = [
    {
        id: 1, nombre: "Europeo",
    },    
    {
        id: 2, nombre: "Americano"
    },   
     {
        id: 3, nombre: "Asiatico"
    },
    
]

const FullYear = new Date().getFullYear()   
export const Years = Array.from ( new Array(10), (valor, index) => FullYear - index)


export const Planes = [
    {
        id: 1, nombre: "Basico",
    },    
    {
        id: 2, nombre: "Completo"
    },   

    
]