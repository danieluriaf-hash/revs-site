const languages = {
  es: 'Español', en: 'English', fr: 'Français', de: 'Deutsch',
  it: 'Italiano', pt: 'Português', nl: 'Nederlands', fi: 'Suomi',
  sv: 'Svenska', zh: '简体中文', ja: '日本語', pl: 'Polski', ru: 'Русский'
};

const common = {
  es: ['Inicio', 'Privacidad', 'Soporte', 'Idioma'],
  en: ['Home', 'Privacy', 'Support', 'Language'],
  fr: ['Accueil', 'Confidentialité', 'Assistance', 'Langue'],
  de: ['Start', 'Datenschutz', 'Support', 'Sprache'],
  it: ['Home', 'Privacy', 'Assistenza', 'Lingua'],
  pt: ['Início', 'Privacidade', 'Suporte', 'Idioma'],
  nl: ['Start', 'Privacy', 'Ondersteuning', 'Taal'],
  fi: ['Etusivu', 'Tietosuoja', 'Tuki', 'Kieli'],
  sv: ['Start', 'Integritet', 'Support', 'Språk'],
  zh: ['首页', '隐私', '支持', '语言'],
  ja: ['ホーム', 'プライバシー', 'サポート', '言語'],
  pl: ['Strona główna', 'Prywatność', 'Pomoc', 'Język'],
  ru: ['Главная', 'Конфиденциальность', 'Поддержка', 'Язык']
};

