function loadData(id){
fetch("Datas/anime_data.json")
            .then(response => response.json())
            .then(data => {
                // Find the object with matching itemid
                const item = data.find(item => item.pageTitle === id);

                // Build HTML to display item data
                let html = '';
                let title = `<h2 id ="pageTitle" itemId ="${item.pageTitle}" >${item.pageTitle}</h2>`;
                if (item) {
                    item.items.forEach(subItem => {
                        html += `
                        <div class="card" itemId="${item.pageTitle}|${subItem.itemId}" onclick="openAnimeDescriptionPage(this.getAttribute('itemId'))">
                            <img src="${subItem.img}" alt="${subItem.alt}">
                            <h3>${subItem.title}</h3>
                        </div>
                        `;
                    });
                } else {
                    html = '<p>No data found for the selected item ID.</p>';
                }

                // Display HTML
                document.getElementById('title').innerHTML = title;
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error reading JSON file:', error));
 }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
        
loadData(id);