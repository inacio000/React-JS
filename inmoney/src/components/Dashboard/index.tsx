import { Summary } from "../Summary";
import { TranssitionsTable } from "../TranssitionsTable/inex";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TranssitionsTable />
        </Container>
    )
}