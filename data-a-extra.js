(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData || !Array.isArray(appData.words)) {
    return;
  }

  const targetTotal = 3000;
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

  function addRows(rows, partOfSpeech, note, exampleBuilder) {
    rows.forEach(([word, japanese, english]) => {
      const example = exampleBuilder(word, japanese);
      addCard({
        word,
        japanese,
        english,
        partOfSpeech,
        example: example[0],
        exampleJapanese: example[1],
        note
      });
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
    ["verifikasi", "検証", "verification"]
  ];

  const verbRows = [
    ["mengaburkan", "曖昧にする", "to obscure"],
    ["mengafirmasi", "肯定する、確認する", "to affirm"],
    ["mengakomodasi", "受け入れる、対応する", "to accommodate"],
    ["mengartikulasikan", "明確に表現する", "to articulate"],
    ["mengasumsikan", "仮定する", "to assume"],
    ["mendelegitimasi", "正当性を失わせる", "to delegitimize"],
    ["mendepolitisasi", "脱政治化する", "to depoliticize"],
    ["mendiseminasikan", "普及させる", "to disseminate"],
    ["mendiversifikasi", "多様化する", "to diversify"],
    ["menegosiasikan", "交渉する、調整する", "to negotiate"],
    ["mengeksternalisasi", "外部化する", "to externalize"],
    ["mengelaborasi", "詳述する", "to elaborate"],
    ["mengeskalasi", "激化させる", "to escalate"],
    ["menginstitusionalisasikan", "制度化する", "to institutionalize"],
    ["menginternalisasi", "内面化する", "to internalize"],
    ["mengintervensi", "介入する", "to intervene"],
    ["mengkonseptualisasikan", "概念化する", "to conceptualize"],
    ["mengonsolidasikan", "統合する、強化する", "to consolidate"],
    ["mengontekstualisasikan", "文脈化する", "to contextualize"],
    ["mengonstruksi", "構築する", "to construct"],
    ["mengorelasikan", "相関づける", "to correlate"],
    ["memarjinalkan", "周縁化する", "to marginalize"],
    ["memediasi", "仲介する", "to mediate"],
    ["memetakan", "写像する、整理する", "to map"],
    ["memformulasikan", "定式化する", "to formulate"],
    ["memitigasi", "軽減する", "to mitigate"],
    ["memobilisasi", "動員する", "to mobilize"],
    ["memodifikasi", "修正する", "to modify"],
    ["mempertautkan", "結びつける", "to link"],
    ["memproblematisasi", "問題化する", "to problematize"],
    ["mempromosikan", "促進する、宣伝する", "to promote"],
    ["memvalidasi", "検証する、妥当性を確認する", "to validate"],
    ["menormalisasi", "正常化する", "to normalize"],
    ["merefleksikan", "反映する、省察する", "to reflect"],
    ["merekonsiliasi", "和解させる、調整する", "to reconcile"],
    ["merekonstruksi", "再構築する", "to reconstruct"],
    ["merepresentasikan", "表象する、代表する", "to represent"],
    ["merestrukturisasi", "再編する", "to restructure"],
    ["merevitalisasi", "再活性化する", "to revitalize"],
    ["mensintesis", "総合する", "to synthesize"]
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
    ["valid", "妥当な", "valid"]
  ];

  const functionRows = [
    ["alih-alih", "〜するどころか、〜の代わりに", "instead of; rather than", "接続詞"],
    ["andaikata", "仮に〜なら", "supposing that", "接続詞"],
    ["bagaimanapun juga", "いずれにせよ", "in any case", "接続詞"],
    ["bertolak dari", "〜を出発点として", "starting from", "前置詞"],
    ["dalam konteks", "〜という文脈で", "in the context of", "前置詞"],
    ["dalam kerangka", "〜の枠組みで", "within the framework of", "前置詞"],
    ["dengan sendirinya", "当然ながら、自ずと", "naturally; by itself", "副詞"],
    ["di satu sisi", "一方では", "on one hand", "接続詞"],
    ["di sisi lain", "他方では", "on the other hand", "接続詞"],
    ["kendati demikian", "それにもかかわらず", "nevertheless", "接続詞"],
    ["lebih lanjut", "さらに詳しくは", "furthermore", "接続詞"],
    ["pada gilirannya", "ひいては、次には", "in turn", "副詞"],
    ["pada hakikatnya", "本質的には", "essentially", "副詞"],
    ["pada tataran", "〜のレベルで", "at the level of", "前置詞"],
    ["sebagaimana", "〜のように", "as; just as", "接続詞"],
    ["sejauh menyangkut", "〜に関する限り", "as far as concerns", "前置詞"],
    ["terlepas dari kenyataan bahwa", "〜という事実にかかわらず", "regardless of the fact that", "接続詞"],
    ["tidak terlepas dari", "〜と切り離せない", "inseparable from", "前置詞"]
  ];

  addRows(nounRows, "名詞", "A級で論説・研究・翻訳文に出やすい高度な抽象名詞。", (word, japanese) => [
    `Konsep ${word} sering dibahas dalam kajian sosial.`,
    `${japanese}という概念は社会研究でよく論じられます。`
  ]);

  addRows(verbRows, "動詞", "A級で学術文・政策文・評論文に出やすい高難度動詞。", (word, japanese) => [
    `Peneliti ${word} persoalan itu secara kritis.`,
    `研究者はその問題を批判的に${japanese}。`
  ]);

  addRows(adjectiveRows, "形容詞", "A級の論説文で評価・性質・概念を精密に表す形容詞。", (word, japanese) => [
    `Pendekatan itu dianggap ${word}.`,
    `そのアプローチは${japanese}と見なされています。`
  ]);

  functionRows.forEach(([word, japanese, english, partOfSpeech]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example: `${word.charAt(0).toUpperCase() + word.slice(1)} isu tersebut, diperlukan analisis yang cermat.`,
      exampleJapanese: `その問題${japanese}、慎重な分析が必要です。`,
      note: "A級の長い論説文で論理展開を追うための表現。"
    });
  });

  const advancedHeads = [
    ["abstraksi", "抽象化", "abstraction"],
    ["adaptasi", "適応", "adaptation"],
    ["afirmasi", "肯定", "affirmation"],
    ["akumulasi", "蓄積", "accumulation"],
    ["ambivalensi", "両義性", "ambivalence"],
    ["analisis", "分析", "analysis"],
    ["anomali", "異常", "anomaly"],
    ["artikulasi", "明確な表現", "articulation"],
    ["asimetri", "非対称性", "asymmetry"],
    ["bias", "偏り", "bias"],
    ["deliberasi", "熟議", "deliberation"],
    ["demarkasi", "境界設定", "demarcation"],
    ["dikotomi", "二分法", "dichotomy"],
    ["dinamika", "力学、動態", "dynamics"],
    ["diseminasi", "普及", "dissemination"],
    ["diskrepansi", "食い違い", "discrepancy"],
    ["diskursus", "言説", "discourse"],
    ["disrupsi", "破壊的変化", "disruption"],
    ["diversifikasi", "多様化", "diversification"],
    ["elaborasi", "詳述", "elaboration"],
    ["eskalasi", "激化", "escalation"],
    ["evaluasi", "評価", "evaluation"],
    ["fragmentasi", "断片化", "fragmentation"],
    ["hegemoni", "覇権", "hegemony"],
    ["hipotesis", "仮説", "hypothesis"],
    ["identifikasi", "特定", "identification"],
    ["implikasi", "含意、影響", "implication"],
    ["indikator", "指標", "indicator"],
    ["inkonsistensi", "不一致", "inconsistency"],
    ["inovasi", "革新", "innovation"],
    ["institusionalisasi", "制度化", "institutionalization"],
    ["integrasi", "統合", "integration"],
    ["intensifikasi", "強化", "intensification"],
    ["interdependensi", "相互依存", "interdependence"],
    ["internalisasi", "内面化", "internalization"],
    ["interpretasi", "解釈", "interpretation"],
    ["justifikasi", "正当化", "justification"],
    ["koherensi", "整合性", "coherence"],
    ["komodifikasi", "商品化", "commodification"],
    ["konfigurasi", "構成", "configuration"],
    ["konsolidasi", "統合、強化", "consolidation"],
    ["konstruksi", "構築", "construction"],
    ["kontestasi", "競合、争奪", "contestation"],
    ["kontradiksi", "矛盾", "contradiction"],
    ["konvergensi", "収束", "convergence"],
    ["korelasi", "相関", "correlation"],
    ["legitimasi", "正当性", "legitimacy"],
    ["marjinalisasi", "周縁化", "marginalization"],
    ["mekanisme", "仕組み", "mechanism"],
    ["mobilisasi", "動員", "mobilization"],
    ["narasi", "語り、叙述", "narrative"],
    ["normalisasi", "正常化", "normalization"],
    ["objektivitas", "客観性", "objectivity"],
    ["parameter", "基準、パラメータ", "parameter"],
    ["paradigma", "枠組み", "paradigm"],
    ["pelanggengan", "永続化", "perpetuation"],
    ["pembacaan", "読み解き", "reading; interpretation"],
    ["pembentukan", "形成", "formation"],
    ["pemodelan", "モデル化", "modeling"],
    ["pengarusutamaan", "主流化", "mainstreaming"],
    ["penguatan", "強化", "strengthening"],
    ["penjabaran", "詳述", "elaboration"],
    ["penormalan", "正常化", "normalization"],
    ["perampasan", "収奪", "dispossession"],
    ["perdebatan", "論争", "debate"],
    ["pergeseran", "移行", "shift"],
    ["pertautan", "連関", "linkage"],
    ["pluralitas", "多元性", "plurality"],
    ["polarisasi", "分極化", "polarization"],
    ["problematisasi", "問題化", "problematization"],
    ["rasionalisasi", "合理化", "rationalization"],
    ["rekonsiliasi", "和解", "reconciliation"],
    ["rekonstruksi", "再構築", "reconstruction"],
    ["representasi", "表象、代表", "representation"],
    ["reproduksi", "再生産", "reproduction"],
    ["resiprositas", "相互性", "reciprocity"],
    ["restrukturisasi", "再編", "restructuring"],
    ["revitalisasi", "再活性化", "revitalization"],
    ["segmentasi", "区分", "segmentation"],
    ["sentralisasi", "中央集権化", "centralization"],
    ["sintesis", "総合", "synthesis"],
    ["subordinasi", "従属", "subordination"],
    ["subjektivitas", "主観性", "subjectivity"],
    ["transformasi", "変革", "transformation"],
    ["validasi", "検証", "validation"],
    ["variabilitas", "変動性", "variability"],
    ["wacana", "言説", "discourse"]
  ];

  const advancedDomains = [
    ["demokrasi deliberatif", "熟議民主主義", "deliberative democracy"],
    ["ekonomi digital", "デジタル経済", "digital economy"],
    ["ekonomi politik", "政治経済", "political economy"],
    ["etika publik", "公共倫理", "public ethics"],
    ["globalisasi ekonomi", "経済のグローバル化", "economic globalization"],
    ["hak asasi manusia", "人権", "human rights"],
    ["hubungan internasional", "国際関係", "international relations"],
    ["identitas kolektif", "集合的アイデンティティ", "collective identity"],
    ["integrasi regional", "地域統合", "regional integration"],
    ["kapitalisme global", "グローバル資本主義", "global capitalism"],
    ["keadilan sosial", "社会正義", "social justice"],
    ["kebijakan fiskal", "財政政策", "fiscal policy"],
    ["kebijakan moneter", "金融政策", "monetary policy"],
    ["kedaulatan pangan", "食料主権", "food sovereignty"],
    ["keamanan maritim", "海洋安全保障", "maritime security"],
    ["keamanan siber", "サイバー安全保障", "cybersecurity"],
    ["ketahanan iklim", "気候レジリエンス", "climate resilience"],
    ["ketimpangan struktural", "構造的格差", "structural inequality"],
    ["krisis ekologis", "生態危機", "ecological crisis"],
    ["krisis legitimasi", "正当性の危機", "legitimacy crisis"],
    ["literasi digital", "デジタルリテラシー", "digital literacy"],
    ["masyarakat sipil", "市民社会", "civil society"],
    ["migrasi tenaga kerja", "労働移民", "labor migration"],
    ["modernisasi birokrasi", "官僚制の近代化", "bureaucratic modernization"],
    ["otonomi daerah", "地方自治", "regional autonomy"],
    ["pembangunan inklusif", "包摂的開発", "inclusive development"],
    ["pembangunan berkelanjutan", "持続可能な開発", "sustainable development"],
    ["pemerintahan digital", "デジタル行政", "digital governance"],
    ["pendidikan kritis", "批判的教育", "critical education"],
    ["pengelolaan risiko", "リスク管理", "risk management"],
    ["perdagangan internasional", "国際貿易", "international trade"],
    ["perlindungan data", "データ保護", "data protection"],
    ["politik identitas", "アイデンティティ政治", "identity politics"],
    ["reformasi kelembagaan", "制度改革", "institutional reform"],
    ["relasi kekuasaan", "権力関係", "power relations"],
    ["sistem peradilan", "司法制度", "judicial system"],
    ["tata kelola global", "グローバル・ガバナンス", "global governance"],
    ["teknologi finansial", "金融技術", "financial technology"],
    ["transformasi energi", "エネルギー転換", "energy transformation"],
    ["urbanisasi cepat", "急速な都市化", "rapid urbanization"]
  ];

  const modifiers = [
    ["alternatif", "代替的な", "alternative"],
    ["asimetris", "非対称の", "asymmetric"],
    ["berlapis", "多層的な", "layered"],
    ["deliberatif", "熟議的な", "deliberative"],
    ["diskursif", "言説的な", "discursive"],
    ["dominan", "支配的な", "dominant"],
    ["eksplisit", "明示的な", "explicit"],
    ["empiris", "経験的な", "empirical"],
    ["hegemonik", "覇権的な", "hegemonic"],
    ["implisit", "暗黙の", "implicit"],
    ["inklusif", "包摂的な", "inclusive"],
    ["interdisipliner", "学際的な", "interdisciplinary"],
    ["komparatif", "比較の", "comparative"],
    ["kritis", "批判的な", "critical"],
    ["kumulatif", "累積的な", "cumulative"],
    ["normatif", "規範的な", "normative"],
    ["partikular", "個別的な", "particular"],
    ["prosedural", "手続き的な", "procedural"],
    ["reflektif", "省察的な", "reflective"],
    ["simultan", "同時的な", "simultaneous"],
    ["sistemik", "システム的な", "systemic"],
    ["strategis", "戦略的な", "strategic"],
    ["struktural", "構造的な", "structural"],
    ["substantif", "実質的な", "substantive"],
    ["transformatif", "変革的な", "transformative"]
  ];

  advancedHeads.forEach(([head, headJp, headEn]) => {
    advancedDomains.forEach(([domain, domainJp, domainEn]) => {
      addCard({
        word: `${head} ${domain}`,
        japanese: `${domainJp}の${headJp}`,
        english: `${domainEn} ${headEn}`,
        partOfSpeech: "名詞句",
        example: `Artikel itu membahas ${head} ${domain} secara mendalam.`,
        exampleJapanese: `その論文は${domainJp}の${headJp}を深く論じています。`,
        note: "A級で専門的な論説・翻訳・時事読解に出やすい抽象名詞句。"
      });
    });
  });

  advancedDomains.forEach(([domain, domainJp, domainEn]) => {
    modifiers.forEach(([modifier, modifierJp, modifierEn]) => {
      addCard({
        word: `${domain} ${modifier}`,
        japanese: `${modifierJp}${domainJp}`,
        english: `${modifierEn} ${domainEn}`,
        partOfSpeech: "名詞句",
        example: `Isu ${domain} ${modifier} memerlukan kajian lanjutan.`,
        exampleJapanese: `${modifierJp}${domainJp}の問題にはさらなる検討が必要です。`,
        note: "A級で形容詞が後置される高度な専門名詞句。"
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

  const needed = Math.max(0, targetTotal - currentAWords.length);
  chosen.slice(0, needed).forEach((card, index) => {
    appData.words.push({
      id: `a-${String(currentMaxNumber + index + 1).padStart(3, "0")}`,
      ...card
    });
  });
})();
