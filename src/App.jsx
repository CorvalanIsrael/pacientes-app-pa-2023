
import { Formulario } from './compoments/Formulario'
import { Header } from './compoments/Header'
import { ListadoPacientes } from './compoments/ListadoPacientes'

function App() {

  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
