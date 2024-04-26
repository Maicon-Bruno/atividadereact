import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Tarefas(){
    return (
        <Layout>
            <h1>Tarefas</h1>
            <Link to='/'>Voltar para Home</Link>
            <hr />
            
        </Layout>
    )
}

export default Tarefas