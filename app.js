function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
     
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if(campoPesquisa == ""){
      section.innerHTML = "<p>Escreva um termo para pesquisa</p>"
      return

    }

campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na array 'dados' (assumindo que 'dados' é uma array de objetos).
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
 // Concatena uma nova div com as informações do dado atual à string 'resultados'.
      // A div representa um item de resultado da pesquisa e contém:
      // - Um título com um link para mais informações (o link está duplicado no código original).
      // - Uma descrição do dado.
      // - Um link para mais detalhes sobre o dado.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Saiba Mais</a>
        </div>
      `;
      }
      console.log(dado.titulo.includes(campoPesquisa))
  
      

    }

    if (!resultados){
      resultados = "Nenhum resultado foi encontrado"
    }
  
    // Atribui a string 'resultados' ao conteúdo HTML da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }