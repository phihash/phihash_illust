import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Character from '../components/character';
import Movie from '../components/movie';
import Carrot from '../public/images/carrot.png'
import Mouse from '../public/images/mouse.png'
import Bird from '../public/images/bird.png'
import Rabbit from '../public/images/rabbit.png'
import Human from '../public/images/human.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>phihash illust</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

    <main>

    <Character desc={"「!?」型の耳と体のクリームイエローが特徴のうさぎのゆるキャラなんでちゃん。愛くるしい表情とやわらかな雰囲気で人々を癒し、笑顔を広げたい!!"} oneline={`うさぎのキャラクター`}  name={"なんでちゃん"} src={Rabbit}></Character>
    <Character desc={"丸い体形と大きな耳が特徴のかわいらしいハムスター。親しみやすい笑顔で人々に元気を届け、地域を盛り上げる。子供から大人まで楽しませる愛されキャラ。"} oneline={"ハムスター"} name={"しろはむ"} src={Mouse}></Character>
    <Character desc={"スキンヘッドとひげが特徴のユーモラスなおじさん。人情味あふれるキャラで、年配者から若者まで幅広く人気。笑顔で和ませる温かい存在。"} oneline={"みんなをはげましたい"}  name={"はげます"} src={Human}></Character>
    <Character desc={"小さな体と黄色いふわふわの羽毛が魅力のひよこ。元気いっぱいの姿で周りを明るくし、幸せを運ぶシンボル。みんなの心をつかむ無邪気な存在。"} oneline={"うるうるした瞳をもつひよこ"}  name={"ぴよ"} src={Bird}></Character>
    <Character desc={"にんじんの形をしたオリジナルな妖精。健康的なイメージで人々に元気を与え、野菜の魅力を伝える。色鮮やかで目を引く個性的なキャラクター。"} oneline={"明るいにんじん"}  name={"にんじん"} src={Carrot}></Character>
    <Movie></Movie>

    </main>


    </div>
  )
}
