var listaLivros = [
    "https://images-na.ssl-images-amazon.com/images/I/81D0qNDMqPL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81BTkpMrLYL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51vJiEaw12L._SX342_SY445_QL70_ML2_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/819js3EQwbL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41%2B7a4RuENL._SX342_SY445_QL70_ML2_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51JhLmIQYxL._SX342_SY445_QL70_ML2_.jpg",
    "https://lojasaraiva.vteximg.com.br/arquivos/ids/14018888/sol-e-para-todos.jpg?v=637179048372130000",
    "https://lojasaraiva.vteximg.com.br/arquivos/ids/12112548/1008609654.jpg?v=637142261252330000"
  ];
  
  for (var i = 0; i < listaLivros.length; i++) {
    document.write("<img src=" + listaLivros[i] + ">");
  }
  function adicionarLivro() {
    var livroFavorito = document.getElementById("livro").value;
    if (livroFavorito.endsWith(".jpg")) {
      listarLivrosNaTela(livroFavorito);
    } else {
      console.error("Endereço de livro inválido");
    }
    document.getElementById("livro").value = "";
  }
  
  function listarLivrosNaTela(livro) {
    console.log(livro);
    var elementoLivroFavorito = "<img src=" + livro + ">";
    var elementoListaLivros = document.getElementById("listaLivros");
    elementoListaLivros.innerHTML =
      elementoListaLivros.innerHTML + elementoLivroFavorito;
  }  