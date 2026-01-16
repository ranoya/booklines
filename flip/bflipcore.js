let repete = false;
let davez = ["pas_", "pres_", "fut_"];
let atual = 0;
let posit = 0;
let move = "";
let angulo5 = 0;
let ultimadirecao = true;
let docs = [
  "https://booklines.vercel.app/livros/javascript/js-comecando.html?blink=Primeiros%20passos",
  "https://omnidocs.vercel.app/livros/capas/javascript",
  "https://booklines.vercel.app/livros/javascript/js-loops.html?blink=Loops",
  "https://booklines.vercel.app/livros/javascript/js-datavis.html?blink=Dataviz",
  "https://omnidocs.vercel.app/livros/capas/observable",
  "https://omnicode.vercel.app/monor/?buffer=bookmaineditor&lang=javascript&preview=50&bgcolor=ffffff&gutcolor=ffffff&theme=solarized_light&guttext=b99e37&bordercolor=dddddd&hgcolor=cccccc&pborder=bbbbbb&basepoe=https://docs.google.com/spreadsheets/d/10wpfmMWn3igQF4rJBYCo8OR90igO1tfKwcmrot0ult0/edit#gid=188219339",
  "https://www.ranoya.com/Art/Singles/pathwaves.html?bgcolor=cb1253&fcolor=ffffff",
  "https://booklines.vercel.app/livros/observable/obs-dados.html?blink=Programando%20em%20javascript%20no%20Observable%20|%20%3Cb%3EProgramando%20com%20dados%3C/b%3E",
  "https://artegerativabrasileira.vercel.app/capa",
  "https://booklines.vercel.app/livros/observable/obs-copyleft.html?blink=Programando%20em%20javascript%20no%20Observable%20|%20%3Cb%3EInformações%3C/b%3E",
  "https://www.ranoya.com/Art/Singles/meandros.html?bgcolor=554422&fcolor=efe8d6",
  "https://www.ranoya.com/Art/textos/meandros.html?fcolor=efe8d6&bgcolor=554422",
  "https://www.ranoya.com/Art/Singles/retriculit.html?fcolor=00000099&bgcolor=cb6b6e",
  "https://www.ranoya.com/Art/textos/reticulit.html?fcolor=00000099&bgcolor=cb6b6e",
  "https://www.ranoya.com/Art/Singles/orbitalis.html?fcolor=eb690c&bgcolor=444444",
  "https://www.ranoya.com/Art/textos/orbitalis.html?fcolor=eb690c&bgcolor=444444",
  "https://www.ranoya.com/Art/Singles/blob.html?fcolor=62817e&bgcolor=ffb5b5&alfa=22",
  "https://www.ranoya.com/Art/textos/blob.html?fcolor=62817e&bgcolor=ffb5b5&alfa=22",
];

let escrevepresente = function (pre, onde, delta) {
  let cod = `

  <div id="${pre}LivroComponente">
    <div id="${pre}Wrap">
  
  `;

  /* for (let i = 0; i < docs.length; i = i + 4) { */
  for (let i = 0; i < 4; i = i + 4) {
    cod += `


      <div id="${pre}BlocoBack">
        <div id="${pre}PaginaBack">
          <iframe
            frameborder="0"
            src="${docs[posit + delta + 2].url}"
            style="background-color: white;"
            id="${pre}Ifr_PaginaBack"
          ></iframe>
        </div>
      </div>
      
      <div id="${pre}BlocoFundoE" style="background-color: white; overflow-x: hidden">
        <div id="${pre}PaginaFundo_ESQ">
      <iframe
        frameborder="0"
        src="${docs[posit + delta].url}"
        id="${pre}Ifr_PaginaFundo_ESQ"
        
      ></iframe>
      </div>
      </div>
      <div id="${pre}BlocoFundoD" style="background-color: white;">
        <div id="${pre}PaginaFundo_DIR" style="background-color: white;">
      <iframe id="${pre}Ifr_PaginaFundo_DIR"
        frameborder="0"
        src="${docs[posit + delta + 3].url}"
        
        
      ></iframe>
       </div>
      </div>
      <div id="${pre}BlocoCover" css="${docs[posit + delta + 1].css}">
        <div style="background-color: white; overflow-x: hidden" id="${pre}PaginaCover" css="${
      docs[posit + delta + 1].css
    }">
          <iframe id="${pre}Ifr_PaginaCover" frameborder="0" src="${
      docs[posit + delta + 1].url
    }" style="background-color: white;" css="${
      docs[posit + delta + 1].css
    }"></iframe>
        </div>
      </div>
      

    `;
  }

  cod += `</div></div>`;

  document.getElementById(onde).innerHTML = cod;
};

