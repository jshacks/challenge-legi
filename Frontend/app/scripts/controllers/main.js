'use strict';
var URL = 'http://localhost:9337'

/**
 * @ngdoc function
 * @name lawApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lawApp
 */
angular.module('lawApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.q = null;
    $scope.jsonator = [];
  	//$scope.jsonator = [{name: 'AAR-SP', value: 26}, {name:'Duminica', value: 26}, {name:'Euripide', value: 90}];


  	$scope.qRequest = function(){
  		$http({
  			method: 'GET',
  			url: URL + '/search?q=' + $scope.q
		  }).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available
    		$scope.jsonator = response;



    		console.log(response);

  		}, function errorCallback(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
    		console.log(response);
  		});

  		console.log($scope.q);
  	}

    $scope.jsonate = function(){

    $scope.jsonator = [{
  "titlu": " \r\nProiect Norme metodologice de aplicare a Legii privind concesiunile de lucr\u0103ri \u0219i concesiunile de servicii",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/ProiectNormemetaplicarelegiiconcesiunile_11032016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Norme metodologice de aplicare a legii privind achizi\u0163iile sectoriale",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/proiectNormeLegeutilitati_26022016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind achizi\u0163iile publice \u0096 forma aprobat\u0103 de Guvern \u00een \u0219edin\u021ba din 27 octombrie 2015",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_achizitii_publice_12112015_ANAP.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind remediile \u0219i c\u0103ile de atac \u00een materie de atribuire a contractelor de achizi\u021bie public\u0103 \u0219i a contractelor de concesiune \u0219i pentru organizarea \u0219i func\u021bionarea Consiliului Na\u021bional de Solu\u021bionare a Contesta\u021biilor\u00a0 - forma aprobat\u0103 de Guvern \u00een \u0219edin\u021ba din 27 octombrie 2015",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_remedii_12112015_ANAP.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect lege privind achizi\u021biile sectoriale - forma aprobat\u0103 de Guvern \u00een \u0219edin\u021ba din 27 octombrie 2015 ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_privind_achizitiile_sectoriale_12112015_ANAP.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind concesiunile de lucr\u0103ri \u015fi concesiunile de servicii - forma aprobat\u0103 de Guvern \u00een \u0219edin\u021ba din 27 octombrie 2015",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_concesiuni_12112015_ANAP.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind achizi\u0163iile sectoriale - forma rezultat\u0103 \u00een urma consult\u0103rii publice, \u00eencheiate \u00een data de 15 octocmbrie 2015",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_privind_achizitiile_sectoriale_21102015_03112015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nExpunere de motive ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Expunere_motive_Lege_privind_achizitiile_sectoriale_19 10 2015_ANAP.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nSintez\u0103 comentarii primite pe durata consult\u0103rilor publice ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/SintezComconsultarepublicaachizsect231015_03112015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nTabel de concordan\u0163\u0103 \u00eentre Directiva 2014/25/UE a Parlamentului European \u0219i a Consiliului privind achizi\u021biile efectuate de entit\u0103\u021bile care activeaz\u0103 \u00een sectoarele apei, energiei, transporturilor \u0219i serviciilor po\u0219tale \u0219i de abrogare a Directivei 2004/17/CE \u015fi ale Proiectul legii achizi\u0163iile \r\n\tprivind sectoriale ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/tabel_concordanta_utilitati191015_22102015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind concesiunile de lucr\u0103ri \u015fi concesiunile de servicii - forma rezultat\u0103 \u00een urma consult\u0103rii publice, \u00eencheiate \u00een data de 15 octocmbrie 2015\r\n",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Lege_concesiuni_21102015_03112015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nExpunere de motive ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Expunere_motive_Legeprivindconcesiunile_191015_22102015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nSintez\u0103 comentarii primite pe durata consult\u0103rilor publice ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Sintcomconsultarepublicaconcesiuni241015_03112015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nTabel de concordan\u0163\u0103 \u00eentre Directiva 2014/23/UE a Parlamentului European \u0219i a Consiliului privind atribuirea contractelor de concesiune \u0219i Proiectul legii achizi\u0163iile \r\n\tprivind concesiunile de lucr\u0103ri \u015fi concesiunile de servicii ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/tabel_concordanta_concesiuni191015_22102015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind concesiunile de lucr\u0103ri \u015fi concesiunile de servicii",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Proiectlegeachizconcesiuni_30092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind achizi\u0163iile sectoriale",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/ProiectLegeprivindachizitiilesectoriale24092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind achizi\u0163iile publice",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/PublicProcurementLaw23092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nExpunere de motive ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Expuneremotive_Legeprivindachizitiilepublice23092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nTabel de concordan\u0163\u0103 \u00eentre prevederile Directivei 2014/24/UE \u015fi Proiectului de lege privind achizi\u0163iile publice ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Tabel de concordanta_Proiectlege23092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nComentarii generale",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/ComentariigeneraleLegeaachizitiilorpublice.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nCapitolul I",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/CapIComentarii_Proiectlegeachizitiilepublice.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nCapitolul II \u015fi Capitolul III",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/CapII_IIIComentarii_Proiectlegeachizitiilepublice.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nCapitolul IV",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/CapIVComentarii_Proiectlegeachizitiilepublice.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nCapitolul V \u015fi Capitolul VIII",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/CapV_VIIIComentarii_Proiectlegeachizitiilepublice.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind remediile \u0219i c\u0103ile de atac \u00een materie de atribuire a contractelor de achizi\u021bie public\u0103 \u0219i a contractelor de concesiune \u0219i pentru organizarea \u0219i func\u021bionarea Consiliului Na\u021bional de Solu\u021bionare a Contesta\u021biilor",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Proiectlegeremedi23092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nExpunere de motive ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Expunere_motive_lege_remedii_ANAP_08102015_22102015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nSintez\u0103 comentarii generale",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Sintezacomentariilegeremedii230915.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Tabel de coresponden\u0163\u0103\r\n",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/tabelcorespondentaremedii23092015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nStrategia Na\u0163ional\u0103 Achizi\u0163ii Publice",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/StrategiaNationalaAchizitiiPublice31072015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nAnexe",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/Anexestrategie31072015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\n\r\nDocument de consultare cu privire la m\u0103surile incluse \u00een Strategia na\u0163ional\u0103 \u00een domeniul achizi\u0163iilor publice",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/documentconsultarestrategie31072015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind achizi\u0163iile publice",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/Proiect_Lege_achizitii_clasice21iulie.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nDocument de consultare cu privire la Proiectul de Lege privind Achizi\u021biile Publice ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/documentconsultarelegeaachizitiilorpublice31072015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nProiect Lege privind remediile \u015fi c\u0103ile de atac \u00een materie de atribuire a contractelor de achizi\u0163ie public\u0103 \u0219i a contractelor de concesiune \u015fi pentru organizarea \u015fi func\u0163ionarea Consiliului Na\u0163ional de Solu\u0163ionare a Contesta\u0163iilor",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/Proiect_Lege_privind_caile_de_atac24iulie.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " \r\nDocument de consultare cu privire la Proiectul de Lege privind remediile \u0219i c\u0103ile de atac \u00een materie de atribuire a contractelor de achizi\u0163ie public\u0103 \u0219i a contractelor de concesiune \u015fi pentru organizarea \u015fi func\u0163ionarea Consiliului Na\u0163ional de Solu\u0163ionare a Contesta\u0163iilor ",
  "originalPage": "http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/proiecteachizitii/documentconsultareremediisicaideatac31072015.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Proiect Hot\u0103r\u00e2re ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/proiectHGlimite19102016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFproiectHGlimite19102016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Proiect Ordonan\u021ba de urgen\u021b\u0103 a Guvernului ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectOUGFE04102016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFProiectOUGFE04102016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Lege ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectLege_modifOG119_19092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Expunere de motive ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/EMProiectLege_modifOG119_19092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Hot\u0103r\u00e2re ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/proiectHGPC_12092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFproiectHGPC_12092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Hot\u0103r\u00e2re ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectHGCEC_09092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFProiectHGCEC_09092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Ordonan\u021b\u0103 de urgen\u021b\u0103 ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/RCAproiectOUG09092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFRCAproiectOUG09092016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect pentru aprobarea Normelor metodologice de aplicare",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/1hg_norme.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/2nf.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 1",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/4a1.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 1a",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/5a1a.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 1c ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/3a1c.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 1b",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/6a1b.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 1d",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/7a1d.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 2",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/8a2.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 2a",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/9a2a.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 2b",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/10a2b.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 2c",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/11a2c.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Anexa nr. 2d",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/12a2d.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Ordonan\u0163\u0103 de urgen\u0163\u0103 ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectOUG_25082016.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFProiectOUG_25082016.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Ordonan\u0163\u0103 de urgen\u0163\u0103 ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectOUGveterani_23082016.docx",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Not\u0103 de fundamentare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/NFProiectOUGveterani_23082016.doc",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": "Proiect Ordin ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/ProiectORDINmodifart4legeanr702015_08042016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}, {
  "titlu": " Referat de aprobare ",
  "originalPage": "http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro",
  "link": "http://discutii.mfinante.ro/static/10/Mfp/transparenta/RAProiectORDINmodifart4legeanr702015_08042016.pdf",
  "minister": "ministerul finantelor",
  "crawler": "finante"
}];
      
      
    }


  });
