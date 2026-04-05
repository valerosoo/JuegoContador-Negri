type Props = {
    iniciar: () => void;
    disabled: boolean;
}

function BotonInicio({ iniciar, disabled }: Props) {
    return (
        <button onClick={iniciar} disabled={disabled}>Iniciar</button>
    );
}
export default BotonInicio;

