//
// pop-up script
//

document.addEventListener('DOMContentLoaded', () => {
    const requestsList = document.getElementById("requests");
    chrome.runtime.onMessage.addListener((details, sender, sendResponse) => {
        const requestCellElem = createRequestCellElement(details);
        requestsList.appendChild(requestCellElem);

        window.scrollTo(0, requestsList.lastChild.getBoundingClientRect().bottom);
    });

    document.getElementById("reload").addEventListener('click', () => {
        location.reload();
    });
});

// リクエストを表すセルを生成
function createRequestCellElement(details) {
    const liElement = document.createElement("li");
    const requestCell = `
    <details>
        <summary>${details.method} ${details.initiator}</summary>
        <pre><code>${JSON.stringify(details, null, "    ")}</code></pre>
    </details>
    `;
    liElement.innerHTML = requestCell;

    return liElement;
}
