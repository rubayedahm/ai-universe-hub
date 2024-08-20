const loadAiFeatures = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const feature = data.data.tools;
  showAiFeatureCard(feature)
};

loadAiFeatures();

const showAiFeatureCard = (data) => {
  const cardContainer = document.getElementById("card-container");
  data.forEach(feature => {
    const div = document.createElement('div')
    div.classList = "card bg-base-100 w-98 border"
    div.innerHTML = `
      <figure>
                  <img
                    src="${feature?.image}"
                    alt="broken image" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                  <ol class="list-decimal ml-4">
                    <li class="text-[#585858]">${feature?.features[0]}</li>
                    <li class="text-[#585858]">${feature?.features[1]}</li>
                    <li class="text-[#585858]">${feature?.features[2]}</li>
                  </ol>
                  <div class="border my-4"></div>
                  <div class="card-actions flex justify-between items-center">
                    <div>
                        <h3 class="text-xl font-bold">${feature?.name}</h3>
                        <div class="flex mt-3">
                            <img class="mr-2" src="images/Vector.png"/>
                            <span>${feature?.published_in}</span>
                        </div>
                    </div>
                    <div>
                    <img onclick="featureAiDetails('${feature?.id}')" class="bg-[#eb57572e] p-3 rounded-full" src="images/Frame.png"/>
                    </div>
                  </div>
                </div>
    `;
    cardContainer.appendChild(div)
  })
};

const featureAiDetails = async(id) => {
    feature_modal.showModal()
    console.log(id)

    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json()
    const details = data.data;
    showFeatureAiDetails(details)
}

const showFeatureAiDetails = (details) => {
    console.log(details)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
         <div class="card bg-[#eb575716] w-full justify-self-center">
            <div class="card-body">
              <p>${details?.description}</p>
              <div class="card-actions grid grid-cols-3">
                <ul class="bg-white px-2 py-8 rounded-lg">
                <li>${details?.pricing[0].price}</li>
                     <li>${details?.pricing[0].plan}</li>
                </ul>
                <ul class="bg-white px-2 py-8 rounded-lg">
                <li>${details?.pricing[1].price}</li>
                     <li>${details?.pricing[1].plan}</li>
                </ul>
                <ul class="bg-white px-2 py-8 rounded-lg">
                <li>${details?.pricing[2].price}</li>
                     <li>${details?.pricing[2].plan}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 w-96 justify-self-center">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> 
    `
}
