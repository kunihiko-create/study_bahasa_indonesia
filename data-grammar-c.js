(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData) {
    return;
  }

  appData.grammarItems = appData.grammarItems || [];

  appData.grammarItems.push(
    {
      id: "cg-001",
      level: "C",
      title: "meN-kan",
      pattern: "meN- + 語幹 + -kan",
      meaning: "〜させる、〜してあげる、対象を動かす",
      explanation: "-kan は目的語に働きかけて、移動・変化・利益を表すことが多い。",
      examples: [
        ["Ibu membukakan pintu untuk tamu.", "母は客のためにドアを開けてあげます。"],
        ["Pemerintah meningkatkan layanan publik.", "政府は公共サービスを向上させます。"]
      ],
      practice: {
        prompt: "「先生は文法を説明します」を作る。",
        answer: "Guru menjelaskan tata bahasa."
      }
    },
    {
      id: "cg-002",
      level: "C",
      title: "meN-i",
      pattern: "meN- + 語幹 + -i",
      meaning: "場所・相手・対象に働きかける",
      explanation: "-i は動作が向かう場所や相手を目的語にすることが多い。",
      examples: [
        ["Kami mengunjungi museum itu.", "私たちはその博物館を訪れます。"],
        ["Petugas melayani pelanggan dengan ramah.", "係員は客に親切に対応します。"]
      ],
      practice: {
        prompt: "「私は会社に連絡します」を作る。",
        answer: "Saya menghubungi kantor."
      }
    },
    {
      id: "cg-003",
      level: "C",
      title: "-kan と -i",
      pattern: "mengirimkan barang / mengirimi teman",
      meaning: "物を送る / 人に送る",
      explanation: "-kan は動かされる物、-i は働きかけを受ける相手や場所に焦点が置かれる。",
      examples: [
        ["Saya mengirimkan surat kepada ayah.", "私は父に手紙を送ります。"],
        ["Saya mengirimi ayah surat.", "私は父に手紙を送ります。"]
      ],
      practice: {
        prompt: "「私は友人に写真を送ります」を -i で作る。",
        answer: "Saya mengirimi teman foto."
      }
    },
    {
      id: "cg-004",
      level: "C",
      title: "memper-",
      pattern: "memper- + 形容詞 / 語幹",
      meaning: "より〜にする、強める",
      explanation: "形容詞や状態を変化させる表現で、書きことばにもよく出る。",
      examples: [
        ["Perusahaan memperluas jaringan internet.", "会社はインターネット網を拡大します。"],
        ["Kami mempercepat proses kerja.", "私たちは作業工程を速めます。"]
      ],
      practice: {
        prompt: "「政府は協力を強めます」を作る。",
        answer: "Pemerintah memperkuat kerja sama."
      }
    },
    {
      id: "cg-005",
      level: "C",
      title: "ter- 状態",
      pattern: "ter- + 語幹",
      meaning: "〜されている、自然に〜した状態",
      explanation: "意図的な動作よりも、結果としてそうなっている状態を表す。",
      examples: [
        ["Pintu itu tertutup.", "そのドアは閉まっています。"],
        ["Nama saya tertulis di daftar.", "私の名前は名簿に書かれています。"]
      ],
      practice: {
        prompt: "「その書類は保存されています」を作る。",
        answer: "Dokumen itu tersimpan."
      }
    },
    {
      id: "cg-006",
      level: "C",
      title: "ter- 可能・偶然",
      pattern: "ter- + 動詞",
      meaning: "〜できる、うっかり〜する",
      explanation: "terlihat は「見える」、terbawa は「うっかり持っていかれる」のように使う。",
      examples: [
        ["Gunung itu terlihat dari sini.", "その山はここから見えます。"],
        ["Kunci saya terbawa oleh adik.", "私の鍵は弟がうっかり持っていきました。"]
      ],
      practice: {
        prompt: "「その声は聞こえます」を作る。",
        answer: "Suara itu terdengar."
      }
    },
    {
      id: "cg-007",
      level: "C",
      title: "ke-an 被害",
      pattern: "ke- + 語幹 + -an",
      meaning: "〜に遭う、〜すぎる",
      explanation: "kehujanan, ketinggalan など、望ましくない状態を受ける意味でよく使う。",
      examples: [
        ["Saya kehujanan di jalan.", "私は道で雨に降られました。"],
        ["Dia ketinggalan kereta.", "彼は電車に乗り遅れました。"]
      ],
      practice: {
        prompt: "「私は鍵を忘れて取り残されました」を作る。",
        answer: "Saya ketinggalan kunci."
      }
    },
    {
      id: "cg-008",
      level: "C",
      title: "ke-an 抽象名詞",
      pattern: "ke- + 語幹 + -an",
      meaning: "状態、性質、抽象概念",
      explanation: "状態や性質を表す名詞を作る。ニュースや説明文で頻出。",
      examples: [
        ["Kesehatan sangat penting.", "健康はとても重要です。"],
        ["Keamanan data harus dijaga.", "データの安全性は守られなければなりません。"]
      ],
      practice: {
        prompt: "selamat から「安全」を作る。",
        answer: "keselamatan"
      }
    },
    {
      id: "cg-009",
      level: "C",
      title: "peN-an / per-an",
      pattern: "peN-an / per-an + 語幹",
      meaning: "行為、過程、制度、場所",
      explanation: "動詞や語幹から抽象名詞を作る。C級では派生語として読めることが大切。",
      examples: [
        ["Pembangunan jalan itu belum selesai.", "その道路建設はまだ終わっていません。"],
        ["Pendaftaran peserta dibuka hari ini.", "参加者登録は今日始まります。"]
      ],
      practice: {
        prompt: "「支払い」を表す語を書く。",
        answer: "pembayaran"
      }
    },
    {
      id: "cg-010",
      level: "C",
      title: "peN- 名詞",
      pattern: "peN- + 語幹",
      meaning: "〜する人、〜する道具",
      explanation: "penulis, pembeli, pengirim など、人や道具を表す名詞を作る。",
      examples: [
        ["Penulis artikel itu tinggal di Bali.", "その記事の筆者はバリに住んでいます。"],
        ["Pembeli harus membawa kartu identitas.", "購入者は身分証を持参しなければなりません。"]
      ],
      practice: {
        prompt: "kirim から「送る人」を作る。",
        answer: "pengirim"
      }
    },
    {
      id: "cg-011",
      level: "C",
      title: "-an 名詞",
      pattern: "語幹 + -an",
      meaning: "結果、物、内容",
      explanation: "kiriman, tulisan, layanan など、行為の結果や具体物を表すことが多い。",
      examples: [
        ["Kiriman itu sudah tiba.", "その荷物はもう届きました。"],
        ["Tulisan ini mudah dibaca.", "この文章は読みやすいです。"]
      ],
      practice: {
        prompt: "tulis から「文章、書いたもの」を作る。",
        answer: "tulisan"
      }
    },
    {
      id: "cg-012",
      level: "C",
      title: "ber-an",
      pattern: "ber- + 語幹 + -an",
      meaning: "互いに〜する、あちこちで〜する",
      explanation: "相互動作や多数のものが散らばって動く様子を表す。",
      examples: [
        ["Mereka berkenalan di acara itu.", "彼らはその行事で知り合いました。"],
        ["Orang-orang berdatangan ke pasar.", "人々が市場へ次々にやって来ました。"]
      ],
      practice: {
        prompt: "「学生たちは互いに助け合います」を作る。",
        answer: "Para siswa saling membantu."
      }
    },
    {
      id: "cg-013",
      level: "C",
      title: "saling",
      pattern: "saling + 動詞",
      meaning: "互いに〜する",
      explanation: "ber-an と同じく相互動作を表すが、saling は意味を明確にする。",
      examples: [
        ["Kami saling membantu.", "私たちは互いに助け合います。"],
        ["Mereka saling menghubungi.", "彼らは互いに連絡を取り合います。"]
      ],
      practice: {
        prompt: "「彼らは互いに理解します」を作る。",
        answer: "Mereka saling memahami."
      }
    },
    {
      id: "cg-014",
      level: "C",
      title: "受動態 di-",
      pattern: "di- + 語幹 + oleh + 人",
      meaning: "〜される",
      explanation: "動作を受けるものを主語にする。oleh は動作主を示す。",
      examples: [
        ["Dokumen itu diperiksa oleh petugas.", "その書類は係員によって確認されます。"],
        ["Keputusan itu diumumkan oleh pemerintah.", "その決定は政府によって発表されました。"]
      ],
      practice: {
        prompt: "「その報告書は先生に読まれました」を作る。",
        answer: "Laporan itu dibaca oleh guru."
      }
    },
    {
      id: "cg-015",
      level: "C",
      title: "目的語焦点",
      pattern: "目的語 + saya / kamu / dia + 動詞",
      meaning: "〜を私が…する",
      explanation: "人称代名詞が動作主のとき、di- を使わずに目的語を前に出す形がよく使われる。",
      examples: [
        ["Buku itu saya baca kemarin.", "その本は私が昨日読みました。"],
        ["Masalah ini akan kami bahas besok.", "この問題は私たちが明日話し合います。"]
      ],
      practice: {
        prompt: "「その手紙は私が書きました」を作る。",
        answer: "Surat itu saya tulis."
      }
    },
    {
      id: "cg-016",
      level: "C",
      title: "oleh の省略",
      pattern: "di- 受動文 + oleh の省略",
      meaning: "動作主を言わない受動文",
      explanation: "動作主が重要でないとき、oleh + 人 は省略されることが多い。",
      examples: [
        ["Pendaftaran ditutup hari Jumat.", "登録は金曜日に締め切られます。"],
        ["Harga beras dinaikkan bulan ini.", "米の価格は今月上げられました。"]
      ],
      practice: {
        prompt: "「結果は明日発表されます」を作る。",
        answer: "Hasilnya diumumkan besok."
      }
    },
    {
      id: "cg-017",
      level: "C",
      title: "yang 節",
      pattern: "名詞 + yang + 文",
      meaning: "〜する名詞、〜である名詞",
      explanation: "名詞を後ろから説明する。長い読解文では非常に重要。",
      examples: [
        ["Orang yang duduk di sana adalah guru saya.", "そこに座っている人は私の先生です。"],
        ["Produk yang kami beli rusak.", "私たちが買った商品は壊れています。"]
      ],
      practice: {
        prompt: "「昨日来た人」を作る。",
        answer: "orang yang datang kemarin"
      }
    },
    {
      id: "cg-018",
      level: "C",
      title: "yang + 形容詞",
      pattern: "yang + 形容詞 / 比較表現",
      meaning: "〜なもの、〜な人",
      explanation: "名詞を省略して「〜なもの」「〜な人」と言える。",
      examples: [
        ["Saya memilih yang lebih murah.", "私はより安いものを選びます。"],
        ["Yang paling penting adalah keselamatan.", "最も重要なのは安全です。"]
      ],
      practice: {
        prompt: "「一番新しいもの」を作る。",
        answer: "yang paling baru"
      }
    },
    {
      id: "cg-019",
      level: "C",
      title: "-nya",
      pattern: "名詞 / 形容詞 / 動詞 + -nya",
      meaning: "その〜、〜すること、〜であること",
      explanation: "-nya は所有だけでなく、内容を名詞化したり既知情報を示したりする。",
      examples: [
        ["Harganya terlalu mahal.", "その値段は高すぎます。"],
        ["Datangnya terlambat.", "彼が来るのは遅れました。"]
      ],
      practice: {
        prompt: "「その使い方は簡単です」を作る。",
        answer: "Cara pakainya mudah."
      }
    },
    {
      id: "cg-020",
      level: "C",
      title: "merupakan",
      pattern: "A merupakan B",
      meaning: "AはBである、Bに当たる",
      explanation: "adalah より説明文・論説文でよく使われる硬めの表現。",
      examples: [
        ["Bahasa Indonesia merupakan bahasa resmi.", "インドネシア語は公用語です。"],
        ["Pendidikan merupakan hak setiap anak.", "教育はすべての子どもの権利です。"]
      ],
      practice: {
        prompt: "「健康は重要な問題です」を merupakan で作る。",
        answer: "Kesehatan merupakan masalah penting."
      }
    },
    {
      id: "cg-021",
      level: "C",
      title: "yaitu / yakni",
      pattern: "名詞 + yaitu / yakni + 説明",
      meaning: "すなわち、つまり",
      explanation: "前の語を定義・言い換えするときに使う。yakni はやや硬い。",
      examples: [
        ["Ada dua pilihan, yaitu naik bus atau kereta.", "選択肢は2つ、つまりバスか電車です。"],
        ["Masalah utama yakni biaya pendidikan.", "主な問題はすなわち教育費です。"]
      ],
      practice: {
        prompt: "「必要な書類は二つ、パスポートとビザです」を作る。",
        answer: "Dokumen yang diperlukan ada dua, yaitu paspor dan visa."
      }
    },
    {
      id: "cg-022",
      level: "C",
      title: "bukan hanya ... tetapi juga",
      pattern: "bukan hanya A, tetapi juga B",
      meaning: "AだけでなくBも",
      explanation: "情報を追加して強調する表現。tidak hanya も同じように使う。",
      examples: [
        ["Dia bukan hanya pintar, tetapi juga rajin.", "彼は賢いだけでなく勤勉でもあります。"],
        ["Program itu tidak hanya murah, tetapi juga efektif.", "そのプログラムは安いだけでなく効果的です。"]
      ],
      practice: {
        prompt: "「この店は近いだけでなく安いです」を作る。",
        answer: "Toko ini bukan hanya dekat, tetapi juga murah."
      }
    },
    {
      id: "cg-023",
      level: "C",
      title: "baik ... maupun",
      pattern: "baik A maupun B",
      meaning: "AもBも、AとBの両方",
      explanation: "二つの要素を並べて、どちらにも当てはまることを表す。",
      examples: [
        ["Baik siswa maupun guru harus hadir.", "生徒も先生も出席しなければなりません。"],
        ["Baik di kota maupun di desa, internet diperlukan.", "都市でも村でもインターネットは必要です。"]
      ],
      practice: {
        prompt: "「日本語も英語も必要です」を作る。",
        answer: "Baik bahasa Jepang maupun bahasa Inggris diperlukan."
      }
    },
    {
      id: "cg-024",
      level: "C",
      title: "antara ... dan",
      pattern: "antara A dan B",
      meaning: "AとBの間、AとBの関係",
      explanation: "場所・時間・選択肢・関係を表す。",
      examples: [
        ["Hubungan antara Jepang dan Indonesia baik.", "日本とインドネシアの関係は良いです。"],
        ["Rapat diadakan antara jam dua dan jam tiga.", "会議は2時から3時の間に行われます。"]
      ],
      practice: {
        prompt: "「価格と品質の関係」を作る。",
        answer: "hubungan antara harga dan kualitas"
      }
    },
    {
      id: "cg-025",
      level: "C",
      title: "meskipun / walaupun",
      pattern: "meskipun / walaupun + 文",
      meaning: "〜だけれども",
      explanation: "逆接を表す。文頭にも文中にも置ける。",
      examples: [
        ["Meskipun hujan, mereka tetap datang.", "雨にもかかわらず、彼らは来ました。"],
        ["Saya pergi walaupun badan kurang sehat.", "体調があまり良くなくても私は行きます。"]
      ],
      practice: {
        prompt: "「忙しいけれど、私は勉強します」を作る。",
        answer: "Meskipun sibuk, saya belajar."
      }
    },
    {
      id: "cg-026",
      level: "C",
      title: "padahal",
      pattern: "文 + padahal + 文",
      meaning: "〜なのに、実は〜",
      explanation: "期待や前提と違う事実を示す逆接表現。",
      examples: [
        ["Dia tidak datang, padahal sudah berjanji.", "彼は約束していたのに来ませんでした。"],
        ["Harga naik, padahal kualitasnya menurun.", "品質は下がっているのに価格は上がりました。"]
      ],
      practice: {
        prompt: "「彼は疲れているのに働き続けます」を作る。",
        answer: "Dia terus bekerja, padahal lelah."
      }
    },
    {
      id: "cg-027",
      level: "C",
      title: "sedangkan / sementara",
      pattern: "A ..., sedangkan / sementara B ...",
      meaning: "一方で",
      explanation: "二つの事柄を対比するときに使う。",
      examples: [
        ["Kakak bekerja, sedangkan adik belajar.", "兄は働いていて、一方で弟は勉強しています。"],
        ["Harga naik, sementara pendapatan tetap.", "価格は上がる一方で、収入は変わりません。"]
      ],
      practice: {
        prompt: "「私は電車で行き、友人はバスで行きます」を作る。",
        answer: "Saya pergi naik kereta, sedangkan teman saya naik bus."
      }
    },
    {
      id: "cg-028",
      level: "C",
      title: "agar / supaya",
      pattern: "agar / supaya + 文",
      meaning: "〜するために、〜するように",
      explanation: "目的を表す。後ろには主語と述語を持つ文が来ることが多い。",
      examples: [
        ["Saya belajar agar lulus ujian.", "私は試験に合格するために勉強します。"],
        ["Dia menabung supaya bisa membeli rumah.", "彼は家を買えるように貯金します。"]
      ],
      practice: {
        prompt: "「健康でいるために、私は運動します」を作る。",
        answer: "Saya berolahraga agar tetap sehat."
      }
    },
    {
      id: "cg-029",
      level: "C",
      title: "sehingga",
      pattern: "文 + sehingga + 結果",
      meaning: "その結果〜、〜するほど",
      explanation: "原因と結果をつなぐ。論理的な説明文でよく使う。",
      examples: [
        ["Hujan turun deras sehingga jalan banjir.", "雨が激しく降ったため、道が冠水しました。"],
        ["Dia belajar keras sehingga lulus ujian.", "彼は一生懸命勉強したので試験に合格しました。"]
      ],
      practice: {
        prompt: "「交通が混んでいたので、私は遅れました」を作る。",
        answer: "Lalu lintas macet sehingga saya terlambat."
      }
    },
    {
      id: "cg-030",
      level: "C",
      title: "karena / sebab",
      pattern: "karena / sebab + 文",
      meaning: "〜なので、〜のため",
      explanation: "理由を表す。sebab はやや硬く、文書でも使われる。",
      examples: [
        ["Saya tidak pergi karena sakit.", "私は病気なので行きません。"],
        ["Harga naik sebab permintaan meningkat.", "需要が増えたため価格が上がりました。"]
      ],
      practice: {
        prompt: "「雨なので、店は閉まっています」を作る。",
        answer: "Toko tutup karena hujan."
      }
    },
    {
      id: "cg-031",
      level: "C",
      title: "oleh karena itu",
      pattern: "文. Oleh karena itu, 文.",
      meaning: "そのため、したがって",
      explanation: "前文の理由を受けて結論を述べる論理表現。",
      examples: [
        ["Biaya meningkat. Oleh karena itu, harga tiket naik.", "費用が増えました。そのため、チケット価格が上がりました。"],
        ["Data belum lengkap. Oleh karena itu, keputusan ditunda.", "データがまだ不十分です。そのため、決定は延期されました。"]
      ],
      practice: {
        prompt: "「雨が激しい。そのため、試合は中止です」を作る。",
        answer: "Hujan deras. Oleh karena itu, pertandingan dibatalkan."
      }
    },
    {
      id: "cg-032",
      level: "C",
      title: "jika / apabila / bila",
      pattern: "jika / apabila / bila + 文",
      meaning: "もし〜なら",
      explanation: "条件を表す。apabila はやや硬く、規則や案内文にも出る。",
      examples: [
        ["Jika ada waktu, saya akan membantu.", "時間があれば、私は手伝います。"],
        ["Apabila kartu hilang, segera hubungi petugas.", "カードをなくした場合は、すぐ係員に連絡してください。"]
      ],
      practice: {
        prompt: "「もし雨なら、私は家にいます」を作る。",
        answer: "Jika hujan, saya tinggal di rumah."
      }
    },
    {
      id: "cg-033",
      level: "C",
      title: "asalkan",
      pattern: "asalkan + 条件",
      meaning: "〜しさえすれば",
      explanation: "最低条件を示す。条件が満たされれば結果が成り立つ。",
      examples: [
        ["Anda boleh masuk asalkan membawa kartu.", "カードを持っていれば入れます。"],
        ["Saya setuju asalkan harganya tidak terlalu mahal.", "値段が高すぎなければ私は賛成です。"]
      ],
      practice: {
        prompt: "「時間通りに来れば、参加できます」を作る。",
        answer: "Anda bisa ikut asalkan datang tepat waktu."
      }
    },
    {
      id: "cg-034",
      level: "C",
      title: "kecuali",
      pattern: "kecuali + 名詞 / 文",
      meaning: "〜を除いて、〜でない限り",
      explanation: "例外を表す。文脈によって条件の意味にもなる。",
      examples: [
        ["Semua peserta hadir kecuali Pak Budi.", "ブディさんを除いて全員出席しました。"],
        ["Saya tidak pergi kecuali ada tugas penting.", "重要な用事がない限り、私は行きません。"]
      ],
      practice: {
        prompt: "「日曜日を除いて毎日開いています」を作る。",
        answer: "Buka setiap hari kecuali hari Minggu."
      }
    },
    {
      id: "cg-035",
      level: "C",
      title: "setelah / sebelum",
      pattern: "setelah / sebelum + 文",
      meaning: "〜した後で / 〜する前に",
      explanation: "時間の前後関係を表す。動詞文と一緒によく使う。",
      examples: [
        ["Saya makan setelah pulang kerja.", "私は仕事から帰った後で食事します。"],
        ["Sebelum berangkat, dia membeli tiket.", "出発する前に、彼はチケットを買いました。"]
      ],
      practice: {
        prompt: "「勉強した後で寝ます」を作る。",
        answer: "Saya tidur setelah belajar."
      }
    },
    {
      id: "cg-036",
      level: "C",
      title: "sejak / selama",
      pattern: "sejak + 起点 / selama + 期間",
      meaning: "〜以来 / 〜の間",
      explanation: "sejak は始まり、selama は継続する期間を表す。",
      examples: [
        ["Saya tinggal di sini sejak tahun lalu.", "私は去年からここに住んでいます。"],
        ["Dia belajar selama dua jam.", "彼は2時間勉強しました。"]
      ],
      practice: {
        prompt: "「私は朝から待っています」を作る。",
        answer: "Saya menunggu sejak pagi."
      }
    },
    {
      id: "cg-037",
      level: "C",
      title: "sambil / seraya",
      pattern: "sambil / seraya + 動詞",
      meaning: "〜しながら",
      explanation: "同時に行う動作を表す。seraya は書きことば寄り。",
      examples: [
        ["Dia makan sambil menonton televisi.", "彼はテレビを見ながら食事します。"],
        ["Ia tersenyum seraya mengucapkan terima kasih.", "彼は微笑みながらありがとうと言いました。"]
      ],
      practice: {
        prompt: "「私は音楽を聞きながら勉強します」を作る。",
        answer: "Saya belajar sambil mendengarkan musik."
      }
    },
    {
      id: "cg-038",
      level: "C",
      title: "tanpa",
      pattern: "tanpa + 名詞 / 動詞",
      meaning: "〜なしで、〜せずに",
      explanation: "何かを伴わないことを表す。動詞を続けることもできる。",
      examples: [
        ["Dia pergi tanpa izin.", "彼は許可なしに行きました。"],
        ["Saya menjawab tanpa berpikir panjang.", "私は深く考えずに答えました。"]
      ],
      practice: {
        prompt: "「彼は何も言わずに出ました」を作る。",
        answer: "Dia keluar tanpa mengatakan apa-apa."
      }
    },
    {
      id: "cg-039",
      level: "C",
      title: "berdasarkan",
      pattern: "berdasarkan + 名詞",
      meaning: "〜に基づいて",
      explanation: "根拠や資料を示す。報告文や説明文で頻出。",
      examples: [
        ["Keputusan dibuat berdasarkan data terbaru.", "決定は最新データに基づいて行われました。"],
        ["Berdasarkan laporan itu, harga naik.", "その報告に基づくと、価格は上がりました。"]
      ],
      practice: {
        prompt: "「結果は調査に基づいています」を作る。",
        answer: "Hasilnya berdasarkan penelitian."
      }
    },
    {
      id: "cg-040",
      level: "C",
      title: "mengenai / terhadap",
      pattern: "mengenai + 話題 / terhadap + 対象",
      meaning: "〜について / 〜に対して",
      explanation: "mengenai は話題、terhadap は反応や態度の対象を示すことが多い。",
      examples: [
        ["Kami berdiskusi mengenai pendidikan.", "私たちは教育について議論しました。"],
        ["Warga memberi tanggapan terhadap kebijakan itu.", "住民はその政策に対して反応を示しました。"]
      ],
      practice: {
        prompt: "「私たちは環境について話します」を作る。",
        answer: "Kami berbicara mengenai lingkungan."
      }
    }
  );
})();
