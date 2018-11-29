'use strict';
(function () {
    // tworzymy funkcje konstruujaca, ktora bedzie tworzyla nowe przyciski
    function Button(text) {
        //ustawiamy poczatkowa wartosc text w nowych obiektach i dodajmy możliwość tworzenia obiektu bez podania argumentu, wartosc domyslna to Hello
        this.text = text || 'Hello'; 
    };

    //Dodajemy metodę create tworzącą przycisk na stronie (własnych funkcjach konstruujących.)
    Button.prototype = {
        create: function() { //Ta metoda ma za zadanie tworzyć nowe przyciski na stronie - w tym celu posłużymy się poznaną wcześniej metodą jQuery.
            var self = this; //w momencie, kiedy  funkcja jest parametrem innej funkcji, nastąpi utrata kontekstu, dlatego musimy wskazać ten kontekst za pomocą zmiennej self. Ustawmy zmienną self na samej górze metody create.
            this.$element = $('<button>');
            this.$element.text(this.text); //ustawiamy text na przycisku za pomocą jQuery)
            //metoda, która po kliknięciu w przycisk wyświetli tekst na ekranie komputera
            this.$element.click(function() {
                alert(self.text);
            }); //Na koniec należy umieścić element w drzewie DOM!
            $('body').append(this.$element);
        }
    }

    var btn1 = new Button('Hello!'); //tworzenia pierwszej instancji
    btn1.create(); //wywołajmy metodę create w celu stworzenia elementu:

})();