const fs = require('fs');

const commitMsgFilePath = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFilePath, "utf8").trim();

const commitPattern = /^FF-\d+: .+/;

if (!commitPattern.test(commitMsg)) {
    console.error(`❌ Invalid commit message format: ${commitMsg}`);
    console.error("Commit message must follow the format:");
    console.error("FF-{ticketNumber}: {Ticket description}");
    console.error("Examples:");
    console.error("✅ FF-123: Add user authentication");
    console.error("✅ FF-456: Fix navigation bug");
    process.exit(1);
}

console.log("✅ Commit message format is valid!");
process.exit(0);