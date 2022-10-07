import { AdicionaTarefa } from './components/AdicionaTarefa'
import { ContadorTarefas } from './components/ContadorTarefas'
import { Header } from './components/Header'
import { Tarefas } from './components/Tarefas'
import { TarefasAdicionadas } from './components/TarefasAdicionadas'
import styles from './global.css'


function App() {

  return (
    <div>
      <Header />
      <AdicionaTarefa />
      <ContadorTarefas />
      <TarefasAdicionadas />

    </div>
  )
}

export default App
