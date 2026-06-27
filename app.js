const data = window.INDONESIAN_FLASHCARD_DATA || { words: [], grammarNotes: [] };

const STORAGE_KEY = "indonesian-flashcards-progress-v1";
const LEVEL_ORDER = ["E", "D", "C", "B", "A"];
const SWIPE_MIN_DISTANCE = 52;
const SWIPE_MAX_TIME = 900;
const SWIPE_CLICK_GUARD = 450;
const state = {
  mode: "words",
  level: "all",
  status: "all",
  category: "all",
  search: "",
  index: 0,
  flipped: false,
  known: new Set(),
  hard: new Set(),
  filteredWords: [],
  filteredGrammar: [],
  filteredPhrases: []
};

const modeTabs = document.querySelector("#mode-tabs");
const levelTabs = document.querySelector("#level-tabs");
const pageTitle = document.querySelector("#page-title");
const statusFilter = document.querySelector("#status-filter");
const categoryField = document.querySelector("#category-field");
const categoryFilter = document.querySelector("#category-filter");
const searchInput = document.querySelector("#search-input");
const flashcard = document.querySelector("#flashcard");
const cardPosition = document.querySelector("#card-position");
const cardLevel = document.querySelector("#card-level");
const wordList = document.querySelector("#word-list");
const listTitle = document.querySelector("#list-title");
const grammarBand = document.querySelector(".grammar-band");
const grammarGrid = document.querySelector("#grammar-grid");
const grammarTitle = document.querySelector("#grammar-title");
const grammarCount = document.querySelector("#grammar-count");
const targetGrid = document.querySelector("#target-grid");
const statTotal = document.querySelector("#stat-total");
const statKnown = document.querySelector("#stat-known");
const statHard = document.querySelector("#stat-hard");
const flipButton = document.querySelector("#flip-card");
let swipeState = null;
let lastSwipeAt = 0;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.known = new Set(saved.known || []);
    state.hard = new Set(saved.hard || []);
  } catch (error) {
    state.known = new Set();
    state.hard = new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        known: Array.from(state.known),
        hard: Array.from(state.hard)
      })
    );
  } catch (error) {
    return;
  }
}

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "ja"));
}

