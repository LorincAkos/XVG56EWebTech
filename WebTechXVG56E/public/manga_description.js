

function loadData(id,itemId){
fetch("Datas/manga_data.json")
            .then(response => response.json())
            .then(data => {
                const item = data.find(item => item.pageTitle === id);
                console.log(item);
                let title = '';
                let score = '';
                let sidebar = '';
                let image= '';
                let description = '';
                let type='';
                let airingDate = '';
                let status = '';
                let volumes = '';
                let chapters = '';
                let authors = '';
                let genres = '';
                let rating = '';

                if (item) {
                    sidebar += `<h2 id="pageTitle">${item.pageTitle}</h2>
                                <ul>`
                    item.items.forEach(subItem => {
                        sidebar += `
                        <li><button value="${item.pageTitle}|${subItem.itemId}" onclick="openMangaDescriptionPage(this.getAttribute('value'))">${subItem.title}</button></li>
                        `;
                    });
                    sidebar += `</ul>`;

                    const subItem = item.items.find(subItem => subItem.itemId === parseInt(itemId));

                    if (subItem) {
                        console.log("Item with itemid 1 and id 1 found:");
                        console.log(subItem);
                        title =`<strong>${subItem.title}</strong>`;
                        score = `<span>${subItem.score}</span>`;
                        image = `<img src="${subItem.img}" alt="${subItem.alt}">`
                        description = `<span>${subItem.description}</span>`;
                        airingDate = `<span>${subItem.start} to ${subItem.end}</span>`;
                        status = `<span>${subItem.status}</span>`;
                        type = `<span>${subItem.type}</span>`;
                        volumes = `<span>${subItem.volumes}</span>`;
                        chapters = `<span>${subItem.chapters}</span>`;
                        authors = `<span>${subItem.authors}</span>`;
                        genres = `<span>${subItem.genres}</span>`;
                        rating = `<span>${subItem.rating}</span>`;
                    } else {
                        title += "Data not found!"
                        console.log("Item with id 1 not found within item with itemid 1.");
                    }
                } else {
                    title += "Page not found!"
                    console.log("Item with itemid 1 not found.");
                }

                
                document.getElementById("list").innerHTML = sidebar;
                document.getElementById("title").innerHTML = title;
                document.getElementById("score").innerHTML += score;
                document.getElementById("image").innerHTML = image;
                document.getElementById("description").innerHTML += description;
                document.getElementById("type").innerHTML += type;
                document.getElementById("status").innerHTML += status;
                document.getElementById("airing-date").innerHTML += airingDate;
                document.getElementById("volumes").innerHTML += volumes;
                document.getElementById("chapters").innerHTML += chapters;
                document.getElementById("authors").innerHTML += authors;
                document.getElementById("genres").innerHTML += genres;
                document.getElementById("rating").innerHTML += rating;
            })
            .catch(error => console.error('Error reading JSON file:', error));
        }

const urlParams = new URLSearchParams(window.location.search);
const tmp = urlParams.get('tmp');

const id = tmp.split('|')[0];
const itemId = tmp.split('|')[1];
console.log(id);
console.log(itemId);

loadData(id,itemId);