const privacy = {
  es: {
    title: 'Política de privacidad', updated: 'Última actualización: 2 de agosto de 2026',
    intro: 'Esta política explica cómo Revs trata los datos personales en sus aplicaciones para Android e iOS. El responsable del tratamiento es Daniel Uría Fernández. Contacto: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Datos que tratamos', '<ul><li><strong>Cuenta:</strong> identificador, correo electrónico, nombre de usuario y datos de autenticación de correo, Google o Apple.</li><li><strong>Perfil y contenido:</strong> nombre visible, avatar, biografía, vehículos, fotografías, etiquetas, rutas y publicaciones.</li><li><strong>Ubicación precisa:</strong> posición del dispositivo cuando concedes permiso y activas las funciones del mapa, navegación, rutas, aparcamiento o presencia pública/social.</li><li><strong>Actividad social y seguridad:</strong> amistades, visibilidad, denuncias, bloqueos y datos técnicos necesarios para proteger y diagnosticar el servicio.</li></ul>'],
      ['2. Finalidades y base jurídica', '<p>Usamos los datos para crear y autenticar tu cuenta, guardar tu perfil y garaje, prestar mapas y navegación, grabar rutas, compartir contenido según la audiencia elegida, prevenir abusos y cumplir obligaciones legales. El tratamiento se basa en la prestación del servicio, tu consentimiento para permisos opcionales y nuestro interés legítimo en proteger Revs.</p>'],
      ['3. Ubicación y visibilidad', '<p>La ubicación no se hace pública por defecto. Cuando eliges visibilidad pública o solo amigos, aceptas compartir tu ubicación precisa con esa audiencia mientras el modo esté activo. Puedes aparcar, ocultar vehículos, detener la grabación o volver a modo invisible en cualquier momento.</p>'],
      ['4. Proveedores y transferencias', '<p>Revs utiliza <a href="https://supabase.com/privacy">Supabase</a> para autenticación, base de datos y almacenamiento; <a href="https://www.mapbox.com/legal/privacy">Mapbox</a> para mapas; Google y Apple para inicio de sesión y distribución; y Brevo para correos transaccionales. Pueden existir transferencias internacionales con las garantías aplicables. Revs no vende datos ni los usa para publicidad dirigida.</p>'],
      ['5. Conservación y eliminación', '<p>Conservamos los datos mientras mantengas la cuenta y durante el tiempo necesario para seguridad u obligaciones legales. Puedes eliminarla permanentemente en <strong>Ajustes → Cuenta y seguridad → Eliminar cuenta</strong>.</p>'],
      ['6. Derechos', '<p>Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad escribiendo al contacto anterior. También puedes retirar permisos desde Android o iOS. En España puedes reclamar ante la <a href="https://www.aepd.es">AEPD</a>.</p>'],
      ['7. Seguridad, menores y cambios', '<p>Aplicamos medidas técnicas y organizativas, aunque ningún sistema conectado es infalible. Revs no está dirigida a menores de 14 años. Publicaremos aquí cualquier actualización de esta política.</p>']
    ], contact: 'Contacto de privacidad'
  },
  en: {
    title: 'Privacy Policy', updated: 'Last updated: August 2, 2026',
    intro: 'This policy explains how Revs processes personal data in its Android and iOS apps. The data controller is Daniel Uría Fernández. Contact: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Data we process', '<ul><li><strong>Account:</strong> identifier, email address, username and authentication data from email, Google or Apple.</li><li><strong>Profile and content:</strong> display name, avatar, biography, vehicles, photos, tags, routes and posts.</li><li><strong>Precise location:</strong> device position when you grant permission and enable map, navigation, route recording, parking or public/social presence features.</li><li><strong>Social activity and security:</strong> friendships, visibility settings, reports, blocks and technical data required to protect and diagnose the service.</li></ul>'],
      ['2. Purposes and legal basis', '<p>We use data to create and authenticate your account, save your profile and garage, provide maps and navigation, record routes, share content with your chosen audience, prevent abuse and meet legal obligations. Processing relies on providing the service, your consent for optional permissions and our legitimate interest in protecting Revs.</p>'],
      ['3. Location and visibility', '<p>Your location is not public by default. When you choose public or friends-only visibility, you agree to share your precise location with that audience while the mode is active. You can park or hide vehicles, stop recording or return to invisible mode at any time.</p>'],
      ['4. Providers and transfers', '<p>Revs uses <a href="https://supabase.com/privacy">Supabase</a> for authentication, database and storage; <a href="https://www.mapbox.com/legal/privacy">Mapbox</a> for maps; Google and Apple for sign-in and distribution; and Brevo for transactional email. International transfers may occur under applicable safeguards. Revs does not sell personal data or use it for targeted advertising.</p>'],
      ['5. Retention and deletion', '<p>We retain data while your account remains active and as needed for security or legal duties. You can permanently delete it in <strong>Settings → Account and security → Delete account</strong>.</p>'],
      ['6. Your rights', '<p>You may request access, correction, deletion, restriction, objection or portability by emailing the contact above. You can also withdraw permissions in Android or iOS settings and complain to your competent data protection authority.</p>'],
      ['7. Security, children and changes', '<p>We apply technical and organisational safeguards, although no connected system is infallible. Revs is not intended for children under 14. Updates to this policy will be published here.</p>']
    ], contact: 'Privacy contact'
  },
  fr: {
    title: 'Politique de confidentialité', updated: 'Dernière mise à jour : 2 août 2026',
    intro: 'Cette politique explique comment Revs traite les données personnelles dans ses applications Android et iOS. Le responsable du traitement est Daniel Uría Fernández. Contact : <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Données traitées', '<ul><li><strong>Compte :</strong> identifiant, e-mail, nom d’utilisateur et données d’authentification par e-mail, Google ou Apple.</li><li><strong>Profil et contenu :</strong> nom affiché, avatar, biographie, véhicules, photos, tags, itinéraires et publications.</li><li><strong>Localisation précise :</strong> position de l’appareil lorsque vous accordez l’autorisation et activez la carte, la navigation, l’enregistrement d’itinéraires, le stationnement ou la présence sociale.</li><li><strong>Activité sociale et sécurité :</strong> amis, visibilité, signalements, blocages et données techniques nécessaires à la protection du service.</li></ul>'],
      ['2. Finalités et base juridique', '<p>Nous utilisons ces données pour fournir et sécuriser Revs, authentifier votre compte, enregistrer votre profil, votre garage et vos itinéraires, afficher les cartes et partager le contenu selon l’audience choisie. Le traitement repose sur le service demandé, votre consentement aux autorisations facultatives et notre intérêt légitime à protéger Revs.</p>'],
      ['3. Localisation et visibilité', '<p>Votre localisation n’est pas publique par défaut. En choisissant « public » ou « amis uniquement », vous acceptez de partager votre localisation précise avec cette audience tant que ce mode est actif. Vous pouvez revenir au mode invisible à tout moment.</p>'],
      ['4. Prestataires', '<p>Revs utilise <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple et Brevo. Des transferts internationaux peuvent avoir lieu avec les garanties applicables. Revs ne vend pas vos données et ne les utilise pas pour la publicité ciblée.</p>'],
      ['5. Conservation et suppression', '<p>Les données sont conservées tant que votre compte est actif et selon les besoins de sécurité ou légaux. Vous pouvez supprimer définitivement le compte dans <strong>Réglages → Compte et sécurité → Supprimer le compte</strong>.</p>'],
      ['6. Vos droits', '<p>Vous pouvez demander l’accès, la rectification, l’effacement, la limitation, l’opposition ou la portabilité par e-mail et retirer les autorisations dans Android ou iOS.</p>'],
      ['7. Sécurité, mineurs et modifications', '<p>Nous appliquons des mesures de protection appropriées. Revs ne s’adresse pas aux enfants de moins de 14 ans. Toute mise à jour sera publiée ici.</p>']
    ], contact: 'Contact confidentialité'
  },
  de: {
    title: 'Datenschutzerklärung', updated: 'Zuletzt aktualisiert: 2. August 2026',
    intro: 'Diese Erklärung beschreibt, wie Revs personenbezogene Daten in den Android- und iOS-Apps verarbeitet. Verantwortlicher ist Daniel Uría Fernández. Kontakt: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Verarbeitete Daten', '<ul><li><strong>Konto:</strong> Kennung, E-Mail-Adresse, Benutzername und Anmeldedaten von E-Mail, Google oder Apple.</li><li><strong>Profil und Inhalte:</strong> Anzeigename, Avatar, Biografie, Fahrzeuge, Fotos, Tags, Routen und Beiträge.</li><li><strong>Genauer Standort:</strong> Geräteposition, wenn du die Berechtigung erteilst und Karten-, Navigations-, Routen-, Park- oder Präsenzfunktionen aktivierst.</li><li><strong>Soziale Aktivität und Sicherheit:</strong> Freundschaften, Sichtbarkeit, Meldungen, Sperren und technische Schutzdaten.</li></ul>'],
      ['2. Zwecke und Rechtsgrundlage', '<p>Die Daten werden zur Bereitstellung und Sicherung von Revs, zur Anmeldung, zum Speichern von Profil, Garage und Routen sowie zur Freigabe für die gewählte Zielgruppe verarbeitet. Grundlage sind die Vertragserfüllung, deine Einwilligung für optionale Berechtigungen und unser berechtigtes Sicherheitsinteresse.</p>'],
      ['3. Standort und Sichtbarkeit', '<p>Der Standort ist standardmäßig nicht öffentlich. Mit „öffentlich“ oder „nur Freunde“ stimmst du der Freigabe deines genauen Standorts an diese Zielgruppe zu, solange der Modus aktiv ist. Du kannst jederzeit unsichtbar werden.</p>'],
      ['4. Anbieter', '<p>Revs nutzt <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple und Brevo. Internationale Übermittlungen können unter geeigneten Garantien stattfinden. Revs verkauft keine personenbezogenen Daten und verwendet sie nicht für zielgerichtete Werbung.</p>'],
      ['5. Speicherung und Löschung', '<p>Daten werden während der Kontolaufzeit und soweit für Sicherheit oder Rechtspflichten erforderlich gespeichert. Das Konto kann unter <strong>Einstellungen → Konto und Sicherheit → Konto löschen</strong> dauerhaft gelöscht werden.</p>'],
      ['6. Deine Rechte', '<p>Du kannst per E-Mail Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Übertragbarkeit verlangen und Berechtigungen in Android oder iOS widerrufen.</p>'],
      ['7. Sicherheit, Kinder und Änderungen', '<p>Wir setzen technische und organisatorische Schutzmaßnahmen ein. Revs richtet sich nicht an Kinder unter 14 Jahren. Änderungen werden hier veröffentlicht.</p>']
    ], contact: 'Datenschutzkontakt'
  },
  it: {
    title: 'Informativa sulla privacy', updated: 'Ultimo aggiornamento: 2 agosto 2026',
    intro: 'Questa informativa spiega come Revs tratta i dati personali nelle app Android e iOS. Il titolare del trattamento è Daniel Uría Fernández. Contatto: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Dati trattati', '<ul><li><strong>Account:</strong> identificatore, e-mail, nome utente e dati di accesso tramite e-mail, Google o Apple.</li><li><strong>Profilo e contenuti:</strong> nome visualizzato, avatar, biografia, veicoli, foto, tag, percorsi e post.</li><li><strong>Posizione precisa:</strong> posizione del dispositivo quando concedi il permesso e attivi mappa, navigazione, registrazione percorsi, parcheggio o presenza sociale.</li><li><strong>Attività sociale e sicurezza:</strong> amicizie, visibilità, segnalazioni, blocchi e dati tecnici di protezione.</li></ul>'],
      ['2. Finalità e base giuridica', '<p>Usiamo i dati per fornire e proteggere Revs, autenticare l’account, salvare profilo, garage e percorsi e condividere contenuti con il pubblico scelto. Il trattamento si basa sul servizio richiesto, sul consenso ai permessi facoltativi e sul legittimo interesse alla sicurezza.</p>'],
      ['3. Posizione e visibilità', '<p>La posizione non è pubblica per impostazione predefinita. Scegliendo visibilità pubblica o solo amici, accetti di condividere la posizione precisa con quel pubblico finché la modalità è attiva. Puoi tornare invisibile in qualsiasi momento.</p>'],
      ['4. Fornitori', '<p>Revs usa <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple e Brevo. Possono verificarsi trasferimenti internazionali con garanzie adeguate. Revs non vende dati né li usa per pubblicità mirata.</p>'],
      ['5. Conservazione ed eliminazione', '<p>I dati sono conservati finché l’account è attivo e per esigenze di sicurezza o legge. Puoi eliminarlo definitivamente in <strong>Impostazioni → Account e sicurezza → Elimina account</strong>.</p>'],
      ['6. Diritti', '<p>Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione o portabilità via e-mail e revocare i permessi in Android o iOS.</p>'],
      ['7. Sicurezza, minori e modifiche', '<p>Adottiamo misure tecniche e organizzative. Revs non è destinata ai minori di 14 anni. Gli aggiornamenti saranno pubblicati qui.</p>']
    ], contact: 'Contatto privacy'
  },
  pt: {
    title: 'Política de privacidade', updated: 'Última atualização: 2 de agosto de 2026',
    intro: 'Esta política explica como a Revs trata dados pessoais nas aplicações Android e iOS. O responsável pelo tratamento é Daniel Uría Fernández. Contacto: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Dados tratados', '<ul><li><strong>Conta:</strong> identificador, e-mail, nome de utilizador e dados de autenticação por e-mail, Google ou Apple.</li><li><strong>Perfil e conteúdo:</strong> nome visível, avatar, biografia, veículos, fotografias, etiquetas, rotas e publicações.</li><li><strong>Localização precisa:</strong> posição do dispositivo quando concedes permissão e ativas mapas, navegação, gravação de rotas, estacionamento ou presença social.</li><li><strong>Atividade social e segurança:</strong> amizades, visibilidade, denúncias, bloqueios e dados técnicos de proteção.</li></ul>'],
      ['2. Finalidades e fundamento', '<p>Usamos os dados para fornecer e proteger a Revs, autenticar a conta, guardar perfil, garagem e rotas e partilhar conteúdo com o público escolhido. O tratamento baseia-se no serviço solicitado, no consentimento para permissões opcionais e no interesse legítimo de segurança.</p>'],
      ['3. Localização e visibilidade', '<p>A localização não é pública por defeito. Ao escolher público ou apenas amigos, aceitas partilhar a localização precisa com esse público enquanto o modo estiver ativo. Podes voltar ao modo invisível a qualquer momento.</p>'],
      ['4. Fornecedores', '<p>A Revs usa <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple e Brevo. Podem ocorrer transferências internacionais com as garantias aplicáveis. A Revs não vende dados nem os utiliza para publicidade direcionada.</p>'],
      ['5. Conservação e eliminação', '<p>Os dados são conservados enquanto a conta estiver ativa e pelo período necessário para segurança ou obrigações legais. Podes eliminá-la em <strong>Definições → Conta e segurança → Eliminar conta</strong>.</p>'],
      ['6. Direitos', '<p>Podes pedir acesso, retificação, apagamento, limitação, oposição ou portabilidade por e-mail e retirar permissões no Android ou iOS.</p>'],
      ['7. Segurança, menores e alterações', '<p>Aplicamos medidas técnicas e organizativas. A Revs não se destina a menores de 14 anos. As alterações serão publicadas aqui.</p>']
    ], contact: 'Contacto de privacidade'
  },
  nl: {
    title: 'Privacybeleid', updated: 'Laatst bijgewerkt: 2 augustus 2026',
    intro: 'Dit beleid legt uit hoe Revs persoonsgegevens verwerkt in de Android- en iOS-apps. De verwerkingsverantwoordelijke is Daniel Uría Fernández. Contact: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Gegevens die we verwerken', '<ul><li><strong>Account:</strong> identificatie, e-mail, gebruikersnaam en aanmeldgegevens van e-mail, Google of Apple.</li><li><strong>Profiel en inhoud:</strong> weergavenaam, avatar, bio, voertuigen, foto’s, tags, routes en berichten.</li><li><strong>Nauwkeurige locatie:</strong> apparaatpositie wanneer je toestemming geeft en kaart-, navigatie-, route-, parkeer- of aanwezigheidsfuncties inschakelt.</li><li><strong>Sociale activiteit en beveiliging:</strong> vriendschappen, zichtbaarheid, meldingen, blokkades en technische beveiligingsgegevens.</li></ul>'],
      ['2. Doeleinden en grondslag', '<p>We gebruiken gegevens om Revs te leveren en beveiligen, accounts aan te melden, profiel, garage en routes op te slaan en inhoud met het gekozen publiek te delen. De grondslag is de gevraagde dienst, toestemming voor optionele machtigingen en ons gerechtvaardigd beveiligingsbelang.</p>'],
      ['3. Locatie en zichtbaarheid', '<p>Je locatie is standaard niet openbaar. Met openbaar of alleen vrienden stem je ermee in je nauwkeurige locatie met dat publiek te delen zolang de modus actief is. Je kunt altijd terugkeren naar onzichtbaar.</p>'],
      ['4. Leveranciers', '<p>Revs gebruikt <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple en Brevo. Internationale doorgiften kunnen plaatsvinden met passende waarborgen. Revs verkoopt geen gegevens en gebruikt ze niet voor gerichte reclame.</p>'],
      ['5. Bewaren en verwijderen', '<p>Gegevens worden bewaard zolang het account actief is en voor beveiliging of wettelijke plichten. Verwijder het account via <strong>Instellingen → Account en beveiliging → Account verwijderen</strong>.</p>'],
      ['6. Rechten', '<p>Je kunt per e-mail inzage, correctie, verwijdering, beperking, bezwaar of overdraagbaarheid aanvragen en machtigingen in Android of iOS intrekken.</p>'],
      ['7. Beveiliging, kinderen en wijzigingen', '<p>We nemen technische en organisatorische maatregelen. Revs is niet bedoeld voor kinderen jonger dan 14 jaar. Wijzigingen verschijnen hier.</p>']
    ], contact: 'Privacycontact'
  },
  fi: {
    title: 'Tietosuojakäytäntö', updated: 'Päivitetty viimeksi 2. elokuuta 2026',
    intro: 'Tämä käytäntö kertoo, miten Revs käsittelee henkilötietoja Android- ja iOS-sovelluksissa. Rekisterinpitäjä on Daniel Uría Fernández. Yhteys: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Käsiteltävät tiedot', '<ul><li><strong>Tili:</strong> tunniste, sähköposti, käyttäjänimi ja sähköposti-, Google- tai Apple-kirjautumistiedot.</li><li><strong>Profiili ja sisältö:</strong> näyttönimi, avatar, esittely, ajoneuvot, kuvat, tunnisteet, reitit ja julkaisut.</li><li><strong>Tarkka sijainti:</strong> laitteen sijainti, kun annat luvan ja käytät karttaa, navigointia, reittitallennusta, pysäköintiä tai sosiaalista näkyvyyttä.</li><li><strong>Sosiaalinen toiminta ja turvallisuus:</strong> ystävyyssuhteet, näkyvyys, ilmoitukset, estot ja tekniset suojaustiedot.</li></ul>'],
      ['2. Tarkoitukset ja oikeusperuste', '<p>Tietoja käytetään Revsin tarjoamiseen ja suojaamiseen, kirjautumiseen, profiilin, autotallin ja reittien tallentamiseen sekä sisällön jakamiseen valitulle yleisölle. Perusteena ovat palvelun toteuttaminen, suostumus valinnaisiin lupiin ja oikeutettu turvallisuusetu.</p>'],
      ['3. Sijainti ja näkyvyys', '<p>Sijaintisi ei ole oletuksena julkinen. Kun valitset julkisen tai vain ystäville näkyvän tilan, hyväksyt tarkan sijainnin jakamisen tälle yleisölle tilan ollessa aktiivinen. Voit palata näkymättömäksi milloin tahansa.</p>'],
      ['4. Palveluntarjoajat', '<p>Revs käyttää <a href="https://supabase.com/privacy">Supabasea</a>, <a href="https://www.mapbox.com/legal/privacy">Mapboxia</a>, Googlea, Applea ja Brevoa. Kansainvälisiä siirtoja voidaan tehdä asianmukaisin suojatoimin. Revs ei myy tietoja eikä käytä niitä kohdennettuun mainontaan.</p>'],
      ['5. Säilytys ja poisto', '<p>Tietoja säilytetään tilin ollessa aktiivinen sekä turvallisuuden tai lain vaatiman ajan. Poista tili kohdassa <strong>Asetukset → Tili ja turvallisuus → Poista tili</strong>.</p>'],
      ['6. Oikeutesi', '<p>Voit pyytää sähköpostitse pääsyä, oikaisua, poistoa, rajoitusta, vastustamista tai siirtoa ja perua luvat Androidissa tai iOS:ssä.</p>'],
      ['7. Turvallisuus, lapset ja muutokset', '<p>Käytämme teknisiä ja organisatorisia suojatoimia. Revs ei ole tarkoitettu alle 14-vuotiaille. Muutokset julkaistaan täällä.</p>']
    ], contact: 'Tietosuojayhteys'
  },
  sv: {
    title: 'Integritetspolicy', updated: 'Senast uppdaterad: 2 augusti 2026',
    intro: 'Denna policy beskriver hur Revs behandlar personuppgifter i Android- och iOS-apparna. Personuppgiftsansvarig är Daniel Uría Fernández. Kontakt: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Uppgifter vi behandlar', '<ul><li><strong>Konto:</strong> identifierare, e-post, användarnamn och inloggningsuppgifter från e-post, Google eller Apple.</li><li><strong>Profil och innehåll:</strong> visningsnamn, avatar, biografi, fordon, foton, taggar, rutter och inlägg.</li><li><strong>Exakt plats:</strong> enhetens position när du ger tillstånd och aktiverar karta, navigering, ruttinspelning, parkering eller social närvaro.</li><li><strong>Social aktivitet och säkerhet:</strong> vänskap, synlighet, rapporter, blockeringar och tekniska skyddsdata.</li></ul>'],
      ['2. Ändamål och rättslig grund', '<p>Uppgifter används för att tillhandahålla och skydda Revs, autentisera kontot, spara profil, garage och rutter samt dela innehåll med vald publik. Grunden är tjänsten, samtycke till valfria behörigheter och vårt berättigade säkerhetsintresse.</p>'],
      ['3. Plats och synlighet', '<p>Din plats är inte offentlig som standard. När du väljer offentlig eller endast vänner godkänner du att exakt plats delas med den publiken medan läget är aktivt. Du kan bli osynlig när som helst.</p>'],
      ['4. Leverantörer', '<p>Revs använder <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple och Brevo. Internationella överföringar kan ske med lämpliga skydd. Revs säljer inte data och använder dem inte för riktad reklam.</p>'],
      ['5. Lagring och radering', '<p>Data lagras medan kontot är aktivt och så länge säkerhet eller lag kräver. Radera kontot via <strong>Inställningar → Konto och säkerhet → Radera konto</strong>.</p>'],
      ['6. Dina rättigheter', '<p>Du kan begära åtkomst, rättelse, radering, begränsning, invändning eller portabilitet via e-post och återkalla behörigheter i Android eller iOS.</p>'],
      ['7. Säkerhet, barn och ändringar', '<p>Vi använder tekniska och organisatoriska skydd. Revs är inte avsett för barn under 14 år. Ändringar publiceras här.</p>']
    ], contact: 'Integritetskontakt'
  },
  zh: {
    title: '隐私政策', updated: '最后更新：2026年8月2日',
    intro: '本政策说明 Revs 如何在 Android 和 iOS 应用中处理个人数据。数据控制者为 Daniel Uría Fernández。联系方式：<a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>。',
    sections: [
      ['1. 我们处理的数据', '<ul><li><strong>账户：</strong>用户标识、电子邮件、用户名，以及电子邮件、Google 或 Apple 登录数据。</li><li><strong>资料和内容：</strong>显示名称、头像、简介、车辆、照片、标签、路线和帖子。</li><li><strong>精确位置：</strong>当你授权并使用地图、导航、路线记录、停车或社交位置功能时的设备位置。</li><li><strong>社交与安全：</strong>好友关系、可见性设置、举报、屏蔽以及保护服务所需的技术数据。</li></ul>'],
      ['2. 目的和法律依据', '<p>数据用于提供和保护 Revs、验证账户、保存资料、车库和路线，并按你选择的受众分享内容。处理依据包括履行服务、你对可选权限的同意，以及我们保护 Revs 的合法利益。</p>'],
      ['3. 位置与可见性', '<p>位置默认不公开。当你选择“公开”或“仅好友”时，即同意在该模式启用期间向相应受众分享精确位置。你可以随时切换回不可见模式。</p>'],
      ['4. 服务提供商', '<p>Revs 使用 <a href="https://supabase.com/privacy">Supabase</a>、<a href="https://www.mapbox.com/legal/privacy">Mapbox</a>、Google、Apple 和 Brevo。数据可能在适当保障下跨境传输。Revs 不出售数据，也不将其用于定向广告。</p>'],
      ['5. 保留与删除', '<p>数据会在账户有效期间及安全或法律所需期间保存。你可以在<strong>设置 → 账户与安全 → 删除账户</strong>中永久删除账户。</p>'],
      ['6. 你的权利', '<p>你可以通过电子邮件申请访问、更正、删除、限制、反对或数据可携带，并可在 Android 或 iOS 中撤回权限。</p>'],
      ['7. 安全、未成年人和变更', '<p>我们采取技术和组织保护措施。Revs 不面向 14 岁以下儿童。政策更新将在此发布。</p>']
    ], contact: '隐私联系方式'
  },
  ja: {
    title: 'プライバシーポリシー', updated: '最終更新日：2026年8月2日',
    intro: '本ポリシーは、Revs が Android および iOS アプリで個人データを処理する方法を説明します。管理者は Daniel Uría Fernández です。連絡先：<a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>。',
    sections: [
      ['1. 処理するデータ', '<ul><li><strong>アカウント：</strong>識別子、メールアドレス、ユーザー名、メール・Google・Apple の認証データ。</li><li><strong>プロフィールとコンテンツ：</strong>表示名、アバター、自己紹介、車両、写真、タグ、ルート、投稿。</li><li><strong>正確な位置情報：</strong>許可を与え、地図、ナビ、ルート記録、駐車、ソーシャル表示を有効にした場合の端末位置。</li><li><strong>ソーシャル活動と安全：</strong>友達関係、公開範囲、報告、ブロック、保護に必要な技術データ。</li></ul>'],
      ['2. 目的と法的根拠', '<p>Revs の提供と保護、認証、プロフィール・ガレージ・ルートの保存、選択した相手への共有、不正防止に使用します。根拠はサービスの提供、任意権限への同意、および Revs を保護する正当な利益です。</p>'],
      ['3. 位置情報と公開範囲', '<p>位置情報は初期設定では公開されません。「公開」または「友達のみ」を選ぶと、そのモードが有効な間、正確な位置情報を対象者と共有することに同意したものとします。いつでも非表示に戻せます。</p>'],
      ['4. 提供事業者', '<p>Revs は <a href="https://supabase.com/privacy">Supabase</a>、<a href="https://www.mapbox.com/legal/privacy">Mapbox</a>、Google、Apple、Brevo を利用します。適切な保護措置の下で国際移転が行われる場合があります。データの販売やターゲティング広告への利用は行いません。</p>'],
      ['5. 保存と削除', '<p>アカウントの有効期間および安全・法令上必要な期間保存します。<strong>設定 → アカウントとセキュリティ → アカウントを削除</strong>から完全に削除できます。</p>'],
      ['6. 権利', '<p>メールでアクセス、訂正、削除、制限、異議、移行を請求でき、Android または iOS で権限を取り消せます。</p>'],
      ['7. 安全、子ども、変更', '<p>技術的・組織的保護措置を講じます。Revs は14歳未満を対象としていません。変更はこのページに掲載します。</p>']
    ], contact: 'プライバシー窓口'
  },
  pl: {
    title: 'Polityka prywatności', updated: 'Ostatnia aktualizacja: 2 sierpnia 2026 r.',
    intro: 'Niniejsza polityka opisuje przetwarzanie danych osobowych przez Revs w aplikacjach Android i iOS. Administratorem jest Daniel Uría Fernández. Kontakt: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Przetwarzane dane', '<ul><li><strong>Konto:</strong> identyfikator, e-mail, nazwa użytkownika i dane logowania przez e-mail, Google lub Apple.</li><li><strong>Profil i treści:</strong> nazwa wyświetlana, awatar, biografia, pojazdy, zdjęcia, tagi, trasy i posty.</li><li><strong>Dokładna lokalizacja:</strong> pozycja urządzenia po udzieleniu zgody i włączeniu mapy, nawigacji, zapisu trasy, parkowania lub obecności społecznościowej.</li><li><strong>Aktywność społeczna i bezpieczeństwo:</strong> znajomości, widoczność, zgłoszenia, blokady i techniczne dane ochronne.</li></ul>'],
      ['2. Cele i podstawa prawna', '<p>Dane służą do świadczenia i ochrony Revs, logowania, zapisu profilu, garażu i tras oraz udostępniania treści wybranym odbiorcom. Podstawą jest realizacja usługi, zgoda na opcjonalne uprawnienia i prawnie uzasadniony interes bezpieczeństwa.</p>'],
      ['3. Lokalizacja i widoczność', '<p>Lokalizacja nie jest domyślnie publiczna. Wybierając tryb publiczny lub tylko dla znajomych, zgadzasz się udostępniać dokładną lokalizację tej grupie, gdy tryb jest aktywny. Zawsze możesz wrócić do trybu niewidocznego.</p>'],
      ['4. Dostawcy', '<p>Revs korzysta z <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple i Brevo. Transfery międzynarodowe mogą odbywać się z odpowiednimi zabezpieczeniami. Revs nie sprzedaje danych ani nie używa ich do reklam ukierunkowanych.</p>'],
      ['5. Przechowywanie i usuwanie', '<p>Dane są przechowywane, gdy konto jest aktywne, oraz gdy wymagają tego bezpieczeństwo lub prawo. Konto usuwa się w <strong>Ustawienia → Konto i bezpieczeństwo → Usuń konto</strong>.</p>'],
      ['6. Twoje prawa', '<p>Możesz e-mailem zażądać dostępu, sprostowania, usunięcia, ograniczenia, sprzeciwu lub przeniesienia oraz wycofać uprawnienia w Androidzie lub iOS.</p>'],
      ['7. Bezpieczeństwo, dzieci i zmiany', '<p>Stosujemy środki techniczne i organizacyjne. Revs nie jest przeznaczona dla dzieci poniżej 14 lat. Zmiany będą publikowane tutaj.</p>']
    ], contact: 'Kontakt w sprawie prywatności'
  },
  ru: {
    title: 'Политика конфиденциальности', updated: 'Последнее обновление: 2 августа 2026 г.',
    intro: 'Эта политика описывает обработку персональных данных Revs в приложениях Android и iOS. Оператор данных — Daniel Uría Fernández. Контакт: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>.',
    sections: [
      ['1. Какие данные обрабатываются', '<ul><li><strong>Аккаунт:</strong> идентификатор, e-mail, имя пользователя и данные входа через e-mail, Google или Apple.</li><li><strong>Профиль и контент:</strong> отображаемое имя, аватар, биография, автомобили, фотографии, теги, маршруты и публикации.</li><li><strong>Точное местоположение:</strong> позиция устройства после разрешения и включения карты, навигации, записи маршрута, парковки или социальной видимости.</li><li><strong>Социальная активность и безопасность:</strong> друзья, видимость, жалобы, блокировки и технические защитные данные.</li></ul>'],
      ['2. Цели и правовые основания', '<p>Данные используются для предоставления и защиты Revs, входа, хранения профиля, гаража и маршрутов и показа контента выбранной аудитории. Основания — выполнение услуги, согласие на необязательные разрешения и законный интерес в защите Revs.</p>'],
      ['3. Местоположение и видимость', '<p>По умолчанию местоположение не публикуется. Выбирая публичный режим или «только друзья», вы соглашаетесь делиться точным местоположением с этой аудиторией, пока режим активен. Вернуться в невидимый режим можно в любой момент.</p>'],
      ['4. Поставщики', '<p>Revs использует <a href="https://supabase.com/privacy">Supabase</a>, <a href="https://www.mapbox.com/legal/privacy">Mapbox</a>, Google, Apple и Brevo. Международная передача возможна при надлежащих гарантиях. Revs не продаёт данные и не использует их для таргетированной рекламы.</p>'],
      ['5. Хранение и удаление', '<p>Данные хранятся, пока аккаунт активен, и столько, сколько требуется для безопасности или по закону. Удалить аккаунт можно в <strong>Настройки → Аккаунт и безопасность → Удалить аккаунт</strong>.</p>'],
      ['6. Ваши права', '<p>По e-mail можно запросить доступ, исправление, удаление, ограничение, возражение или переносимость и отозвать разрешения в Android или iOS.</p>'],
      ['7. Безопасность, дети и изменения', '<p>Мы применяем технические и организационные меры. Revs не предназначен для детей младше 14 лет. Изменения публикуются здесь.</p>']
    ], contact: 'Контакт по конфиденциальности'
  }
};

