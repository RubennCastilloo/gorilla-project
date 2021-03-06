import React, {useState, useEffect, useContext} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import EstadoContext from '../../context/estados/EstadoContext';
import NotaMunicipio from './NotaMunicipio';
import NotaProgramas from './NotaProgramas';

const animatedComponents = makeAnimated();

const EstadosRepublica = [
    {  value: 'Aguascalientes', label: 'Aguascalientes', municipios: [
        {value:"Aguascalientes", label:"Aguascalients"},
        {value:"Asientos", label:"Asientos"},
        {value:"Calvillo", label:"Calvillo"},
        {value:"Cosío", label:"Cosío"},
        {value:"El Llano", label:"El Llano"},
        {value:"Jesús María", label:"Jesús María"},
        {value:"Pabellón de Arteaga", label:"Pabellón de Arteaga"},
        {value:"Rincón de Romos", label:"Rincón de Romos"},
        {value:"San Francisco de los Romo", label:"San Francisco de los Romo"},
        {value:"San José de Gracia", label:"San José de Gracia"},
        {value:"Tepezalá", label:"Tepezalá"}
    ] },
    {  value: 'Baja California', label: 'Baja California', municipios: [
        {value:"Ensenada", label:"Ensenada"},
        {value:"Mexicali", label:"Mexicali"},
        {value:"Playas de Rosarito", label:"Playas de Rosarito"},
        {value:"Tecate", label:"Tecate"},
        {value:"Tijuana", label:"Tijuana"}
    ] },
    {  value: 'Baja California Sur', label: 'Baja California Sur', municipios: [
        {value:"Comondú", label:"Comondú"},
        {value:"La Paz", label:"La Paz"},
        {value:"Loreto", label:"Loreto"},
        {value:"Los Cabos", label:"Los Cabos"},
        {value:"Mulegé", label:"Mulegé"}
    ]},
    {  value: 'Campeche', label: 'Campeche', municipios: [
        {value:"Calakmul", label:"Calakmul"},
        {value:"Calkiní", label:"Calkiní"},
        {value:"Campeche", label:"Campeche"},
        {value:"Candelaria", label:"Candelaria"},
        {value:"Carmen", label:"Carmen"},
        {value:"Champotón", label:"Champotón"},
        {value:"Escárcega", label:"Escárcega"},
        {value:"Hecelchakán", label:"Hecelchakán"},
        {value:"Hopelchén", label:"Hopelchén"},
        {value:"Palizada", label:"Palizada"},
        {value:"Tenabo", label:"Tenabo"},
        {value:"Los Cabos", label:"Los Cabos"}
    ]},
    {  value: 'Chiapas', label: 'Chiapas', municipios: [
        {value:"Acacoyagua", label:"Acacoyagua"},
        {value:"Acala", label:"Acala"},
        {value:"Acapetahua", label:"Acapetahua"},
        {value:"Aldama", label:"Aldama"},
        {value:"Altamirano", label:"Altamirano"},
        {value:"Amatán", label:"Amatán"},
        {value:"Amatenango de la Frontera", label:"Amatenango de la Frontera"},
        {value:"Amatenango del Valle", label:"Amatenango del Valle"},
        {value:"Angel Albino Corzo", label:"Angel Albino Corzo"},
        {value:"Arriaga", label:"Arriaga"},
        {value:"Bejucal de Ocampo", label:"Bejucal de Ocampo"},
        {value:"Bella Vista", label:"Bella Vista"},
        {value:"Benemérito de las Américas", label:"Benemérito de las Américas"},
        {value:"Berriozábal", label:"Berriozábal"},
        {value:"Bochil", label:"Bochil"},
        {value:"Cacahoatán", label:"Cacahoatán"},
        {value:"Catazajá", label:"Catazajá"},
        {value:"Chalchihuitán", label:"Chalchihuitán"},
        {value:"Chamula", label:"Chamula"},
        {value:"Chanal", label:"Chanal"},
        {value:"Chapultenango", label:"Chapultenango"},
        {value:"Chenalhó", label:"Chenalhó"},
        {value:"Chiapa de Corzo", label:"Chiapa de Corzo"},
        {value:"Chiapilla", label:"Chiapilla"},
        {value:"Chicoasén", label:"Chicoasén"},
        {value:"Chicomuselo", label:"Chicomuselo"},
        {value:"Chilón", label:"Chilón"},
        {value:"Cintalapa", label:"Cintalapa"},
        {value:"Coapilla", label:"Coapilla"},
        {value:"Comitán de Domínguez", label:"Comitán de Domínguez"},
        {value:"Copainalá", label:"Copainalá"},
        {value:"El Bosque", label:"El Bosque"},
        {value:"El Porvenir", label:"El Porvenir"},
        {value:"Escuintla", label:"Escuintla"},
        {value:"Francisco León", label:"Francisco León"},
        {value:"Frontera Comalapa", label:"Frontera Comalapa"},
        {value:"Frontera Hidalgo", label:"Frontera Hidalgo"},
        {value:"Huehuetán", label:"Huehuetán"},
        {value:"Huitiupán", label:"Huitiupán"},
        {value:"Huixtán", label:"Huixtán"},
        {value:"Huixtla", label:"Huixtla"},
        {value:"Ixhuatán", label:"Ixhuatán"},
        {value:"Ixtacomitán", label:"Ixtacomitán"},
        {value:"Ixtapa", label:"Ixtapa"},
        {value:"Ixtapangajoya", label:"Ixtapangajoya"},
        {value:"Jiquipilas", label:"Jiquipilas"},
        {value:"Jitotol", label:"Jitotol"},
        {value:"Juárez", label:"Juárez"},
        {value:"La Concordia", label:"La Concordia"},
        {value:"La Grandeza", label:"La Grandeza"},
        {value:"La Independencia", label:"La Independencia"},
        {value:"La Libertad", label:"La Libertad"},
        {value:"La Trinitaria", label:"La Trinitaria"},
        {value:"Larráinzar", label:"Larráinzar"},
        {value:"Las Margaritas", label:"Las Margaritas"},
        {value:"Las Rosas", label:"Las Rosas"},
        {value:"Mapastepec", label:"Mapastepec"},
        {value:"Maravilla Tenejapa", label:"Maravilla Tenejapa"},
        {value:"Marqués de Comillas", label:"Marqués de Comillas"},
        {value:"Mazapa de Madero", label:"Mazapa de Madero"},
        {value:"Mazatán", label:"Mazatán"},
        {value:"Metapa", label:"Metapa"},
        {value:"Mitontic", label:"Mitontic"},
        {value:"Montecristo de Guerrero", label:"Montecristo de Guerrero"},
        {value:"Motozintla", label:"Motozintla"},
        {value:"Nicolás Ruíz", label:"Nicolás Ruíz"},
        {value:"Ocosingo", label:"Ocosingo"},
        {value:"Ocotepec", label:"Ocotepec"},
        {value:"Ocozocoautla de Espinosa", label:"Ocozocoautla de Espinosa"},
        {value:"Ostuacán", label:"Ostuacán"},
        {value:"Osumacinta", label:"Osumacinta"},
        {value:"Oxchuc", label:"Oxchuc"},
        {value:"Palenque", label:"Palenque"},
        {value:"Pantelhó", label:"Pantelhó"},
        {value:"Pantepec", label:"Pantepec"},
        {value:"Pichucalco", label:"Pichucalco"},
        {value:"Pijijiapan", label:"Pijijiapan"},
        {value:"Pueblo Nuevo Solistahuacán", label:"Pueblo Nuevo Solistahuacán"},
        {value:"Rayón", label:"Rayón"},
        {value:"Reforma", label:"Reforma"},
        {value:"Sabanilla", label:"Sabanilla"},
        {value:"Salto de Agua", label:"Salto de Agua"},
        {value:"San Andrés Duraznal", label:"San Andrés Duraznal"},
        {value:"San Cristóbal de las Casas", label:"San Cristóbal de las Casas"},
        {value:"San Fernando", label:"San Fernando"},
        {value:"San Juan Cancuc", label:"San Juan Cancuc"},
        {value:"San Lucas", label:"San Lucas"},
        {value:"Santiago el Pinar", label:"Santiago el Pinar"},
        {value:"Siltepec", label:"Siltepec"},
        {value:"Simojovel", label:"Simojovel"},
        {value:"Sitalá", label:"Sitalá"},
        {value:"Socoltenango", label:"Socoltenango"},
        {value:"Solosuchiapa", label:"Solosuchiapa"},
        {value:"Soyaló", label:"Soyaló"},
        {value:"Suchiapa", label:"Suchiapa"},
        {value:"Suchiate", label:"Suchiate"},
        {value:"Sunuapa", label:"Sunuapa"},
        {value:"Tapachula", label:"Tapachula"},
        {value:"Tapalapa", label:"Tapalapa"},
        {value:"Tapilula", label:"Tapilula"},
        {value:"Tecpatán", label:"Tecpatán"},
        {value:"Tenejapa", label:"Tenejapa"},
        {value:"Teopisca", label:"Teopisca"},
        {value:"Tila", label:"Tila"},
        {value:"Tonalá", label:"Tonalá"},
        {value:"Totolapa", label:"Totolapa"},
        {value:"Tumbalá", label:"Tumbalá"},
        {value:"Tuxtla Chico", label:"Tuxtla Chico"},
        {value:"Tuxtla Gutiérrez", label:"Tuxtla Gutiérrez"},
        {value:"Tuzantán", label:"Tuzantán"},
        {value:"Tzimol", label:"Tzimol"},
        {value:"Unión Juárez", label:"Unión Juárez"},
        {value:"Venustiano Carranza", label:"Venustiano Carranza"},
        {value:"Villa Comaltitlán", label:"Villa Comaltitlán"},
        {value:"Villa Corzo", label:"Villa Corzo"},
        {value:"Villaflores", label:"Villaflores"},
        {value:"Yajalón", label:"Yajalón"},
        {value:"Zinacantán", label:"Zinacantán"}
    ]},
    {  value: 'Chihuahua', label: 'Chihuahua', municipios: [
        {value:	'Ahumada',label:'Ahumada'},
        {value:'Aldama',label:'Aldama'},
        {value:'Allende',label:'Allende'},
        {value:'Aquiles Serdán',label:'Aquiles Serdán'},
        {value:'Ascensión',label:'Ascensión'},
        {value:'Bachíniva',label:'Bachíniva'},
        {value:'Balleza',label:'Balleza'},
        {value:'Batopilas',label:'Batopilas'},
        {value:'Bocoyna',label:'Bocoyna'},
        {value:'Buenaventura',label:'Buenaventura'},
        {value:'Camargo',label:'Camargo'},
        {value:'Carichí',label:'Carichí'},
        {value:'Casas Grandes',label:'Casas Grandes'},
        {value:'Chihuahua',label:'Chihuahua'},
        {value:'Chínipas',label:'Chínipas'},
        {value:'Coronado',label:'Coronado'},
        {value:'Coyame del Sotol',label:'Coyame del Sotol'},
        {value:'Cuauhtémoc',label:'Cuauhtémoc'},
        {value:'Cusihuiriachi',label:'Cusihuiriachi'},
        {value:'Delicias',label:'Delicias'},
        {value:'Dr. Belisario Domínguez',label:'Dr. Belisario Domínguez'},
        {value:'El Tule',label:'El Tule'},
        {value:'Galeana',label:'Galeana'},
        {value:'Gómez Farías',label:'Gómez Farías'},
        {value:'Gran Morelos',label:'Gran Morelos'},
        {value:'Guachochi',label:'Guachochi'},
        {value:'Guadalupe',label:'Guadalupe'},
        {value:'Guadalupe y Calvo',label:'Guadalupe y Calvo'},
        {value:'Guazapares',label:'Guazapares'},
        {value:'Guerrero',label:'Guerrero'},
        {value:'Hidalgo del Parral',label:'Hidalgo del Parral'},
        {value:'Huejotitán',label:'Huejotitán'},
        {value:'Ignacio Zaragoza',label:'Ignacio Zaragoza'},
        {value:'Janos',label:'Janos'},
        {value:'Jiménez',label:'Jiménez'},
        {value:'Juárez',label:'Juárez'},
        {value:'Julimes',label:'Julimes'},
        {value:'La Cruz',label:'La Cruz'},
        {value:'López',label:'López'},
        {value:'Madera',label:'Madera'},
        {value:'Maguarichi',label:'Maguarichi'},
        {value:'Manuel Benavides',label:'Manuel Benavides'},
        {value:'Matachí',label:'Matachí'},
        {value:'Matamoros',label:'Matamoros'},
        {value:'Meoqui',label:'Meoqui'},
        {value:'Morelos',label:'Morelos'},
        {value:'Moris',label:'Moris'},
        {value:'Namiquipa',label:'Namiquipa'},
        {value:'Nonoava',label:'Nonoava'},
        {value:'Nuevo Casas Grandes',label:'Nuevo Casas Grandes'},
        {value:'Ocampo',label:'Ocampo'},
        {value:'Ojinaga',label:'Ojinaga'},
        {value:'Praxedis G. Guerrero',label:'Praxedis G. Guerrero'},
        {value:'Riva Palacio',label:'Riva Palacio'},
        {value:'Rosales',label:'Rosales'},
        {value:'Rosario',label:'Rosario'},
        {value:'San Francisco de Borja',label:'San Francisco de Borja'},
        {value:'San Francisco de Conchos',label:'San Francisco de Conchos'},
        {value:'San Francisco del Oro',label:'San Francisco del Oro'},
        {value:'Santa Bárbara',label:'Santa Bárbara'},
        {value:'Santa Isabel',label:'Santa Isabel'},
        {value:'Satevó',label:'Satevó'},
        {value:'Saucillo',label:'Saucillo'},
        {value:'Temósachic',label:'Temósachic'},
        {value:'Urique',label:'Urique'},
        {value:'Uruachi',label:'Uruachi'},
        {value:'Valle de Zaragoza',label:'Valle de Zaragoza'} 
      ]},
    {  value: 'CDMX', label: 'Ciudad de México', municipios: [
        {value:"Álvaro Obregón", label:"Álvaro Obregón"},
        {value:"Azcapotzalco", label:"Azcapotzalco"},
        {value:"Benito Juárez", label:"Benito Juárez"},
        {value:"Coyoacán", label:"Coyoacán"},
        {value:"Cuajimalpa de Morelos", label:"Cuajimalpa de Morelos"},
        {value:"Cuauhtémoc", label:"Cuauhtémoc"},
        {value:"Gustavo A. Madero", label:"Gustavo A. Madero"},
        {value:"Iztacalco", label:"Iztacalco"},
        {value:"Iztapalapa", label:"Iztapalapa"},
        {value:"La Magdalena Contreras", label:"La Magdalena Contreras"},
        {value:"Miguel Hidalgo", label:"Miguel Hidalgo"},
        {value:"Milpa Alta", label:"Milpa Alta"},
        {value:"Tláhuac", label:"Tláhuac"},
        {value:"Tlalpan", label:"Tlalpan"},
        {value:"Venustiano Carranza", label:"Venustiano Carranza"},
        {value:"Xochimilco", label:"Xochimilco"}
    ]},
    {  value: 'Coahuila', label: 'Coahuila', municipios: [
        {value:"Abasolo", label:"Abasolo"},
        {value:"Acuña", label:"Acuña"},
        {value:"Allende", label:"Allende"},
        {value:"Arteaga", label:"Arteaga"},
        {value:"Candela", label:"Candela"},
        {value:"Castaños", label:"Castaños"},
        {value:"Cuatro Ciénegas", label:"Cuatro Ciénegas"},
        {value:"Escobedo", label:"Escobedo"},
        {value:"Francisco I. Madero", label:"Francisco I. Madero"},
        {value:"Frontera", label:"Frontera"},
        {value:"General Cepeda", label:"General Cepeda"},
        {value:"Guerrero", label:"Guerrero"},
        {value:"Hidalgo", label:"Hidalgo"},
        {value:"Jiménez", label:"Jiménez"},
        {value:"Juárez", label:"Juárez"},
        {value:"Lamadrid", label:"Lamadrid"},
        {value:"Matamoros", label:"Matamoros"},
        {value:"Monclova", label:"Monclova"},
        {value:"Morelos", label:"Morelos"},
        {value:"Múzquiz", label:"Múzquiz"},
        {value:"Nadadores", label:"Nadadores"},
        {value:"Nava", label:"Nava"},
        {value:"Ocampo", label:"Ocampo"},
        {value:"Parras", label:"Parras"},
        {value:"Piedras Negras", label:"Piedras Negras"},
        {value:"Progreso", label:"Progreso"},
        {value:"Ramos Arizpe", label:"Ramos Arizpe"},
        {value:"Sabinas", label:"Sabinas"},
        {value:"Sacramento", label:"Sacramento"},
        {value:"Saltillo", label:"Saltillo"},
        {value:"San Buenaventura", label:"San Buenaventura"},
        {value:"San Juan de Sabinas", label:"San Juan de Sabinas"},
        {value:"San Pedro", label:"San Pedro"},
        {value:"Sierra Mojada", label:"Sierra Mojada"},
        {value:"Torreón", label:"Torreón"},
        {value:"Viesca", label:"Viesca"},
        {value:"Villa Unión", label:"Villa Unión"},
        {value:"Zaragoza", label:"Zaragoza"}
    ]},
    {  value: 'Colima', label: 'Colima', municipios: [
        {value:"Armería", label:"Armería"},
        {value:"Colima", label:"Colima"},
        {value:"Comala", label:"Comala"},
        {value:"Coquimatlán", label:"Coquimatlán"},
        {value:"Cuauhtémoc", label:"Cuauhtémoc"},
        {value:"Ixtlahuacán", label:"Ixtlahuacán"},
        {value:"Manzanillo", label:"Manzanillo"},
        {value:"Minatitlán", label:"Minatitlán"},
        {value:"Tecomán", label:"Tecomán"},
        {value:"Villa de Álvarez", label:"Villa de Álvarez"}
    ]},
    {  value: 'Durango', label: 'Durango', municipios: [
        {value:"Canatlán", label:"Canatlán"},
        {value:"Canelas", label:"Canelas"},
        {value:"Coneto de Comonfort", label:"Coneto de Comonfort"},
        {value:"Cuencamé", label:"Cuencamé"},
        {value:"Durango", label:"Durango"},
        {value:"El Oro", label:"El Oro"},
        {value:"General Simón Bolívar", label:"General Simón Bolívar"},
        {value:"Gómez Palacio", label:"Gómez Palacio"},
        {value:"Guadalupe Victoria", label:"Guadalupe Victoria"},
        {value:"Guanaceví", label:"Guanaceví"},
        {value:"Hidalgo", label:"Hidalgo"},
        {value:"Indé", label:"Indé"},
        {value:"Lerdo", label:"Lerdo"},
        {value:"Mapimí", label:"Mapimí"},
        {value:"Mezquital", label:"Mezquital"},
        {value:"Nazas", label:"Nazas"},
        {value:"Nombre de Dios", label:"Nombre de Dios"},
        {value:"Nuevo Ideal", label:"Nuevo Ideal"},
        {value:"Ocampo", label:"Ocampo"},
        {value:"Otáez", label:"Otáez"},
        {value:"Pánuco de Coronado", label:"Pánuco de Coronado"},
        {value:"Peñón Blanco", label:"Peñón Blanco"},
        {value:"Poanas", label:"Poanas"},
        {value:"Pueblo Nuevo", label:"Pueblo Nuevo"},
        {value:"Rodeo", label:"Rodeo"},
        {value:"San Bernardo", label:"San Bernardo"},
        {value:"San Dimas", label:"San Dimas"},
        {value:"San Juan de Guadalupe", label:"San Juan de Guadalupe"},
        {value:"San Juan del Río", label:"San Juan del Río"},
        {value:"San Luis del Cordero", label:"San Luis del Cordero"},
        {value:"San Pedro del Gallo", label:"San Pedro del Gallo"},
        {value:"Santa Clara", label:"Santa Clara"},
        {value:"Santiago Papasquiaro", label:"Santiago Papasquiaro"},
        {value:"Súchil", label:"Súchil"},
        {value:"Tamazula", label:"Tamazula"},
        {value:"Tepehuanes", label:"Tepehuanes"},
        {value:"Tlahualilo", label:"Tlahualilo"},
        {value:"Topia", label:"Topia"},
        {value:"Vicente Guerrero", label:"Vicente Guerrero"}
    ]},
    {  value: 'Estado de México', label: 'Estado de México'},
    {  value: 'Guanajuato', label: 'Guanajuato', municipios: [
        {value:"Abasolo", label:"Abasolo"},
        {value:"Acámbaro", label:"Acámbaro"},
        {value:"Apaseo el Alto", label:"Apaseo el Alto"},
        {value:"Apaseo el Grande", label:"Apaseo el Grande"},
        {value:"Atarjea", label:"Atarjea"},
        {value:"Celaya", label:"Celaya"},
        {value:"Comonfort", label:"Comonfort"},
        {value:"Coroneo", label:"Coroneo"},
        {value:"Cortazar", label:"Cortazar"},
        {value:"Cuerámaro", label:"Cuerámaro"},
        {value:"Doctor Mora", label:"Doctor Mora"},
        {value:"Dolores Hidalgo Cuna de la Independencia Nacional", label:"Dolores Hidalgo Cuna de la Independencia Nacional"},
        {value:"Guanajuato", label:"Guanajuato"},
        {value:"Huanímaro", label:"Huanímaro"},
        {value:"Irapuato", label:"Irapuato"},
        {value:"Jaral del Progreso", label:"Jaral del Progreso"},
        {value:"Jerécuaro", label:"Jerécuaro"},
        {value:"León", label:"León"},
        {value:"Manuel Doblado", label:"Manuel Doblado"},
        {value:"Moroleón", label:"Moroleón"},
        {value:"Ocampo", label:"Ocampo"},
        {value:"Pénjamo", label:"Pénjamo"},
        {value:"Pueblo Nuevo", label:"Pueblo Nuevo"},
        {value:"Purísima del Rincón", label:"Purísima del Rincón"},
        {value:"Romita", label:"Romita"},
        {value:"Salamanca", label:"Salamanca"},
        {value:"Salvatierra", label:"Salvatierra"},
        {value:"San Diego de la Unión", label:"San Diego de la Unión"},
        {value:"San Felipe", label:"San Felipe"},
        {value:"San Francisco del Rincón", label:"San Francisco del Rincón"},
        {value:"San José Iturbide", label:"San José Iturbide"},
        {value:"San Luis de la Paz", label:"San Luis de la Paz"},
        {value:"San Miguel de Allende", label:"San Miguel de Allende"},
        {value:"Santa Catarina", label:"Santa Catarina"},
        {value:"Santa Cruz de Juventino Rosas", label:"Santa Cruz de Juventino Rosas"},
        {value:"Santiago Maravatío", label:"Santiago Maravatío"},
        {value:"Silao", label:"Silao"},
        {value:"Tarandacuao", label:"Tarandacuao"},
        {value:"Tarimoro", label:"Tarimoro"},
        {value:"Tierra Blanca", label:"Tierra Blanca"},
        {value:"Uriangato", label:"Uriangato"},
        {value:"Valle de Santiago", label:"Valle de Santiago"},
        {value:"Victoria", label:"Victoria"},
        {value:"Villagrán", label:"Villagrán"},
        {value:"Xichú", label:"Xichú"},
        {value:"Yuriria", label:"Yuriria"}
    ]},
    {  value: 'Guerrero', label: 'Guerrero', municipios: [
        {value:	"Acapulco de Juárez",label:"Acapulco de Juárez"},
        {value:"Acatepec",label:"Acatepec"},
        {value:"Ahuacuotzingo",label:"Ahuacuotzingo"},
        {value:"Ajuchitlán del Progreso",label:"Ajuchitlán del Progreso"},
        {value:"Alcozauca de Guerrero",label:"Alcozauca de Guerrero"},
        {value:"Alpoyeca",label:"Alpoyeca"},
        {value:"Apaxtla",label:"Apaxtla"},
        {value:"Arcelia",label:"Arcelia"},
        {value:"Atenango del Río",label:"Atenango del Río"},
        {value:"Atlamajalcingo del Monte",label:"Atlamajalcingo del Monte"},
        {value:"Atlixtac",label:"Atlixtac"},
        {value:"Atoyac de Álvarez",label:"Atoyac de Álvarez"},
        {value:"Ayutla de los Libres",label:"Ayutla de los Libres"},
        {value:"Azoyú",label:"Azoyú"},
        {value:"Benito Juárez",label:"Benito Juárez"},
        {value:"Buenavista de Cuéllar",label:"Buenavista de Cuéllar"},
        {value:"Chilapa de Álvarez",label:"Chilapa de Álvarez"},
        {value:"Chilpancingo de los Bravo",label:"Chilpancingo de los Bravo"},
        {value:"Coahuayutla de José María Izazaga",label:"Coahuayutla de José María Izazaga"},
        {value:"Cochoapa el Grande",label:"Cochoapa el Grande"},
        {value:"Cocula",label:"Cocula"},
        {value:"Copala",label:"Copala"},
        {value:"Copalillo",label:"Copalillo"},
        {value:"Copanatoyac",label:"Copanatoyac"},
        {value:"Coyuca de Benítez",label:"Coyuca de Benítez"},
        {value:"Coyuca de Catalán",label:"Coyuca de Catalán"},
        {value:"Cuajinicuilapa",label:"Cuajinicuilapa"},
        {value:"Cualác",label:"Cualác"},
        {value:"Cuautepec",label:"Cuautepec"},
        {value:"Cuetzala del Progreso",label:"Cuetzala del Progreso"},
        {value:"Cutzamala de Pinzón",label:"Cutzamala de Pinzón"},
        {value:"Eduardo Neri",label:"Eduardo Neri"},
        {value:"Florencio Villarreal",label:"Florencio Villarreal"},
        {value:"General Canuto A. Neri",label:"General Canuto A. Neri"},
        {value:"General Heliodoro Castillo",label:"General Heliodoro Castillo"},
        {value:"Huamuxtitlán",label:"Huamuxtitlán"},
        {value:"Huitzuco de los Figueroa",label:"Huitzuco de los Figueroa"},
        {value:"Iguala de la Independencia",label:"Iguala de la Independencia"},
        {value:"Igualapa",label:"Igualapa"},
        {value:"Iliatenco",label:"Iliatenco"},
        {value:"Ixcateopan de Cuauhtémoc",label:"Ixcateopan de Cuauhtémoc"},
        {value:"José Joaquín de Herrera",label:"José Joaquín de Herrera"},
        {value:"Juan R. Escudero",label:"Juan R. Escudero"},
        {value:"Juchitán",label:"Juchitán"},
        {value:"La Unión de Isidoro Montes de Oca",label:"La Unión de Isidoro Montes de Oca"},
        {value:"Leonardo Bravo",label:"Leonardo Bravo"},
        {value:"Malinaltepec",label:"Malinaltepec"},
        {value:"Marquelia",label:"Marquelia"},
        {value:"Mártir de Cuilapan",label:"Mártir de Cuilapan"},
        {value:"Metlatónoc",label:"Metlatónoc"},
        {value:"Mochitlán",label:"Mochitlán"},
        {value:"Olinalá",label:"Olinalá"},
        {value:"Ometepec",label:"Ometepec"},
        {value:"Pedro Ascencio Alquisiras",label:"Pedro Ascencio Alquisiras"},
        {value:"Petatlán",label:"Petatlán"},
        {value:"Pilcaya",label:"Pilcaya"},
        {value:"Pungarabato",label:"Pungarabato"},
        {value:"Quechultenango",label:"Quechultenango"},
        {value:"San Luis Acatlán",label:"San Luis Acatlán"},
        {value:"San Marcos",label:"San Marcos"},
        {value:"San Miguel Totolapan",label:"San Miguel Totolapan"},
        {value:"Taxco de Alarcón",label:"Taxco de Alarcón"},
        {value:"Tecoanapa",label:"Tecoanapa"},
        {value:"Técpan de Galeana",label:"Técpan de Galeana"},
        {value:"Teloloapan",label:"Teloloapan"},
        {value:"Tepecoacuilco de Trujano",label:"Tepecoacuilco de Trujano"},
        {value:"Tetipac",label:"Tetipac"},
        {value:"Tixtla de Guerrero",label:"Tixtla de Guerrero"},
        {value:"Tlacoachistlahuaca",label:"Tlacoachistlahuaca"},
        {value:"Tlacoapa",label:"Tlacoapa"},
        {value:"Tlalchapa",label:"Tlalchapa"},
        {value:"Tlalixtaquilla de Maldonado",label:"Tlalixtaquilla de Maldonado"},
        {value:"Tlapa de Comonfort",label:"Tlapa de Comonfort"},
        {value:"Tlapehuala",label:"Tlapehuala"},
        {value:"Xalpatláhuac",label:"Xalpatláhuac"},
        {value:"Xochihuehuetlán",label:"Xochihuehuetlán"},
        {value:"Xochistlahuaca",label:"Xochistlahuaca"},
        {value:"Zapotitlán Tablas",label:"Zapotitlán Tablas"},
        {value:"Zihuatanejo de Azueta",label:"Zihuatanejo de Azueta"},
        {value:"Zirándaro",label:"Zirándaro"},
        {value:"Zitlala",label:"Zitlala"}
    ]},
    {  value: 'Hidalgo', label: 'Hidalgo'},
    {  value: 'Jalisco', label: 'Jalisco'},
    {  value: 'Michoacán', label: 'Michoacán'},
    {  value: 'Morelos', label: 'Morelos'},
    {  value: 'Nayarit', label: 'Nayarit'},
    {  value: 'Nuevo León', label: 'Nuevo León'},
    {  value: 'Oaxaca', label: 'Oaxaca'},
    {  value: 'Puebla', label: 'Puebla'},
    {  value: 'Querétaro', label: 'Querétaro'},
    {  value: 'Quintana Roo', label: 'Quintana Roo'},
    {  value: 'San Luis Potosí', label: 'San Luis Potosí'},
    {  value: 'Sinaloa', label: 'Sinaloa'},
    {  value: 'Sonora', label: 'Sonora'},
    {  value: 'Tabasco', label: 'Tabasco'},
    {  value: 'Tamaulipas', label: 'Tamaulipas'},
    {  value: 'Tlaxcala', label: 'Tlaxcala'},
    {  value: 'Veracruz', label: 'Veracruz'},
    {  value: 'Yucatán', label: 'Yucatán'},
    {  value: 'Zacatecas', label: 'Zacatecas'}
  ];


const NotaDatos = () => {

    const [ estados, setEstados ] = useState([]);

    //Context de estados
    const estadoContext = useContext(EstadoContext);
    const {agregarEstado} = estadoContext;


    useEffect(() => {
        agregarEstado(estados);
    }, [estados]);



    const seleccionarEstado = estados => {
        setEstados(estados);
    }

   

    



    return(
        <>
                <div className="flex">
                    <div className="w-1/2">
                            <div className="ml-2">
                                <label className=" text-gray-700 text-sm font-bold" htmlFor="estado">
                                    Estado
                                </label>
                                <Select
                                    id="estado" 
                                    className=""
                                    options={ EstadosRepublica }
                                    components={animatedComponents}
                                    // defaultValue={EstadosRepublica[5]}
                                    isMulti={false}
                                    placeholder="Buscar"
                                    noOptionsMessage={ () => "No hay resultados"}
                                    onChange={opcion => seleccionarEstado(opcion)}
                                    getOptionLabel={opciones => opciones.label}
                                    getOptionValue={opciones => opciones.value}
                                />
                            </div>
                    </div> 

                    <NotaMunicipio />
                    </div>
                    <NotaProgramas />
            </>
    );
       
}

export default NotaDatos;