const logResults = require("./util/logResults");
const reader = require("./util/reader");
const taskIndexer = require("./util/taskIndexer");
const writer = require("./util/writer");

async function main() {
    const newRelease = await reader("new-release.txt");
    const oldRelease = await reader("old-release.txt");

    const newReleaseIndex = taskIndexer(newRelease);
    const oldReleaseIndex = taskIndexer(oldRelease);

    let releaseNote = "";
    let dup = "";
    let pruned = "";
    let dupCounter = 0;
    let pruneCounter = 0; 

    Object.keys(newReleaseIndex).forEach((i) => {
        const notes = newReleaseIndex[i];

        if(oldReleaseIndex[i]){
            delete newReleaseIndex[i];
            pruned += `${oldReleaseIndex[i].join("\n")}\n`;
            pruneCounter++;
            return;
        }

        if(notes.length > 1){
            dup += `=============${i}===========\n`;
            dup += `${notes.join("\n")}\n`;
            dupCounter++;
            return;
        }

        releaseNote += `${newReleaseIndex[i]}\n`
    })
   
    releaseNote = releaseNote.trim();
    dup = dup.trim();    
    await writer("release-note.txt", releaseNote);
    await writer("release-note-dup.txt", dup);
    logResults({dupCounter, pruneCounter, pruned});
}

main()