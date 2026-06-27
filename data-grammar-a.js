(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData) {
    return;
  }

  appData.grammarItems = appData.grammarItems || [];

  appData.grammarItems.push(
    {
      id: "ag-001",
      level: "A",
      title: "論説文の骨格",
      pattern: "tesis + argumen + simpulan",
      meaning: "主張、根拠、結論",
      explanation: "A級では単文理解だけでなく、段落全体で筆者が何を主張し、どの根拠で支えているかを読む。",
      examples: [
        ["Tulisan ini berargumen bahwa reformasi kelembagaan perlu dipercepat.", "本稿は制度改革を加速する必要があると主張しています。"],
        ["Dengan demikian, kebijakan tersebut harus ditinjau kembali.", "したがって、その政策は再検討されなければなりません。"]
      ],
      practice: {
        prompt: "「本稿は〜と主張する」を作る。",
        answer: "Tulisan ini berargumen bahwa ..."
      }
    },
    {
      id: "ag-002",
      level: "A",
      title: "名詞化された主語",
      pattern: "名詞化句 + menjadi / merupakan + 補語",
      meaning: "抽象概念を主語にする",
      explanation: "ke-an, peN-an, per-an などの名詞化句が主語になると、文が抽象的で硬くなる。",
      examples: [
        ["Ketimpangan struktural menjadi persoalan utama.", "構造的格差が主要な問題になっています。"],
        ["Penguatan tata kelola merupakan prioritas nasional.", "ガバナンス強化は国家的優先事項です。"]
      ],
      practice: {
        prompt: "「制度化は重要な過程です」を作る。",
        answer: "Institusionalisasi merupakan proses penting."
      }
    },
    {
      id: "ag-003",
      level: "A",
      title: "名詞化の連鎖",
      pattern: "名詞化 + 名詞化 + 修飾語",
      meaning: "複数の抽象名詞をつなぐ",
      explanation: "A級では『〜の〜の〜』のような名詞句が多い。中心語と修飾語を見分けることが大切。",
      examples: [
        ["Penguatan kapasitas kelembagaan daerah diperlukan.", "地域制度能力の強化が必要です。"],
        ["Percepatan transformasi energi menjadi agenda penting.", "エネルギー転換の加速が重要課題になっています。"]
      ],
      practice: {
        prompt: "「公共サービス改革の加速」を作る。",
        answer: "percepatan reformasi pelayanan publik"
      }
    },
    {
      id: "ag-004",
      level: "A",
      title: "受動態の連続",
      pattern: "telah / sedang / akan + di- + 動詞",
      meaning: "時制・相を伴う受動表現",
      explanation: "公式文では受動態が多く、telah, sedang, akan によって完了・進行・予定を読み分ける。",
      examples: [
        ["Kebijakan itu telah diterapkan di beberapa daerah.", "その政策はいくつかの地域で既に実施されています。"],
        ["Sistem tersebut sedang dievaluasi oleh tim ahli.", "その制度は専門家チームによって評価中です。"]
      ],
      practice: {
        prompt: "「その案は来月発表される予定です」を作る。",
        answer: "Usulan itu akan diumumkan bulan depan."
      }
    },
    {
      id: "ag-005",
      level: "A",
      title: "動作主の省略",
      pattern: "di- 受動文 + 動作主なし",
      meaning: "誰が行ったかを示さない",
      explanation: "動作主より制度・結果が重要な場合、oleh + 人 は省略される。日本語訳でも主語を補いすぎない。",
      examples: [
        ["Regulasi baru diterbitkan tahun ini.", "新しい規制が今年公布されました。"],
        ["Data tersebut dikumpulkan melalui survei nasional.", "そのデータは全国調査を通じて集められました。"]
      ],
      practice: {
        prompt: "「結果は昨日公表されました」を作る。",
        answer: "Hasilnya diumumkan kemarin."
      }
    },
    {
      id: "ag-006",
      level: "A",
      title: "dipahami sebagai",
      pattern: "A dipahami sebagai B",
      meaning: "AはBとして理解される",
      explanation: "概念の定義や解釈を示す表現。論説文で筆者の立場を示す手がかりになる。",
      examples: [
        ["Keadilan sosial dipahami sebagai akses yang setara.", "社会正義は平等なアクセスとして理解されます。"],
        ["Identitas tidak selalu dipahami sebagai sesuatu yang tetap.", "アイデンティティは常に固定的なものとして理解されるわけではありません。"]
      ],
      practice: {
        prompt: "「教育は権利として理解されます」を作る。",
        answer: "Pendidikan dipahami sebagai hak."
      }
    },
    {
      id: "ag-007",
      level: "A",
      title: "dianggap / dipandang sebagai",
      pattern: "A dianggap / dipandang sebagai B",
      meaning: "AはBと見なされる",
      explanation: "社会的評価や一般的認識を示す。筆者自身の意見か、一般論かを文脈で判断する。",
      examples: [
        ["Digitalisasi dianggap sebagai jalan menuju efisiensi.", "デジタル化は効率化への道と見なされています。"],
        ["Krisis iklim dipandang sebagai ancaman global.", "気候危機は世界的脅威と見なされています。"]
      ],
      practice: {
        prompt: "「透明性は重要な原則と見なされます」を作る。",
        answer: "Transparansi dipandang sebagai prinsip penting."
      }
    },
    {
      id: "ag-008",
      level: "A",
      title: "berangkat dari",
      pattern: "berangkat dari + 名詞 / bahwa 節",
      meaning: "〜を出発点として",
      explanation: "議論の前提や分析の出発点を示す。文頭で使われることが多い。",
      examples: [
        ["Berangkat dari asumsi tersebut, peneliti menyusun hipotesis.", "その仮定を出発点として、研究者は仮説を立てました。"],
        ["Analisis ini berangkat dari kenyataan bahwa akses belum merata.", "この分析はアクセスがまだ均等でないという事実を出発点にしています。"]
      ],
      practice: {
        prompt: "「そのデータを出発点として」を作る。",
        answer: "berangkat dari data tersebut"
      }
    },
    {
      id: "ag-009",
      level: "A",
      title: "bertolak dari",
      pattern: "bertolak dari + 根拠",
      meaning: "〜に基づいて、〜から出発して",
      explanation: "berangkat dari と近いが、論理的な根拠や観点を示す硬い表現。",
      examples: [
        ["Bertolak dari temuan itu, kebijakan perlu disesuaikan.", "その知見に基づき、政策は調整される必要があります。"],
        ["Bertolak dari perspektif warga, layanan itu belum memadai.", "住民の観点からすると、そのサービスはまだ十分ではありません。"]
      ],
      practice: {
        prompt: "「住民の経験を出発点として」を作る。",
        answer: "bertolak dari pengalaman warga"
      }
    },
    {
      id: "ag-010",
      level: "A",
      title: "dalam kerangka",
      pattern: "dalam kerangka + 名詞",
      meaning: "〜の枠組みの中で",
      explanation: "議論・政策・制度がどの枠組みに属するかを示す。",
      examples: [
        ["Isu ini dibahas dalam kerangka pembangunan berkelanjutan.", "この問題は持続可能な開発の枠組みで議論されます。"],
        ["Program itu dijalankan dalam kerangka otonomi daerah.", "その計画は地方自治の枠組みで実施されます。"]
      ],
      practice: {
        prompt: "「人権の枠組みで」を作る。",
        answer: "dalam kerangka hak asasi manusia"
      }
    },
    {
      id: "ag-011",
      level: "A",
      title: "pada tataran",
      pattern: "pada tataran + 名詞",
      meaning: "〜のレベルで",
      explanation: "抽象的な議論の階層を示す。tataran konseptual, praktis, kebijakan など。",
      examples: [
        ["Pada tataran konseptual, istilah itu masih diperdebatkan.", "概念レベルでは、その用語はまだ議論されています。"],
        ["Pada tataran praktik, kebijakan itu sulit diterapkan.", "実践レベルでは、その政策を実施するのは難しいです。"]
      ],
      practice: {
        prompt: "「制度レベルで」を作る。",
        answer: "pada tataran kelembagaan"
      }
    },
    {
      id: "ag-012",
      level: "A",
      title: "sejauh menyangkut",
      pattern: "sejauh menyangkut + 名詞",
      meaning: "〜に関する限り",
      explanation: "議論の範囲を限定する表現。長文で焦点を絞る働きがある。",
      examples: [
        ["Sejauh menyangkut pembiayaan, program itu belum jelas.", "資金調達に関する限り、その計画はまだ明確ではありません。"],
        ["Sejauh menyangkut hak warga, regulasi itu perlu ditinjau.", "住民の権利に関する限り、その規制は見直される必要があります。"]
      ],
      practice: {
        prompt: "「教育に関する限り」を作る。",
        answer: "sejauh menyangkut pendidikan"
      }
    },
    {
      id: "ag-013",
      level: "A",
      title: "tidak terlepas dari",
      pattern: "A tidak terlepas dari B",
      meaning: "AはBと切り離せない",
      explanation: "原因・背景・文脈との密接な関係を示す。A級読解で非常に頻出。",
      examples: [
        ["Krisis pangan tidak terlepas dari perubahan iklim.", "食料危機は気候変動と切り離せません。"],
        ["Ketimpangan pendidikan tidak terlepas dari faktor ekonomi.", "教育格差は経済的要因と切り離せません。"]
      ],
      practice: {
        prompt: "「この問題は歴史的背景と切り離せない」を作る。",
        answer: "Masalah ini tidak terlepas dari latar belakang historis."
      }
    },
    {
      id: "ag-014",
      level: "A",
      title: "pada gilirannya",
      pattern: "文, yang pada gilirannya + 文",
      meaning: "ひいては、次には",
      explanation: "ある結果がさらに別の結果を生む連鎖を示す。",
      examples: [
        ["Digitalisasi meningkatkan efisiensi, yang pada gilirannya menekan biaya.", "デジタル化は効率を高め、ひいては費用を抑えます。"],
        ["Ketimpangan akses menghambat pendidikan, yang pada gilirannya memperlebar kesenjangan.", "アクセス格差は教育を妨げ、ひいては格差を広げます。"]
      ],
      practice: {
        prompt: "「それはひいては需要を増やします」を作る。",
        answer: "Hal itu pada gilirannya meningkatkan permintaan."
      }
    },
    {
      id: "ag-015",
      level: "A",
      title: "sebagaimana dikemukakan",
      pattern: "sebagaimana dikemukakan + 人 / 資料",
      meaning: "〜が述べているように",
      explanation: "引用・参照の表現。論文調の文で根拠を示す。",
      examples: [
        ["Sebagaimana dikemukakan para ahli, data harus diverifikasi.", "専門家が述べているように、データは検証されなければなりません。"],
        ["Sebagaimana dijelaskan dalam laporan itu, risiko meningkat.", "その報告で説明されているように、リスクは高まっています。"]
      ],
      practice: {
        prompt: "「報告書が述べるように」を作る。",
        answer: "sebagaimana dikemukakan dalam laporan"
      }
    },
    {
      id: "ag-016",
      level: "A",
      title: "terlepas dari kenyataan bahwa",
      pattern: "terlepas dari kenyataan bahwa + 文",
      meaning: "〜という事実にかかわらず",
      explanation: "既知の事実を認めつつ、それとは別に論を進める高度な譲歩表現。",
      examples: [
        ["Terlepas dari kenyataan bahwa biayanya tinggi, program itu penting.", "費用が高いという事実にかかわらず、その計画は重要です。"],
        ["Kebijakan itu diterapkan terlepas dari kenyataan bahwa kritik masih kuat.", "批判がなお強いという事実にかかわらず、その政策は実施されました。"]
      ],
      practice: {
        prompt: "「結果が不十分であるという事実にかかわらず」を作る。",
        answer: "terlepas dari kenyataan bahwa hasilnya belum memadai"
      }
    },
    {
      id: "ag-017",
      level: "A",
      title: "alih-alih ... justru",
      pattern: "alih-alih + 動詞, justru + 文",
      meaning: "〜するどころか、むしろ〜",
      explanation: "期待と逆の結果を強く示す。論説文で批判的な展開に使われる。",
      examples: [
        ["Alih-alih mengurangi beban, kebijakan itu justru menambah biaya.", "負担を減らすどころか、その政策はむしろ費用を増やしました。"],
        ["Alih-alih mempersempit kesenjangan, program itu justru memperlebar jarak sosial.", "格差を縮めるどころか、その計画はむしろ社会的距離を広げました。"]
      ],
      practice: {
        prompt: "「解決するどころか問題を悪化させた」を作る。",
        answer: "Alih-alih menyelesaikan, hal itu justru memperburuk masalah."
      }
    },
    {
      id: "ag-018",
      level: "A",
      title: "bukan semata-mata ... melainkan",
      pattern: "bukan semata-mata A, melainkan B",
      meaning: "単にAではなくBである",
      explanation: "表面的な説明を退け、より本質的な説明を提示する。",
      examples: [
        ["Masalah ini bukan semata-mata teknis, melainkan struktural.", "この問題は単に技術的なものではなく、構造的なものです。"],
        ["Kemiskinan bukan semata-mata soal pendapatan, melainkan juga akses.", "貧困は単に所得の問題ではなく、アクセスの問題でもあります。"]
      ],
      practice: {
        prompt: "「これは単なる個人の問題ではなく社会の問題です」を作る。",
        answer: "Ini bukan semata-mata masalah individu, melainkan masalah sosial."
      }
    },
    {
      id: "ag-019",
      level: "A",
      title: "bukan berarti bahwa",
      pattern: "A bukan berarti bahwa B",
      meaning: "AだからといってBという意味ではない",
      explanation: "誤った推論を防ぎ、主張を細かく調整する表現。",
      examples: [
        ["Kritik terhadap kebijakan bukan berarti bahwa program itu harus dihentikan.", "政策への批判は、その計画を止めるべきだという意味ではありません。"],
        ["Perbedaan pendapat bukan berarti bahwa kerja sama tidak mungkin.", "意見の違いは協力が不可能だという意味ではありません。"]
      ],
      practice: {
        prompt: "「遅いからといって失敗という意味ではない」を作る。",
        answer: "Lambat bukan berarti bahwa itu gagal."
      }
    },
    {
      id: "ag-020",
      level: "A",
      title: "sejauh mana",
      pattern: "sejauh mana + 文",
      meaning: "どの程度〜か",
      explanation: "研究課題や分析の焦点を問う表現。間接疑問としてよく使われる。",
      examples: [
        ["Penelitian ini mengkaji sejauh mana kebijakan itu efektif.", "本研究はその政策がどの程度有効かを検討します。"],
        ["Belum jelas sejauh mana warga terlibat dalam proses itu.", "住民がその過程にどの程度関与したかはまだ明確ではありません。"]
      ],
      practice: {
        prompt: "「その制度がどの程度機能するか」を作る。",
        answer: "sejauh mana sistem itu berfungsi"
      }
    },
    {
      id: "ag-021",
      level: "A",
      title: "apakah ... atau tidak",
      pattern: "apakah + 文 + atau tidak",
      meaning: "〜かどうか",
      explanation: "A級では panjang な目的語節として現れる。文の中心動詞を見失わないこと。",
      examples: [
        ["Masih diperdebatkan apakah kebijakan itu adil atau tidak.", "その政策が公平かどうかはまだ議論されています。"],
        ["Peneliti memeriksa apakah data tersebut valid atau tidak.", "研究者はそのデータが妥当かどうか確認しました。"]
      ],
      practice: {
        prompt: "「その方法が有効かどうか」を作る。",
        answer: "apakah cara itu efektif atau tidak"
      }
    },
    {
      id: "ag-022",
      level: "A",
      title: "bagaimana ... dapat",
      pattern: "bagaimana + 名詞 + dapat + 動詞",
      meaning: "どのように〜できるか",
      explanation: "方法やメカニズムを問う研究・論説の表現。",
      examples: [
        ["Tulisan ini menjelaskan bagaimana inovasi dapat memperkuat ekonomi lokal.", "本稿は革新がどのように地域経済を強化できるかを説明します。"],
        ["Pertanyaan utamanya adalah bagaimana warga dapat berpartisipasi.", "主な問いは住民がどのように参加できるかです。"]
      ],
      practice: {
        prompt: "「教育がどのように格差を減らせるか」を作る。",
        answer: "bagaimana pendidikan dapat mengurangi ketimpangan"
      }
    },
    {
      id: "ag-023",
      level: "A",
      title: "di satu sisi / di sisi lain",
      pattern: "di satu sisi ..., di sisi lain ...",
      meaning: "一方では、他方では",
      explanation: "複数の観点を対比し、単純化を避ける論述で使われる。",
      examples: [
        ["Di satu sisi, digitalisasi meningkatkan efisiensi. Di sisi lain, ia menimbulkan risiko baru.", "一方でデジタル化は効率を高めます。他方で新たなリスクを生みます。"],
        ["Di satu sisi, subsidi membantu warga. Di sisi lain, beban anggaran meningkat.", "一方で補助金は住民を助けます。他方で予算負担は増えます。"]
      ],
      practice: {
        prompt: "「一方で便利だが、他方で危険もある」を作る。",
        answer: "Di satu sisi hal itu praktis, di sisi lain ada risikonya."
      }
    },
    {
      id: "ag-024",
      level: "A",
      title: "baik secara ... maupun",
      pattern: "baik secara A maupun B",
      meaning: "Aの面でもBの面でも",
      explanation: "抽象的な観点を並列する。secara ekonomi, sosial, politik などと相性がよい。",
      examples: [
        ["Kebijakan itu penting baik secara ekonomi maupun sosial.", "その政策は経済的にも社会的にも重要です。"],
        ["Dampaknya terasa baik secara lokal maupun nasional.", "その影響は地域的にも全国的にも感じられます。"]
      ],
      practice: {
        prompt: "「法的にも倫理的にも」を作る。",
        answer: "baik secara hukum maupun etika"
      }
    },
    {
      id: "ag-025",
      level: "A",
      title: "semakin / kian",
      pattern: "semakin / kian + 形容詞",
      meaning: "ますます〜",
      explanation: "変化が進行することを示す。kian は硬めで論説文に合う。",
      examples: [
        ["Masalah ketimpangan kian kompleks.", "格差問題はますます複雑になっています。"],
        ["Semakin tinggi biaya, semakin sulit akses warga.", "費用が高くなるほど、住民のアクセスは難しくなります。"]
      ],
      practice: {
        prompt: "「課題はますます緊急になっています」を作る。",
        answer: "Tantangan itu kian mendesak."
      }
    },
    {
      id: "ag-026",
      level: "A",
      title: "tanpa mengabaikan",
      pattern: "tanpa mengabaikan + 名詞",
      meaning: "〜を無視することなく",
      explanation: "主張に条件や配慮を添える表現。バランスのある論述で使われる。",
      examples: [
        ["Pertumbuhan ekonomi perlu didorong tanpa mengabaikan lingkungan.", "環境を無視することなく経済成長を促す必要があります。"],
        ["Efisiensi harus dicapai tanpa mengabaikan keadilan sosial.", "社会正義を無視することなく効率を達成しなければなりません。"]
      ],
      practice: {
        prompt: "「安全を無視することなく」を作る。",
        answer: "tanpa mengabaikan keselamatan"
      }
    },
    {
      id: "ag-027",
      level: "A",
      title: "dengan mempertimbangkan",
      pattern: "dengan mempertimbangkan + 名詞 / bahwa 節",
      meaning: "〜を考慮して",
      explanation: "判断や政策決定の条件を示す。mengingat より手続き的な響きがある。",
      examples: [
        ["Keputusan dibuat dengan mempertimbangkan kondisi daerah.", "決定は地域の状況を考慮して行われました。"],
        ["Program disusun dengan mempertimbangkan bahwa dana terbatas.", "資金が限られていることを考慮して計画が作られました。"]
      ],
      practice: {
        prompt: "「住民の意見を考慮して」を作る。",
        answer: "dengan mempertimbangkan pendapat warga"
      }
    },
    {
      id: "ag-028",
      level: "A",
      title: "mengingat bahwa",
      pattern: "mengingat bahwa + 文",
      meaning: "〜であることを考えると",
      explanation: "背景事情を理由として提示する。文頭に置くと、その後の判断の根拠になる。",
      examples: [
        ["Mengingat bahwa risiko meningkat, regulasi perlu diperketat.", "リスクが高まっていることを考えると、規制を強化する必要があります。"],
        ["Mengingat bahwa data belum lengkap, simpulan itu perlu hati-hati.", "データがまだ不十分であることを考えると、その結論には注意が必要です。"]
      ],
      practice: {
        prompt: "「費用が限られていることを考えると」を作る。",
        answer: "mengingat bahwa biaya terbatas"
      }
    },
    {
      id: "ag-029",
      level: "A",
      title: "sepanjang",
      pattern: "sepanjang + 文",
      meaning: "〜する限り",
      explanation: "条件や範囲を示す。時間の『沿って』ではなく条件として読む場合がある。",
      examples: [
        ["Kebijakan itu dapat diterapkan sepanjang data tersedia.", "データが利用可能である限り、その政策は実施できます。"],
        ["Kerja sama akan berjalan sepanjang ada kepercayaan.", "信頼がある限り、協力は進むでしょう。"]
      ],
      practice: {
        prompt: "「法律に反しない限り」を作る。",
        answer: "sepanjang tidak bertentangan dengan hukum"
      }
    },
    {
      id: "ag-030",
      level: "A",
      title: "sekiranya",
      pattern: "sekiranya + 文",
      meaning: "もし〜であれば",
      explanation: "andaikata に近い仮定表現で、やや硬い。政策提案や仮説で使われる。",
      examples: [
        ["Sekiranya dana tersedia, program itu dapat diperluas.", "資金があれば、その計画は拡大できます。"],
        ["Sekiranya pendekatan ini gagal, strategi lain diperlukan.", "このアプローチが失敗すれば、別の戦略が必要です。"]
      ],
      practice: {
        prompt: "「もし時間があれば」を sekiranya で作る。",
        answer: "sekiranya ada waktu"
      }
    },
    {
      id: "ag-031",
      level: "A",
      title: "andaikata",
      pattern: "andaikata + 文",
      meaning: "仮に〜なら",
      explanation: "現実とは限らない仮定を置く表現。論理実験のような文脈で使える。",
      examples: [
        ["Andaikata kebijakan itu diterapkan, dampaknya belum tentu positif.", "仮にその政策が実施されても、影響が必ずしも肯定的とは限りません。"],
        ["Andaikata data tersedia, analisis bisa lebih akurat.", "仮にデータがあれば、分析はより正確になります。"]
      ],
      practice: {
        prompt: "「仮に予算が増えれば」を作る。",
        answer: "andaikata anggaran meningkat"
      }
    },
    {
      id: "ag-032",
      level: "A",
      title: "paling tidak",
      pattern: "paling tidak + 文 / 数量",
      meaning: "少なくとも",
      explanation: "主張を控えめに限定する。setidaknya より口語にも文語にも広く使える。",
      examples: [
        ["Paling tidak, kebijakan itu membuka ruang dialog.", "少なくとも、その政策は対話の余地を開きます。"],
        ["Diperlukan paling tidak tiga indikator.", "少なくとも3つの指標が必要です。"]
      ],
      practice: {
        prompt: "「少なくとも議論が必要です」を作る。",
        answer: "Paling tidak, diperlukan diskusi."
      }
    },
    {
      id: "ag-033",
      level: "A",
      title: "justru",
      pattern: "justru + 文",
      meaning: "むしろ、かえって",
      explanation: "予想と反対の評価や結果を示す。筆者の強調点を読む手がかり。",
      examples: [
        ["Pembatasan itu justru memperkuat resistensi warga.", "その制限はむしろ住民の抵抗を強めました。"],
        ["Kritik justru diperlukan untuk memperbaiki kebijakan.", "批判はむしろ政策を改善するために必要です。"]
      ],
      practice: {
        prompt: "「それはむしろ問題を広げました」を作る。",
        answer: "Hal itu justru memperluas masalah."
      }
    },
    {
      id: "ag-034",
      level: "A",
      title: "menyangkut",
      pattern: "menyangkut + 名詞",
      meaning: "〜に関わる",
      explanation: "mengenai より『関係・利害に及ぶ』感じが強い。抽象名詞とよく使う。",
      examples: [
        ["Isu itu menyangkut hak dasar warga.", "その問題は住民の基本的権利に関わります。"],
        ["Keputusan ini menyangkut masa depan pendidikan.", "この決定は教育の将来に関わります。"]
      ],
      practice: {
        prompt: "「公共の利益に関わる」を作る。",
        answer: "menyangkut kepentingan publik"
      }
    },
    {
      id: "ag-035",
      level: "A",
      title: "berimplikasi pada",
      pattern: "A berimplikasi pada B",
      meaning: "AはBに影響・含意を持つ",
      explanation: "直接的な原因よりも、制度的・論理的な帰結を示す。",
      examples: [
        ["Perubahan regulasi berimplikasi pada biaya produksi.", "規制変更は生産費に影響を及ぼします。"],
        ["Digitalisasi berimplikasi pada perlindungan data.", "デジタル化はデータ保護に含意を持ちます。"]
      ],
      practice: {
        prompt: "「その決定は住民の権利に影響を持ちます」を作る。",
        answer: "Keputusan itu berimplikasi pada hak warga."
      }
    },
    {
      id: "ag-036",
      level: "A",
      title: "berorientasi pada",
      pattern: "berorientasi pada + 名詞",
      meaning: "〜を志向する、〜重視の",
      explanation: "政策や制度が何を目標にしているかを示す。",
      examples: [
        ["Pembangunan harus berorientasi pada keadilan sosial.", "開発は社会正義を志向しなければなりません。"],
        ["Layanan publik berorientasi pada kebutuhan warga.", "公共サービスは住民の必要を重視します。"]
      ],
      practice: {
        prompt: "「環境を重視した政策」を作る。",
        answer: "kebijakan yang berorientasi pada lingkungan"
      }
    },
    {
      id: "ag-037",
      level: "A",
      title: "berujung pada",
      pattern: "A berujung pada B",
      meaning: "Aは最終的にBに至る",
      explanation: "一連の過程の帰結を示す。やや悪い結果に使われることも多い。",
      examples: [
        ["Kurangnya pengawasan berujung pada penyalahgunaan dana.", "監督不足は最終的に資金の不正使用に至りました。"],
        ["Konflik berkepanjangan berujung pada krisis kemanusiaan.", "長引く紛争は人道危機に至りました。"]
      ],
      practice: {
        prompt: "「不平等は対立に至る」を作る。",
        answer: "Ketimpangan berujung pada konflik."
      }
    },
    {
      id: "ag-038",
      level: "A",
      title: "diperlukan adanya",
      pattern: "diperlukan adanya + 名詞",
      meaning: "〜の存在が必要である",
      explanation: "硬い公式表現。日本語では『〜が必要である』と自然に訳す。",
      examples: [
        ["Diperlukan adanya mekanisme pengawasan yang jelas.", "明確な監督の仕組みが必要です。"],
        ["Diperlukan adanya koordinasi antarinstansi.", "機関間の調整が必要です。"]
      ],
      practice: {
        prompt: "「透明性が必要です」を硬く作る。",
        answer: "Diperlukan adanya transparansi."
      }
    },
    {
      id: "ag-039",
      level: "A",
      title: "perlu digarisbawahi bahwa",
      pattern: "perlu digarisbawahi bahwa + 文",
      meaning: "〜という点を強調すべきである",
      explanation: "筆者が重要点を明示する表現。長文読解では結論や主張の目印になる。",
      examples: [
        ["Perlu digarisbawahi bahwa akses bukan satu-satunya masalah.", "アクセスが唯一の問題ではない点を強調すべきです。"],
        ["Perlu digarisbawahi bahwa data ini masih terbatas.", "このデータはまだ限定的である点を強調すべきです。"]
      ],
      practice: {
        prompt: "「費用が主要な障害である点を強調すべきです」を作る。",
        answer: "Perlu digarisbawahi bahwa biaya merupakan hambatan utama."
      }
    },
    {
      id: "ag-040",
      level: "A",
      title: "dapat dikatakan bahwa",
      pattern: "dapat dikatakan bahwa + 文",
      meaning: "〜と言える",
      explanation: "断定を少し和らげながら結論を述べる表現。A級の要約・翻訳でも便利。",
      examples: [
        ["Dapat dikatakan bahwa reformasi itu belum selesai.", "その改革はまだ終わっていないと言えます。"],
        ["Dapat dikatakan bahwa kebijakan ini memiliki dampak luas.", "この政策は広範な影響を持つと言えます。"]
      ],
      practice: {
        prompt: "「この制度は有効だと言えます」を作る。",
        answer: "Dapat dikatakan bahwa sistem ini efektif."
      }
    }
  );
})();
