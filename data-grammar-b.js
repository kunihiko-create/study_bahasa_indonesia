(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData) {
    return;
  }

  appData.grammarItems = appData.grammarItems || [];

  appData.grammarItems.push(
    {
      id: "bg-001",
      level: "B",
      title: "接辞の組み合わせ",
      pattern: "meN- + 語幹 + -kan / -i",
      meaning: "対象・相手・方向を細かく表す",
      explanation: "B級では単に形を覚えるだけでなく、-kan と -i が文中で何を目的語にするかを読む必要がある。",
      examples: [
        ["Pemerintah menyalurkan bantuan kepada warga.", "政府は住民に支援物資を配給します。"],
        ["Pemerintah mengirimi warga bantuan.", "政府は住民に支援物資を送ります。"]
      ],
      practice: {
        prompt: "「会社は顧客に情報を提供します」を作る。",
        answer: "Perusahaan memberikan informasi kepada pelanggan."
      }
    },
    {
      id: "bg-002",
      level: "B",
      title: "memper-",
      pattern: "memper- + 形容詞 / 語幹",
      meaning: "より〜にする、〜を強化する",
      explanation: "形容詞・状態語から変化を起こす他動詞を作る。政策・制度・改善の文脈でよく出る。memperkenalkan のように -kan を伴う形もある。",
      examples: [
        ["Pemerintah mempercepat pembangunan infrastruktur.", "政府はインフラ整備を加速させます。"],
        ["Program itu memperkuat ketahanan pangan.", "その計画は食料の強靭性を高めます。"]
      ],
      practice: {
        prompt: "「その制度は透明性を強めます」を作る。",
        answer: "Sistem itu memperkuat transparansi."
      }
    },
    {
      id: "bg-003",
      level: "B",
      title: "memper-i",
      pattern: "memper- + 語幹 + -i",
      meaning: "〜に対してより強く働きかける",
      explanation: "memperbaiki, memperbarui など、対象を直接変化させる語で頻出。-kan より対象が前面に出ることが多い。",
      examples: [
        ["Kami memperbaiki sistem pelayanan.", "私たちはサービス制度を改善します。"],
        ["Perusahaan memperbarui data pelanggan.", "会社は顧客データを更新します。"]
      ],
      practice: {
        prompt: "「政府は規則を見直します」を作る。",
        answer: "Pemerintah memperbarui peraturan."
      }
    },
    {
      id: "bg-004",
      level: "B",
      title: "受動態の選択",
      pattern: "di- 受動 / 目的語焦点",
      meaning: "動作を受けるものを前に出す",
      explanation: "動作主が一般名詞なら di-、saya/kami など人称代名詞なら目的語焦点の形がよく使われる。",
      examples: [
        ["Usulan itu disetujui oleh pemerintah.", "その提案は政府によって承認されました。"],
        ["Usulan itu kami setujui.", "その提案は私たちが承認しました。"]
      ],
      practice: {
        prompt: "「その資料は私が確認しました」を作る。",
        answer: "Dokumen itu saya periksa."
      }
    },
    {
      id: "bg-005",
      level: "B",
      title: "di- と ter-",
      pattern: "di- + 動詞 / ter- + 状態",
      meaning: "意図的に〜される / 結果として〜されている",
      explanation: "di- は行為、ter- は状態や可能を表すことが多い。読解では出来事か状態かを見分ける。",
      examples: [
        ["Pintu itu ditutup oleh petugas.", "そのドアは係員によって閉められました。"],
        ["Pintu itu tertutup sejak pagi.", "そのドアは朝から閉まっています。"]
      ],
      practice: {
        prompt: "「その名前はリストに書かれています」を作る。",
        answer: "Nama itu tertulis di daftar."
      }
    },
    {
      id: "bg-006",
      level: "B",
      title: "ter- 最上級",
      pattern: "ter- + 形容詞",
      meaning: "最も〜",
      explanation: "paling と同じ最上級だが、tertua, terbesar, terbaik など決まった形でよく使われる。",
      examples: [
        ["Jakarta merupakan kota terbesar di Indonesia.", "ジャカルタはインドネシア最大の都市です。"],
        ["Ini adalah pilihan terbaik bagi warga.", "これは住民にとって最良の選択です。"]
      ],
      practice: {
        prompt: "「最も重要な問題」を作る。",
        answer: "masalah terpenting"
      }
    },
    {
      id: "bg-007",
      level: "B",
      title: "ter- 可能",
      pattern: "ter- + 動詞",
      meaning: "〜できる、〜され得る",
      explanation: "terlihat, terdengar, terjangkau など、可能性や到達可能性を表す語として覚える。",
      examples: [
        ["Dampaknya terlihat jelas.", "その影響ははっきり見えます。"],
        ["Harga rumah itu tidak terjangkau oleh warga.", "その住宅価格は住民には手が届きません。"]
      ],
      practice: {
        prompt: "「その音はここから聞こえます」を作る。",
        answer: "Suara itu terdengar dari sini."
      }
    },
    {
      id: "bg-008",
      level: "B",
      title: "ke-an 被害と過剰",
      pattern: "ke- + 語幹 + -an",
      meaning: "〜に遭う、〜すぎる",
      explanation: "kehujanan, ketinggalan, kebesaran など、被害や過剰な状態を表す。",
      examples: [
        ["Warga kehujanan saat menunggu bus.", "住民はバスを待つ間に雨に降られました。"],
        ["Baju itu kebesaran untuk anak saya.", "その服は私の子どもには大きすぎます。"]
      ],
      practice: {
        prompt: "「私は電車に乗り遅れました」を作る。",
        answer: "Saya ketinggalan kereta."
      }
    },
    {
      id: "bg-009",
      level: "B",
      title: "名詞化: peN-an",
      pattern: "peN- + 語幹 + -an",
      meaning: "行為・過程・制度",
      explanation: "B級では抽象名詞が多く出る。動詞を名詞化して政策や制度を表す文を読む。",
      examples: [
        ["Pengawasan lingkungan perlu ditingkatkan.", "環境監督は強化される必要があります。"],
        ["Pembiayaan proyek itu berasal dari pemerintah.", "その事業の資金は政府から出ています。"]
      ],
      practice: {
        prompt: "awasi から「監督」を作る。",
        answer: "pengawasan"
      }
    },
    {
      id: "bg-010",
      level: "B",
      title: "名詞化: per-an",
      pattern: "per- + 語幹 + -an",
      meaning: "制度・範囲・集合的な事柄",
      explanation: "perdagangan, perumahan, perkembangan など、社会制度や大きな過程を表すことが多い。",
      examples: [
        ["Perdagangan digital berkembang cepat.", "デジタル商業は急速に発展しています。"],
        ["Perumahan rakyat menjadi prioritas.", "国民向け住宅は優先事項になっています。"]
      ],
      practice: {
        prompt: "kembang から「発展」を作る。",
        answer: "perkembangan"
      }
    },
    {
      id: "bg-011",
      level: "B",
      title: "名詞化: ke-an",
      pattern: "ke- + 語幹 + -an",
      meaning: "状態・性質・抽象概念",
      explanation: "keberlanjutan, ketahanan, keterbukaan など、論説文の中心語になりやすい。",
      examples: [
        ["Keberlanjutan program harus dijaga.", "計画の持続可能性は守られなければなりません。"],
        ["Ketahanan ekonomi daerah meningkat.", "地域経済の強靭性が高まりました。"]
      ],
      practice: {
        prompt: "tahan から「強靭性、持久力」を作る。",
        answer: "ketahanan"
      }
    },
    {
      id: "bg-012",
      level: "B",
      title: "名詞化: -nya",
      pattern: "文 / 形容詞 / 動詞 + -nya",
      meaning: "〜であること、〜すること",
      explanation: "-nya は既知の物を指すだけでなく、文全体を名詞のように扱う働きがある。",
      examples: [
        ["Sulitnya akses menjadi masalah utama.", "アクセスの難しさが主な問題になっています。"],
        ["Naiknya harga memengaruhi warga.", "価格上昇は住民に影響を与えます。"]
      ],
      practice: {
        prompt: "「サービスが遅いこと」を作る。",
        answer: "lambatnya pelayanan"
      }
    },
    {
      id: "bg-013",
      level: "B",
      title: "yang 名詞節",
      pattern: "yang + 述語",
      meaning: "〜するもの、〜であること",
      explanation: "yang は名詞を修飾するだけでなく、節全体を名詞のように使うことがある。",
      examples: [
        ["Yang menjadi masalah adalah biaya.", "問題になっているのは費用です。"],
        ["Yang diperlukan bukan hanya dana.", "必要なのは資金だけではありません。"]
      ],
      practice: {
        prompt: "「重要なのは安全です」を作る。",
        answer: "Yang penting adalah keselamatan."
      }
    },
    {
      id: "bg-014",
      level: "B",
      title: "bahwa 節",
      pattern: "動詞 + bahwa + 文",
      meaning: "〜ということ",
      explanation: "menyatakan, menunjukkan, menegaskan などの後ろで内容を説明する。",
      examples: [
        ["Data menunjukkan bahwa harga meningkat.", "データは価格が上昇したことを示しています。"],
        ["Pemerintah menegaskan bahwa program itu penting.", "政府はその計画が重要だと強調しました。"]
      ],
      practice: {
        prompt: "「調査は需要が増えたことを示しています」を作る。",
        answer: "Penelitian menunjukkan bahwa permintaan meningkat."
      }
    },
    {
      id: "bg-015",
      level: "B",
      title: "apakah 間接疑問",
      pattern: "memastikan / menanyakan + apakah + 文",
      meaning: "〜かどうか",
      explanation: "直接疑問だけでなく、文の中で「〜かどうか」を表す。",
      examples: [
        ["Kami belum tahu apakah kebijakan itu efektif.", "私たちはその政策が有効かどうかまだ知りません。"],
        ["Petugas memeriksa apakah data sudah lengkap.", "係員はデータがそろっているか確認します。"]
      ],
      practice: {
        prompt: "「私は彼が来るかどうか知りません」を作る。",
        answer: "Saya tidak tahu apakah dia datang."
      }
    },
    {
      id: "bg-016",
      level: "B",
      title: "agar / supaya",
      pattern: "agar / supaya + 文",
      meaning: "〜するために、〜するように",
      explanation: "目的を表す。後ろには主語を含む節が来ることも多い。",
      examples: [
        ["Regulasi dibuat agar pasar lebih stabil.", "市場がより安定するように規制が作られました。"],
        ["Pemerintah memberi subsidi supaya harga terjangkau.", "価格が手頃になるよう政府は補助金を出します。"]
      ],
      practice: {
        prompt: "「住民が参加できるように」を作る。",
        answer: "agar warga dapat berpartisipasi"
      }
    },
    {
      id: "bg-017",
      level: "B",
      title: "guna / demi",
      pattern: "guna + 動詞 / demi + 名詞",
      meaning: "〜するために、〜のために",
      explanation: "guna は目的、demi は利益や価値を表す硬めの表現。",
      examples: [
        ["Data dikumpulkan guna menyusun kebijakan.", "政策を策定するためにデータが集められました。"],
        ["Mereka bekerja demi kepentingan publik.", "彼らは公共の利益のために働いています。"]
      ],
      practice: {
        prompt: "「環境を守るために」を guna で作る。",
        answer: "guna melindungi lingkungan"
      }
    },
    {
      id: "bg-018",
      level: "B",
      title: "dalam rangka",
      pattern: "dalam rangka + 名詞 / 動詞",
      meaning: "〜の一環として、〜するために",
      explanation: "公式文書やニュースで、事業の目的や枠組みを示す。",
      examples: [
        ["Program ini dilakukan dalam rangka meningkatkan kualitas pendidikan.", "この計画は教育の質を高めるために行われます。"],
        ["Pelatihan diadakan dalam rangka reformasi birokrasi.", "研修は官僚制度改革の一環として開催されます。"]
      ],
      practice: {
        prompt: "「公共サービス改善の一環として」を作る。",
        answer: "dalam rangka perbaikan pelayanan publik"
      }
    },
    {
      id: "bg-019",
      level: "B",
      title: "seiring dengan",
      pattern: "seiring dengan + 名詞",
      meaning: "〜に伴って",
      explanation: "変化が同時に進むことを表す。経済・社会変化の説明でよく使う。",
      examples: [
        ["Permintaan meningkat seiring dengan pertumbuhan ekonomi.", "経済成長に伴って需要が増えました。"],
        ["Risiko keamanan naik seiring dengan digitalisasi.", "デジタル化に伴って安全上のリスクが高まりました。"]
      ],
      practice: {
        prompt: "「人口増加に伴って」を作る。",
        answer: "seiring dengan pertumbuhan penduduk"
      }
    },
    {
      id: "bg-020",
      level: "B",
      title: "terkait dengan",
      pattern: "terkait dengan + 名詞",
      meaning: "〜に関連した",
      explanation: "berkaitan dengan より硬めで、行政文書・報道でよく使われる。",
      examples: [
        ["Masalah itu terkait dengan kebijakan transportasi.", "その問題は交通政策に関連しています。"],
        ["Data terkait dengan kesehatan harus dilindungi.", "健康に関するデータは保護されなければなりません。"]
      ],
      practice: {
        prompt: "「教育に関連した問題」を作る。",
        answer: "masalah terkait dengan pendidikan"
      }
    },
    {
      id: "bg-021",
      level: "B",
      title: "berdasarkan",
      pattern: "berdasarkan + 名詞",
      meaning: "〜に基づいて",
      explanation: "根拠や資料を示す。文頭に置かれることも多い。",
      examples: [
        ["Berdasarkan survei terbaru, kepuasan warga meningkat.", "最新調査に基づくと、住民満足度は上がりました。"],
        ["Keputusan dibuat berdasarkan data yang tersedia.", "決定は利用可能なデータに基づいて行われました。"]
      ],
      practice: {
        prompt: "「その報告に基づいて」を作る。",
        answer: "berdasarkan laporan itu"
      }
    },
    {
      id: "bg-022",
      level: "B",
      title: "mengingat",
      pattern: "mengingat + 名詞 / 文",
      meaning: "〜を考慮すると",
      explanation: "理由や背景を示して、その後の判断につなげる表現。",
      examples: [
        ["Mengingat risikonya besar, proyek itu ditunda.", "リスクが大きいことを考慮して、その事業は延期されました。"],
        ["Mengingat biaya yang terbatas, program diprioritaskan.", "限られた費用を考慮して、計画は優先順位づけされました。"]
      ],
      practice: {
        prompt: "「状況を考慮すると」を作る。",
        answer: "mengingat situasi tersebut"
      }
    },
    {
      id: "bg-023",
      level: "B",
      title: "terlepas dari",
      pattern: "terlepas dari + 名詞",
      meaning: "〜にかかわらず、〜とは別に",
      explanation: "条件や評価から切り離して述べるときに使う。",
      examples: [
        ["Terlepas dari hasilnya, proses itu penting.", "結果にかかわらず、その過程は重要です。"],
        ["Terlepas dari kritik, kebijakan itu tetap diterapkan.", "批判にかかわらず、その政策は実施され続けました。"]
      ],
      practice: {
        prompt: "「費用にかかわらず」を作る。",
        answer: "terlepas dari biaya"
      }
    },
    {
      id: "bg-024",
      level: "B",
      title: "bukan sekadar ... melainkan",
      pattern: "bukan sekadar A, melainkan B",
      meaning: "単にAではなくBである",
      explanation: "対比しながら重要な点を強調する論説文の表現。",
      examples: [
        ["Masalah itu bukan sekadar ekonomi, melainkan juga sosial.", "その問題は単に経済的なものではなく、社会的なものでもあります。"],
        ["Pendidikan bukan sekadar pengetahuan, melainkan pembentukan karakter.", "教育は単なる知識ではなく、人格形成です。"]
      ],
      practice: {
        prompt: "「これは単なる技術問題ではなく制度問題です」を作る。",
        answer: "Ini bukan sekadar masalah teknis, melainkan masalah sistem."
      }
    },
    {
      id: "bg-025",
      level: "B",
      title: "tidak hanya ... tetapi juga",
      pattern: "tidak hanya A, tetapi juga B",
      meaning: "AだけでなくBも",
      explanation: "情報を追加して主張を強める。bukan hanya も同じように使う。",
      examples: [
        ["Program itu tidak hanya murah, tetapi juga efektif.", "その計画は安いだけでなく有効です。"],
        ["Masalah ini tidak hanya terjadi di kota, tetapi juga di desa.", "この問題は都市だけでなく村でも起きています。"]
      ],
      practice: {
        prompt: "「この政策は重要なだけでなく緊急です」を作る。",
        answer: "Kebijakan ini tidak hanya penting, tetapi juga mendesak."
      }
    },
    {
      id: "bg-026",
      level: "B",
      title: "baik ... maupun",
      pattern: "baik A maupun B",
      meaning: "AもBも",
      explanation: "二つの要素を並列して、両方に同じことが当てはまると示す。",
      examples: [
        ["Baik pemerintah maupun masyarakat harus bekerja sama.", "政府も社会も協力しなければなりません。"],
        ["Baik data maupun pengalaman diperlukan.", "データも経験も必要です。"]
      ],
      practice: {
        prompt: "「都市でも農村でも」を作る。",
        answer: "baik di kota maupun di desa"
      }
    },
    {
      id: "bg-027",
      level: "B",
      title: "semakin ... semakin",
      pattern: "semakin A, semakin B",
      meaning: "AすればするほどB",
      explanation: "二つの変化が連動することを表す。",
      examples: [
        ["Semakin tinggi harga, semakin rendah permintaan.", "価格が高くなるほど需要は低くなります。"],
        ["Semakin baik layanan, semakin tinggi kepuasan warga.", "サービスが良くなるほど住民満足度は高くなります。"]
      ],
      practice: {
        prompt: "「速ければ速いほど良い」を作る。",
        answer: "Semakin cepat, semakin baik."
      }
    },
    {
      id: "bg-028",
      level: "B",
      title: "kian / makin",
      pattern: "kian / makin + 形容詞",
      meaning: "ますます〜",
      explanation: "semakin と同じく変化の進行を表す。kian はやや書きことば寄り。",
      examples: [
        ["Persaingan ekonomi kian ketat.", "経済競争はますます厳しくなっています。"],
        ["Akses internet makin luas.", "インターネットアクセスはますます広がっています。"]
      ],
      practice: {
        prompt: "「問題はますます複雑です」を作る。",
        answer: "Masalahnya kian kompleks."
      }
    },
    {
      id: "bg-029",
      level: "B",
      title: "seolah-olah / seakan-akan",
      pattern: "seolah-olah / seakan-akan + 文",
      meaning: "まるで〜のように",
      explanation: "実際とは限らない様子や比喩的な説明に使う。",
      examples: [
        ["Dia berbicara seolah-olah tahu semuanya.", "彼はまるですべてを知っているかのように話します。"],
        ["Kota itu seakan-akan tidak pernah tidur.", "その都市はまるで眠らないかのようです。"]
      ],
      practice: {
        prompt: "「彼は何も起きなかったかのように笑いました」を作る。",
        answer: "Dia tersenyum seolah-olah tidak terjadi apa-apa."
      }
    },
    {
      id: "bg-030",
      level: "B",
      title: "sekalipun",
      pattern: "sekalipun + 文",
      meaning: "たとえ〜でも",
      explanation: "meskipun より強い譲歩を表すことがある。文末に置かれることもある。",
      examples: [
        ["Sekalipun sulit, program itu harus dilanjutkan.", "たとえ難しくても、その計画は続けられなければなりません。"],
        ["Dia tetap bekerja, lelah sekalipun.", "疲れていても彼は働き続けます。"]
      ],
      practice: {
        prompt: "「たとえ高くても私は買います」を作る。",
        answer: "Sekalipun mahal, saya akan membeli."
      }
    },
    {
      id: "bg-031",
      level: "B",
      title: "kendati demikian",
      pattern: "文. Kendati demikian, 文.",
      meaning: "それにもかかわらず",
      explanation: "逆接を表す硬めの接続表現。論説文・ニュースでよく使う。",
      examples: [
        ["Biaya meningkat. Kendati demikian, proyek tetap berjalan.", "費用は増えました。それにもかかわらず、事業は続いています。"],
        ["Hasilnya belum maksimal. Kendati demikian, ada kemajuan.", "結果はまだ十分ではありません。それでも進展はあります。"]
      ],
      practice: {
        prompt: "「雨が降った。それでも行事は続いた」を作る。",
        answer: "Hujan turun. Kendati demikian, acara tetap berlangsung."
      }
    },
    {
      id: "bg-032",
      level: "B",
      title: "adapun",
      pattern: "Adapun + 名詞, 文",
      meaning: "さて〜については",
      explanation: "話題を切り替えたり、項目を立てて説明したりするときに使う。",
      examples: [
        ["Adapun biaya program, hal itu akan dibahas kemudian.", "さて計画の費用については、それは後で議論されます。"],
        ["Adapun hasil survei, sebagian besar warga setuju.", "調査結果については、住民の大半が賛成しています。"]
      ],
      practice: {
        prompt: "「参加者については、全員出席しました」を作る。",
        answer: "Adapun peserta, semuanya hadir."
      }
    },
    {
      id: "bg-033",
      level: "B",
      title: "alih-alih",
      pattern: "alih-alih + 動詞, 文",
      meaning: "〜する代わりに、〜どころか",
      explanation: "期待されたこととは違う結果を示す。逆方向の展開を読む手がかりになる。",
      examples: [
        ["Alih-alih menurun, harga justru naik.", "下がるどころか、価格はむしろ上がりました。"],
        ["Alih-alih membantu, kebijakan itu menambah beban.", "助けるどころか、その政策は負担を増やしました。"]
      ],
      practice: {
        prompt: "「改善するどころか悪化しました」を作る。",
        answer: "Alih-alih membaik, kondisinya memburuk."
      }
    },
    {
      id: "bg-034",
      level: "B",
      title: "bukan berarti",
      pattern: "A bukan berarti B",
      meaning: "AだからといってBという意味ではない",
      explanation: "誤解を避けて主張を調整する表現。論説文でよく出る。",
      examples: [
        ["Murah bukan berarti berkualitas rendah.", "安いからといって品質が低いという意味ではありません。"],
        ["Berbeda pendapat bukan berarti bermusuhan.", "意見が違うからといって敵対しているという意味ではありません。"]
      ],
      practice: {
        prompt: "「遅いからといって悪いという意味ではない」を作る。",
        answer: "Lambat bukan berarti buruk."
      }
    },
    {
      id: "bg-035",
      level: "B",
      title: "dengan demikian",
      pattern: "文. Dengan demikian, 文.",
      meaning: "したがって、このようにして",
      explanation: "前の内容から結論を導く表現。論理展開をつかむ重要語。",
      examples: [
        ["Data sudah lengkap. Dengan demikian, keputusan dapat dibuat.", "データはそろいました。したがって、決定を行うことができます。"],
        ["Biaya turun. Dengan demikian, layanan menjadi lebih terjangkau.", "費用が下がりました。したがって、サービスはより手頃になります。"]
      ],
      practice: {
        prompt: "「したがって、計画は続けられます」を作る。",
        answer: "Dengan demikian, program dapat dilanjutkan."
      }
    },
    {
      id: "bg-036",
      level: "B",
      title: "akibatnya",
      pattern: "文. Akibatnya, 文.",
      meaning: "その結果、悪い結果として",
      explanation: "原因から結果を示す。sehingga より文全体を受ける接続表現。",
      examples: [
        ["Hujan turun deras. Akibatnya, jalan utama banjir.", "大雨が降りました。その結果、主要道路が冠水しました。"],
        ["Permintaan naik. Akibatnya, harga ikut meningkat.", "需要が増えました。その結果、価格も上がりました。"]
      ],
      practice: {
        prompt: "「その結果、交通が滞りました」を作る。",
        answer: "Akibatnya, lalu lintas terhambat."
      }
    },
    {
      id: "bg-037",
      level: "B",
      title: "berpotensi",
      pattern: "berpotensi + 動詞 / 名詞",
      meaning: "〜する可能性がある",
      explanation: "リスクや効果の可能性を表す。報道・分析文でよく使われる。",
      examples: [
        ["Kebijakan itu berpotensi meningkatkan investasi.", "その政策は投資を増やす可能性があります。"],
        ["Banjir berpotensi terjadi di wilayah pesisir.", "沿岸地域で洪水が起きる可能性があります。"]
      ],
      practice: {
        prompt: "「その問題は悪化する可能性があります」を作る。",
        answer: "Masalah itu berpotensi memburuk."
      }
    },
    {
      id: "bg-038",
      level: "B",
      title: "cenderung",
      pattern: "cenderung + 動詞 / 形容詞",
      meaning: "〜する傾向がある",
      explanation: "データや一般的傾向を述べるときに使う。",
      examples: [
        ["Harga pangan cenderung naik menjelang hari raya.", "祝日前には食料価格が上がる傾向があります。"],
        ["Anak muda cenderung menggunakan layanan digital.", "若者はデジタルサービスを使う傾向があります。"]
      ],
      practice: {
        prompt: "「需要は増える傾向があります」を作る。",
        answer: "Permintaan cenderung meningkat."
      }
    },
    {
      id: "bg-039",
      level: "B",
      title: "dianggap / dinilai",
      pattern: "dianggap / dinilai + 形容詞 / 名詞",
      meaning: "〜と見なされる、評価される",
      explanation: "評価や社会的認識を表す受動表現。論説文でよく使う。",
      examples: [
        ["Kebijakan itu dianggap efektif.", "その政策は有効だと見なされています。"],
        ["Program tersebut dinilai berhasil.", "その計画は成功したと評価されています。"]
      ],
      practice: {
        prompt: "「その方法は効率的だと評価されています」を作る。",
        answer: "Cara itu dinilai efisien."
      }
    },
    {
      id: "bg-040",
      level: "B",
      title: "diperkirakan / diharapkan",
      pattern: "diperkirakan / diharapkan + 文",
      meaning: "〜と見込まれる / 期待される",
      explanation: "予測と期待を表す受動表現。ニュースや報告書で頻出。",
      examples: [
        ["Ekonomi diperkirakan tumbuh tahun depan.", "経済は来年成長すると見込まれています。"],
        ["Program ini diharapkan meningkatkan kualitas layanan.", "この計画はサービス品質を高めることが期待されています。"]
      ],
      practice: {
        prompt: "「価格は下がると見込まれています」を作る。",
        answer: "Harga diperkirakan turun."
      }
    }
  );
})();
