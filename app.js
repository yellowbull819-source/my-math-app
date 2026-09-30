const quizzes = {
  1: {
    topic: "比例・反比例",
    units: [
      { id: "proportion", name: "比例", description: "比例の式・値・グラフ" },
      { id: "inverse", name: "反比例", description: "反比例の式と値" },
    ],
    questions: [
      {
        unit: "proportion",
        topic: "比例",
        prompt: "y は x に比例し、x = 4 のとき y = 12 です。比例定数はいくつですか？",
        choices: ["2", "3", "8", "48"],
        answer: 1,
        explanation: "比例の式は y = ax です。x = 4、y = 12 を代入すると 12 = 4a なので、a = 3 です。",
      },
      {
        unit: "inverse",
        topic: "反比例",
        prompt: "y は x に反比例し、y = 12/x です。x = 3 のとき、y の値はいくつですか？",
        choices: ["3", "4", "9", "36"],
        answer: 1,
        explanation: "式 y = 12/x に x = 3 を代入します。y = 12 ÷ 3 = 4 です。",
      },
      {
        unit: "proportion",
        topic: "比例の式",
        prompt: "y = -2x のとき、x = -3 に対応する y の値はいくつですか？",
        choices: ["-6", "-1", "5", "6"],
        answer: 3,
        explanation: "x = -3 を式に代入すると、y = -2 × (-3) = 6 です。負の数どうしの積は正になります。",
      },
      {
        unit: "proportion",
        topic: "比例のグラフ",
        prompt: "比例のグラフについて、正しい説明はどれですか？",
        choices: [
          "必ず原点を通る直線である",
          "必ず y 軸に平行な直線である",
          "必ず曲線になる",
          "x の値によって比例定数が変わる",
        ],
        answer: 0,
        explanation: "比例の式 y = ax のグラフは直線で、x = 0 のとき y = 0 となるため、必ず原点を通ります。",
      },
      {
        unit: "inverse",
        topic: "反比例の式",
        prompt: "y = -6/x のとき、x = 2 に対応する y の値はいくつですか？",
        choices: ["-12", "-4", "-3", "3"],
        answer: 2,
        explanation: "式 y = -6/x に x = 2 を代入します。y = -6 ÷ 2 = -3 です。",
      },
      {
        unit: "inverse",
        topic: "反比例の関係",
        prompt: "y は x に反比例し、x = 4 のとき y = 3 です。反比例の式はどれですか？",
        choices: ["y = 7/x", "y = 12/x", "y = 3x", "y = 12x"],
        answer: 1,
        explanation: "反比例の式は y = a/x です。x = 4、y = 3 を代入すると 3 = a/4 なので、a = 12。式は y = 12/x です。",
      },
    ],
  },
  2: {
    topic: "一次関数",
    units: [
      { id: "linear-equation", name: "一次関数の式", description: "式の値・傾き・切片" },
      { id: "linear-change", name: "変化の割合とグラフ", description: "変化の割合・直線の交点" },
    ],
    questions: [
      {
        unit: "linear-change",
        topic: "変化の割合",
        prompt: "2点 (1, 3)、(3, 7) を通る直線の変化の割合はいくつですか？",
        choices: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "変化の割合は y の増加量 ÷ x の増加量です。(7 - 3) ÷ (3 - 1) = 4 ÷ 2 = 2 です。",
      },
      {
        unit: "linear-equation",
        topic: "一次関数の式",
        prompt: "y = -3x + 5 のとき、x = 2 に対応する y の値はいくつですか？",
        choices: ["-1", "1", "2", "11"],
        answer: 0,
        explanation: "x = 2 を代入すると、y = -3 × 2 + 5 = -6 + 5 = -1 です。",
      },
      {
        unit: "linear-equation",
        topic: "一次関数の式",
        prompt: "傾きが 2 で、点 (0, -1) を通る直線の式はどれですか？",
        choices: ["y = 2x + 1", "y = -2x - 1", "y = 2x - 1", "y = -x + 2"],
        answer: 2,
        explanation: "一次関数を y = ax + b とすると、傾き a = 2 です。x = 0 のとき y = b = -1 なので、式は y = 2x - 1 です。",
      },
      {
        unit: "linear-change",
        topic: "連立方程式とグラフ",
        prompt: "2直線 y = 2x + 1、y = -x + 7 の交点の座標はどれですか？",
        choices: ["(1, 3)", "(2, 5)", "(3, 7)", "(4, 9)"],
        answer: 1,
        explanation: "交点では y の値が等しいので、2x + 1 = -x + 7。これを解くと x = 2、y = 5 です。交点は (2, 5) です。",
      },
      {
        unit: "linear-change",
        topic: "変化の割合",
        prompt: "y = -2x + 8 で、x が 3 増加するとき、y はいくつ変化しますか？",
        choices: ["6 増加する", "2 増加する", "2 減少する", "6 減少する"],
        answer: 3,
        explanation: "一次関数の変化の割合は傾き -2 です。x が 3 増加すると、y の変化量は -2 × 3 = -6。つまり 6 減少します。",
      },
      {
        unit: "linear-equation",
        topic: "一次関数の式",
        prompt: "傾きが -4 で、切片が 3 の一次関数の式はどれですか？",
        choices: ["y = 4x + 3", "y = -4x + 3", "y = -4x - 3", "y = 3x - 4"],
        answer: 1,
        explanation: "一次関数の式は y = ax + b です。傾き a = -4、切片 b = 3 を当てはめると y = -4x + 3 です。",
      },
    ],
  },
  3: {
    topic: "関数 y = ax²",
    units: [
      { id: "quadratic-basics", name: "式・グラフ・変域", description: "式の値・関数の式・変域" },
      { id: "quadratic-change", name: "変化の割合", description: "区間ごとの変化の割合" },
    ],
    questions: [
      {
        unit: "quadratic-basics",
        topic: "式の値",
        prompt: "y = 2x² のとき、x = 3 に対応する y の値はいくつですか？",
        choices: ["12", "15", "18", "36"],
        answer: 2,
        explanation: "x = 3 を代入すると、y = 2 × 3² = 2 × 9 = 18 です。",
      },
      {
        unit: "quadratic-basics",
        topic: "関数の式",
        prompt: "y = ax² のグラフが点 (2, 12) を通ります。a の値はいくつですか？",
        choices: ["2", "3", "6", "24"],
        answer: 1,
        explanation: "x = 2、y = 12 を y = ax² に代入すると、12 = 4a。したがって a = 3 です。",
      },
      {
        unit: "quadratic-basics",
        topic: "式の値",
        prompt: "y = -½x² のとき、x = -4 に対応する y の値はいくつですか？",
        choices: ["-32", "-8", "8", "32"],
        answer: 1,
        explanation: "x = -4 を代入すると、y = -½ × (-4)² = -½ × 16 = -8 です。x を2乗してから係数をかけます。",
      },
      {
        unit: "quadratic-basics",
        topic: "変域",
        prompt: "y = 3x² で y = 12 となる x の値はどれですか？",
        choices: ["x = 2 のみ", "x = -2 のみ", "x = ±2", "x = ±4"],
        answer: 2,
        explanation: "12 = 3x² より x² = 4。2乗して 4 になる数は 2 と -2 なので、x = ±2 です。",
      },
      {
        unit: "quadratic-change",
        topic: "変化の割合",
        prompt: "y = x² で、x が 1 から 3 まで増加するときの変化の割合はいくつですか？",
        choices: ["2", "3", "4", "8"],
        answer: 2,
        explanation: "変化の割合は y の増加量 ÷ x の増加量です。((3²) - (1²)) ÷ (3 - 1) = (9 - 1) ÷ 2 = 4 です。",
      },
      {
        unit: "quadratic-change",
        topic: "変化の割合",
        prompt: "y = 2x² で、x が 1 から 2 まで増加するときの変化の割合はいくつですか？",
        choices: ["2", "4", "6", "8"],
        answer: 2,
        explanation: "y の増加量は 2 × 2² - 2 × 1² = 8 - 2 = 6、x の増加量は 1 です。変化の割合は 6 ÷ 1 = 6 です。",
      },
      {
        unit: "quadratic-change",
        topic: "変化の割合",
        prompt: "y = x² で、x が -2 から 1 まで増加するときの変化の割合はいくつですか？",
        choices: ["-1", "1", "3", "5"],
        answer: 1,
        explanation: "y の増加量は 1² - (-2)² = 1 - 4 = -3、x の増加量は 1 - (-2) = 3 です。変化の割合は -3 ÷ 3 = -1 です。",
      },
    ],
  },
};

