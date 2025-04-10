import { Card } from "react-bootstrap"
import { ICurso } from "../../http/api"

interface CursoCardProps {
    curso: ICurso;
    onClick?: () => void; 
}

export const CursoCard = ({curso , onClick} : CursoCardProps) => {

    return (
        <div>
            <Card onClick={onClick} style={{ width: '18rem', cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Title>{curso.nombre}</Card.Title>
                    <Card.Text>
                        Total de estudiantes: {curso.estudiantes.length}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
