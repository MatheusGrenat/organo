import './styles.css'


const Rodape = () => {
    return (
        <div className='rodape'>
            <div  className='rodape__redes'>
                <div>
                    <img src='/imagens/fb.png' alt='imagem do Facebook' />
                </div>
                <div>
                    <img src='/imagens/tw.png' alt='imagem do Twitter' />
                </div>
                <div>
                    <img src='/imagens/ig.png' alt='imagem do Instagram' />    
                </div>

            </div>
            <div  className='rodape__logo'>
                <img src='/imagens/logo.png' alt='imagem da logo' />
            </div>
            <div className='rodape__texto'>
                <p>Desenvolvido por Matheus Grenat.</p>
            </div>
        </div>
    )
}

export default Rodape