let ordena = {
  proximo: function () {
    if (atual == 2) {
      return davez[0];
    } else {
      return davez[atual + 1];
    }
  },

  anterior: function () {
    if (atual == 0) {
      return davez[2];
    } else {
      return davez[atual - 1];
    }
  },

  prafrente: function () {
    if (atual == 2) {
      atual = 0;
    } else {
      atual++;
    }
  },

  pratras: function () {
    if (atual == 0) {
      atual = 2;
    } else {
      atual--;
    }
  },
};

let gerencia = function (dir) {
  /* 

        roteiro do gerencia:
        fra frente (se a última direção for pra frente) true + 180
        a página virou (foi para 180)
        pega o próximo slide na array davez que estará com o mesmo slide em 0
        põe pra cima - ok
        joga o angulo em zero -ok
        atualiza - ok
        carrega os próximos documentos no slide da array anterior - ok
        anda fra frente na array

        pra frente (se a última direção foi pra trás)
        pega o slide anterior na davez e joga pra frente
        joga o angulo para 180
        atualiza
        roda o decresce.

        fra trás (se a última direção foi pra trás) ok
        a página virou (foi pra 0) ok
        pega o slide anterior na array davez que estará com o mesmo slide em 180 ok
        põe pra cima ok
        joga o angulo em 180 ok
        atualiza ok
        carrega os documentos anteriores no slide +1 da array -  vamo ver
        anda pra traz na array


    */

  // console.log("vai pra onde? " + dir + " / " + ultimadirecao);

  if (!dir && angulo5 == 0) {
    // console.log("gerencia: iniciou");
    document.getElementById("fut_livro").style.zIndex = 100;
    document.getElementById("pres_livro").style.zIndex = 100;
    document.getElementById("pas_livro").style.zIndex = 100;
    document.getElementById(ordena.anterior() + "livro").style.zIndex = 300;
    // console.log("gerencia: colorou o documento certo em cima: " + ordena.proximo());

    // console.log("angulo " + angulo5);
    // console.log("botou o angulo em 0 e atualizou");
    angulo5 = 180;

    // console.log("angulo tem que ser 180 -> " + angulo5);
    atualiza();
    // console.log("angulo " + angulo5);

    // console.log("o próximo conjunto é: " + ordena.proximo() + "Ifr_PaginaFundo_ESQ");
    document.getElementById(ordena.proximo() + "Ifr_PaginaFundo_ESQ").src =
      docs[posit - 4].url;
    document.getElementById(ordena.proximo() + "Ifr_PaginaCover").src =
      docs[posit - 3].url;
    document.getElementById(ordena.proximo() + "Ifr_PaginaBack").src =
      docs[posit - 2].url;
    document.getElementById(ordena.proximo() + "Ifr_PaginaFundo_DIR").src =
      docs[posit - 1].url;

    if (
      typeof docs[posit - 3].css != "undefined" &&
      docs[posit - 3].css != null &&
      docs[posit - 3].css != ""
    ) {
      document
        .getElementById(ordena.proximo() + "Ifr_PaginaCover")
        .setAttribute("css", "sim");
      document
        .getElementById(ordena.proximo() + "PaginaCover")
        .setAttribute("css", "sim");
      document
        .getElementById(ordena.proximo() + "BlocoCover")
        .setAttribute("css", "sim");
    } else {
      document
        .getElementById(ordena.proximo() + "Ifr_PaginaCover")
        .setAttribute("css", "");
      document
        .getElementById(ordena.proximo() + "PaginaCover")
        .setAttribute("css", "");
      document
        .getElementById(ordena.proximo() + "BlocoCover")
        .setAttribute("css", "");
    }

    // console.log("colocou novos slides em " + ordena.proximo());

    // console.log("a camanda atual é " + davez[atual]);

    ordena.pratras();

    // console.log("andou pra tras na camada... a atual agora é " + davez[atual]);
    posit = posit - 2;

    // console.log("posit agora é " + posit);
  }

  if (dir && angulo5 == 180) {
    // console.log("gerencia: iniciou");
    document.getElementById("fut_livro").style.zIndex = 100;
    document.getElementById("pres_livro").style.zIndex = 100;
    document.getElementById("pas_livro").style.zIndex = 100;
    document.getElementById(ordena.proximo() + "livro").style.zIndex = 300;
    // console.log("gerencia: colorou o documento certo em cima: " + ordena.proximo());

    // console.log("angulo " + angulo5);
    // console.log("botou o angulo em 0 e atualizou");

    if (!ultimadirecao) {
      angulo5 = 180;
    }

    angulo5 = 0;
    // console.log("angulo tem que ser 0 -> " + angulo5);
    atualiza();
    // console.log("angulo " + angulo5);

    // console.log("conjunto anterior é: " + ordena.anterior() + "Ifr_PaginaFundo_ESQ");
    document.getElementById(ordena.anterior() + "Ifr_PaginaFundo_ESQ").src =
      docs[posit + 4].url;
    document.getElementById(ordena.anterior() + "Ifr_PaginaCover").src =
      docs[posit + 5].url;
    document.getElementById(ordena.anterior() + "Ifr_PaginaBack").src =
      docs[posit + 6].url;
    document.getElementById(ordena.anterior() + "Ifr_PaginaFundo_DIR").src =
      docs[posit + 7].url;

    // console.log("colocou novos slides em " + ordena.anterior());

    // console.log("a camanda atual é " + davez[atual]);

    console.log("posit = " + posit + " arq = " + docs[posit].url);

    if (
      typeof docs[posit + 2].css != "undefined" &&
      docs[posit + 2].css != null &&
      docs[posit + 2].css != ""
    ) {
      document
        .getElementById(ordena.proximo() + "Ifr_PaginaCover")
        .setAttribute("css", "sim");
      document
        .getElementById(ordena.proximo() + "PaginaCover")
        .setAttribute("css", "sim");
      document
        .getElementById(ordena.proximo() + "BlocoCover")
        .setAttribute("css", "sim");
    } else {
      document
        .getElementById(ordena.proximo() + "Ifr_PaginaCover")
        .setAttribute("css", "");
      document
        .getElementById(ordena.proximo() + "PaginaCover")
        .setAttribute("css", "");
      document
        .getElementById(ordena.proximo() + "BlocoCover")
        .setAttribute("css", "");
    }

    ordena.prafrente();

    // console.log("andou pra frente na camada... a atual agora é " + davez[atual]);
    posit = posit + 2;

    // console.log("posit agora é " + posit);
  }

  repete = false;

  // console.log("direcao = " + dir + " ultimadirecao = " + ultimadirecao);
  if (!dir && ultimadirecao) {
    repete = true;
  }

  if (dir && !ultimadirecao) {
    repete = true;
  }

  ultimadirecao = dir;

  // console.log("repete = " + repete);
};

