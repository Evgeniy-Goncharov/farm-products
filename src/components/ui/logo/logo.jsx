import { Link } from "./styles";
import logo from "./../../../assets/logos/logo.svg";

export default function Logo () {
    return (
        <>
            <Link>
                <img src={logo} alt="Логотип" />
                <span>Фермерские продукты</span>
            </Link>
        </>
    )
}