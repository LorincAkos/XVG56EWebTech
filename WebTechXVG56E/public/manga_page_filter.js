function loadData(id) {
    $.getJSON("Datas/manga_data.json", function(data) {
        const item = data.find(item => item.pageTitle === id);

        let html = '';
        let title = `<h2 id="pageTitle" itemId="${item.pageTitle}">${item.pageTitle}</h2>`;
        if (item) {
            item.items.forEach(subItem => {
                html += `
                <div class="card" itemId="${item.pageTitle}|${subItem.itemId}" onclick="openMangaDescriptionPage(this.getAttribute('itemId'))">
                    <img src="${subItem.img}" alt="${subItem.alt}">
                    <h3>${subItem.title}</h3>
                </div>
                `;
            });
        } else {
            html = '<p>No data found for the selected item ID.</p>';
        }

        $('#title').html(title);
        $('#content').html(html);
    })
    .fail(function(jqxhr, textStatus, error) {
        console.error('Error reading JSON file:', error);
    });
}

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id === null) {
        loadData("Top 10 Manga");
    } else {
        loadData(id);
    }
});