const support = {
  es: ['Soporte', 'Para preguntas, incidencias o solicitudes relacionadas con Revs, escribe a <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>. Indica el dispositivo, la versión del sistema y una descripción. Nunca envíes contraseñas ni códigos.', ['Cuenta y acceso', 'Puedes iniciar sesión mediante correo, Google o Apple. Incluye el correo asociado al pedir ayuda, pero nunca tu contraseña.'], ['Ubicación', 'Puedes cambiar los permisos en Android o iOS y controlar en Revs si tu ubicación es pública, solo para amigos o invisible.'], ['Eliminar la cuenta', 'Abre <strong>Ajustes → Cuenta y seguridad → Eliminar cuenta</strong>. La eliminación es permanente.'], ['Privacidad', 'Consulta la <a href="privacy.html">Política de privacidad</a>.']],
  en: ['Support', 'For questions, issues or requests about Revs, email <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>. Include your device, system version and a description. Never send passwords or access codes.', ['Account and access', 'You can sign in with email, Google or Apple. Include the account email when requesting help, but never your password.'], ['Location', 'You can change permissions in Android or iOS and choose whether your Revs location is public, friends-only or invisible.'], ['Delete account', 'Open <strong>Settings → Account and security → Delete account</strong>. Deletion is permanent.'], ['Privacy', 'Read the <a href="privacy.html">Privacy Policy</a>.']],
  fr: ['Assistance', 'Pour toute question ou difficulté, écrivez à <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> avec votre appareil, la version du système et une description. N’envoyez jamais de mot de passe ni de code.', ['Compte et accès', 'Connexion par e-mail, Google ou Apple. Indiquez l’e-mail du compte, jamais le mot de passe.'], ['Localisation', 'Modifiez les autorisations dans Android ou iOS et choisissez public, amis uniquement ou invisible dans Revs.'], ['Supprimer le compte', 'Ouvrez <strong>Réglages → Compte et sécurité → Supprimer le compte</strong>. La suppression est définitive.'], ['Confidentialité', 'Consultez la <a href="privacy.html">Politique de confidentialité</a>.']],
  de: ['Support', 'Bei Fragen oder Problemen schreibe an <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> und nenne Gerät, Systemversion und Beschreibung. Sende niemals Passwörter oder Codes.', ['Konto und Zugriff', 'Die Anmeldung ist per E-Mail, Google oder Apple möglich. Nenne nur die Konto-E-Mail, nie das Passwort.'], ['Standort', 'Ändere Berechtigungen in Android oder iOS und wähle in Revs öffentlich, nur Freunde oder unsichtbar.'], ['Konto löschen', 'Öffne <strong>Einstellungen → Konto und Sicherheit → Konto löschen</strong>. Die Löschung ist dauerhaft.'], ['Datenschutz', 'Lies die <a href="privacy.html">Datenschutzerklärung</a>.']],
  it: ['Assistenza', 'Per domande o problemi scrivi a <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> indicando dispositivo, versione del sistema e descrizione. Non inviare password o codici.', ['Account e accesso', 'Puoi accedere con e-mail, Google o Apple. Indica l’e-mail dell’account, mai la password.'], ['Posizione', 'Modifica i permessi in Android o iOS e scegli in Revs tra pubblico, solo amici o invisibile.'], ['Elimina account', 'Apri <strong>Impostazioni → Account e sicurezza → Elimina account</strong>. L’eliminazione è definitiva.'], ['Privacy', 'Consulta l’<a href="privacy.html">Informativa sulla privacy</a>.']],
  pt: ['Suporte', 'Para dúvidas ou problemas escreve para <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>, indicando dispositivo, versão do sistema e descrição. Nunca envies palavras-passe ou códigos.', ['Conta e acesso', 'Podes entrar com e-mail, Google ou Apple. Indica o e-mail da conta, nunca a palavra-passe.'], ['Localização', 'Altera permissões no Android ou iOS e escolhe na Revs entre público, apenas amigos ou invisível.'], ['Eliminar conta', 'Abre <strong>Definições → Conta e segurança → Eliminar conta</strong>. A eliminação é permanente.'], ['Privacidade', 'Consulta a <a href="privacy.html">Política de privacidade</a>.']],
  nl: ['Ondersteuning', 'Mail voor vragen of problemen naar <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> met apparaat, systeemversie en beschrijving. Stuur nooit wachtwoorden of codes.', ['Account en toegang', 'Meld aan met e-mail, Google of Apple. Vermeld alleen het accountadres, nooit het wachtwoord.'], ['Locatie', 'Wijzig machtigingen in Android of iOS en kies in Revs openbaar, alleen vrienden of onzichtbaar.'], ['Account verwijderen', 'Open <strong>Instellingen → Account en beveiliging → Account verwijderen</strong>. Dit is permanent.'], ['Privacy', 'Lees het <a href="privacy.html">Privacybeleid</a>.']],
  fi: ['Tuki', 'Kysymykset ja ongelmat: <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>. Kerro laite, järjestelmäversio ja kuvaus. Älä lähetä salasanoja tai koodeja.', ['Tili ja kirjautuminen', 'Kirjaudu sähköpostilla, Googlella tai Applella. Ilmoita tilin sähköposti, älä salasanaa.'], ['Sijainti', 'Muuta lupia Androidissa tai iOS:ssä ja valitse Revsissä julkinen, vain ystävät tai näkymätön.'], ['Poista tili', 'Avaa <strong>Asetukset → Tili ja turvallisuus → Poista tili</strong>. Poisto on pysyvä.'], ['Tietosuoja', 'Lue <a href="privacy.html">Tietosuojakäytäntö</a>.']],
  sv: ['Support', 'Vid frågor eller problem, mejla <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> med enhet, systemversion och beskrivning. Skicka aldrig lösenord eller koder.', ['Konto och åtkomst', 'Logga in med e-post, Google eller Apple. Ange kontots e-post, aldrig lösenordet.'], ['Plats', 'Ändra behörigheter i Android eller iOS och välj offentlig, endast vänner eller osynlig i Revs.'], ['Radera konto', 'Öppna <strong>Inställningar → Konto och säkerhet → Radera konto</strong>. Raderingen är permanent.'], ['Integritet', 'Läs <a href="privacy.html">Integritetspolicyn</a>.']],
  zh: ['支持', '如有问题，请发送邮件至 <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>，并注明设备、系统版本和问题描述。请勿发送密码或验证码。', ['账户与登录', '可使用电子邮件、Google 或 Apple 登录。求助时可提供账户邮箱，但不要提供密码。'], ['位置', '你可以在 Android 或 iOS 中修改权限，并在 Revs 中选择公开、仅好友或不可见。'], ['删除账户', '打开<strong>设置 → 账户与安全 → 删除账户</strong>。删除操作不可撤销。'], ['隐私', '请阅读<a href="privacy.html">隐私政策</a>。']],
  ja: ['サポート', 'お問い合わせは、端末、OS バージョン、状況を記載して <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a> までご連絡ください。パスワードやコードは送らないでください。', ['アカウントとログイン', 'メール、Google、Apple でログインできます。問い合わせ時はアカウントのメールのみを記載してください。'], ['位置情報', 'Android または iOS で権限を変更し、Revs で公開、友達のみ、非表示を選べます。'], ['アカウント削除', '<strong>設定 → アカウントとセキュリティ → アカウントを削除</strong>を開きます。削除は取り消せません。'], ['プライバシー', '<a href="privacy.html">プライバシーポリシー</a>をご覧ください。']],
  pl: ['Pomoc', 'Pytania i problemy wysyłaj na <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>, podając urządzenie, wersję systemu i opis. Nigdy nie wysyłaj haseł ani kodów.', ['Konto i dostęp', 'Zaloguj się przez e-mail, Google lub Apple. Podaj adres konta, nigdy hasło.'], ['Lokalizacja', 'Zmień uprawnienia w Androidzie lub iOS i wybierz w Revs tryb publiczny, tylko dla znajomych lub niewidoczny.'], ['Usuń konto', 'Otwórz <strong>Ustawienia → Konto i bezpieczeństwo → Usuń konto</strong>. Usunięcie jest trwałe.'], ['Prywatność', 'Przeczytaj <a href="privacy.html">Politykę prywatności</a>.']],
  ru: ['Поддержка', 'По вопросам пишите на <a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a>, указав устройство, версию системы и описание. Никогда не отправляйте пароли или коды.', ['Аккаунт и вход', 'Доступен вход по e-mail, через Google или Apple. Укажите e-mail аккаунта, но не пароль.'], ['Местоположение', 'Измените разрешения в Android или iOS и выберите в Revs публичный режим, только для друзей или невидимый.'], ['Удаление аккаунта', 'Откройте <strong>Настройки → Аккаунт и безопасность → Удалить аккаунт</strong>. Удаление необратимо.'], ['Конфиденциальность', 'Прочитайте <a href="privacy.html">Политику конфиденциальности</a>.']]
};

