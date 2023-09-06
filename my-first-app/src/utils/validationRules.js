export const isRequired = (val) => ({
    hasPassed: !!val,
    message: 'Будь ласка, введіть значення',
});

export const charLimit = (limit) => (val) => ({
    hasPassed: val.length <= limit,
    message: 'Ви перевищили ліміт',
});
