import { config } from "../config";
import { addEventForLinks, addEventForLinksDjump, addEventForLinksWhite } from "./cursor";
import { scrollToElement } from "./scroll";

let btnAllProjects = document.querySelector('.btn_all_projects');
if (btnAllProjects) {
    btnAllProjects.addEventListener('click', async (e) => {
        let renderProjects = document.querySelectorAll('#projects .container .card');
        let num_new_el = renderProjects.length;
        btnAllProjects.classList.add('_loading');
        let response = await fetch(`${config.API_HOST}/get_project/${num_new_el}`);
        btnAllProjects.classList.remove('_loading');
        if (response.ok) {
            let json = await response.json();
            let containerProject = document.querySelector('#projects .container');
            let card = document.createElement('div');
            card.innerHTML = template(json.project);

            let firstCard = containerProject.querySelector('.card');
            let activeCard = containerProject.querySelector('.card_active');
            activeCard.classList.remove('card_active');

            card = card.firstElementChild;

            const cardMargin = Number(getComputedStyle(firstCard).marginBottom.slice(0, -2));
            containerProject.style.height = containerProject.clientHeight + 'px';
            const cardHeight = cardMargin + firstCard.clientHeight;
            containerProject.style.height = containerProject.clientHeight + cardHeight + 'px';
            containerProject.insertBefore(card, btnAllProjects);

            let imgCard = card.querySelector('.img img');

            imgCard.onload = () => {
                animeteNewProject();
                containerProject.style.height = null;
            }

            linksEvents(card);

            //удаляем кнопку "Показать все", если загрузили последний проект
            if (json.project.last) btnAllProjects.remove();
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    });
}

const linksEvents = (card) => {
    // добавляем hover новой карточке
    let linksDjump = card.querySelectorAll('.cursor_jump');
    linksDjump.forEach((link) => {
        addEventForLinksDjump(link);
    });

    let links = card.querySelectorAll('.cursor_link');
    links.forEach((link) => {
        addEventForLinks(link);
    });

    let linksWhite = card.querySelectorAll('.cursor_on_white');
    linksWhite.forEach((link) => {
        addEventForLinksWhite(link);
    });
}

const animeteNewProject = () => {
    let new_project = document.querySelector('.card_get_start');
    setTimeout(() => {
        new_project.classList.remove('card_get_start');
        new_project.classList.add('card_get_play');

        console.log({ scrollToElement });
        scrollToElement(new_project, 50);
    }, 100);
    setTimeout(() => {
        new_project.classList.remove('card_get_play');
        new_project.classList.remove('card_active');
    }, 100);

};

const template = (data) => /*html*/`
  <div class="card parallax_container card_show card_active card_get_start">
    <a href="${config.API_HOST}/projects/${data.id}" class="img parallax_img cursor_jump" target="_blank">
      <img src="${config.API_HOST}${data.img_main}" alt="">
    </a>
    <div class="text">
        <div class="text_container">
            <div class="card_title">${data.name}</div>
            <div class="category">Категория: <span
                    style="color:#${data.color}">${data.category}</span></div>
            <div class="category">Проект: <a href="${data.project_link}" class="link cursor_on_white"
                    style="color:#${data.color}">${data.project_link_name}</a></div>
            <div class="description">${data.description_main}
            </div>
            <a href="${config.API_HOST}/projects/${data.id}" class="card_btn btn_animate cursor_link"
                style="color:#${data.color}" target="_blank">
                <span>Открыть кейс</span>
            </a>
        </div>
    </div>
</div>
`
