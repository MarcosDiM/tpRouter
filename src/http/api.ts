import axios from 'axios';

const API_URL = 'http://localhost:3000';

export interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
}

export interface Curso {
    id: number;
    nombre: string;
    estudiantes: Estudiante[];
}

// Obtener todos los cursos
export const fetchCursos = async (): Promise<Curso[]> => {
    const res = await axios.get(`${API_URL}/cursos`);
    return res.data;
};  

// Obtener un curso por ID
export const fetchCursoById = async (id: number): Promise<Curso> => {
    const res = await axios.get(`${API_URL}/cursos/${id}`);
    return res.data;
};


// Obtener los estudiantes de un curso específico por ID de curso
export const fetchEstudiantesPorCurso = async (cursoId: number): Promise<Estudiante[]> => {
    const res = await axios.get(`${API_URL}/cursos/${cursoId}`);
    const curso: Curso = res.data;
    return curso.estudiantes;
    };

