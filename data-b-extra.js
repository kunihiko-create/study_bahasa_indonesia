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

  const phraseHeads = [
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

  const domains = [
    ["air", "水資源", "water"],
    ["bencana", "災害", "disaster"],
    ["budaya", "文化", "culture"],
    ["digital", "デジタル", "digital"],
    ["ekonomi", "経済", "economic"],
    ["energi", "エネルギー", "energy"],
    ["global", "世界", "global"],
    ["hukum", "法律", "legal"],
    ["iklim", "気候", "climate"],
    ["industri", "産業", "industrial"],
    ["informasi", "情報", "information"],
    ["infrastruktur", "インフラ", "infrastructure"],
    ["keamanan", "安全保障", "security"],
    ["kehutanan", "森林", "forestry"],
    ["keuangan", "金融", "financial"],
    ["kesehatan", "保健医療", "health"],
    ["ketenagakerjaan", "労働", "labor"],
    ["komunikasi", "通信", "communication"],
    ["komunitas", "共同体", "community"],
    ["lingkungan", "環境", "environmental"],
    ["nasional", "国家", "national"],
    ["pangan", "食料", "food"],
    ["pariwisata", "観光", "tourism"],
    ["pelayanan publik", "公共サービス", "public service"],
    ["pemerintahan", "行政", "government"],
    ["pendidikan", "教育", "education"],
    ["perdagangan", "商業", "trade"],
    ["perdesaan", "農村", "rural"],
    ["perikanan", "漁業", "fishery"],
    ["perkotaan", "都市", "urban"],
    ["perumahan", "住宅", "housing"],
    ["politik", "政治", "political"],
    ["produksi", "生産", "production"],
    ["regional", "地域", "regional"],
    ["rumah sakit", "病院", "hospital"],
    ["sekolah", "学校", "school"],
    ["sosial", "社会", "social"],
    ["sumber daya", "資源", "resource"],
    ["teknologi", "技術", "technology"],
    ["transportasi", "交通", "transportation"]
  ];

  addNounRows(nounRows);
  addVerbRows(verbRows);
  addAdjectiveRows(adjectiveRows);
  addFunctionRows(functionRows);

  phraseHeads.forEach(([head, headJp, headEn]) => {
    domains.forEach(([domain, domainJp, domainEn]) => {
      addCard({
        word: `${head} ${domain}`,
        japanese: `${domainJp}の${headJp}`,
        english: `${domainEn} ${headEn}`,
        partOfSpeech: "名詞句",
        example: `Pemerintah membahas ${head} ${domain} dalam rapat itu.`,
        exampleJapanese: `政府はその${domainJp}の${headJp}について会議で議論しました。`,
        note: "B級で抽象的な読解文・ニュース・論説に出やすい名詞句。"
      });
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
