import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

export default function AppSeguro() {

  const {resultado, cargando} =useCotizador()

  return (

    <>
      <div
        class="absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">

      </div>
      <div
        class="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div class="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div class="self-start hidden lg:flex flex-col  text-gray-300">

            <h1 class="my-3 font-semibold text-4xl">Cotizador de seguro para vehiculo</h1>
            <p class="pr-3 text-sm opacity-75">Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual mockups</p>
          </div>
        </div>
        <div class="flex justify-center self-center  z-10">
          <div class="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div class="mb-7">
              <h3 class="font-semibold text-2xl text-gray-800 text-center">Formulario</h3>

            </div>
            <div class="space-y-6">
              <div class="">
                <Formulario />
              </div>

              <div class="relative" x-data="{ show: true }">
                <div class="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">

                </div>
              </div>

              <div class="flex items-center justify-center space-x-2 my-5">
              {cargando ? <Spinner/> : <Resultado/>}
              </div>

            </div>
          </div>
        </div>
      </div>

    </>





  )
}
