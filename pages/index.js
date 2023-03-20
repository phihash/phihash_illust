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

    <Character desc={"「!?」の形をした耳とカスタードイエローがチャームポイントの愛らしいうさぎのゆるキャラなんでちゃん。その可愛らしい表情とやわらかい雰囲気で、みんなを癒してくれます。好きな食べ物はもちろん、にんじん！子供たちから大人まで幅広い年齢層に親しまれており、お祭りやイベントでよく目立つ存在です。地域の魅力を伝えるアンバサダーとして活躍し、観光客や地元住民に幸せなひと時を運ぶ役割も担っています。"} oneline={`うさぎのキャラクター`}  name={"なんでちゃん"} src={Rabbit}></Character>
    <Character desc={"丸い体形と大きな耳、細長い尾が特徴のかわいらしいネズミのゆるキャラ。親しみやすい笑顔とちょっとおちゃめな態度で、子供から大人まで幅広く人気を集めています。地域のイベントやお祭りにも参加し、元気と笑顔を届ける役割を果たしています。賢くて機敏なネズミの特性を活かした、クイズやゲームなどの企画が人気で、参加者と一緒に楽しむ姿がとても愛されています。"} oneline={"ハムスター"} name={"しろはむ"} src={Mouse}></Character>
    <Character desc={"スキンヘッドとひげが特徴の温かみのあるおじさんキャラ。その独特の見た目とユーモア溢れる性格で、年配者から若者まで幅広い世代に人気を集める。心優しい性格で、家族や友人との絆を大切にするメッセージを発信している。また、失敗を恐れず、笑顔で前向きに取り組む姿勢が、多くの人々に勇気や元気を与えている。地域のイベントやお祭りにも積極的に参加し、みんなを笑顔にしてくれる存在として親しまれている。"} oneline={"みんなをはげましたい"}  name={"はげます"} src={Human}></Character>
    <Character desc={"小さな体と黄色いふわふわの羽毛が魅力のひよこゆるキャラ。丸い目とぴょんぴょん跳ねる姿が子供たちに大人気で、愛くるしい表情でみんなの心をつかみます。地域のイベントやお祭りでは、元気いっぱいの姿で周りを明るくし、幸せを運ぶシンボルとして活躍しています。また、ひよこが孵化する春を象徴し、新しい生命や希望を感じさせるキャラクターでもあります。"} oneline={"うるうるした瞳をもつひよこ"}  name={"ぴよ"} src={Bird}></Character>
    <Character desc={"にんじんの形をしたユニークで愛らしい妖精キャラクター。オレンジ色の鮮やかなボディに、キュートな表情と緑の葉っぱがアクセントとなっている。健康を意識したライフスタイルを提案し、野菜の魅力を子供たちにも分かりやすく伝えることを目指す。農業や地域の活性化をサポートするために、イベントやキャンペーンにも積極的に参加。その個性的なデザインと、明るく元気なキャラクター性が、多くの人々を魅了している。"} oneline={"明るいにんじん"}  name={"にんじん"} src={Carrot}></Character>
    <Movie></Movie>

    </main>


    </div>
  )
}
