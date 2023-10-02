

export const Formulario = () => {
  return (
    <div className='w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">Seguieminetos Pacientes</h2>

      <p>Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
          <label className="block text-gray-700 uppercase font-bold">Nombre Paciente:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Nombre Paciente"
            />
        </div>

        <div>
          <label className="block text-gray-700 uppercase font-bold">Apellido Paciente:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Nombre Paciente"
            />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold">Telefono Paciente:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Nombre Paciente"
            />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold">Fecha:</label>
          <input
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="date"
            placeholder="Nombre Paciente"
            />
        </div>
        <div>
          <label className="block text-gray-700 uppercase font-bold">Sintomas:</label>
          <textarea
            className=" border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            placeholder="Nombre Paciente"
            />
        </div>
      </form>
    </div>
  )
}
