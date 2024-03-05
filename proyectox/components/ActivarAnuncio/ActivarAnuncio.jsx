"use client";

const ActivarAnuncio = () => {
  return (
    <div className="flex">
      <containerall className="flex flex-col items-center  gap-4 min-h-screen w-screen py-[100px] dark:bg-dark-d bg-whitet">
        <div className="flex gap-1 items-center justify-center">
          {/* <h1 className="my-auto text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">DESCUENTOS por lanzamiento</h1> */}
          <h1 className="text-center text-t-red text-2xl sm:text-3xl font-bold">
            Suscribete
          </h1>
          {/* <h2 className='text-xl text-red-500 font-bold'>Por lanzamiento: 70% de descuento en todos los planes!</h2> */}
        </div>

        <containeniveles className="grid sm:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-10 items-center gap-2 lg:gap-4 justify-center">
          
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-white bg-slate-500 w-full text-center py-2 font-bold">
              <h1>Plan Mensual</h1>
            </div>
            <div className="text-white bg-blue-500 font-bold text-2xl w-full text-center py-6">
              <h1>S/100.00</h1>
            </div>
            <button className="bg-red-500 px-4 text-white py-2 rounded-[10px] w-full text-center">Suscribete ahora</button>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-white bg-slate-500 w-full text-center py-2 font-bold">
              <h1>Plan Trimestral</h1>
            </div>
            <div className="text-white bg-blue-500 font-bold text-2xl w-full text-center py-6">
              <h1>S/250.00</h1>
            </div>
            <button className="bg-red-500 px-4 text-white py-2 rounded-[10px] w-full text-center">Suscribete ahora</button>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-white bg-slate-500 w-full text-center py-2 font-bold">
              <h1>Plan Semestral</h1>
            </div>
            <div className="text-white bg-blue-500 font-bold text-2xl w-full text-center py-6">
              <h1>S/350.00</h1>
            </div>
            <button className="bg-red-500 px-4 text-white py-2 rounded-[10px] w-full text-center">Suscribete ahora</button>
          </div>

          

          
        </containeniveles>

        <div className="mt-10">
          <h1 className="text-center dark:text-slate-200 text-slate-600 text-2xl sm:text-3xl font-bold">
            <strong className="text-t-red">Métodos</strong> de pago
          </h1>
        </div>

        <metodospago className="mx-2 flex flex-col gap-4 items-center mb-[40px]">
          <div className="w-[98%] dark:text-white text-black p-5 border-bor-light border-4 rounded-lg gap-2">
            <h1 className="text-center font-bold text-2xl">
              Cuentas bancarias (Perú)
            </h1>
            <h3 className="text-center mb-8">
              <strong>Titular:</strong> RRB CAPITAL E.I.R.L
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
              <section className="flex gap-2 justify-center items-center rounded-lg">
                <img
                  src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015210/bcpp_jpbbp1.png"
                  alt=""
                  className="h-[100px] w-[100px] my-auto"
                />
                <infocta className="dark:text-white text-black">
                  <h1 className="text-center font-bold text-2xl mb-2">Bcp</h1>
                  <contain className="flex lg:flex-row flex-col lg:gap-2">
                    <p className="font-bold">Cuenta: </p>
                    <p className="lg:text-[16px] my-auto text-sm">
                      {" "}
                      193-9974125-0-35
                    </p>
                  </contain>
                  <contain className="flex lg:flex-row flex-col lg:gap-2">
                    <p className="font-bold">CCI: </p>
                    <p className="lg:text-[16px] my-auto text-sm">
                      002-193-009974125035-13
                    </p>
                  </contain>
                </infocta>
              </section>

              <section className="flex gap-2 justify-center items-center">
                <img
                  src="/assets/logointerbank.png"
                  alt=""
                  className="h-[100px] w-[100px]"
                />
                <infocta>
                  <h1 className="text-center font-bold text-2xl mb-1">
                    Interbank
                  </h1>
                  <contain className="flex lg:flex-row flex-col lg:gap-2">
                    <p className="font-bold">Cuenta: </p>
                    <p className="lg:text-[16px] my-auto text-sm">
                      {" "}
                      200-3005394560
                    </p>
                  </contain>
                  <contain className="flex lg:flex-row flex-col lg:gap-2">
                    <p className="font-bold">CCI: </p>
                    <p className="lg:text-[16px] my-auto text-sm">
                      003-200-003005394560-33
                    </p>
                  </contain>
                </infocta>
              </section>

              <section className="flex gap-2 justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449318/yapep_dh6iav.png"
                  alt=""
                  className="h-[100px] w-[100px]"
                />
                <infocta>
                  <h1 className="text-center font-bold text-2xl mb-2">Yape</h1>
                  <contain className="flex lg:flex-row flex-col lg:gap-2">
                    <p className="font-bold">Número: </p>
                    <p className="lg:text-[16px] my-auto text-sm">
                      +51 989752208
                    </p>
                  </contain>
                </infocta>
              </section>
            </div>
          </div>

          <div className="w-full flex flex-col  items-center justify-center sm:flex-row p-1 gap-4">
            <div className="w-full flex flex-col justify-center items-center dark:text-white text-black p-4 border-bor-light border-4 rounded-lg gap-2">
              <h1 className="text-center font-bold text-3xl">Yape</h1>
              <h3 className="text-center">Escanea el qr desde tu yape</h3>
              <div className="mt-4 grid items-center justify-center">
                <section className="flex gap-2 justify-center items-center">
                  <img
                    src="/assets/qryape.jpg"
                    alt=""
                    className="h-[300px] w-[300px] rounded-[10px]"
                  />
                  {/* <infocta>
                <p>+51 924169968</p>
              </infocta> */}
                </section>
              </div>
            </div>

            <whatsapp className="w-full h-full flex flex-col justify-center items-center text-white dark:text-t-dark p-5 border-bor-light border-4 rounded-lg gap-2">
              <a
                href={`https://api.whatsapp.com/send?phone=+51989752208&text=Hola%2C%20me%20interesa%20comprar%20un%20plan%20para%20mi%20anuncio%20en%20Papayahub.pe`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-[12px] font-bold text-xl bg-green-500 hover:bg-green-600 duration-200 transition-all ease-linear text-white rounded-lg w-fit"
              >
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/color/48/whatsapp--v1.png"
                  alt="whatsapp--v1"
                  className="my-auto mb-2 inline-block"
                />{" "}
                WhatsApp
              </a>
              <div className="dark:text-white text-black text-center text-[16px] sm:text-base mx-10">
                <h1 className="">
                  Envíanos un WhatsApp indicando el nivel de suscripción, código
                  ID, nombre y activaremos tu perfil.
                </h1>
              </div>
            </whatsapp>
          </div>
        </metodospago>
      </containerall>
    </div>
  );
};

export default ActivarAnuncio;
