export const dimensionOrder = ["EFF", "DEF", "PRESSURE", "AMBITION", "READ", "CALC", "TILT", "VIBE", "HOPE"];

export const serverQuestions = [
  { id: "q1", dim: "AMBITION", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q2", dim: "CALC", options: [{ value: 1 }, { value: 3 }, { value: 2 }] },
  { id: "q3", dim: "DEF", options: [{ value: 1 }, { value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q4", dim: "PRESSURE", options: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 3 }] },
  { id: "q5", dim: "READ", options: [{ value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }] },
  { id: "q6", dim: "TILT", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q7", dim: "TILT", options: [{ value: 3 }, { value: 2 }, { value: 1, mystic: 1, mysticLock: 1 }] },
  { id: "q8", dim: "VIBE", options: [{ value: 1 }, { value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q9", dim: "AMBITION", options: [{ value: 1 }, { value: 2 }, { value: 1 }, { value: 3 }] },
  { id: "q10", dim: "EFF", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q12", dim: "AMBITION", options: [{ value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }] },
  { id: "q13", dim: "PRESSURE", options: [{ value: 3 }, { value: 2 }, { value: 1 }] },
  { id: "q14", dim: "VIBE", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q16", dim: "VIBE", options: [{ value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }] },
  { id: "q15", dim: "HOPE", options: [{ value: 1, atm: 0 }, { value: 2, atm: 0 }, { value: 3, atm: 1 }, { value: 3, atm: 2 }] },
  { id: "q19", dim: "EFF", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q20", dim: "EFF", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q25", dim: "CALC", options: [{ value: 2 }, { value: 3 }, { value: 1 }] },
  { id: "q26", dim: "READ", options: [{ value: 1 }, { value: 2 }, { value: 2 }, { value: 3 }] },
  { id: "q28", dim: "HOPE", options: [{ value: 1, atm: 0 }, { value: 2, atm: 0 }, { value: 2, atm: 1 }, { value: 3, atm: 2 }] },
  { id: "q31", dim: "HOPE", options: [{ value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q33", dim: "DEF", options: [{ value: 1 }, { value: 1 }, { value: 2 }, { value: 3 }] },
  { id: "q37", dim: "DEF", options: [{ value: 3 }, { value: 2 }, { value: 1 }, { value: 1 }] },
  { id: "q38", dim: "CALC", options: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 1 }] },
  { id: "q17", special: true, options: [{ value: 1, mystic: 0 }, { value: 2, mystic: 1 }, { value: 3, mystic: 2, mysticLock: 1 }] },
  { id: "q18", special: true, options: [{ value: 1, mystic: 0 }, { value: 2, mystic: 1 }, { value: 3, mystic: 2, mysticLock: 1 }] }
];

export const bonusAnswerKey = {
  b1: "9s",
  b2: "4p",
  b3: "6s",
  b4: "7p",
  b5: "8p",
  b6: "7s"
};

export const TYPE_LIBRARY = {
  "SCI-MJ": {
    code: "SCI-MJ",
    cn: "科学麻将家",
    intro: "谁说科学麻将死路一条！",
    desc: "你打麻将像在写可复现实验。别人靠手感，你靠证据；别人说差不多，你会说这差很多。你对结构、节奏和信息的执念，已经到了看别人乱切牌会想替对方写检讨的程度。唯一的问题是，牌桌毕竟不是实验室，所以你偶尔也会被纯运气这种不讲武德的东西气到想关机。"
  },
  "MAGINOT": {
    code: "MAGINOT",
    cn: "马奇诺",
    intro: "你可以不胡，但别想我放铳。",
    desc: "你的人生格言是“先活着，再谈梦想”。别人还在研究这手能不能硬冲，你已经在想怎么优雅地下车。你不一定是牌桌上最炸裂的那位，但通常是最难白给的那位。你既有防守派的警觉，也有佛系派的稳定，像一堵修得很厚的墙，顺手还把自己的心率一起守住了。"
  },
  "YAKUMAN": {
    code: "YAKUMAN",
    cn: "役满梦想家",
    intro: "小胡解决温饱，大胡改变命运。",
    desc: "你不是不能小胡，你只是看不上。只要牌里飘出一点大牌味，你的大脑就会自动开始播放史诗 BGM，仿佛这把不做成传说都对不起自己。你能制造牌桌名场面，也能把自己做进牌桌事故集锦。总结一下就是：梦想很大，命有时也挺硬。"
  },
  "IRONHEAD": {
    code: "IRONHEAD",
    cn: "头铁战神",
    intro: "都到这了，不冲还是人？",
    desc: "你最可怕的技能不是算牌，而是敢冲。别人看见危险会后退半步，你看见危险会顺手热个身。你这种人高光很多，翻车也很多，但至少绝不会无聊。要是牌桌能统计节目效果贡献值，你的名字大概早就在榜一挂着了。"
  },
  "MINDGAME": {
    code: "MINDGAME",
    cn: "心战怪",
    intro: "你以为他在发呆，其实他在等你先死。",
    desc: "你在牌桌上最大的武器不是声音，而是观察。你会看节奏、看表情、看副露时点，安静得像没在打，实际上脑子里已经开完三场会。你不急着出手，但一出手通常都很疼。别人打完才反应过来时，你大概已经在心里给这桌写完赛后总结了。"
  },
  "VIBE": {
    code: "VIBE",
    cn: "牌桌氛围组",
    intro: "牌可以乱打，场子不能冷掉。",
    desc: "有你在，牌桌很难冷场。你负责把沉闷局打成综艺局，顺便兼任吐槽役、现场导演和临时解说。别人跟你打牌，输赢先不说，至少不会无聊。唯一的风险是，热闹有时会把你的专注拐跑，让你在讲段子的时候顺手也把自己送走。"
  },
  "STERN": {
    code: "STERN",
    cn: "统计学圣体",
    intro: "明年去不去 NYU Stern 读统计博士？",
    desc: "你不止看这一手牌，你看的是整局收益。分差、巡目、风险、期望，在别人脑子里是四件事，在你脑子里是一张表。你不是最浪漫的那类牌手，但你通常最有全局观。要是哪天你突然说自己明年去 NYU Stern 读统计博士，大家的第一反应多半不是震惊，而是“原来你终于承认了”。"
  },
  "GAMBLER": {
    code: "GAMBLER",
    cn: "赌狗",
    intro: "再摸一张，包来的。",
    desc: "你对“下一张就来”这件事有接近宗教级别的信仰。你不是不会算，你只是算完以后还是想再续一巡。希望感是你的燃料，也是你的深坑。别人说及时止损，你说先别急，说不定下一张真就把我洗白了。"
  },
  "MIXR": {
    code: "MIXR",
    cn: "缝合怪",
    intro: "你不是一种流派，你是好几种流派轮流上身。",
    desc: "你在不同局面会切不同人格：有时稳得像老僧入定，有时又冲得像刚跟牌桌结仇。系统本来想给你贴一个明确标签，结果一路算到最后，发现你像把好几种牌风缝在了一起，时而科学，时而发疯，主打一个不好定义。说得直白一点，你不是没有风格，你是风格有点太多了。"
  },
  "MYSTIC": {
    code: "MYSTIC",
    cn: "玄学大师",
    intro: "牌效不够，天意来凑。",
    desc: "你已经进入与牌桌磁场沟通的阶段。座位、风位、手感、气场，这些在你这里都不是借口，而是真变量。别人说随机，你说不对，今天东南角这股气就不吉利。科学可能暂时无法解释你，但这并不影响你继续一本正经地相信自己今天真的有感觉。"
  }
};

export const NORMAL_TYPES = [
  { code: "SCI-MJ", vector: [3, 2, 2, 1, 2.1, 2.3, 3, 1.8, 1] },
  { code: "MAGINOT", vector: [1.6, 2.6, 1.2, 1.1, 1.8, 2.4, 2.8, 1, 1.2] },
  { code: "YAKUMAN", vector: [2, 1, 1.9, 3, 1.4, 1, 1.7, 1, 1.6] },
  { code: "IRONHEAD", vector: [1.3, 1, 2.55, 1.25, 1.2, 1, 1.45, 1, 2.35] },
  { code: "MINDGAME", vector: [2, 2, 2, 1, 3, 2, 2.2, 1, 1] },
  { code: "VIBE", vector: [1, 1.4, 2, 1, 1.7, 1, 2, 3, 2] },
  { code: "STERN", vector: [3, 2, 2, 1.8, 2.65, 2.9, 3, 2, 1] },
  { code: "GAMBLER", vector: [1.1, 1.2, 1.8, 1.6, 1.1, 1.1, 1.2, 1.1, 2.8] }
];

function sumToLevel(score, count) {
  const avg = score / count;
  if (avg < 1.75) return "L";
  if (avg < 2.5) return "M";
  return "H";
}

export function computeResultFromAnswers(answerMap = {}) {
  const rawScores = {};
  const levels = {};
  const dimCounts = {};
  const averages = {};
  let mysticLockCount = 0;

  for (const dim of dimensionOrder) {
    rawScores[dim] = 0;
    dimCounts[dim] = 0;
  }

  for (const q of serverQuestions) {
    const pickedIndex = Number(answerMap[q.id]);
    if (!Number.isInteger(pickedIndex) || pickedIndex < 0 || pickedIndex >= q.options.length) continue;
    const selected = q.options[pickedIndex];
    if (selected.mysticLock) mysticLockCount += selected.mysticLock;
    if (!q.special) {
      rawScores[q.dim] += selected.value;
      dimCounts[q.dim] += 1;
    }
  }

  for (const dim of dimensionOrder) {
    averages[dim] = dimCounts[dim] ? rawScores[dim] / dimCounts[dim] : 0;
    levels[dim] = dimCounts[dim] ? sumToLevel(rawScores[dim], dimCounts[dim]) : "L";
  }

  const userVector = dimensionOrder.map((dim) => averages[dim]);
  const ranked = NORMAL_TYPES.map((type) => {
    let distance = 0;
    let exact = 0;
    for (let i = 0; i < type.vector.length; i += 1) {
      const diff = Math.abs(userVector[i] - type.vector[i]);
      distance += diff;
      if (diff <= 0.34) exact += 1;
    }
    const similarity = Math.max(0, Math.round((1 - distance / (type.vector.length * 2)) * 100));
    return { ...TYPE_LIBRARY[type.code], distance, exact, similarity };
  }).sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (b.exact !== a.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const bestNormal = ranked[0];
  const tiedNormal = ranked.filter((item) => Math.abs(item.distance - bestNormal.distance) < 0.0001);

  let finalType = bestNormal;
  let displayTypes = tiedNormal;
  let modeKicker = "你的主类型";
  let badge = `整体匹配度 ${bestNormal.similarity}%`;
  let sub = "系统认为这是你最稳定的牌桌人格。";
  let special = false;

  if (mysticLockCount >= 3) {
    finalType = TYPE_LIBRARY.MYSTIC;
    displayTypes = [TYPE_LIBRARY.MYSTIC];
    modeKicker = "高优先级锁定";
    badge = "玄学锁定成功 · 磁场主导局面";
    sub = "你对运势、手感、风位的信任度明显高于常规玩家。";
    special = true;
  } else if (bestNormal.similarity < 40) {
    finalType = TYPE_LIBRARY.MIXR;
    displayTypes = [TYPE_LIBRARY.MIXR];
    modeKicker = "系统折中判断";
    badge = `最高匹配仅 ${bestNormal.similarity}%`;
    sub = "你的风格比较混合，单一模板难以完整概括。";
  } else if (tiedNormal.length > 1) {
    modeKicker = "并列主类型";
    badge = `${tiedNormal.length} 种人格并列 ${bestNormal.similarity}%`;
    sub = `你同时很像 ${tiedNormal.map((item) => item.cn).join("、")}，系统决定不硬拆。`;
  }

  return {
    rawScores,
    averages,
    levels,
    ranked,
    finalType,
    displayTypes,
    modeKicker,
    badge,
    sub,
    special
  };
}

export function computeBonusResultFromAnswers(answerMap = {}) {
  const total = Object.keys(bonusAnswerKey).length;
  let correct = 0;
  for (const [id, answer] of Object.entries(bonusAnswerKey)) {
    if (answerMap[id] === answer) correct += 1;
  }
  const accuracy = Math.round((correct / total) * 100);
  let key = "low";
  if (correct === total) key = "perfect";
  else if (correct === 0) key = "zero";
  else if (correct >= total - 1) key = "high";
  const meta = {
    perfect: {
      title: "何切之神",
      desc: "你把这几道题做得像提前看过牌山。这个称号不只是会做题，而是做得很像在冒犯出题人。"
    },
    high: {
      title: "牌桌院士",
      desc: "你不是靠蒙混过关的，是真有点牌理底子。就算还没到神仙，也已经到了让人闭嘴的程度。"
    },
    low: {
      title: "慈善赌王",
      desc: "你不是完全不会，只是偶尔会在关键时刻把希望和分数一起送出去。别慌，至少节目效果还在。"
    },
    zero: {
      title: "人形放铳模拟器",
      desc: "这几道题你做得很像在认真扮演牌桌反面教材。先别难过，反正也不是没有提升空间，主要是空间有点大。"
    }
  }[key];
  return { key, correct, total, accuracy, ...meta };
}
