document.addEventListener("click", (e) => {
    if (e.target.id === 'youtubeTogglePlay') {
        chrome.tabs.query({
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
    } else if (e.target.id === 'spotifyTogglePlay') {
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('spotify')) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'if (document.getElementsByClassName("spoticon-pause-16").length > 0) document.getElementsByClassName("spoticon-pause-16")[0].click(); else document.getElementsByClassName("spoticon-play-16")[0].click();'
                    }, (result) => {
                        console.log(result);
                    });
                }
            }
        });
    }

    e.preventDefault();
});