export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Будь ласка, введіть значення",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "'Ви перевищили ліміт",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "Не вірний емейл",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "Пароль має містити одну цифру та один символ",
});