const loadAiFeatures = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const feature = data.data.tools;
  showAiFeatureCard(feature)
};

loadAiFeatures();

const showAiFeatureCard = (data) => {
    // console.log(data)
  const cardContainer = document.getElementById("card-container");
  data.forEach(feature => {
    console.log(feature)
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
                        <h3 class="text-xl">${feature?.name}</h3>
                        <div class="flex mt-3">
                            <img class="mr-2" src="images/Vector.png"/>
                            <span>${feature?.published_in}</span>
                        </div>
                    </div>
                    <div>
                    <img class="bg-[#eb57572e] p-3 rounded-full" src="images/Frame.png"/>
                    </div>
                  </div>
                </div>
    `;
    cardContainer.appendChild(div)
  })
};