const normalizeLanguage = value => {
  const code = String(value || '').toLowerCase().split(/[-_]/)[0];
  return Object.hasOwn(languages, code) ? code : 'es';
};

const query = new URLSearchParams(window.location.search);
let language = normalizeLanguage(query.get('lang') || navigator.language);
const page = document.body.dataset.legalPage;
const select = document.querySelector('[data-language-select]');

for (const [code, label] of Object.entries(languages)) {
  const option = document.createElement('option');
  option.value = code;
  option.textContent = label;
  select.append(option);
}

function render() {
  const labels = common[language];
  document.documentElement.lang = language;
  document.querySelector('[data-nav="home"]').textContent = labels[0];
  document.querySelector('[data-nav="privacy"]').textContent = labels[1];
  document.querySelector('[data-nav="support"]').textContent = labels[2];
  document.querySelector('[data-language-label]').textContent = labels[3];
  select.value = language;
  select.setAttribute('aria-label', labels[3]);
  for (const anchor of document.querySelectorAll('a[data-nav]')) {
    if (anchor.dataset.nav === 'home') continue;
    const target = new URL(anchor.getAttribute('href'), window.location.href);
    target.searchParams.set('lang', language);
    anchor.href = target;
  }

  const content = document.querySelector('[data-legal-content]');
  if (page === 'privacy') {
    const item = privacy[language];
    document.title = `${item.title} · Revs`;
    content.innerHTML = `<h1>${item.title}</h1><p class="updated">${item.updated}</p><p>${item.intro}</p>${item.sections.map(section => `<h2>${section[0]}</h2>${section[1]}`).join('')}<div class="card"><strong>${item.contact}</strong><p><a href="mailto:danieluriaf@gmail.com">danieluriaf@gmail.com</a></p></div>`;
  } else {
    const item = support[language];
    document.title = `${item[0]} · Revs`;
    content.innerHTML = `<h1>${item[0]}</h1><p>${item[1]}</p>${item.slice(2).map(section => `<h2>${section[0]}</h2><p>${section[1]}</p>`).join('')}`;
  }
  for (const anchor of content.querySelectorAll('a[href="privacy.html"]')) {
    anchor.href = `privacy.html?lang=${language}`;
  }
}

select.addEventListener('change', event => {
  language = normalizeLanguage(event.target.value);
  const next = new URL(window.location.href);
  next.searchParams.set('lang', language);
  window.history.replaceState({}, '', next);
  render();
});

render();
