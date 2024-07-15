import styled from "styled-components";
import { useContexto } from "../../context/useContexto";
import { Link } from "react-router-dom";
import sidebarArrow from '/imagens/SidebarArrow.png'

const DivContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: ${({ $sideMenuActive }) => ($sideMenuActive ? '0px' : '-323px')};
    h1{
        margin-right: 0.2em;
        user-select: none;
        cursor: pointer;
    }
    z-index: 9999;

    img{
        margin-top: -0.35em;
        width: 3em;
        height: 3em;
    }
`
const DivEstilo = styled.div`
    width: 20em;
    height: 7.78em;
    border-bottom-left-radius: 0.5em;
    background-color: #000000c1;
    user-select: none;

    ul{
        list-style-type: none;
        padding: 1em;
    }

    .link{
        text-decoration: none;
        color: #2e260b;
    }

    li{
        text-align: center;
        background-color: #ffffffa7;
        border-radius: 0.3em;
        margin-bottom: 0.61em;
        padding: 0.1em;
        font-size: 1.7em;
        transition: transform 0.25s ease-out;
        cursor: pointer;
    }

    li:hover{
       background-color: #ffffffce;
       transform: scale(1.05);
    }
`

const MenuLateral = () => {

    const { sideMenuActive, setSideMenuActive } = useContexto();

    const AtivarMenu = () => {
        setSideMenuActive(!sideMenuActive);
    }

    return (
        <DivContainer $sideMenuActive={sideMenuActive}>
            <img src={sidebarArrow} onClick={() => AtivarMenu()} alt="Sidebar" />
            <DivEstilo>
                <ul>
                    <Link onClick={() => AtivarMenu()} className="link" to={'/com-gravidade'}><li>Bolinhas com Gravidade</li></Link>
                    <Link onClick={() => AtivarMenu()} className="link" to={'/sem-gravidade'}><li>Bolinhas sem Gravidade</li></Link>
                </ul>
            </DivEstilo>
        </DivContainer>
    );
};

export default MenuLateral;