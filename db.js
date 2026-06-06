document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

target.scrollIntoView({
behavior:"smooth"
});

});

});


const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(
".service,.case,.card"
).forEach(el => {

observer.observe(el);

});
function mostrarEtapa(etapa){

    const titulo =
    document.getElementById("tituloEtapa");

    const texto =
    document.getElementById("textoEtapa");

    document
    .querySelectorAll(".step")
    .forEach(item =>
        item.classList.remove("active")
    );

    event.currentTarget
    .classList.add("active");

    if(etapa === "diagnostico"){

        titulo.innerHTML =
        "Diagnóstico Logístico";

        texto.innerHTML =
        "Analisamos indicadores, custos, processos e estrutura operacional para identificar oportunidades reais de ganho financeiro.";

    }

    if(etapa === "mapeamento"){

        titulo.innerHTML =
        "Mapeamento de Processos";

        texto.innerHTML =
        "Documentamos o fluxo completo da operação, identificando gargalos, retrabalhos, desperdícios e riscos ocultos.";

    }

    if(etapa === "plano"){

        titulo.innerHTML =
        "Plano de Ação";

        texto.innerHTML =
        "Priorizamos as melhorias com maior impacto financeiro e operacional, criando um roadmap claro de implementação.";

    }

    if(etapa === "implementacao"){

        titulo.innerHTML =
        "Implementação e Acompanhamento";

        texto.innerHTML =
        "Acompanhamos a execução das ações, monitoramos indicadores e garantimos que os resultados sejam sustentáveis.";

    }

}