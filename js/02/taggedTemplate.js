
const taggedTemplate = (texts, ...values) =>
    texts.map((text, index) =>
        `${text != ' ' ? `<em>${text}</em>` : ' '}
        ${values[index] ? `<strong>${values[index]}</strong> ` : ''}`)
        .join('');

export default taggedTemplate;