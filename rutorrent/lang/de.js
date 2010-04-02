﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: de.js
 * 	German language file.
 * 
 * File Author:
 * 		schnurlos (utorrent@gmx.at)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Allgemein",
 Downloads			: "Downloads",
 Connection			: "Verbindung",
 BitTorrent			: "BitTorrent",
 Queueing			: "Warteschlange",
 Scheduler			: "Zeitplan",
 Advanced			: "Erweitert",
 Disk_Cache			: "Disk-Cache",
 Enable_Web_Interface : "Erlaube den Web-Zugriff",
 Authent			: "Zugriffsdaten",
 Username			: "Benutzer",
 Password			: "Passwort",
 Enable_Guest_acc	: "Erlaube Gastzugriff mit Benutzernamen",
 Connectivity		: "Verbindungen",
 Alt_list_port		: "Alternativer Listening-Port (Standard: uTorrent-Port)",
 Rest_access		: "Beschränke Zugriff auf folgende IPs (Trenne mehrere Einträge durch ',')",
 User_Interface		: "Benutzer Interface",
 Confirm_del_torr	: "Löschen von Torrents bestätigen",
 Update_GUI_every	: "Anzeige aktualisieren in",
 ms					: "ms",
 Alt_list_bckgnd	: "Abwechselnder Listenhintergrund",
 Show_speed			: "Zeige Speed",
 Don_t				: "Nicht anzeigen",
 In_status_bar		: "In der Statusleiste",
 In_title_bar		: "In der Titelleiste",
 Show_cat_start		: "Zeige Gruppen beim Start",
 Show_det_start		: "Zeige Details beim Start",
 Restor_def			: "Standardeinstellungen wiederherstellen",
 When_add_torrent	: "Beim Hinzufügen von Torrents",
 Dnt_start_down_auto: "Download nicht automatisch starten",
 Other_sett			: "Sonstige Einstellungen",
 Append_ut_incompl	: "An unfertige Dateien .!ut anhängen",
 Prealloc_all_files	: "Speicher für Dateien vorbelegen",
 Prev_stnd_w_act_con: "Kein Standby solange noch Torrents aktiv sind",
 Listening_Port		: "Port für den Empfang",
 Port_f_incom_conns	: "Port für eingehende Verbindungen",
 Random_Port		: "Zufälliger Port",
 Rnd_port_torr_start: "Bei jedem Start ein anderer Port",
 En_UPnP_mapp		: "Aktiviere UPnP Port Mapping",
 Add_torr_mustdie_f	: "Ausnahme für Windows Firewall (Windows XP SP2 oder später)",
 Proxy_Server		: "Proxy Server",
 Type				: "Typ",
 none				: "(keiner)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Benutze Proxyserver für Peer zu Peer Verbindungen",
 Bandwidth_Limiting : "Bandbreiten Begrenzung",
 Global_max_upl		: "Max. gesamte Upload-Rate",
 unlimited			: "unbegrenzt",
 Alt_down_r_downl	: "Alternative Upload-Rate, wenn Du nur seedest",
 Glob_max_downl		: "Max. gesamte Download-Rate",
 Num_of_conn		: "Anzahl der Verbindungen",
 Glob_max_conn		: "Max. Gesamtanzahl der Verbindungen",
 Max_conn_peer_torr	: "Max. Anzahl von verbundenen Peers pro Torrent",
 Num_upl_slots		: "Anzahl der Uploadslots pro Torrent",
 Extra_ulslots		: "Nutze zusätzliche Uploadslots falls Upload < 90%",
 Add_bittor_featrs	: "Zusätzliche BitTorrent Funktionen",
 En_DHT_ntw			: "Verwende DHT-Netz",
 Ask_scrape			: "Frage beim Tracker nach Scrape-Info",
 En_DHT_new_torrs	: "Erlaube DHT für neue Torrents",
 Peer_exch			: "Peerlistentausch (PEX)",
 Ip_report_track	: "IP/Hostname an den Tracker melden",
 Protocol_enc		: "Protokoll Verschlüsselung",
 Outgoing			: "Ausgehend",
 Disabled			: "Deaktiviert",
 Enabled			: "Erlaubt",
 Forced				: "Erzwungen",
 All_inc_legacy_conn: "Erlaube eingehende Legacy Verbindungen",
 Queue_sett			: "Warteschlangen Einstellungen",
 Max_n_act_torrs	: "Max. Anzahl von aktiven Torrents (Up- oder Download)",
 Max_num_act_downl	: "Max. Anzahl von aktiven Downloads",
 Seed_while			: "Seede solange [Standard Werte]",
 Ratio_is			: "Rate ist",
 or_time_is			: " % oder geseedet für ",
 Ignore				: "(Ignorieren)",
 nin_min			: "90 Minuten",
 two_h				: "2 Stunden",
 three_h			: "3 Stunden",
 four_h				: "4 Stunden",
 five_h				: "5 Stunden",
 six_h				: "6 Stunden",
 seven_h			: "7 Stunden",
 eight_h			: "8 Stunden",
 nine_h				: "9 Stunden",
 ten_h				: "10 Stunden",
 twelve_h			: "12 Stunden",
 sixteen_h			: "16 Stunden",
 twenty_h			: "20 Stunden",
 tw_four_h			: "24 Stunden",
 thirty_h			: "30 Stunden",
 thirty_six_h		: "36 Stunden",
 forty_eight_h		: "48 Stunden",
 sixty_h			: "60 Stunden",
 sev_two_h			: "72 Stunden",
 nin_six_h			: "96 Stunden",
 Seed_prior			: "Seeds haben eine höhere Priorität als Downloads",
 When_torr_reach	: "Wenn die gewünschte Share-Rate erreicht ist",
 Limit_upl_rate		: "Upload-Rate begrenzen auf [0 hält Torrent an]",
 En_shedul			: "Zeitplan verwenden",
 Shed_sett			: "Einstellungen für Zeitplan",
 Lim_upl_rate		: "Begrenzte Upload-Rate",
 Lim_dow_rate		: "Begrenzte Download-R.",
 Dis_DHT_when_t_off	: "DHT mit Zeitplan deaktivieren",
 Disc_cahe			: "Disk-Cache",
 Disc_cahe_bla_bla	: "Der Disk-Cache wird verwendet, um oft benötigte Daten im RAM zu halten, und dadurch die Lese- u. Schreibzugriffe auf der Festplatte zu reduzieren. rTorrent regelt das normalerweise automatisch, aber hier kannst du die Einstellungen ändern.",
 Overwr_d_cahe_au	: "überschreibe die automatische Cache-Grösse und verwende",
 MB					: "MB",
 Red_mem_usage		: "Reduziere die Speicherbenutzung wenn der Cache nicht benötigt wird",
 Adv_cache_sett		: "Erweiterte Cache-Einstellungen",
 En_cach_disc		: "Verwende Caching bei Schreibzugriffen",
 Wr_out_ever_2_min	: "Schreibe unveränderte Blöcke alle 2 Minuten",
 Wr_immed			: "Schreibe fertige Teile sofort",
 En_cah_disc_read	: "Verwende Caching bei Lesezugriffen",
 Turn_off_w_read	: "Schalte Caching aus, wenn die Upload-Geschwindigkeit niedrig ist",
 Rem_old_from_cahe	: "Entferne alte Blöcke aus dem Cache",
 Increase_autom_cach: "Erhöhe die Grösse des Cache automatisch bei überlast",
 Advanced			: "Erweitert",
 Advanced_label		: "Experten-Einstellungen [ACHTUNG: änderungen auf eigenes Risiko!]",
 Cancel				: "Abbrechen",
 uTorrent_settings	: "rTorrent Einstellungen",
 