const questionsPerQuiz = 5;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function questionInt(min, max) {
  if (activeDifficulty === "easy") {
    const easyMin = Math.max(min, 1);
    const easyMax = Math.min(max, 5);
    if (easyMin <= easyMax) return randomInt(easyMin, easyMax);
    return randomInt(min, max);
  }

  if (activeDifficulty === "challenge") {
    if (min < 0 && max > 0) {
      const expandedMin = Math.max(-15, min - 5);
      const expandedMax = Math.min(15, max + 5);
      return randomInt(expandedMin, expandedMax);
    }
    if (min >= 0) return randomInt(min, Math.max(min, Math.min(15, max + 5)));
    if (max <= 0) return randomInt(Math.min(max, Math.max(-15, min - 5)), max);
  }

  return randomInt(min, max);
}

function pickNonZero(min, max) {
  let value = questionInt(min, max);
  while (value === 0) value = questionInt(min, max);
  return value;
}

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = randomInt(0, index);
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function createQuestion(topic, prompt, correct, distractors, explanation) {
  const values = [...new Set([correct, ...distractors].map(String))];
  let offset = 1;
  while (values.length < 4) {
    const candidate = String(Number(correct) + offset);
    if (!values.includes(candidate)) values.push(candidate);
    offset += 1;
  }
  const choices = shuffled(values.slice(0, 4));
  return {
    topic,
    prompt,
    choices,
    answer: choices.indexOf(String(correct)),
    explanation,
  };
}

