    // let p1 = new Promise(function(resolve, reject) {
    //    setTimeout(() => {
    //     console.log("Feching data is in progress and result is: ");
    //     resolve(6532);
    //     reject('No Data');
    //    }, 3000);
    // });

    // p1.then(function(data) {
    //     console.log("Fetched data: ", data);
    // }).catch(function(msg) {
    //     console.log('Promise Rejected: ', msg);
    // })

    let p2 = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Promise Resolved');
            resolve();
        })
    }).then(function() {
        console.log("then method executed...");
    })
