import { AdicionaTarefa } from './components/AdicionaTarefa'
import { ContadorTarefas } from './components/ContadorTarefas'
import { Header } from './components/Header'
import styles from './global.css'


function App() {

  return (
    <div>
      <Header />
      <AdicionaTarefa />
      <ContadorTarefas />
    </div>
  )
}

export default App