function createFormattedQuestion(topic, prompt, correct, distractors, explanation) {
  const values = [...new Set([correct, ...distractors])];
  const linearMatch = correct.match(/^y = (-?\d+)x(?: \+ (\d+)| - (\d+))?$/);
  const pointMatch = correct.match(/^\((-?\d+), (-?\d+)\)$/);
  const changeMatch = correct.match(/^(\d+) (増加|減少)する$/);

  if (linearMatch) {
    const slope = Number(linearMatch[1]);
    const intercept = Number(linearMatch[2] ?? 0) - Number(linearMatch[3] ?? 0);
    values.push(
      linearExpression(slope + 1, intercept),
      linearExpression(slope - 1, intercept),
      linearExpression(slope, intercept + 1),
      linearExpression(slope, intercept - 1),
    );
  } else if (pointMatch) {
    const x = Number(pointMatch[1]);
    const y = Number(pointMatch[2]);
    values.push(`(${x + 1}, ${y})`, `(${x - 1}, ${y})`, `(${x}, ${y + 1})`, `(${x}, ${y - 1})`);
  } else if (changeMatch) {
    const amount = Number(changeMatch[1]);
    const direction = changeMatch[2];
    values.push(
      `${amount + 1} ${direction}する`,
      `${Math.max(1, amount - 1)} ${direction}する`,
      `${amount} ${direction === "増加" ? "減少" : "増加"}する`,
    );
  }

  const choices = shuffled([...new Set(values)].slice(0, 4));
  return { topic, prompt, choices, answer: choices.indexOf(correct), explanation };
}

function linearExpression(slope, intercept) {
  const constant = intercept === 0 ? "" : intercept > 0 ? ` + ${intercept}` : ` - ${Math.abs(intercept)}`;
  return `y = ${slope}x${constant}`;
}

