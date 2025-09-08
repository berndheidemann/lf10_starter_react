import {Container} from "react-bootstrap";

export function UnsecuredFoo() {
    return (
        <Container>
            <h1>List of Foo (unsecured)</h1>
            <ul>
                <li>Foo 1</li>
                <li>Foo 2</li>
                <li>Foo 3</li>
            </ul>
        </Container>
    )
}