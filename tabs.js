document.addEventListener("click", (e) => {
    if (e.target.id === 'pause') {
        chrome.tabs.query({
            currentWindow: true,
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('youtube')) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'document.getElementsByClassName("ytp-play-button")[0].click()'
                    }, (result) => {
                        console.log(result);
                    });
                }
            }
        });
    }
    e.preventDefault();
});