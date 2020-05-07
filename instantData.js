// Love the notes! Let's give this JS file a more specific name when you get a chance. - k 
const authority = 'https://financialmodelingprep.com'

// This function will fetch the indexes. - what a vague explanation.
 const getIndexes = async () => {
  const response = await fetch(`${authority}/api/v3/quote/^DJI,^GSPC,^IXIC,^RUT,^VIX`);
  const data = await response.json();
   
  return data;
};
 

// This function will render each card into the screen.
 const renderCard = (index) => {
   // const badge = index.change < 0 
   // ? 'badge badge-success'
   // : 'badge badge-danger'
   
    const html = `
    <div>
      <div class="index-card" >
      <h5 class="card-title index-title"> ${index.name} </h5>
      <p class="index-price">${Math.round(index.price)} </p>  
      <p class="index-change">
        <span class="badge badge-success" // TODO: change badge color based on the change.
          ${Math.round(index.price)} (${Math.round(index.changesPercentage)})% 
        </span>
      </p>
      </div>
    </div>`;
 };
 
// This is an Immediately invoked function. No need to call it.
(async () => {
  
  
  const data = await getIndexes();
  const row = document.querySelector('.row');
  
  console.log(data);
  
})();