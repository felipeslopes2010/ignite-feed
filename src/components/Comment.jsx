import { Trash, ThumbsUp } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment} >
            <img src="https://github.com/felipeslopes2010.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Kimura</strong>
                            <time title="12 de Novembro de 2024 às 21:42:00" dateTime="2024-11-12 21:42:00">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}