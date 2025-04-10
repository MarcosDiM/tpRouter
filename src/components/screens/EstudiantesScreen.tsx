import { useLocation, useNavigate } from "react-router"
import { fetchEstudiantesPorCurso, ICurso, IEstudiante } from "../../http/api"
import { Button, Container, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"
import { EstudianteCard } from "../ui/EstudianteCard"
import styles from './EstudiantesScree.module.css'


export const EstudiantesScreen = () => {
    const location = useLocation()
    const curso = location.state?.curso as ICurso

    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
    const navigate = useNavigate()


    //Uso del useEffect para cargar los estudiantes del curso
     useEffect(() => {
            const cargarEstudiantes = async () => {
            try {
                const data = await fetchEstudiantesPorCurso(curso.id);
                setEstudiantes(data);
            } catch (error) {
                console.error('Error al cargar los cursos:', error);
            }
            };
            cargarEstudiantes();
        }, []);


    //Funcion para voler a la pantalla de cursos
        const handleBackClick = () => {
            navigate('/cursos')
        }

    return (
        <div>

            {/*Navbar para la pantalla de estudiantes*/}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button onClick={handleBackClick}>VOLVER A CURSOS</Button>
                    <Navbar.Brand href="#home">Estudiantes del curso: {curso?.nombre}</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>
            
            {/* Mappear todo los estudiantes como Cards */}
            <Container className={styles.gridEstudiantes}>
            
                {estudiantes.map((estudiante) => (
                        <EstudianteCard estudiante={estudiante}/>
                ))}
            
            </Container>
        </div>
    )
}