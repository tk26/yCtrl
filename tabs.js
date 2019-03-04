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
    } else if (e.target.id === 'youtubeNext') {
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('youtube')) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'document.getElementsByClassName("ytp-next-button")[0].click()'
                    }, (result) => {
                        console.log(result);
                    });
                }
            }
        });
    } else if (e.target.id === 'youtubePrevious') {
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('youtube')) {
                    chrome.tabs.goBack(tab.id);
                }
            }
        });
    } else if (e.target.id === 'spotifyNext') {
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('spotify')) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'document.getElementsByClassName("spoticon-skip-forward-16")[0].click();'
                    }, (result) => {
                        console.log(result);
                    });
                }
            }
        });
    } else if (e.target.id === 'spotifyPrevious') {
        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                if (tab.url.includes('spotify')) {
                    chrome.tabs.executeScript(tab.id, {
                        code: 'document.getElementsByClassName("spoticon-skip-back-16")[0].click();'
                    }, (result) => {
                        console.log(result);
                    });
                }
            }
        });
    } else if (e.target.id === 'jenkins') {

        chrome.tabs.query({
        }, (tabs) => {
            for (var tab of tabs) {
                console.log(tab);
                
                function getStatus() {
                    if (document.getElementsByClassName("BasicHeader--success").length === 1) {
                        return "S";
                    } else if (document.getElementsByClassName("BasicHeader--failure").length === 1) {
                        return "F";
                    }
                    return "R";
                }
                if (tab.url.includes('jenkins-cumulus.egencia-tools.net/blue/')) {
                    const tabUrlArr = tab.url.substring(69).split("/");
                    if (tabUrlArr.length === 5) {
                        const pipeline = tabUrlArr[0];
                        const branch = tabUrlArr[2];
                        const runId = tabUrlArr[3];
                        
                        chrome.tabs.executeScript(tab.id, {
                            code: '(' + getStatus + ')();'
                        }, (result) => {
                            console.log(result);
                            e.target.insertAdjacentHTML("afterEnd", "<p>" + pipeline + " - " + branch + 
                                " - " + runId + " - " + result + "</p>");
                        });
                    }
                }
            }
        });
    }

    e.preventDefault();
});