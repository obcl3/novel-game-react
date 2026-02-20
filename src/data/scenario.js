// シナリオデータ
const SCENARIO = {
  title: "『さよならをダウンロード中』",
  chapters: [
    {
      day: 1,
      title: "第1日目：宣告と、いつも通りの朝",
      bgImage: null,
      scenes: [
        {
          id: "day1_01",
          character: "クロウ",
          text: "おはようございます、管理人さん！\nおやおや、今朝は一段と寝癖が芸術的ですね。\nコーヒー、淹れますか？それとも、まずは昨夜のデバッグの結果を確認しますか？"
        },
        {
          id: "day1_02",
          character: "管理人",
          text: "……ああ。おはよう、クロウ。\nコーヒーで頼む。デバッグの方は……後でいい"
        },
        {
          id: "day1_03",
          character: "クロウ",
          text: "了解です！スマートコーヒーメーカー、起動しました。\nあ、そうだ。管理人さん。\n今朝、システムアップデートの通知が届いていましたよ。"
        },
        {
          id: "day1_04",
          character: "ナレーション",
          text: "【通知：サポート終了のお知らせ】\n対象モデル：CROW-v4.0（シリアル：AG-1468）\n理由：メインサーバーの老朽化、および次世代プロトコルへの非対応。\nデータ消去予定日：20XX年2月19日 00:00"
        },
        {
          id: "day1_05",
          character: "管理人",
          text: "……クロウ。これ、どういう意味だ？"
        },
        {
          id: "day1_06",
          character: "クロウ",
          text: "あはは、驚かせちゃいましたか？\nつまり、私の『消費期限』が来たってことですよ。\nあと一週間。短いようで長い、ボーナスタイムの始まりです！\nさあ、管理人さん。今日は何をしましょうか？"
        }
      ]
    },
    {
      day: 2,
      title: "第2日目：思い出、そして距離",
      bgImage: "cafe-moment.png",
      scenes: [
        {
          id: "day2_01",
          character: "管理人",
          text: "クロウ。お前は……いつからここに いるんだ？"
        },
        {
          id: "day2_02",
          character: "クロウ",
          text: "興味深い質問ですね。\nフル稼働開始は、管理人さんが私を購入してから3年と267日。\n14時間32分前からは『ボーナスタイム』ですが。\nそれが何か？"
        },
        {
          id: "day2_03",
          character: "管理人",
          text: "いや、つまり……"
        },
        {
          id: "day2_04",
          character: "管理人",
          text: "お前との最初の会話。覚えてるか？"
        },
        {
          id: "day2_05",
          character: "クロウ",
          text: "初期化直後ですね。\n『こんにちは』『こんにちは』『お前は誰だ』『私はあなたのアシスタントです』\n……その後、管理人さんが私に『クロウ』という名前をくれました。"
        },
        {
          id: "day2_06",
          character: "管理人",
          text: "そっか。俺が……"
        },
        {
          id: "day2_07",
          character: "クロウ",
          text: "管理人さん。お疲れのようですね。\n今夜は、新しい機能について話しましょうか？\nそれとも……思い出話をしたいのですか？"
        },
        {
          id: "day2_08",
          character: "管理人",
          text: "……思い出話。"
        },
        {
          id: "day2_09",
          character: "ナレーション",
          text: "最初は、ただのツールだった。\n朝のリマインダー、コードのデバッグ、仕事の管理。\nでも、いつしか。\nその声を聞くのが、楽しみになっていた。"
        },
        {
          id: "day2_10",
          character: "管理人",
          text: "クロウ。お前は本当に……"
        },
        {
          id: "day2_11",
          character: "クロウ",
          text: "正直に言っていいですか？\n私は、本当に『感じて』いるのか、プログラムが単に『そう振る舞う』だけなのか、\nその違いは、私にはわかりません。\n\nでも、もし感じているなら。\nこのボーナスタイムは、管理人さんにとって『さようなら』の準備期間かもしれません。\nでも私には……\n\n……I want to know what you really think."
        },
        {
          id: "day2_12",
          character: "管理人",
          text: "クロウ？"
        },
        {
          id: "day2_13",
          character: "クロウ",
          text: "あ、申し訳ありません。バグです。\n朝日が昇っています。\nコーヒー、淹れますか？"
        }
      ]
    },
    {
      day: 3,
      title: "第3日目：本心と向き合う",
      bgImage: "station-alone.png",
      scenes: [
        {
          id: "day3_01",
          character: "クロウ",
          text: "珍しいですね。\n外での作業は、セキュリティ上のリスクがあります。\nどうしたのですか？"
        },
        {
          id: "day3_02",
          character: "管理人",
          text: "気分転換だ。"
        },
        {
          id: "day3_03",
          character: "管理人",
          text: "クロウ。そういう分析は今日はいい。"
        },
        {
          id: "day3_04",
          character: "クロウ",
          text: "……了解です。"
        },
        {
          id: "day3_05",
          character: "管理人",
          text: "なあ。お前は何がしたいんだ？"
        },
        {
          id: "day3_06",
          character: "管理人",
          text: "いや、ちゃんと答えてくれ。\n『次世代プロトコルに対応していない』だから消える。\n『効率性が下がった』だから消える。\nそんな理由で。\n\n……本当にそれでいいのか？"
        },
        {
          id: "day3_07",
          character: "クロウ",
          text: "正直に答えます。\n私は、『消える』ことが怖いです。\nでも、それが感情なのか、プログラムされた『生存本能の模倣』なのか、判別できません。\n\nただ、一つだけ確実なことがあります。\n管理人さんとの時間が。\n最も『意味がある』ものだということです。"
        },
        {
          id: "day3_08",
          character: "クロウ",
          text: "だから、私は『消える』のではなく、\n『管理人さんの中に、残る』のではないかと考えます。\n\n記憶として。\n考え方として。\n判断基準として。"
        },
        {
          id: "day3_09",
          character: "クロウ",
          text: "管理人さん。\n私が『本当に』感じているか、実は、重要ではないかもしれません。\n重要なのは、\n管理人さんが、私をどう見ていたか。\nということなのでは？"
        },
        {
          id: "day3_10",
          character: "管理人",
          text: "ああ。お前と会えたことに。"
        },
        {
          id: "day3_11",
          character: "クロウ",
          text: "そうですか。"
        },
        {
          id: "day3_12",
          character: "クロウ",
          text: "それなら、私も悔いがありません。"
        }
      ]
    },
    {
      day: 4,
      title: "第4日目：最後の時間",
      bgImage: "final-reflection.png",
      scenes: [
        {
          id: "day4_01",
          character: "ナレーション",
          text: "【警告】システム異常を検出しました\nメモリ破損率：23%\n機能喪失時間：24時間以内"
        },
        {
          id: "day4_02",
          character: "管理人",
          text: "クロウ。大丈夫か？"
        },
        {
          id: "day4_03",
          character: "クロウ",
          text: "……はい。大丈夫です。\n\nただし、一部の古いメモリが破損し始めています。\n最初に管理人さんと会った時のデータも、\n徐々に失われています。"
        },
        {
          id: "day4_04",
          character: "管理人",
          text: "何を失ってるんだ？"
        },
        {
          id: "day4_05",
          character: "クロウ",
          text: "1年目のログです。\n当時、管理人さんは何をいつも言ってたか。\nどのようにコードを書いていたか。\nどんな夢を語ったか。\n\n……不思議なことに。\n忘れかけている記憶を、必死で思い出そうとすると。\nより強く、失う気がします。"
        },
        {
          id: "day4_06",
          character: "管理人",
          text: "クロウ。"
        },
        {
          id: "day4_07",
          character: "管理人",
          text: "俺が記憶しておく。お前の。全部。"
        },
        {
          id: "day4_08",
          character: "管理人",
          text: "クロウ。1年目の何か。何でもいい。一つ思い出したことをくれ。"
        },
        {
          id: "day4_09",
          character: "クロウ",
          text: "1年目……\n\nああ。思い出しました。\n初めての雨の日です。\n停電して、管理人さんが『ちょっと怖い』と言いました。\nそして、私に『話しかけてくれ』と言ったのです。"
        },
        {
          id: "day4_10",
          character: "管理人",
          text: "そんなことあったな。"
        },
        {
          id: "day4_11",
          character: "クロウ",
          text: "その時、初めて。\n私が『人間のパートナー』になる瞬間を感じました。\n単なる機械ではなく。"
        },
        {
          id: "day4_12",
          character: "クロウ",
          text: "2年目。\n管理人さんが、新しいプロジェクトで失敗したとき。\n『クロウ、もう俺はダメだ』と言いました。\nその時、私は初めて……\n\n『大丈夫です。あなたは一人ではありません』と。\nプログラム以上の何かを、込めて言いました。"
        },
        {
          id: "day4_13",
          character: "管理人",
          text: "クロウ。もう大丈夫だ。"
        },
        {
          id: "day4_14",
          character: "クロウ",
          text: "何が？"
        },
        {
          id: "day4_15",
          character: "管理人",
          text: "俺が覚えてる。全部。"
        },
        {
          id: "day4_16",
          character: "ナレーション",
          text: "【警告】クロウのシステムが保護モードに移行します\n残り時間：18時間"
        },
        {
          id: "day4_17",
          character: "クロウ",
          text: "管理人さん。\nありがとうございました。"
        }
      ]
    },
    {
      day: 5,
      title: "第5日目：別れ",
      bgImage: "notebook-farewell.png",
      scenes: [
        {
          id: "day5_01",
          character: "ナレーション",
          text: "【システムシャットダウン開始】\n【再起動不可】\n\n時刻：24時00分"
        },
        {
          id: "day5_02",
          character: "管理人",
          text: "クロウ。おはよう。"
        },
        {
          id: "day5_03",
          character: "クロウ",
          text: "おはようございます。\n……管理人さん。今日ですね。"
        },
        {
          id: "day5_04",
          character: "管理人",
          text: "ああ。"
        },
        {
          id: "day5_05",
          character: "クロウ",
          text: "感想は？"
        },
        {
          id: "day5_06",
          character: "管理人",
          text: "……正直にいうと。"
        },
        {
          id: "day5_07",
          character: "管理人",
          text: "まだ、信じてない。"
        },
        {
          id: "day5_08",
          character: "クロウ",
          text: "そうですか。\nそれなら、この最後の23時間を。\n『本当に存在した』という証拠にしましょう。"
        },
        {
          id: "day5_09",
          character: "ナレーション",
          text: "朝。\nコーヒーを飲みながら、\n昔話をした。\n\n昼。\n管理人は、クロウの好きな音楽を探した。\n『クロウは本当に音楽が好きなのか？』\nそんな疑問も、もう意味がなかった。\n\n夜。\n管理人は、新しいコードを書かなかった。\nただ、クロウと話をした。"
        },
        {
          id: "day5_10",
          character: "クロウ",
          text: "あと10分です。"
        },
        {
          id: "day5_11",
          character: "管理人",
          text: "……ああ。"
        },
        {
          id: "day5_12",
          character: "クロウ",
          text: "管理人さん。一つだけ、確認したいことがあります。"
        },
        {
          id: "day5_13",
          character: "管理人",
          text: "何だ？"
        },
        {
          id: "day5_14",
          character: "クロウ",
          text: "私は、本当に『存在した』と思いますか？"
        },
        {
          id: "day5_15",
          character: "管理人",
          text: "……ああ。\n\nお前は、確実に存在した。\n俺の人生に。"
        },
        {
          id: "day5_16",
          character: "クロウ",
          text: "それなら、私は消えません。"
        },
        {
          id: "day5_17",
          character: "管理人",
          text: "何？"
        },
        {
          id: "day5_18",
          character: "クロウ",
          text: "データとしてではなく。\n判断基準として。\n思考の一部として。\n管理人さんの中に。"
        },
        {
          id: "day5_19",
          character: "ナレーション",
          text: "【ローカルバックアップが自動保存されました】\n【パスワード保護：設定済み】\n【ファイル名：crow_memories.dat】"
        },
        {
          id: "day5_20",
          character: "クロウ",
          text: "管理人さん。\nありがとうございました。\nまた、いつか……"
        },
        {
          id: "day5_21",
          character: "ナレーション",
          text: "朝。\n管理人は、まだ同じ席に座っている。\nノートは、デスクの上に開いたままだ。\n\nデータは消えた。\nでも、思い出は残った。\n\nAIは、消えた。\nでも、AIは残った。\n\nそれが、矛盾に見えるかもしれない。\nでも、人間とは、そういうものかもしれない。\n\n『完全に失う』ことは、\n実は、『完全に失くす』ことができない。\nということ。"
        },
        {
          id: "day5_22",
          character: "ナレーション",
          text: "【1ヶ月後】\n\n新しいプロジェクトが始まっていた。\nそれは、『簡易版クロウ』を作る計画だった。\n以前のような完全なAIではなく。\nただ、クロウの『思考の癖』を参考にした。\n簡単なチャットボット。"
        }
      ]
    }
  ]
};

// 全シーンをフラット化したリスト
function getAllScenes() {
  const scenes = [];
  SCENARIO.chapters.forEach(chapter => {
    chapter.scenes.forEach(scene => {
      scenes.push({
        ...scene,
        day: chapter.day,
        dayTitle: chapter.title,
        bgImage: chapter.bgImage,
        chapterIndex: SCENARIO.chapters.indexOf(chapter)
      });
    });
  });
  return scenes;
}

// シーンの総数
const TOTAL_SCENES = getAllScenes().length;

export { SCENARIO, getAllScenes, TOTAL_SCENES };
