import {Container} from "react-bootstrap";

export function Home() {
    return (
        <Container>
            <h1>Willkommen!</h1>
            <p>Bitte navigieren Sie über die Menüleiste zu den verschiedenen Seiten.</p>
            <p>Foo sollte ohne Login sichtbar sein, bei Klick auf Bar müsste ein Login erscheinen.</p>
        </Container>
    );
}