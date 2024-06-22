// noinspection HtmlRequiredAltAttribute

console.log("Navigator platform is", navigator.platform)
console.log("User agent is", navigator.userAgent)

function determineAndLogBrowser() {
  // NOTE (mristin):
  // See https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browsers

  const browser = (function () {
    const test = function (regexp) {
      return regexp.test(window.navigator.userAgent)
    }
    switch (true) {
      case test(/edg/i):
        return "Microsoft Edge";
      case test(/trident/i):
        return "Microsoft Internet Explorer";
      case test(/firefox|fxios/i):
        return "Mozilla Firefox";
      case test(/opr\//i):
        return "Opera";
      case test(/ucbrowser/i):
        return "UC Browser";
      case test(/samsungbrowser/i):
        return "Samsung Browser";
      case test(/chrome|chromium|crios/i):
        return "Google Chrome";
      case test(/safari/i):
        return "Apple Safari";
      default:
        return "Other";
    }
  })();

  console.log("Detected browser is", browser);
}

determineAndLogBrowser()

/**
 * @typedef {Object} Card
 * @property {string} question to be asked
 * @property {Array<string>} answers to be expected
 */

/**
 * @typedef {Object} Level
 * @property {string} name of the level
 * @property {Array<Card>} vocabulary to be learnt
 */

/**
 * @type {Array<Level>}
 */
const levels = [
  {
    name: "Adjectives 1",
    vocabulary: [
      {question: "avanturističan", answers: ["adventurous"]},
      {question: "veliki", answers: ["big"]},
      {question: "gorak", answers: ["bitter"]},
      {question: "odskakajući", answers: ["bouncy"]},
      {question: "hrabar", answers: ["brave"]},
      {question: "neravan", answers: ["bumpy"]},
      {question: "šaren", answers: ["colorful"]},
      {question: "kreativan", answers: ["creative"]},
      {question: "hrskav", answers: ["crunchy"]},
      {question: "umiljat", answers: ["cuddly"]},
      {question: "radoznao", answers: ["curious"]},
      {question: "ukusan", answers: ["delicious"]},
      {question: "uzbuđen", answers: ["excited"]},
      {question: "fascinantan", answers: ["fascinating"]},
      {question: "žestok", answers: ["fierce"]},
      {question: "paperjast", answers: ["fluffy"]},
      {question: "prijateljski", answers: ["friendly"]},
      {question: "zamagljen", answers: ["fuzzy"]},
      {question: "nežan", answers: ["gentle"]},
      {question: "ogroman", answers: ["gigantic"]},
    ]
  },
  {
    name: "Adjectives 2",
    vocabulary: [
      {question: "svetleći", answers: ["glowing"]},
      {question: "zahvalan", answers: ["grateful"]},
      {question: "srećan", answers: ["happy"]},
      {question: "tvrd", answers: ["hard"]},
      {question: "živahan", answers: ["lively"]},
      {question: "dug", answers: ["long"]},
      {question: "glasan", answers: ["loud"]},
      {question: "magičan", answers: ["magical"]},
      {question: "melodičan", answers: ["melodic"]},
      {question: "blatnjav", answers: ["muddy"]},
      {question: "misteriozan", answers: ["mysterious"]},
      {question: "bučan", answers: ["noisy"]},
      {question: "ovalan", answers: ["oval"]},
      {question: "razigran", answers: ["playful"]},
      {question: "tih", answers: ["quiet"]},
      {question: "pravougaon", answers: ["rectangular"]},
      {question: "grub", answers: ["rough"]},
      {question: "okrugao", answers: ["round"]},
      {question: "tužan", answers: ["sad"]},
      {question: "slan", answers: ["salty"]},
    ]
  },
  {
    name: "Adjectives 3",
    vocabulary: [
      {question: "uplašen", answers: ["scared"]},
      {question: "sjajan", answers: ["shiny"]},
      {question: "kratak", answers: ["short"]},
      {question: "blesav", answers: ["silly"]},
      {question: "mali", answers: ["small"]},
      {question: "gladak", answers: ["smooth"]},
      {question: "mekan", answers: ["soft"]},
      {question: "kiseo", answers: ["sour"]},
      {question: "začinjen", answers: ["spicy"]},
      {question: "kvadratan", answers: ["square"]},
      {question: "škripav", answers: ["squeaky"]},
      {question: "u obliku zvezde", answers: ["star-shaped"]},
      {question: "sunčan", answers: ["sunny"]},
      {question: "sladak", answers: ["sweet"]},
      {question: "visok", answers: ["tall"]},
      {question: "trouglast", answers: ["triangular"]},
      {question: "prav", answers: ["straight"]},
      {question: "paran", answers: ["even"]},
      {question: "neparan", answers: ["odd"]},
      {question: "pozitivan", answers: ["positive"]},
      {question: "negativan", answers: ["negative"]},
      {question: "težak tovar", answers: ["heavy"]},
      {question: "težak problem", answers: ["difficult"]},
      {question: "lak", answers: ["easy"]},
      {question: "jednostavan", answers: ["simple"]},
      {question: "komplikovan", answers: ["complicated"]},
    ]
  },
];

if (levels.length === 0) {
  throw new Error("DialogueSelectLevel expects at least one level.")
}

function assertEachLevelAtLeastOneCard() {
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];

    if (level.vocabulary.length === 0) {
      throw new Error(
        "Expected at least one vocabulary card, " +
        ` but got: ${level.vocabulary.length} cards` +
        ` at level ${i}`
      );
    }
  }
}

