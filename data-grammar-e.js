(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData) {
    return;
  }

  appData.grammarItems = appData.grammarItems || [];

  appData.grammarItems.push(
    {
      id: "eg-001",
      level: "E",
      title: "基本語順",
      pattern: "主語 + 動詞 + 目的語",
      meaning: "誰が何をするかを、語順で表す。",
      explanation: "インドネシア語は日本語の助詞に頼らず、語順で意味を作る。",
      examples: [
        ["Saya makan nasi.", "私はご飯を食べます。"],
        ["Dia membaca buku.", "彼は本を読みます。"]
      ],
      practice: {
        prompt: "「私は水を飲みます」を作る。",
        answer: "Saya minum air."
      }
    },
    {
      id: "eg-002",
      level: "E",
      title: "名詞文",
      pattern: "A + B",
      meaning: "AはBです。",
      explanation: "基本的な会話では、日本語の「です」に当たる語を置かないことが多い。",
      examples: [
        ["Saya mahasiswa.", "私は大学生です。"],
        ["Dia guru.", "彼女は先生です。"]
      ],
      practice: {
        prompt: "「私は日本人です」を作る。",
        answer: "Saya orang Jepang."
      }
    },
    {
      id: "eg-003",
      level: "E",
      title: "adalah",
      pattern: "A + adalah + B",
      meaning: "AはBである。",
      explanation: "定義や説明をはっきり言うときに使う。会話では省略されることも多い。",
      examples: [
        ["Jakarta adalah ibu kota Indonesia.", "ジャカルタはインドネシアの首都です。"],
        ["Ini adalah kamus saya.", "これは私の辞書です。"]
      ],
      practice: {
        prompt: "「これは学校です」を adalah を使って作る。",
        answer: "Ini adalah sekolah."
      }
    },
    {
      id: "eg-004",
      level: "E",
      title: "ini / itu",
      pattern: "ini / itu + 名詞、名詞 + ini / itu",
      meaning: "これ、この / それ、その",
      explanation: "単独なら「これ・それ」、名詞の後ろなら「この〜・その〜」。",
      examples: [
        ["Ini buku saya.", "これは私の本です。"],
        ["Buku ini mahal.", "この本は高いです。"]
      ],
      practice: {
        prompt: "「このかばんは大きいです」を作る。",
        answer: "Tas ini besar."
      }
    },
    {
      id: "eg-005",
      level: "E",
      title: "所有",
      pattern: "名詞 + saya / Anda / dia",
      meaning: "私の〜、あなたの〜、彼/彼女の〜",
      explanation: "所有者は名詞の後ろに置く。",
      examples: [
        ["Rumah saya dekat.", "私の家は近いです。"],
        ["Nama Anda siapa?", "あなたの名前は何ですか。"]
      ],
      practice: {
        prompt: "「私の先生」を作る。",
        answer: "guru saya"
      }
    },
    {
      id: "eg-006",
      level: "E",
      title: "形容詞の位置",
      pattern: "名詞 + 形容詞",
      meaning: "大きい家、新しい靴",
      explanation: "形容詞は名詞の後ろに置くのが基本。",
      examples: [
        ["rumah besar", "大きい家"],
        ["sepatu baru", "新しい靴"]
      ],
      practice: {
        prompt: "「小さい部屋」を作る。",
        answer: "kamar kecil"
      }
    },
    {
      id: "eg-007",
      level: "E",
      title: "tidak",
      pattern: "tidak + 動詞 / 形容詞",
      meaning: "〜しない、〜ではない",
      explanation: "動詞や形容詞を否定する。",
      examples: [
        ["Saya tidak makan.", "私は食べません。"],
        ["Kamar ini tidak besar.", "この部屋は大きくありません。"]
      ],
      practice: {
        prompt: "「私は行きません」を作る。",
        answer: "Saya tidak pergi."
      }
    },
    {
      id: "eg-008",
      level: "E",
      title: "bukan",
      pattern: "bukan + 名詞",
      meaning: "〜ではない",
      explanation: "名詞を否定するときは bukan を使う。",
      examples: [
        ["Saya bukan guru.", "私は先生ではありません。"],
        ["Ini bukan tas saya.", "これは私のかばんではありません。"]
      ],
      practice: {
        prompt: "「これは本ではありません」を作る。",
        answer: "Ini bukan buku."
      }
    },
    {
      id: "eg-009",
      level: "E",
      title: "sudah / belum",
      pattern: "sudah + 動詞 / belum + 動詞",
      meaning: "もう〜した / まだ〜していない",
      explanation: "動作が済んだかどうかを表す。",
      examples: [
        ["Saya sudah makan.", "私はもう食べました。"],
        ["Dia belum datang.", "彼はまだ来ていません。"]
      ],
      practice: {
        prompt: "「私はまだ勉強していません」を作る。",
        answer: "Saya belum belajar."
      }
    },
    {
      id: "eg-010",
      level: "E",
      title: "疑問文",
      pattern: "Apakah + 文? / 文?",
      meaning: "〜ですか、〜しますか",
      explanation: "apakah を文頭に置くと丁寧で明確な疑問文になる。会話では語尾の上げ調子だけでもよい。",
      examples: [
        ["Apakah Anda orang Jepang?", "あなたは日本人ですか。"],
        ["Anda suka kopi?", "あなたはコーヒーが好きですか。"]
      ],
      practice: {
        prompt: "「あなたは学生ですか」を作る。",
        answer: "Apakah Anda mahasiswa?"
      }
    },
    {
      id: "eg-011",
      level: "E",
      title: "siapa",
      pattern: "siapa",
      meaning: "誰",
      explanation: "人の名前や人物を聞く。",
      examples: [
        ["Siapa nama Anda?", "あなたの名前は何ですか。"],
        ["Dia siapa?", "彼は誰ですか。"]
      ],
      practice: {
        prompt: "「あの人は誰ですか」を作る。",
        answer: "Orang itu siapa?"
      }
    },
    {
      id: "eg-012",
      level: "E",
      title: "apa",
      pattern: "apa",
      meaning: "何",
      explanation: "物や内容を聞く。",
      examples: [
        ["Ini apa?", "これは何ですか。"],
        ["Anda makan apa?", "あなたは何を食べますか。"]
      ],
      practice: {
        prompt: "「これは何ですか」を作る。",
        answer: "Ini apa?"
      }
    },
    {
      id: "eg-013",
      level: "E",
      title: "di mana / ke mana / dari mana",
      pattern: "di mana / ke mana / dari mana",
      meaning: "どこで / どこへ / どこから",
      explanation: "場所、方向、出発点を区別する。",
      examples: [
        ["Anda tinggal di mana?", "あなたはどこに住んでいますか。"],
        ["Anda mau ke mana?", "あなたはどこへ行きたいですか。"],
        ["Anda dari mana?", "あなたはどこから来ましたか。"]
      ],
      practice: {
        prompt: "「あなたはどこに住んでいますか」を作る。",
        answer: "Anda tinggal di mana?"
      }
    },
    {
      id: "eg-014",
      level: "E",
      title: "kapan",
      pattern: "kapan",
      meaning: "いつ",
      explanation: "時間や予定を聞く。",
      examples: [
        ["Kapan Anda pergi?", "あなたはいつ行きますか。"],
        ["Kapan kelas mulai?", "授業はいつ始まりますか。"]
      ],
      practice: {
        prompt: "「あなたはいつ来ますか」を作る。",
        answer: "Kapan Anda datang?"
      }
    },
    {
      id: "eg-015",
      level: "E",
      title: "berapa",
      pattern: "berapa",
      meaning: "いくつ、いくら",
      explanation: "数、値段、時間を聞く。",
      examples: [
        ["Berapa harga ini?", "これはいくらですか。"],
        ["Jam berapa sekarang?", "今何時ですか。"]
      ],
      practice: {
        prompt: "「この本はいくらですか」を作る。",
        answer: "Berapa harga buku ini?"
      }
    },
    {
      id: "eg-016",
      level: "E",
      title: "bagaimana",
      pattern: "bagaimana",
      meaning: "どのように、どう",
      explanation: "状態や方法を聞く。",
      examples: [
        ["Bagaimana kabar Anda?", "お元気ですか。"],
        ["Bagaimana cara pergi ke stasiun?", "駅への行き方はどうですか。"]
      ],
      practice: {
        prompt: "「お元気ですか」を作る。",
        answer: "Bagaimana kabar Anda?"
      }
    },
    {
      id: "eg-017",
      level: "E",
      title: "di / ke / dari",
      pattern: "di + 場所 / ke + 場所 / dari + 場所",
      meaning: "〜で・〜に / 〜へ / 〜から",
      explanation: "場所にいる、向かう、出発するを区別する。",
      examples: [
        ["Saya belajar di rumah.", "私は家で勉強します。"],
        ["Saya pergi ke sekolah.", "私は学校へ行きます。"],
        ["Saya dari Jepang.", "私は日本から来ました。"]
      ],
      practice: {
        prompt: "「私は店へ行きます」を作る。",
        answer: "Saya pergi ke toko."
      }
    },
    {
      id: "eg-018",
      level: "E",
      title: "dengan",
      pattern: "dengan + 名詞",
      meaning: "〜と、〜で",
      explanation: "一緒にいる相手や手段を表す。",
      examples: [
        ["Saya pergi dengan teman.", "私は友だちと行きます。"],
        ["Saya makan dengan sendok.", "私はスプーンで食べます。"]
      ],
      practice: {
        prompt: "「私は家族と行きます」を作る。",
        answer: "Saya pergi dengan keluarga."
      }
    },
    {
      id: "eg-019",
      level: "E",
      title: "untuk",
      pattern: "untuk + 名詞 / 動詞",
      meaning: "〜のために、〜用の",
      explanation: "目的や相手を表す。",
      examples: [
        ["Ini hadiah untuk ibu.", "これは母へのプレゼントです。"],
        ["Saya belajar untuk ujian.", "私は試験のために勉強します。"]
      ],
      practice: {
        prompt: "「これはあなたへの本です」を作る。",
        answer: "Ini buku untuk Anda."
      }
    },
    {
      id: "eg-020",
      level: "E",
      title: "ada",
      pattern: "ada + 名詞 / 名詞 + ada di + 場所",
      meaning: "ある、いる",
      explanation: "存在を表す。場所を言うときは di を使う。",
      examples: [
        ["Ada bank di sini.", "ここに銀行があります。"],
        ["Buku saya ada di tas.", "私の本はかばんの中にあります。"]
      ],
      practice: {
        prompt: "「ここにトイレがあります」を作る。",
        answer: "Ada toilet di sini."
      }
    },
    {
      id: "eg-021",
      level: "E",
      title: "punya",
      pattern: "punya + 名詞",
      meaning: "〜を持っている",
      explanation: "所有を会話で言うときによく使う。",
      examples: [
        ["Saya punya mobil.", "私は車を持っています。"],
        ["Dia punya kamus.", "彼女は辞書を持っています。"]
      ],
      practice: {
        prompt: "「私はかばんを持っています」を作る。",
        answer: "Saya punya tas."
      }
    },
    {
      id: "eg-022",
      level: "E",
      title: "mau / ingin",
      pattern: "mau / ingin + 動詞",
      meaning: "〜したい",
      explanation: "mau は会話でよく使い、ingin は少し丁寧。",
      examples: [
        ["Saya mau minum teh.", "私はお茶を飲みたいです。"],
        ["Dia ingin belajar.", "彼女は勉強したいです。"]
      ],
      practice: {
        prompt: "「私は食べたいです」を作る。",
        answer: "Saya mau makan."
      }
    },
    {
      id: "eg-023",
      level: "E",
      title: "bisa / dapat",
      pattern: "bisa / dapat + 動詞",
      meaning: "〜できる",
      explanation: "能力や可能性を表す。bisa は会話でよく使う。",
      examples: [
        ["Saya bisa berenang.", "私は泳げます。"],
        ["Anda dapat masuk.", "あなたは入ることができます。"]
      ],
      practice: {
        prompt: "「私はインドネシア語を話せます」を作る。",
        answer: "Saya bisa berbicara bahasa Indonesia."
      }
    },
    {
      id: "eg-024",
      level: "E",
      title: "boleh",
      pattern: "boleh + 動詞",
      meaning: "〜してもよい",
      explanation: "許可を表す。質問にすると「〜してもいいですか」。",
      examples: [
        ["Saya boleh masuk?", "入ってもいいですか。"],
        ["Anda boleh duduk di sini.", "あなたはここに座ってもいいです。"]
      ],
      practice: {
        prompt: "「写真を撮ってもいいですか」を作る。",
        answer: "Boleh saya ambil foto?"
      }
    },
    {
      id: "eg-025",
      level: "E",
      title: "harus / perlu",
      pattern: "harus / perlu + 動詞",
      meaning: "〜しなければならない、〜する必要がある",
      explanation: "harus は義務、perlu は必要性を表す。",
      examples: [
        ["Saya harus pergi sekarang.", "私は今行かなければなりません。"],
        ["Saya perlu belajar.", "私は勉強する必要があります。"]
      ],
      practice: {
        prompt: "「私は水を飲む必要があります」を作る。",
        answer: "Saya perlu minum air."
      }
    },
    {
      id: "eg-026",
      level: "E",
      title: "sedang",
      pattern: "sedang + 動詞",
      meaning: "〜しているところ",
      explanation: "今進行中の動作を表す。",
      examples: [
        ["Saya sedang makan.", "私は食べているところです。"],
        ["Dia sedang belajar.", "彼女は勉強しています。"]
      ],
      practice: {
        prompt: "「私は本を読んでいます」を作る。",
        answer: "Saya sedang membaca buku."
      }
    },
    {
      id: "eg-027",
      level: "E",
      title: "akan",
      pattern: "akan + 動詞",
      meaning: "〜するつもり、〜だろう",
      explanation: "未来の予定や予測を表す。",
      examples: [
        ["Saya akan pergi besok.", "私は明日行くつもりです。"],
        ["Dia akan datang malam ini.", "彼は今夜来るでしょう。"]
      ],
      practice: {
        prompt: "「私は明日勉強します」を作る。",
        answer: "Saya akan belajar besok."
      }
    },
    {
      id: "eg-028",
      level: "E",
      title: "dan / atau",
      pattern: "A dan B / A atau B",
      meaning: "AとB / AまたはB",
      explanation: "語や文をつなぐ基本接続詞。",
      examples: [
        ["Saya makan roti dan telur.", "私はパンと卵を食べます。"],
        ["Anda mau kopi atau teh?", "コーヒーかお茶が欲しいですか。"]
      ],
      practice: {
        prompt: "「私はご飯と魚を食べます」を作る。",
        answer: "Saya makan nasi dan ikan."
      }
    },
    {
      id: "eg-029",
      level: "E",
      title: "tetapi",
      pattern: "文 + tetapi + 文",
      meaning: "しかし、けれども",
      explanation: "反対の内容をつなぐ。",
      examples: [
        ["Saya suka kopi, tetapi tidak suka susu.", "私はコーヒーが好きですが、牛乳は好きではありません。"],
        ["Rumah ini kecil, tetapi bersih.", "この家は小さいですが、清潔です。"]
      ],
      practice: {
        prompt: "「私は行きたいですが、忙しいです」を作る。",
        answer: "Saya mau pergi, tetapi sibuk."
      }
    },
    {
      id: "eg-030",
      level: "E",
      title: "karena",
      pattern: "文 + karena + 理由",
      meaning: "〜なので、なぜなら",
      explanation: "理由を表す。",
      examples: [
        ["Saya tidur karena lelah.", "私は疲れたので寝ます。"],
        ["Dia tidak datang karena sakit.", "彼は病気なので来ません。"]
      ],
      practice: {
        prompt: "「私は暑いので水を飲みます」を作る。",
        answer: "Saya minum air karena panas."
      }
    },
    {
      id: "eg-031",
      level: "E",
      title: "kalau",
      pattern: "kalau + 条件",
      meaning: "もし〜なら",
      explanation: "条件を表す。",
      examples: [
        ["Kalau hujan, saya di rumah.", "もし雨なら、私は家にいます。"],
        ["Kalau ada waktu, saya belajar.", "時間があれば、私は勉強します。"]
      ],
      practice: {
        prompt: "「もし暑ければ、私は水を飲みます」を作る。",
        answer: "Kalau panas, saya minum air."
      }
    },
    {
      id: "eg-032",
      level: "E",
      title: "silakan / tolong",
      pattern: "silakan + 動詞 / tolong + 動詞",
      meaning: "どうぞ〜してください / 〜してください",
      explanation: "silakan は促し、tolong は依頼で使う。",
      examples: [
        ["Silakan masuk.", "どうぞ入ってください。"],
        ["Tolong buka pintu.", "ドアを開けてください。"]
      ],
      practice: {
        prompt: "「どうぞ座ってください」を作る。",
        answer: "Silakan duduk."
      }
    },
    {
      id: "eg-033",
      level: "E",
      title: "jangan",
      pattern: "jangan + 動詞",
      meaning: "〜しないでください",
      explanation: "禁止や注意を表す。",
      examples: [
        ["Jangan masuk.", "入らないでください。"],
        ["Jangan lupa.", "忘れないでください。"]
      ],
      practice: {
        prompt: "「ここで食べないでください」を作る。",
        answer: "Jangan makan di sini."
      }
    },
    {
      id: "eg-034",
      level: "E",
      title: "複数",
      pattern: "名詞の重複 / 数 + 名詞",
      meaning: "複数のもの",
      explanation: "複数は文脈で分かることも多い。強調したいときは重複を使う。",
      examples: [
        ["anak-anak", "子どもたち"],
        ["Saya punya dua buku.", "私は本を2冊持っています。"]
      ],
      practice: {
        prompt: "「子どもたち」を作る。",
        answer: "anak-anak"
      }
    },
    {
      id: "eg-035",
      level: "E",
      title: "paling",
      pattern: "paling + 形容詞",
      meaning: "最も〜、一番〜",
      explanation: "簡単な最上級を作る。",
      examples: [
        ["Mangga paling enak.", "マンゴーが一番おいしいです。"],
        ["Dia paling tinggi.", "彼が一番背が高いです。"]
      ],
      practice: {
        prompt: "「この部屋が一番大きいです」を作る。",
        answer: "Kamar ini paling besar."
      }
    },
    {
      id: "eg-036",
      level: "E",
      title: "ber- 動詞",
      pattern: "ber- + 語幹",
      meaning: "〜する、〜を持つ状態になる",
      explanation: "ber- は自動詞を作ることが多い。E級ではよく出る形を丸ごと覚える。",
      examples: [
        ["Saya belajar.", "私は勉強します。"],
        ["Dia bekerja di kantor.", "彼は会社で働きます。"]
      ],
      practice: {
        prompt: "「私は先生と話します」を作る。",
        answer: "Saya berbicara dengan guru."
      }
    }
  );
})();
