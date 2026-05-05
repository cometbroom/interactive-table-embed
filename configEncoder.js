const cfg = {
    title: "Key Concepts Table",
    subtitle: "Fill in the blank rows below. The top row is a completed example.",
    columns: ['concept', 'definition', 'example', 'notes'],
    labels: {
        concept: 'Concept',
        definition: 'Definition / Explanation',
        example: 'Example',
        notes: 'Your Notes / Reflection'
    },
    example: {
        concept: 'Growth Mindset',
        definition: 'The belief that abilities and intelligence can be developed through dedication, hard work, and learning from mistakes.',
        example: 'A student who says "I can\'t do math" changes to "I can\'t do math yet — I need more practice."',
        notes: 'Carol Dweck\'s research. Very useful for learning new skills.'
    },
    blankRows: 5,
    storageKey: 'exerciseTable_v1'
};
console.log('?config=' + encodeURIComponent(JSON.stringify(cfg)));