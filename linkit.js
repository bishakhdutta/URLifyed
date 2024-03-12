function extractUrls(text) {
    const urlPattern = /\b(?:https?:\/\/)?(?:www\.)?[\w-]+\.\w{2,}(?:\.\w{2,})?\b/gi;
    const matches = [];
    let match;
    while ((match = urlPattern.exec(text)) !== null) {
        matches.push({
            url: match[0],
            startIndex: match.index,
            endIndex: match.index + match[0].length
        });
    }
    return matches;
}
function addAnchorTags(text) {
    let urls = extractUrls(text);
    let result = '';
    let lastIndex = 0;
    urls.forEach(urlObj => {
        result += text.substring(lastIndex, urlObj.startIndex);
        result += `<a href="${urlObj.url}">${urlObj.url}</a>`;
        lastIndex = urlObj.endIndex;
    });
    result += text.substring(lastIndex);
    return result;
}
module.exports={extractUrls,addAnchorTags}