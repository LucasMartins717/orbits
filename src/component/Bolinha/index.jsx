import styled from "styled-components";

const BolaWrapper = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
    }
}))`
    position: absolute;
    border-radius: 50%;
    background-color: #ffa600ae;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`

const Bolinha = ({ x, y, size }) => {



    return (
        <BolaWrapper x={x} y={y} size={size} />
    );
};

export default Bolinha;