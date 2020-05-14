//For a specific company, input
$(".inputbutton").click(function(){
  let specificCompany = $(".inputfile").val() //AAPL enters
  fetch("https://financialmodelingprep.com/api/v3/company/profile/"+specificCompany)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var fullCard = cardDetails(data);
    $(".stock-card").append(fullCard);
  });
});
  
function cardDetails(information) {
    let actualName = information.profile.companyName;
    let Price = information.profile.price;
    let stockChange = information.profile.changes;
    let percentage = information.profile.changesPercentage;

    return`
        <div class="stock-card row">
          <div class="user-input-stock">
            <div class = "col-8">
              <p class="stock-name">${actualName}</p>
            </div>
            <div class = "col-4">
              <h1 class="stock-cost">${Price}</p>
              <p class="stock-change">${stockChange}</p>
            </div>
          </div>
        </div>`;
  
}
// <p class="percent-of-stock">${percentage}</p>
  //reference
  // <div class="stock-card row">
  //           <!-- Company Info-->
  //           <div class="col-8">
  //             <p class="stock-title">Waste Management, Inc.</p>
  //             <p class="stock-symbol"> WM </p>
  //           </div>
  //           <!-- Pricing Info -->
  //           <div class="col-4"> 
  //             <h1 class="stock-price">96.52</h1>
  //             <p class="stock-change"> -1.79</p>
  //           </div>
  //         </div>
//TODO: Add tags or create a new placeholder card for userinput












// Indexes. 
const authority = 'https://financialmodelingprep.com';

// This function will fetch the indexes. - what a vague explanation.
 const getIndexes = async () => {
  const response = await fetch(`${authority}/api/v3/quote/^DJI,^GSPC,^IXIC,^VIX`);
  const data =  await response.json();
   
  return data;
};

// This function will render each card into the screen.
 const renderCard = (index) => {
    return `
    <div class="index-card" >
        <h5 class="card-title index-title"> ${index.name} </h5>
        <p class="index-price">${index.price} </p>  
        <p class="index-change">
          <span class="badge ${ index.change < 0 ? 'badge-danger' : 'badge-success'}"> ${index.change} (${index.changesPercentage})%</span>
        </p>
    </div>`;
 };
 
// This is an Immediately invoked function. No need to call it.
(async () => {
  
  const indexes = await getIndexes();
  
  indexes.forEach((index) => {
    const indexCardWrapper = document.createElement('div');
    const indexParent = document.querySelector('.row');
    
    indexCardWrapper.classList.add('col');
    indexCardWrapper.innerHTML = renderCard(index);
    indexParent.appendChild(indexCardWrapper);
  });
    
})();