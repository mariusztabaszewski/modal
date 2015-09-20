Podsumowanie:

Zadanie zrealizowałem korzystając z SASS i JADE.

Dzięki temu mogłem podzielić style na osobne części (podążałem ze wytycznymi proponowanymi przez SMACSS) oraz skorzystać ze zmiennych (kolory) i mixinów (breakpoint). Oddzieliłem layout od modułu (modal), osobno zapisałem też stany i podstawowe style (m.in. normalize) Wszystkie style finalnie zaimportowałem do jednego pliku SCSS.

Na osobne części podzieliłem również markup napisany w JADE i zaimportowałem do jednego pliku.

Wykorzystałem Grunta. Przekonwertowałem SCSS do CSS, dodałem odpowiednie prefixy i zminifikowałem plik. Plik JADE przekonwertowałem do HTML. Ponadto Grunt śledził zmiany w plikach i odświeżał przeglądarkę.

Pisząc kod kierowałem się zasadą 'mobile first'.

Modal wycentrowałem w następujący sposób: 'position:absolute', 'top: 50%'' i 'left: 50%'' oraz 'transform: translate(-50%, -50%)'.

Łatwo można również wycentrować element w pionie i poziomie korzystając z flexboxa. Wystarczyło by dać 'display: flex' elementowi zawierającemu (w tym wypadku .main-content) oraz 'justify-content: center' oraz 'align-items: center'.

Kolumny tekstu w widoku powyżej 768px ułożyłem za pomocą właściwości float.

Jeżeli w widoku powyżej 768px któraś z kolumn będzie miała więcej tekstu to pojawi się scrollbar. Osiągnąłem to ustawiając właściwość overflow na auto.

Krzyżyk w przycisku zamykającym okno utworzyłem za pomocą SVG. Potrzebny kod umieściłem na początku elementu body i wykorzystałem poźniej za pomocą elementu <use>.

Zadbałem o to żeby w sytuacji w której poruszamy się po stronie korzystając tylko z klawiatury było jasne który guzik w danym momencie możemy aktywować i ustawiłem obu guzikom odpowiedni outline, który pasuje do designu.

W kodzie dodałem niezbędne komentarze.