const questionGenerators = {
  proportion: [
    () => {
      const coefficient = pickNonZero(-6, 6);
      const x = pickNonZero(-8, 8);
      const y = coefficient * x;
      return createQuestion(
        "比例の式",
        `y は x に比例し、比例定数は ${coefficient} です。x = ${x} のとき、y の値はいくつですか？`,
        y,
        [coefficient + x, y + x, y - x],
        `比例の式は y = ax です。a = ${coefficient}、x = ${x} を代入すると、y = ${coefficient} × (${x}) = ${y} です。`,
      );
    },
    () => {
      const coefficient = pickNonZero(-8, 8);
      const x = pickNonZero(-6, 6);
      const y = coefficient * x;
      return createQuestion(
        "比例定数",
        `y は x に比例し、x = ${x} のとき y = ${y} です。比例定数はいくつですか？`,
        coefficient,
        [coefficient + 1, coefficient - 1, -coefficient],
        `比例の式 y = ax に x = ${x}、y = ${y} を代入します。a = y ÷ x = ${y} ÷ (${x}) = ${coefficient} です。`,
      );
    },
    () => {
      const coefficient = pickNonZero(-5, 5);
      const x1 = pickNonZero(-6, 6);
      const x2 = pickNonZero(-6, 6);
      const y1 = coefficient * x1;
      const y2 = coefficient * x2;
      return createQuestion(
        "比例の関係",
        `y は x に比例します。x = ${x1} のとき y = ${y1} です。x = ${x2} のとき y はいくつですか？`,
        y2,
        [y2 + coefficient, y2 - coefficient, coefficient * (x2 + 1)],
        `比例定数は ${y1} ÷ (${x1}) = ${coefficient} です。したがって x = ${x2} のとき y = ${coefficient} × (${x2}) = ${y2} です。`,
      );
    },
  ],
  inverse: [
    () => {
      const x = pickNonZero(-8, 8);
      const y = pickNonZero(-8, 8);
      const constant = x * y;
      const divisors = Array.from({ length: 16 }, (_, index) => index - 8).filter(
        (value) =>
          value !== 0 &&
          constant % value === 0 &&
          (activeDifficulty !== "easy" || value > 0),
      );
      const targetX = divisors[randomInt(0, divisors.length - 1)];
      const answer = constant / targetX;
      return createQuestion(
        "反比例の式",
        `y は x に反比例し、x = ${x} のとき y = ${y} です。x = ${targetX} のとき、y の値はいくつですか？`,
        answer,
        [answer + 1, answer - 1, -answer],
        `反比例では xy = a です。比例定数は ${x} × ${y} = ${constant}。よって y = ${constant} ÷ (${targetX}) = ${answer} です。`,
      );
    },
    () => {
      const x = pickNonZero(-8, 8);
      const y = pickNonZero(-8, 8);
      const constant = x * y;
      const correct = `y = ${constant}/x`;
      return createFormattedQuestion(
        "反比例の式",
        `y は x に反比例し、x = ${x} のとき y = ${y} です。反比例の式はどれですか？`,
        correct,
        [`y = ${constant + 1}/x`, `y = ${constant - 1}/x`, `y = ${constant}x`],
        `反比例の式は y = a/x です。比例定数 a = xy = ${x} × ${y} = ${constant} なので、式は ${correct} です。`,
      );
    },
    () => {
      const answer = pickNonZero(-8, 8);
      const y = pickNonZero(-5, 5);
      const constant = answer * y;
      return createQuestion(
        "反比例の関係",
        `y = ${constant}/x です。y = ${y} のとき、x の値はいくつですか？`,
        answer,
        [answer + 1, answer - 1, -answer],
        `y = ${constant}/x に y = ${y} を代入すると、${y}x = ${constant}。したがって x = ${constant} ÷ (${y}) = ${answer} です。`,
      );
    },
  ],
  "linear-equation": [
    () => {
      const slope = pickNonZero(-6, 6);
      const intercept = questionInt(-9, 9);
      const x = questionInt(-6, 6);
      const y = slope * x + intercept;
      return createQuestion(
        "一次関数の式",
        `${linearExpression(slope, intercept)} のとき、x = ${x} に対応する y の値はいくつですか？`,
        y,
        [slope * x - intercept, slope + x + intercept, y + slope],
        `x = ${x} を式に代入します。y = ${slope} × (${x})${intercept < 0 ? ` - ${Math.abs(intercept)}` : ` + ${intercept}`} = ${y} です。`,
      );
    },
    () => {
      const slope = pickNonZero(-7, 7);
      const intercept = pickNonZero(-8, 8);
      const correct = linearExpression(slope, intercept);
      return createFormattedQuestion(
        "一次関数の式",
        `傾きが ${slope} で、切片が ${intercept} の一次関数の式はどれですか？`,
        correct,
        [
          linearExpression(-slope, intercept),
          linearExpression(slope, -intercept),
          linearExpression(intercept, slope),
        ],
        `一次関数の式 y = ax + b で、傾き a = ${slope}、切片 b = ${intercept} です。したがって ${correct} です。`,
      );
    },
    () => {
      const slope = pickNonZero(-6, 6);
      const x = pickNonZero(-6, 6);
      const y = questionInt(-10, 10);
      const intercept = y - slope * x;
      const correct = linearExpression(slope, intercept);
      return createFormattedQuestion(
        "一次関数の式",
        `傾きが ${slope} で、点 (${x}, ${y}) を通る一次関数の式はどれですか？`,
        correct,
        [
          linearExpression(slope, y),
          linearExpression(-slope, intercept),
          linearExpression(slope, intercept + 1),
        ],
        `式を y = ${slope}x + b とおきます。点 (${x}, ${y}) を代入すると b = ${y} - (${slope} × ${x}) = ${intercept}。よって ${correct} です。`,
      );
    },
  ],
  "linear-change": [
    () => {
      const x1 = questionInt(-5, 5);
      const differenceX = questionInt(1, 5);
      const slope = pickNonZero(-6, 6);
      const y1 = questionInt(-8, 8);
      const x2 = x1 + differenceX;
      const y2 = y1 + slope * differenceX;
      return createQuestion(
        "変化の割合",
        `2点 (${x1}, ${y1})、(${x2}, ${y2}) を通る直線の変化の割合はいくつですか？`,
        slope,
        [slope + 1, slope - 1, -slope],
        `変化の割合は y の増加量 ÷ x の増加量です。(${y2} - (${y1})) ÷ (${x2} - (${x1})) = ${slope} です。`,
      );
    },
    () => {
      const slope = pickNonZero(-7, 7);
      const differenceX = questionInt(2, 6);
      const change = slope * differenceX;
      const describe = (value) => `${Math.abs(value)} ${value > 0 ? "増加" : "減少"}する`;
      return createFormattedQuestion(
        "変化の割合",
        `一次関数の変化の割合が ${slope} です。x が ${differenceX} 増加するとき、y はどう変化しますか？`,
        describe(change),
        [describe(change + differenceX), describe(change - differenceX), describe(-change)],
        `y の変化量は「変化の割合 × x の増加量」です。${slope} × ${differenceX} = ${change} なので、y は${describe(change)}。`,
      );
    },
    () => {
      const x = questionInt(-4, 4);
      const y = questionInt(-6, 6);
      const slope1 = pickNonZero(-5, 5);
      let slope2 = pickNonZero(-5, 5);
      while (slope2 === slope1) slope2 = pickNonZero(-5, 5);
      const intercept1 = y - slope1 * x;
      const intercept2 = y - slope2 * x;
      const correct = `(${x}, ${y})`;
      return createFormattedQuestion(
        "直線の交点",
        `2直線 ${linearExpression(slope1, intercept1)}、${linearExpression(slope2, intercept2)} の交点はどれですか？`,
        correct,
        [`(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${y}, ${x})`],
        `交点では2つの式の y が等しくなります。${slope1}x + (${intercept1}) = ${slope2}x + (${intercept2}) を解くと x = ${x}、y = ${y}。交点は ${correct} です。`,
      );
    },
  ],
  "quadratic-basics": [
    () => {
      const coefficient = pickNonZero(-5, 5);
      const x = pickNonZero(-7, 7);
      const y = coefficient * x * x;
      return createQuestion(
        "式の値",
        `y = ${coefficient}x² のとき、x = ${x} に対応する y の値はいくつですか？`,
        y,
        [coefficient * x, y + coefficient, -y],
        `x = ${x} を代入すると、y = ${coefficient} × (${x})² = ${coefficient} × ${x * x} = ${y} です。`,
      );
    },
    () => {
      const x = pickNonZero(-6, 6);
      const coefficient = pickNonZero(-6, 6);
      const y = coefficient * x * x;
      return createQuestion(
        "関数の式",
        `y = ax² のグラフが点 (${x}, ${y}) を通ります。a の値はいくつですか？`,
        coefficient,
        [coefficient + 1, coefficient - 1, coefficient * x],
        `点 (${x}, ${y}) を y = ax² に代入すると ${y} = a × ${x * x}。よって a = ${y} ÷ ${x * x} = ${coefficient} です。`,
      );
    },
    () => {
      const root = questionInt(1, 7);
      const coefficient = questionInt(1, 5);
      const y = coefficient * root * root;
      const correct = `x = ±${root}`;
      return createFormattedQuestion(
        "関数の式",
        `y = ${coefficient}x² で y = ${y} となる x の値はどれですか？`,
        correct,
        [`x = ${root} のみ`, `x = -${root} のみ`, `x = ±${root + 1}`],
        `${y} = ${coefficient}x² より x² = ${root * root}。したがって ${correct} です。`,
      );
    },
  ],
  "quadratic-change": [
    () => {
      const coefficient = pickNonZero(-5, 5);
      const x1 = questionInt(-6, 5);
      const x2 = questionInt(x1 + 1, x1 + 6);
      const answer = coefficient * (x1 + x2);
      return createQuestion(
        "変化の割合",
        `y = ${coefficient}x² で、x が ${x1} から ${x2} まで増加するときの変化の割合はいくつですか？`,
        answer,
        [coefficient * (x2 - x1), answer + coefficient, -answer],
        `変化の割合は (${coefficient} × ${x2}² - ${coefficient} × ${x1}²) ÷ (${x2} - (${x1})) です。平方差を使うと ${coefficient}(${x2} + (${x1})) = ${answer} です。`,
      );
    },
    () => {
      const coefficient = pickNonZero(-4, 4);
      const x1 = questionInt(-5, 4);
      const difference = questionInt(1, 5);
      const x2 = x1 + difference;
      const answer = coefficient * (x1 + x2);
      return createQuestion(
        "変化の割合",
        `y = ${coefficient}x² で、x が ${x1} から ${x2} まで増加するときの変化の割合はいくつですか？`,
        answer,
        [coefficient * difference, answer - difference, -answer],
        `変化の割合は (${coefficient} × ${x2}² - ${coefficient} × ${x1}²) ÷ (${x2} - (${x1}))。計算すると ${coefficient}(${x2} + (${x1})) = ${answer} です。`,
      );
    },
    () => {
      const coefficient = pickNonZero(-5, 5);
      const start = questionInt(-6, 6);
      const width = questionInt(1, 5);
      const end = start + width;
      const answer = coefficient * (start + end);
      return createQuestion(
        "変化の割合",
        `y = ${coefficient}x² で、x が ${start} から ${end} まで増加するときの変化の割合はいくつですか？`,
        answer,
        [coefficient * width, answer + 1, -answer],
        `変化の割合は (${coefficient} × ${end}² - ${coefficient} × ${start}²) ÷ (${end} - (${start})) です。平方差より ${coefficient}(${end} + (${start})) = ${answer} です。`,
      );
    },
  ],
};

