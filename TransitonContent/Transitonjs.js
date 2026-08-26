const selectedDeal = localStorage.getItem('SelectedFormat');

if(selectedDeal == "UseCruiseFormat")
{
  CruisesFormat();
}
else if (selectedDeal == "UseHotelResortFormat")
{   
  HotelResortsFormat();
}

async function renderCruiseBrands() {
  const response = await fetch('/SharedContent/BrandPartners.json'); // adjust path to your file
  const data = await response.json();

  const container = document.querySelector('.CruiseBrandContainer'); // wherever you want them inserted

  data.CruiseBrands.forEach(brand => {
    const div = document.createElement('div');
    div.classList.add('CruiseBrand');

    div.innerHTML = `
      <h2 class="CruiseBrandName">${brand.BrandName}</h2>
      <p class="CruiseBrandDescription">${brand.BrandDescription}</p>
      <img src="${brand.BrandImage}" alt="Cruise Brand ${brand.BrandName}">
      <div class="BottomGradiant"></div>
    `;

    container.appendChild(div);
  });
}


function CruisesFormat() {

  const PageBody = document.body;

  PageBody.style.backgroundImage = "url('/images/Cruise2.jpg')";
  PageBody.style.backgroundSize = "cover";
  PageBody.style.backgroundPosition = "center";
  PageBody.style.backgroundRepeat = "no-repeat";
  PageBody.style.backgroundAttachment = "fixed";



  PageBody.innerHTML = `
    <main class="contentBg">

    <h1 class="TransitionPageTitle Font1">Cruises</h1>
    
    <div  id="TransitionPageContent">

      <section class="SpotlightDealSection" style="background-image: url('/images/mainPageimages/Hotel2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
        <h2 class="SpotlightDealTitle">Get in before its gone</h2>
        <p class="SpotlightDealText">This is a realy good deal u dont want to miss becuase if u miss it u dont get a deal and thats not good </p>
        <div class="BottomGradiant"></div>
      </section>

      

      <section class="NormalDealsSection">
        <h2 class="DealContentTitle Font1">Your Wallet deserves A Vaction too</h2>
        <p class="DealDescription Font1"> A great Vacation starts with A great deal!</p>

        <div class="ContainDeals">

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/dannysee-cruise-3991937_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle" >Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/huems04-my-ship-3688195_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/kanenori-ship-8066436_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/mailai-cruise-ship-7052155_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/rabenspiegel-cruise-ship-3984660_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/CruiseDealImgs/tama66-ship-2756487_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 1</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

        </div>

      </section>

      <section class="CruiseForEveryoneSection">

        <h2 class="Font1">Theres a Cruise for Everyone</h2>

        <div class="CruiseBrandContainer">
          
        </div>

      </section>

      <p class="Dealtext Font1">
        Ready To Continue Your Journey? Book your trip today and embark on an unforgettable adventure with us!
      </p>


      
      
      
    <button class="TransitionPageButton" onclick="document.location='https://secure.foratravel.com/intake/pfl-family-travel-llc/RmPm9FQiob'">Book a trip</button> 
    </div>
  </main>`

  renderCruiseBrands();
}




function HotelResortsFormat(){

  BodyPage = document.body;

  BodyPage.style.backgroundImage = "url('/images/mainPageimages/Hotel2.jpg')";
  BodyPage.style.backgroundSize = "cover";
  BodyPage.style.backgroundPosition = "center";
  BodyPage.style.backgroundRepeat = "no-repeat";
  BodyPage.style.backgroundAttachment = "fixed";



  BodyPage.innerHTML=`
  <main class="contentBg">

    <h1 class="TransitionPageTitle Font1">Hotels & Resorts</h1>
    
    <div  id="TransitionPageContent">

      <section class="SpotlightDealSection " style="background-image: url('/images/Hotels&ResortsImages/weyang-sunset-4980474_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
        <h2 class="SpotlightDealTitle DealTitle">Get in before its gone</h2>
        <p class="SpotlightDealText">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone. </p>
        <div class="BottomGradiant"></div>
      </section>

      

      <section class="NormalDealsSection">
        <h2 class="DealContentTitle Font1">Your Wallet deserves A Vaction too</h2>
        <p class="DealDescription Font1"> A great Vacation starts with A great deal!</p>

        <div class="ContainDeals">

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/12019-lobby-398845_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle" >Deal 1</h3>
            <p class="DealDescription">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone.</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/badun-windows-9962135_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 2</h3>
            <p class="DealDescription">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone.</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/kasman-gleneagles-hotel-3434943_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 3</h3>
            <p class="DealDescription">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone.</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/lobostudiohamburg-building-66789_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 4</h3>
            <p class="DealDescription">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone.</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/michaelikonya-lounge-2930070_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 5</h3>
            <p class="DealDescription">Description for Deal 1</p>
            <div class="BottomGradiant"></div>
          </div>

          <div class="Dealitem" style="background-image: url('/images/Hotels&ResortsImages/makabera-deck-chairs-6613331_1920.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
            <h3 class="DealTitle">Deal 6</h3>
            <p class="DealDescription">Escape to a destination that has it all — sun-soaked days, unforgettable views, and the kind of relaxation you've been waiting for. This limited-time offer includes premium accommodations and exclusive perks you won't find booking on your own. Spots are filling fast, so lock in your getaway before it's gone.</p>
            <div class="BottomGradiant"></div>
          </div>

        </div>

      </section>

      <p class="Dealtext Font1">
        Ready To Continue Your Journey? Book your trip today and embark on an unforgettable adventure with us!
      </p>
      
      
    <button class="TransitionPageButton" onclick="document.location='https://secure.foratravel.com/intake/pfl-family-travel-llc/RmPm9FQiob'">Book a trip</button> 
    </div>
  </main>`

}