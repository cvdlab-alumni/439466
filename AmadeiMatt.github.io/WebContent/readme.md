Organizzazione del codice:

iniziale.html: pagina html di avvio.
Da questa schermata posso accendere e spegnere le luci e le lampadine, aprire le porte e far partire la musica iniziale(di Toy Story)
Sempre dalla pagina di avvio cliccando sul bottone "IniziaLaVisita" viene caricata la casa con la camera Pointer Lock
playground.html: mostra la visuale con il pointer Lock

Dentro la cartella assets/script c'è
addWindows: aggiunge le finestre alla casa
arredaCamera2,bagno1,bagno2,arredaCamera3,arredaCucina,arredaIngresso,arredaSalone,arredaMatteo per arredare le varie stanze,tramite
il caricamento degli obj
luci :aggiunge le luci alla scena
muri:aggiunge i muri esterni alla scena
muriInterni: aggiunge le carte da parati alla scena
muriShape: metodo per creare parametricamente una carta da parati o un muro esterno
tenendo conto dei buchi delle porte e delle finestre
NoTelecamera: metodo principale di avvio della scena con gli oggetti
pavimenti: aggiunge le mattonelle e iparquet alla scena
porta: metodo parametrico per creare una porta
terrazzo.js arreda e crea il terrazzo con la ringhiera il tavolo da ping pong e le piante
totti.js aggiunge alla scena il poster di totti
windows.js metodo parametrico per creare una finestra sfruttando le proprietà di trasparenza
dei materiali

Nella cartella sounds è presente il file mp3 con la colonna sonora di ToyStory, che parte al clic del mouse
Nella cartella textures sono presenti le texture
Nella cartella models sono presenti i file OBJ
Tecniche utilizzate
TEXTURES: per le pareti(in 2 dimensioni) e per l'esterno con l'aggiunta di BUMP
AUDIO: per far partire la colonna sonora
SPOTLIGHT: per le luci interne ed esterne dalla casa(luci generali e le lampadine posizionate nella scena)
GUI CONTROLS: per accendere e spegnere le luci
OBJ + MTL IMPORT per inserire all'interno della scena i dettagli principali dell'abitazione
CLICK SUGLI OGGETTI: per cliccare sulle porte per aprirle
TWEEN: utilizzato per far muovere la porta d'ingresso(la casa non è infestata dai fantasmi) e far calciare il pallone
all'uomo in corridoio
POINTER LOCK CAMERA: per fare il pointer lock
TRACKBALL