// Main window
 Doesnt_support		: "Diese ruTorrent unterstützt deinen Browser nicht.",
 Name				: "Name",
 Status				: "Status",
 Size				: "Grösse",
 Done				: "Fertig",
 Downloaded			: "Geladen",
 Uploaded			: "Upgeloadet",
 Ratio				: "Rate",
 DL					: "DL",
 UL					: "UL",
 ETA				: "Fertig",
 Label				: "Gruppe",
 Peers				: "Peers",
 Seeds				: "Seeds",
 Avail				: "Verf.",
 Remaining			: "Restzeit",
 Priority			: "Priorität",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "Die Datei ist keine torrent-Datei.",
 Pausing			: "Angehalten",
 Seeding			: "Seeden",
 Downloading		: "Download",
 Checking			: "Check...",
 Error				: "Fehler",
 Queued				: "Warte",
 Finished			: "Fertig",
 Stopped			: "Gestoppt",
 Request_timed_out	: "Zeitüberschreitung - keine Rückmeldung von rTorrent.",
 
 Force_Start		: "Erzwinge Start",
 Start				: "Start",
 Pause				: "Pause",
 Stop				: "Stop",
 Force_recheck		: "Erzwinge neuerliche überprüfung",
 New_label			: "Neue Gruppe...",
 Remove_label		: "Gruppe löschen",
 Labels				: "Gruppen",
 Remove				: "Entfernen",
 Delete_data		: "Daten löschen",
 Remove_and			: "Entfernen und",
 Details			: "Details...",
 Properties			: "Eigenschaften...",
 of					: "von", 		//this two creates line 
 connected			: "verbundenen",	//  XX of YY connected
 High_priority		: "Höchste",
 Normal_priority	: "Normale",
 Low_priority		: "Niedrige",
 Dont_download		: "Nicht Laden",
 Shure_restore_UI	: "Willst du wirklich die Standardeinstellungen wiederherstellen?",
 Reloading			: "Lade neu...",
 Name				: "Name",
 Date_				: "Datum",
 Files				: "Dateien",
 Logger				: "Logger",
 
 s					: "s",    // part of "KB/s"
 bytes				: "Bytes",
 KB					: "kB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Lade uTorrent WebUI in deutsch...",
 Torrent_file		: "Torrent Datei",
 Torrent_URL		: "Torrent URL",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Downloader",
 Torrent_properties	: "Torrent Eigenschaften",
 Trackers			: "Tracker",
 Max_down_rate		: "Max. Download-Rate",
 Max_upl_rate		: "Max. Upload-Rate",
 Bandwidth_sett		: "Bandbreiten Einstellungen",
 Number_ul_slots	: "Anzahl Upload-Slots",
 Override_default	: "Standard-Set übersteuern",
 Initial_seed		: "Initial-Seeden",
 Enable_DHT			: "DHT verwenden",
 Peer_ex			: "Peerlistentausch",
 About				: "über rTorrent...",
 Enter_label_prom	: "Neue Gruppe für markierte Torrents eingeben",
 Remove_torrents	: "Torrent(s) löschen",
 Rem_torrents_prompt: "Möchtest Du den/die markierte(n) Torrent(s) wirklich löschen?",
 All				: "Alle",
 Active				: "Aktiv",
 Inactive			: "Inaktiv",
 No_label			: "Keine Gruppe",
 Transfer			: "Transfer",
 Time_el			: "Laufzeit",
 Remaining			: "Fehlt noch",
 Share_ratio		: "Share-Rate",
 Down_speed			: "Download-Rate",
 Down_limit			: "Down-Limit",
 Ul_speed			: "Upload-Rate",
 Ul_limit			: "Up-Limit",
 Wasted				: "Unbrauchbar",
 Tracker			: "Tracker",
 Track_URL			: "Tracker URL",
 Track_status		: "Tracker Status",
 Update_in			: "Nächstes Update",
 DHT_status			: "DHT Status",
 Save_as			: "Speichern unter",
 Tot_size			: "Gesamtgrösse",
 Created_on			: "Erstellt am",
 Comment			: "Kommentar",
 
 
 //buttons
 add_button			: "Datei dazu",
 add_url			: "URL dazu",
 ok				: "   OK   ",
 Cancel				: " Abbrechen ",
 no				: "  Nein ",
 
 mnu_add			: "Torrent dazu",
 mnu_remove			: "Entfernen",
 mnu_start			: "Start",
 mnu_pause			: "Pause",
 mnu_stop			: "Stop",
 mnu_rss			: "RSS Downloader",
 mnu_settings			: "Einstellungen",
 mnu_search			: "Suche",
 mnu_lang			: "Sprache auswaehlen",
 
 //Other variables added by spide
 torrent_add			: "Add Torrent", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "t ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limit",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Web-server can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid or rtorrent user. Some functionality will be unavailable."
 };
