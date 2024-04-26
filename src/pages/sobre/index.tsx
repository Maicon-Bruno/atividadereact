import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Sobre(){
    return (
        <Layout>
            <h1>Sobre</h1>
            <Link to='/'>Voltar para Home</Link>
        </Layout>
    )
}

export default Sobre