//
// background script
//

// リクエストが開始された
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        // ポップアップスクリプトに投げる
        chrome.runtime.sendMessage(details, null);
    },
    {
        urls: ['<all_urls>']
    },
    [
        "blocking"
    ]
);