assertEachLevelAtLeastOneCard();

// NOTE (mristin):
// We distinguish between three types of states.
//
// The one state is the state of the overall system such as voice selection and
// initialization of the speech recognition. When the game restarts, the system
// state should not be affected.
//
// On the other hand, the other state, the dialogue state, concerns only the
// immediate dialogue logic and is devoid of any system concerns such as
// voice changes *etc.*
//
// The third state, the game state, concerns the over-arching game state which
// persists between the dialogues.

/**
 * Define a general dialogue, where the game goes from one dialogue to another,
 * akin to a state machine.
 *
 * @interface IDialogue
 */

/**
 * Generate the HTML code to be put into the game container.
 * @function
 * @name IDialogue#initialHTML
 * @returns {string}
 */

/**
 * Update the dialogue state based on the timestamp.
 * @function
 * @name IDialogue#tick
 * @param {number} timestamp of the frame
 * @returns {void}
 */

/**
 * Refresh the game container based on the dialogue's state.
 * @function
 * @name IDialogue#refresh
 * @returns {void}
 */

/**
 * Execute the mount after the initial HTML code has been inserted.
 * @function
 * @name IDialogue#mount
 * @returns {void}
 */

/**
 * Execute the unmount just before the next dialogue is going to be mounted.
 * @function
 * @name IDialogue#unmount
 * @returns {void}
 */

/**
 * Ask the user to press a button so that we can activate the speech synthesis
 * and the speech recognition.
 * @implements IDialogue
 */
class DialoguePressHere {
  initialHTML() {
    return `<button class="announcement" id="press-start">
Click here when you are ready to start.
</button>`;
  }

