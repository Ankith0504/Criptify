const it_IT = {
  language_name: "Italiano",
  
  // Menu
  sub_title: "Una semplice, veloce e sicura crittografia di file in locale",
  home: "Home",
  about: "Dettagli",

  // About page menu
  introduction: "Introduzione",
  features: "Caratteristiche",
  installation: "Installazione",
  usage: "Utilizzo",
  limitations: "Limitazioni",
  best_practices: "Consigli sull'utilizzo",
  faq: "Domande frequenti",
  technical_details: "Dettagli tecnici",
  changelog: "Registro modifiche",
  donation_message: "Ti piace Criptify? Puoi donare per supportare il progetto.",

  // Settings
  settings: "Impostazioni",
  language: "Lingua",
  change_language: "Cambia lingua interfaccia",
  change_appearance: "Cambia aspetto",
  language_changed: "Lingua cambiata! - Necessario ricaricare la pagina per applicare le modifiche.",
  help_translate: "Non trovi la tua lingua? puoi dare una mano a tradurre quest'app seguendo la guida di traduzione su github.",
  reload: "RICARICA",
  dark_mode: "Tema Scuro",
  close: "Chiudi",
  reset: "Resetta",
  guide: "Guida",
  multiple_tabs_alert: "Avviso schede multiple",
  multiple_tabs_alert_notice_one: "Sembra che Criptify sia già aperto in un'altra finestra/scheda.",
  multiple_tabs_alert_notice_two: "Per favore evita di crittare/decrittare file in multiple schede contemporaneamente.",
  understand: "HO CAPITO",

  // Common
  file: "il file",
  files: "i file",
  password: "Password",
  public_key: "Chiave pubblica",
  private_key: "Chiave privata",
  drag_drop: "Trascina qui o Scegli il file",
  drag_drop_files: "Trascina qui o Scegli i file",
  browse_file: "Scegli File",
  browse_files: "Scegli File",
  change_file: "Cambia file",
  add_files: "Aggiungi file",
  next: "Avanti",
  back: "Indietro",
  error: "Errore",
  required: "Obbligatorio",
  success: "Completato",
  show_password: "Mostra Password",
  copy_password: "Copia Password",
  password_copied: "Password copiata!",
  show_private_key: "Mostra chiave pubblica",
  load_public_key: "Carica chiave pubblica",
  load_private_key: "Carica chiave privata",
  short_password: "Inserisci una password che abbia una lunghezza minima di 12 caratteri, oppure utilizza il generatore casuale.",
  wrong_public_key: "Chiave pubblica errata",
  wrong_private_key: "Chiave privata errata",
  invalid_keys_input: "Input chiave non valido.",
  invalid_key_pair: "Questa coppia di chiavi non è valida! Per favore scegli le chiavi per parti differenti.",
  ready_to_download: "è stato caricato correttamente ed è pronto al download!",
  files_ready_to_download: "i file sono stati caricati con successo e sono pronti al download!",
  downloading_file: "In download...",
  checking_file: "Controllo file...",
  page_close_alert: "Non chiudere la pagina mentre i file sono in download!",
  offline_note: "I file non sono caricati su alcun server, tutto viene svolto offline nel tuo browser.",
  
  // Password Strength Check
  very_weak: "Molto Debole (facile da indovinare)",
  weak: "Debole",
  moderate: "Media",
  good: "Buona",
  strong: "Forte",
  crackTimeEstimation: "tempo di calcolo stimato per crackare la password:",
  less_second: "meno di un secondo",
  seconds: "secondi",
  minutes: "minuti",
  hours: "ore",
  days: "giorni",
  months: "mesi",
  years: "anni",
  centuries: "secoli",

  // Encryption
  encryption: "Crittografia",
  drop_file_enc: "Trascina i file da crittografare",
  choose_files_enc: "Scegli i file da crittografare",
  enter_password_enc: "Inserisci password",
  enter_keys_enc: "Inserisci la chiave pubblica del destinatario e la tua chiave privata",
  password_strength: "Sicurezza della password",
  choose_strong_password: "Scegli una password sicura",
  generate_password: "Genera Password",
  recipient_public_key: "Chiave pubblica del destinatario",
  enter_recipient_public_key: "Inserisci la chiave pubblica del destinatario",
  your_private_key_enc: "La tua chiave privata",
  enter_private_key_enc: "Inserisci la tua chiave privata",
  encrypted_files: "File crittografati",
  download_encrypted_files: "Scarica i file crittografati",
  success_downloaded_files_enc: "Hai scaricato con successo i file crittografati!",
  encrypt_more_files: "Cifra altri file",
  create_shareable_link: "Crea link condivisibile",
  create_shareable_link_tooltip: "Crea un link contenente la tua chiave pubblica",
  create_shareable_link_note: "Quest link verrà generato offline.",
  create_shareable_link_copied: "Link condivisibile copiato!",
  copy_link: "Copia link",
  after_enc_note_one: "Devi condividere questo file assieme alla tua chiave pubblica per permettere al destinatario di decriptarlo.",
  after_enc_note_two: "Puoi creare un link contenente la tua chiave pubblica così da non doverti preoccupare di comunicarla al destinatario.",
  testing_password: "Test della password...",
  testing_keys: "Test delle chiavi...",

  // Decrypion
  decryption: "Decrittografia",
  drop_file_dec: "Trascina i file da decrittografare",
  choose_files_dec: "Scegli i file da decrittografare",
  sender_key_loaded: "La chiave pubblica del mittente è caricata, ora scegli il file crittografato.",
  recipient_key_loaded: "La chiave pubblica del destinatario è caricata, ora scegli un file da crittografare",
  file_not_encrypted_corrupted: "Questo file non è stato crittografato con Criptify o potrebbe essere corrotto!",
  old_version: "Questo file è stato crittografato usando una vecchia versione di Criptify, puoi decrittografarlo visitando l'app v1.",
  file_mixup: "I file seezionati per la decrittografia devono essere cifrati usando lo stesso metodo, tramite password oppure chiave pubblica. Scegli file che soddisfino questo requisito.",
  enter_password_dec: "Inserisci la password per decrittografare",
  enter_keys_dec: "Inserisci la chiave pubblica del mittente e la tua chiave privata",
  wrong_password: "Password Errata",
  file_has_wrong_password: "la password è sbagliata, il test password è stato interrotto. Assicurati che tutti i file utilizzino la stessa password di decrittografia.",
  file_has_wrong_keys: "le chiavi sono sbagliate, il test delle chiavi è stato interrotto. Assicurati che tutti i file utilizzino la stessa chiave di decrittografia.",
  sender_public_key: "Chiave pubblica del mittente",
  enter_sender_public_key: "Inserisci la chiave pubblica del mittente",
  your_private_key_dec: "La tua chiave privata",
  enter_private_key_dec: "Inserisci la tua chiave privata",
  decrypted_files: "File decrittografati",
  download_decrypted_files: "Scarica file decrittografati",
  success_downloaded_files_dec: "Hai scaricato con successo i file decrittografati!",
  decrypt_other_files: "Decripta altri file",


  // Limited
  choose_file_enc: "Scegli un file da crittografare",
  choose_file_dec: "Scegli un file da decrittografare",
  encrypted_file: "File crittografati",
  decrypted_file: "File decrittografati",
  download_encrypted_file: "Scarica file crittografati",
  download_decrypted_file: "Scarica file decrittografati",
  success_downloaded_file_enc: "Hai scaricato con successo i file crittografati!",
  success_downloaded_file_dec: "Hai scaricato con successo i file decrittografati!",
  encrypt_another_file: "Cripta altri file",
  decrypt_another_file: "Decripta altri file",
  limited_safari: "I browser Safari hanno una esperienza d'uso limitata (file singoli, 1GB)",
  limited_mobile: "I browser mobile hanno una esperienza d'uso limitata (file singoli, 1GB)",
  limited_private: "Hai una esperienza d'uso limitata (file singoli, 1GB) a causa della navigazione privata.",
  file_too_big: "Il file è troppo grande!",
  choose_file_1gb: "Scegli un file fino a 1GB.",
  encrypt_file: "Cripta file",
  encrypting_file: "Crittografia in corso...",
  decrypting_file: "Decrittografia in corso...",
  page_close_alert_enc: "Non chiudere la pagina web durante la crittografia!",
  success_encrypted: "Il file è stato crittografato con successo!",
  page_close_alert_dec: "Non chiudere la pagina web durante la decrittografia!",
  success_decrypted: "Il file è stato decrittografato con successo!",
  download_file: "Scarica File",

  // Keypair generation panel
  generate_now_button: "Genera ora",
  generate_key_pair_button: "Genera coppia chiavi",
  generate_another_key_pair_button: "Genera una nuova coppia",
  key_pair_question: "Non hai le chiavi pubbliche/private?",
  key_pair_generation_title: "Generazione chiave pubblica privata:",
  download_public_key: "Scarica chiave pubblica",
  download_private_key: "Scarica chiave privata",
  generate_public_key: "Genera chiave pubblica",
  generate_private_key: "Genera chiave privata",
  show_private_key: "Mostra chiave privata",
  why_need_private_key: "Perché la mia chiave privata è necessaria?",
  private_key_notice: "Non condividere MAI la tua chiave privata! Solo le chiavi pubbliche dovrebbero essere scambiate.",
  generate_qr_code: "Genera codice QR",
  qr_code_note_one: "Questo codice QR contiene la tua chiave pubblica. Dopo la scansione, il dispositivo ti reindirizzera all'app e compilerà la chiave pubblica in automatico.",
  qr_code_note_two: "Puoi condividere questo codice QR o link con gli altri, invece di farli inserire manualmente la tua chiave pubblica quando criptano i file.",
  qr_code_note_three: "Questo codice QR è stato generato offline.",
  
};

export default it_IT;