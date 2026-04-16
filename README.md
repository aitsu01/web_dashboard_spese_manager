<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - Web Dashboard Spese Manager</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f5f7fb;
      color: #212529;
    }

    .container {
      max-width: 1000px;
      margin: 40px auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    h1, h2, h3 {
      color: #0d6efd;
      margin-top: 1.5rem;
    }

    h1 {
      margin-top: 0;
      font-size: 2rem;
      border-bottom: 2px solid #e9ecef;
      padding-bottom: 12px;
    }

    p {
      margin: 12px 0;
    }

    ul {
      margin: 10px 0 20px 20px;
    }

    li {
      margin-bottom: 8px;
    }

    code, pre {
      font-family: Consolas, Monaco, monospace;
    }

    pre {
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      padding: 16px;
      border-radius: 10px;
      overflow-x: auto;
    }

    .badge {
      display: inline-block;
      padding: 6px 12px;
      margin: 4px 6px 4px 0;
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: bold;
      background-color: #e7f1ff;
      color: #0d6efd;
    }

    .section {
      margin-bottom: 30px;
    }

    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #dee2e6;
      color: #6c757d;
      font-size: 0.95rem;
    }

    @media (max-width: 768px) {
      .container {
        margin: 20px;
        padding: 24px;
      }

      h1 {
        font-size: 1.6rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Web Dashboard Spese Manager</h1>

    <p>
      Dashboard web responsive per la gestione delle spese personali, realizzata come progetto finale
      utilizzando <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap 5.3</strong>,
      <strong>JavaScript</strong>, manipolazione del <strong>DOM</strong>, <strong>Git</strong>
      e integrazione di <strong>Chart.js</strong>.
    </p>

    <div class="section">
      <span class="badge">HTML5</span>
      <span class="badge">CSS3</span>
      <span class="badge">Bootstrap 5.3</span>
      <span class="badge">JavaScript</span>
      <span class="badge">DOM</span>
      <span class="badge">localStorage</span>
      <span class="badge">Chart.js</span>
      <span class="badge">GitHub</span>
    </div>

    <div class="section">
      <h2>Obiettivo del progetto</h2>
      <p>
        L’applicazione consente all’utente di registrare, visualizzare, modificare ed eliminare
        spese personali all’interno di una dashboard semplice, moderna e responsive.
      </p>
      <p>Ogni spesa contiene le seguenti informazioni:</p>
      <ul>
        <li>Descrizione</li>
        <li>Importo</li>
        <li>Categoria</li>
        <li>Data</li>
      </ul>
    </div>

    <div class="section">
      <h2>Funzionalità principali</h2>
      <ul>
        <li>Inserimento di una nuova spesa tramite form</li>
        <li>Validazione dei campi obbligatori</li>
        <li>Visualizzazione dinamica delle spese nella tabella</li>
        <li>Eliminazione di una spesa</li>
        <li>Modifica di una spesa esistente</li>
        <li>Riepilogo dinamico con totale e numero spese</li>
        <li>Filtro per categoria</li>
        <li>Ricerca per descrizione</li>
        <li>Salvataggio dati con localStorage</li>
        <li>Grafico dinamico delle spese per categoria</li>
        <li>Scelta del tipo di grafico: ciambella, torta, barre, linea</li>
      </ul>
    </div>

    <div class="section">
      <h2>Tecnologie utilizzate</h2>
      <ul>
        <li><strong>HTML5</strong> per la struttura semantica della pagina</li>
        <li><strong>CSS3</strong> per la personalizzazione grafica</li>
        <li><strong>Bootstrap 5.3</strong> per layout responsive e componenti UI</li>
        <li><strong>JavaScript</strong> per la logica applicativa</li>
        <li><strong>DOM Manipulation</strong> per aggiornare dinamicamente la pagina</li>
        <li><strong>localStorage</strong> per mantenere i dati al refresh</li>
        <li><strong>Chart.js</strong> per la visualizzazione grafica delle spese</li>
        <li><strong>Git e GitHub</strong> per il versionamento del progetto</li>
      </ul>
    </div>

    <div class="section">
      <h2>Struttura del progetto</h2>
      <pre><code>web_dashboard_spese_manager/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── img/</code></pre>
    </div>

    <div class="section">
      <h2>Come avviare il progetto</h2>
      <ol>
        <li>Clonare la repository dal proprio account GitHub</li>
        <li>Aprire la cartella del progetto</li>
        <li>Aprire il file <code>index.html</code> nel browser</li>
      </ol>

      <pre><code>git clone https://github.com/aitsu01/web_dashboard_spese_manager.git</code></pre>
    </div>

    <div class="section">
      <h2>Gestione Git</h2>
      <p>
        Il progetto è stato sviluppato con Git tramite commit progressivi per documentare le varie
        fasi di realizzazione.
      </p>

      <p>Esempi di commit:</p>
      <ul>
        <li>first commit</li>
        <li>crea struttura iniziale dashboard</li>
        <li>aggiunge stile base con bootstrap e css</li>
        <li>implementa logica aggiunta modifica eliminazione e filtri</li>
        <li>aggiunge localStorage e completa la logica dashboard</li>
        <li>migliora stile grafico e responsive layout</li>
        <li>aggiunge grafico spese con chart js</li>
        <li>migliora grafico e aggiunge selezione tipo chart</li>
      </ul>
    </div>

    <div class="section">
      <h2>Categorie utilizzate</h2>
      <ul>
        <li>Casa</li>
        <li>Cibo</li>
        <li>Trasporti</li>
        <li>Tempo libero</li>
        <li>Salute</li>
        <li>Altro</li>
      </ul>
    </div>

    <div class="section">
      <h2>Punti di forza del progetto</h2>
      <ul>
        <li>Interfaccia semplice, moderna e responsive</li>
        <li>Codice JavaScript organizzato e leggibile</li>
        <li>Uso dinamico del DOM</li>
        <li>Persistenza dati tramite localStorage</li>
        <li>Visualizzazione grafica interattiva delle spese</li>
      </ul>
    </div>

    <div class="section">
      <h2>Possibili sviluppi futuri</h2>
      <ul>
        <li>Ordinamento per importo o data</li>
        <li>Esportazione dei dati in CSV o PDF</li>
        <li>Gestione di budget mensili</li>
        <li>Grafici aggiuntivi</li>
        <li>Dark mode</li>
      </ul>
    </div>

    <div class="section">
      <h2>Autore</h2>
      <p>Progetto realizzato da <strong>[INSERISCI NOME E COGNOME]</strong>.</p>
    </div>

    <div class="footer">
      <p>
        Progetto finale realizzato per il modulo di sviluppo web:
        dashboard per la gestione delle spese personali.
      </p>
    </div>
  </div>
</body>
</html>