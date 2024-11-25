$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
    
    const sections = $('section');
    const navItems = $('.nav-item');

    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 3px 5px rgba(0, 0, 0, 0.1');
        }


        //console.log(scrollPosition); // Mostra a posição do scroll no console
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 200;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })


        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Função para verificar se o usuário está logado e exibir o ícone
    //function mostrarIconeUsuario() {
       // const usuarioLogado = localStorage.getItem('login');

        //if (usuarioLogado) {
            // Se o usuário estiver logado, mostrar o ícone
                //document.getElementById('user-icon').style.display = 'block';
      //}
    //}

    // Chama a função quando a página carrega
    //window.onload = mostrarIconeUsuario;
});

// Função para verificar login e alternar divs
    function verificarLogin() {
        const usuarioLogado = localStorage.getItem('login');
        
        if (usuarioLogado) {
            // Usuário logado - mostra a mensagem de boas-vindas
            $('.container-hidden').hide(); // Esconde a div de login
            $('.container').show();
            $('.container-mobile').show(); // Mostra a div do usuário logado
        } else {
            // Usuário não está logado - mostra a div de login
            $('.container-hidden').show();
            $('.container').hide();
            $('.container-mobile').hide();
        }
    }

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Função para simular o logout (substitua pelo código real)


// Fechar o menu ao clicar fora dele
window.onclick = function(event) {
    if (!event.target.closest('.user-btn') && !event.target.closest('.user-btn-mobile')) {
        var desktopMenu = document.getElementById("dropdownMenu");
        var mobileMenu = document.getElementById("dropdownMenuMobile");
        if (desktopMenu.style.display === "block") desktopMenu.style.display = "none";
        if (mobileMenu.style.display === "block") mobileMenu.style.display = "none";
    }
}

// Função para simular login (substituir com autenticação real)
function login() {
    localStorage.setItem('login', 'true'); // Marca o usuário como logado
    verificarLogin();
}

// Função de logout
function logout() {
    localStorage.setItem('TotalPontos','')
    localStorage.setItem('login','')
    verificarLogin();
}

// Verifica o estado de login ao carregar a página
verificarLogin();


//Alert personalizado aposentado

//function ativarModal(titulo, desc, tipo) {
   // switch (tipo) {
      //  case 'erro':
       //     modal.style.animation = "modalIn .5s";
       //     ms.style.animation = "msIn .5s";
  
        //    mHeader.style.backgroundColor = "rgb(255, 92, 92)"; // Vermelho
       //     fecharBtn.style.backgroundColor = "rgb(255, 92, 92)";
  
         //   mHeader.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>
        //        <p>${titulo}</p>`;
          //  mBody.innerHTML = `<p>${desc}</p>`;
  
          //  modal.style.display = "flex";
          //  ms.style.display = "block";
          //  break;
     //   case 'normal':
   //         modal.style.animation = "modalIn .5s";
        //    ms.style.animation = "msIn .5s";
  
         //   mHeader.style.backgroundColor = "rgb(20, 33, 61)"; // Azul
         //   fecharBtn.style.backgroundColor = "rgb(252, 154, 17)";
  
           // mHeader.innerHTML = `<i class="fa-solid fa-info-circle"></i>
         //       <p>${titulo}</p>`;
          //  mBody.innerHTML = `<p>${desc}</p>`;
  
            //modal.style.display = "flex";
            //ms.style.display = "block";
            //break;
        //default:
            //break;
    //}
  //}
  
  //function fecharModal() {
   // modal.style.animation = "modalOut .5s";
  //  ms.style.animation = "msOut .5s";
  //
   // setTimeout(() => {
   //     modal.style.display = "none";
   //     ms.style.display = "none";
    //}, 499);
//  }
  
 // fecharBtn.addEventListener('click', fecharModal);
