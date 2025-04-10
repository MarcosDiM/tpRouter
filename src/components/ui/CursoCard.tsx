import { Card } from "react-bootstrap"
import { Curso } from "../../http/api"

interface CursoCardProps {
    curso: Curso;
}

export const CursoCard = ({curso} : CursoCardProps) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{curso.nombre}</Card.Title>
                    <Card.Text>
                        Total de estudiantes: {curso.estudiantes.length}
                    </Card.Text>
                    
                </Card.Body>
            </Card></div>
    )
}
