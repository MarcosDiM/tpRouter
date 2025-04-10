import { Card } from "react-bootstrap"
import { IEstudiante } from "../../http/api"

interface EstudianteCardProps {
    estudiante: IEstudiante
}

export const EstudianteCard = ({estudiante}: EstudianteCardProps) => {
    return (
        <div>
            <Card style={{ width: '18rem', cursor: 'pointer' }}>
                <Card.Body>
                    <Card.Title>{estudiante.nombre}</Card.Title>
                    <Card.Text>
                        {estudiante.edad} años
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
