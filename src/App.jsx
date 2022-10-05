import { AdicionaTarefa } from './components/AdicionaTarefa'
import { ContadorTarefas } from './components/ContadorTarefas'
import { Header } from './components/Header'
import { Tarefas } from './components/Tarefas'
import styles from './global.css'


function App() {

  return (
    <div>
      <Header />
      <AdicionaTarefa />
      <ContadorTarefas />
      <Tarefas />
    </div>
  )
}

export default App