const gradeList = document.querySelector("#grade-list");
const gradeSection = document.querySelector(".grade-section");
const unitPicker = document.querySelector("#unit-picker");
const difficultyPicker = document.querySelector("#difficulty-picker");
const quizPanel = document.querySelector("#quiz");
const dashboard = document.querySelector("#learning-dashboard");
const dashboardContent = document.querySelector("#dashboard-content");
const storageNotice = document.querySelector("#storage-notice");
const learningStorageKey = "math-functions-learning-history-v1";
let activeGrade = null;
let activeUnit = null;
let activeDifficulty = null;
let activeQuestions = [];
let questionIndex = 0;
let score = 0;
let selectedAnswer = null;
let explanationVisible = false;
let storageMessage = "";

function emptyLearningData() {
  return { days: {} };
}

function loadLearningData() {
  try {
    const stored = localStorage.getItem(learningStorageKey);
    if (!stored) return emptyLearningData();

    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed.days !== "object" || Array.isArray(parsed.days)) {
      throw new Error("Invalid learning history format");
    }
    const validCount = (value) => Number.isInteger(value) && value >= 0;
    for (const day of Object.values(parsed.days)) {
      if (
        !day ||
        !validCount(day.answered) ||
        !validCount(day.correct) ||
        day.correct > day.answered ||
        !day.units ||
        typeof day.units !== "object" ||
        Array.isArray(day.units)
      ) {
        throw new Error("Invalid daily learning history");
      }
      for (const stats of Object.values(day.units)) {
        if (
          !stats ||
          !validCount(stats.answered) ||
          !validCount(stats.correct) ||
          stats.correct > stats.answered
        ) {
          throw new Error("Invalid unit learning history");
        }
      }
    }

    return parsed;
  } catch {
    storageMessage = "学習記録を読み込めませんでした。ブラウザーの保存設定をご確認ください。";
    return emptyLearningData();
  }
}

let learningData = loadLearningData();

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function saveLearningData() {
  try {
    localStorage.setItem(learningStorageKey, JSON.stringify(learningData));
    storageMessage = "";
  } catch {
    storageMessage = "学習記録を保存できませんでした。ブラウザーの保存領域をご確認ください。";
  }
}

function recordAnswer(isCorrect) {
  const date = localDateKey();
  const day = learningData.days[date] ?? { answered: 0, correct: 0, units: {} };
  const unit = day.units[activeUnit] ?? { answered: 0, correct: 0 };

  day.answered += 1;
  day.correct += Number(isCorrect);
  unit.answered += 1;
  unit.correct += Number(isCorrect);
  day.units[activeUnit] = unit;
  learningData.days[date] = day;
  saveLearningData();
  renderDashboard();
}

function getLearningTotals() {
  return Object.values(learningData.days).reduce(
    (totals, day) => ({
      answered: totals.answered + (Number(day.answered) || 0),
      correct: totals.correct + (Number(day.correct) || 0),
    }),
    { answered: 0, correct: 0 },
  );
}

function getStudyStreak() {
  const studiedDates = new Set(
    Object.entries(learningData.days)
      .filter(([, day]) => day.answered > 0)
      .map(([date]) => date),
  );
  const today = new Date();
  if (!studiedDates.has(localDateKey(today))) today.setDate(today.getDate() - 1);

  let streak = 0;
  while (studiedDates.has(localDateKey(today))) {
    streak += 1;
    today.setDate(today.getDate() - 1);
  }
  return streak;
}

