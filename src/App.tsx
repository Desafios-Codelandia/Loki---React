import React from "react"

const Estrela = () => {
  return (
    <div className="w-5">
      <img src="../estrela1.svg" alt="estrela" />
    </div>
  )
}

const Biografia = () => {
  return (
    <p className="text-justify">Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </p>
  )
}

const Botoes = () => {
  return (
    <div className="flex gap-5">
      <button className="bg-botao1 rounded-md p-3">
        <a href="">ASSISTIR AGORA</a>
      </button>

      <button className="bg-botao2 border rounded-md p-3">
        <a href="">TRAILER</a>
      </button>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <div className='bg-lokiBg bg-cover brightness-50 bg-center h-basico1 w-full text-9xl'>
      </div>
      <div>
        <div className="absolute top-0 text-white w-full items-center justify-center flex flex-col">
          <div className="flex flex-col items-center">
            <p className="text-xl m-5">DISPONIVEL AGORA</p>
            <h3 className="text-8xl mb-16">LOKI</h3>
          </div>
          <div className="space-y-5">
            <div className="flex gap-20 justify-center items-center mt-40">
              <img className="w-48 h-64 hidden lg:flex" src="../cover.png" alt="" />
              <div className="lg:w-2/5">
                <div className="hidden lg:block">
                  <Biografia />
                </div>

                <div className="flex items-center justify-between py-10 px-5 ">
                  <div className="flex items-center gap-1">
                    <img className="w-5" src="../relogio.svg" alt="" />
                    <p>51min</p>
                  </div>

                  <div className="flex">
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <Estrela />
                    <img className="w-5" src="../estrela2.svg" alt="estrela" />
                  </div>

                  <div>
                    <p>2021</p>
                  </div>
                </div>

                <div className="max-lg:hidden">
                  <Botoes />
                </div>

                <div className="border flex flex-col items-center p-5 bg-fundodescricao rounded-t-3xl lg:hidden">
                  <Botoes />
                  <span className="my-5 w-full h-px bg-black flex"></span>
                  <Biografia />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
