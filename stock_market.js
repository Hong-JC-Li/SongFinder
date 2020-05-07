//For a specific company, input

// $(".inputbutton").click(function(){
  let specificCompany = $(".inputfile").val() //AAPL enters
  fetch("https://financialmodelingprep.com/api/v3/company/profile/AAPL"+specificCompany)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let actualName = data.profile.companyName;
    $("").html(actualName); //p tag class, h1, h3, so forth goes here
    console.log(actualName)
    
    let Price = data.profile.price;
    $("").html(Price); //p tag class, h1, h3, so forth goes here
    console.log(Price)
    
    let changesAndpercentage = data.profile.changes+ " " +data.profile.changesPercentage;
    $("").html(changesAndpercentage); //p tag class, h1, h3, so forth goes here
    console.log(changesAndpercentage)
  })
// })

//TODO: Add tags or create a new placeholder card for userinput