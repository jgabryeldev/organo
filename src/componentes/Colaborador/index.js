import './colaborador.css'

const Colaborador = (props) => {

    const css = {background: props.corDeFundo}

    return (
    <div className='colaborador'>
        <div className='cabecacalho' style={css}>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>
        )

}

export default Colaborador
