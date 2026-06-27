(function () {
  const appData = window.INDONESIAN_FLASHCARD_DATA;
  if (!appData || !Array.isArray(appData.words)) {
    return;
  }

  const targetTotal = 1000;
  const usedWords = new Set(appData.words.map((word) => word.word.toLowerCase()));
  const currentCWords = appData.words.filter((word) => word.level === "C");
  const currentMaxNumber = currentCWords.reduce((max, word) => {
    const match = /^c-(\d+)$/.exec(word.id);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);

  const candidates = [];

  function sentenceCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function firstEnglishAction(text) {
    const action = String(text || "this action")
      .replace(/^to\s+/i, "")
      .split(";")[0]
      .trim();
    return action || "this action";
  }

  function toGerund(action) {
    const parts = action.split(/\s+/);
    const verb = parts.shift() || "do";
    const irregular = {
      be: "being",
      run: "running",
      put: "putting",
      cut: "cutting",
      get: "getting",
      begin: "beginning",
      swim: "swimming"
    };
    let gerund = irregular[verb];

    if (!gerund) {
      if (verb.endsWith("ie")) {
        gerund = `${verb.slice(0, -2)}ying`;
      } else if (verb.endsWith("e") && !verb.endsWith("ee")) {
        gerund = `${verb.slice(0, -1)}ing`;
      } else {
        gerund = `${verb}ing`;
      }
    }

    return [gerund, ...parts].join(" ");
  }

  const englishOverrides = {
    layanan: "service; response",
    kembalian: "change; returned item",
    produk: "product",
    aturan: "rule",
    daftar: "list",
    laporan: "report",
    pilihan: "choice",
    kiriman: "shipment; sent item",
    bayaran: "payment; fee",
    pakaian: "clothing",
    kegunaan: "usefulness",
    catatan: "note; record",
    hubungan: "relationship",
    sambungan: "connection",
    keputusan: "decision",
    tambahan: "addition",
    kekurangan: "shortage; weakness",
    kenaikan: "increase; rise",
    penurunan: "decrease; decline",
    tingkatan: "level; grade",
    perbaikan: "repair; improvement",
    perpanjangan: "extension",
    kecepatan: "speed",
    kekuatan: "strength",
    kesiapan: "readiness",
    ketersediaan: "availability",
    simpanan: "savings; stored item",
    kumpulan: "collection",
    susunan: "arrangement",
    perpisahan: "separation; farewell",
    campuran: "mixture",
    perbandingan: "comparison",
    nilai: "score; value",
    ukuran: "size; measurement",
    hitungan: "calculation; count",
    timbangan: "scale; weighing result",
    ketelitian: "accuracy; carefulness",
    keselamatan: "safety",
    keamanan: "security; safety",
    kesehatan: "health",
    penyakit: "illness; disease",
    rawatan: "care; treatment",
    pendidikan: "education",
    latihan: "training; exercise",
    ujian: "test; examination",
    terjemahan: "translation",
    cetakan: "print; printed item",
    penjualan: "sale; sales",
    pembelian: "purchase",
    tawaran: "offer",
    pesanan: "order; reservation",
    sewaan: "rental item",
    pinjaman: "loan; borrowed item",
    warisan: "inheritance; heritage",
    wakil: "representative",
    ajakan: "invitation",
    penolakan: "refusal; rejection",
    persetujuan: "approval; agreement",
    kepercayaan: "trust; belief",
    ingatan: "memory",
    pikiran: "thought; mind",
    perasaan: "feeling",
    kenikmatan: "enjoyment",
    kekhawatiran: "worry; concern",
    ketertarikan: "interest; attraction",
    dorongan: "push; encouragement",
    tekanan: "pressure",
    angkatan: "generation; lifted group",
    perpindahan: "movement; transfer",
    peralihan: "shift; transition",
    isi: "content",
    kekosongan: "emptiness; vacancy",
    kepenuhan: "fullness",
    muatan: "load; content",
    tulisan: "writing; written text",
    bacaan: "reading material",
    pendengaran: "hearing",
    penglihatan: "sight; vision",
    carian: "search result",
    temuan: "finding",
    kehilangan: "loss",
    masukan: "input; suggestion",
    keluaran: "output; issued item",
    perjalanan: "trip; process",
    hasil: "result; product"
  };

  function generatedEnglish(item, slot, fallback) {
    return item[`${slot}En`] || englishOverrides[item[slot]] || fallback;
  }

  function addCard(card) {
    candidates.push({
      level: "C",
      category: card.partOfSpeech,
      ...card
    });
  }

  function addAffixFamily(item) {
    const nounJp = item.activeJp.replace(/する$/, "");
    const actionIng = toGerund(firstEnglishAction(item.activeEn));
    const object = item.object || "masalah itu";
    const objectJp = item.objectJp || "その問題";

    if (item.active) {
      addCard({
        word: item.active,
        japanese: item.activeJp,
        english: item.activeEn,
        partOfSpeech: "動詞",
        example: `${item.subject || "Mereka"} ${item.active} ${object}.`,
        exampleJapanese: `${item.subjectJp || "彼ら"}は${objectJp}を${item.activeJp}。`,
        note: `語幹 ${item.root}。C級で重要な接辞つき動詞。`
      });
    }

    if (item.passive) {
      addCard({
        word: item.passive,
        japanese: `${nounJp}される`,
        english: `to be ${item.passiveEn || item.activeEn.replace(/^to /, "")}`,
        partOfSpeech: "動詞",
        example: `${sentenceCase(object)} ${item.passive} oleh ${item.agent || "petugas"}.`,
        exampleJapanese: `${objectJp}は${item.agentJp || "係員"}によって${nounJp}されます。`,
        note: `di- 形。C級では受動態としてよく出る。`
      });
    }

    if (item.process) {
      addCard({
        word: item.process,
        japanese: `${nounJp}、${nounJp}過程`,
        english: generatedEnglish(item, "process", `process of ${actionIng}`),
        partOfSpeech: "名詞",
        example: `${sentenceCase(item.process)} ${object} berjalan lancar.`,
        exampleJapanese: `${objectJp}の${nounJp}は順調に進みます。`,
        note: `peN-an / per-an 系の名詞。行為や過程を表す。`
      });
    }

    if (item.result) {
      addCard({
        word: item.result,
        japanese: `${nounJp}結果、${item.resultJp || nounJp}`,
        english: generatedEnglish(item, "result", `result of ${actionIng}`),
        partOfSpeech: "名詞",
        example: `${sentenceCase(item.result)} itu sudah diterima.`,
        exampleJapanese: `その${item.resultJp || nounJp}はすでに受け取られました。`,
        note: `-an 系の名詞。結果・物・内容を表すことが多い。`
      });
    }

    if (item.actor) {
      addCard({
        word: item.actor,
        japanese: `${nounJp}する人、${item.actorJp || "担当者"}`,
        english: generatedEnglish(item, "actor", `person involved in ${actionIng}`),
        partOfSpeech: "名詞",
        example: `${sentenceCase(item.actor)} itu menjelaskan tugasnya.`,
        exampleJapanese: `その${item.actorJp || "担当者"}は自分の仕事を説明します。`,
        note: `peN- 系の名詞。人や主体を表す。`
      });
    }

    if (item.abstract) {
      addCard({
        word: item.abstract,
        japanese: item.abstractJp || `${nounJp}性、${nounJp}状態`,
        english: generatedEnglish(item, "abstract", `state related to ${actionIng}`),
        partOfSpeech: "名詞",
        example: `${sentenceCase(item.abstract)} itu penting dalam pekerjaan.`,
        exampleJapanese: `${item.abstractJp || nounJp}は仕事で重要です。`,
        note: `ke-an 系の名詞。状態や抽象概念を表す。`
      });
    }

    if (item.relatedAdjective) {
      addCard({
        word: item.relatedAdjective,
        japanese: item.relatedAdjectiveJp,
        english: item.relatedAdjectiveEn,
        partOfSpeech: "形容詞",
        example: `Situasi itu ${item.relatedAdjective}.`,
        exampleJapanese: `その状況は${item.relatedAdjectiveJp}です。`,
        note: `語幹 ${item.root} と関連する形容詞。`
      });
    }
  }

  const affixFamilies = [
    ["kelola", "mengelola", "dikelola", "pengelolaan", "pengelola", "kelolaan", "管理する", "to manage", "program itu", "そのプログラム"],
    ["lindung", "melindungi", "dilindungi", "perlindungan", "pelindung", "lindungan", "保護する", "to protect", "hak pekerja", "労働者の権利"],
    ["layan", "melayani", "dilayani", "pelayanan", "pelayan", "layanan", "対応する、サービスする", "to serve", "pelanggan", "客"],
    ["kembang", "mengembangkan", "dikembangkan", "pengembangan", "pengembang", "perkembangan", "発展させる、開発する", "to develop", "usaha kecil", "小規模事業"],
    ["bangun", "membangun", "dibangun", "pembangunan", "pembangun", "bangunan", "建設する、築く", "to build", "jembatan baru", "新しい橋"],
    ["produksi", "memproduksi", "diproduksi", "produksi", "produsen", "produk", "生産する", "to produce", "barang lokal", "地元製品"],
    ["distribusi", "mendistribusikan", "didistribusikan", "pendistribusian", "distributor", "distribusi", "配送する、分配する", "to distribute", "bantuan", "支援物資"],
    ["dukung", "mendukung", "didukung", "dukungan", "pendukung", "pendukungan", "支援する、支持する", "to support", "rencana pemerintah", "政府の計画"],
    ["pilih", "memilih", "dipilih", "pemilihan", "pemilih", "pilihan", "選ぶ", "to choose", "wakil kelas", "クラス代表"],
    ["kirim", "mengirim", "dikirim", "pengiriman", "pengirim", "kiriman", "送る", "to send", "dokumen penting", "重要書類"],
    ["terima", "menerima", "diterima", "penerimaan", "penerima", "terimaan", "受け取る、受け入れる", "to receive", "surat resmi", "公式文書"],
    ["bayar", "membayar", "dibayar", "pembayaran", "pembayar", "bayaran", "支払う", "to pay", "biaya sekolah", "学費"],
    ["pakai", "memakai", "dipakai", "pemakaian", "pemakai", "pakaian", "使う、着る", "to use; wear", "alat ini", "この道具"],
    ["guna", "menggunakan", "digunakan", "penggunaan", "pengguna", "kegunaan", "使用する", "to use", "aplikasi baru", "新しいアプリ"],
    ["buka", "membuka", "dibuka", "pembukaan", "pembuka", "bukaan", "開く、開始する", "to open", "pendaftaran", "登録受付"],
    ["tutup", "menutup", "ditutup", "penutupan", "penutup", "tutupan", "閉じる、終了する", "to close", "jalan utama", "主要道路"],
    ["atur", "mengatur", "diatur", "pengaturan", "pengatur", "aturan", "調整する、整える", "to arrange", "jadwal kerja", "勤務予定"],
    ["urus", "mengurus", "diurus", "pengurusan", "pengurus", "urusan", "手続きする、世話する", "to handle", "izin tinggal", "滞在許可"],
    ["daftar", "mendaftar", "didaftar", "pendaftaran", "pendaftar", "daftar", "登録する、申し込む", "to register", "kursus bahasa", "語学講座"],
    ["catat", "mencatat", "dicatat", "pencatatan", "pencatat", "catatan", "記録する、メモする", "to record", "hasil rapat", "会議結果"],
    ["lapor", "melaporkan", "dilaporkan", "pelaporan", "pelapor", "laporan", "報告する", "to report", "kejadian itu", "その出来事"],
    ["jelas", "menjelaskan", "dijelaskan", "penjelasan", "penjelas", "kejelasan", "説明する", "to explain", "peraturan baru", "新しい規則"],
    ["terang", "menerangkan", "diterangkan", "penerangan", "penerang", "keterangan", "説明する、明らかにする", "to explain", "cara pemakaian", "使用方法"],
    ["hubung", "menghubungi", "dihubungi", "penghubungan", "penghubung", "hubungan", "連絡する", "to contact", "kantor pusat", "本社"],
    ["sambung", "menyambungkan", "disambungkan", "penyambungan", "penyambung", "sambungan", "つなぐ、接続する", "to connect", "telepon", "電話"],
    ["putus", "memutuskan", "diputuskan", "pemutusan", "pemutus", "keputusan", "決定する、切る", "to decide; cut", "perkara itu", "その件"],
    ["tentu", "menentukan", "ditentukan", "penentuan", "penentu", "ketentuan", "決定する、定める", "to determine", "tanggal ujian", "試験日"],
    ["ubah", "mengubah", "diubah", "perubahan", "pengubah", "ubahan", "変える", "to change", "rencana awal", "最初の計画"],
    ["ganti", "mengganti", "diganti", "penggantian", "pengganti", "gantian", "交換する、替える", "to replace", "kartu lama", "古いカード"],
    ["tambah", "menambah", "ditambah", "penambahan", "penambah", "tambahan", "増やす、加える", "to add", "jumlah peserta", "参加者数"],
    ["kurang", "mengurangi", "dikurangi", "pengurangan", "pengurang", "kekurangan", "減らす", "to reduce", "biaya produksi", "生産費"],
    ["naik", "menaikkan", "dinaikkan", "kenaikan", "penaik", "naikan", "上げる", "to raise", "harga beras", "米の価格"],
    ["turun", "menurunkan", "diturunkan", "penurunan", "penurun", "turunan", "下げる、降ろす", "to lower", "tarif listrik", "電気料金"],
    ["tingkat", "meningkatkan", "ditingkatkan", "peningkatan", "peningkat", "tingkatan", "向上させる、増やす", "to improve; increase", "kualitas layanan", "サービス品質"],
    ["baik", "memperbaiki", "diperbaiki", "perbaikan", "pemerbaik", "kebaikan", "直す、改善する", "to fix; improve", "mesin rusak", "壊れた機械"],
    ["besar", "memperbesar", "diperbesar", "pembesaran", "pembesar", "kebesaran", "大きくする", "to enlarge", "ukuran gambar", "画像サイズ"],
    ["kecil", "memperkecil", "diperkecil", "pengecilan", "pengecil", "kekecilan", "小さくする", "to reduce", "ukuran file", "ファイルサイズ"],
    ["panjang", "memperpanjang", "diperpanjang", "perpanjangan", "pemanjang", "kepanjangan", "延長する", "to extend", "masa berlaku visa", "ビザの有効期間"],
    ["pendek", "memperpendek", "diperpendek", "pemendekan", "pemendek", "kependekan", "短くする", "to shorten", "waktu tunggu", "待ち時間"],
    ["cepat", "mempercepat", "dipercepat", "percepatan", "pemercepat", "kecepatan", "速める", "to speed up", "proses kerja", "作業工程"],
    ["lambat", "memperlambat", "diperlambat", "perlambatan", "pelambat", "kelambatan", "遅くする", "to slow down", "laju kendaraan", "車両の速度"],
    ["luas", "memperluas", "diperluas", "perluasan", "pemerluas", "keluasan", "広げる、拡大する", "to expand", "jaringan internet", "インターネット網"],
    ["sempit", "mempersempit", "dipersempit", "penyempitan", "penyempit", "kesempitan", "狭める", "to narrow", "jalan itu", "その道"],
    ["kuat", "memperkuat", "diperkuat", "penguatan", "penguat", "kekuatan", "強める", "to strengthen", "kerja sama", "協力"],
    ["lemah", "melemahkan", "dilemahkan", "pelemahan", "pelemah", "kelemahan", "弱める", "to weaken", "nilai uang", "通貨価値"],
    ["siap", "menyiapkan", "disiapkan", "persiapan", "penyiap", "kesiapan", "準備する", "to prepare", "bahan rapat", "会議資料"],
    ["sedia", "menyediakan", "disediakan", "penyediaan", "penyedia", "ketersediaan", "提供する、用意する", "to provide", "air bersih", "清潔な水"],
    ["simpan", "menyimpan", "disimpan", "penyimpanan", "penyimpan", "simpanan", "保管する、貯める", "to store", "data pelanggan", "顧客データ"],
    ["kumpul", "mengumpulkan", "dikumpulkan", "pengumpulan", "pengumpul", "kumpulan", "集める、提出する", "to collect", "formulir pendaftaran", "申込用紙"],
    ["susun", "menyusun", "disusun", "penyusunan", "penyusun", "susunan", "作成する、並べる", "to arrange; compose", "laporan bulanan", "月次報告"],
    ["pisah", "memisahkan", "dipisahkan", "pemisahan", "pemisah", "perpisahan", "分ける", "to separate", "sampah plastik", "プラスチックごみ"],
    ["campur", "mencampur", "dicampur", "pencampuran", "pencampur", "campuran", "混ぜる", "to mix", "bahan makanan", "食材"],
    ["banding", "membandingkan", "dibandingkan", "perbandingan", "pembanding", "bandingan", "比較する", "to compare", "dua produk", "2つの商品"],
    ["nilai", "menilai", "dinilai", "penilaian", "penilai", "nilai", "評価する", "to evaluate", "hasil kerja", "仕事の結果"],
    ["ukur", "mengukur", "diukur", "pengukuran", "pengukur", "ukuran", "測る", "to measure", "suhu tubuh", "体温"],
    ["hitung", "menghitung", "dihitung", "perhitungan", "penghitung", "hitungan", "数える、計算する", "to count; calculate", "biaya perjalanan", "旅行費用"],
    ["timbang", "menimbang", "ditimbang", "penimbangan", "penimbang", "timbangan", "量る、検討する", "to weigh; consider", "barang bawaan", "手荷物"],
    ["periksa", "memeriksa", "diperiksa", "pemeriksaan", "pemeriksa", "periksa", "確認する、検査する", "to check", "dokumen perjalanan", "旅行書類"],
    ["teliti", "meneliti", "diteliti", "penelitian", "peneliti", "ketelitian", "調査する、研究する", "to research", "kebiasaan masyarakat", "社会の習慣"],
    ["amat", "mengamati", "diamati", "pengamatan", "pengamat", "amatan", "観察する", "to observe", "perubahan cuaca", "天気の変化"],
    ["awasi", "mengawasi", "diawasi", "pengawasan", "pengawas", "awasan", "監視する、見守る", "to supervise", "kegiatan siswa", "生徒の活動"],
    ["kendali", "mengendalikan", "dikendalikan", "pengendalian", "pengendali", "kendali", "制御する", "to control", "lalu lintas", "交通"],
    ["cegah", "mencegah", "dicegah", "pencegahan", "pencegah", "cegahan", "防ぐ", "to prevent", "kecelakaan", "事故"],
    ["hindar", "menghindari", "dihindari", "penghindaran", "penghindar", "hindaran", "避ける", "to avoid", "kemacetan", "渋滞"],
    ["selamat", "menyelamatkan", "diselamatkan", "penyelamatan", "penyelamat", "keselamatan", "救う", "to rescue", "korban banjir", "洪水の被災者"],
    ["aman", "mengamankan", "diamankan", "pengamanan", "pengaman", "keamanan", "安全を確保する", "to secure", "lokasi acara", "行事会場"],
    ["sehat", "menyehatkan", "disehatkan", "penyehatan", "penyehat", "kesehatan", "健康にする", "to make healthy", "lingkungan kerja", "職場環境"],
    ["sakit", "menyakiti", "disakiti", "penyakitan", "penyakit", "kesakitan", "傷つける", "to hurt", "perasaan orang lain", "他人の気持ち"],
    ["obat", "mengobati", "diobati", "pengobatan", "pengobat", "obatan", "治療する", "to treat", "pasien demam", "熱の患者"],
    ["rawat", "merawat", "dirawat", "perawatan", "perawat", "rawatan", "世話する、看護する", "to care for", "pasien tua", "高齢患者"],
    ["didik", "mendidik", "dididik", "pendidikan", "pendidik", "didikan", "教育する", "to educate", "anak-anak", "子どもたち"],
    ["ajar", "mengajar", "diajarkan", "pengajaran", "pengajar", "ajaran", "教える", "to teach", "bahasa asing", "外国語"],
    ["latih", "melatih", "dilatih", "pelatihan", "pelatih", "latihan", "訓練する、練習させる", "to train", "pegawai baru", "新入職員"],
    ["uji", "menguji", "diuji", "pengujian", "penguji", "ujian", "試験する、試す", "to test", "kemampuan bahasa", "語学力"],
    ["terjemah", "menerjemahkan", "diterjemahkan", "penerjemahan", "penerjemah", "terjemahan", "翻訳する", "to translate", "dokumen resmi", "公式書類"],
    ["cetak", "mencetak", "dicetak", "pencetakan", "pencetak", "cetakan", "印刷する", "to print", "brosur wisata", "観光パンフレット"],
    ["jual", "menjual", "dijual", "penjualan", "penjual", "jualan", "売る", "to sell", "produk lokal", "地元製品"],
    ["beli", "membeli", "dibeli", "pembelian", "pembeli", "belian", "買う", "to buy", "barang kebutuhan", "必要品"],
    ["tawar", "menawar", "ditawar", "penawaran", "penawar", "tawaran", "値切る、提案する", "to bargain; offer", "harga barang", "商品の値段"],
    ["pesan", "memesan", "dipesan", "pemesanan", "pemesan", "pesanan", "予約する、注文する", "to order; reserve", "kamar hotel", "ホテルの部屋"],
    ["sewa", "menyewa", "disewa", "penyewaan", "penyewa", "sewaan", "借りる", "to rent", "rumah kecil", "小さな家"],
    ["pinjam", "meminjam", "dipinjam", "peminjaman", "peminjam", "pinjaman", "借りる", "to borrow", "buku referensi", "参考書"],
    ["kembali", "mengembalikan", "dikembalikan", "pengembalian", "pengembali", "kembalian", "返す、戻す", "to return", "barang pinjaman", "借りた品物"],
    ["waris", "mewarisi", "diwarisi", "pewarisan", "pewaris", "warisan", "受け継ぐ", "to inherit", "budaya lokal", "地域文化"],
    ["wakil", "mewakili", "diwakili", "perwakilan", "perwakil", "wakil", "代表する", "to represent", "kelompok itu", "そのグループ"],
    ["hadir", "menghadiri", "dihadiri", "kehadiran", "peserta", "hadiran", "出席する", "to attend", "rapat penting", "重要な会議"],
    ["ajak", "mengajak", "diajak", "ajakan", "pengajak", "ajakan", "誘う", "to invite", "tetangga", "近所の人"],
    ["tolak", "menolak", "ditolak", "penolakan", "penolak", "tolakan", "断る、拒否する", "to refuse", "usulan itu", "その提案"],
    ["setuju", "menyetujui", "disetujui", "persetujuan", "penyetuju", "kesetujuan", "同意する、承認する", "to approve", "rencana kerja", "作業計画"],
    ["percaya", "mempercayai", "dipercayai", "kepercayaan", "pemercaya", "percaya", "信じる", "to trust", "informasi itu", "その情報"],
    ["ingat", "mengingat", "diingat", "peringatan", "pengingat", "ingatan", "覚えている、思い出す", "to remember", "jadwal ujian", "試験予定"],
    ["lupa", "melupakan", "dilupakan", "pelupaan", "pelupa", "kelupaan", "忘れる", "to forget", "nomor telepon", "電話番号"],
    ["pikir", "memikirkan", "dipikirkan", "pemikiran", "pemikir", "pikiran", "考える", "to think about", "masa depan", "将来"],
    ["rasa", "merasakan", "dirasakan", "perasaan", "perasa", "rasa", "感じる", "to feel", "perubahan udara", "空気の変化"],
    ["suka", "menyukai", "disukai", "kesukaan", "penyuka", "sukaan", "好む", "to like", "makanan manis", "甘い食べ物"],
    ["nikmat", "menikmati", "dinikmati", "kenikmatan", "penikmat", "nikmat", "楽しむ、味わう", "to enjoy", "pemandangan laut", "海の景色"],
    ["khawatir", "mengkhawatirkan", "dikhawatirkan", "kekhawatiran", "pengkhawatir", "khawatir", "心配させる、懸念する", "to worry", "keselamatan anak", "子どもの安全"],
    ["haru", "mengharukan", "diharukan", "keharuan", "pengharu", "haruan", "感動させる", "to move emotionally", "cerita keluarga", "家族の話"],
    ["minat", "meminati", "diminati", "peminatan", "peminat", "minat", "興味を持つ", "to be interested in", "kelas musik", "音楽クラス"],
    ["tarik", "menarik", "ditarik", "penarikan", "penarik", "ketertarikan", "引く、興味を引く", "to pull; attract", "perhatian wisatawan", "観光客の注意"],
    ["dorong", "mendorong", "didorong", "dorongan", "pendorong", "dorongan", "押す、促す", "to push; encourage", "perubahan positif", "よい変化"],
    ["tekan", "menekan", "ditekan", "tekanan", "penekan", "tekanan", "押す、圧力をかける", "to press", "tombol merah", "赤いボタン"],
    ["angkat", "mengangkat", "diangkat", "pengangkatan", "pengangkat", "angkatan", "持ち上げる、任命する", "to lift; appoint", "barang berat", "重い荷物"],
    ["pindah", "memindahkan", "dipindahkan", "pemindahan", "pemindah", "perpindahan", "移す、引っ越す", "to move", "kantor cabang", "支店"],
    ["alih", "mengalihkan", "dialihkan", "pengalihan", "pengalih", "peralihan", "移す、転換する", "to shift", "perhatian", "注意"],
    ["isi", "mengisi", "diisi", "pengisian", "pengisi", "isi", "記入する、満たす", "to fill in", "formulir online", "オンライン用紙"],
    ["kosong", "mengosongkan", "dikosongkan", "pengosongan", "pengosong", "kekosongan", "空にする", "to empty", "ruang rapat", "会議室"],
    ["penuh", "memenuhi", "dipenuhi", "pemenuhan", "pemenuh", "kepenuhan", "満たす", "to fulfill", "kebutuhan warga", "住民の必要"],
    ["muat", "memuat", "dimuat", "pemuatan", "pemuat", "muatan", "載せる、含む", "to load; contain", "berita itu", "そのニュース"],
    ["tulis", "menulis", "ditulis", "penulisan", "penulis", "tulisan", "書く", "to write", "artikel pendek", "短い記事"],
    ["baca", "membaca", "dibaca", "pembacaan", "pembaca", "bacaan", "読む", "to read", "petunjuk pemakaian", "使用説明"],
    ["dengar", "mendengarkan", "didengarkan", "pendengaran", "pendengar", "dengaran", "聞く", "to listen to", "penjelasan guru", "先生の説明"],
    ["lihat", "melihat", "dilihat", "penglihatan", "penglihat", "kelihatan", "見る", "to see", "hasil pemeriksaan", "検査結果"],
    ["cari", "mencari", "dicari", "pencarian", "pencari", "carian", "探す", "to search", "informasi terbaru", "最新情報"],
    ["temu", "menemukan", "ditemukan", "penemuan", "penemu", "temuan", "見つける", "to find", "data baru", "新しいデータ"],
    ["hilang", "menghilangkan", "dihilangkan", "penghilangan", "penghilang", "kehilangan", "なくす、消す", "to remove", "rasa takut", "恐怖感"],
    ["muncul", "memunculkan", "dimunculkan", "kemunculan", "pemuncul", "munculan", "現れさせる", "to bring up", "pertanyaan baru", "新しい質問"],
    ["masuk", "memasukkan", "dimasukkan", "pemasukan", "pemasok", "masukan", "入れる", "to put in", "data peserta", "参加者データ"],
    ["keluar", "mengeluarkan", "dikeluarkan", "pengeluaran", "pengeluar", "keluaran", "出す、発行する", "to issue; take out", "peraturan baru", "新しい規則"],
    ["jalan", "menjalankan", "dijalankan", "pelaksanaan", "pelaksana", "perjalanan", "実施する、走らせる", "to run; carry out", "program bantuan", "支援プログラム"],
    ["laksana", "melaksanakan", "dilaksanakan", "pelaksanaan", "pelaksana", "kelaksanaan", "実施する", "to implement", "kegiatan sosial", "社会活動"],
    ["hasil", "menghasilkan", "dihasilkan", "penghasilan", "penghasil", "hasil", "生み出す", "to produce", "produk baru", "新製品"]
  ];

  affixFamilies.forEach((row) => {
    addAffixFamily({
      root: row[0],
      active: row[1],
      passive: row[2],
      process: row[3],
      actor: row[4],
      result: row[5],
      activeJp: row[6],
      activeEn: row[7],
      object: row[8],
      objectJp: row[9]
    });
  });

  const directRows = [
    ["sebaliknya", "反対に", "on the contrary", "接続詞", "Sebaliknya, harga barang itu turun.", "反対に、その商品の価格は下がりました。"],
    ["sedangkan", "一方で", "whereas", "接続詞", "Saya bekerja, sedangkan adik saya belajar.", "私は働いていますが、一方で弟は勉強しています。"],
    ["sementara itu", "一方、その間に", "meanwhile", "接続詞", "Sementara itu, warga menunggu bantuan.", "その間、住民は支援を待っていました。"],
    ["dengan demikian", "したがって", "therefore", "接続詞", "Dengan demikian, masalah itu selesai.", "したがって、その問題は解決しました。"],
    ["akibatnya", "その結果", "as a result", "接続詞", "Akibatnya, perjalanan menjadi lambat.", "その結果、移動は遅くなりました。"],
    ["oleh sebab itu", "そのため", "therefore", "接続詞", "Oleh sebab itu, jadwal diubah.", "そのため、予定が変更されました。"],
    ["namun demikian", "とはいえ", "nevertheless", "接続詞", "Namun demikian, pekerjaan tetap dilanjutkan.", "とはいえ、仕事は続けられました。"],
    ["meski begitu", "それでも", "even so", "接続詞", "Meski begitu, dia tetap datang.", "それでも、彼は来ました。"],
    ["seandainya", "もし〜ならば", "if; supposing", "接続詞", "Seandainya ada waktu, saya akan membantu.", "もし時間があれば、私は手伝います。"],
    ["asalkan", "〜しさえすれば", "as long as", "接続詞", "Anda boleh masuk asalkan membawa kartu.", "カードを持っていれば入れます。"],
    ["kecuali", "〜を除いて", "except", "接続詞", "Semua hadir kecuali Pak Budi.", "ブディさんを除いて全員出席しました。"],
    ["lagipula", "そのうえ", "besides", "接続詞", "Lagipula, tempat itu jauh.", "そのうえ、その場所は遠いです。"],
    ["justru", "むしろ、かえって", "instead; precisely", "副詞", "Dia justru merasa senang.", "彼はむしろうれしく感じました。"],
    ["terutama", "特に", "especially", "副詞", "Saya suka buah, terutama mangga.", "私は果物、特にマンゴーが好きです。"],
    ["khususnya", "特に", "particularly", "副詞", "Program itu penting, khususnya bagi anak-anak.", "そのプログラムは特に子どもたちにとって重要です。"],
    ["umumnya", "一般に", "generally", "副詞", "Umumnya, toko buka pukul sembilan.", "一般に、店は9時に開きます。"],
    ["sebagian besar", "大部分", "most", "副詞", "Sebagian besar peserta sudah hadir.", "参加者の大部分はすでに出席しています。"],
    ["setidaknya", "少なくとも", "at least", "副詞", "Setidaknya kita perlu dua hari.", "少なくとも私たちは2日必要です。"],
    ["sekurang-kurangnya", "少なくとも", "at least", "副詞", "Biaya itu sekurang-kurangnya seratus ribu rupiah.", "その費用は少なくとも10万ルピアです。"],
    ["berturut-turut", "連続して", "consecutively", "副詞", "Dia menang tiga kali berturut-turut.", "彼は3回連続で勝ちました。"],
    ["secara umum", "一般的に", "in general", "副詞", "Secara umum, hasilnya baik.", "一般的に、結果は良いです。"],
    ["secara langsung", "直接に", "directly", "副詞", "Saya berbicara secara langsung dengan manajer.", "私はマネージャーと直接話しました。"],
    ["secara tidak langsung", "間接的に", "indirectly", "副詞", "Hal itu memengaruhi kami secara tidak langsung.", "それは私たちに間接的に影響しました。"],
    ["secara bertahap", "段階的に", "gradually", "副詞", "Harga akan naik secara bertahap.", "価格は段階的に上がるでしょう。"],
    ["secara resmi", "公式に", "officially", "副詞", "Hasil ujian diumumkan secara resmi.", "試験結果は公式に発表されました。"],
    ["mendadak", "突然", "suddenly", "副詞", "Rapat itu dibatalkan mendadak.", "その会議は突然中止されました。"],
    ["rupanya", "どうやら", "apparently", "副詞", "Rupanya dia belum tahu.", "どうやら彼はまだ知りません。"],
    ["tampaknya", "〜のようだ", "apparently; seemingly", "副詞", "Tampaknya cuaca akan membaik.", "天気は良くなりそうです。"],
    ["sebaik-baiknya", "できるだけよく", "as well as possible", "副詞", "Kami bekerja sebaik-baiknya.", "私たちはできるだけよく働きます。"],
    ["secepatnya", "できるだけ早く", "as soon as possible", "副詞", "Tolong hubungi saya secepatnya.", "できるだけ早く私に連絡してください。"],
    ["selambat-lambatnya", "遅くとも", "at the latest", "副詞", "Kirim laporan selambat-lambatnya hari Jumat.", "遅くとも金曜日に報告書を送ってください。"],
    ["dalam rangka", "〜の一環として", "in the framework of", "前置詞", "Acara ini diadakan dalam rangka hari kemerdekaan.", "この行事は独立記念日の一環として開催されます。"],
    ["berdasarkan", "〜に基づいて", "based on", "前置詞", "Keputusan dibuat berdasarkan data.", "決定はデータに基づいて行われました。"],
    ["menurut", "〜によると", "according to", "前置詞", "Menurut laporan itu, harga naik.", "その報告によると、価格は上がりました。"],
    ["terhadap", "〜に対して", "toward; against", "前置詞", "Warga memberi tanggapan terhadap kebijakan itu.", "住民はその政策に対して反応を示しました。"],
    ["mengenai", "〜について", "regarding", "前置詞", "Kami berdiskusi mengenai jadwal baru.", "私たちは新しい予定について議論しました。"],
    ["sehubungan dengan", "〜に関連して", "in connection with", "前置詞", "Sehubungan dengan rapat, kantor tutup lebih awal.", "会議に関連して、会社は早く閉まります。"],
    ["termasuk", "〜を含めて", "including", "前置詞", "Biaya itu termasuk makan siang.", "その費用には昼食が含まれます。"],
    ["dibandingkan dengan", "〜と比べて", "compared with", "前置詞", "Harga ini murah dibandingkan dengan toko lain.", "この価格は他の店と比べて安いです。"],
    ["tergantung pada", "〜次第である", "depending on", "前置詞", "Hasilnya tergantung pada usaha kita.", "結果は私たちの努力次第です。"],
    ["berkaitan dengan", "〜に関係している", "related to", "前置詞", "Masalah itu berkaitan dengan transportasi.", "その問題は交通に関係しています。"],
    ["demi", "〜のために", "for the sake of", "前置詞", "Mereka bekerja demi keluarga.", "彼らは家族のために働きます。"],
    ["guna", "〜のために", "in order to", "前置詞", "Kami menabung guna membeli rumah.", "私たちは家を買うために貯金します。"]
  ];

  directRows.forEach(([word, japanese, english, partOfSpeech, example, exampleJapanese]) => {
    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example,
      exampleJapanese,
      note: "C級で読解や作文に役立つ接続表現・機能語。"
    });
  });

  const simpleRows = [
    ["peraturan", "規則", "regulation", "名詞"], ["ketentuan", "規定", "provision; rule", "名詞"], ["kebijakan", "政策、方針", "policy", "名詞"],
    ["kegiatan", "活動", "activity", "名詞"], ["peristiwa", "出来事", "event", "名詞"], ["kejadian", "出来事、事件", "incident", "名詞"],
    ["kecelakaan", "事故", "accident", "名詞"], ["kerusakan", "損傷、故障", "damage", "名詞"], ["perbaikan", "修理、改善", "repair; improvement", "名詞"],
    ["penundaan", "延期", "delay; postponement", "名詞"], ["pembatalan", "中止、取り消し", "cancellation", "名詞"], ["pemberitahuan", "通知", "notification", "名詞"],
    ["pengumuman", "発表、お知らせ", "announcement", "名詞"], ["pernyataan", "声明、発言", "statement", "名詞"], ["tanggapan", "反応、返答", "response", "名詞"],
    ["kesimpulan", "結論", "conclusion", "名詞"], ["ringkasan", "要約", "summary", "名詞"], ["uraian", "説明、記述", "description", "名詞"],
    ["rincian", "詳細", "details", "名詞"], ["bukti", "証拠", "evidence", "名詞"], ["saksi", "証人", "witness", "名詞"], ["korban", "被害者", "victim", "名詞"],
    ["pelaku", "加害者、実行者", "perpetrator; actor", "名詞"], ["petugas", "係員", "officer; staff", "名詞"], ["pemilik", "所有者", "owner", "名詞"],
    ["penyewa", "借り主", "tenant; renter", "名詞"], ["pengunjung", "訪問者", "visitor", "名詞"], ["wisatawan", "観光客", "tourist", "名詞"],
    ["penduduk", "住民", "resident; population", "名詞"], ["warga", "住民、市民", "citizen; resident", "名詞"], ["komunitas", "共同体", "community", "名詞"],
    ["kelompok", "グループ", "group", "名詞"], ["organisasi", "組織", "organization", "名詞"], ["lembaga", "機関", "institution", "名詞"],
    ["perusahaan", "会社", "company", "名詞"], ["cabang", "支店", "branch", "名詞"], ["kantor pusat", "本社", "head office", "名詞句"],
    ["manajer", "管理者、マネージャー", "manager", "名詞"], ["atasan", "上司", "superior", "名詞"], ["bawahan", "部下", "subordinate", "名詞"],
    ["rekan kerja", "同僚", "coworker", "名詞句"], ["tenaga kerja", "労働力、労働者", "workforce", "名詞句"], ["lowongan", "求人、空き", "vacancy", "名詞"],
    ["lamaran", "応募", "application", "名詞"], ["wawancara", "面接", "interview", "名詞"], ["gaji", "給料", "salary", "名詞"], ["upah", "賃金", "wage", "名詞"],
    ["tunjangan", "手当", "allowance", "名詞"], ["cuti", "休暇", "leave", "名詞"], ["izin kerja", "就労許可", "work permit", "名詞句"],
    ["kontrak", "契約", "contract", "名詞"], ["perjanjian", "契約、合意", "agreement", "名詞"], ["tanggung jawab", "責任", "responsibility", "名詞句"],
    ["kewajiban", "義務", "obligation", "名詞"], ["hak", "権利", "right", "名詞"], ["keuntungan", "利益、利点", "benefit; profit", "名詞"],
    ["kerugian", "損失、損害", "loss", "名詞"], ["pendapatan", "収入", "income", "名詞"], ["pengeluaran", "支出", "expenditure", "名詞"],
    ["anggaran", "予算", "budget", "名詞"], ["modal", "資本", "capital", "名詞"], ["pinjaman", "融資、借金", "loan", "名詞"], ["tabungan", "貯金", "savings", "名詞"],
    ["pajak", "税金", "tax", "名詞"], ["bea cukai", "税関", "customs", "名詞句"], ["ekspor", "輸出", "export", "名詞"], ["impor", "輸入", "import", "名詞"],
    ["permintaan", "需要、依頼", "demand; request", "名詞"], ["penawaran", "供給、提案", "supply; offer", "名詞"], ["persediaan", "在庫", "stock; supply", "名詞"],
    ["kebutuhan pokok", "生活必需品", "basic necessities", "名詞句"], ["harga pokok", "原価", "basic cost", "名詞句"], ["kenaikan harga", "値上がり", "price increase", "名詞句"],
    ["penurunan harga", "値下がり", "price decrease", "名詞句"], ["lapangan kerja", "雇用機会", "job opportunity", "名詞句"], ["tingkat pengangguran", "失業率", "unemployment rate", "名詞句"],
    ["kemiskinan", "貧困", "poverty", "名詞"], ["kesejahteraan", "福祉、豊かさ", "welfare", "名詞"], ["bencana", "災害", "disaster", "名詞"],
    ["gempa bumi", "地震", "earthquake", "名詞句"], ["tanah longsor", "土砂崩れ", "landslide", "名詞句"], ["letusan gunung", "火山噴火", "volcanic eruption", "名詞句"],
    ["kebakaran", "火災", "fire", "名詞"], ["kekeringan", "干ばつ", "drought", "名詞"], ["pengungsian", "避難", "evacuation", "名詞"],
    ["pengungsi", "避難民", "evacuee; refugee", "名詞"], ["bantuan darurat", "緊急支援", "emergency aid", "名詞句"], ["posko", "対策本部、臨時拠点", "command post", "名詞"],
    ["lingkungan", "環境", "environment", "名詞"], ["sampah plastik", "プラスチックごみ", "plastic waste", "名詞句"], ["limbah", "廃棄物", "waste", "名詞"],
    ["daur ulang", "リサイクル", "recycling", "名詞句"], ["penghematan", "節約", "saving", "名詞"], ["energi", "エネルギー", "energy", "名詞"],
    ["listrik", "電気", "electricity", "名詞"], ["sumber daya", "資源", "resource", "名詞句"], ["air bersih", "清潔な水", "clean water", "名詞句"],
    ["saluran air", "排水路、水路", "water channel", "名詞句"], ["fasilitas umum", "公共施設", "public facility", "名詞句"], ["angkutan umum", "公共交通", "public transportation", "名詞句"],
    ["kemacetan lalu lintas", "交通渋滞", "traffic congestion", "名詞句"], ["kecelakaan lalu lintas", "交通事故", "traffic accident", "名詞句"],
    ["jalur", "路線、車線", "lane; route", "名詞"], ["rute", "ルート", "route", "名詞"], ["tujuan akhir", "最終目的地", "final destination", "名詞句"],
    ["peron", "ホーム", "platform", "名詞"], ["gerbong", "車両", "train car", "名詞"], ["kursi kosong", "空席", "empty seat", "名詞句"],
    ["keberangkatan", "出発", "departure", "名詞"], ["kedatangan", "到着", "arrival", "名詞"], ["keterlambatan", "遅延", "delay", "名詞"],
    ["pembayaran tunai", "現金払い", "cash payment", "名詞句"], ["pembayaran elektronik", "電子決済", "electronic payment", "名詞句"],
    ["saldo", "残高", "balance", "名詞"], ["rekening", "口座", "bank account", "名詞"], ["transfer", "振込", "transfer", "名詞"],
    ["bukti pembayaran", "支払い証明", "proof of payment", "名詞句"], ["layanan pelanggan", "顧客サービス", "customer service", "名詞句"],
    ["keluhan", "苦情", "complaint", "名詞"], ["saran", "提案、助言", "suggestion", "名詞"], ["solusi", "解決策", "solution", "名詞"],
    ["kesalahan teknis", "技術的な不具合", "technical error", "名詞句"], ["jaringan", "ネットワーク", "network", "名詞"], ["sinyal", "信号、電波", "signal", "名詞"],
    ["kata sandi", "パスワード", "password", "名詞句"], ["akun", "アカウント", "account", "名詞"], ["pengguna", "利用者", "user", "名詞"],
    ["keamanan data", "データ安全性", "data security", "名詞句"], ["informasi pribadi", "個人情報", "personal information", "名詞句"],
    ["laman web", "ウェブページ", "web page", "名詞句"], ["tautan", "リンク", "link", "名詞"], ["unggahan", "投稿、アップロード", "upload", "名詞"],
    ["unduhan", "ダウンロード", "download", "名詞"], ["lampiran", "添付", "attachment", "名詞"], ["berkas", "ファイル", "file", "名詞"],
    ["sertifikat", "証明書", "certificate", "名詞"], ["surat keterangan", "証明書", "certificate letter", "名詞句"],
    ["surat izin", "許可証", "permit letter", "名詞句"], ["surat lamaran", "応募書類", "application letter", "名詞句"],
    ["riwayat hidup", "履歴書", "curriculum vitae", "名詞句"], ["pengalaman kerja", "職務経験", "work experience", "名詞句"],
    ["keterampilan", "技能", "skill", "名詞"], ["kemampuan", "能力", "ability", "名詞"], ["kelebihan", "長所、余剰", "strength; excess", "名詞"],
    ["kekurangan", "短所、不足", "weakness; shortage", "名詞"], ["kesulitan", "困難", "difficulty", "名詞"], ["kemudahan", "便利さ、容易さ", "ease", "名詞"],
    ["kesempatan kerja", "就職機会", "employment opportunity", "名詞句"], ["pendidikan dasar", "基礎教育", "basic education", "名詞句"],
    ["pendidikan tinggi", "高等教育", "higher education", "名詞句"], ["biaya pendidikan", "教育費", "education cost", "名詞句"],
    ["beasiswa", "奨学金", "scholarship", "名詞"], ["lulusan", "卒業生", "graduate", "名詞"], ["ijazah", "卒業証書", "diploma", "名詞"],
    ["nilai rata-rata", "平均点", "average score", "名詞句"], ["mata pelajaran", "科目", "school subject", "名詞句"], ["jadwal pelajaran", "時間割", "class schedule", "名詞句"],
    ["absensi", "出欠", "attendance", "名詞"], ["kehadiran", "出席", "attendance; presence", "名詞"], ["ketidakhadiran", "欠席", "absence", "名詞"],
    ["pelanggaran", "違反", "violation", "名詞"], ["hukuman", "罰", "punishment", "名詞"], ["penghargaan", "表彰、評価", "award; appreciation", "名詞"],
    ["prestasi", "成果、成績", "achievement", "名詞"], ["perlombaan", "競技、コンテスト", "competition", "名詞"], ["peserta", "参加者", "participant", "名詞"],
    ["pemenang", "勝者", "winner", "名詞"], ["kekalahan", "敗北", "defeat", "名詞"], ["kemenangan", "勝利", "victory", "名詞"],
    ["kemampuan berbahasa", "語学力", "language ability", "名詞句"], ["percakapan sehari-hari", "日常会話", "daily conversation", "名詞句"],
    ["bahasa resmi", "公用語", "official language", "名詞句"], ["bahasa daerah", "地方語", "regional language", "名詞句"],
    ["terjemahan lisan", "通訳", "oral translation", "名詞句"], ["terjemahan tertulis", "翻訳文", "written translation", "名詞句"],
    ["budaya lokal", "地域文化", "local culture", "名詞句"], ["adat istiadat", "慣習", "customs", "名詞句"], ["upacara adat", "伝統儀式", "traditional ceremony", "名詞句"],
    ["hari libur nasional", "国民の祝日", "national holiday", "名詞句"], ["perayaan", "祝賀、祭り", "celebration", "名詞"],
    ["kesenian", "芸術", "arts", "名詞"], ["tarian", "踊り", "dance", "名詞"], ["alat musik", "楽器", "musical instrument", "名詞句"],
    ["kerajinan tangan", "手工芸品", "handicraft", "名詞句"], ["pameran", "展示会", "exhibition", "名詞"], ["pertunjukan", "公演", "performance", "名詞"],
    ["tiket masuk", "入場券", "entrance ticket", "名詞句"], ["jam buka", "営業時間", "opening hours", "名詞句"], ["jam tutup", "閉店時間", "closing time", "名詞句"],
    ["petunjuk arah", "道案内", "directions", "名詞句"], ["peta lokasi", "場所の地図", "location map", "名詞句"], ["tempat parkir", "駐車場", "parking area", "名詞句"],
    ["biaya masuk", "入場料", "entrance fee", "名詞句"], ["diskon khusus", "特別割引", "special discount", "名詞句"], ["harga satuan", "単価", "unit price", "名詞句"],
    ["harga grosir", "卸売価格", "wholesale price", "名詞句"], ["barang bekas", "中古品", "used goods", "名詞句"], ["barang baru", "新品", "new goods", "名詞句"],
    ["garansi", "保証", "warranty", "名詞"], ["mutu", "品質", "quality", "名詞"], ["ukuran sedang", "中サイズ", "medium size", "名詞句"],
    ["ukuran besar", "大サイズ", "large size", "名詞句"], ["ukuran kecil", "小サイズ", "small size", "名詞句"],
    ["sedang", "中くらいの、〜している", "medium; currently", "形容詞"], ["terbatas", "限られた", "limited", "形容詞"], ["tersedia", "利用可能な、在庫がある", "available", "形容詞"],
    ["teratur", "規則正しい", "regular; orderly", "形容詞"], ["sementara", "一時的な", "temporary", "形容詞"], ["permanen", "恒久的な", "permanent", "形容詞"],
    ["resmi", "公式の", "official", "形容詞"], ["tidak resmi", "非公式の", "unofficial", "形容詞"], ["wajib", "必須の", "mandatory", "形容詞"],
    ["sukarela", "任意の、自発的な", "voluntary", "形容詞"], ["adil", "公平な", "fair", "形容詞"], ["setara", "同等の", "equal", "形容詞"],
    ["tepat", "正確な、適切な", "exact; appropriate", "形容詞"], ["kurang tepat", "あまり適切でない", "less appropriate", "形容詞"], ["efektif", "効果的な", "effective", "形容詞"],
    ["efisien", "効率的な", "efficient", "形容詞"], ["praktis", "実用的な", "practical", "形容詞"], ["rumit", "複雑な", "complicated", "形容詞"],
    ["sah", "合法の、有効な", "valid; legal", "形容詞"], ["palsu", "偽物の", "fake", "形容詞"], ["lengket", "粘着性のある", "sticky", "形容詞"],
    ["rapuh", "壊れやすい", "fragile", "形容詞"], ["tahan lama", "長持ちする", "durable", "形容詞"], ["terpercaya", "信頼できる", "trustworthy", "形容詞"],
    ["memadai", "十分な", "adequate", "形容詞"], ["terjangkau", "手頃な", "affordable", "形容詞"], ["mendesak", "緊急の", "urgent", "形容詞"],
    ["terkini", "最新の", "latest", "形容詞"], ["terbaru", "最新の", "newest", "形容詞"], ["terdahulu", "以前の", "previous", "形容詞"],
    ["berlaku", "有効である", "valid; in effect", "動詞"], ["kadaluarsa", "期限切れの", "expired", "形容詞"], ["ramah lingkungan", "環境にやさしい", "environmentally friendly", "形容詞"],
    ["hemat energi", "省エネルギーの", "energy-saving", "形容詞"], ["berisiko", "リスクがある", "risky", "形容詞"], ["bermanfaat", "役に立つ", "beneficial", "形容詞"]
  ];

  simpleRows.forEach(([word, japanese, english, partOfSpeech]) => {
    const example = partOfSpeech === "形容詞"
      ? `Hal itu ${word}.`
      : `Kami membahas ${word} itu.`;
    const exampleJapanese = partOfSpeech === "形容詞"
      ? `それは${japanese}です。`
      : `私たちはその${japanese}について話し合います。`;

    addCard({
      word,
      japanese,
      english,
      partOfSpeech,
      example,
      exampleJapanese,
      note: "C級で読解・作文に役立つ社会、仕事、生活関連の語彙。"
    });
  });

  const topics = [
    ["ekonomi", "経済", "economy"], ["pendidikan", "教育", "education"], ["kesehatan", "健康・医療", "health"],
    ["lingkungan", "環境", "environment"], ["pariwisata", "観光", "tourism"], ["transportasi", "交通", "transportation"],
    ["teknologi", "技術", "technology"], ["komunikasi", "通信", "communication"], ["informasi", "情報", "information"],
    ["perdagangan", "商業", "trade"], ["pertanian", "農業", "agriculture"], ["industri", "産業", "industry"],
    ["keamanan", "安全保障", "security"], ["keselamatan", "安全", "safety"], ["pelayanan", "サービス", "service"],
    ["pembangunan", "開発", "development"], ["penelitian", "研究", "research"], ["kebijakan", "政策", "policy"],
    ["program", "プログラム", "program"], ["proyek", "事業", "project"], ["laporan", "報告", "report"],
    ["data", "データ", "data"], ["hasil", "結果", "result"], ["masalah", "問題", "problem"], ["solusi", "解決策", "solution"],
    ["kualitas", "品質", "quality"], ["biaya", "費用", "cost"], ["harga", "価格", "price"], ["pasar", "市場", "market"],
    ["produksi", "生産", "production"], ["distribusi", "流通", "distribution"], ["konsumsi", "消費", "consumption"],
    ["penduduk", "人口・住民", "population"], ["masyarakat", "社会・住民", "society"], ["wilayah", "地域", "region"],
    ["pemerintah", "政府", "government"], ["perusahaan", "企業", "company"], ["sekolah", "学校", "school"],
    ["rumah sakit", "病院", "hospital"], ["fasilitas", "施設", "facility"], ["sumber daya", "資源", "resource"],
    ["tenaga kerja", "労働力", "workforce"], ["kebutuhan", "必要", "need"], ["permintaan", "需要", "demand"],
    ["penawaran", "供給", "supply"], ["kesempatan", "機会", "opportunity"], ["kemampuan", "能力", "ability"],
    ["pengalaman", "経験", "experience"], ["hubungan", "関係", "relationship"], ["perubahan", "変化", "change"],
    ["perkembangan", "発展", "development"], ["peningkatan", "向上・増加", "increase"], ["penurunan", "低下・減少", "decrease"],
    ["pengaruh", "影響", "influence"], ["dampak", "影響", "impact"], ["risiko", "リスク", "risk"], ["manfaat", "利益", "benefit"]
  ];

  const modifiers = [
    ["nasional", "全国的な", "national"], ["daerah", "地域の", "regional"], ["lokal", "地域の", "local"],
    ["publik", "公共の", "public"], ["swasta", "民間の", "private"], ["sosial", "社会的な", "social"],
    ["ekonomi", "経済的な", "economic"], ["digital", "デジタルの", "digital"], ["modern", "現代的な", "modern"],
    ["tradisional", "伝統的な", "traditional"], ["utama", "主要な", "main"], ["penting", "重要な", "important"],
    ["baru", "新しい", "new"], ["lama", "古い、長期の", "old; long-term"], ["terbuka", "公開の", "open"],
    ["tertutup", "非公開の", "closed"], ["resmi", "公式の", "official"], ["darurat", "緊急の", "emergency"],
    ["jangka panjang", "長期の", "long-term"], ["jangka pendek", "短期の", "short-term"], ["berkelanjutan", "持続可能な", "sustainable"],
    ["terpadu", "統合された", "integrated"], ["mandiri", "自立した", "independent"], ["bersama", "共同の", "joint"],
    ["rutin", "定期的な", "routine"], ["sementara", "一時的な", "temporary"], ["khusus", "特別な", "special"],
    ["umum", "一般の", "general"], ["terbatas", "限定された", "limited"], ["terbaru", "最新の", "latest"]
  ];

  topics.forEach(([topic, topicJp, topicEn]) => {
    modifiers.forEach(([modifier, modifierJp, modifierEn]) => {
      addCard({
        word: `${topic} ${modifier}`,
        japanese: `${modifierJp}${topicJp}`,
        english: `${modifierEn} ${topicEn}`,
        partOfSpeech: "名詞句",
        example: `Pemerintah membahas ${topic} ${modifier} itu.`,
        exampleJapanese: `政府はその${modifierJp}${topicJp}について話し合います。`,
        note: "C級でよく出る社会・業務系の名詞句。読解でまとまりとして理解する。"
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

  const needed = Math.max(0, targetTotal - currentCWords.length);
  chosen.slice(0, needed).forEach((card, index) => {
    appData.words.push({
      id: `c-${String(currentMaxNumber + index + 1).padStart(3, "0")}`,
      ...card
    });
  });
})();
