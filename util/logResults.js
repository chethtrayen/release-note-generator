const logResults = ({dupCounter, pruneCounter, pruned}) => {
    console.log("Generated dup.txt");
    console.log("Generated release-note.txt");
    console.log("-------------------------------");
    console.log(`Duplication count: ${dupCounter}`);
    console.log(`Pruned count: ${pruneCounter}`);
    console.log(pruned);
}

module.exports = logResults;