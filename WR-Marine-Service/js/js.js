		var SPY = function() {
		  function e(a, d, b) {
		    var c, f, g, h;
		    b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
		      d.innerHTML = g + String.fromCharCode(c);
		      c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
		        e(a, d, b);
		      }, 10)) : c++;
		    }, 5));
		  }
		  var k = {};
		  return k = {animationComplete:!1, text:function(a) {
		    this.animationComplete = !1;
		    a = document.getElementById(a);
		    for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
		      b.push(d.charCodeAt(c));
		    }
		    a.innerHTML = "";
		    e(b, a, 0);
		  }};
		}();

		$( 'document' ).ready(function() {
			$( "#comp" ).slideDown(1200);
			
		  $( '.london' ).fadeIn( 1200 );
		  
		  setTimeout( function() { 
		    $( '.header' ).fadeIn( 'slow' );
		      SPY.text( 'op' );
		  }, 2000);
		  
		});

		  $('#menu-btn').click(function () {
		    $('#btn-nav').slideToggle({
		      direction: "up"
		    }, 300);
		  });

		 $(document).ready(function() {
 
			$("#owl-demo").owlCarousel({
			  	autoPlay: true,
				pagination: false
			});

		    $( "#muda" ).click(function(){
			  $( "#text" ).text( "Uma empresa que foi criada com o intuito de promover o serviço de Port-captain sendo responsavelpelo supervisionamento das cargas donavio. Além de oferecer planejamento e calculo de estabilidade para uma perfeita estivagem e amarração de carga. Com os melhores profissionais do mercado atual à sua disposição, além de realizar um rapido agendamendo de estivagem de qualquer tipo de carga a sua escolha." );
			  $( "#muda" ).fadeOut(0);
			  $( "#volta" ).fadeIn(1000);
			});

			$( "#volta" ).click(function(){
			  $( "#text" ).text( "A WR é uma empresa altamente qualificada nos serviços de assessoria e Port Captain. Estamos interessados em prestar á sua empresa o melhor atendimento, com a qualidade que tem feito de nossa firma um símbolo de confiança, desde 1996. Em um ramo extremamente competitivo, procuramos oferecer o melhor serviço para o cliente, com profissionais que possuem anos de experiencia, tanto no interior quanto no exterior." );
			  $( "#volta" ).fadeOut(0);
			  $( "#muda" ).fadeIn(1000);
			});
		 
		});


		//scroll to top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

		// Este evendo é acionado após o carregamento da página
	    $(window).load(function() {
	      //Após a leitura da pagina o evento fadeOut do loader é acionado, esta com delay para ser perceptivo em ambiente fora do servidor.
	      $(".load").delay(2000).fadeOut("slow");
	    }); 