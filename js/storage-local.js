const storageLocal = {
    //t is domains
    save: (e, t, o) => {
        let a = {};
        a[e] = JSON.stringify(t)
        //console.log("t is " + Object.keys(t) + "E is " + e)
        chrome.storage.sync.set(a, o)
    },
    load: (e, t, o) => {
        let a = {};
        a[e] = JSON.stringify(t), 
       // console.log("t is " + Object.keys(t) + "E is " + e)
        chrome.storage.sync.get(a, t => {
            let a = {};
            a[e] = JSON.parse(t[e]), o(a)
        })
    }
};