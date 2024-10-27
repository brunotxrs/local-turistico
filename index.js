const listaSelecaoLugares = document.querySelectorAll(".lugar");

listaSelecaoLugares.forEach(lugar => {
    lugar.addEventListener("click", () => {
        esconderCartaoLugar();

        const idLugarSelecionado = mostrarCartaoLugarSelecionado(lugar);

        desativarLugarNaListagem();
        ativarLugarSelecionadoNaListagem(idLugarSelecionado);
    });
});

function ativarLugarSelecionadoNaListagem(idLugarSelecionado) {
    const lugarSelecionadoNaListagem = document.getElementById(idLugarSelecionado);
    lugarSelecionadoNaListagem.classList.add("ativo");
}

function desativarLugarNaListagem() {
    const lugarAtivoNaListagem = document.querySelector(".lugar.ativo");
    if (lugarAtivoNaListagem) {
        lugarAtivoNaListagem.classList.remove("ativo");
    }
}

function mostrarCartaoLugarSelecionado(lugar) {
    const idLugarSelecionado = lugar.attributes.id.value;
    const idDoCartaoLugarParaAbrir = "cartao-" + idLugarSelecionado;
    const cartaoLugarParaAbrir = document.getElementById(idDoCartaoLugarParaAbrir);
    cartaoLugarParaAbrir.classList.add("aberto");
    return idLugarSelecionado;
}

function esconderCartaoLugar() {
    const cartaoLugarAberto = document.querySelector(".cartao-lugar.aberto");
    if (cartaoLugarAberto) {
        cartaoLugarAberto.classList.remove("aberto");
    }
}

const listSelecaoFestivais = document.querySelectorAll(".festival");

listSelecaoFestivais.forEach(festival => {
    festival.addEventListener("click", () => {
        esconderCartaoFestival();

        const idFestivalSelecionado = mostrarCartaoFestivalSelecionado(festival);

        desativarFestivalNaList();
        ativarFestivalSelecionadoNaList(idFestivalSelecionado);
    });
});

function ativarFestivalSelecionadoNaList(idFestivalSelecionado) {
    const festivalSelecionadoNaList = document.getElementById(idFestivalSelecionado);
    festivalSelecionadoNaList.classList.add("ativo");
}

function desativarFestivalNaList() {
    const festivalAtivoNaList = document.querySelector(".festival.ativo");
    if (festivalAtivoNaList) {
        festivalAtivoNaList.classList.remove("ativo");
    }
}

function mostrarCartaoFestivalSelecionado(festival) {
    const idFestivalSelecionado = festival.attributes.id.value;
    const idDoCartaoFestivalParaAbrir = "cartao-" + idFestivalSelecionado;
    const cartaoFestivalParaAbrir = document.getElementById(idDoCartaoFestivalParaAbrir);
    cartaoFestivalParaAbrir.classList.add("aberto");
    return idFestivalSelecionado;
}

function esconderCartaoFestival() {
    const cartaoFestivalAberto = document.querySelector(".cartao-festival.aberto");
    if (cartaoFestivalAberto) {
        cartaoFestivalAberto.classList.remove("aberto");
    }
}