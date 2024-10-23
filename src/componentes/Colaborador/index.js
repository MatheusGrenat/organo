import './styles.css'

const Colaborador = ({nome, imagem, cargo }) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt='imagem do pai'/>
            </div>
            <div className='colaborador__rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador