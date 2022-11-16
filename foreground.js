console.log("foreground")
chrome.tabs.onActivated.addListener(a => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        // alert(url.split(".com")[0]);
        if(url.split(".com")[0] == "https://leetcode")
        {
            let e, t = a.tabId;
            chrome.tabs.get(t, a => {
                e = parseDomainFromUrl(a.url), setBadge(t, ""), domains[e] && domains[e].days[dates.today] && setBadge(t, getBadgeTimeString(domains[e].days[dates.today].seconds))
            })
        }     
    });
})