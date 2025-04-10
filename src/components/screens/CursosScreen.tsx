import { Container, Navbar } from "react-bootstrap"
import { CursoCard } from "../ui/CursoCard"
import { useEffect, useState } from "react";
import { Curso, fetchCursos } from "../../http/api";


    
export const CursosScreen = () => {

    const [cursos, setCursos] = useState<Curso[]>([]);

    useEffect(() => {
        const cargarCursos = async () => {
        try {
            const data = await fetchCursos();
            setCursos(data);
        } catch (error) {
            console.error('Error al cargar los cursos:', error);
        }
    };

    cargarCursos();
    }, []);




    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Cursos:</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>
            <Container className="mt-4">

                {cursos.map((curso) => (
                    <CursoCard  curso={curso} />
                ))}

            </Container>
        </div>
    )
}
