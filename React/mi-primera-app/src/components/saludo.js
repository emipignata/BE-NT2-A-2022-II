const Saludo = ({ idioma }) => {

    console.log(idioma)

    return (
        <div>
            {
                (idioma === 'es') ?
                    <p>Hola! Bienvenido a NT2</p>
                    :
                    <p>Hello! Welcome to NT2</p>
            }
        </div>

    )
}

export default Saludo