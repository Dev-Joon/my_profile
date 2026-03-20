//json & load
const listContainer = document.getElementById("listContainer");
const filterBtns = document.querySelectorAll(".filter_btn");
const listTitle = document.getElementById("listTitle");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let data = {};
let filteredLists = [];

const perPage = 5;
let currentPage = 1;
let totalPage = 1;

fetch("./data/data.json")
    .then(res => res.json())
    .then(async index => {

        const entries = Object.entries(index);

        const results = await Promise.all(
            entries.map(([category, file]) =>
                fetch(`./data/${file}`)
                    .then(res => res.json())
                    .then(json => [category, json])
            )
        );

        results.forEach(([category, json]) => {
            data[category] = json;
        });

        filteredLists = data["포스팅"] || [];

        totalPage = Math.ceil(filteredLists.length / perPage);

        renderPage(1);
    });

//리스트 생성함수
function createListItem(item){

    const a = document.createElement("a");
    a.href = item.link;
    a.className = "list";

    a.innerHTML = `
        <div class="list_img_box">
            <img src="${item.img}">
        </div>
        <h3>${item.title}</h3>
    `;

    return a;
}


//페이지 출력함수
function renderPage(page){

    currentPage = page;

    listContainer.innerHTML = "";

    const start = (page - 1) * perPage;
    const end = start + perPage;

    const pageItems = filteredLists.slice(start, end);

    pageItems.forEach(item=>{
        listContainer.appendChild(createListItem(item));
    });

    totalPage = Math.ceil(filteredLists.length / perPage);

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPage;
}


//필터 버튼 연결
filterBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{

        const category = btn.dataset.category;

        filteredLists = data[category] || [];

        listTitle.textContent = category;

        currentPage = 1;

        renderPage(1);
    });
});


// 페이지 버튼 연결
prevBtn.addEventListener("click", ()=>{
    if(currentPage > 1){
        renderPage(currentPage - 1);
    }
});

nextBtn.addEventListener("click", ()=>{
    if(currentPage < totalPage){
        renderPage(currentPage + 1);
    }
});
