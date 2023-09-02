import axios from "axios";

export const obtenerTokenFachada = async (bodyUser) => {
    return await obtenerToken(bodyUser);
}

const obtenerToken = (bodyUser) => {
    const data = axios.post(`http://localhost:8081/API/V1.0/Autorizacion/tokens/obtener`, bodyUser).then(r => r.data);
    return data;
}