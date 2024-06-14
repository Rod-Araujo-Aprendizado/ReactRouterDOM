import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

const minhaFoto = "https://github.com/Rod-NerdZone.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Com 10 anos de experiência na área administrativa de um cartório de
          protesto, eu sou Rodrigo Araujo e estou na busca um novo capítulo em
          sua carreira profissional, migrando para a promissora área de
          desenvolvimento front-end.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          alt="Foto de perfil"
          src={minhaFoto}
        />
      </div>
    </div>
  );
}