  mount() {
    const pressStart = document.getElementById("press-start");
    pressStart.onclick = () => {
      dialoguer.put(new DialogueWaitingForSpeechSynthesis())
    };
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Show that we are waiting for the speech synthesis to be initialized.
 * @implements IDialogue
 */
class DialogueWaitingForSpeechSynthesis {
  constructor() {
    this.retries = 4;
    this.lastTick = null;
  }

  initialHTML() {
    return `<div id="message" class="announcement">
Waiting for the speech synthesis to initialize...
</div>`;
  }

  mount() {
    // Intentionally empty.
  }

  refresh() {
    const messageDiv = document.getElementById("message");
    const dots = [];
    for (let i = 0; i < this.retries; i++) {
      dots.push(".")
    }

    updateInnerTextIfNeeded(
      messageDiv,
      "Waiting for the speech synthesis to initialize"
      + dots.join("")
    )
  }

  tick(timestamp) {
    if (this.lastTick === null || timestamp - this.lastTick > 1000) {
      if (window.speechSynthesis.getVoices().length > 0) {
        setupSpeechSynthesis();
        dialoguer.put(new DialogueWaitingForSpeechRecognition());
      } else {
        this.retries--;

        if (this.retries === 0) {
          dialoguer.put(new DialogueNoSpeechSynthesisAvailable());
        }
      }

      this.lastTick = timestamp;
    }
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Inform the user that the game can not be played as there is no speech
 * synthesis.
 * @implements IDialogue
 */
class DialogueNoSpeechSynthesisAvailable {
  initialHTML() {
    return `<div class='announcement'>
No speech synthesis is available in your browser. Perhaps you have no 
internet connection and your browser needs one for speech synthesis?
</div>`;
  }

  mount() {
    // Intentionally empty.
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Promise to call start on the speech recognition.
 *
 * If the speech recognition is already active, return an empty promise.
 *
 * @returns {Promise<void>}
 */
function promiseToActivateSpeechRecognition() {
  if (systemState.speechRecognitionActive) {
    return Promise.resolve();
  }

  systemState.speechRecognitionActive = true;

  const oldOnStart = systemState.speechRecognition.onstart;

  return new Promise((resolve, _) => {
    systemState.speechRecognition.onstart = (event) => {
      oldOnStart(event);
      systemState.speechRecognition.onstart = oldOnStart;
      resolve();
    }

    console.log("Calling speech recognition start...")
    systemState.speechRecognition.start();
  })
}

/**
 * Promise to call stop on the speech recognition without a restart.
 *
 * If the speech recognition is already inactive, return an empty promise.
 *
 * @returns {Promise<void>}
 */
function promiseToDeactivateSpeechRecognition() {
  if (!systemState.speechRecognitionActive) {
    return Promise.resolve();
  }

  systemState.speechRecognitionActive = false;

  const oldOnEnd = systemState.speechRecognition.onend;

  return new Promise((resolve, _) => {
    systemState.speechRecognition.onend = (event) => {
      oldOnEnd(event);
      systemState.speechRecognition.onend = oldOnEnd;
      resolve();
    }

    console.log("Calling speech recognition stop...")
    systemState.speechRecognition.stop();
  });
}

/**
 * Show that we are waiting for the speech recognition to be initialized.
 * @implements IDialogue
 */
class DialogueWaitingForSpeechRecognition {
  constructor() {
    this.retries = 10;
    this.lastTick = null;
    this.started = false;
  }

  initialHTML() {
    return `<div id="message" class="announcement">
Waiting for the speech recognition to initialize...
</div>`;
  }

  mount() {
    setupSpeechRecognition();

    const that = this;
    promiseToActivateSpeechRecognition()
      .then(() => {
        that.started = true;
      });
  }

  refresh() {
    const messageDiv = document.getElementById("message");
    const dots = [];
    for (let i = 0; i < this.retries; i++) {
      dots.push(".")
    }

    updateInnerTextIfNeeded(
      messageDiv,
      "Waiting for the speech recognition to initialize"
      + dots.join("")
    )
  }

  tick(timestamp) {
    if (this.lastTick === null || timestamp - this.lastTick > 1000) {
      if (this.started) {
        dialoguer.put(new DialogueSelectLevel());
      } else {
        this.retries--;

        if (this.retries === 0) {
          dialoguer.put(new DialogueNoSpeechRecognitionAvailable());
        }
      }

      this.lastTick = timestamp;
    }
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Inform the user that the game can not be played as there is no speech
 * recognition.
 * @implements IDialogue
 */
class DialogueNoSpeechRecognitionAvailable {
  initialHTML() {
    return `<div class='announcement'>
No speech recognition is available in your browser. Perhaps you have no 
internet connection and your browser needs one for speech recognition?
</div>`;
  }

  mount() {
    // Intentionally empty.
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Let the user select the level.
 * @implements IDialogue
 */
class DialogueSelectLevel {
  constructor() {
    this.levelIndex = gameState.levelIndex;

    this.oldSpeechRecognitionOnResult = null;
  }

  initialHTML() {
    const parts = [
      `<div class="announcement">
Select the level:
</div>`
    ];
    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];
      parts.push(
        `<button 
    id="level-${i}" 
    class="level-choice"
>${level.name}</button>`
      )
    }
    return parts.join("\n");
  }

  mount() {
    for (let i = 0; i < levels.length; i++) {
      /**
       * @type {HTMLButtonElement}
       */
      const button = document.getElementById(`level-${i}`);
      button.onclick = ((anI) => {
        return () => {
          this.levelIndex = anI;
          this.startTheGame();
        }
      })(i);

      addClassIfNeeded(button, "level-choice");
      if (i < levels.length - 1) {
        button.style.paddingRight = "1em";
      }
    }

    const that = this;
    this.oldSpeechRecognitionOnResult = (
      systemState.speechRecognition.onresult
    );

    const choice = [];
    const levelIndexByName = new Map();
    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];
      levelIndexByName.set(level.name, i);
      choice.push(level.name);
    }

    systemState.speechRecognition.onresult = function (event) {
      if (
        that.oldSpeechRecognitionOnResult !== null
        && that.oldSpeechRecognitionOnResult !== undefined
      ) {
        that.oldSpeechRecognitionOnResult(event);
      }

      const option = whichTextRecognized(
        event.results,
        choice
      );

      if (option !== null) {
        that.levelIndex = levelIndexByName.get(option);
        that.startTheGame();
      }
    };
  }

  startTheGame() {
    gameState.levelIndex = this.levelIndex;
    dialoguer.put(new DialogueHello());
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    systemState.speechRecognition.onresult = (
      this.oldSpeechRecognitionOnResult
    );
  }
}

const hiMessages = [
  "Hello! Let's start!",
  "Hi! Let's get ready!",
  "Ready. Steady. Go!"
]

/**
 * Say hello to the user to announce that the game is about to start.
 * @implements IDialogue
 */
class DialogueHello {
  initialHTML() {
    return `<div id="hello-container">
    <div id="hello">👋 Hello! 👋</div>
</div>`;
  }

  mount() {
    promiseToDeactivateSpeechRecognition()
      .then(() => {
        const messageIndex = Math.floor(Math.random() * hiMessages.length);
        return announce(
          hiMessages[messageIndex]
          + " " + levels[gameState.levelIndex].name,
          systemState.speechSynthesisVoiceTarget
        )
      })
      .then(() => {dialoguer.put(new DialoguePlay())})
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      });
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    // Intentionally empty.
  }
}

/**
 * Track the state of a card in the game.
 */
class StatefulCard {
  /**
   * @param theQuestion {string} on the card
   * @param theAnswers {Array<string>} acceptable answers on the card
   */
  constructor(theQuestion, theAnswers) {
    this.question = theQuestion;
    this.answers = theAnswers;

    this.answerSet = new Set(theAnswers);

    /**
     * The number of points won on hitting the right answer
     *
     * @type {number}
     */
    this.score = 3;
  }
}

/**
 * Reveal the correct answer to the user.
 *
 * @param answer {string} the expected correct answer
 * @returns {Promise<void>} announcement
 */
function promiseToRevealCorrectAnswer(answer) {
  return announce(answer, systemState.speechSynthesisVoiceTarget)
    .then(
      () => {
        return new Promise(
          resolve => setTimeout(resolve, 1000)
        );
      }
    );
}


/**
 * Play the game.
 * @implements IDialogue
 */
class DialoguePlay {
  constructor() {
    if (gameState.levelIndex < 0 || gameState.levelIndex >= levels.length) {
      throw new Error(
        "The level index is invalid; " +
        `there are ${levels.length} level(s), ` +
        `but we got level index ${gameState.levelIndex}`
      );
    }

    const level = levels[gameState.levelIndex];

    let cards = [];
    for (const vocabularyCard of level.vocabulary) {
      cards.push(
        new StatefulCard(
          vocabularyCard.question,
          vocabularyCard.answers
        )
      );
    }
    cards = shuffle(cards);

    this.remainingCards = cards;

    /**
     * Cards which were answered correctly and should not re-appear
     * @type {Array<StatefulCard>}
     */
    this.solvedCards = [];

    /**
     * Number of trials left for the current card
     * @type {number}
     */
    this.trials = 3;

    /**
     * Total score in the game so far
     * @type {number}
     */
    this.score = 0;

    /**
     * Timestamp when the ghost moved the last time
     * @type {null|number}
     */
    this.lastGhostStep = null;
    this.ghostSteps = 10;

    /**
     * If set, react to the answers
     * @type {boolean}
     */
    this.playable = false;

    this.oldSpeechRecognitionOnResult = null;
  }

  playMistake() {
    this.playable = false;

    promiseToDeactivateSpeechRecognition()
      .then(() => {
        const audio = new Audio("negative.mp3");
        audio.volume = 0.1;
        return audio.play();
      })
      .then(() => {
        return promiseToActivateSpeechRecognition();
      })
      .then(() => {
        this.playable = true;
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      });
  }

  initialHTML() {
    return `<div id="question"></div>

<div id="terrain">
    <span id="score"
    ></span><span id="potential"
    ></span><span id="ghost"
    ></span>
</div>`;
  }

  logCard() {
    if (this.remainingCards.length > 0) {
      const card = this.remainingCards[this.remainingCards.length - 1];
      console.log(
        "The question is: "
        + card.question
        + ", and the expected possible answers are: "
        + card.answers.join(", ")
      );
    } else {
      console.log("No remaining cards.")
    }
    return null;
  }

  resetGhost() {
    this.lastGhostStep = null;
    this.ghostSteps = 10;
  }

  resetTrials() {
    this.trials = 3;
    console.log("Trials: ", this.trials);
  }

  announceQuestionIfCards() {
    if (this.remainingCards.length === 0) {
      return Promise.resolve();
    }

    const card = this.remainingCards[this.remainingCards.length - 1];
    return announce(
      card.question,
      systemState.speechSynthesisVoiceSource
    );
  }

  /**
   * Change the state and perform side effects on hitting the right answer.
   */
  handleCorrectAnswer() {
    const that = this;

    Promise.resolve()
      .then(() => {
        console.log("Handling correct answer...");
        that.playable = false;

        return promiseToDeactivateSpeechRecognition();
      })
      .then(() => {
        const audio = new Audio("positive.mp3");
        audio.volume = 0.1;
        return audio.play();
      })
      .then(() => {
        const card = this.remainingCards[this.remainingCards.length - 1];
        that.score += card.score;

        that.solvedCards.push(card);

        that.remainingCards.pop();

        if (that.remainingCards.length === 0) {
          dialoguer.put(new DialogueBravo(that.score));
        } else {
          that.logCard();
          that.resetTrials();
          that.resetGhost();
          return that.announceQuestionIfCards()
            .then(() => {
              return promiseToActivateSpeechRecognition();
            })
            .then(() => {
              that.playable = true;
            })
        }
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      })
  }

  promiseToHandleFail() {
    const card = this.remainingCards[this.remainingCards.length - 1];

    const that = this;

    return Promise.resolve()
      .then(() => console.log("Handling a fail..."))
      .then(promiseToDeactivateSpeechRecognition)
      .then(() => promiseToRevealCorrectAnswer(card.answers[0]))
      .then(() => {
        card.score = Math.max(1, card.score - 1);
        that.remainingCards.pop();
        that.remainingCards.unshift(card);

        that.resetTrials();
        that.resetGhost();
        that.logCard();
      })
      .then(() => {return that.announceQuestionIfCards();})
      .then(promiseToActivateSpeechRecognition)
      .then(() => {that.playable = true;});
  }

  /**
   * Change the state and perform side effects on missing the correct answer.
   */
  handleMistake() {
    const that = this;

    Promise.resolve()
      .then(() => {
        console.log("Handling mistake...");
        that.playable = false;

        return promiseToDeactivateSpeechRecognition();
      })
      .then(() => {
        const audio = new Audio("negative.mp3");
        audio.volume = 0.1;
        return audio.play();
      })
      .then(() => {
        that.trials--;
        console.log("Trials: ", that.trials);
        if (that.trials === 0) {
          return that.promiseToHandleFail();
        } else {
          return promiseToActivateSpeechRecognition()
            .then(() => {that.playable = true;});
        }
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      });
  }

  mount() {
    this.logCard();

    const that = this;

    that.oldSpeechRecognitionOnResult = (
      systemState.speechRecognition.onresult
    );

    systemState.speechRecognition.onresult = function (event) {
      if (
        that.oldSpeechRecognitionOnResult !== null
        && that.oldSpeechRecognitionOnResult !== undefined
      ) {
        that.oldSpeechRecognitionOnResult(event);
      }

      if (!that.playable) {
        return;
      }

      if (that.remainingCards.length === 0) {
        return;
      }

      const card = (
        that.remainingCards[that.remainingCards.length - 1]
      );

      const option = whichTextRecognized(
        event.results,
        card.answers.concat(["restart"])
      );

      if (card.answerSet.has(option)) {
        that.handleCorrectAnswer();
      } else if (option === "restart") {
        dialoguer.put(new DialogueSelectLevel());
      } else {
        that.handleMistake();
      }
    };

    Promise.resolve()
      .then(() => {that.playable = false;})
      .then(() => {return that.announceQuestionIfCards();})
      .then(promiseToActivateSpeechRecognition)
      .then(() => {that.playable = true;})
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      })
  }

  refreshScore() {
    /**
     * @type {Array<string>}
     */
    const diamonds = [];
    for (let i = 0; i < this.score; i++) {
      diamonds.push("💎");
    }

    const text = diamonds.join("");
    updateInnerTextIfNeeded(
      document.getElementById("score"),
      text
    );
  }

  refreshPotential() {
    const card = (
      this.remainingCards[this.remainingCards.length - 1]
    );

    /**
     * @type {Array<string>}
     */
    const diamonds = [];
    for (let i = 0; i < card.score; i++) {
      diamonds.push("💎");
    }

    const text = diamonds.join("");
    updateInnerTextIfNeeded(
      document.getElementById("potential"),
      text
    );
  }

  refreshGhost() {
    const ghost = [];
    for (let i = 0; i < this.ghostSteps; i++) {
      ghost.push("&nbsp;");
    }
    ghost.push("👻");

    const text = ghost.join("");
    updateInnerHTMLIfNeeded(
      document.getElementById("ghost"),
      text
    );
  }

  refresh() {
    this.refreshScore();
    this.refreshPotential();
    this.refreshGhost();
  }

  tick(timestamp) {
    if (!this.playable) {
      return;
    }

    if (this.lastGhostStep === null) {
      this.lastGhostStep = timestamp;
    } else {
      const duration = timestamp - this.lastGhostStep;
      if (duration > 1000) {
        this.ghostSteps--;
        this.lastGhostStep = timestamp;

        if (this.ghostSteps === 0) {
          console.log("Promising to handle the fail...");
          this.promiseToHandleFail()
            .catch((err) => {
              console.error('Something went wrong:', err);
              throw new Error();
            });
        }
      }
    }
  }

  unmount() {
    systemState.speechRecognition.onresult = (
      this.oldSpeechRecognitionOnResult
    );
  }
}

const
  bravoMessages = [
    "Bravo!",
    "Well done!",
    "Good job!",
    "Great job!",
    "Congratulations!"
  ]

/**
 * Congratulate the player and finish the game.
 * @implements IDialogue
 */
class DialogueBravo {
  constructor(score) {
    this.oldSpeechRecognitionOnResult = null;

    this.score = score;
    this.totalScore = levels[gameState.levelIndex].vocabulary.length * 3;
  }

  initialHTML() {
    return `<div id="bravo-container">
    <div id="bravo">👏 Bravo! 👏</div>
    <div id="bravo-score">${this.score} 💎 out of ${this.totalScore} 💎</div>
    <button id="restart">Restart</button>
</div>`;
  }

  restart() {
    dialoguer.put(new DialogueSelectLevel())
  }

  // noinspection DuplicatedCode
  mount() {
    const that = this;
    document.getElementById("restart").onclick = () => {
      that.restart()
    }

    promiseToDeactivateSpeechRecognition()
      .then(() => {
        const messageIndex = Math.floor(Math.random() * bravoMessages.length);
        return announce(
          bravoMessages[messageIndex]
          + `${this.score} out of ${this.totalScore}`,
          systemState.speechSynthesisVoiceTarget
        );
      })
      .then(promiseToActivateSpeechRecognition)
      .then(() => {
        that.oldSpeechRecognitionOnResult = (
          systemState.speechRecognition.onresult
        );
        systemState.speechRecognition.onresult = function (event) {
          if (
            that.oldSpeechRecognitionOnResult !== null
            && that.oldSpeechRecognitionOnResult !== undefined
          ) {
            that.oldSpeechRecognitionOnResult(event);
          }

          const option = whichTextRecognized(
            event.results,
            ["restart"]
          );

          if (option === "restart") {
            dialoguer.put(new DialogueSelectLevel());
          }
        }
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
        throw new Error();
      })
  }

  refresh() {
    // Intentionally empty.
  }

  tick(timestamp) {
    // Intentionally empty.
  }

  unmount() {
    systemState.speechRecognition.onresult = (
      this.oldSpeechRecognitionOnResult
    );
  }
}

/**
 * Handle dialogue changes.
 */
class Dialoguer {
  constructor() {
    /**
     * Current dialogue
     * @type {IDialogue | null}
     */
    this.dialogue = null;
  }

  /**
   * Change the dialogue.
   * @param {IDialogue} dialogue
   */
  put(dialogue) {
    if (this.dialogue !== null) {
      this.dialogue.unmount();
    }

    this.dialogue = dialogue;

    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = this.dialogue.initialHTML();
    this.dialogue.mount();
  }
}

const dialoguer = new Dialoguer();

const systemState = {
  speechRecognition: null,
  speechRecognitionActive: false,

  speechSynthesisVoiceSource: null,
  speechSynthesisVoiceTarget: null,

  /**
   * Current time of the system
   * @type {number}
   */
  timestamp: 0
}

const gameState = {
  levelIndex: 0
}


/**
 * Make a copy of the array and shuffle it.
 * @param {Array<T>} array to be shuffled
 * @returns {Array<T>} shuffled items
 * @template T
 */
function shuffle(array) {
  const shuffled = [...array];
  shuffled.sort(() => Math.random() - 0.5);
  return shuffled;
}

function setupSpeechSynthesis() {
  systemState.speechSynthesisVoiceSource = null;
  systemState.speechSynthesisVoiceTarget = null;

  if (window.speechSynthesis === undefined) {
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  if (voices === null || voices === undefined || voices.length === 0) {
    return;
  }

  for (let i = 0; i < voices.length; i++) {
    const lang = voices[i].lang.toLowerCase();

    console.log("Available voice synthesis language: ", lang);

    if (lang === "hr" || lang.startsWith("hr-")) {
      const voice = voices[i];

      if (systemState.speechSynthesisVoiceSource !== voice) {
        systemState.speechSynthesisVoiceSource = voice;
      }
    }

    if (lang === "en" || lang.startsWith("en-")) {
      const voice = voices[i];

      if (systemState.speechSynthesisVoiceTarget !== voice) {
        systemState.speechSynthesisVoiceTarget = voice;
      }
    }
  }

  if (systemState.speechSynthesisVoiceSource === null) {
    console.error(
      "The speech synthesis for the source language could not be found."
    );
    throw new Error();
  }

  if (systemState.speechSynthesisVoiceTarget === null) {
    console.error(
      "The speech synthesis for the target language could not be found."
    );
    throw new Error();
  }
}

/**
 * Extract the possible transcripts as recognized by speech recognition.
 * @param resultList {SpeechRecognitionResultList}
 * @return {Array<string>}
 */
function possibleTranscriptsFromLastResult(
  resultList
) {
  if (resultList.length === 0) {
    return [];
  }

  const lastResult = resultList[resultList.length - 1];

  const transcripts = [];
  for (const alternative of lastResult) {
    transcripts.push(alternative.transcript);
  }

  return transcripts;
}

/**
 * Check if we recognized any of the choices in the last result of the speech
 * recognition.
 *
 * @param resultList {SpeechRecognitionResultList}
 * @param choice {Array<string>}
 * @return string|null
 */
function whichTextRecognized(
  resultList,
  choice
) {
  const resultSet = new Set();
  const transcripts = possibleTranscriptsFromLastResult(resultList);
  for (const transcript of transcripts) {
    resultSet.add(transcript.toLowerCase().trim());
  }

  for (const option of choice) {
    if (resultSet.has(option.toLowerCase().trim())) {
      return option;
    }
  }

  return null;
}

function setupSpeechRecognition() {
  systemState.speechRecognition = null;

  // noinspection JSUnresolvedVariable
  const SpeechRecognition =
    window.SpeechRecognition
    || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 4;

  const microphone = document.getElementById(
    "speech-recognition-microphone"
  );

  recognition.onstart = function () {
    console.log("Speech recognition started.")
    microphone.className = "microphone-recording";
  }

  recognition.onspeechstart = function () {
    console.log("Speech recognition started to record speech.")
    microphone.className = "microphone-recording";
  }

  recognition.onspeechend = function () {
    console.log("Speech recognition stopped to record speech.")
    microphone.className = "microphone-idle";
  }

  recognition.onend = function () {
    microphone.className = "microphone-idle";

    if (systemState.speechRecognitionActive) {
      console.log(
        "Speech recognition is set to be active, but has just ended. " +
        "We are restarting it..."
      );
      recognition.start();
    } else {
      console.log("Speech recognition ended.");
    }
  }

  recognition.onresult = function (event) {
    const result = document.getElementById(
      "speech-recognition-result"
    );

    const transcripts = possibleTranscriptsFromLastResult(
      event.results
    );

    if (transcripts.length > 0) {
      const text = transcripts.join("; ");
      console.log("Speech recognition recognized: " + text);
      result.innerText = text;
    } else {
      console.log("Speech recognition did not recognize anything.")
      result.innerHTML = "<i>No text recognized.</i>"
    }
  }

  systemState.speechRecognition = recognition;
}


/**
 * Announce the text to the user.
 * @param text to be announced
 * @param voice to utter the text with
 * @returns {Promise<void>}
 */
function announce(text, voice) {
  console.log(`Announcing: ${text}`)
  if (voice === null) {
    return new Promise((_, reject) => {
      reject("Null speech synthesis voice.")
    });
  }

  let utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance)

  return new Promise((resolve, reject) => {
    utterance.onend = resolve;
    utterance.onerror = (errorEvent) => {
      if (errorEvent.error === 'interrupted') {
        resolve();
      } else {
        reject(errorEvent)
      }
    }
  })
}


const dummyElementForHTMLCanonicalization = document.createElement(
  "div"
);

/**
 * Update the inner HTML of the element if it differs from the given text.
 * @param {HTMLElement} element
 * @param {string} code HTML code
 */
function updateInnerHTMLIfNeeded(element, code) {
  dummyElementForHTMLCanonicalization.innerHTML = code;
  const canonicalized = dummyElementForHTMLCanonicalization.innerHTML;

  if (canonicalized !== element.innerHTML) {
    element.innerHTML = canonicalized;
  }
}

/**
 * Update the inner text of the element if it differs from the given text.
 * @param {HTMLElement} element
 * @param {string} text
 */
function updateInnerTextIfNeeded(element, text) {
  if (element.innerText !== text) {
    element.innerText = text;
  }
}

/**
 * Add the style class if it is not already present in the element.
 * @param {HTMLElement} element
 * @param {string} cls
 */
function addClassIfNeeded(element, cls) {
  if (!element.classList.contains(cls)) {
    element.classList.add(cls)
  }
}

/**
 * Handle every frame redrawing.
 * @param {number} timestamp
 */
function handleFrame(timestamp) {
  if (dialoguer.dialogue !== null) {
    dialoguer.dialogue.tick(timestamp);
    dialoguer.dialogue.refresh();
  }

  systemState.timestamp = timestamp;

  requestAnimationFrame(handleFrame);
}

function main() {
  dialoguer.put(new DialoguePressHere());
  requestAnimationFrame(handleFrame);
}

window.onload = main;
