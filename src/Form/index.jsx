import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


export default function Form(){

    const schema = yup.object({
        name: yup.string().required("Preencha esse campo"),
        email: yup.string().email("Formato de email inválido").required("Use um email válido"),
        suggestion: yup.string().required("Não deixe esse campo vazio")
    });


    const {register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const newSugestion = (data)=>{
        console.log(data);
        alert("Sua sugestão foi recebida");
        window.location.reload();
    }

    return(
        <>
            <section className={styles.formulario}>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit(newSugestion)}>
                        <div className={styles.tituloForm}>
                            <h3>Deixe sua opinião</h3>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Nome:</label>
                            <input type="text" placeholder='Digite seu nome' {...register('name')}/>
                            <small>{errors.name?.message}</small>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Email:</label>
                            <input type="email" placeholder='Digite seu e-mail' {...register('email')}/>
                            <small>{errors.email?.message}</small>
                        </div>
                        <div className={styles.coment}>
                            <label className={styles.label}>Opinião:</label>
                            <textarea placeholder='Digi sua opinião aqui'{...register('suggestion')}/>
                            <small>{errors.suggestion?.message}</small>
                        </div>
                        <div className={styles.btnContainer}>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}