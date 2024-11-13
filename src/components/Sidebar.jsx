import { PencilLine } from "phosphor-react";

import userBannerBg from "../assets/user-banner-bg.png";

import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={userBannerBg}
                alt="Imagem de Background do usuário"
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https:github.com/felipeslopes2010.png"
                    alt="Foto de Perfil do usuário"
                />

                <strong>Felipe Kimura</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}