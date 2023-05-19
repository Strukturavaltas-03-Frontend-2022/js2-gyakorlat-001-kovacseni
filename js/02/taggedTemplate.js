export default tag;

const taggedTemplate = (texts, ...values) =>
    texts.map((text, index) =>
        `${`<em>${text}</em>`}${values[index] ? `<strong>${values[index]}</strong>` : ''}`)
        .join('');