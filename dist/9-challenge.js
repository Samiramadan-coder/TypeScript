"use strict";
let searchHistory = [
    "how to make money online",
    "benifits of eating garlic",
    "html css tutorial",
    "calisthenics"
];
for (let searchItem of searchHistory) {
    const item = searchItem.split(" ");
    for (let entry of item) {
        if (entry === 'html' || entry === 'css') {
            console.log('.......');
        }
    }
}
searchHistory.map(entry => {
    if (entry.includes("html") || entry.includes("css")) {
        console.log('......');
    }
});
