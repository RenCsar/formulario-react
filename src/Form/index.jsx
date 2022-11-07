import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    description: yup.string().required()
});


export default function Form(){

    // const {register, handleSubmit, formState: { errors}} = useForm({
    //     resolver: yupResolver(schema)
    // })

    return(
        <>
            <section className={styles.formulario}>
                <div className={styles.formContainer}>
                    <form action="#">
                        <div className={styles.tituloForm}>
                            <h3>Deixe sua opinião</h3>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Nome:</label>
                            <input type="text" placeholder='Digite seu nome' />
                            <small>erros</small>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Email:</label>
                            <input type="email" placeholder='Digite seu e-mail' />
                            <small>erros</small>
                        </div>
                        <div className={styles.coment}>
                            <label className={styles.label}>Opinião:</label>
                            <textarea placeholder='Digi sua opinião aqui'/>
                            <small>erros</small>
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