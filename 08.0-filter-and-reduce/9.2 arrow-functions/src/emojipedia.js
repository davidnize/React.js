const emojipedia = [
  {
    id: 1,
    emoji: "😀",
    name: "Grinning Face",
    meaning:
      "A big open smile. Means happiness, good mood, or friendly greetings. One of the most common all-purpose smileys."
  },
  {
    id: 2,
    emoji: "😂",
    name: "Face With Tears Of Joy",
    meaning:
      "A face laughing so hard it cries. Used when something is really funny. One of the most popular emojis worldwide."
  },
  {
    id: 3,
    emoji: "😊",
    name: "Smiling Face With Smiling Eyes",
    meaning:
      "A warm, gentle smile with rosy cheeks. Shows kindness, gratitude, or quiet happiness. Softer than the big grin."
  },
  {
    id: 4,
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "A smile with hearts for eyes. Means love, adoration, or “I want this!”. Used for people, food, shoes, anything you love."
  },
  {
    id: 5,
    emoji: "😘",
    name: "Face Blowing A Kiss",
    meaning:
      "A winking face sending a heart-shaped kiss. Used for affection, goodbyes, and saying thanks to someone close."
  },
  {
    id: 6,
    emoji: "😎",
    name: "Smiling Face With Sunglasses",
    meaning:
      "A smiling face in dark sunglasses. Means “cool”, confident, or relaxed. Also used for summer and holidays."
  },
  {
    id: 7,
    emoji: "😜",
    name: "Winking Face With Tongue",
    meaning:
      "A face with one eye winking and the tongue sticking out. Shows joking, teasing, or silliness."
  },
  {
    id: 8,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A sad face with a single tear. Used for sadness, disappointment, or feeling hurt. Milder than the sobbing face."
  },
  {
    id: 9,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A face with streams of tears. Means heavy sadness, but is also often used for laughing so hard you cry, or being overwhelmed."
  },
  {
    id: 10,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A red, angry face. Stands for rage, strong annoyance, or frustration."
  },
  {
    id: 11,
    emoji: "😱",
    name: "Face Screaming In Fear",
    meaning:
      "A face with hands on its cheeks and a wide-open mouth. Shows shock, terror, or big surprise at bad news."
  },
  {
    id: 12,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and “zzz”. Means tired, sleepy, or bored. Also used to say goodnight."
  },
  {
    id: 13,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A smiling face with a party hat and a horn. Used for birthdays, celebrations, and good news."
  },
  {
    id: 14,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with big, shiny puppy eyes. Used to beg, ask for a favor, or look sweet and vulnerable."
  },
  {
    id: 15,
    emoji: "😁",
    name: "Beaming Face With Smiling Eyes",
    meaning:
      "A wide grin showing the teeth, with happy eyes. Means joy, pride, or excitement. Also used when you are pleased with yourself."
  },
  {
    id: 16,
    emoji: "😆",
    name: "Grinning Squinting Face",
    meaning:
      "A laughing face with the eyes squeezed shut. Used for something funny or silly. Less intense than crying with laughter."
  },
  {
    id: 17,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "A smiling face with one eye closed. Used for flirting, joking, or hinting that something is not meant seriously."
  },
  {
    id: 18,
    emoji: "😇",
    name: "Smiling Face With Halo",
    meaning:
      "A smiling face with a halo above it. Means innocent, good, or blessed. Often used jokingly when someone is pretending to be innocent."
  },
  {
    id: 19,
    emoji: "🙂",
    name: "Slightly Smiling Face",
    meaning:
      "A small, calm smile. Shows politeness or mild happiness. Can also come across as cold or passive-aggressive, depending on the chat."
  },
  {
    id: 20,
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning:
      "A smiling face turned upside down. Used for sarcasm, irony, or silliness. Also shows hiding stress behind a smile."
  },
  {
    id: 21,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A smiling face licking its lips. Means yummy or delicious. Also used for something tempting or enjoyable."
  },
  {
    id: 22,
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "A face with a sideways, knowing smile. Shows smugness, mischief, or flirting. Used when someone is pleased with a sneaky comment."
  },
  {
    id: 23,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "A face with half-closed eyes and a flat mouth. Shows annoyance, boredom, or disapproval. Used for “really?” moments."
  },
  {
    id: 24,
    emoji: "😞",
    name: "Disappointed Face",
    meaning:
      "A downcast face with a small frown. Means let down, sad, or discouraged. Used when plans fall through or results are bad."
  },
  {
    id: 25,
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "A frowning face with sharp eyebrows. Shows anger or irritation. Less extreme than the red pouting face."
  },
  {
    id: 26,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with its head bursting open. Means mind blown, shocked, or overwhelmed by something amazing or confusing."
  },
  {
    id: 27,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "A wide-eyed face with red cheeks. Shows embarrassment, shock, or shyness. Also used when something is unexpectedly awkward."
  },
  {
    id: 28,
    emoji: "😬",
    name: "Grimacing Face",
    meaning:
      "A face with clenched teeth. Shows nervousness, awkwardness, or “yikes”. Used after an embarrassing mistake."
  },
  {
    id: 29,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A smiling face with open hands. Means a hug, warmth, or comfort. Used to show care or to celebrate."
  },
  {
    id: 30,
    emoji: "🤫",
    name: "Shushing Face",
    meaning:
      "A face with a finger over its lips. Means “be quiet” or “keep it secret”. Used for surprises and gossip."
  }
];

export default emojipedia;