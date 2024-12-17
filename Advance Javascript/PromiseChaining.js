    function placeOrder(item) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Order Placed for ", item);
                resolve();
            }, 4000);
        });
    }

    function makePayment(amt) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Recived Paytm payment of rupees ", amt);
                resolve();
            }, 5000);
        });
    }

    function confirmOrder() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Order confirmed");
                resolve();
            }, 2000);
        });
    }

    async function processOrder() {
        await placeOrder("Iphone 16 pro max");
        await makePayment(129999);
        await confirmOrder();
        console.log("Order successfully confirmed and delivered.");
    }

    processOrder();
    console.log("Task 1");
    console.log("Task 2");
    
