export const characters = [
  {
    name: 'jinx',
    src: 'https://i.imgur.com/I5VByej.png',
    subSrc: [
      'https://i.imgur.com/I5VByej.png',
      'https://i.imgur.com/OO8fEN1.png',
      'https://i.imgur.com/KhohdN3.png',
      'https://i.imgur.com/co0f5jj.png',
    ],
    color: '#f8f9fa',
    description:
      "Jinx was torn between two identities: the strong, powerful, daughter Silco raised and the fearful, weak, little sister Vi protected. Now, accepting she's the monster that Vi created, Jinx becomes a hollow shell—she is the cursed 'Jinx' that ruins everything.",
  },
  {
    name: 'vi',
    src: 'https://i.imgur.com/y9tIDoJ.png',
    subSrc: [
      'https://i.imgur.com/y9tIDoJ.png',
      'https://i.imgur.com/iol3GxD.png',
      'https://i.imgur.com/pAsa31p.png',
      'https://i.imgur.com/mB7AYbD.png',
    ],
    color: '#e9ecef',
    description:
      'Accepting Powder is gone, Vi comes to terms with what she must do—handle the monster she created: Jinx. Knowing how dangerous her sister is, Vi teams up with Caitlyn and gives in to her request to don the Enforcer badge.',
  },
  {
    name: 'caitlyn',
    src: 'https://i.imgur.com/zmXoUXD.png',
    subSrc: [
      'https://i.imgur.com/zmXoUXD.png',
      'https://i.imgur.com/aIoRmtY.png',
      'https://i.imgur.com/Gota3oe.png',
      'https://i.imgur.com/pkZL2Ke.png',
    ],
    color: '#ced4da',
    description:
      "Caitlyn is an Enforcer from Piltover. She once used her investigative prowess to expose the source of corruption in Zaun and Piltover, but after Jinx's attack on the council, she's abandoned hope for peace.",
  },
  {
    name: 'ekko',
    src: 'https://i.imgur.com/BjQW7NW.png',
    subSrc: [
      'https://i.imgur.com/BjQW7NW.png',
      'https://i.imgur.com/6vGysxD.png',
      'https://i.imgur.com/BMG7VFu.png',
      'https://i.imgur.com/G0zgbya.png',
    ],
    color: '#adb5bd',
    description:
      'Ekko empowers the Firelights, a group of Zaunites who build a new home they all fight to protect. He found an unlikely friend in Heimerdinger, and together they strive to make Zaun better.',
  },
  {
    name: 'heimerdinger',
    src: 'https://i.imgur.com/Ur7eOtA.png',
    subSrc: [
      'https://i.imgur.com/Ur7eOtA.png',
      'https://i.imgur.com/4BTA3T8.png',
      'https://i.imgur.com/cgqT10J.png',
      'https://i.imgur.com/lTHyZHw.png',
    ],
    color: '#6c757d',
    description:
      'Heimerdinger warned the Piltover Council about the dangers of using magic without tangible solutions for safeguarding its use. Learning from his mistakes with Jayce, Heimerdinger inspires Ekko to keep looking for a solution and works with him to solve the problem, instead of just offering advice.',
  },
  {
    name: 'ambessa',
    src: 'https://i.imgur.com/THjjAem.png',
    subSrc: [
      'https://i.imgur.com/THjjAem.png',
      'https://i.imgur.com/hKVSFj2.png',
      'https://i.imgur.com/ji7W5pE.png',
      'https://i.imgur.com/p5WAWy2.png',
    ],
    color: '#495057',
    description:
      "Ambessa, a Noxian warrior and Mel's mother, swears to protect her family's name…even if it means going against her daughter's wishes.",
  },
];

export const filmImages = [
  'https://i.imgur.com/Vww2Su7.png',
  'https://i.imgur.com/zIHRqAO.png',
  'https://i.imgur.com/jomjSPv.png',
  'https://i.imgur.com/V4S69UR.png',
  'https://i.imgur.com/igiJP9H.png',
  'https://i.imgur.com/YgJ9nlT.png',
];

export async function getImage() {
  return filmImages;
}
