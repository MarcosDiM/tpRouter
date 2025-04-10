import axios from 'axios';

const API_URL = 'http://localhost:3000';

/// Definición IEstudiante
export interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
}
/// Definición ICurso
export interface ICurso {
    id: number;
    nombre: string;
    estudiantes: IEstudiante[];
}

// Obtener todos los cursos
export const fetchCursos = async (): Promise<ICurso[]> => {
    const res = await axios.get(`${API_URL}/cursos`);
    return res.data;
};  

// Obtener los estudiantes de un curso por id de curso
export const fetchEstudiantesPorCurso = async (cursoId: number): Promise<IEstudiante[]> => {
    const res = await axios.get(`${API_URL}/cursos/${cursoId}`);
    const curso: ICurso = res.data;
    return curso.estudiantes;
    };

