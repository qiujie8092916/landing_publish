import { LanguageSwitchLink } from "../../components/languageSwitchLink";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import styles from "../../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useEffect, useState } from "react";

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };

const Q_GROUP = "572982126";
const PROTOCOL = "https://";
const DOMAIN = "liaobots";
const SHARE_DOMAIN = "x.liaox";
const SLOGAN = "LiaoBots UI";
const SUFFIX = {
  COM: ".com",
  SITE: ".site",
  WORK: ".work",
  AI: ".ai",
  ONE: ".one",
};

export default function Home() {
  const { t } = useTranslation("common");

  const [curSite, setCurSite] = useState("");
  const [classical, setClassical] = useState({
    title: "",
    desc: "",
    site: "",
  });
  const [recommend, setRecommend] = useState({
    title: "",
    desc: "",
    site: "",
  });
  const [share, setShare] = useState({
    title: "",
    desc: "",
    site: "",
  });

  useEffect(() => {
    setCurSite(window.location.href);
    setClassical({
      title: ["Classical", "Title"].join(" "),
      desc: ["Classical", "Desc"].join(" "),
      site: PROTOCOL.concat(DOMAIN, SUFFIX.COM),
    });
    setRecommend({
      title: ["Recommended", "Title"].join(" "),
      desc: ["Recommended", "Desc"].join(" "),
      site: PROTOCOL.concat(DOMAIN, SUFFIX.WORK),
    });
    setShare({
      title: ["Share", "Title"].join(" "),
      desc: ["Share", "Desc"].join(" "),
      site: PROTOCOL.concat(SHARE_DOMAIN, SUFFIX.AI),
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{SLOGAN}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <LanguageSwitchLink />
      </header>
      <main>
        <div>
          <h2 className={styles.title}>
            {t("Welcome")}
          </h2>
          <h2 className={styles.title}>
            {SLOGAN} !
          </h2>
        </div>

        {/*<p className={styles.description}>{t("Alternate")} 👇🏻</p>*/}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t(classical.title)}</h3>
            <div>
              <a href={classical.site}>{classical.site}</a>
              <span className={styles.desc}>（{t(classical.desc)}）</span>
            </div>
            <div>
              <a href={recommend.site}>{recommend.site}</a>
              <span className={styles.desc}>（{t(recommend.desc)}）</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t(share.title)}</h3>
            <a href={share.site}>{share.site}</a>
            <span className={styles.desc}>（{t(share.desc)}）</span>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t("Save This Navigation Page")}</h3>
            <a href={curSite}>{curSite}</a>
          </div>
        </div>
      </main>

      <footer>
        <p>
          {t("Footer 1", {
            Q_GROUP,
          })}
        </p>
        {/*<p>{t("Footer 2")}</p>*/}
      </footer>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateY(-2rem);
          gap: 2rem;
        }

        footer {
          width: 100%;
          //height: 100px;
          //border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          margin-bottom: 3rem;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer p {
          margin: 0.5rem auto;
          text-align: center;
          max-width: 80%;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }


        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h1,
        h2,
        p,
        ul {
          margin: 0;
        }

        ul {
          padding: 0;
          list-style: none;
        }

        button {
          padding: 0.5rem 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

// export const getServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? "en", ["common"], null, [
//         "zh",
//         "en",
//       ])),
//     },
//   };
// };
