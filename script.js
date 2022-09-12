const countDown = document.querySelector('.countDown')
let nums = 10;
console.log(countDown.innerHTML)

setTimeout(() => {
    countDown.innerHTML = --nums
    console.log(countDown.innerHTML)
    setTimeout(() => {
        countDown.innerHTML = --nums
        console.log(countDown.innerHTML)
        setTimeout(() => {
            countDown.innerHTML = --nums
            console.log(countDown.innerHTML)
            setTimeout(() => {
                countDown.innerHTML = --nums
                console.log(countDown.innerHTML)
                setTimeout(() => {
                    countDown.innerHTML = --nums
                    console.log(countDown.innerHTML)
                    setTimeout(() => {
                        countDown.innerHTML = --nums
                        console.log(countDown.innerHTML)
                        setTimeout(() => {
                            countDown.innerHTML = --nums
                            console.log(countDown.innerHTML)
                            setTimeout(() => {
                                countDown.innerHTML = --nums
                                console.log(countDown.innerHTML)
                                setTimeout(() => {
                                    countDown.innerHTML = --nums
                                    console.log(countDown.innerHTML)
                                    setTimeout(() => {
                                        countDown.innerHTML = " Happy Independence day🎊🎊"
                                        console.log(countDown.innerHTML)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)