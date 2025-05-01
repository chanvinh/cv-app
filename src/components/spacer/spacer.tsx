
interface PropsSperator {
    height?: string;
}

const Spacer = ({ height }: Readonly<PropsSperator>) => {
    return (
        <div style={{ height: height }}></div>
    )
}

export default Spacer