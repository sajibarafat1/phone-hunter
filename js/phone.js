const loadPhone = (search) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};

const displayPhones = (phones) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerHTML = "";
  phones.forEach((phone) => {
    // console.log(phone);
    const phonesDiv = document.createElement("div");
    phonesDiv.classList.add("col");
    phonesDiv.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h1>${phone.brand}</h1>
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">
        ${phone.slug}
      </p>
      <button onclick="loadPhonesDetails('${phone.slug}')" class="btn btn-info text-white">Phone Details</button>
    </div>
  </div>
    `;
    phonesContainer.appendChild(phonesDiv);
  });
};

const searchPhones = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadPhone(searchText);
  searchField.value = "";
};

const loadPhonesDetails = (slug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhonesDetails(data.data));
};

const displayPhonesDetails = (phone) => {
  const phonesDetails = document.getElementById("phones-details");
  phonesDetails.innerHTML = "";
  const phonesDiv = document.createElement("div");
  phonesDiv.classList.add("card");
  phonesDiv.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." />
  <div class="card-body">
  <h1>${phone.brand}</h1>
  <h5 class="card-title">${phone.phone_name}</h5>
  <p class="card-text">
    ${phone.slug}
  </p>
 
  </div>
  `;
  phonesDetails.appendChild(phonesDiv);
};

loadPhone("apple");
