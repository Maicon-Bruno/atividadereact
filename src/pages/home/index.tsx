import { Link } from "react-router-dom"
import ButtonFatec from "../../components/button-fatec"
import Layout from "../../components/layout"

function Home(){
    return (
        <Layout>
            <div>
                <h1>Home</h1>
                <ButtonFatec label='Teste de botão' type="button" />
                <Link to='/sobre'>Ir para Sobre</Link>
            </div>
            <div>

            </div>
            <ul></ul>
        </Layout>
    )
}

export default Home