function searchTextIncludes(values) {
  const needle = state.search.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  return values
    .filter((value) => value !== undefined && value !== null)
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fillCategoryFilter() {
  const partOfSpeechOrder = ["名詞", "動詞", "形容詞", "副詞", "代名詞", "疑問詞", "指示詞", "数詞", "前置詞", "接続詞", "表現", "名詞句"];
  const partsOfSpeech = uniqueSorted(data.words.map((word) => word.partOfSpeech));
  const orderedPartsOfSpeech = partOfSpeechOrder
    .filter((partOfSpeech) => partsOfSpeech.includes(partOfSpeech))
    .concat(partsOfSpeech.filter((partOfSpeech) => !partOfSpeechOrder.includes(partOfSpeech)));

  orderedPartsOfSpeech.forEach((partOfSpeech) => {
    const option = document.createElement("option");
    option.value = partOfSpeech;
    option.textContent = partOfSpeech;
    categoryFilter.appendChild(option);
  });
}

function getStatus(word) {
  if (state.known.has(word.id)) {
    return "known";
  }
  if (state.hard.has(word.id)) {
    return "hard";
  }
  return "new";
}

function matchesWordSearch(word) {
  return searchTextIncludes([word.word, word.japanese, word.english, word.example, word.note, word.partOfSpeech]);
}

function grammarNoteToCard(note, index) {
  const points = note.points || [];
  return {
    id: `gn-${String(note.level || "x").toLowerCase()}-${String(index + 1).padStart(2, "0")}`,
    level: note.level,
    title: note.title,
    pattern: note.pattern,
    meaning: points[0] || "文法ポイント",
    explanation: points.join(" "),
    examples: [],
    practice: null,
    points,
    isSummary: true
  };
}

function grammarCardsForLevel(level) {
  const detailedItems = (data.grammarItems || []).filter((item) => item.level === level);
  if (detailedItems.length) {
    return detailedItems;
  }

  return (data.grammarNotes || [])
    .map((note, index) => grammarNoteToCard(note, index))
    .filter((item) => item.level === level);
}

function getGrammarCards() {
  const levels = state.level === "all" ? LEVEL_ORDER : [state.level];
  return levels.flatMap((level) => grammarCardsForLevel(level));
}

function matchesGrammarSearch(item) {
  const examples = (item.examples || []).flat();
  const practice = item.practice ? [item.practice.prompt, item.practice.answer] : [];
  return searchTextIncludes([
    item.level,
    item.title,
    item.pattern,
    item.meaning,
    item.explanation,
    ...(item.points || []),
    ...examples,
    ...practice
  ]);
}

function matchesPhraseSearch(item) {
  return searchTextIncludes([item.level, item.phrase, item.japanese, item.category, item.note]);
}

function getFilteredWords() {
  return data.words.filter((word) => {
    const levelMatches = state.level === "all" || word.level === state.level;
    const categoryMatches = state.category === "all" || word.partOfSpeech === state.category;
    const statusMatches = state.status === "all" || getStatus(word) === state.status;
    return levelMatches && categoryMatches && statusMatches && matchesWordSearch(word);
  });
}

function getFilteredGrammar() {
  return getGrammarCards().filter((item) => {
    const statusMatches = state.status === "all" || getStatus(item) === state.status;
    return statusMatches && matchesGrammarSearch(item);
  });
}

function getFilteredPhrases() {
  return (data.phraseItems || []).filter((item) => {
    const levelMatches = state.level === "all" || item.level === state.level;
    const statusMatches = state.status === "all" || getStatus(item) === state.status;
    return levelMatches && statusMatches && matchesPhraseSearch(item);
  });
}

function currentItems() {
  if (state.mode === "grammar") {
    return state.filteredGrammar;
  }
  if (state.mode === "phrases") {
    return state.filteredPhrases;
  }
  return state.filteredWords;
}

function clampIndex() {
  const items = currentItems();
  if (state.index >= items.length) {
    state.index = Math.max(0, items.length - 1);
  }
}

function currentStudyItem() {
  return currentItems()[state.index] || null;
}

function renderStats() {
  const items = currentItems();
  statTotal.textContent = String(items.length);
  statKnown.textContent = String(items.filter((item) => state.known.has(item.id)).length);
  statHard.textContent = String(items.filter((item) => state.hard.has(item.id)).length);
}

function statusLabel(word) {
  const status = getStatus(word);
  if (status === "known") {
    return "覚えた";
  }
  if (status === "hard") {
    return "苦手";
  }
  return "未習得";
}

function wordSizeClass(value) {
  const text = String(value || "");
  const segments = text.split(/[\s-]+/).filter(Boolean);
  const longestSegment = segments.reduce((max, segment) => Math.max(max, segment.length), 0);
  const compactLength = text.replace(/[\s-]/g, "").length;
  const classes = ["word-main"];

  if (compactLength > 18 || longestSegment > 15) {
    classes.push("is-xlong");
  } else if (compactLength > 13 || longestSegment > 11) {
    classes.push("is-long");
  } else if (compactLength > 8 || longestSegment > 8) {
    classes.push("is-medium");
  }

  if (/[\s-]/.test(text)) {
    classes.push("is-phrase");
  }

  return classes.join(" ");
}

function fitWordText() {
  const wordElement = flashcard.querySelector(".word-main");
  if (!wordElement || state.flipped) {
    return;
  }

  wordElement.style.fontSize = "";

  const cardStyle = window.getComputedStyle(flashcard);
  const horizontalPadding = parseFloat(cardStyle.paddingLeft) + parseFloat(cardStyle.paddingRight);
  const availableWidth = Math.max(180, flashcard.clientWidth - horizontalPadding - 12);
  const currentWidth = wordElement.scrollWidth;

  if (currentWidth <= availableWidth) {
    return;
  }

  const currentSize = parseFloat(window.getComputedStyle(wordElement).fontSize);
  const fittedSize = Math.max(28, Math.floor(currentSize * (availableWidth / currentWidth) * 0.96));
  wordElement.style.fontSize = `${fittedSize}px`;
  wordElement.classList.add("is-fitted");
}

function renderFront(word) {
  flashcard.classList.remove("is-back", "is-grammar", "is-phrase-card");
  flashcard.innerHTML = `
    <div class="card-face-label">表</div>
    <div class="${wordSizeClass(word.word)}">${escapeHtml(word.word)}</div>
    <div class="word-tags">
      <span>${escapeHtml(word.partOfSpeech)}</span>
      <span>${escapeHtml(statusLabel(word))}</span>
    </div>
  `;
  flipButton.textContent = "裏を見る";
  fitWordText();
}

function renderBack(word) {
  flashcard.classList.remove("is-grammar", "is-phrase-card");
  flashcard.classList.add("is-back");
  flashcard.innerHTML = `
    <div class="card-face-label">裏</div>
    <div class="word-back-head">
      <h2>${escapeHtml(word.word)}</h2>
      <span>${escapeHtml(word.level)}級</span>
    </div>
    <dl class="meaning-list">
      <div>
        <dt>日本語</dt>
        <dd>${escapeHtml(word.japanese)}</dd>
      </div>
      <div>
        <dt>English</dt>
        <dd>${escapeHtml(word.english)}</dd>
      </div>
    </dl>
    <div class="example-box">
      <p class="example-id">${escapeHtml(word.example)}</p>
      <p class="example-ja">${escapeHtml(word.exampleJapanese)}</p>
    </div>
    <p class="note">${escapeHtml(word.note)}</p>
  `;
  flipButton.textContent = "表を見る";
}

function renderGrammarFront(item) {
  flashcard.classList.remove("is-back");
  flashcard.classList.remove("is-phrase-card");
  flashcard.classList.add("is-grammar");
  flashcard.innerHTML = `
    <div class="card-face-label">表</div>
    <div class="grammar-front">
      <p class="grammar-card-kicker">文法</p>
      <div class="grammar-main">${escapeHtml(item.title)}</div>
      <p class="grammar-pattern-large">${escapeHtml(item.pattern)}</p>
    </div>
    <div class="word-tags">
      <span>${escapeHtml(item.level)}級</span>
      <span>${escapeHtml(statusLabel(item))}</span>
    </div>
  `;
  flipButton.textContent = "説明を見る";
}

function renderGrammarBack(item) {
  const examples = item.examples || [];
  const examplesHtml = examples.length
    ? `
      <div class="grammar-examples">
        ${examples
          .map((example) => `
            <div>
              <p>${escapeHtml(example[0])}</p>
              <small>${escapeHtml(example[1])}</small>
            </div>
          `)
          .join("")}
      </div>
    `
    : `
      <ul class="grammar-point-list">
        ${(item.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    `;
  const practiceHtml = item.practice
    ? `
      <div class="grammar-practice">
        <strong>練習</strong>
        <p>${escapeHtml(item.practice.prompt)}</p>
        <small>${escapeHtml(item.practice.answer)}</small>
      </div>
    `
    : "";

  flashcard.classList.remove("is-phrase-card");
  flashcard.classList.add("is-back", "is-grammar");
  flashcard.innerHTML = `
    <div class="card-face-label">裏</div>
    <div class="word-back-head">
      <h2>${escapeHtml(item.title)}</h2>
      <span>${escapeHtml(item.level)}級</span>
    </div>
    <dl class="meaning-list grammar-meaning-list">
      <div>
        <dt>形</dt>
        <dd>${escapeHtml(item.pattern)}</dd>
      </div>
      <div>
        <dt>意味</dt>
        <dd>${escapeHtml(item.meaning)}</dd>
      </div>
    </dl>
    <p class="grammar-explanation-card">${escapeHtml(item.explanation)}</p>
    ${examplesHtml}
    ${practiceHtml}
  `;
  flipButton.textContent = "表を見る";
}

function renderPhraseFront(item) {
  flashcard.classList.remove("is-back");
  flashcard.classList.remove("is-grammar");
  flashcard.classList.add("is-phrase-card");
  flashcard.innerHTML = `
    <div class="card-face-label">表</div>
    <div class="phrase-front">
      <p class="grammar-card-kicker">定型文</p>
      <div class="phrase-main">${escapeHtml(item.phrase)}</div>
    </div>
    <div class="word-tags">
      <span>${escapeHtml(item.level)}級</span>
      <span>${escapeHtml(item.category)}</span>
      <span>${escapeHtml(statusLabel(item))}</span>
    </div>
  `;
  flipButton.textContent = "意味を見る";
}

function renderPhraseBack(item) {
  flashcard.classList.remove("is-grammar");
  flashcard.classList.add("is-back", "is-phrase-card");
  flashcard.innerHTML = `
    <div class="card-face-label">裏</div>
    <div class="word-back-head">
      <h2>${escapeHtml(item.phrase)}</h2>
      <span>${escapeHtml(item.level)}級</span>
    </div>
    <dl class="meaning-list grammar-meaning-list">
      <div>
        <dt>日本語</dt>
        <dd>${escapeHtml(item.japanese)}</dd>
      </div>
      <div>
        <dt>場面</dt>
        <dd>${escapeHtml(item.category)}</dd>
      </div>
    </dl>
    <p class="grammar-explanation-card">${escapeHtml(item.note)}</p>
  `;
  flipButton.textContent = "表を見る";
}

function renderEmptyCard() {
  cardPosition.textContent = "0 / 0";
  cardLevel.textContent = "-";
  flashcard.classList.remove("is-back", "is-grammar", "is-phrase-card");
  const label = state.mode === "grammar" ? "文法カード" : state.mode === "phrases" ? "定型文カード" : "カード";
  flashcard.innerHTML = `
    <div class="empty-state">
      <h2>${label}がありません</h2>
      <p>条件を変えてください。</p>
    </div>
  `;
}

function renderCard() {
  const item = currentStudyItem();
  if (!item) {
    renderEmptyCard();
    return;
  }

  cardPosition.textContent = `${state.index + 1} / ${currentItems().length}`;
  cardLevel.textContent = state.mode === "grammar"
    ? `${item.level}級 文法`
    : state.mode === "phrases"
      ? `${item.level}級 定型文`
      : `${item.level}級`;

  if (state.mode === "grammar") {
    if (state.flipped) {
      renderGrammarBack(item);
    } else {
      renderGrammarFront(item);
    }
  } else if (state.mode === "phrases") {
    if (state.flipped) {
      renderPhraseBack(item);
    } else {
      renderPhraseFront(item);
    }
  } else if (state.flipped) {
    renderBack(item);
  } else {
    renderFront(item);
  }
}

function renderWordList() {
  wordList.innerHTML = "";
  listTitle.textContent = state.mode === "grammar" ? "文法一覧" : state.mode === "phrases" ? "定型文一覧" : "単語一覧";

  currentItems().forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-list-item";
    if (index === state.index) {
      button.classList.add("active");
    }

    if (state.mode === "grammar") {
      button.innerHTML = `
        <span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.pattern)}</small>
        </span>
        <em>${escapeHtml(item.level)}</em>
      `;
    } else if (state.mode === "phrases") {
      button.innerHTML = `
        <span>
          <strong>${escapeHtml(item.phrase)}</strong>
          <small>${escapeHtml(item.japanese)}</small>
        </span>
        <em>${escapeHtml(item.level)}</em>
      `;
    } else {
      button.innerHTML = `
        <span>
          <strong>${escapeHtml(item.word)}</strong>
          <small>${escapeHtml(item.japanese)}</small>
        </span>
        <em>${escapeHtml(item.level)}</em>
      `;
    }

    button.addEventListener("click", () => {
      state.index = index;
      state.flipped = false;
      render();
    });
    wordList.appendChild(button);
  });
}

