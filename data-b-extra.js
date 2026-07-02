(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData || !Array.isArray(appData.words)) {
    return;
  }

  const targetTotal = 1800;
  const usedWords = new Set(appData.words.map((word) => word.word.toLowerCase()));
  const currentBWords = appData.words.filter((word) => word.level === "B");
  const currentMaxNumber = currentBWords.reduce((max, word) => {
    const match = /^b-(\d+)$/.exec(word.id);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);

  const candidates = [];

  function addCard(card) {
    candidates.push({
      level: "B",
      category: card.partOfSpeech,
      ...card
    });
  }

  function addNounRows(rows) {
    rows.forEach(([word, japanese, english]) => {
      addCard({
        word,
        japanese,
        english,
        partOfSpeech: "名詞",
        example: `Isu tentang ${word} itu menjadi perhatian publik.`,
        exampleJapanese: `その${japanese}に関する問題は社会の関心を集めています。`,
        note: "B級で論説文・ニュース・説明文に出やすい抽象名詞。"
      });
    });
  }

  function addVerbRows(rows) {
    rows.forEach(([word, japanese, english, object, objectJp]) => {
      addCard({
        word,
        japanese,
        english,
        partOfSpeech: "動詞",
        example: `Pemerintah ${word} ${object}.`,
        exampleJapanese: `政府は${objectJp}を${japanese}。`,
        note: "B級で政策・社会問題・業務文脈によく出る動詞。"
      });
    });
  }

  function addAdjectiveRows(rows) {
    rows.forEach(([word, japanese, english]) => {
      addCard({
        word,
        japanese,
        english,
        partOfSpeech: "形容詞",
        example: `Kebijakan itu dinilai ${word}.`,
        exampleJapanese: `その政策は${japanese}と評価されています。`,
        note: "B級の読解で評価・性質・状態を表す形容詞。"
      });
    });
  }

  function addFunctionRows(rows) {
    rows.forEach(([word, japanese, english, partOfSpeech, example, exampleJapanese]) => {
      addCard({
        word,
        japanese,
        english,
        partOfSpeech,
        example,
        exampleJapanese,
        note: "B級の長文読解で文と文の関係をつかむための表現。"
      });
    });
  }

  const nounRows = [
    ["akuntabilitas", "説明責任", "accountability"],
    ["ambiguitas", "曖昧さ", "ambiguity"],
    ["ancaman", "脅威", "threat"],
    ["asumsi", "仮定", "assumption"],
    ["cakupan", "範囲", "scope; coverage"],
    ["defisit", "赤字、不足", "deficit"],
    ["disparitas", "格差", "disparity"],
    ["efektivitas", "有効性", "effectiveness"],
    ["efisiensi", "効率性", "efficiency"],
    ["ekosistem", "生態系、環境圏", "ecosystem"],
    ["fluktuasi", "変動", "fluctuation"],
    ["implikasi", "含意、影響", "implication"],
    ["indikator", "指標", "indicator"],
    ["inisiatif", "取り組み", "initiative"],
    ["integritas", "誠実性、完全性", "integrity"],
    ["intervensi", "介入", "intervention"],
    ["kerangka", "枠組み", "framework"],
    ["kesinambungan", "継続性", "continuity"],
    ["ketahanan", "強靭性、持久力", "resilience"],
    ["ketimpangan", "不均衡、格差", "inequality; imbalance"],
    ["kewenangan", "権限", "authority"],
    ["komitmen", "約束、責任", "commitment"],
    ["kompetensi", "能力、適性", "competence"],
    ["kompleksitas", "複雑さ", "complexity"],
    ["konsensus", "合意", "consensus"],
    ["konsekuensi", "結果、帰結", "consequence"],
    ["konsistensi", "一貫性", "consistency"],
    ["kontribusi", "貢献", "contribution"],
    ["kredibilitas", "信頼性", "credibility"],
    ["krisis", "危機", "crisis"],
    ["legitimasi", "正当性", "legitimacy"],
    ["mekanisme", "仕組み", "mechanism"],
    ["mitigasi", "緩和、軽減策", "mitigation"],
    ["paradigma", "枠組み、考え方", "paradigm"],
    ["partisipasi", "参加", "participation"],
    ["pemangku kepentingan", "利害関係者", "stakeholder"],
    ["pemberdayaan", "能力向上、エンパワーメント", "empowerment"],
    ["pembiayaan", "資金調達", "financing"],
    ["pemulihan", "復旧、回復", "recovery"],
    ["pendekatan", "アプローチ", "approach"],
    ["pengaruh", "影響", "influence"],
    ["penyesuaian", "調整、適応", "adjustment"],
    ["percepatan", "加速", "acceleration"],
    ["pergeseran", "移行、変化", "shift"],
    ["perlindungan", "保護", "protection"],
    ["perspektif", "観点", "perspective"],
    ["pertimbangan", "検討、考慮", "consideration"],
    ["proyeksi", "予測、見通し", "projection"],
    ["reformasi", "改革", "reform"],
    ["regulasi", "規制", "regulation"],
    ["relevansi", "関連性", "relevance"],
    ["resiliensi", "回復力", "resilience"],
    ["sanksi", "制裁、罰則", "sanction"],
    ["stabilitas", "安定性", "stability"],
    ["subsidi", "補助金", "subsidy"],
    ["tata kelola", "ガバナンス、統治", "governance"],
    ["transisi", "移行", "transition"],
    ["transparansi", "透明性", "transparency"],
    ["urgensi", "緊急性", "urgency"],
    ["validitas", "妥当性", "validity"]
  ];

  const verbRows = [
    ["mengalokasikan", "配分する", "to allocate", "anggaran tambahan", "追加予算"],
    ["mengantisipasi", "予測して備える", "to anticipate", "risiko banjir", "洪水リスク"],
    ["mengawasi", "監督する", "to supervise", "pelaksanaan program", "プログラムの実施"],
    ["membatasi", "制限する", "to limit", "penggunaan energi", "エネルギー使用"],
    ["membenahi", "改善する、整備する", "to improve; fix", "sistem pelayanan", "サービス制度"],
    ["memberdayakan", "能力を高める", "to empower", "masyarakat lokal", "地域住民"],
    ["membiayai", "資金を出す", "to finance", "proyek infrastruktur", "インフラ事業"],
    ["memfasilitasi", "促進する、支援する", "to facilitate", "dialog publik", "公開対話"],
    ["meminimalkan", "最小限にする", "to minimize", "dampak negatif", "悪影響"],
    ["memprioritaskan", "優先する", "to prioritize", "keselamatan warga", "住民の安全"],
    ["memproyeksikan", "予測する", "to project; forecast", "pertumbuhan ekonomi", "経済成長"],
    ["memulihkan", "回復させる", "to restore", "kondisi ekonomi", "経済状況"],
    ["menafsirkan", "解釈する", "to interpret", "data survei", "調査データ"],
    ["menanggulangi", "対処する", "to overcome; tackle", "kemiskinan", "貧困"],
    ["menegakkan", "執行する、守らせる", "to enforce", "aturan hukum", "法規則"],
    ["menekankan", "強調する", "to emphasize", "pentingnya pendidikan", "教育の重要性"],
    ["menelusuri", "たどる、追跡する", "to trace", "asal masalah", "問題の起源"],
    ["menempatkan", "位置づける、配置する", "to place", "isu itu dalam konteks luas", "その問題を広い文脈"],
    ["menerapkan", "適用する、実施する", "to apply; implement", "kebijakan baru", "新政策"],
    ["menetapkan", "定める", "to determine; set", "standar nasional", "国家基準"],
    ["mengevaluasi", "評価する", "to evaluate", "hasil program", "プログラムの成果"],
    ["mengintegrasikan", "統合する", "to integrate", "layanan digital", "デジタルサービス"],
    ["mengoptimalkan", "最適化する", "to optimize", "penggunaan sumber daya", "資源利用"],
    ["mengurangi", "減らす", "to reduce", "ketimpangan sosial", "社会的格差"],
    ["mengutamakan", "重視する", "to prioritize", "kepentingan publik", "公共の利益"],
    ["meninjau", "見直す", "to review", "peraturan lama", "古い規則"],
    ["menjabarkan", "詳しく説明する", "to elaborate", "rencana kerja", "作業計画"],
    ["menjamin", "保証する", "to guarantee", "hak warga", "住民の権利"],
    ["menyelaraskan", "一致させる", "to align", "kebijakan daerah", "地域政策"],
    ["menyerap", "吸収する", "to absorb", "tenaga kerja baru", "新しい労働力"],
    ["menyimpulkan", "結論づける", "to conclude", "hasil penelitian", "研究結果"],
    ["merumuskan", "策定する", "to formulate", "strategi nasional", "国家戦略"],
    ["mewujudkan", "実現する", "to realize; make happen", "pembangunan berkelanjutan", "持続可能な開発"]
  ];

  const adjectiveRows = [
    ["adaptif", "適応力のある", "adaptive"],
    ["administratif", "行政上の", "administrative"],
    ["akurat", "正確な", "accurate"],
    ["berkelanjutan", "持続可能な", "sustainable"],
    ["berlapis", "多層の", "layered"],
    ["berskala besar", "大規模な", "large-scale"],
    ["dominan", "支配的な", "dominant"],
    ["eksternal", "外部の", "external"],
    ["fundamental", "根本的な", "fundamental"],
    ["inklusif", "包摂的な", "inclusive"],
    ["internal", "内部の", "internal"],
    ["komprehensif", "包括的な", "comprehensive"],
    ["konkret", "具体的な", "concrete"],
    ["konseptual", "概念的な", "conceptual"],
    ["konsisten", "一貫した", "consistent"],
    ["krusial", "極めて重要な", "crucial"],
    ["normatif", "規範的な", "normative"],
    ["operasional", "運用上の", "operational"],
    ["partisipatif", "参加型の", "participatory"],
    ["preventif", "予防的な", "preventive"],
    ["produktif", "生産的な", "productive"],
    ["progresif", "進歩的な", "progressive"],
    ["proporsional", "比例した、適切な", "proportional"],
    ["relevan", "関連のある", "relevant"],
    ["rentan", "脆弱な", "vulnerable"],
    ["signifikan", "重要な、著しい", "significant"],
    ["sistematis", "体系的な", "systematic"],
    ["strategis", "戦略的な", "strategic"],
    ["struktural", "構造的な", "structural"],
    ["substansial", "実質的な", "substantial"],
    ["transparan", "透明な", "transparent"],
    ["valid", "妥当な、有効な", "valid"]
  ];

  const functionRows = [
    ["adapun", "さて、〜については", "as for", "接続詞", "Adapun masalah biaya, hal itu akan dibahas besok.", "さて費用の問題については、それは明日話し合われます。"],
    ["alih-alih", "〜する代わりに", "instead of", "接続詞", "Alih-alih menurun, harga justru naik.", "下がるどころか、価格はむしろ上がりました。"],
    ["apabila", "〜の場合には", "if; when", "接続詞", "Apabila data belum lengkap, keputusan ditunda.", "データが不十分な場合、決定は延期されます。"],
    ["bagaimanapun", "いずれにしても", "anyway; nevertheless", "接続詞", "Bagaimanapun, keselamatan harus diutamakan.", "いずれにしても、安全が優先されなければなりません。"],
    ["berkenaan dengan", "〜に関して", "regarding", "前置詞", "Berkenaan dengan proyek itu, warga diminta memberi pendapat.", "その事業に関して、住民は意見を出すよう求められました。"],
    ["bertolak dari", "〜を出発点として", "starting from", "前置詞", "Bertolak dari data itu, peneliti membuat kesimpulan.", "そのデータを出発点として、研究者は結論を出しました。"],
    ["dalam hal", "〜の点で", "in terms of", "前置詞", "Dalam hal kualitas, produk ini lebih baik.", "品質の点で、この製品はより良いです。"],
    ["dengan kata lain", "言い換えれば", "in other words", "接続詞", "Dengan kata lain, kebijakan itu belum efektif.", "言い換えれば、その政策はまだ有効ではありません。"],
    ["kendati demikian", "それにもかかわらず", "nevertheless", "接続詞", "Kendati demikian, program itu tetap dilanjutkan.", "それにもかかわらず、その計画は続けられました。"],
    ["mengingat", "〜を考慮すると", "considering", "前置詞", "Mengingat risikonya besar, proyek itu ditinjau ulang.", "リスクが大きいことを考慮して、その事業は見直されました。"],
    ["oleh karena itu", "そのため", "therefore", "接続詞", "Biaya meningkat. Oleh karena itu, harga layanan naik.", "費用が増えました。そのため、サービス価格が上がりました。"],
    ["sebaliknya", "反対に", "on the contrary", "接続詞", "Sebaliknya, permintaan justru menurun.", "反対に、需要はむしろ下がりました。"],
    ["sehubungan dengan", "〜に関連して", "in connection with", "前置詞", "Sehubungan dengan rapat, kantor tutup lebih awal.", "会議に関連して、会社は早く閉まります。"],
    ["sejauh ini", "これまでのところ", "so far", "副詞", "Sejauh ini, hasilnya cukup baik.", "これまでのところ、結果はかなり良いです。"],
    ["sementara itu", "一方で、その間に", "meanwhile", "接続詞", "Sementara itu, warga menunggu keputusan.", "一方で、住民は決定を待っています。"],
    ["terlepas dari", "〜にかかわらず", "regardless of", "前置詞", "Terlepas dari hasilnya, proses itu penting.", "結果にかかわらず、その過程は重要です。"]
  ];

  // 以前はここで名詞×分野の全組み合わせ(約2,800語)を機械生成していたが、
  // 実在しない不自然な連語が大量に混ざるため廃止した。
  // 語彙を増やす場合は上の nounRows / verbRows / adjectiveRows に実在の語を追加する。
  const curatedPhrases = [
    ["akses", "アクセス", "access"],
    ["agenda", "議題", "agenda"],
    ["akuntabilitas", "説明責任", "accountability"],
    ["alokasi", "配分", "allocation"],
    ["analisis", "分析", "analysis"],
    ["anggaran", "予算", "budget"],
    ["capaian", "達成", "achievement"],
    ["dampak", "影響", "impact"],
    ["efektivitas", "有効性", "effectiveness"],
    ["efisiensi", "効率性", "efficiency"],
    ["evaluasi", "評価", "evaluation"],
    ["hambatan", "障害", "obstacle"],
    ["indikator", "指標", "indicator"],
    ["inovasi", "革新", "innovation"],
    ["insentif", "優遇措置", "incentive"],
    ["integrasi", "統合", "integration"],
    ["investasi", "投資", "investment"],
    ["kapasitas", "能力", "capacity"],
    ["kebijakan", "政策", "policy"],
    ["keberlanjutan", "持続可能性", "sustainability"],
    ["kebutuhan", "必要性", "need"],
    ["kerangka", "枠組み", "framework"],
    ["kesenjangan", "格差", "gap"],
    ["ketahanan", "強靭性", "resilience"],
    ["kewenangan", "権限", "authority"],
    ["kolaborasi", "協働", "collaboration"],
    ["komitmen", "責任・約束", "commitment"],
    ["kompetensi", "能力・適性", "competence"],
    ["konsistensi", "一貫性", "consistency"],
    ["kontribusi", "貢献", "contribution"],
    ["koordinasi", "調整", "coordination"],
    ["kualitas", "品質", "quality"],
    ["mekanisme", "仕組み", "mechanism"],
    ["mitigasi", "緩和策", "mitigation"],
    ["partisipasi", "参加", "participation"],
    ["peluang", "機会", "opportunity"],
    ["pemanfaatan", "活用", "utilization"],
    ["pemberdayaan", "能力向上", "empowerment"],
    ["pembiayaan", "資金調達", "financing"],
    ["pemerataan", "均等化", "equal distribution"],
    ["pemulihan", "復旧", "recovery"],
    ["pemantauan", "監視", "monitoring"],
    ["pencegahan", "予防", "prevention"],
    ["pendekatan", "アプローチ", "approach"],
    ["penegakan", "執行", "enforcement"],
    ["penelitian", "研究", "research"],
    ["pengawasan", "監督", "supervision"],
    ["pengembangan", "開発", "development"],
    ["pengelolaan", "管理", "management"],
    ["penanganan", "対応", "handling"],
    ["perizinan", "許認可", "licensing"],
    ["perlindungan", "保護", "protection"],
    ["pertumbuhan", "成長", "growth"],
    ["prioritas", "優先事項", "priority"],
    ["produktivitas", "生産性", "productivity"],
    ["program", "計画", "program"],
    ["reformasi", "改革", "reform"],
    ["regulasi", "規制", "regulation"],
    ["risiko", "リスク", "risk"],
    ["sasaran", "目標対象", "target"],
    ["sistem", "制度", "system"],
    ["stabilitas", "安定性", "stability"],
    ["standar", "基準", "standard"],
    ["strategi", "戦略", "strategy"],
    ["subsidi", "補助金", "subsidy"],
    ["tantangan", "課題", "challenge"],
    ["tata kelola", "ガバナンス", "governance"],
    ["transformasi", "変革", "transformation"],
    ["transisi", "移行", "transition"],
    ["transparansi", "透明性", "transparency"]
  ];

  addNounRows(nounRows);
  addNounRows(curatedPhrases);
  addVerbRows(verbRows);
  addAdjectiveRows(adjectiveRows);
  addFunctionRows(functionRows);

  // 時事・経済・行政ニュースで頻出する実在語彙。全行に例文を明記する。
  // [word, japanese, english, partOfSpeech, example, exampleJapanese]
  const newsRows = [
    // --- 名詞 ---
    ["perekonomian", "経済(情勢)", "economy", "名詞", "Perekonomian nasional mulai membaik.", "国家経済は良くなり始めています。"],
    ["inflasi", "インフレ", "inflation", "名詞", "Inflasi bulan ini rendah.", "今月のインフレ率は低いです。"],
    ["pengangguran", "失業", "unemployment", "名詞", "Pengangguran menjadi masalah serius.", "失業は深刻な問題になっています。"],
    ["upah minimum", "最低賃金", "minimum wage", "名詞句", "Upah minimum naik tahun depan.", "最低賃金は来年上がります。"],
    ["nilai tukar", "為替レート", "exchange rate", "名詞句", "Nilai tukar rupiah menguat.", "ルピアの為替レートは上昇しています。"],
    ["suku bunga", "金利", "interest rate", "名詞句", "Bank menaikkan suku bunga.", "銀行は金利を引き上げます。"],
    ["utang", "借金、債務", "debt", "名詞", "Utang perusahaan itu besar.", "その会社の債務は大きいです。"],
    ["devisa", "外貨", "foreign exchange", "名詞", "Pariwisata menghasilkan devisa.", "観光は外貨を生み出します。"],
    ["saham", "株", "stock; share", "名詞", "Harga saham turun tajam.", "株価は急落しました。"],
    ["investor", "投資家", "investor", "名詞", "Investor asing tertarik pada proyek itu.", "外国人投資家はその事業に関心を持っています。"],
    ["konsumen", "消費者", "consumer", "名詞", "Konsumen mengeluh tentang kenaikan harga.", "消費者は値上げに不満を言います。"],
    ["distribusi", "流通、分配", "distribution", "名詞", "Distribusi barang terganggu karena banjir.", "洪水のため商品の流通が滞っています。"],
    ["pasokan", "供給", "supply", "名詞", "Pasokan beras cukup untuk tiga bulan.", "米の供給は3か月分十分あります。"],
    ["cadangan", "備蓄、予備", "reserve", "名詞", "Pemerintah menyiapkan cadangan pangan.", "政府は食料備蓄を用意します。"],
    ["komoditas", "商品、産品", "commodity", "名詞", "Kopi adalah komoditas penting Indonesia.", "コーヒーはインドネシアの重要な産品です。"],
    ["industri", "産業", "industry", "名詞", "Industri pariwisata berkembang pesat.", "観光産業は急速に発展しています。"],
    ["sektor", "部門、セクター", "sector", "名詞", "Sektor pertanian menyerap banyak tenaga kerja.", "農業部門は多くの労働力を吸収します。"],
    ["infrastruktur", "インフラ", "infrastructure", "名詞", "Pembangunan infrastruktur dipercepat.", "インフラ整備は加速されています。"],
    ["fasilitas", "施設", "facility", "名詞", "Fasilitas umum di kota itu lengkap.", "その町の公共施設は充実しています。"],
    ["laba", "利益", "profit", "名詞", "Laba perusahaan meningkat tahun ini.", "会社の利益は今年増えました。"],
    ["omzet", "売上高", "turnover; sales", "名詞", "Omzet warung itu naik dua kali lipat.", "その食堂の売上は2倍になりました。"],
    ["pelaku usaha", "事業者", "business actor", "名詞句", "Pelaku usaha kecil mendapat bantuan.", "小規模事業者は支援を受けます。"],
    ["UMKM", "中小零細企業", "micro, small and medium enterprises", "名詞", "Pemerintah mendukung UMKM.", "政府は中小零細企業を支援します。"],
    ["kemitraan", "提携、パートナーシップ", "partnership", "名詞", "Kedua perusahaan menjalin kemitraan.", "両社は提携を結びます。"],
    ["ekspansi", "拡大、進出", "expansion", "名詞", "Perusahaan itu melakukan ekspansi ke luar negeri.", "その会社は海外進出を行います。"],
    ["persaingan", "競争", "competition", "名詞", "Persaingan di pasar makin ketat.", "市場の競争はますます厳しくなっています。"],
    ["digitalisasi", "デジタル化", "digitalization", "名詞", "Digitalisasi layanan publik terus berlanjut.", "公共サービスのデジタル化は続いています。"],
    ["kecerdasan buatan", "人工知能", "artificial intelligence", "名詞句", "Kecerdasan buatan mengubah dunia kerja.", "人工知能は労働の世界を変えています。"],
    ["perangkat lunak", "ソフトウェア", "software", "名詞句", "Perusahaan itu mengembangkan perangkat lunak.", "その会社はソフトウェアを開発しています。"],
    ["keamanan siber", "サイバーセキュリティ", "cybersecurity", "名詞句", "Keamanan siber menjadi perhatian utama.", "サイバーセキュリティは主要な関心事になっています。"],
    ["kebocoran data", "データ流出", "data leak", "名詞句", "Kebocoran data merugikan pengguna.", "データ流出は利用者に損害を与えます。"],
    ["parlemen", "議会", "parliament", "名詞", "Parlemen membahas anggaran tahun depan.", "議会は来年度予算を審議します。"],
    ["anggota dewan", "議員", "council member", "名詞句", "Anggota dewan menghadiri sidang.", "議員は審議に出席します。"],
    ["sidang", "審議、法廷", "session; trial", "名詞", "Sidang dimulai pukul sepuluh.", "審議は10時に始まります。"],
    ["undang-undang dasar", "憲法", "constitution", "名詞句", "Undang-undang dasar menjamin kebebasan warga.", "憲法は市民の自由を保障します。"],
    ["birokrasi", "官僚制、役所手続き", "bureaucracy", "名詞", "Birokrasi yang rumit menghambat investasi.", "複雑な官僚制は投資を妨げます。"],
    ["korupsi", "汚職", "corruption", "名詞", "Korupsi merugikan negara.", "汚職は国家に損害を与えます。"],
    ["suap", "賄賂", "bribe", "名詞", "Pejabat itu menerima suap.", "その役人は賄賂を受け取りました。"],
    ["penyelidikan", "捜査、調査", "investigation", "名詞", "Polisi memulai penyelidikan.", "警察は捜査を始めます。"],
    ["tersangka", "容疑者", "suspect", "名詞", "Tersangka ditangkap kemarin.", "容疑者は昨日逮捕されました。"],
    ["terdakwa", "被告", "defendant", "名詞", "Terdakwa membantah tuduhan itu.", "被告はその容疑を否認します。"],
    ["tuduhan", "容疑、非難", "accusation", "名詞", "Dia membantah semua tuduhan.", "彼はすべての容疑を否認します。"],
    ["vonis", "判決", "verdict", "名詞", "Hakim menjatuhkan vonis lima tahun penjara.", "裁判官は懲役5年の判決を下しました。"],
    ["aparat", "当局、治安要員", "(security) apparatus", "名詞", "Aparat keamanan berjaga di lokasi.", "治安要員が現場で警戒しています。"],
    ["kasus", "事件、事例", "case", "名詞", "Kasus itu sedang diselidiki polisi.", "その事件は警察が捜査中です。"],
    ["sengketa", "紛争、係争", "dispute", "名詞", "Sengketa tanah itu belum selesai.", "その土地紛争はまだ解決していません。"],
    ["opini publik", "世論", "public opinion", "名詞句", "Opini publik terbagi dua.", "世論は二分されています。"],
    ["jajak pendapat", "世論調査", "opinion poll", "名詞句", "Hasil jajak pendapat diumumkan besok.", "世論調査の結果は明日発表されます。"],
    ["narasumber", "情報源、識者", "source; resource person", "名詞", "Narasumber itu ahli ekonomi.", "その識者は経済専門家です。"],
    ["konferensi pers", "記者会見", "press conference", "名詞句", "Menteri mengadakan konferensi pers.", "大臣は記者会見を開きます。"],
    ["bencana alam", "自然災害", "natural disaster", "名詞句", "Bencana alam sering terjadi di wilayah ini.", "この地域では自然災害がよく起きます。"],
    ["gunung berapi", "火山", "volcano", "名詞句", "Gunung berapi itu masih aktif.", "その火山はまだ活動中です。"],
    ["erupsi", "噴火", "eruption", "名詞", "Erupsi gunung itu mengejutkan warga.", "その山の噴火は住民を驚かせました。"],
    ["wabah", "流行病", "epidemic; outbreak", "名詞", "Wabah itu menyebar dengan cepat.", "その流行病は速く広がりました。"],
    ["vaksin", "ワクチン", "vaccine", "名詞", "Vaksin diberikan secara gratis.", "ワクチンは無料で提供されます。"],
    ["tenaga medis", "医療従事者", "medical personnel", "名詞句", "Tenaga medis bekerja tanpa henti.", "医療従事者は休みなく働いています。"],
    ["angka kelahiran", "出生率", "birth rate", "名詞句", "Angka kelahiran menurun setiap tahun.", "出生率は毎年下がっています。"],
    ["urbanisasi", "都市化", "urbanization", "名詞", "Urbanisasi mempercepat pertumbuhan kota.", "都市化は都市の成長を速めます。"],
    ["migrasi", "移住", "migration", "名詞", "Migrasi ke kota besar terus meningkat.", "大都市への移住は増え続けています。"],
    ["pemanasan global", "地球温暖化", "global warming", "名詞句", "Pemanasan global memengaruhi cuaca.", "地球温暖化は天候に影響します。"],
    ["perubahan iklim", "気候変動", "climate change", "名詞句", "Perubahan iklim menjadi tantangan besar.", "気候変動は大きな課題になっています。"],
    ["emisi", "排出", "emission", "名詞", "Pemerintah berupaya mengurangi emisi.", "政府は排出削減に努めています。"],
    ["energi terbarukan", "再生可能エネルギー", "renewable energy", "名詞句", "Energi terbarukan makin murah.", "再生可能エネルギーはますます安くなっています。"],
    ["pembangkit listrik", "発電所", "power plant", "名詞句", "Pembangkit listrik baru dibangun di sana.", "新しい発電所がそこに建設されます。"],
    ["kelestarian", "保全", "preservation", "名詞", "Kelestarian hutan harus dijaga.", "森林の保全は守られなければなりません。"],
    ["konservasi", "保護、保全", "conservation", "名詞", "Kawasan konservasi itu dilindungi negara.", "その保護区は国家によって保護されています。"],
    ["keanekaragaman", "多様性", "diversity", "名詞", "Keanekaragaman budaya adalah kekayaan bangsa.", "文化の多様性は国民の財産です。"],
    ["satwa liar", "野生動物", "wildlife", "名詞句", "Satwa liar dilindungi undang-undang.", "野生動物は法律で保護されています。"],
    ["jaminan sosial", "社会保障", "social security", "名詞句", "Jaminan sosial melindungi pekerja.", "社会保障は労働者を守ります。"],
    ["dana", "資金", "fund", "名詞", "Dana bantuan sudah disalurkan.", "支援資金はすでに配分されました。"],
    ["biaya hidup", "生活費", "cost of living", "名詞句", "Biaya hidup di kota besar tinggi.", "大都市の生活費は高いです。"],
    ["daya beli", "購買力", "purchasing power", "名詞句", "Daya beli masyarakat menurun.", "社会の購買力は低下しています。"],
    ["kelas menengah", "中間層", "middle class", "名詞句", "Kelas menengah Indonesia terus tumbuh.", "インドネシアの中間層は成長し続けています。"],
    ["putus sekolah", "中退", "school dropout", "名詞句", "Banyak anak putus sekolah karena biaya.", "費用のため多くの子どもが学校を中退します。"],
    ["kurikulum", "カリキュラム", "curriculum", "名詞", "Kurikulum baru mulai dipakai tahun ini.", "新カリキュラムは今年から使われます。"],
    ["literasi", "リテラシー", "literacy", "名詞", "Literasi digital perlu ditingkatkan.", "デジタルリテラシーは向上させる必要があります。"],
    // --- 動詞 ---
    ["membantah", "否認する、反論する", "to deny", "動詞", "Menteri membantah kabar itu.", "大臣はその報道を否定します。"],
    ["menegaskan", "強調する、断言する", "to affirm; emphasize", "動詞", "Gubernur menegaskan pentingnya kerja sama.", "知事は協力の重要性を強調します。"],
    ["menyoroti", "焦点を当てる", "to highlight", "動詞", "Laporan itu menyoroti masalah pendidikan.", "その報告書は教育問題に焦点を当てています。"],
    ["mengkaji", "検討する、研究する", "to study; review", "動詞", "Pemerintah mengkaji aturan baru itu.", "政府はその新しい規則を検討しています。"],
    ["meluncurkan", "発足させる、発売する", "to launch", "動詞", "Perusahaan meluncurkan produk baru.", "会社は新製品を発売します。"],
    ["menggelar", "開催する", "to hold; stage", "動詞", "Kota itu menggelar pameran budaya.", "その都市は文化展を開催します。"],
    ["menjalin", "(関係を)結ぶ", "to establish (relations)", "動詞", "Kedua negara menjalin hubungan diplomatik.", "両国は外交関係を結びます。"],
    ["mengimbau", "呼びかける", "to appeal; urge", "動詞", "Pemerintah mengimbau warga tetap tenang.", "政府は住民に冷静でいるよう呼びかけます。"],
    ["menuduh", "告発する、非難する", "to accuse", "動詞", "Dia menuduh rekannya berbohong.", "彼は同僚がうそをついていると非難します。"],
    ["mengesahkan", "承認する、成立させる", "to ratify; pass", "動詞", "Parlemen mengesahkan undang-undang baru.", "議会は新しい法律を成立させます。"],
    ["memberlakukan", "施行する", "to enforce; put into effect", "動詞", "Pemerintah memberlakukan aturan baru.", "政府は新しい規則を施行します。"],
    ["menunda", "延期する", "to postpone", "動詞", "Panitia menunda acara karena hujan.", "委員会は雨のため行事を延期しました。"],
    ["melonggarkan", "緩和する", "to loosen; relax", "動詞", "Pemerintah melonggarkan aturan perjalanan.", "政府は旅行規制を緩和します。"],
    ["memperketat", "厳格化する", "to tighten", "動詞", "Bandara memperketat pemeriksaan.", "空港は検査を厳格化します。"],
    ["menganalisis", "分析する", "to analyze", "動詞", "Peneliti menganalisis data survei.", "研究者は調査データを分析します。"],
    ["memprediksi", "予測する", "to predict", "動詞", "Ahli memprediksi pertumbuhan ekonomi.", "専門家は経済成長を予測します。"],
    ["berinvestasi", "投資する", "to invest", "動詞", "Banyak perusahaan berinvestasi di daerah itu.", "多くの企業がその地域に投資しています。"],
    ["memproses", "処理する", "to process", "動詞", "Sistem memproses data secara otomatis.", "システムはデータを自動で処理します。"],
    ["mengekspor", "輸出する", "to export", "動詞", "Indonesia mengekspor minyak sawit.", "インドネシアはパーム油を輸出します。"],
    ["mengimpor", "輸入する", "to import", "動詞", "Negara itu mengimpor gandum.", "その国は小麦を輸入します。"],
    ["memasok", "供給する", "to supply", "動詞", "Perusahaan itu memasok bahan baku.", "その会社は原材料を供給します。"],
    ["memangkas", "削減する", "to cut; trim", "動詞", "Pemerintah memangkas anggaran perjalanan.", "政府は出張予算を削減します。"],
    ["melumpuhkan", "まひさせる", "to paralyze", "動詞", "Banjir melumpuhkan lalu lintas kota.", "洪水は都市の交通をまひさせました。"],
    ["memicu", "引き起こす、誘発する", "to trigger", "動詞", "Kenaikan harga memicu protes.", "値上げは抗議を引き起こしました。"],
    ["menuai", "(批判などを)招く、収穫する", "to reap; draw", "動詞", "Kebijakan itu menuai kritik.", "その政策は批判を招きました。"],
    ["menanggapi", "反応する、応じる", "to respond to", "動詞", "Menteri menanggapi kritik itu dengan tenang.", "大臣はその批判に冷静に応じます。"],
    ["berupaya", "努める", "to make efforts", "動詞", "Pemerintah berupaya menurunkan harga pangan.", "政府は食料価格の引き下げに努めています。"],
    ["bertindak", "行動する", "to act", "動詞", "Polisi bertindak cepat.", "警察は素早く行動します。"],
    ["berdampak", "影響を及ぼす", "to have an impact", "動詞", "Kebijakan itu berdampak pada harga pangan.", "その政策は食料価格に影響を及ぼします。"],
    ["berpihak", "味方する、肩入れする", "to side with", "動詞", "Kebijakan itu dinilai tidak berpihak pada petani.", "その政策は農民の側に立っていないと評価されています。"],
    ["bertanggung jawab", "責任を負う", "to be responsible", "動詞", "Perusahaan harus bertanggung jawab atas kerusakan itu.", "会社はその損害に責任を負わなければなりません。"],
    ["menampung", "収容する、受け入れる", "to accommodate", "動詞", "Gedung itu menampung seribu orang.", "その建物は千人を収容します。"],
    ["menyalurkan", "配給する、流す", "to distribute; channel", "動詞", "Pemerintah menyalurkan bantuan kepada korban.", "政府は被災者に支援を配給します。"],
    ["merevisi", "改訂する", "to revise", "動詞", "Pemerintah merevisi aturan itu.", "政府はその規則を改訂します。"],
    ["menyederhanakan", "簡素化する", "to simplify", "動詞", "Pemerintah menyederhanakan prosedur perizinan.", "政府は許認可手続きを簡素化します。"],
    ["mengoperasikan", "稼働させる、運行する", "to operate", "動詞", "Perusahaan mengoperasikan pabrik baru.", "会社は新しい工場を稼働させます。"],
    ["meresmikan", "落成させる、公式に開始する", "to inaugurate", "動詞", "Presiden meresmikan bandara baru.", "大統領は新空港の落成式を行います。"],
    ["menjabat", "職に就く、務める", "to hold office", "動詞", "Dia menjabat sebagai gubernur selama lima tahun.", "彼は5年間知事を務めました。"],
    ["dilantik", "就任する", "to be inaugurated", "動詞", "Menteri baru dilantik hari ini.", "新大臣は今日就任しました。"],
    ["mencalonkan diri", "立候補する", "to run for office", "動詞", "Dia mencalonkan diri sebagai wali kota.", "彼は市長に立候補します。"],
    ["memenangkan", "勝ち取る", "to win", "動詞", "Partai itu memenangkan pemilu.", "その政党は選挙に勝利しました。"],
    // --- 形容詞 ---
    ["drastis", "大幅な、急激な", "drastic", "形容詞", "Harga turun secara drastis.", "価格は大幅に下がりました。"],
    ["pesat", "急速な", "rapid", "形容詞", "Kota itu tumbuh pesat.", "その町は急速に成長しています。"],
    ["stabil", "安定した", "stable", "形容詞", "Nilai tukar tetap stabil.", "為替レートは安定しています。"],
    ["kondusif", "良好な、落ち着いた", "conducive; stable", "形容詞", "Situasi keamanan tetap kondusif.", "治安状況は落ち着いています。"],
    ["optimal", "最適な", "optimal", "形容詞", "Pelayanan belum berjalan optimal.", "サービスはまだ最適に機能していません。"],
    ["maksimal", "最大限の", "maximum", "形容詞", "Kami bekerja secara maksimal.", "私たちは最大限に働きます。"],
    ["minimal", "最小限の", "minimum", "形容詞", "Persyaratan minimal harus dipenuhi.", "最低限の条件は満たされなければなりません。"],
    ["potensial", "潜在力のある", "potential", "形容詞", "Daerah itu potensial untuk wisata.", "その地域は観光の潜在力があります。"],
    ["kompetitif", "競争力のある", "competitive", "形容詞", "Harga produk itu kompetitif.", "その製品の価格は競争力があります。"],
    ["global", "グローバルな、世界的な", "global", "形容詞", "Persaingan global makin ketat.", "グローバル競争はますます厳しくなっています。"],
    ["domestik", "国内の", "domestic", "形容詞", "Wisatawan domestik meningkat.", "国内観光客は増えています。"],
    ["regional", "地域の", "regional", "形容詞", "Kerja sama regional diperkuat.", "地域協力は強化されています。"],
    ["ilegal", "違法な", "illegal", "形容詞", "Penebangan ilegal merusak hutan.", "違法伐採は森林を破壊します。"],
    ["resah", "不安な", "restless; anxious", "形容詞", "Warga resah karena kabar itu.", "住民はその知らせで不安になっています。"],
    ["parah", "深刻な、ひどい", "severe", "形容詞", "Kerusakan jalan itu parah.", "その道路の損傷はひどいです。"],
    ["ekstrem", "極端な", "extreme", "形容詞", "Cuaca ekstrem melanda wilayah itu.", "極端な気象がその地域を襲いました。"],
    // --- 機能語 ---
    ["kian", "ますます", "increasingly", "副詞", "Harga pangan kian mahal.", "食料価格はますます高くなっています。"],
    ["serta", "〜および", "as well as", "接続詞", "Acara itu dihadiri pejabat serta warga.", "その行事には役人および住民が出席しました。"],
    ["maupun", "〜も(baik A maupun B)", "as well as; nor", "接続詞", "Baik pemerintah maupun swasta mendukung program itu.", "政府も民間もその計画を支援しています。"],
    ["pasca", "〜の後", "post-; after", "前置詞", "Pasca banjir, warga mulai membersihkan rumah.", "洪水の後、住民は家の掃除を始めました。"],
    ["terkait", "関連した", "related", "形容詞", "Polisi memeriksa orang yang terkait dengan kasus itu.", "警察はその事件に関係する人物を調べます。"]
  ];

  newsRows.forEach(([word, japanese, english, partOfSpeech, example, exampleJapanese]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example,
      exampleJapanese,
      note: "B級の時事・経済・行政ニュースで頻出する語彙。"
    });
  });

  const chosen = [];
  candidates.forEach((card) => {
    const key = card.word.toLowerCase();
    if (!usedWords.has(key) && !chosen.some((item) => item.word.toLowerCase() === key)) {
      chosen.push(card);
    }
  });

  const needed = Math.max(0, targetTotal - currentBWords.length);
  chosen.slice(0, needed).forEach((card, index) => {
    appData.words.push({
      id: `b-${String(currentMaxNumber + index + 1).padStart(3, "0")}`,
      ...card
    });
  });
})();
