(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData || !Array.isArray(appData.words)) {
    return;
  }

  const usedWords = new Set(appData.words.map((word) => word.word.toLowerCase()));
  const currentAWords = appData.words.filter((word) => word.level === "A");
  const currentMaxNumber = currentAWords.reduce((max, word) => {
    const match = /^a-(\d+)$/.exec(word.id);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);

  const candidates = [];

  function addCard(card) {
    candidates.push({
      level: "A",
      category: card.partOfSpeech,
      ...card
    });
  }

  const nounRows = [
    ["abstraksi", "抽象化", "abstraction"],
    ["afirmasi", "肯定、確認", "affirmation"],
    ["anomali", "異常、例外", "anomaly"],
    ["antagonisme", "対立、敵対関係", "antagonism"],
    ["artikulasi", "明確な表現、連結", "articulation"],
    ["asimilasi", "同化", "assimilation"],
    ["bias", "偏り、バイアス", "bias"],
    ["birokratisasi", "官僚化", "bureaucratization"],
    ["degradasi", "劣化、低下", "degradation"],
    ["dekonstruksi", "脱構築", "deconstruction"],
    ["deliberasi", "熟議", "deliberation"],
    ["demarkasi", "境界設定", "demarcation"],
    ["determinasi", "決定、決意", "determination"],
    ["dikotomi", "二分法", "dichotomy"],
    ["disintegrasi", "分裂、崩壊", "disintegration"],
    ["diskrepansi", "不一致、食い違い", "discrepancy"],
    ["disrupsi", "破壊的変化", "disruption"],
    ["diversifikasi", "多様化", "diversification"],
    ["eksternalitas", "外部性", "externality"],
    ["elaborasi", "詳述", "elaboration"],
    ["emansipasi", "解放、自立", "emancipation"],
    ["eskalasi", "拡大、激化", "escalation"],
    ["fragmentasi", "断片化", "fragmentation"],
    ["hegemoni", "覇権", "hegemony"],
    ["hipotesis", "仮説", "hypothesis"],
    ["imperatif", "必須事項、命令形", "imperative"],
    ["inkonsistensi", "不一致、一貫性のなさ", "inconsistency"],
    ["institusionalisasi", "制度化", "institutionalization"],
    ["instrumentalisasi", "手段化", "instrumentalization"],
    ["intensifikasi", "強化、集約化", "intensification"],
    ["interdependensi", "相互依存", "interdependence"],
    ["internalisasi", "内面化", "internalization"],
    ["interpretasi", "解釈", "interpretation"],
    ["keterasingan", "疎外", "alienation"],
    ["koherensi", "一貫性、整合性", "coherence"],
    ["komodifikasi", "商品化", "commodification"],
    ["konfigurasi", "構成、配置", "configuration"],
    ["kontestasi", "争奪、競合", "contestation"],
    ["konvergensi", "収束", "convergence"],
    ["legislasi", "立法", "legislation"],
    ["marjinalisasi", "周縁化", "marginalization"],
    ["modalitas", "様相、モダリティ", "modality"],
    ["monopoli", "独占", "monopoly"],
    ["objektivitas", "客観性", "objectivity"],
    ["otoritarianisme", "権威主義", "authoritarianism"],
    ["pelanggengan", "永続化、固定化", "perpetuation"],
    ["pembakuan", "標準化", "standardization"],
    ["pendisiplinan", "規律化", "disciplining"],
    ["pengarusutamaan", "主流化", "mainstreaming"],
    ["penyeragaman", "画一化", "uniformization"],
    ["perampasan", "奪取、収奪", "seizure; dispossession"],
    ["perdebatan", "論争", "debate"],
    ["pergesekan", "摩擦", "friction"],
    ["pertautan", "結びつき", "linkage"],
    ["pluralitas", "多元性", "plurality"],
    ["polarisasi", "分極化", "polarization"],
    ["preseden", "先例", "precedent"],
    ["privatisasi", "民営化", "privatization"],
    ["radikalisasi", "急進化", "radicalization"],
    ["rasionalisasi", "合理化", "rationalization"],
    ["rekonsiliasi", "和解", "reconciliation"],
    ["rekonstruksi", "再構築", "reconstruction"],
    ["representasi", "表象、代表", "representation"],
    ["resiprositas", "相互性", "reciprocity"],
    ["restrukturisasi", "再編", "restructuring"],
    ["revitalisasi", "再活性化", "revitalization"],
    ["segmentasi", "区分、分割", "segmentation"],
    ["sentralisasi", "中央集権化", "centralization"],
    ["subordinasi", "従属", "subordination"],
    ["subjektivitas", "主観性", "subjectivity"],
    ["transformasi", "変革", "transformation"],
    ["universalisme", "普遍主義", "universalism"],
    ["variabilitas", "変動性", "variability"],
    ["verifikasi", "検証", "verification"],
    ["diskursus", "言説", "discourse"],
    ["wacana", "言説、ディスコース", "discourse"],
    ["dinamika", "力学、動態", "dynamics"],
    ["narasi", "語り、叙述", "narrative"],
    ["paradigma", "枠組み、考え方", "paradigm"],
    ["kontradiksi", "矛盾", "contradiction"],
    ["korelasi", "相関", "correlation"],
    ["justifikasi", "正当化", "justification"],
    ["konsolidasi", "統合、強化", "consolidation"],
    ["akumulasi", "蓄積", "accumulation"],
    ["ambivalensi", "両義性", "ambivalence"],
    ["reproduksi", "再生産", "reproduction"],
    ["sintesis", "総合", "synthesis"],
    ["mobilisasi", "動員", "mobilization"]
  ];

  // 動詞は目的語との相性が語ごとに違うため、全行に例文を明記する。
  // [word, japanese, english, example, exampleJapanese]
  const verbRows = [
    ["mengaburkan", "曖昧にする", "to obscure", "Pernyataan itu mengaburkan persoalan utama.", "その発言は主要な問題を曖昧にします。"],
    ["mengafirmasi", "肯定する、確認する", "to affirm", "Penelitian ini mengafirmasi temuan sebelumnya.", "この研究は先行研究の知見を裏づけます。"],
    ["mengakomodasi", "受け入れる、対応する", "to accommodate", "Kebijakan itu mengakomodasi kepentingan warga.", "その政策は住民の利益を受け入れます。"],
    ["mengartikulasikan", "明確に表現する", "to articulate", "Penulis mengartikulasikan gagasannya dengan jelas.", "筆者は自らの考えを明確に表現します。"],
    ["mengasumsikan", "仮定する", "to assume", "Model ini mengasumsikan pasar yang stabil.", "このモデルは安定した市場を仮定します。"],
    ["mendelegitimasi", "正当性を失わせる", "to delegitimize", "Praktik korupsi mendelegitimasi lembaga negara.", "汚職の慣行は国家機関の正当性を失わせます。"],
    ["mendepolitisasi", "脱政治化する", "to depoliticize", "Pendekatan teknokratis mendepolitisasi isu publik.", "テクノクラート的アプローチは公共の問題を脱政治化します。"],
    ["mendiseminasikan", "普及させる", "to disseminate", "Lembaga itu mendiseminasikan hasil penelitian.", "その機関は研究成果を普及させます。"],
    ["mendiversifikasi", "多様化する", "to diversify", "Pemerintah mendiversifikasi sumber energi.", "政府はエネルギー源を多様化します。"],
    ["menegosiasikan", "交渉する、調整する", "to negotiate", "Kedua pihak menegosiasikan syarat kerja sama.", "両者は協力の条件を交渉します。"],
    ["mengeksternalisasi", "外部化する", "to externalize", "Perusahaan mengeksternalisasi biaya lingkungan.", "企業は環境コストを外部化します。"],
    ["mengelaborasi", "詳述する", "to elaborate", "Bab ini mengelaborasi konsep tersebut.", "この章はその概念を詳述します。"],
    ["mengeskalasi", "激化させる", "to escalate", "Tindakan itu mengeskalasi konflik.", "その行動は対立を激化させます。"],
    ["menginstitusionalisasikan", "制度化する", "to institutionalize", "Pemerintah menginstitusionalisasikan mekanisme partisipasi.", "政府は参加の仕組みを制度化します。"],
    ["menginternalisasi", "内面化する", "to internalize", "Siswa menginternalisasi nilai-nilai tersebut.", "生徒たちはそれらの価値観を内面化します。"],
    ["mengintervensi", "介入する", "to intervene", "Negara mengintervensi pasar untuk menjaga harga.", "国家は価格を守るために市場に介入します。"],
    ["mengkonseptualisasikan", "概念化する", "to conceptualize", "Studi ini mengkonseptualisasikan kemiskinan secara multidimensional.", "本研究は貧困を多次元的に概念化します。"],
    ["mengonsolidasikan", "統合する、強化する", "to consolidate", "Partai itu mengonsolidasikan kekuasaannya.", "その政党は権力を強固にします。"],
    ["mengontekstualisasikan", "文脈化する", "to contextualize", "Penulis mengontekstualisasikan data dalam sejarah lokal.", "筆者はデータを地域の歴史の中で文脈化します。"],
    ["mengonstruksi", "構築する", "to construct", "Media mengonstruksi citra publik.", "メディアは公共のイメージを構築します。"],
    ["mengorelasikan", "相関づける", "to correlate", "Peneliti mengorelasikan pendidikan dengan pendapatan.", "研究者は教育と所得を相関づけます。"],
    ["memarjinalkan", "周縁化する", "to marginalize", "Kebijakan itu memarjinalkan kelompok minoritas.", "その政策は少数派集団を周縁化します。"],
    ["memediasi", "仲介する", "to mediate", "Lembaga adat memediasi konflik tanah.", "慣習に基づく機関が土地紛争を仲介します。"],
    ["memetakan", "整理する、マッピングする", "to map", "Studi ini memetakan persoalan utama.", "本研究は主要な問題を整理します。"],
    ["memformulasikan", "定式化する", "to formulate", "Tim itu memformulasikan strategi baru.", "そのチームは新しい戦略を定式化します。"],
    ["memitigasi", "軽減する", "to mitigate", "Program ini memitigasi risiko bencana.", "このプログラムは災害リスクを軽減します。"],
    ["memobilisasi", "動員する", "to mobilize", "Organisasi itu memobilisasi dukungan publik.", "その組織は世論の支持を動員します。"],
    ["memodifikasi", "修正する", "to modify", "Peneliti memodifikasi model analisis.", "研究者は分析モデルを修正します。"],
    ["mempertautkan", "結びつける", "to link", "Teori ini mempertautkan ekonomi dengan budaya.", "この理論は経済と文化を結びつけます。"],
    ["memproblematisasi", "問題化する", "to problematize", "Kajian ini memproblematisasi konsep pembangunan.", "本研究は開発という概念を問い直します。"],
    ["mempromosikan", "促進する、宣伝する", "to promote", "Pemerintah mempromosikan pariwisata daerah.", "政府は地域観光を促進します。"],
    ["memvalidasi", "検証する、妥当性を確認する", "to validate", "Tim peneliti memvalidasi data survei.", "研究チームは調査データを検証します。"],
    ["menormalisasi", "正常化する、当然視させる", "to normalize", "Wacana itu menormalisasi ketimpangan.", "その言説は格差を当然のものと見せます。"],
    ["merefleksikan", "反映する、省察する", "to reflect", "Kebijakan itu merefleksikan kepentingan kelompok tertentu.", "その政策は特定の集団の利益を反映します。"],
    ["merekonsiliasi", "和解させる、調停する", "to reconcile", "Pendekatan ini merekonsiliasi dua pandangan yang bertentangan.", "このアプローチは対立する2つの見解を調停します。"],
    ["merekonstruksi", "再構築する", "to reconstruct", "Sejarawan merekonstruksi peristiwa itu.", "歴史家はその出来事を再構築します。"],
    ["merepresentasikan", "表象する、代表する", "to represent", "Lembaga itu merepresentasikan suara warga.", "その機関は住民の声を代表します。"],
    ["merestrukturisasi", "再編する", "to restructure", "Perusahaan merestrukturisasi utangnya.", "企業は債務を再編します。"],
    ["merevitalisasi", "再活性化する", "to revitalize", "Pemerintah kota merevitalisasi kawasan tua.", "市当局は旧市街を再活性化します。"],
    ["mensintesis", "総合する", "to synthesize", "Bab akhir mensintesis temuan penelitian.", "最終章は研究の知見を総合します。"]
  ];

  const adjectiveRows = [
    ["ambivalen", "両義的な", "ambivalent"],
    ["antagonistik", "敵対的な", "antagonistic"],
    ["asimetris", "非対称の", "asymmetric"],
    ["deliberatif", "熟議的な", "deliberative"],
    ["deterministik", "決定論的な", "deterministic"],
    ["diskursif", "言説的な", "discursive"],
    ["disruptif", "破壊的な", "disruptive"],
    ["eksplisit", "明示的な", "explicit"],
    ["eksponensial", "指数関数的な", "exponential"],
    ["emansipatoris", "解放的な", "emancipatory"],
    ["hegemonik", "覇権的な", "hegemonic"],
    ["implisit", "暗黙の", "implicit"],
    ["interdisipliner", "学際的な", "interdisciplinary"],
    ["komparatif", "比較の", "comparative"],
    ["kontradiktif", "矛盾した", "contradictory"],
    ["korelatif", "相関的な", "correlative"],
    ["kumulatif", "累積的な", "cumulative"],
    ["laten", "潜在的な", "latent"],
    ["legitim", "正当な", "legitimate"],
    ["liminal", "境界的な", "liminal"],
    ["multidimensional", "多次元の", "multidimensional"],
    ["normatif", "規範的な", "normative"],
    ["partikular", "個別的な", "particular"],
    ["performatif", "遂行的な", "performative"],
    ["prosedural", "手続き上の", "procedural"],
    ["reduksionis", "還元主義的な", "reductionist"],
    ["reflektif", "省察的な", "reflective"],
    ["resiprokal", "相互的な", "reciprocal"],
    ["retoris", "修辞的な", "rhetorical"],
    ["simultan", "同時の", "simultaneous"],
    ["spekulatif", "推測的な", "speculative"],
    ["substantif", "実質的な", "substantive"],
    ["transformatif", "変革的な", "transformative"],
    ["universal", "普遍的な", "universal"],
    ["valid", "妥当な", "valid"],
    ["empiris", "経験的な、実証的な", "empirical"],
    ["kritis", "批判的な", "critical"],
    ["sistemik", "システム全体の", "systemic"]
  ];

  // 機能語は文型が語ごとに違うため、全行に例文を明記する。
  // [word, japanese, english, partOfSpeech, example, exampleJapanese]
  const functionRows = [
    ["alih-alih", "〜するどころか、〜の代わりに", "instead of; rather than", "接続詞", "Alih-alih menyelesaikan masalah, kebijakan itu menimbulkan persoalan baru.", "問題を解決するどころか、その政策は新たな問題を生みました。"],
    ["andaikata", "仮に〜なら", "supposing that", "接続詞", "Andaikata anggaran mencukupi, program itu dapat diperluas.", "仮に予算が十分なら、その計画は拡大できます。"],
    ["bagaimanapun juga", "いずれにせよ", "in any case", "接続詞", "Bagaimanapun juga, hak warga harus dilindungi.", "いずれにせよ、住民の権利は守られなければなりません。"],
    ["bertolak dari", "〜を出発点として", "starting from", "前置詞", "Bertolak dari data itu, peneliti menyusun hipotesis.", "そのデータを出発点として、研究者は仮説を立てました。"],
    ["dalam konteks", "〜という文脈で", "in the context of", "前置詞", "Dalam konteks globalisasi, isu ini semakin penting.", "グローバル化という文脈で、この問題はますます重要です。"],
    ["dalam kerangka", "〜の枠組みで", "within the framework of", "前置詞", "Program itu dijalankan dalam kerangka otonomi daerah.", "その計画は地方自治の枠組みで実施されます。"],
    ["dengan sendirinya", "自然に、自ずと", "naturally; by itself", "副詞", "Masalah itu tidak akan selesai dengan sendirinya.", "その問題は自然には解決しません。"],
    ["di satu sisi", "一方では", "on one hand", "接続詞", "Di satu sisi, kebijakan itu efisien.", "一方では、その政策は効率的です。"],
    ["di sisi lain", "他方では", "on the other hand", "接続詞", "Di sisi lain, biayanya sangat tinggi.", "他方では、費用が非常に高いです。"],
    ["kendati demikian", "それにもかかわらず", "nevertheless", "接続詞", "Kendati demikian, program itu tetap dilanjutkan.", "それにもかかわらず、その計画は続けられました。"],
    ["lebih lanjut", "さらに", "furthermore", "接続詞", "Lebih lanjut, penulis membahas implikasi kebijakan itu.", "さらに、筆者はその政策の含意を論じます。"],
    ["pada gilirannya", "ひいては、次には", "in turn", "副詞", "Efisiensi meningkat, yang pada gilirannya menekan biaya.", "効率が上がり、それがひいては費用を抑えます。"],
    ["pada hakikatnya", "本質的には", "essentially", "副詞", "Pada hakikatnya, persoalan ini bersifat struktural.", "本質的には、この問題は構造的なものです。"],
    ["pada tataran", "〜のレベルで", "at the level of", "前置詞", "Pada tataran praktik, kebijakan itu sulit diterapkan.", "実践のレベルでは、その政策の実施は困難です。"],
    ["sebagaimana", "〜のように", "as; just as", "接続詞", "Sebagaimana dijelaskan sebelumnya, data masih terbatas.", "先に説明したように、データはまだ限られています。"],
    ["sejauh menyangkut", "〜に関する限り", "as far as concerns", "前置詞", "Sejauh menyangkut pembiayaan, rencana itu belum jelas.", "資金調達に関する限り、その計画はまだ不明確です。"],
    ["terlepas dari kenyataan bahwa", "〜という事実にかかわらず", "regardless of the fact that", "接続詞", "Terlepas dari kenyataan bahwa biayanya tinggi, program itu penting.", "費用が高いという事実にかかわらず、その計画は重要です。"],
    ["tidak terlepas dari", "〜と切り離せない", "inseparable from", "前置詞", "Krisis itu tidak terlepas dari faktor politik.", "その危機は政治的要因と切り離せません。"]
  ];

  nounRows.forEach(([word, japanese, english]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech: "名詞",
      example: `Konsep ${word} sering dibahas dalam kajian sosial.`,
      exampleJapanese: `${japanese.split("、")[0]}という概念は社会研究でよく論じられます。`,
      note: "A級で論説・研究・翻訳文に出やすい高度な抽象名詞。"
    });
  });

  verbRows.forEach(([word, japanese, english, example, exampleJapanese]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech: "動詞",
      example,
      exampleJapanese,
      note: "A級で学術文・政策文・評論文に出やすい高難度動詞。"
    });
  });

  adjectiveRows.forEach(([word, japanese, english]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech: "形容詞",
      example: `Pendekatan itu dianggap ${word}.`,
      exampleJapanese: `そのアプローチは${japanese.split("、")[0]}と見なされています。`,
      note: "A級の論説文で評価・性質・概念を精密に表す形容詞。"
    });
  });

  functionRows.forEach(([word, japanese, english, partOfSpeech, example, exampleJapanese]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example,
      exampleJapanese,
      note: "A級の長い論説文で論理展開を追うための表現。"
    });
  });

  // 以前はここで抽象名詞×専門分野の全組み合わせ(約4,500語)を機械生成していたが、
  // 実在しない不自然な連語が大量に混ざるため廃止した。
  // 語彙を増やす場合は上の各リストに実在の語を追加する。

  // 論説・文献・翻訳で頻出する実在語彙。全行に例文を明記する。
  // [word, japanese, english, partOfSpeech, example, exampleJapanese]
  const advancedRows = [
    // --- 名詞 ---
    ["kesadaran", "意識、自覚", "awareness", "名詞", "Kesadaran masyarakat tentang lingkungan meningkat.", "環境に対する社会の意識は高まっています。"],
    ["pemahaman", "理解", "understanding", "名詞", "Pemahaman lintas budaya makin penting.", "異文化理解はますます重要です。"],
    ["penafsiran", "解釈", "interpretation", "名詞", "Penafsiran undang-undang itu berbeda-beda.", "その法律の解釈はさまざまです。"],
    ["pandangan", "見解", "view; outlook", "名詞", "Pandangan kedua ahli itu berbeda.", "両専門家の見解は異なります。"],
    ["sudut pandang", "視点", "point of view", "名詞句", "Masalah itu perlu dilihat dari berbagai sudut pandang.", "その問題はさまざまな視点から見る必要があります。"],
    ["asas", "原則", "principle", "名詞", "Kebijakan itu bertentangan dengan asas keadilan.", "その政策は公正の原則に反しています。"],
    ["prinsip", "原則、信条", "principle", "名詞", "Dia memegang prinsip hidupnya.", "彼は自分の人生の原則を貫きます。"],
    ["landasan", "基盤、根拠", "foundation; basis", "名詞", "Penelitian itu menjadi landasan kebijakan.", "その研究は政策の基盤になっています。"],
    ["acuan", "基準、参照", "reference", "名詞", "Dokumen itu menjadi acuan utama.", "その文書は主要な基準になっています。"],
    ["tolok ukur", "尺度、基準", "benchmark", "名詞句", "Pendapatan bukan satu-satunya tolok ukur kesejahteraan.", "所得は豊かさの唯一の尺度ではありません。"],
    ["premis", "前提", "premise", "名詞", "Argumen itu dibangun atas premis yang lemah.", "その議論は弱い前提の上に築かれています。"],
    ["tesis", "主張、学位論文", "thesis", "名詞", "Tesis utama buku itu sederhana.", "その本の主要な主張は単純です。"],
    ["jurnal", "学術誌", "journal", "名詞", "Artikel itu terbit di jurnal internasional.", "その論文は国際学術誌に掲載されました。"],
    ["kajian", "研究、考察", "study", "名詞", "Kajian itu membahas dampak urbanisasi.", "その研究は都市化の影響を論じています。"],
    ["tinjauan", "概観、レビュー", "review", "名詞", "Bab dua berisi tinjauan pustaka.", "第2章は文献レビューを含みます。"],
    ["pustaka", "文献", "literature", "名詞", "Daftar pustaka ada di halaman akhir.", "参考文献一覧は最終ページにあります。"],
    ["metodologi", "方法論", "methodology", "名詞", "Metodologi penelitian itu dijelaskan secara rinci.", "その研究の方法論は詳細に説明されています。"],
    ["metode", "方法", "method", "名詞", "Metode baru itu lebih efektif.", "その新しい方法はより効果的です。"],
    ["temuan", "知見、発見", "finding", "名詞", "Temuan penelitian itu mengejutkan.", "その研究の知見は驚くべきものです。"],
    ["simpulan", "結論", "conclusion", "名詞", "Simpulan kajian itu perlu diuji lebih lanjut.", "その研究の結論はさらに検証される必要があります。"],
    ["nuansa", "ニュアンス", "nuance", "名詞", "Kata itu punya nuansa negatif.", "その語には否定的なニュアンスがあります。"],
    ["konotasi", "含意、コノテーション", "connotation", "名詞", "Istilah itu membawa konotasi politik.", "その用語は政治的な含みを持ちます。"],
    ["retorika", "レトリック、修辞", "rhetoric", "名詞", "Pidato itu penuh retorika.", "その演説はレトリックに満ちています。"],
    ["propaganda", "プロパガンダ", "propaganda", "名詞", "Media itu dituduh menyebarkan propaganda.", "そのメディアはプロパガンダを広めていると非難されています。"],
    ["sensor", "検閲", "censorship", "名詞", "Sensor pers dihapus setelah reformasi.", "報道検閲は改革後に廃止されました。"],
    ["kebebasan pers", "報道の自由", "freedom of the press", "名詞句", "Kebebasan pers dijamin undang-undang.", "報道の自由は法律で保障されています。"],
    ["diskriminasi", "差別", "discrimination", "名詞", "Diskriminasi dilarang oleh undang-undang.", "差別は法律で禁じられています。"],
    ["kesetaraan", "平等", "equality", "名詞", "Kesetaraan gender menjadi agenda penting.", "ジェンダー平等は重要な課題になっています。"],
    ["minoritas", "少数派", "minority", "名詞", "Hak minoritas harus dilindungi.", "少数派の権利は守られなければなりません。"],
    ["mayoritas", "多数派", "majority", "名詞", "Mayoritas penduduk bekerja di sektor pertanian.", "住民の多数派は農業部門で働いています。"],
    ["etnis", "民族(集団)", "ethnic group", "名詞", "Indonesia terdiri dari ratusan kelompok etnis.", "インドネシアは数百の民族集団から成ります。"],
    ["suku", "部族、民族", "tribe; ethnic group", "名詞", "Setiap suku punya adat sendiri.", "それぞれの民族は独自の慣習を持っています。"],
    ["toleransi", "寛容", "tolerance", "名詞", "Toleransi antarumat beragama penting.", "宗教間の寛容は重要です。"],
    ["solidaritas", "連帯", "solidarity", "名詞", "Solidaritas warga terlihat saat bencana.", "災害時に住民の連帯が現れます。"],
    ["mobilitas sosial", "社会移動", "social mobility", "名詞句", "Pendidikan mendorong mobilitas sosial.", "教育は社会移動を後押しします。"],
    ["kelas sosial", "社会階層", "social class", "名詞句", "Perbedaan kelas sosial masih terasa.", "社会階層の違いはまだ感じられます。"],
    ["kapitalisme", "資本主義", "capitalism", "名詞", "Buku itu mengkritik kapitalisme global.", "その本はグローバル資本主義を批判しています。"],
    ["sosialisme", "社会主義", "socialism", "名詞", "Paham sosialisme berkembang pada abad ke-19.", "社会主義思想は19世紀に発展しました。"],
    ["ideologi", "イデオロギー", "ideology", "名詞", "Ideologi negara Indonesia adalah Pancasila.", "インドネシアの国家イデオロギーはパンチャシラです。"],
    ["paham", "思想、主義", "ideology; understanding", "名詞", "Paham itu menyebar lewat media.", "その思想はメディアを通じて広まりました。"],
    ["nasionalisme", "ナショナリズム", "nationalism", "名詞", "Nasionalisme tumbuh pada masa penjajahan.", "ナショナリズムは植民地時代に育ちました。"],
    ["penjajahan", "植民地支配", "colonization", "名詞", "Indonesia mengalami penjajahan selama ratusan tahun.", "インドネシアは数百年の植民地支配を経験しました。"],
    ["kedaulatan", "主権", "sovereignty", "名詞", "Kedaulatan negara harus dihormati.", "国家の主権は尊重されなければなりません。"],
    ["diplomasi", "外交", "diplomacy", "名詞", "Masalah itu diselesaikan lewat diplomasi.", "その問題は外交によって解決されました。"],
    ["geopolitik", "地政学", "geopolitics", "名詞", "Kawasan itu penting secara geopolitik.", "その地域は地政学的に重要です。"],
    // --- 動詞 ---
    ["menelaah", "考察する、精査する", "to examine; study", "動詞", "Penulis menelaah sejarah kota itu.", "筆者はその都市の歴史を考察します。"],
    ["mempertanyakan", "疑問視する", "to question", "動詞", "Para ahli mempertanyakan data itu.", "専門家たちはそのデータを疑問視します。"],
    ["menggugat", "提訴する、問い直す", "to sue; challenge", "動詞", "Warga menggugat perusahaan itu ke pengadilan.", "住民はその会社を裁判所に提訴します。"],
    ["mengemukakan", "提示する、述べる", "to put forward", "動詞", "Penulis mengemukakan pandangan baru.", "筆者は新しい見解を提示します。"],
    ["memaparkan", "説明する、提示する", "to present; explain", "動詞", "Peneliti memaparkan hasil kajiannya.", "研究者は研究結果を説明します。"],
    ["menguraikan", "詳しく説明する", "to elaborate; break down", "動詞", "Bab ini menguraikan latar belakang masalah.", "この章は問題の背景を詳述します。"],
    ["mendefinisikan", "定義する", "to define", "動詞", "Sulit mendefinisikan istilah itu secara tepat.", "その用語を正確に定義するのは難しいです。"],
    ["mengklasifikasikan", "分類する", "to classify", "動詞", "Peneliti mengklasifikasikan data ke dalam tiga kelompok.", "研究者はデータを3つのグループに分類します。"],
    ["mengidentifikasi", "特定する", "to identify", "動詞", "Studi ini mengidentifikasi tiga faktor utama.", "本研究は3つの主要因を特定します。"],
    ["menyanggah", "反論する", "to rebut", "動詞", "Penulis menyanggah teori lama itu.", "筆者はその古い理論に反論します。"],
    ["membenarkan", "裏づける、正当化する", "to justify; confirm", "動詞", "Data itu membenarkan dugaan peneliti.", "そのデータは研究者の推測を裏づけます。"],
    ["menyangkal", "否定する", "to deny", "動詞", "Dia menyangkal keterlibatannya.", "彼は自らの関与を否定します。"],
    ["mengisyaratkan", "示唆する", "to signal; indicate", "動詞", "Temuan itu mengisyaratkan adanya perubahan pola.", "その知見はパターンの変化を示唆します。"],
    ["menyiratkan", "暗示する", "to imply", "動詞", "Pernyataan itu menyiratkan kritik.", "その発言は批判を暗に含んでいます。"],
    ["menggarisbawahi", "強調する", "to underline; emphasize", "動詞", "Laporan itu menggarisbawahi pentingnya data.", "その報告書はデータの重要性を強調します。"],
    ["mencerminkan", "反映する", "to reflect", "動詞", "Bahasa mencerminkan budaya penuturnya.", "言語は話し手の文化を反映します。"],
    ["melambangkan", "象徴する", "to symbolize", "動詞", "Warna merah melambangkan keberanian.", "赤色は勇気を象徴します。"],
    ["membentuk", "形成する", "to form; shape", "動詞", "Pengalaman membentuk kepribadian seseorang.", "経験は人の人格を形成します。"],
    ["memperdebatkan", "議論する、論争する", "to debate", "動詞", "Para ahli memperdebatkan definisi itu.", "専門家たちはその定義をめぐって議論します。"],
    ["memperjuangkan", "闘って勝ち取ろうとする", "to fight for", "動詞", "Mereka memperjuangkan hak-hak pekerja.", "彼らは労働者の権利のために闘います。"],
    ["menindaklanjuti", "フォローアップする、対応する", "to follow up", "動詞", "Pemerintah menindaklanjuti laporan warga.", "政府は住民の報告に対応します。"],
    ["mengabaikan", "無視する", "to ignore; neglect", "動詞", "Kebijakan itu mengabaikan suara warga.", "その政策は住民の声を無視しています。"],
    ["meremehkan", "軽視する", "to underestimate", "動詞", "Jangan meremehkan risiko itu.", "そのリスクを軽視しないでください。"],
    ["melebih-lebihkan", "誇張する", "to exaggerate", "動詞", "Media kadang melebih-lebihkan berita.", "メディアは時にニュースを誇張します。"],
    ["menggeneralisasi", "一般化する", "to generalize", "動詞", "Kita tidak boleh menggeneralisasi dari satu kasus.", "一つの事例から一般化してはいけません。"],
    ["berargumen", "論じる", "to argue", "動詞", "Penulis berargumen bahwa kebijakan itu gagal.", "筆者はその政策が失敗だったと論じます。"],
    ["berasumsi", "仮定する、想定する", "to assume", "動詞", "Banyak orang berasumsi harga akan naik.", "多くの人は価格が上がると想定しています。"],
    ["berimplikasi", "含意する、影響を持つ", "to have implications", "動詞", "Keputusan itu berimplikasi luas.", "その決定は広い影響を持ちます。"],
    ["berkontribusi", "貢献する", "to contribute", "動詞", "Sektor wisata berkontribusi besar pada ekonomi.", "観光部門は経済に大きく貢献しています。"],
    ["bertransformasi", "変容する", "to transform", "動詞", "Kota itu bertransformasi menjadi pusat teknologi.", "その都市は技術の中心地へと変貌しました。"],
    ["berakar", "根ざす", "to be rooted", "動詞", "Tradisi itu berakar pada kepercayaan lama.", "その伝統は古い信仰に根ざしています。"],
    ["bersumber", "由来する", "to originate from", "動詞", "Masalah itu bersumber dari ketimpangan.", "その問題は格差に由来します。"],
    ["berkisar", "〜の範囲である", "to range", "動詞", "Biayanya berkisar antara satu dan dua juta rupiah.", "費用は100万から200万ルピアの間です。"],
    ["mencakup", "含む、網羅する", "to cover; include", "動詞", "Kajian itu mencakup lima provinsi.", "その研究は5つの州を網羅しています。"],
    ["meliputi", "含む、覆う", "to include; cover", "動詞", "Wilayah itu meliputi tiga kabupaten.", "その地域は3つの県を含みます。"],
    ["menyangkut", "関わる", "to concern", "動詞", "Persoalan itu menyangkut kepentingan umum.", "その問題は公共の利益に関わります。"],
    ["menyertai", "伴う", "to accompany", "動詞", "Risiko selalu menyertai investasi.", "リスクは常に投資に伴います。"],
    ["mendasari", "基礎にある", "to underlie", "動詞", "Asumsi apa yang mendasari kebijakan itu?", "その政策の基礎にはどんな仮定がありますか。"],
    ["menopang", "支える", "to support; sustain", "動詞", "Sektor pertanian menopang ekonomi desa.", "農業部門は村の経済を支えています。"],
    ["menghambat", "妨げる", "to hinder", "動詞", "Birokrasi yang lambat menghambat investasi.", "遅い官僚手続きは投資を妨げます。"],
    ["memperdalam", "深める", "to deepen", "動詞", "Kuliah itu memperdalam pemahaman mahasiswa.", "その講義は学生の理解を深めます。"],
    ["memperkaya", "豊かにする", "to enrich", "動詞", "Membaca memperkaya kosakata.", "読書は語彙を豊かにします。"],
    // --- 形容詞 ---
    ["abstrak", "抽象的な", "abstract", "形容詞", "Konsep itu terlalu abstrak.", "その概念は抽象的すぎます。"],
    ["teoretis", "理論的な", "theoretical", "形容詞", "Secara teoretis, model itu masuk akal.", "理論的には、そのモデルは理にかなっています。"],
    ["metodologis", "方法論的な", "methodological", "形容詞", "Kajian itu punya kelemahan metodologis.", "その研究には方法論上の弱点があります。"],
    ["objektif", "客観的な", "objective", "形容詞", "Penilaian harus objektif.", "評価は客観的でなければなりません。"],
    ["subjektif", "主観的な", "subjective", "形容詞", "Kesan itu bersifat subjektif.", "その印象は主観的なものです。"],
    ["rasional", "合理的な", "rational", "形容詞", "Keputusan itu rasional.", "その決定は合理的です。"],
    ["skeptis", "懐疑的な", "skeptical", "形容詞", "Banyak ahli skeptis terhadap klaim itu.", "多くの専門家はその主張に懐疑的です。"],
    ["konservatif", "保守的な、控えめな", "conservative", "形容詞", "Perkiraan itu tergolong konservatif.", "その見積もりは控えめな部類です。"],
    ["radikal", "急進的な", "radical", "形容詞", "Perubahan radikal diperlukan.", "急進的な変化が必要です。"],
    ["moderat", "穏健な", "moderate", "形容詞", "Kelompok moderat mendukung dialog.", "穏健派は対話を支持します。"],
    ["pragmatis", "実利的な", "pragmatic", "形容詞", "Pendekatan pragmatis dipilih pemerintah.", "政府は実利的なアプローチを選びました。"],
    ["ambigu", "曖昧な", "ambiguous", "形容詞", "Kalimat itu ambigu.", "その文は曖昧です。"],
    ["paradoksal", "逆説的な", "paradoxical", "形容詞", "Hasilnya terdengar paradoksal.", "その結果は逆説的に聞こえます。"],
    ["esensial", "本質的な、不可欠な", "essential", "形容詞", "Air adalah kebutuhan esensial.", "水は不可欠な必需品です。"],
    ["holistik", "全体論的な", "holistic", "形容詞", "Masalah itu perlu pendekatan holistik.", "その問題には全体的なアプローチが必要です。"],
    ["eksklusif", "排他的な、限定の", "exclusive", "形容詞", "Kebijakan itu bersifat eksklusif.", "その政策は排他的な性格を持ちます。"],
    ["otoriter", "権威主義的な", "authoritarian", "形容詞", "Pemerintahan otoriter membatasi kebebasan pers.", "権威主義的な政権は報道の自由を制限します。"],
    ["demokratis", "民主的な", "democratic", "形容詞", "Keputusan diambil secara demokratis.", "決定は民主的に行われました。"],
    // --- 機能語 ---
    ["seyogianya", "本来〜すべきである", "ideally; ought to", "副詞", "Kebijakan seyogianya berpihak pada rakyat.", "政策は本来国民の側に立つべきです。"],
    ["niscaya", "必ずや", "surely; inevitably", "副詞", "Tanpa reformasi, krisis niscaya terulang.", "改革なしには、危機は必ず繰り返されます。"],
    ["betapa", "どれほど〜か", "how (much)", "副詞", "Data itu menunjukkan betapa seriusnya masalah ini.", "そのデータはこの問題がどれほど深刻かを示しています。"],
    ["sejatinya", "本来、実のところ", "in essence", "副詞", "Sejatinya, masalah itu sudah lama ada.", "実のところ、その問題は昔からありました。"],
    ["perihal", "〜の件、事柄", "regarding; matter", "名詞", "Surat itu berisi perihal perpanjangan kontrak.", "その手紙は契約延長の件を含んでいます。"]
  ];

  advancedRows.forEach(([word, japanese, english, partOfSpeech, example, exampleJapanese]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example,
      exampleJapanese,
      note: "A級の論説・文献・翻訳で頻出する語彙。"
    });
  });

  const chosen = [];
  candidates.forEach((card) => {
    const key = card.word.toLowerCase();
    if (!usedWords.has(key) && !chosen.some((item) => item.word.toLowerCase() === key)) {
      chosen.push(card);
    }
  });

  chosen.forEach((card, index) => {
    appData.words.push({
      id: `a-${String(currentMaxNumber + index + 1).padStart(3, "0")}`,
      ...card
    });
  });
})();