function renderGrammar() {
  if (grammarBand) {
    grammarBand.hidden = state.mode !== "words";
  }
  if (state.mode !== "words") {
    return;
  }

  grammarGrid.innerHTML = "";
  const activeLevel = state.level === "all" ? "E" : state.level;
  const grammarItems = (data.grammarItems || []).filter((item) => item.level === activeLevel);

  grammarTitle.textContent = `${activeLevel}級 文法`;

  if (grammarItems.length) {
    grammarCount.textContent = `${grammarItems.length}項目`;
    grammarItems.forEach((item) => {
      const article = document.createElement("article");
      article.className = "grammar-note grammar-detail";
      article.innerHTML = `
        <div class="grammar-note-head">
          <span>${escapeHtml(item.level)}級</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p class="pattern">${escapeHtml(item.pattern)}</p>
        <p class="grammar-meaning">${escapeHtml(item.meaning)}</p>
        <p class="grammar-explanation">${escapeHtml(item.explanation)}</p>
        <div class="grammar-examples">
          ${(item.examples || [])
            .map((example) => `
              <div>
                <p>${escapeHtml(example[0])}</p>
                <small>${escapeHtml(example[1])}</small>
              </div>
            `)
            .join("")}
        </div>
        <div class="grammar-practice">
          <strong>練習</strong>
          <p>${escapeHtml(item.practice && item.practice.prompt)}</p>
          <small>${escapeHtml(item.practice && item.practice.answer)}</small>
        </div>
      `;
      grammarGrid.appendChild(article);
    });
    return;
  }

  const fallbackNotes = (data.grammarNotes || []).filter((note) => state.level === "all" || note.level === state.level);
  grammarCount.textContent = fallbackNotes.length ? `${fallbackNotes.length}項目` : "未追加";

  fallbackNotes.forEach((note) => {
    const article = document.createElement("article");
    article.className = "grammar-note";
    article.innerHTML = `
      <div class="grammar-note-head">
        <span>${escapeHtml(note.level)}級</span>
        <h3>${escapeHtml(note.title)}</h3>
      </div>
      <p class="pattern">${escapeHtml(note.pattern)}</p>
      <ul>${note.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    `;
    grammarGrid.appendChild(article);
  });
}

