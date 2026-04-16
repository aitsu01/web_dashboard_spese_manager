# Web Dashboard Spese Manager

Dashboard web responsive per la gestione delle spese personali, realizzata come progetto finale con **HTML5**, **CSS3**, **Bootstrap 5.3**, **JavaScript**, manipolazione del **DOM**, **Git/GitHub** e integrazione di **Chart.js**.

## Descrizione del progetto

L’applicazione permette all’utente di gestire le proprie spese personali tramite una dashboard semplice, moderna e responsive.  
Ogni spesa può essere inserita, modificata, eliminata e visualizzata dinamicamente nella pagina senza ricaricare il browser.

Ogni voce contiene:

- descrizione
- importo
- categoria
- data

Il progetto è stato sviluppato come **single page application** lato client, senza backend.

---

## Funzionalità implementate

### Gestione spese
- inserimento di una nuova spesa tramite form
- validazione dei campi obbligatori
- visualizzazione dinamica delle spese nella tabella
- modifica di una spesa esistente
- eliminazione di una spesa con conferma

### Riepilogo dinamico
- totale complessivo delle spese
- numero totale delle spese inserite

### Filtri e strumenti di ricerca
- filtro per categoria
- ricerca per descrizione
- ordinamento per:
  - data più recente
  - data più vecchia
  - importo crescente
  - importo decrescente

### Persistenza dati
- salvataggio delle spese con `localStorage`

### Grafico interattivo
- grafico dinamico delle spese per categoria con **Chart.js**
- possibilità di selezionare il tipo di grafico:
  - ciambella
  - torta
  - barre
  - linea

### Esperienza utente
- messaggi di feedback per aggiunta, modifica, eliminazione e annullamento
- conferma prima dell’eliminazione
- indicazione chiara quando una spesa è in modifica
- miglioramento del layout responsive

---

## Tecnologie utilizzate

- **HTML5** per la struttura semantica della pagina
- **CSS3** per la personalizzazione grafica
- **Bootstrap 5.3** per layout responsive e componenti UI
- **JavaScript** per logica applicativa e gestione eventi
- **DOM Manipulation** per aggiornare dinamicamente la dashboard
- **localStorage** per mantenere i dati al refresh
- **Chart.js** per la visualizzazione grafica delle spese
- **Git e GitHub** per il versionamento del progetto

---

## Struttura del progetto

```bash
web_dashboard_spese_manager/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js



Struttura dell’interfaccia

La dashboard è composta da:

header introduttivo
form per l’inserimento di una nuova spesa
riepilogo generale con totale e numero spese
grafico delle spese per categoria
sezione filtri, ricerca e ordinamento
tabella dinamica con elenco delle spese registrate



Come funziona
1. Inserimento di una spesa

L’utente compila il form con:

descrizione
importo
categoria
data

Dopo il submit, la spesa viene aggiunta all’array JavaScript, salvata in localStorage e mostrata subito nella tabella.

2. Modifica di una spesa

Ogni riga contiene un pulsante Modifica.
Quando viene cliccato:

i dati della spesa vengono caricati nel form
il pulsante principale cambia in Salva modifica
al salvataggio, la spesa viene aggiornata dinamicamente
3. Eliminazione di una spesa

Ogni riga contiene un pulsante Elimina.
Prima dell’eliminazione, viene mostrato un messaggio di conferma.
Se confermata:

la spesa viene rimossa dall’array
il riepilogo viene aggiornato
il grafico viene aggiornato
la tabella viene aggiornata
4. Filtri e ricerca

L’utente può:

filtrare per categoria
cercare per descrizione
ordinare l’elenco per importo o data
5. Grafico

Le spese vengono raggruppate per categoria e mostrate in un grafico aggiornato automaticamente a ogni modifica dei dati.



Categorie utilizzate

Le categorie disponibili sono:

Casa
Cibo
Trasporti
Tempo libero
Salute
Altro



Caratteristiche responsive

Il progetto è stato progettato per adattarsi a:

desktop
tablet
smartphone

Sono stati curati:

layout flessibile con Bootstrap
adattamento del form
leggibilità dei riepiloghi
tabella scrollabile in mobile
miglior gestione delle azioni nella colonna finale


Come avviare il progetto
Clonare la repository:

git clone https://github.com/aitsu01/web_dashboard_spese_manager.git


Aprire la cartella del progetto
Avviare il file index.html nel browser


