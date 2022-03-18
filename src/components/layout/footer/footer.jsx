import { PageFooter } from "./styles";
import Logo from "./../../ui/logo/logo";

export default function Footer () {
    return (
        <PageFooter as='footer'>
            <Logo />
            <span>Создано 2021</span>
        </PageFooter>
    )
}