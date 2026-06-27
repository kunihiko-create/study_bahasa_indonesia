(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData) {
    return;
  }

  appData.grammarItems = appData.grammarItems || [];

  appData.grammarItems.push(
    {
      id: "dg-001",
      level: "D",
      title: "meN- 動詞",
      pattern: "meN- + 語幹",
      meaning: "〜する",
      explanation: "書きことばや少し丁寧な文では、他動詞に meN- が付くことが多い。",
      examples: [
        ["Saya membeli tiket.", "私はチケットを買います。"],
        ["Dia membaca koran.", "彼は新聞を読みます。"]
      ],
      practice: {
        prompt: "「私は用紙に記入します」を作る。",
        answer: "Saya mengisi formulir."
      }
    },
    {
      id: "dg-002",
      level: "D",
      title: "meN- の音変化",
      pattern: "pakai → memakai / tulis → menulis / kirim → mengirim",
      meaning: "語頭の音に合わせて形が変わる。",
      explanation: "p, t, k, s で始まる語幹は、接頭辞が付くと語頭音が落ちることが多い。",
      examples: [
        ["Saya memakai sepatu baru.", "私は新しい靴を履きます。"],
        ["Dia menulis alamat.", "彼は住所を書きます。"]
      ],
      practice: {
        prompt: "kirim に meN- を付けた形を書く。",
        answer: "mengirim"
      }
    },
    {
      id: "dg-003",
      level: "D",
      title: "ber- 動詞",
      pattern: "ber- + 語幹",
      meaning: "〜する、〜を持つ状態である",
      explanation: "ber- は自動詞を作ることが多く、日常動作や状態でよく使う。",
      examples: [
        ["Saya bekerja di kantor.", "私は会社で働きます。"],
        ["Kami berbicara dengan guru.", "私たちは先生と話します。"]
      ],
      practice: {
        prompt: "「私は海で泳ぎます」を作る。",
        answer: "Saya berenang di laut."
      }
    },
    {
      id: "dg-004",
      level: "D",
      title: "ter- 状態",
      pattern: "ter- + 語幹",
      meaning: "〜されている、うっかり〜する、最も〜",
      explanation: "D級では、terbuka, tertutup, terlambat などの決まった形から覚える。",
      examples: [
        ["Pintu itu terbuka.", "そのドアは開いています。"],
        ["Saya terlambat ke sekolah.", "私は学校に遅れました。"]
      ],
      practice: {
        prompt: "「その店は閉まっています」を作る。",
        answer: "Toko itu tertutup."
      }
    },
    {
      id: "dg-005",
      level: "D",
      title: "di- 受動態",
      pattern: "di- + 語幹",
      meaning: "〜される",
      explanation: "動作を受けるものを主語にするときに使う。",
      examples: [
        ["Formulir itu diisi oleh siswa.", "その用紙は生徒によって記入されます。"],
        ["Buku ini dibaca oleh banyak orang.", "この本は多くの人に読まれます。"]
      ],
      practice: {
        prompt: "「そのチケットは買われました」を作る。",
        answer: "Tiket itu dibeli."
      }
    },
    {
      id: "dg-006",
      level: "D",
      title: "oleh",
      pattern: "受動文 + oleh + 人",
      meaning: "〜によって",
      explanation: "受動態で動作主を言いたいときに oleh を使う。",
      examples: [
        ["Surat itu ditulis oleh ibu.", "その手紙は母によって書かれました。"],
        ["Rumah itu dibeli oleh Pak Budi.", "その家はブディさんによって買われました。"]
      ],
      practice: {
        prompt: "「その本は先生によって読まれます」を作る。",
        answer: "Buku itu dibaca oleh guru."
      }
    },
    {
      id: "dg-007",
      level: "D",
      title: "-kan",
      pattern: "語幹 + -kan",
      meaning: "〜させる、〜してあげる、対象をはっきりさせる",
      explanation: "membukakan, menyiapkan, menjelaskan など、目的語を取る動詞でよく出る。",
      examples: [
        ["Tolong bukakan pintu.", "ドアを開けてください。"],
        ["Guru menjelaskan pelajaran.", "先生は授業内容を説明します。"]
      ],
      practice: {
        prompt: "「先生は文法を説明します」を作る。",
        answer: "Guru menjelaskan tata bahasa."
      }
    },
    {
      id: "dg-008",
      level: "D",
      title: "-i",
      pattern: "語幹 + -i",
      meaning: "場所・相手に働きかける",
      explanation: "menghubungi, mengunjungi, mengikuti など、対象に向かう意味を作る。",
      examples: [
        ["Saya menghubungi kantor.", "私は会社に連絡します。"],
        ["Kami mengunjungi museum.", "私たちは博物館を訪れます。"]
      ],
      practice: {
        prompt: "「私は授業に参加します」を作る。",
        answer: "Saya mengikuti kelas."
      }
    },
    {
      id: "dg-009",
      level: "D",
      title: "peN- 名詞",
      pattern: "peN- + 語幹",
      meaning: "〜する人、〜する道具",
      explanation: "動詞から人や道具を表す名詞を作る。",
      examples: [
        ["penjual", "売る人、販売者"],
        ["pembeli", "買う人、購入者"]
      ],
      practice: {
        prompt: "jual から「売る人」を作る。",
        answer: "penjual"
      }
    },
    {
      id: "dg-010",
      level: "D",
      title: "-an 名詞",
      pattern: "語幹 + -an",
      meaning: "結果、物、内容",
      explanation: "makanan, minuman, tulisan, kiriman など、具体的な物や結果を表す。",
      examples: [
        ["makanan", "食べ物"],
        ["tulisan", "文章、書いたもの"]
      ],
      practice: {
        prompt: "minum から「飲み物」を作る。",
        answer: "minuman"
      }
    },
    {
      id: "dg-011",
      level: "D",
      title: "ke-an 名詞",
      pattern: "ke- + 語幹 + -an",
      meaning: "状態、性質、抽象名詞",
      explanation: "kesehatan, keselamatan, kebutuhan など、状態や抽象的な意味を表す。",
      examples: [
        ["Kesehatan sangat penting.", "健康はとても重要です。"],
        ["Keselamatan penumpang dijaga.", "乗客の安全が守られます。"]
      ],
      practice: {
        prompt: "selamat から「安全」を作る。",
        answer: "keselamatan"
      }
    },
    {
      id: "dg-012",
      level: "D",
      title: "yang",
      pattern: "名詞 + yang + 説明",
      meaning: "〜する人、〜なもの",
      explanation: "名詞を後ろから説明する。読解で非常によく出る。",
      examples: [
        ["orang yang memakai baju merah", "赤い服を着ている人"],
        ["rumah yang dekat stasiun", "駅に近い家"]
      ],
      practice: {
        prompt: "「大きい家」を yang を使って作る。",
        answer: "rumah yang besar"
      }
    },
    {
      id: "dg-013",
      level: "D",
      title: "比較",
      pattern: "lebih + 形容詞 + daripada",
      meaning: "〜よりも…だ",
      explanation: "2つのものを比べるときに使う。",
      examples: [
        ["Kereta lebih cepat daripada bus.", "電車はバスより速いです。"],
        ["Kamar ini lebih besar daripada kamar itu.", "この部屋はその部屋より大きいです。"]
      ],
      practice: {
        prompt: "「この店はあの店より安いです」を作る。",
        answer: "Toko ini lebih murah daripada toko itu."
      }
    },
    {
      id: "dg-014",
      level: "D",
      title: "同じくらい",
      pattern: "sama + 形容詞 + dengan",
      meaning: "〜と同じくらい…だ",
      explanation: "差がないことを表す。",
      examples: [
        ["Kamar ini sama besar dengan kamar itu.", "この部屋はその部屋と同じくらい大きいです。"],
        ["Harga ini sama murah dengan harga itu.", "この値段はその値段と同じくらい安いです。"]
      ],
      practice: {
        prompt: "「私は彼と同じくらい忙しいです」を作る。",
        answer: "Saya sama sibuk dengan dia."
      }
    },
    {
      id: "dg-015",
      level: "D",
      title: "最上級",
      pattern: "paling + 形容詞",
      meaning: "一番〜、最も〜",
      explanation: "グループの中で一番であることを表す。",
      examples: [
        ["Dia paling tinggi di kelas.", "彼はクラスで一番背が高いです。"],
        ["Ini makanan paling enak.", "これは一番おいしい食べ物です。"]
      ],
      practice: {
        prompt: "「このホテルが一番高いです」を作る。",
        answer: "Hotel ini paling mahal."
      }
    },
    {
      id: "dg-016",
      level: "D",
      title: "程度",
      pattern: "sangat / cukup / terlalu + 形容詞",
      meaning: "とても / かなり・十分 / 〜すぎる",
      explanation: "形容詞の強さを調整する。",
      examples: [
        ["Kamar ini sangat bersih.", "この部屋はとても清潔です。"],
        ["Harga itu terlalu mahal.", "その値段は高すぎます。"]
      ],
      practice: {
        prompt: "「この問題は難しすぎます」を作る。",
        answer: "Masalah ini terlalu sulit."
      }
    },
    {
      id: "dg-017",
      level: "D",
      title: "pernah",
      pattern: "pernah + 動詞",
      meaning: "〜したことがある",
      explanation: "経験を表す。否定は tidak pernah や belum pernah。",
      examples: [
        ["Saya pernah pergi ke Bali.", "私はバリへ行ったことがあります。"],
        ["Dia belum pernah makan durian.", "彼はまだドリアンを食べたことがありません。"]
      ],
      practice: {
        prompt: "「私はインドネシアへ行ったことがあります」を作る。",
        answer: "Saya pernah pergi ke Indonesia."
      }
    },
    {
      id: "dg-018",
      level: "D",
      title: "masih",
      pattern: "masih + 動詞 / 形容詞",
      meaning: "まだ〜している、まだ〜だ",
      explanation: "状態や動作が続いていることを表す。",
      examples: [
        ["Saya masih belajar.", "私はまだ勉強しています。"],
        ["Toko itu masih buka.", "その店はまだ開いています。"]
      ],
      practice: {
        prompt: "「彼はまだ寝ています」を作る。",
        answer: "Dia masih tidur."
      }
    },
    {
      id: "dg-019",
      level: "D",
      title: "sedang / lagi",
      pattern: "sedang / lagi + 動詞",
      meaning: "〜しているところ",
      explanation: "lagi は会話でよく使う進行表現。",
      examples: [
        ["Saya sedang mengisi formulir.", "私は用紙に記入しているところです。"],
        ["Dia lagi makan.", "彼は食事中です。"]
      ],
      practice: {
        prompt: "「私はバスを待っています」を作る。",
        answer: "Saya sedang menunggu bus."
      }
    },
    {
      id: "dg-020",
      level: "D",
      title: "akan / mau",
      pattern: "akan / mau + 動詞",
      meaning: "〜する予定、〜したい",
      explanation: "akan は未来予定、mau は意志や希望を表す。",
      examples: [
        ["Saya akan berangkat besok.", "私は明日出発する予定です。"],
        ["Saya mau membeli tiket.", "私はチケットを買いたいです。"]
      ],
      practice: {
        prompt: "「私は明日出発します」を作る。",
        answer: "Saya akan berangkat besok."
      }
    },
    {
      id: "dg-021",
      level: "D",
      title: "boleh / tidak boleh",
      pattern: "boleh + 動詞 / tidak boleh + 動詞",
      meaning: "〜してよい / 〜してはいけない",
      explanation: "許可と禁止を表す。",
      examples: [
        ["Boleh saya duduk di sini?", "ここに座ってもいいですか。"],
        ["Anda tidak boleh merokok di sini.", "ここでタバコを吸ってはいけません。"]
      ],
      practice: {
        prompt: "「ここで写真を撮ってもいいですか」を作る。",
        answer: "Boleh saya ambil foto di sini?"
      }
    },
    {
      id: "dg-022",
      level: "D",
      title: "harus / perlu",
      pattern: "harus / perlu + 動詞",
      meaning: "〜しなければならない、〜する必要がある",
      explanation: "harus は義務、perlu は必要性を表す。",
      examples: [
        ["Saya harus membawa paspor.", "私はパスポートを持って行かなければなりません。"],
        ["Anda perlu mengisi formulir.", "あなたは用紙に記入する必要があります。"]
      ],
      practice: {
        prompt: "「私は先生と話す必要があります」を作る。",
        answer: "Saya perlu berbicara dengan guru."
      }
    },
    {
      id: "dg-023",
      level: "D",
      title: "jangan",
      pattern: "jangan + 動詞",
      meaning: "〜しないでください",
      explanation: "禁止や注意を表す。",
      examples: [
        ["Jangan lupa membawa tiket.", "チケットを持って行くのを忘れないでください。"],
        ["Jangan menyeberang di sini.", "ここで横断しないでください。"]
      ],
      practice: {
        prompt: "「ここで待たないでください」を作る。",
        answer: "Jangan menunggu di sini."
      }
    },
    {
      id: "dg-024",
      level: "D",
      title: "tolong / silakan",
      pattern: "tolong + 動詞 / silakan + 動詞",
      meaning: "〜してください / どうぞ〜してください",
      explanation: "依頼と促しを丁寧に表す。",
      examples: [
        ["Tolong tutup pintu.", "ドアを閉めてください。"],
        ["Silakan duduk di sini.", "どうぞここに座ってください。"]
      ],
      practice: {
        prompt: "「窓を開けてください」を作る。",
        answer: "Tolong buka jendela."
      }
    },
    {
      id: "dg-025",
      level: "D",
      title: "karena",
      pattern: "文 + karena + 理由",
      meaning: "〜なので",
      explanation: "理由を後ろに置く。",
      examples: [
        ["Saya pulang karena sakit.", "私は病気なので帰ります。"],
        ["Dia terlambat karena hujan.", "彼は雨のため遅れました。"]
      ],
      practice: {
        prompt: "「私は疲れたので寝ます」を作る。",
        answer: "Saya tidur karena lelah."
      }
    },
    {
      id: "dg-026",
      level: "D",
      title: "supaya / agar",
      pattern: "supaya / agar + 文",
      meaning: "〜するように、〜のために",
      explanation: "目的を表す。少し丁寧な文では agar もよく使う。",
      examples: [
        ["Saya belajar supaya lulus ujian.", "私は試験に合格するために勉強します。"],
        ["Datanglah pagi agar tidak terlambat.", "遅れないように朝来てください。"]
      ],
      practice: {
        prompt: "「私は合格するために勉強します」を作る。",
        answer: "Saya belajar supaya lulus."
      }
    },
    {
      id: "dg-027",
      level: "D",
      title: "kalau / jika",
      pattern: "kalau / jika + 条件",
      meaning: "もし〜なら",
      explanation: "条件を表す。jika は少し書きことば寄り。",
      examples: [
        ["Kalau hujan, saya naik taksi.", "もし雨なら、私はタクシーに乗ります。"],
        ["Jika ada waktu, saya akan datang.", "時間があれば、私は来ます。"]
      ],
      practice: {
        prompt: "「もし時間があれば、私は行きます」を作る。",
        answer: "Kalau ada waktu, saya pergi."
      }
    },
    {
      id: "dg-028",
      level: "D",
      title: "walaupun / meskipun",
      pattern: "walaupun / meskipun + 文",
      meaning: "〜だけれども、〜にもかかわらず",
      explanation: "逆接の条件を表す。",
      examples: [
        ["Walaupun hujan, dia pergi.", "雨だけれども、彼は行きます。"],
        ["Meskipun sibuk, saya belajar.", "忙しいですが、私は勉強します。"]
      ],
      practice: {
        prompt: "「忙しいけれど、私は行きます」を作る。",
        answer: "Walaupun sibuk, saya pergi."
      }
    },
    {
      id: "dg-029",
      level: "D",
      title: "sebelum / sesudah / setelah",
      pattern: "sebelum / sesudah / setelah + 動詞",
      meaning: "〜する前に / 〜した後で",
      explanation: "動作の前後関係を表す。",
      examples: [
        ["Saya mandi sebelum sarapan.", "私は朝食の前にシャワーを浴びます。"],
        ["Saya belajar setelah makan malam.", "私は夕食後に勉強します。"]
      ],
      practice: {
        prompt: "「私は寝る前に本を読みます」を作る。",
        answer: "Saya membaca buku sebelum tidur."
      }
    },
    {
      id: "dg-030",
      level: "D",
      title: "ketika / saat",
      pattern: "ketika / saat + 文",
      meaning: "〜するとき",
      explanation: "ある時点や場面を表す。",
      examples: [
        ["Ketika hujan, jalan macet.", "雨のとき、道は渋滞します。"],
        ["Saat saya datang, dia sedang makan.", "私が来たとき、彼は食事中でした。"]
      ],
      practice: {
        prompt: "「私が来たとき、彼は寝ていました」を作る。",
        answer: "Ketika saya datang, dia sedang tidur."
      }
    },
    {
      id: "dg-031",
      level: "D",
      title: "sambil",
      pattern: "動詞 + sambil + 動詞",
      meaning: "〜しながら",
      explanation: "2つの動作を同時に行うことを表す。",
      examples: [
        ["Saya makan sambil menonton TV.", "私はテレビを見ながら食べます。"],
        ["Dia berjalan sambil menelepon.", "彼は電話しながら歩きます。"]
      ],
      practice: {
        prompt: "「私は音楽を聞きながら勉強します」を作る。",
        answer: "Saya belajar sambil mendengarkan musik."
      }
    },
    {
      id: "dg-032",
      level: "D",
      title: "lalu / kemudian",
      pattern: "文 + lalu / kemudian + 文",
      meaning: "それから、その後",
      explanation: "出来事の順番を表す。",
      examples: [
        ["Saya makan, lalu pergi.", "私は食べて、それから行きます。"],
        ["Dia mandi, kemudian tidur.", "彼はシャワーを浴びて、その後寝ます。"]
      ],
      practice: {
        prompt: "「私は勉強して、それから寝ます」を作る。",
        answer: "Saya belajar, lalu tidur."
      }
    },
    {
      id: "dg-033",
      level: "D",
      title: "tentang / mengenai",
      pattern: "tentang / mengenai + 名詞",
      meaning: "〜について",
      explanation: "話題やテーマを表す。mengenai は少し書きことば寄り。",
      examples: [
        ["Kami berbicara tentang makanan.", "私たちは食べ物について話します。"],
        ["Saya membaca artikel mengenai pendidikan.", "私は教育についての記事を読みます。"]
      ],
      practice: {
        prompt: "「私たちは旅行について話します」を作る。",
        answer: "Kami berbicara tentang perjalanan."
      }
    },
    {
      id: "dg-034",
      level: "D",
      title: "kepada",
      pattern: "動詞 + kepada + 人",
      meaning: "〜に、〜へ",
      explanation: "相手や宛先を表す。memberi, bertanya, mengirim などと使う。",
      examples: [
        ["Saya memberi surat kepada guru.", "私は先生に手紙を渡します。"],
        ["Dia bertanya kepada petugas.", "彼は係員に質問します。"]
      ],
      practice: {
        prompt: "「私は母に電話します」を作る。",
        answer: "Saya menelepon kepada ibu."
      }
    },
    {
      id: "dg-035",
      level: "D",
      title: "selama / sejak",
      pattern: "selama + 期間 / sejak + 起点",
      meaning: "〜の間 / 〜以来",
      explanation: "期間と始まりの時点を区別する。",
      examples: [
        ["Saya tinggal di Bali selama seminggu.", "私は1週間バリに滞在します。"],
        ["Saya belajar sejak tahun lalu.", "私は去年から勉強しています。"]
      ],
      practice: {
        prompt: "「私は2日間ここにいます」を作る。",
        answer: "Saya di sini selama dua hari."
      }
    },
    {
      id: "dg-036",
      level: "D",
      title: "sampai / hingga",
      pattern: "sampai / hingga + 時間・場所",
      meaning: "〜まで",
      explanation: "到達点や期限を表す。hingga は少し書きことば寄り。",
      examples: [
        ["Saya bekerja sampai jam lima.", "私は5時まで働きます。"],
        ["Toko buka hingga malam.", "店は夜まで開いています。"]
      ],
      practice: {
        prompt: "「私は午後3時まで待ちます」を作る。",
        answer: "Saya menunggu sampai jam tiga sore."
      }
    },
    {
      id: "dg-037",
      level: "D",
      title: "setiap / semua / masing-masing",
      pattern: "setiap / semua / masing-masing + 名詞",
      meaning: "毎〜、すべての〜、それぞれの〜",
      explanation: "数量や範囲を表す。",
      examples: [
        ["Saya belajar setiap hari.", "私は毎日勉強します。"],
        ["Semua peserta hadir.", "すべての参加者が出席します。"],
        ["Masing-masing orang mendapat tiket.", "それぞれの人がチケットを受け取ります。"]
      ],
      practice: {
        prompt: "「私は毎朝走ります」を作る。",
        answer: "Saya berlari setiap pagi."
      }
    },
    {
      id: "dg-038",
      level: "D",
      title: "beberapa / banyak / sedikit",
      pattern: "数量語 + 名詞",
      meaning: "いくつかの、多くの、少しの",
      explanation: "名詞の前に置いて量を表す。",
      examples: [
        ["Saya membeli beberapa buku.", "私は本を数冊買います。"],
        ["Ada banyak orang di pasar.", "市場には多くの人がいます。"],
        ["Saya minum sedikit kopi.", "私はコーヒーを少し飲みます。"]
      ],
      practice: {
        prompt: "「私はいくつかの質問があります」を作る。",
        answer: "Saya punya beberapa pertanyaan."
      }
    },
    {
      id: "dg-039",
      level: "D",
      title: "kami / kita",
      pattern: "kami / kita",
      meaning: "私たち",
      explanation: "kami は聞き手を含まない。kita は聞き手を含む。",
      examples: [
        ["Kami tinggal di Jepang.", "私たちは日本に住んでいます。"],
        ["Kita belajar bersama.", "私たちは一緒に勉強します。"]
      ],
      practice: {
        prompt: "聞き手を含めて「私たちは一緒に行きます」を作る。",
        answer: "Kita pergi bersama."
      }
    },
    {
      id: "dg-040",
      level: "D",
      title: "語順: 時間と場所",
      pattern: "主語 + 動詞 + 目的語 + 場所 + 時間",
      meaning: "いつ・どこでを文に加える。",
      explanation: "語順は比較的自由だが、まずは場所、時間を後ろに置く形を覚える。",
      examples: [
        ["Saya belajar bahasa Indonesia di rumah setiap malam.", "私は毎晩家でインドネシア語を勉強します。"],
        ["Dia membeli tiket di stasiun kemarin.", "彼は昨日駅でチケットを買いました。"]
      ],
      practice: {
        prompt: "「私は昨日店で服を買いました」を作る。",
        answer: "Saya membeli baju di toko kemarin."
      }
    }
  );
})();
