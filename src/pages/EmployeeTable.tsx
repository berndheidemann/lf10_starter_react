import {Button, Container} from "react-bootstrap";
import {useEmployeeApi} from "../hooks/useEmployeeApi.ts";

export function EmployeeTable() {

    const {fetchEmployees} = useEmployeeApi();


    return (
        <Container>
            <Button onClick={() => fetchEmployees().then(data => console.log(data))}>
                Mitarbeiter laden
            </Button>


        </Container>
    )
}