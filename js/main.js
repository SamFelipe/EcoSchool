(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


(function ($) {
    "use strict";

    // Função para ajustar a altura ao carregar e redimensionar a janela
    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // Verificar o status de login ao carregar a página
    $(document).ready(function () {
        var isLoggedIn = sessionStorage.getItem('loggedIn');

        if (isLoggedIn === 'true') {
            // Usuário está logado, ajuste a interface
            $('#btnLogin').text('Logout');
            $('#loginStatus').html('Bem-vinda, Letícia!');
        }
    });

    // Manipulador de clique no botão de login
    $('#btnLogin').click(function () {
        // Verificar se o botão está com o texto 'Login'
        if ($('#btnLogin').text().trim().toLowerCase() === 'login') {
            $('#loginModal').modal('show'); // Exibir o modal de login
        } else {
            // Se o botão tiver o texto 'Logout', simular o logout
            $('#btnLogin').text('Login');
            $('#loginStatus').html('');
            // Limpar o status de login
            sessionStorage.removeItem('loggedIn');
        }
    });

    // Manipulador de clique no botão 'Entrar' dentro do modal de login
    $('#btnLoginModal').click(function () {
        var email = $('#email').val();
        var password = $('#password').val();
        var errorMessage = $('#loginErrorMessage');

        if (email === 'leticia@eco.com.br' && password === '123456') {
            // Se as credenciais estiverem corretas, exibir mensagem de boas-vindas
            errorMessage.html('');
            $('#loginStatus').html('Bem-vinda, Letícia!');
            $('#btnLogin').text('Logout');
            $('#loginModal').modal('hide'); // Esconder o modal após o login
            // Armazenar o status de login na sessionStorage
            sessionStorage.setItem('loggedIn', 'true');
        } else {
            // Se as credenciais estiverem incorretas, exibir mensagem de erro
            errorMessage.html('E-mail ou senha incorretos. Tente novamente.');
        }
    });

    // Limpar mensagem de erro ao abrir o modal
    $('#loginModal').on('show.bs.modal', function () {
        $('#loginErrorMessage').html('');
    });

})(jQuery);