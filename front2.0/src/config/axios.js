import axios from "axios";

//Core
export const CoreInstance = axios.create({
    baseURL: "https://localhost:7188/api/",
});

//Documentary
export const DocumentInstance = axios.create({
    baseURL: "https://localhost:7012/api/",
});

//Files por documento
export const FileInstance = axios.create({
    baseURL: "https://localhost:7012/api/filebydocument/",
});

//Options de menu documento
export const OptionConfig = axios.create({
    baseURL: "http://localhost:2525/"
});