let atualiza = function () {
  let pas_pdf = document.getElementById("pas_PaginaFundo_DIR");
  let pas_pgCover = document.getElementById("pas_PaginaCover");
  let pas_blBack = document.getElementById("pas_BlocoBack");
  let pas_pgBack = document.getElementById("pas_PaginaBack");

  let pres_pdf = document.getElementById("pres_PaginaFundo_DIR");
  let pres_pgCover = document.getElementById("pres_PaginaCover");
  let pres_blBack = document.getElementById("pres_BlocoBack");
  let pres_pgBack = document.getElementById("pres_PaginaBack");

  let fut_pdf = document.getElementById("fut_PaginaFundo_DIR");
  let fut_pgCover = document.getElementById("fut_PaginaCover");
  let fut_blBack = document.getElementById("fut_BlocoBack");
  let fut_pgBack = document.getElementById("fut_PaginaBack");

  pas_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
  pas_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
  pas_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
  pas_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

  pres_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
  pres_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
  pres_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
  pres_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

  fut_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
  fut_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
  fut_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
  fut_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

  clearInterval(move);

  // console.log("repete = " + repete);
};

let decresce = function () {
  clearInterval(move);

  let pas_pdf = document.getElementById("pas_PaginaFundo_DIR");
  let pas_pgCover = document.getElementById("pas_PaginaCover");
  let pas_blBack = document.getElementById("pas_BlocoBack");
  let pas_pgBack = document.getElementById("pas_PaginaBack");

  let pres_pdf = document.getElementById("pres_PaginaFundo_DIR");
  let pres_pgCover = document.getElementById("pres_PaginaCover");
  let pres_blBack = document.getElementById("pres_BlocoBack");
  let pres_pgBack = document.getElementById("pres_PaginaBack");

  let fut_pdf = document.getElementById("fut_PaginaFundo_DIR");
  let fut_pgCover = document.getElementById("fut_PaginaCover");
  let fut_blBack = document.getElementById("fut_BlocoBack");
  let fut_pgBack = document.getElementById("fut_PaginaBack");

  document.getElementById("fut_PaginaCover").classList.add("initdouble");
  document.getElementById("fut_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("fut_BlocoCover").classList.add("initdouble");
  document.getElementById("pas_PaginaCover").classList.add("initdouble");
  document.getElementById("pas_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("pas_BlocoCover").classList.add("initdouble");
  document.getElementById("pres_PaginaCover").classList.add("initdouble");
  document.getElementById("pres_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("pres_BlocoCover").classList.add("initdouble");

  if (posit >= 0) {
    move = setInterval(function () {
      if (angulo5 >= 0) {
        angulo5--;

        pas_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
        pas_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        pas_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        pas_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

        pres_pdf.style.zIndex = `${
          5 + 5 * Math.min(parseInt(angulo5 - 74), 2)
        }`;
        pres_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        pres_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        pres_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

        fut_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
        fut_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        fut_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        fut_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;
      } else {
        angulo5 = 0;
        atualiza();
        gerencia(false);
        if (repete) {
          // console.log("tentando denovo decresce");
          decresce();
        }

        if (
          typeof fut_pgCover.getAttribute("css") != "undefined" &&
          fut_pgCover.getAttribute("css") != null &&
          fut_pgCover.getAttribute("css") != "" &&
          document.getElementById("fut_livro").style.zIndex == 300
        ) {
          document
            .getElementById("fut_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("fut_Ifr_PaginaCover")
            .classList.add("initdouble");
          document.getElementById("fut_BlocoCover").classList.add("initdouble");
        }

        if (
          typeof pas_pgCover.getAttribute("css") != "undefined" &&
          pas_pgCover.getAttribute("css") != null &&
          pas_pgCover.getAttribute("css") != "" &&
          document.getElementById("pas_livro").style.zIndex == 300
        ) {
          document
            .getElementById("pas_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pas_Ifr_PaginaCover")
            .classList.add("initdouble");
          document.getElementById("pas_BlocoCover").classList.add("initdouble");
        }

        if (
          typeof pres_pgCover.getAttribute("css") != "undefined" &&
          pres_pgCover.getAttribute("css") != null &&
          pres_pgCover.getAttribute("css") != "" &&
          document.getElementById("pres_livro").style.zIndex == 300
        ) {
          document
            .getElementById("pres_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pres_Ifr_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pres_BlocoCover")
            .classList.add("initdouble");
        }
      }
    }, 1);
  }
};

let acresce = function () {
  document.getElementById("menos").classList.remove("naomostra");
  clearInterval(move);

  let pas_pdf = document.getElementById("pas_PaginaFundo_DIR");
  let pas_pgCover = document.getElementById("pas_PaginaCover");
  let pas_blBack = document.getElementById("pas_BlocoBack");
  let pas_pgBack = document.getElementById("pas_PaginaBack");

  let pres_pdf = document.getElementById("pres_PaginaFundo_DIR");
  let pres_pgCover = document.getElementById("pres_PaginaCover");
  let pres_blBack = document.getElementById("pres_BlocoBack");
  let pres_pgBack = document.getElementById("pres_PaginaBack");

  let fut_pdf = document.getElementById("fut_PaginaFundo_DIR");
  let fut_pgCover = document.getElementById("fut_PaginaCover");
  let fut_blBack = document.getElementById("fut_BlocoBack");
  let fut_pgBack = document.getElementById("fut_PaginaBack");

  document.getElementById("fut_PaginaCover").classList.add("initdouble");
  document.getElementById("fut_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("fut_BlocoCover").classList.add("initdouble");
  document.getElementById("pas_PaginaCover").classList.add("initdouble");
  document.getElementById("pas_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("pas_BlocoCover").classList.add("initdouble");
  document.getElementById("pres_PaginaCover").classList.add("initdouble");
  document.getElementById("pres_Ifr_PaginaCover").classList.add("initdouble");
  document.getElementById("pres_BlocoCover").classList.add("initdouble");

  if (posit < docs.length - 2) {
    move = setInterval(function () {
      if (angulo5 < 180) {
        angulo5++;
        pas_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
        pas_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        pas_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        pas_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

        pres_pdf.style.zIndex = `${
          5 + 5 * Math.min(parseInt(angulo5 - 74), 2)
        }`;
        pres_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        pres_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        pres_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;

        fut_pdf.style.zIndex = `${5 + 5 * Math.min(parseInt(angulo5 - 74), 2)}`;
        fut_pgCover.style.transform = `rotateY(${0 - angulo5}deg)`;
        fut_blBack.style.zIndex = `${9 + Math.min(parseInt(angulo5 - 74), 2)}`;
        fut_pgBack.style.transform = `rotateY(${0 - angulo5}deg)`;
      } else {
        angulo5 = 180;
        atualiza();
        gerencia(true);

        if (repete) {
          // console.log("tentando denovo acresce");
          acresce();
        }

        if (
          typeof fut_pgCover.getAttribute("css") != "undefined" &&
          fut_pgCover.getAttribute("css") != null &&
          fut_pgCover.getAttribute("css") != ""
        ) {
          document
            .getElementById("fut_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("fut_Ifr_PaginaCover")
            .classList.add("initdouble");
          document.getElementById("fut_BlocoCover").classList.add("initdouble");
        }

        if (
          typeof pas_pgCover.getAttribute("css") != "undefined" &&
          pas_pgCover.getAttribute("css") != null &&
          pas_pgCover.getAttribute("css") != ""
        ) {
          document
            .getElementById("pas_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pas_Ifr_PaginaCover")
            .classList.add("initdouble");
          document.getElementById("pas_BlocoCover").classList.add("initdouble");
        }

        if (
          typeof pres_pgCover.getAttribute("css") != "undefined" &&
          pres_pgCover.getAttribute("css") != null &&
          pres_pgCover.getAttribute("css") != ""
        ) {
          document
            .getElementById("pres_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pres_Ifr_PaginaCover")
            .classList.add("initdouble");
          document
            .getElementById("pres_BlocoCover")
            .classList.add("initdouble");
        }
      }
    }, 1);
  }
};

$_GET = [];
(function () {
  corte = window.location.href.toString().indexOf("?");
  if (corte > 0) {
    argumento = window.location.href.toString().substring(corte + 1);
    argumentos = argumento.split("&");
    for (arg in argumentos) {
      let argCorte = argumentos[arg].indexOf("=");
      $_GET[argumentos[arg].substring(0, argCorte)] = argumentos[arg].substring(
        argCorte + 1
      );
    }
  }
})();

gsdata($_GET["file"], function (d) {
  docs = [];

  for (let i = 0; i < d.length; i++) {
    docs[i] = {};
    docs[i].url = d[i].link;
    docs[i].css = d[i].tipo;
  }

  // cria o documento e os eventos

  escrevepresente("pas_", "pas_livro", 0);
  escrevepresente("pres_", "pres_livro", 2);
  escrevepresente("fut_", "fut_livro", 4);

  document.addEventListener("mousemove", function (event) {
    let mouseX = event.clientX; // Horizontal position relative to the viewport
    let mouseY = event.clientY; // Vertical position relative to the viewport

    let viewportHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let viewportWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (mouseY > viewportHeight - 200) {
      document.getElementById("pas_LivroComponente").classList.add("show");
      document.getElementById("pres_LivroComponente").classList.add("show");
      document.getElementById("fut_LivroComponente").classList.add("show");
      document.getElementById("timeline").classList.add("show");
    } else {
      document.getElementById("pas_LivroComponente").classList.remove("show");
      document.getElementById("pres_LivroComponente").classList.remove("show");
      document.getElementById("fut_LivroComponente").classList.remove("show");
      document.getElementById("timeline").classList.remove("show");
    }
  });
});
