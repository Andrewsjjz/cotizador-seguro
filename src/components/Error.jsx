import useCotizador from "../hooks/useCotizador"

export default function Error() {
    const {error} = useCotizador()
  return (
    <div className="uppercase text-center bg-red-500 text-white font-bold rounded-lg py-4">
      <h3 >{error}</h3>
    </div>
  )
}
