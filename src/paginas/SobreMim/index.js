import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.jpeg";

import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>
        {" "}
        Rodrigo Santana de Araujo: Uma jornada épica rumo ao Desafio Front-End!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto de perfil"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Meu nome é Rodrigo Santana de Araújo, e por trás da aparente rotina
        administrativa dos últimos 12 anos, pulsa a paixão por tecnologia e a
        busca por um futuro promissor como desenvolvedor front-end.
      </p>
      <p className={styles.paragrafo}>
        Embora tenha quase me formado em Ciências Econômicas, meu verdadeiro
        fascínio sempre esteve no universo digital. A experiência como gerente
        de recursos humanos me proporcionou organização, visão estratégica e a
        capacidade de lidar com diferentes públicos. No cartório, aprimorei
        minhas habilidades analíticas e de resolução de problemas, além de ter
        adquirido um profundo conhecimento em e-commerce, área que me fascina
        pela dinâmica e pelas infinitas possibilidades de criação.
      </p>
      <p className={styles.paragrafo}>
        Mas foi no Jiu-Jitsu que encontrei a disciplina e a perseverança que me
        impulsionam. Faixa marrom na arte marcial, dedico-me à prática com a
        mesma intensidade que pretendo aplicar no aprendizado e desenvolvimento
        profissional.
      </p>
      <p className={styles.paragrafo}>
        Apaixonado por animes e cultura geek, encontro na tecnologia a
        oportunidade de unir o útil ao agradável. Sou um entusiasta nato, sempre
        buscando aprender e me desafiar. Acredito que essa curiosidade
        insaciável, aliada à minha persistência e facilidade de aprendizado, me
        tornam um candidato promissor na área de desenvolvimento front-end.
      </p>
      <p className={styles.paragrafo}>
        Estou pronto para dar o próximo passo em minha carreira, mergulhando de
        cabeça no fascinante mundo da programação. Tenho plena convicção de que
        minhas habilidades analíticas, minha paixão por tecnologia e meu
        espírito colaborativo serão fundamentais para o meu sucesso nesta nova
        jornada.
      </p>
    </PostModelo>
  );
}