function renderTargets() {
  targetGrid.innerHTML = "";

  (data.examTargets || []).forEach((target) => {
    const levelWords = data.words.filter((word) => word.level === target.level);
    const knownCount = levelWords.filter((word) => state.known.has(word.id)).length;
    const currentCount = levelWords.length;
    const remainingCount = Math.max(0, target.targetWords - currentCount);
    const coverage = Math.min(100, Math.round((currentCount / target.targetWords) * 100));
    const knownRate = currentCount ? Math.round((knownCount / currentCount) * 100) : 0;

    const article = document.createElement("article");
    article.className = "target-card";
    article.innerHTML = `
      <div class="target-card-head">
        <span>${target.level}級</span>
        <strong>${currentCount} / ${target.targetWords}語</strong>
      </div>
      <div class="target-bar" aria-label="${target.level}級の収録率">
        <span style="width: ${coverage}%"></span>
      </div>
      <dl class="target-facts">
        <div>
          <dt>不足</dt>
          <dd>${remainingCount}語</dd>
        </div>
        <div>
          <dt>覚えた</dt>
          <dd>${knownRate}%</dd>
        </div>
        <div>
          <dt>合格目安</dt>
          <dd>${target.neededCorrect}/${target.examQuestions}問</dd>
        </div>
      </dl>
      <p>${target.focus}</p>
      <small>${target.passRate}</small>
    `;
    targetGrid.appendChild(article);
  });
}