function getEncouragement(answered, accuracy, streak) {
  if (answered === 0) {
    return {
      title: "最初の1問が、学びの一歩。",
      message: "気になる単元を選んでみましょう。取り組んだ分だけ、ここに足あとが増えていきます。",
    };
  }
  if (streak >= 3) {
    return {
      title: `${streak}日連続の学習、すばらしい！`,
      message: "続ける力も大切な力。今日の一歩も、きっと明日の自信につながります。",
    };
  }
  if (accuracy >= 80) {
    return {
      title: "着実に身についています！",
      message: "正解が増えてきましたね。次は少し難しい問題にも挑戦してみましょう。",
    };
  }
  if (accuracy < 50) {
    return {
      title: "挑戦したことが、もう前進です。",
      message: "間違いは大切なヒント。解説を見ながら、やさしい問題で一つずつ確かめていきましょう。",
    };
  }
  return {
    title: "一問ずつ、力がついています。",
    message: "続けて取り組むことで、関数の見方が少しずつ身についていきます。",
  };
}

function formatShortDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function renderDashboard() {
  const totals = getLearningTotals();
  const accuracy = totals.answered
    ? Math.round((totals.correct / totals.answered) * 100)
    : 0;
  const streak = getStudyStreak();
  const encouragement = getEncouragement(totals.answered, accuracy, streak);
  const today = new Date();
  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const key = localDateKey(date);
    const day = learningData.days[key] ?? { answered: 0, correct: 0 };
    return {
      date,
      answered: Number(day.answered) || 0,
      correct: Number(day.correct) || 0,
    };
  });
  const scale = Math.max(5, ...week.map((day) => day.answered));
  const unitStats = Object.entries(quizzes).flatMap(([grade, quiz]) =>
    quiz.units.map((unit) => {
      const totalsForUnit = Object.values(learningData.days).reduce(
        (total, day) => {
          const stats = day.units?.[unit.id];
          return {
            answered: total.answered + (Number(stats?.answered) || 0),
            correct: total.correct + (Number(stats?.correct) || 0),
          };
        },
        { answered: 0, correct: 0 },
      );
      return { grade, unit, ...totalsForUnit };
    }),
  );

  dashboardContent.innerHTML = `
    <div class="stat-grid">
      <article class="stat-card">
        <span class="stat-label">解いた問題</span>
        <strong class="stat-value">${totals.answered}<span>問</span></strong>
        <span class="stat-caption">今日までの累計</span>
      </article>
      <article class="stat-card">
        <span class="stat-label">正解率</span>
        <strong class="stat-value">${accuracy}<span>%</span></strong>
        <span class="stat-caption">${totals.correct}問正解 / ${totals.answered}問</span>
      </article>
      <article class="stat-card">
        <span class="stat-label">学習日数</span>
        <strong class="stat-value">${streak}<span>日</span></strong>
        <span class="stat-caption">現在の連続記録</span>
      </article>
    </div>
    <div class="dashboard-grid">
      <article class="dashboard-card activity-card">
        <div class="dashboard-card-heading">
          <div>
            <p class="eyebrow">LAST 7 DAYS</p>
            <h3>今週の学習</h3>
          </div>
          <span class="chart-legend"><i class="legend-correct"></i>正解 <i class="legend-incorrect"></i>もう一歩</span>
        </div>
        <div class="activity-chart" role="img" aria-label="過去7日間の学習問題数。棒の濃い部分が正解数、薄い部分が不正解数です。">
          ${week
            .map((day) => {
              const incorrect = Math.max(0, day.answered - day.correct);
              const correctHeight = day.answered ? (day.correct / scale) * 100 : 0;
              const incorrectHeight = day.answered ? (incorrect / scale) * 100 : 0;
              const dayName = day.date.toLocaleDateString("ja-JP", { weekday: "short" });
              return `
                <div class="activity-day" aria-label="${formatShortDate(day.date)} ${day.answered}問、正解${day.correct}問">
                  <span class="activity-count">${day.answered || ""}</span>
                  <div class="activity-bar-track">
                    <span class="activity-bar-incorrect" style="height:${incorrectHeight}%"></span>
                    <span class="activity-bar-correct" style="height:${correctHeight}%"></span>
                  </div>
                  <span class="activity-day-label">${dayName}</span>
                </div>
              `;
            })
            .join("")}
        </div>
        <p class="chart-caption">棒が高いほど、たくさん取り組んだ日です。</p>
      </article>
      <article class="dashboard-card encouragement-card">
        <span class="encouragement-icon" aria-hidden="true">✦</span>
        <p class="eyebrow">A LITTLE ENCOURAGEMENT</p>
        <h3>${encouragement.title}</h3>
        <p>${encouragement.message}</p>
      </article>
    </div>
    <article class="dashboard-card unit-progress-card">
      <div class="dashboard-card-heading">
        <div>
          <p class="eyebrow">YOUR PRACTICE</p>
          <h3>単元ごとの足あと</h3>
        </div>
        <span class="section-caption">どの単元も、練習した分だけ記録されます</span>
      </div>
      <div class="unit-progress-list">
        ${unitStats
          .map(({ grade, unit, answered, correct }) => {
            const rate = answered ? Math.round((correct / answered) * 100) : 0;
            return `
              <div class="unit-progress-row">
                <div class="unit-progress-name">
                  <span>中${grade} · ${unit.name}</span>
                  <strong>${answered ? `${answered}問 · 正解率 ${rate}%` : "これから挑戦"}</strong>
                </div>
                <div class="unit-progress-track" role="progressbar" aria-label="中学${grade} ${unit.name}の正解率" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${rate}">
                  <span style="width:${rate}%"></span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </article>
  `;

  storageNotice.textContent = storageMessage;
  storageNotice.hidden = !storageMessage;
}

const gradeNames = {
  1: "中学1年",
  2: "中学2年",
  3: "中学3年",
};

const difficultyOptions = [
  {
    id: "easy",
    name: "やさしい",
    description: "小さな正の数で、基本の考え方を確認",
    badge: "まずはここから",
  },
  {
    id: "standard",
    name: "ふつう",
    description: "正負の数を使った標準的な問題",
    badge: "基本を定着",
  },
  {
    id: "challenge",
    name: "チャレンジ",
    description: "数の範囲を広げて、応用力を試す",
    badge: "力だめし",
  },
];

function getDifficultyName(id = activeDifficulty) {
  return difficultyOptions.find((difficulty) => difficulty.id === id)?.name ?? "";
}

function renderGradeCards() {
  gradeList.innerHTML = Object.entries(quizzes)
    .map(
      ([grade, quiz]) => `
        <button class="grade-card" type="button" data-grade="${grade}">
          <span class="grade-card-copy">
            <span class="grade-number">中学${grade}年</span>
            <span class="grade-topic">${quiz.topic}</span>
          </span>
          <span class="card-arrow" aria-hidden="true">›</span>
        </button>
      `,
    )
    .join("");

  gradeList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-grade]");
    if (card) selectGrade(Number(card.dataset.grade));
  });
}

function selectGrade(grade) {
  activeGrade = grade;
  dashboard.hidden = true;
  gradeSection.hidden = true;
  unitPicker.hidden = false;
  quizPanel.hidden = true;
  renderUnitPicker();
  unitPicker.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderUnitPicker() {
  const quiz = quizzes[activeGrade];
  unitPicker.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">CHOOSE A UNIT</p>
        <h2 id="unit-heading">${gradeNames[activeGrade]} · 単元を選ぶ</h2>
      </div>
      <button class="text-button" type="button" data-action="grades">学年選択に戻る</button>
    </div>
    <div class="unit-list">
      ${quiz.units
        .map((unit) => {
          return `
            <button class="unit-card" type="button" data-unit="${unit.id}">
              <span class="unit-card-copy">
                <span class="unit-name">${unit.name}</span>
                <span class="unit-description">${unit.description}</span>
                <span class="unit-count">難易度を選んで${questionsPerQuiz}問ずつ練習</span>
              </span>
              <span class="card-arrow" aria-hidden="true">›</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

