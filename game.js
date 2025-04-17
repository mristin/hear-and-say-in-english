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
  {
    name: "Family bonds 1",
    vocabulary: [
      {question: "izleći se", answers: ["to hatch", "hatch"]},
      {question: "suša", answers: ["drought", "trout"]},
      {question: "tražiti", answers: ["to search", "search"]},
      {question: "krdo", answers: ["herd"]},
      {question: "čopor", answers: ["pack", "peck"]},
      {question: "trebati", answers: ["to need", "need"]},
      {question: "potreba", answers: ["need"]},
      {question: "putovati", answers: ["to travel", "travel"]},
      {question: "dalje", answers: ["further"]},
      {question: "kako želiš", answers: ["up to you", "as you wish"]},
      {question: "četvrtina", answers: ["quarter"]},
      {question: "prilično", answers: ["pretty"]},
      {question: "zaštititi", answers: ["to protect", "protect"]},
      {question: "ozbiljan", answers: ["serious"]},
      {question: "umetnost", answers: ["art"]},
    ]
  },
  {
    name: "Family bonds 2",
    vocabulary: [
      {question: "zadužen", answers: ["in charge"]},
      {question: "cilj, meta", answers: ["target"]},
      {question: "godišnje doba", answers: ["season"]},
      {question: "zatvorenik", answers: ["prisoner"]},
      {question: "sećanja", answers: ["memories"]},
      {question: "smrt", answers: ["death"]},
      {question: "ispustiti", answers: ["to drop", "drop"]},
      {question: "goniti", answers: ["to chase", "chase"]},
      {question: "oblak", answers: ["cloud"]},
      {question: "otkriti, opaziti", answers: ["to detect", "detect"]},
      {question: "odrastao", answers: ["adult"]},
      {question: "pre", answers: ["before"]},
      {question: "zaceliti, izlečiti se", answers: ["to heal", "heal"]},
      {question: "zbog toga što, zato što", answers: ["because"]},
      {question: "pomeriti", answers: ["to move", "move"]},
      {question: "zamka", answers: ["trap"]},
      {question: "opet", answers: ["again"]},
      {question: "vežbati", answers: ["to practice", "practice"]},
      {question: "nastaviti", answers: ["to continue", "continue"]},
      {question: "alatka", answers: ["tool"]},
    ]
  },
  {
    name: "Halloween",
    vocabulary: [
      {question: "skičati", answers: ["squeal", "to squeal"]},
      {question: "radost, uživanje", answers: ["delight"]},
      {question: "šišmiš", answers: ["bat"]},
      {question: "grana", answers: ["branch"]},
      {question: "grozan, strašan", answers: ["frightful"]},
      {question: "strah, trema", answers: ["fright"]},
      {question: "bombon", answers: ["candy"]},
      {question: "zgrabiti, uhvatiti", answers: ["to grab", "grab"]},
      {question: "baterijska lampa", answers: ["flashlight"]},
      {question: "časti ili nagrabusi", answers: ["trick or treat"]},
      {question: "otkrivati", answers: ["to reveal", "reveal"]},
      {question: "hrpa", answers: ["pile"]},
      {question: "kost", answers: ["bone"]},
      {question: "zrak", answers: ["beam"]},
      {question: "ječati", answers: ["to moan", "moan"]},
      {question: "jaukati", answers: ["to groan", "groan"]},
      {question: "ljuljaška", answers: ["swing"]},
      {question: "klatiti se, njihati se", answers: ["to sway", "sway"]},
      {question: "ogrtač", answers: ["cloak"]},
      {question: "posvetliti", answers: ["to brighten", "brighten"]},
      {question: "žaba krastača", answers: ["toad"]},
      {question: "žaba", answers: ["frog"]},
      {question: "pena", answers: ["foam"]},
      {question: "preplašiti", answers: ["to frighten"]},
      {question: "džep", answers: ["pocket"]},
      {question: "vikati", answers: ["yell", "to yell"]},
      {question: "kakao", answers: ["cocoa"]},
      {question: "krut, ukočen", answers: ["stiff"]},
      {question: "razmetati se", answers: ["to boast", "boast"]},
    ]
  },
  {
    name: "KIS Wordlist Part 1",
    vocabulary: [
      {question: "dok, sve dok", answers: ["while"]},
      {question: "svetlost dana", answers: ["daylight"]},
      {question: "mogao bi", answers: ["might"]},
      {question: "hodati uspravno", answers: ["upright"]},
      {question: "skloniti, pospremiti", answers: ["put away", "to put away"]},
      {question: "teret, opterećenje", answers: ["load"]},
      {question: "srećan, zadovoljan, drago mi je", answers: ["glad"]},
      {question: "šepati, ćopati", answers: ["limp", "to limp"]},
      {question: "šepati, ćopati, hramati", answers: ["limp", "to limp"]},
      {question: "odložiti, baciti", answers: ["dump", "to dump"]},
      {question: "sudariti se, čvoknuti se", answers: ["bump", "to bump"]},
      {question: "skočiti u dalj", answers: ["leap", "to leap"]},
      {question: "isflekati, umrljati", answers: ["stain", "to stain"]},
      {question: "doneti nešto, ići po nešto", answers: ["fetch", "to fetch"]},
      {question: "jednom", answers: ["once"]},
      {question: "od, otkad", answers: ["since"]},
      {question: "od tada", answers: ["ever since"]},
      {question: "tokom", answers: ["during"]},
      {question: "posle, nakon", answers: ["afterward"]},
      {question: "saviti", answers: ["bend", "to bend"]},
      {question: "geslo", answers: ["slogan"]},
      {question: "često", answers: ["frequently"]},
    ]
  },
  {
    name: "KIS Wordlist Part 2",
    vocabulary: [
      {question: "čistiti zube koncem", answers: ["floss", "to floss"]},
      {question: "prednji deo, napred", answers: ["front"]},
      {question: "potpuno", answers: ["totally"]},
      {question: "po zakonu", answers: ["legally"]},
      {question: "proizvod", answers: ["product"]},
      {question: "dobit", answers: ["profit"]},
      {question: "duž", answers: ["along"]},
      {question: "tona", answers: ["ton"]},
      {question: "centar pažnje", answers: ["focus"]},
      {question: "konačno", answers: ["finally"]},
      {question: "čak", answers: ["even"]},
      {question: "jednako, ravnopravno", answers: ["equally"]},
      {question: "ispustiti, baciti na zemlju", answers: ["drop", "to drop"]},
      {question: "do", answers: ["until"]},
      {question: "smrskati, zdrobiti", answers: ["crush", "to crush"]},
      {question: "grba, izbočina", answers: ["hunch"]},
      {question: "dokaz", answers: ["evidence"]},
      {question: "postojati", answers: ["exist", "to exist"]},
      {question: "izumro", answers: ["extinct"]},
      {question: "fosil", answers: ["fossil"]},
      {question: "uzrok", answers: ["cause"]},
      {question: "posledica", answers: ["effect", "consequence"]},
      {question: "iskren", answers: ["honest"]},

    ]
  },
  {
    name: "KIS Wordlist Part 3",
    vocabulary: [
      {question: "maketa", answers: ["model"]},
      {question: "udaljen", answers: ["distant"]},
      {question: "džangrizav, mrzovoljan", answers: ["grumpy"]},
      {question: "kamp", answers: ["camp"]},
      {question: "uvrediti", answers: ["insult", "to insult"]},
      {question: "takmičenje", answers: ["contest"]},
      {question: "nagaziti", answers: ["stump", "to stump"]},
      {question: "put", answers: ["trip"]},
      {question: "klada", answers: ["log"]},
      {question: "stanje", answers: ["state"]},
      {question: "država", answers: ["state"]},
      {question: "talas", answers: ["wave"]},
      {question: "izbrisati", answers: ["delete", "to delete"]},
      {question: "ljubazan, vaspitan, pristojan", answers: ["polite"]},
      {question: "polako iščezavati, nestajati", answers: ["fade", "to fade"]},
      {question: "pobeći, izbaviti se", answers: ["escape", "to escape"]},
      {question: "biti živ", answers: ["be alive", "to be alive"]},
      {question: "ličiti, biti sličan", answers: ["be alike", "to be alike"]},
      {question: "potpun, zaokružen, ceo", answers: ["complete"]},
      {question: "tema", answers: ["theme"]},
      {question: "opisati", answers: ["describe", "to describe"]},
      {question: "konkretno", answers: ["concrete"]},
      {
        question: "situirati, postaviti u scenu",
        answers: ["locate", "to locate"]
      },
      {
        question: "ponovo pregledati, preraditi",
        answers: ["revise", "to revise"]
      },
      {
        question: "pokazati, dokazati",
        answers: ["demonstrate", "to demonstrate"]
      },
      {question: "nastojati, stremiti", answers: ["strive", "to strive"]},
    ],
  },
  {
    name: "Kung fu panda 1",
    vocabulary: [
      {
        question: "učiniti nepokretnim",
        answers: ["immobilize", "to immobilize"]
      },
      {
        question: "svariti",
        answers: ["digest", "to digest"]
      },
      {
        question: "nežan",
        answers: ["tender"]
      },
      {
        question: "razočaravajuć",
        answers: ["disappointing"]
      },
      {
        question: "sramota",
        answers: ["disgrace"]
      },
      {
        question: "sveto",
        answers: ["sacred"]
      },
      {
        question: "nebesa",
        answers: ["heaven"]
      },
      {
        question: "zabrinut",
        answers: ["concerned"]
      },
      {
        question: "zglobovi prstiju",
        answers: ["knuckles"]
      },
      {
        question: "mrak",
        answers: ["darkness"]
      },
      {
        question: "mir",
        answers: ["peace", "piece"]
      },
      {
        question: "parče",
        answers: ["piece", "peace"]
      },
      {
        question: "nesreća",
        answers: ["accident"]
      },
      {
        question: "iluzija",
        answers: ["illusion"]
      },
      {
        question: "poniznost",
        answers: ["humility"]
      },
      {
        question: "evakuisati",
        answers: ["evacuate", "to evacuate"]
      },
      {
        question: "sudbina",
        answers: ["destiny"]
      },
      {
        question: "čekati",
        answers: ["await", "to await"]
      },
      {
        question: "omiljeni",
        answers: ["favorite"]
      },
      {
        question: "usluga",
        answers: ["favor"]
      }
    ]
  },
  {
    name: "Kung fu panda 2",
    vocabulary: [
      {
        question: "slabost",
        answers: ["weakness"]
      },
      {
        question: "truliti",
        answers: ["to rot", "rot"]
      },
      {
        question: "poraziti",
        answers: ["to defeat", "defeat"]
      },
      {
        question: "pokloniti se pred njegovim nogama",
        answers: ["bow at his feet"]
      },
      {
        question: "osim ako / ukoliko ne",
        answers: ["unless"]
      },
      {
        question: "zameniti",
        answers: ["to replace", "replace"]
      },
      {
        question: "predskazati",
        answers: ["to foretell", "foretell"]
      },
      {
        question: "sreća / bogatstvo",
        answers: ["fortune", "luck", "wealth"]
      },
      {
        question: "rešenje",
        answers: ["solution"]
      },
      {
        question: "pravda",
        answers: ["justice"]
      },
      {
        question: "prilika",
        answers: ["occasion", "opportunity"]
      },
      {
        question: "dramatičan",
        answers: ["dramatic"]
      },
      {
        question: "zapaljiv",
        answers: ["flammable"]
      },
      {
        question: "cvetati / procvetati",
        answers: ["to bloom", "bloom"]
      },
      {
        question: "naslednik",
        answers: ["successor"]
      },
      {
        question: "vođstvo / uputstvo",
        answers: ["guidance", "instruction"]
      },
      {
        question: "veštica / čarobnica",
        answers: ["sorceress", "witch", "enchantress"]
      },
      {
        question: "menjanje oblika",
        answers: ["shape-shifting", "transforming"]
      },
      {
        question: "poslovica",
        answers: ["proverb"]
      },
      {
        question: "običaj",
        answers: ["custom", "tradition"]
      }
    ]
  },
  {
    name: "Kung fu panda 3",
    vocabulary: [
      {
        question: "po meri / ručno izrađen",
        answers: ["custom-made"]
      },
      {
        question: "milost",
        answers: ["mercy"]
      },
      {
        question: "nemilosrdan / surov",
        answers: ["ruthless"]
      },
      {
        question: "sentimentalan / osećajan",
        answers: ["sentimental"]
      },
      {
        question: "dragovoljno / dobrovoljno",
        answers: ["willingly"]
      },
      {
        question: "uznemirujući",
        answers: ["disturbing"]
      },
      {
        question: "očaranje / čarolija",
        answers: ["enchantment"]
      },
      {
        question: "nadoknaditi / kompenzovati",
        answers: ["compensate"]
      }
    ]
  },
  {
    name: "Kung fu panda 4",
    vocabulary: [
      {
        question: "moda",
        answers: ["fashion"]
      },
      {
        question: "dostignuće / uspeh",
        answers: ["achievement"]
      },
      {
        question: "oklopna rukavica",
        answers: ["gauntlet"]
      },
      {
        question: "crevo / stomak",
        answers: ["gut"]
      },
      {
        question: "sahrana",
        answers: ["funeral"]
      },
      {
        question: "lutati",
        answers: ["to wander", "wander"]
      },
      {
        question: "obnoviti / vratiti",
        answers: ["to restore", "restore"]
      },
      {
        question: "herojski",
        answers: ["heroic"]
      },
      {
        question: "delo / podvig",
        answers: ["deed"]
      },
      {
        question: "ostaviti utisak / impresionirati",
        answers: ["to impress", "impress"]
      },
      {
        question: "ravnodnevnica",
        answers: ["equinox"]
      },
      {
        question: "kovati",
        answers: ["to forge", "forge"]
      },
      {
        question: "probušiti / probosti",
        answers: ["to pierce", "pierce"]
      },
      {
        question: "lobanja",
        answers: ["skull"]
      },
      {
        question: "proterati / isterati",
        answers: ["to banish", "banish"]
      },
      {
        question: "pokolj / krvoproliće",
        answers: ["carnage"]
      },
      {
        question: "obala",
        answers: ["shore"]
      },
      {
        question: "prečica / skraćeni put",
        answers: ["shortcut"]
      },
      {
        question: "popust",
        answers: ["discount"]
      },
      {
        question: "naknada / taksa",
        answers: ["fee"]
      },
      {
        question: "prevrnuti se / pasti",
        answers: ["to tumble", "tumble"]
      },
      {
        question: "štit",
        answers: ["shield"]
      },
      {
        question: "nastaviće se",
        answers: ["to be continued"]
      },
      {
        question: "ne uspeti",
        answers: ["to fail", "fail"]
      },
      {
        question: "predati se",
        answers: ["to surrender", "surrender"]
      },
      {
        question: "problem",
        answers: ["issue"]
      }
    ]
  },
  {
    name: "Marry Poppins",
    vocabulary: [
      {
        question: "odvratan",
        answers: ["atrocious"]
      },
      {
        question: "ponašanje",
        answers: ["behavior"]
      },
      {
        question: "zarazan",
        answers: ["contagious"]
      },
      {
        question: "odlučiti se",
        answers: ["to make up their mind", "make up their mind"]
      },
      {
        question: "pomoći",
        answers: ["to give somebody a hand", "give somebody a hand"]
      },
      {
        question: "raspored",
        answers: ["schedule"]
      },
      {
        question: "sipati",
        answers: ["to pour", "pour"]
      },
      {
        question: "dugačko donje rublje / dugačke gaće",
        answers: ["long underwear"]
      },
      {
        question: "smiren",
        answers: ["calm"]
      },
      {
        question: "vinuti se",
        answers: ["to soar", "soar"]
      },
      {
        question: "čestitati",
        answers: ["to congratulate", "congratulate"]
      },
      {
        question: "vratiti se",
        answers: ["to return", "return"]
      },
      {
        question: "sačuvati / štedeti",
        answers: ["to save", "save"]
      },
      {
        question: "preminuti",
        answers: ["to pass away", "pass away"]
      }
    ]
  },
  {
    name: "Mighty Jack",
    vocabulary: [
      {
        question: "posmatrati / pratiti",
        answers: ["to observe", "observe"]
      },
      {
        question: "uređaj",
        answers: ["device"]
      },
      {
        question: "pristati / složiti se",
        answers: ["to agree", "agree"]
      },
      {
        question: "motor",
        answers: ["engine"]
      },
      {
        question: "očajan",
        answers: ["desperate"]
      },
      {
        question: "drugar",
        answers: ["buddy"]
      },
      {
        question: "papiri / dokumentacija",
        answers: ["paperwork"]
      },
      {
        question: "popuniti",
        answers: ["to fill out", "fill out"]
      },
      {
        question: "zapaliti",
        answers: ["to set on fire", "set on fire"]
      },
      {
        question: "ambar / štala",
        answers: ["barn"]
      },
      {
        question: "lutati / skitati",
        answers: ["to roam", "roam"]
      },
      {
        question: "korov",
        answers: ["weed"]
      },
      {
        question: "povući nekoga / cimnuti nekoga",
        answers: ["to tug somebody", "tug somebody"]
      },
      {
        question: "sahraniti / zakopati",
        answers: ["to bury", "bury"]
      },
      {
        question: "jarak / kanal",
        answers: ["ditch"]
      },
      {
        question: "uzdahnuti",
        answers: ["to sigh", "sigh"]
      },
      {
        question: "završiti za danas",
        answers: ["to call it a day", "call it a day"]
      }
    ]
  },
  {
    name: "Charlotte's Webb",
    vocabulary: [
      {question: "potok", answers: ["brook"]},
      {
        question: "izdržavati nekoga",
        answers: ["provide for", "to provide for"]
      },
      {question: "radi kako hoćeš", answers: ["do as you please"]},
      {question: "pocrveneti", answers: ["blush", "to blush"]},
      {question: "viriti", answers: ["peek", "to peek"]},
      {question: "majušni, zakržljali", answers: ["runt"]},
      {question: "vikati", answers: ["holler", "to holler"]},
      {question: "đubrivo", answers: ["manure"]},
      {question: "znoj", answers: ["perspiration"]},
      {question: "povetarac", answers: ["breeze"]},
      {question: "vile", answers: ["pitchfork"]},
      {question: "svinjac", answers: ["pigpen"]},
      {question: "odbaciti nešto", answers: ["discard", "to discard"]},
      {question: "cereknuti se", answers: ["chuckle", "to chuckle"]},
      {question: "vrteti, uvrteti", answers: ["twirl", "to twirl"]},
      {question: "voćnjak", answers: ["orchard"]},
      {question: "šupa", answers: ["shed"]},
      {question: "zakrpiti, popraviti", answers: ["mend", "to mend"]},
      {question: "unajmiti", answers: ["hire", "to hire"]},
      {
        question: "izmaći se, izbegavati",
        answers: ["dodge about", "to dodge about"]
      },
      {question: "frka, galama", answers: ["fuss"]},
      {question: "zarobljeništvo", answers: ["captivity"]},
      {question: "pozvati se na nešto", answers: ["appeal to", "to appeal to"]},
      {question: "pohvala", answers: ["praise"]}
    ]
  },
  {
    name: "Charlotte's Webb 2",
    vocabulary: [
      {question: "postojano", answers: ["steadily"]},
      {question: "krivudavo", answers: ["in crooked courses"]},
      {question: "livada", answers: ["meadow"]},
      {question: "sokak", answers: ["lane"]},
      {question: "uličica", answers: ["lane"]},
      {question: "zanimanje", answers: ["occupation"]},
      {question: "sos", answers: ["gravy"]},
      {question: "umak", answers: ["gravy"]},
      {
        question: "baciti nešto",
        answers: ["dump something", "to dump something"]
      },
      {
        question: "izbegavati nešto",
        answers: ["avoid something", "to avoid something"]
      },
      {question: "pokisao", answers: ["soaked by rain"]},
      {question: "jecati", answers: ["sob", "to sobb", "to sob"]},
      {question: "pokret", answers: ["motion"]},
      {question: "nepokretan", answers: ["motionless"]},
      {question: "obaveza", answers: ["errand"]},
      {question: "gaditi", answers: ["disgust", "to disgust"]},
      {question: "poreći", answers: ["deny", "to deny"]},
      {question: "zadnji deo", answers: ["rear end"]},
      {question: "nasledstvo", answers: ["inheritance"]}
    ]
  },
  {
    name: "Charlotte's Webb 3",
    vocabulary: [
      {question: "okrutan", answers: ["cruel"]},
      {question: "svojom pameću", answers: ["by my wits"]},
      {question: "kockati se", answers: ["to gamble", "gamble"]},
      {question: "spoljašnjost", answers: ["exterior"]},
      {question: "unutrašnjost", answers: ["interior"]},
      {question: "procvetati", answers: ["to blossom", "blossom"]},
      {question: "pastrmka", answers: ["trout"]},
      {question: "maslačak", answers: ["dandelion"]},
      {question: "udarati", answers: ["to pound", "pound"]},
      {question: "moral", answers: ["morals"]},
      {question: "savest", answers: ["conscience"]},
      {question: "skrupule", answers: ["scruples"]},
      {question: "obzir", answers: ["consideration"]},
      {question: "pristojnost", answers: ["decency"]},
      {question: "dosađivati", answers: ["to pester", "pester"]},
      {question: "zavera", answers: ["conspiracy"]},
      {question: "praćka", answers: ["slingshot"]}
    ]
  }
]

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
      .then(() => {
        dialoguer.put(new DialoguePlay())
      })
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
      .then(() => {
        return that.announceQuestionIfCards();
      })
      .then(promiseToActivateSpeechRecognition)
      .then(() => {
        that.playable = true;
      });
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
            .then(() => {
              that.playable = true;
            });
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
      .then(() => {
        that.playable = false;
      })
      .then(() => {
        return that.announceQuestionIfCards();
      })
      .then(promiseToActivateSpeechRecognition)
      .then(() => {
        that.playable = true;
      })
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