function render() {
  state.filteredWords = getFilteredWords();
  state.filteredGrammar = getFilteredGrammar();
  state.filteredPhrases = getFilteredPhrases();
  clampIndex();
  syncModeUi();
  renderStats();
  renderCard();
  renderWordList();
  renderTargets();
  renderGrammar();
}

function syncModeUi() {
  document.body.classList.toggle("is-grammar-mode", state.mode === "grammar");
  document.body.classList.toggle("is-phrases-mode", state.mode === "phrases");
  pageTitle.textContent = state.mode === "grammar" ? "文法カード" : state.mode === "phrases" ? "定型文カード" : "単語カード";
  categoryField.hidden = state.mode !== "words";
  modeTabs.querySelectorAll(".mode-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function setMode(mode) {
  if (!["words", "grammar", "phrases"].includes(mode)) {
    return;
  }

  state.mode = mode;
  state.index = 0;
  state.flipped = false;
  render();
}

function setLevel(level) {
  state.level = level;
  state.index = 0;
  state.flipped = false;
  levelTabs.querySelectorAll(".level-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
  render();
}

function moveCard(direction) {
  if (!currentItems().length) {
    return;
  }
  state.index = (state.index + direction + currentItems().length) % currentItems().length;
  state.flipped = false;
  render();
}

function startSwipe(event) {
  if (!event.touches || event.touches.length !== 1) {
    swipeState = null;
    return;
  }

  const touch = event.touches[0];
  swipeState = {
    startX: touch.clientX,
    startY: touch.clientY,
    startedAt: Date.now(),
    movedHorizontally: false
  };
}

function trackSwipe(event) {
  if (!swipeState || !event.touches || event.touches.length !== 1) {
    return;
  }

  const touch = event.touches[0];
  const deltaX = touch.clientX - swipeState.startX;
  const deltaY = touch.clientY - swipeState.startY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (absX > 14 && absX > absY * 1.25) {
    swipeState.movedHorizontally = true;
    if (event.cancelable) {
      event.preventDefault();
    }
  }
}

function finishSwipe(event) {
  if (!swipeState || !event.changedTouches || !event.changedTouches.length) {
    swipeState = null;
    return;
  }

  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - swipeState.startX;
  const deltaY = touch.clientY - swipeState.startY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  const elapsed = Date.now() - swipeState.startedAt;
  const isSwipe = swipeState.movedHorizontally
    && absX >= SWIPE_MIN_DISTANCE
    && absX > absY * 1.35
    && elapsed <= SWIPE_MAX_TIME;

  swipeState = null;

  if (!isSwipe) {
    return;
  }

  lastSwipeAt = Date.now();
  moveCard(deltaX < 0 ? 1 : -1);
}

function shouldIgnoreSwipeClick(event) {
  if (Date.now() - lastSwipeAt > SWIPE_CLICK_GUARD) {
    return false;
  }

  event.preventDefault();
  event.stopPropagation();
  return true;
}

function toggleFlip() {
  if (!currentStudyItem()) {
    return;
  }
  state.flipped = !state.flipped;
  renderCard();
}

function markCurrent(status) {
  const item = currentStudyItem();
  if (!item) {
    return;
  }

  state.known.delete(item.id);
  state.hard.delete(item.id);

  if (status === "known") {
    state.known.add(item.id);
  }
  if (status === "hard") {
    state.hard.add(item.id);
  }

  saveProgress();
  render();
}

function shuffleCurrentSet() {
  const items = currentItems();
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  if (state.mode === "words") {
    data.words = state.filteredWords.concat(data.words.filter((word) => !state.filteredWords.includes(word)));
  }

  state.index = 0;
  state.flipped = false;

  if (state.mode !== "words") {
    renderStats();
    renderCard();
    renderWordList();
    return;
  }

  render();
}

function bindEvents() {
  modeTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".mode-tab");
    if (button) {
      setMode(button.dataset.mode);
    }
  });

  levelTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".level-tab");
    if (button) {
      setLevel(button.dataset.level);
    }
  });

  statusFilter.addEventListener("change", () => {
    state.status = statusFilter.value;
    state.index = 0;
    state.flipped = false;
    render();
  });

  categoryFilter.addEventListener("change", () => {
    state.category = categoryFilter.value;
    state.index = 0;
    state.flipped = false;
    render();
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    state.index = 0;
    state.flipped = false;
    render();
  });

  document.querySelector("#prev-card").addEventListener("click", () => moveCard(-1));
  document.querySelector("#next-card").addEventListener("click", () => moveCard(1));
  document.querySelector("#flip-card").addEventListener("click", toggleFlip);
  document.querySelector("#mark-hard").addEventListener("click", () => markCurrent("hard"));
  document.querySelector("#mark-known").addEventListener("click", () => markCurrent("known"));
  document.querySelector("#shuffle-card").addEventListener("click", shuffleCurrentSet);
  document.querySelector("#reset-progress").addEventListener("click", () => {
    state.known.clear();
    state.hard.clear();
    saveProgress();
    render();
  });

  flashcard.addEventListener("touchstart", startSwipe, { passive: true });
  flashcard.addEventListener("touchmove", trackSwipe, { passive: false });
  flashcard.addEventListener("touchend", finishSwipe, { passive: true });
  flashcard.addEventListener("touchcancel", () => {
    swipeState = null;
  }, { passive: true });
  flashcard.addEventListener("click", (event) => {
    if (shouldIgnoreSwipeClick(event)) {
      return;
    }
    toggleFlip();
  });
  flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, select, button")) {
      return;
    }
    if (event.key === "ArrowLeft") {
      moveCard(-1);
    }
    if (event.key === "ArrowRight") {
      moveCard(1);
    }
  });

  if (typeof window.addEventListener === "function") {
    window.addEventListener("resize", fitWordText);
  }
}

loadProgress();
fillCategoryFilter();
bindEvents();
render();
