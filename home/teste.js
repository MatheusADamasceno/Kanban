
    $(document).ready(function () {
        // Função de contagem animada
        function startCounting($element) {
            var countTo = $element.attr('data-to'),
                duration = $element.attr('data-speed');

            $({ countNum: $element.text() }).animate({
                countNum: countTo
            },
            {
                duration: parseInt(duration),
                easing: 'linear',
                step: function () {
                    $element.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $element.text(this.countNum);
                }
            });
        }

        // Configuração do Intersection Observer
        let options = {
            root: null, // Usa o viewport como root
            rootMargin: '0px',
            threshold: 0.5 // Ativa quando 50% do elemento estiver visível
        };

        // Função que será chamada quando o elemento entrar em visão
        let observerCallback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let $element = $(entry.target);
                    if (!$element.hasClass('counted')) {
                        startCounting($element);
                        $element.addClass('counted'); // Evita que conte mais de uma vez
                    }
                }
            });
        };

        let observer = new IntersectionObserver(observerCallback, options);

        // Observa todos os contadores na página
        $('.js-counter').each(function () {
            observer.observe(this);
        });
    });
