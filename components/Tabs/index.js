// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (data => {
    // console.log(data)
    const tabInfo = data.data.topics;
    // console.log('Tab: ', tabInfo)

    const tabLocation = document.querySelector('.topics')
    // const tabMain =document.querySelector('.tabs')

    tabInfo.forEach(item => {
        const banana = tabbie(item)
        tabLocation.appendChild(banana)
    })
})

function tabbie(info){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = info;
    return tab
}