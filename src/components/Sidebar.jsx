import styles from '../Stock.module.css'
import { Link } from "react-router-dom";
// import  { useState } from 'react';


function Sidebar() {
    // const [photo, setPhoto] = useState(null);
    // const [nome, setNome] = useState('');
    // const [telefone, setTelefone] = useState('');
    // const [email, setEmail] = useState('');
    // const [endereco, setEndereco] = useState('');
    // const [isPopUpOpen, setIsPopUpOpen] = useState(false); 

    // const openPopUp = () => setIsPopUpOpen(true);
    // const closePopUp = () => setIsPopUpOpen(false);


    // const handleSubmit = async () => {
    //     const data = {
    //         photo,
    //         nome,
    //         telefone,
    //         email,
    //         endereco,
    //     };

    //     try {
    //         const response = await fetch('API_URL_AQUI', { // URL da API para substituir depois
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (response.ok) {
    //             console.log("Dados salvos com sucesso");
    //             // closePopUp();
    //         } else {
    //             console.error("Erro ao salvar os dados");
    //         }
    //     } catch (error) {
    //         console.error("Erro de conexão com o servidor", error);
    //     }
    // };

    return (
        <div>
            <div className="menu">
                <i className="bi bi-list"></i>
                <i className="bi bi-x-lg"></i>
            </div>
            <div className={styles.barraLateral}>
                <div>
                    <div className={styles.nomePagina}>
                        <img src="/saint_500.png" alt="Menu_Toggle" id="menu_icon"/>
                        <span className="txtLogo">SaintBlue</span>
                    </div>
                </div>
                <nav className={styles.navegacao}>
                    <ul>
                        <li>
                            <Link to="/" rel="next" target="_self" className={styles.active}>
                                <i className="bi bi-house-door"></i>
                                <span className={styles.txtNavegacao}>Inicio</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/estoque" rel="next" target="_self">
                                <i className="bi bi-boxes"></i>
                                <span className={styles.txtNavegacao}>Estoque</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/fornecedores" rel="next" target="_self">
                                <i className="bi bi-person-workspace"></i>
                                <span className={styles.txtNavegacao}>Fornecedores</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/colaboradores" rel="next" target="_self">
                                <i className="bi bi-file-earmark-person"></i>
                                <span className={styles.txtNavegacao}>Colaboradores</span>
                            </Link>
                        </li>               
                    </ul>
                </nav>
                <hr className="line"/>
                <div className={styles.modoEscuro}>
                    <div className={styles.info}>
                        <i className="bi bi-moon"></i>
                        <span>Dark Theme</span>
                    </div>
                    <div className={styles.switch}>
                        <div className={styles.base}>
                            <div className={styles.circulo}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.sair}>
                    <ul>
                        <li>
                            <Link to="#" rel="next" target="_self">
                                <i className="bi bi-box-arrow-left"></i>
                                <span className={styles.btnSair}>Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>    
                <div className={styles.usuario}>
                    <img 
                        src="/263457215_5031922253486891_358383527080523036_n.jpg" 
                        alt="Botão de Acesso" 
                        className="open-popup-btn" 
                        // onClick={openPopUp}
                    />
                    {/* {isPopUpOpen && (
                        <Popup
                            isOpen={isPopUpOpen}
                            onClose={closePopUp}
                            onSubmit={handleSubmit}
                            photo={photo}
                            setPhoto={setPhoto}
                            nome={nome}
                            setNome={setNome}
                            telefone={telefone}
                            setTelefone={setTelefone}
                            email={email}
                            setEmail={setEmail}
                            endereco={endereco}
                            setEndereco={setEndereco}
                        />
                    )} */}
                    <div className={styles.infoUsuario}>
                        <div className="nome_telefone">
                            <span className={styles.nome}>Richard Gois</span>
                        </div>
                        <div>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
