import { Container, Navbar } from "react-bootstrap"
import { CursoCard } from "../ui/CursoCard"
import { useEffect, useState } from "react";
import { ICurso, fetchCursos } from "../../http/api";
import { useNavigate } from "react-router";


    
export const CursosScreen = () => {

    const [cursos, setCursos] = useState<ICurso[]>([]);
    const navigate = useNavigate (); 

    //Uso del useEffect para cargar los cursos
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


    //Funcion para navegar a la pantalla de estudiantes
    const handleCursoClick = (curso: ICurso) => {
        navigate('/estudiantes', { state: { curso } })
    }




    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Cursos:</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>

            {/* Mappear todo los cursos como Cards */}
            <Container className="mt-4">

                {cursos.map((curso) => (
                    <CursoCard curso={curso} onClick={()=> handleCursoClick(curso)}/>
                ))}

            </Container>
        </div>
    )
}
