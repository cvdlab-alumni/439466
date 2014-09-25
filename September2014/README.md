
here the link to the project!

http://amadeimatti.github.io/progettofinale/iniziale.html

Questo è il link del progetto finale per il corso di <a href="http://cvdlab.org/"> grafica computazonale </a> presso l'Universita Roma Tre, svolto utilizzando <a href="https://github.com/cvdlab/lar-cc-js"> LAR </a> per la realizzazione del modello in python e alcune librerie di javascript.





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
aggiunge i muri esterni alla scena. </br>

 <a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muriInterni.js">muriInterni.js</a> :aggiunge le carte da parati alla scena
</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muriShape.js">muriShape.js</a>: metodo per creare parametricamente una carta da parati o un muro esterno tenendo conto dei buchi delle porte e delle finestre </br>


<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/CopiaNoTelecamera.js">init.js</a> metodo principale di avvio della scena con gli oggetti </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/pavimenti.js">pavimenti.js</a>: aggiunge le mattonelle e iparquet alla scena </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/porta.js">porta.js </a>: metodo parametrico per creare una porta </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/terrazzo.js"> terrazzo.js </a>
terrazzo.js arreda e crea il terrazzo con la ringhiera il tavolo da ping pong e le piante </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/windows.js"> windows.js </a> metodo parametrico per creare una finestra sfruttando le proprietà di trasparenza dei materiali </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/createDoors.js">createDoors.js </a>: metodo per creare le porte(definendo porta,perno e texture) e per aggiungerle alla scena </br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/elementi.js"> elementi.js </a>
:all'interno del metodo elementi vengono istanziati tutti gli oggetti di cui abbiamo bisogno per popolare la casa
</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/skybox.js"> skybox.js </a>
vengono definite le due skybox quella per il giorno e quella per la notte 
</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/muoviPerno.js"> muoviPerno.js </a> in questa classe viene definita l'animazione per aprire e chiudere le porte

</br>


<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/animations.js"> animations.js </a> in questa classe vengono definite alcune animazioni, come quella del pupazzo di neve, del ragazzo che dorme e della neve

</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/particels.js"> particels.js </a> in questa classe vengono definite il particleSystem, necessario per azionare la neve 
</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/picking.js"> picking.js </a> classe di supporto per l'intersect di alcuni oggetti(degli obj)

</br>

<a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/script/lampadine.js"> lampadine.js </a> in questa classe vengono definite le lampadine, luci proprie di ogni stanza e attivabili tramite gui

</br>

Contenuto delle altre cartelle:

Nella cartella <a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/sounds"> sounds </a> sono presenti diversi file con i rumori della casa
</br>

Nella cartella <a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/texture"> texture </a> sono presenti le texture  </br>

Nella cartella <a href="https://github.com/cvdlab-cg/439466/blob/master/September2014/WebContent/assets/models"> models </a> sono presenti i file OBJ Tecniche utilizzate TEXTURES: per le pareti(in 2 dimensioni) con repeat e per l'esterno con l'aggiunta di BUMP 

<font color="blue"> TECNOLOGIE UTILIZZATE </font> </br>

<a href="https://github.com/cvdlab/lar-cc-js"> LAR </a> per creare il modello della casa che ho poi importato all'interno del progetto
<font color="blue"> AUDIO </font>: per far partire i rumori
</br>

SPOTLIGHT: per le luci interne ed esterne dalla casa(luci generali e le lampadine posizionate nella scena)
</br>

GUI CONTROLS: per accendere e spegnere le luci e interagire con gli altri effetti della casa(animazioni)
</br>

OBJ + MTL IMPORT per inserire all'interno della scena i dettagli principali dell'abitazione
</br>

CLICK SUGLI OGGETTI: per cliccare sulle porte per aprirle </br>

TWEEN: per far calciare il pallone all'uomo in corridoio, muovere il pupazzo, l'uomo ed altro ancora </br>

POINTER LOCK CAMERA: per fare il pointer lock </br>

TRACKBALLCONTROLS </br>

SKYBOX </br>

VIDEOTEXTURE per la televisione </br>

MIRROR Ho utilizzato la libreria mirror.js per creare il laghetto ghiacciato accanto alla casa </br>

PARTICLES Per definire il particleSystem della neve

MESH e BUMP MESH(con repeat)

 
 
 


====================
