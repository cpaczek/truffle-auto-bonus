//spam hello world
let claimElementList
let isVisibleList
setInterval(function() {
    //target the .claim class and click it

    // check if .claim and .is-visible are on the same element
    // if they are, click the .claim class
    claimElementList = document.getElementsByClassName("claim")
    isVisibleList = document.getElementsByClassName("is-visible")
    for (let claimElement of claimElementList) {
        for (let isVisibleElement of isVisibleList) {
            if (claimElement === isVisibleElement) {
                claimElement.click()
            }
        }
    }
}, 5000)
