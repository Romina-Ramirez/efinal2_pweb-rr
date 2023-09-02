import axios from "axios";

export const insertarEstudianteFachada = (bodyUser, token) => {
    guardarEstudiante(bodyUser, token);
}

const guardarEstudiante = (bodyUser, token) => {
    let value = "Bearer " + token;
    const headers = {
        "Authorization": value,
        "Mensaje": "Valor"
    }
    const data = axios.post(`http://localhost:8082/API/V1.0/Inscripcion/estudiantes`, bodyUser, { headers: headers }).then(r => r.data);
    console.log(data)
    return data;
}
