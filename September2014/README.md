
here the link to the project!

http://amadeimatti.github.io/progettofinale/iniziale.html





Organizzazione del codice: </br>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/iniziale.html">iniziale.html</a>: pagina html di avvio. Da questa schermata posso accendere e spegnere le luci e le lampadine, aprire le porte, creare diversi effetti(cambiare giorno/notte, attivare e disattivare la neve, accendere la televisione.
Sempre dalla pagina di avvio cliccando sul bottone "startf" viene caricata la casa con la camera Pointer Lock: mostra la visuale con il pointer Lock. E' possibile navigare all'interno della casa proprio come in un videogioco! </br>
La gui con i bottoni necessari per attivare e disattivare questi effetti è contenuto nel file
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/guiControls.js">guiControls.js</a> </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/addWindows.js">addWindows.js</a>: aggiunge le finestre alla casa </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/arredaCamera2.js">arredaCamera2.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/bagno1.js">bagno1.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/bagno2.js">bagno2.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/arredaCucina.js">arredaCucina.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/arredaIngresso.js">arredaIngresso.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/arredaSalone.js">arredaSalone.js</a>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/arredaMatteo.js">arredaMatteo.js</a> per arredare le varie stanze tramite il caricamento degli obj. </br>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/luci.js">luci.js</a> aggiunge le luci alla scena </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muri.js">muri.js</a>
aggiunge i muri esterni alla scena. 
 <a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muriInterni.js">muriInterni.js</a> :aggiunge le carte da parati alla scena
</br>
<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muriShape.js">muriShape.js</a>: metodo per creare parametricamente una carta da parati o un muro esterno tenendo conto dei buchi delle porte e delle finestre


<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/CopiaNoTelecamera.js">init.js</a> metodo principale di avvio della scena con gli oggetti </br>

pavimenti: aggiunge le mattonelle e iparquet alla scena porta: metodo parametrico per creare una porta terrazzo.js arreda e crea il terrazzo con la ringhiera il tavolo da ping pong e le piante 
windows.js metodo parametrico per creare una finestra sfruttando le proprietà di trasparenza dei materiali

Nella cartella sounds sono presenti diversi file con i rumori della casa
Nella cartella textures sono presenti le texture Nella cartella models sono presenti i file OBJ Tecniche utilizzate TEXTURES: per le pareti(in 2 dimensioni) con repeat e per l'esterno con l'aggiunta di BUMP 
AUDIO: per far partire i rumori
SPOTLIGHT: per le luci interne ed esterne dalla casa(luci generali e le lampadine posizionate nella scena)
GUI CONTROLS: per accendere e spegnere le luci
OBJ + MTL IMPORT per inserire all'interno della scena i dettagli principali dell'abitazione
CLICK SUGLI OGGETTI: per cliccare sulle porte per aprirle
TWEEN: per far calciare il pallone all'uomo in corridoio POINTER LOCK CAMERA: per fare il pointer lock TRACKBALL

====================
