import * as yup from 'yup';

export const schema = yup.object({
    name: yup.string().required("Preencha esse campo").min(3, "Você precisar inserir pelo menos 3 caracteres"),
    email: yup.string().email("Formato de email inválido").required("Use um email válido"),
    suggestion: yup.string().required("Não deixe esse campo vazio")
});