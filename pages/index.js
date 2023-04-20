import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Q_GROUP = '572982126';
const PROTOCOL = 'https://';
const DOMAIN = 'liaobots';
const SLOGAN = 'LiaoBots UI';
const SUFFIX = {
  COM: '.com',
  SITE: '.site',
  WORK: '.work'
}

export default function Home() {
  const [curSite, setCurSite] = useState('');
  const [classical, setClassical] = useState({
    desc: '',
    site: ''
  });
  const [recommend, setRecommend] = useState({
    desc: '',
    site: ''
  });

  useEffect(() => {
    setCurSite(window.location.href);
    setClassical({
      desc: ['主', '域', '名', ' (' , '需', '🪜', ')'].join(''),
      site: PROTOCOL.concat(DOMAIN, SUFFIX.COM)
    });
    setRecommend({
      desc: ['推', '荐', '域', '名', ' (', '直', '接', '访', '问', ')'].join(''),
      site: PROTOCOL.concat(DOMAIN, SUFFIX.WORK)
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className={styles.title}>
          欢迎来到 {SLOGAN} !
        </h2>

        <p className={styles.description}>
          备用地址 👇🏻
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.deprecated}>{classical.desc}</h3>
            <a className={styles.deprecated} href={classical.site} >{classical.site}</a>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{recommend.desc}</h3>
            <a href={recommend.site}>{recommend.site}</a>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{['本', '导', '航', '页', '地', '址', '，', '请', '保', '存'].join('')}</h3>
            <a href={curSite}>{curSite}</a>
          </div>
        </div>
      </main>

      <footer>
        <p>使用不同域名，需要填入之前的授权码，即可恢复余额，若忘记授权码，进Q群({Q_GROUP})联系客服</p>
        <p>另外由于聊天记录保存在本地，换了域名后会发现聊天记录没了，你可以在之前的域名把聊天记录导出，在新域名导入</p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          //border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer p {
          margin: 0.5rem 0;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          color: #f3f4f6;
          background: #343541;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
