import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router"
import { CursosScreen } from "../components/screens/CursosScreen"
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/cursos"/>}></Route>
                <Route path="/cursos" element={<CursosScreen/>}></Route>
                <Route path="/estudiantes" element={<EstudiantesScreen/>}></Route>
            </Routes>
        </Router>
    )
}