unitPicker.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.unit) {
    activeUnit = button.dataset.unit;
    unitPicker.hidden = true;
    difficultyPicker.hidden = false;
    renderDifficultyPicker();
    difficultyPicker.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (button.dataset.action === "grades") {
    unitPicker.hidden = true;
    dashboard.hidden = false;
    gradeSection.hidden = false;
    renderDashboard();
    gradeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

function renderDifficultyPicker() {
  const unit = quizzes[activeGrade].units.find((item) => item.id === activeUnit);
  difficultyPicker.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">CHOOSE YOUR LEVEL</p>
        <h2 id="difficulty-heading">${unit.name} · 難易度を選ぶ</h2>
      </div>
      <button class="text-button" type="button" data-action="units">単元選択に戻る</button>
    </div>
    <div class="difficulty-list">
      ${difficultyOptions
        .map(
          (difficulty) => `
            <button class="difficulty-card difficulty-${difficulty.id}" type="button" data-difficulty="${difficulty.id}">
              <span class="difficulty-card-copy">
                <span class="difficulty-badge">${difficulty.badge}</span>
                <span class="difficulty-name">${difficulty.name}</span>
                <span class="difficulty-description">${difficulty.description}</span>
              </span>
              <span class="card-arrow" aria-hidden="true">›</span>
            </button>
          `,
        )
        .join("")}
    </div>
    <p class="difficulty-note">何度でも挑戦できます。もう一度解くと、新しい問題が出題されます。</p>
  `;
}

difficultyPicker.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.difficulty) {
    startQuiz(button.dataset.difficulty);
  } else if (button.dataset.action === "units") {
    difficultyPicker.hidden = true;
    unitPicker.hidden = false;
    renderUnitPicker();
    unitPicker.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

function getActiveQuestions() {
  return activeQuestions;
}

function generateQuestionSet(grade, unitId) {
  const generators = questionGenerators[unitId];
  const questions = [];
  const prompts = new Set();
  let attempts = 0;

  while (questions.length < questionsPerQuiz && attempts < 500) {
    attempts += 1;
    const question = generators[randomInt(0, generators.length - 1)]();
    if (
      question.choices.length !== 4 ||
      new Set(question.choices).size !== question.choices.length ||
      prompts.has(question.prompt)
    ) {
      continue;
    }
    questions.push(question);
    prompts.add(question.prompt);
  }

  if (questions.length < questionsPerQuiz) {
    const fallback = shuffled(
      quizzes[grade].questions.filter((question) => question.unit === unitId),
    );
    for (const question of fallback) {
      if (questions.length === questionsPerQuiz) break;
      if (!prompts.has(question.prompt)) {
        questions.push(question);
        prompts.add(question.prompt);
      }
    }
  }

  return shuffled(questions);
}

function startQuiz(difficultyId) {
  activeDifficulty = difficultyId;
  activeQuestions = generateQuestionSet(activeGrade, activeUnit);
  questionIndex = 0;
  score = 0;
  selectedAnswer = null;
  explanationVisible = false;
  difficultyPicker.hidden = true;
  unitPicker.hidden = true;
  quizPanel.hidden = false;
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const quiz = quizzes[activeGrade];
  const questions = getActiveQuestions();
  const question = questions[questionIndex];
  const isAnswered = selectedAnswer !== null;
  const progress = ((questionIndex + 1) / questions.length) * 100;
  const unit = quiz.units.find((item) => item.id === activeUnit);

  quizPanel.innerHTML = `
    <div class="quiz-topline">
      <p class="quiz-grade">${gradeNames[activeGrade]} · ${unit.name} · ${getDifficultyName()}</p>
      <button class="text-button" type="button" data-action="difficulty">難易度選択に戻る</button>
    </div>
    <div class="progress-copy">
      <span>問題 ${questionIndex + 1} / ${questions.length}</span>
      <span>正解 ${score} 問</span>
    </div>
    <div class="progress-track" role="progressbar" aria-label="問題の進み具合" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${questionIndex + 1}">
      <div class="progress-bar" style="width: ${progress}%"></div>
    </div>
    <p class="question-topic">${question.topic}</p>
    <h3 class="question-text">${question.prompt}</h3>
    <div class="choice-list" role="group" aria-label="答えを選択">
      ${question.choices
        .map((choice, index) => {
          let stateClass = "";
          if (isAnswered && index === question.answer) stateClass = " is-correct";
          else if (isAnswered && index === selectedAnswer) stateClass = " is-incorrect";
          return `
            <button
              class="choice-button${stateClass}"
              type="button"
              data-answer="${index}"
              ${isAnswered ? "disabled" : ""}
              ${isAnswered && index === question.answer ? 'aria-label="正解: ' + choice + '"' : ""}
            >
              <span class="choice-letter">${String.fromCharCode(65 + index)}</span>
              <span class="choice-label">${choice}</span>
            </button>
          `;
        })
        .join("")}
    </div>
    ${
      isAnswered
        ? `
          <div class="answer-feedback ${selectedAnswer === question.answer ? "is-correct" : "is-incorrect"}" role="status">
            ${selectedAnswer === question.answer ? "正解です。" : "おしい！正解を確認してみましょう。"}
          </div>
          <div class="explanation-wrap">
            <button class="explanation-toggle" type="button" data-action="explanation" aria-expanded="${explanationVisible}">
              ${explanationVisible ? "解説を閉じる" : "解説を見る"} <span aria-hidden="true">${explanationVisible ? "−" : "＋"}</span>
            </button>
            ${
              explanationVisible
                ? `<div class="explanation-content">${question.explanation}</div>`
                : ""
            }
          </div>
        `
        : ""
    }
    <div class="quiz-footer">
      <p class="score-copy">${isAnswered ? `ここまで ${score} / ${questionIndex + 1} 問正解` : "答えを選ぶと自動で採点します"}</p>
      <button class="primary-button" type="button" data-action="next" ${isAnswered ? "" : "disabled"}>
        ${questionIndex === questions.length - 1 ? "結果を見る" : "次の問題へ"}
      </button>
    </div>
  `;
}

function renderResult() {
  const total = getActiveQuestions().length;
  const unit = quizzes[activeGrade].units.find((item) => item.id === activeUnit);
  const message =
    score === total
      ? "すばらしい！全問正解です。"
      : score >= Math.ceil(total * 0.6)
        ? "いい調子です。解説も見直してみましょう。"
        : "解説を読みながら、もう一度確認してみましょう。";

  quizPanel.innerHTML = `
    <div class="result-panel">
      <p class="result-kicker">QUIZ COMPLETE</p>
      <h3>${gradeNames[activeGrade]} · ${unit.name} · ${getDifficultyName()}</h3>
      <p class="result-score">${score}<span> / ${total} 問正解</span></p>
      <p class="result-detail">${message}</p>
      <div class="result-actions">
        <button class="secondary-button" type="button" data-action="retry">もう一度挑戦</button>
        <button class="primary-button" type="button" data-action="units">単元選択に戻る</button>
      </div>
    </div>
  `;
}

quizPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.answer !== undefined && selectedAnswer === null) {
    selectedAnswer = Number(button.dataset.answer);
    const isCorrect = selectedAnswer === getActiveQuestions()[questionIndex].answer;
    if (isCorrect) {
      score += 1;
    }
    recordAnswer(isCorrect);
    renderQuestion();
    return;
  }

  switch (button.dataset.action) {
    case "explanation":
      explanationVisible = !explanationVisible;
      renderQuestion();
      break;
    case "next":
      if (selectedAnswer === null) return;
      if (questionIndex === getActiveQuestions().length - 1) {
        renderResult();
      } else {
        questionIndex += 1;
        selectedAnswer = null;
        explanationVisible = false;
        renderQuestion();
      }
      break;
    case "retry":
      startQuiz(activeDifficulty);
      break;
    case "units":
      quizPanel.hidden = true;
      difficultyPicker.hidden = true;
      unitPicker.hidden = false;
      renderUnitPicker();
      unitPicker.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "difficulty":
      quizPanel.hidden = true;
      difficultyPicker.hidden = false;
      renderDifficultyPicker();
      difficultyPicker.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
  }
});

renderGradeCards();
renderDashboard();
