import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import axios from 'axios'
import { schema } from '../../../utils/schemas';

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const newSugestion = (data) => {
        axios.post('http://localhost:5000/sugestao', data);
        console.log(data);
        setModalState(false);
        reset();
    };

    const [modalState, setModalState, ] = useState(true);

    let hide = modalState ? styles.hide : styles.show;
    let show = modalState ? styles.show : styles.hide;

    let fecharModal = () => {
        setModalState(true);
        // window.location.reload();
    };

    return (
        <>
            <section className={styles.formulario}>
                <div className={`${styles.formContainer} ${show}`}>
                    <form onSubmit={handleSubmit(newSugestion)}>
                        <div className={styles.tituloForm}>
                            <h3>Deixe sua opinião</h3>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Nome:</label>
                            <input type="text" placeholder='Digite seu nome' {...register('name')} />
                            <small>{errors.name?.message}</small>
                        </div>
                        <div className={styles.fild}>
                            <label className={styles.label}>Email:</label>
                            <input type="email" placeholder='Digite seu e-mail' {...register('email')} />
                            <small>{errors.email?.message}</small>
                        </div>
                        <div className={styles.coment}>
                            <label className={styles.label}>Opinião:</label>
                            <textarea placeholder='Digite sua opinião aqui'{...register('suggestion')} />
                            <small>{errors.suggestion?.message}</small>
                        </div>
                        <div className={styles.btnContainer}>
                            <button type='submit' >Enviar</button>
                        </div>
                    </form>
                </div>
                <div className={`${styles.modalContainer} ${hide}`}>
                    <h2>Sugestão enviada</h2>
                    <div className={styles.btnContainer}>
                        <button type='submit' onClick={() => fecharModal()}>OK</button>
                    </div>
                </div>
            </section>
        </>
    );
};