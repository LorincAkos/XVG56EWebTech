function loadData(id,itemId){
fetch("Datas/anime_data.json")
            .then(response => response.json())
            .then(data => {
                // Find the object with matching itemid
                const item = data.find(item => item.pageTitle === id);
                console.log(item);
                let title = '';
                let score = '';
                let sidebar = '';
                let image= '';
                let episodes = '';
                let description = '';
                let type='';
                let airingDate = '';
                let status = '';
                let producers = '';
                let licensors = '';
                let studios = '';
                let genres = '';
                let duration = '';
                let rating = '';
                let trailer = '';

                // Check if item1 is found
                if (item) {
                    sidebar += `<h2 id="pageTitle">${item.pageTitle}</h2>
                                <ul>`
                    item.items.forEach(subItem => {
                        sidebar += `
                        <li><button value="${item.pageTitle}|${subItem.itemId}" onclick="openAnimeDescriptionPage(this.getAttribute('value'))">${subItem.title}</button></li>
                        `;
                    });
                    sidebar += `</ul>`;

                    // Find the item with id 1 within item1's items array
                    const subItem = item.items.find(subItem => subItem.itemId === parseInt(itemId));

                    // Check if subItem1 is found
                    if (subItem) {
                        console.log("Item with itemid 1 and id 1 found:");
                        console.log(subItem);
                        title =`<strong>${subItem.title}</strong>`;
                        score = `<span>${subItem.score}</span>`;
                        image = `<img src="${subItem.img}" alt="${subItem.alt}">`
                        description = `<span>${subItem.description}</span>`;
                        airingDate = `<span>${subItem.start} to ${subItem.end}</span>`;
                        episodes = `<span>${subItem.episodes}</span>`;
                        status = `<span>${subItem.status}</span>`;
                        type = `<span>${subItem.type}</span>`;
                        producers = `<span>${subItem.producers}</span>`;
                        licensors = `<span>${subItem.licensors}</span>`;
                        studios = `<span>${subItem.studios}</span>`;
                        genres = `<span>${subItem.genres}</span>`;
                        duration = `<span>${subItem.duration}</span>`;
                        rating = `<span>${subItem.rating}</span>`;
                        trailer = `<source src="${subItem.trailer}" type="video/mp4"></source>`;
                    } else {
                        title += "Data not found!"
                        console.log("Item with id 1 not found within item with itemid 1.");
                    }
                } else {
                    title += "Page not found!"
                    console.log("Item with itemid 1 not found.");
                }

                // Display HTML
                
                document.getElementById("list").innerHTML = sidebar;
                document.getElementById("title").innerHTML = title;
                document.getElementById("score").innerHTML += score;
                document.getElementById("image").innerHTML = image;
                document.getElementById("description").innerHTML += description;
                document.getElementById("episodes").innerHTML += episodes;
                document.getElementById("type").innerHTML += type;
                document.getElementById("status").innerHTML += status;
                document.getElementById("airing-date").innerHTML += airingDate;
                document.getElementById("producers").innerHTML += producers;
                document.getElementById("licensors").innerHTML += licensors;
                document.getElementById("studios").innerHTML += studios;
                document.getElementById("genres").innerHTML += genres;
                document.getElementById("duration").innerHTML += duration;
                document.getElementById("rating").innerHTML += rating;
                document.getElementById("video").innerHTML += trailer;
            })
            .catch(error => console.error('Error reading JSON file:', error));
    }

const urlParams = new URLSearchParams(window.location.search);
const tmp = urlParams.get('tmp');

const id = tmp.split('|')[0];
const itemId = tmp.split('|')[1];
// összeraknia két paramétert majd splittelni ahogy kell. Igy csak a value-nak kell megadni és el lehet érni amit kell. very gud :p
console.log(id);
console.log(itemId);

loadData(id,itemId);