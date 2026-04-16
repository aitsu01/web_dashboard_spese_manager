# Web Dashboard Spese Manager

Dashboard web responsive per la gestione delle spese personali, realizzata come progetto finale con **HTML5**, **CSS3**, **Bootstrap 5.3**, **JavaScript**, manipolazione del **DOM**, **Git/GitHub** e integrazione di **Chart.js**.

**Tecnologie utilizzate:** HTML5 · CSS3 · Bootstrap 5.3 · JavaScript · DOM · localStorage · Chart.js · GitHub

> L'applicazione permette all'utente di aggiungere, modificare, eliminare, filtrare e cercare spese, con aggiornamento dinamico della dashboard e visualizzazione grafica per categoria.

## Obiettivo del progetto

L’obiettivo del progetto è simulare una piccola dashboard per la gestione delle spese personali.  
L’utente può inserire una spesa e visualizzarla nella pagina senza ricaricarla, grazie alla manipolazione dinamica del DOM tramite JavaScript.

Ogni spesa contiene almeno le seguenti informazioni:

- Descrizione
- Importo
- Categoria
- Data

## Funzionalità implementate

- Inserimento di una nuova spesa tramite form
- Validazione dei campi obbligatori
- Visualizzazione dinamica delle spese in tabella
- Modifica di una spesa esistente
- Eliminazione di una spesa con conferma
- Riepilogo generale con totale spese e numero spese
- Filtro per categoria
- Ricerca per descrizione
- Salvataggio dati con localStorage
- Grafico dinamico delle spese per categoria
- Scelta del tipo di grafico: ciambella, torta, barre, linea
- Messaggi di feedback migliorati per una UX più chiara

## Tecnologie utilizzate

- **HTML5** per la struttura semantica della pagina
- **CSS3** per la personalizzazione grafica
- **Bootstrap 5.3** per layout responsive e componenti UI
- **JavaScript** per logica applicativa e gestione eventi
- **Manipolazione del DOM** per aggiornare dinamicamente la dashboard
- **localStorage** per mantenere i dati dopo il refresh
- **Chart.js** per la visualizzazione grafica delle spese
- **Git e GitHub** per il versionamento del progetto

## Struttura del progetto

```bash
web_dashboard_spese_manager/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── img/


Interfaccia dell'applicazione

La dashboard è composta da diverse sezioni:

Header introduttivo
Form di inserimento spesa
Riepilogo generale
Grafico delle spese per categoria
Sezione filtri e ricerca
Tabella con elenco delle spese registrate
Funzionamento del progetto
1. Inserimento spese

L’utente compila il form con descrizione, importo, categoria e data. Alla conferma, la spesa viene aggiunta all’array JavaScript e mostrata immediatamente nella tabella.

2. Modifica spese

Ogni riga della tabella contiene un pulsante di modifica. Se l’utente decide di modificare una spesa, i dati vengono caricati nel form e possono essere salvati nuovamente.

3. Eliminazione spese

Ogni spesa può essere eliminata tramite il pulsante dedicato. Prima dell’eliminazione, viene mostrata una richiesta di conferma.

4. Riepilogo dinamico

Totale delle spese e numero complessivo vengono aggiornati automaticamente ogni volta che una spesa viene aggiunta, modificata o eliminata.

5. Filtri e ricerca

L’utente può filtrare le spese per categoria oppure cercarle per descrizione tramite input testuale.

6. Grafico interattivo

Le spese vengono aggregate per categoria e visualizzate con un grafico aggiornato dinamicamente. L’utente può scegliere il tipo di visualizzazione tra più opzioni.

Come avviare il progetto
Clonare la repository da GitHub
Aprire la cartella del progetto
Avviare il file index.html nel browser

git clone https://github.com/aitsu01/web_dashboard_spese_manager.git


Categorie utilizzate
Casa
Cibo
Trasporti
Tempo libero
Salute
Altro
Miglioramenti UX implementati
Messaggi di successo, errore e avviso più chiari
Conferma prima dell’eliminazione di una spesa
Indicazione esplicita quando una spesa è in modifica
Reset del form gestito correttamente
Feedback automatici temporizzati per una migliore esperienza utente


