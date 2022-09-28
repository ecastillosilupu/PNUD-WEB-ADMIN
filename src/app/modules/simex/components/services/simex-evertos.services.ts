
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})

export class FormularioService {

    constructor() { }

    getListTitulo() {
        return {
            data: [
                {id: 5, descripcion: "Profesor", abreviatura: "Prof."},
                {id: 4, descripcion: "Doctor", abreviatura: "Dr."},
                {id: 3, descripcion: "Señora", abreviatura: "Sra."},
                {id: 2, descripcion: "Señor", abreviatura: "Sr."},
                {id: 1, descripcion: "Otro", abreviatura: "Otro"}
            ]
        };
    }
    
    getListGenero() {
        return {
            data: [
                {id: 1, descripcion: "Masculino", abreviatura: "M"},
                {id: 2, descripcion: "Femenino", abreviatura: "F"}
            ]
        };
    }
    
    getListTipoDocumento() {
        return {
            data: [
                {id: 1, descripcion: "DOCUMENTO NACIONAL DE IDENTIDAD", abreviatura: "DNI"},
                {id: 2, descripcion: "PASAPORTE", abreviatura: "PASAPORTE"}
            ]
        };
    }
    
    getListOrganizacion() {
        return {
            data: [
                {id: 2, descripcion: "Autoridad Portuaria Nacional - APN", abreviatura: "APN"},
                {id: 3, descripcion: "Centro de Operaciones de Emergencia Nacional - COEN", abreviatura: "COEN"},
                {id: 8, descripcion: "Comando Conjunto de las Fuerzas Armadas - CCFFAA", abreviatura: "CCFFAA"},
                {id: 4, descripcion: "Comité de Operación Económica del Sistema Interconectado Nacional"},
                {id: 22, descripcion: "Cuerpo General de Bomberos Voluntarios del Peru", abreviatura: "CGBVP"},
                {id: 6, descripcion: "Dirección de Hidrografía y Navegación", abreviatura: "DHN"},
                {id: 9, descripcion: "Ejército del Perú - EP", abreviatura: "EP"},
                {id: 7, descripcion: "Enel", abreviatura: "ENEL"},
                {id: 11, descripcion: "Fuerza Aerea del Perú - FAP", abreviatura: "FAP"},
                {id: 13, descripcion: "Instituto del Mar del Perú - IMARPE", abreviatura: "IMARPE"},
                {id: 12, descripcion: "Instituto Geofísico del Perú - IGP", abreviatura: "IGP"},
                {id: 16, descripcion: "Instituto Geológico, Minero y Metalúrgico - INGEMMET", abreviatura: "INGEMMET"},
                {id: 15, descripcion: "Instituto Nacional de Defensa Civil - INDECI", abreviatura: "INDECI"},
                {id: 19, descripcion: "Instituto Nacional de Radio y Televisión del Perú - IRTP", abreviatura: "IRTP"},
                {id: 17, descripcion: "Instituto Nacional Penitenciario - INPE", abreviatura: "INPE"},
                {id: 18, descripcion: "Instituto Peruano del Deporte - IPD", abreviatura: "IPD"},
                {id: 20, descripcion: "Lima Airport Partners", abreviatura: "LAP"},
                {id: 21, descripcion: "Luz del Sur", abreviatura: "LUZ DEL SUR"},
                {id: 24, descripcion: "Marina Guerra del Perú - MGP", abreviatura: "MGP"},
                {id: 30, descripcion: "Ministerio de Comercio Exterior y Turismo - MINCETUR", abreviatura: "MINCETUR"},
                {id: 31, descripcion: "Ministerio de Cultura", abreviatura: "MINCUL"},
                {id: 25, descripcion: "Ministerio de Desarrollo Agrario y Riego - MIDAGRI", abreviatura: "MIDAGRI"},
                {id: 26, descripcion: "Ministerio de Desarrollo e Inclusión Social - MIDIS", abreviatura: "MIDIS"},
                {id: 23, descripcion: "Ministerio de Economía y Finanzas - MEF", abreviatura: "MEF"},
                {id: 32, descripcion: "Ministerio de Educación - MINEDU", abreviatura: "MINEDU"},
                {id: 33, descripcion: "Ministerio de Energía y Minas - MINEM", abreviatura: "MINEM"},
                {id: 27, descripcion: "Ministerio de la Mujer y Poblaciones Vulnerables - MIMP", abreviatura: "MIMP"},
                {id: 14, descripcion: "Ministerio de la Producción - PRODUCE", abreviatura: "IMARPE - PRODUCE"},
                {id: 41, descripcion: "Ministerio de la Producción - PRODUCE", abreviatura: "PRODUCE"},
                {id: 42, descripcion: "Ministerio de Relaciones Exteriores - RREE", abreviatura: "RREE"},
                {id: 35, descripcion: "Ministerio de Salud - MINSA", abreviatura: "MINSA"},
                {id: 34, descripcion: "Ministerio de Salud - MINSA ", abreviatura: "MINSA"},
                {id: 37, descripcion: "Ministerio de Transportes y Comunicaciones - MTC", abreviatura: "MTC"},
                {id: 38, descripcion: "Ministerio de Vivienda Construcción y Saneamiento - MVCS", abreviatura: "MVCS"},
                {id: 28, descripcion: "Ministerio del Ambiente - MINAM", abreviatura: "MINAM"},
                {id: 29, descripcion: "Ministerio del Ambiente - MINAM", abreviatura: "MINAM"},
                {id: 36, descripcion: "Ministerio Público Fiscalía de la Nación - MPFN", abreviatura: "MPFN"},
                {id: 5, descripcion: "Organismo de Formalización de la Propiedad Informal", abreviatura: "COFOPRI"},
                {id: 40, descripcion: "Policía Nacional del Perú - PNP", abreviatura: "PNP"},
                {id: 39, descripcion: "Presidencia del Consejo de Ministros - PCM", abreviatura: "PCM"},
                {id: 10, descripcion: "Seguro Social de Salud - ESSALUD", abreviatura: "ESSALUD"},
                {id: 43, descripcion: "Servicio de Agua Potable y Alcantarillado de Lima - Sedapal"},
                {id: 44, descripcion: "Servicio Nacional de Meteorología e Hidrología del Perú"},
                {id: 45, descripcion: "Superintendencia Nacional de Aduanas y de Administración Tributaria"},
                {id: 46, descripcion: "Universidad Nacional Federico Villarreal", abreviatura: "UNFV"},
                {id: 1, descripcion: "zz", abreviatura: "-----------Otros------------"}
            ]
        };
    }
    
    getListTipoDieta() {
        return {
            data: [
            ]
        };
    }
    
    getListPaises() {
        return {
            data: [
                {id: 3, abreviatura: "AF", descripcion: "Afganistán", prefijoPais: "+93"},
                {id: 6, abreviatura: "AL", descripcion: "Albania", prefijoPais: "+355"},
                {id: 55, abreviatura: "DE", descripcion: "Alemania", prefijoPais: "+49"},
                {id: 1, abreviatura: "AD", descripcion: "Andorra", prefijoPais: "+376"},
                {id: 9, abreviatura: "AO", descripcion: "Angola ", prefijoPais: "+244"},
                {id: 5, abreviatura: "AI", descripcion: "Anguila", prefijoPais: "+1"},
                {id: 10, abreviatura: "AQ", descripcion: "Antártida", prefijoPais: "+672"},
                {id: 4, abreviatura: "AG", descripcion: "Antigua y Barbuda", prefijoPais: "+1"},
                {id: 8, abreviatura: "AN", descripcion: "Antillas Holandesas", prefijoPais: "+599"},
                {id: 188, abreviatura: "SA", descripcion: "Arabia Saudí", prefijoPais: "+966"},
                {id: 60, abreviatura: "DZ", descripcion: "Argelia", prefijoPais: "+213"},
                {id: 11, abreviatura: "AR", descripcion: "Argentina", prefijoPais: "+54"},
                {id: 7, abreviatura: "AM", descripcion: "Armenia", prefijoPais: "+374"},
                {id: 15, abreviatura: "AW", descripcion: "Aruba", prefijoPais: "+297"},
                {id: 14, abreviatura: "AU", descripcion: "Australia", prefijoPais: "+61"},
                {id: 13, abreviatura: "AT", descripcion: "Austria ", prefijoPais: "+43"},
                {id: 16, abreviatura: "AZ", descripcion: "Azerbayán", prefijoPais: "+994"},
                {id: 30, abreviatura: "BT", descripcion: "Bahamas", prefijoPais: "+1"},
                {id: 23, abreviatura: "BH", descripcion: "Bahrain", prefijoPais: "+973"},
                {id: 19, abreviatura: "BD", descripcion: "Bangladesh", prefijoPais: "+880"},
                {id: 18, abreviatura: "BB", descripcion: "Barbados", prefijoPais: "+1"},
                {id: 20, abreviatura: "BE", descripcion: "Bélgica", prefijoPais: "+32"},
                {id: 35, abreviatura: "BZ", descripcion: "Belice", prefijoPais: "+501"},
                {id: 25, abreviatura: "BJ", descripcion: "Benín", prefijoPais: "+229"},
                {id: 34, abreviatura: "BY", descripcion: "Bielorrusia", prefijoPais: "+375"},
                {id: 141, abreviatura: "MM", descripcion: "Birmania", prefijoPais: "+95"},
                {id: 28, abreviatura: "BO", descripcion: "Bolivia", prefijoPais: "+591"},
                {id: 17, abreviatura: "BA", descripcion: "Bosnia-Herzegovina", prefijoPais: "+387"},
                {id: 33, abreviatura: "BW", descripcion: "Botswana", prefijoPais: "+267"},
                {id: 29, abreviatura: "BR", descripcion: "Brasil", prefijoPais: "+55"},
                {id: 27, abreviatura: "BN", descripcion: "Brunei Darussalam", prefijoPais: "+673"},
                {id: 22, abreviatura: "BG", descripcion: "Bulgaria", prefijoPais: "+359"},
                {id: 21, abreviatura: "BF", descripcion: "Burkina Faso", prefijoPais: "+226"},
                {id: 24, abreviatura: "BI", descripcion: "Burundi", prefijoPais: "+257"},
                {id: 31, abreviatura: "BS", descripcion: "Bután", prefijoPais: "+975"},
                {id: 51, abreviatura: "CV", descripcion: "Cabo Verde", prefijoPais: "+238"},
                {id: 114, abreviatura: "KH", descripcion: "Camboya", prefijoPais: "+855"},
                {id: 45, abreviatura: "CM", descripcion: "Camerún", prefijoPais: "+237"},
                {id: 36, abreviatura: "CA", descripcion: "Canadá", prefijoPais: "+1"},
                {id: 209, abreviatura: "TD", descripcion: "Chad", prefijoPais: "+235"},
                {id: 49, abreviatura: "CS", descripcion: "Checoslovaquia (antiguo país)", prefijoPais: "+42"},
                {id: 44, abreviatura: "CL", descripcion: "Chile", prefijoPais: "+56"},
                {id: 46, abreviatura: "CN", descripcion: "China", prefijoPais: "+86"},
                {id: 53, abreviatura: "CY", descripcion: "Chipre", prefijoPais: "+357"},
                {id: 47, abreviatura: "CO", descripcion: "Colombia", prefijoPais: "+57"},
                {id: 118, abreviatura: "KP", descripcion: "Corea del Norte", prefijoPais: "+850"},
                {id: 119, abreviatura: "KR", descripcion: "Corea del Sur", prefijoPais: "+82"},
                {id: 42, abreviatura: "CI", descripcion: "Costa de marfil", prefijoPais: "+225"},
                {id: 48, abreviatura: "CR", descripcion: "Costa Rica", prefijoPais: "+506"},
                {id: 95, abreviatura: "HR", descripcion: "Croacia", prefijoPais: "+385"},
                {id: 50, abreviatura: "CU", descripcion: "Cuba", prefijoPais: "+53"},
                {id: 57, abreviatura: "DK", descripcion: "Dinamarca", prefijoPais: "+45"},
                {id: 56, abreviatura: "DJ", descripcion: "Djibouti", prefijoPais: "+253"},
                {id: 58, abreviatura: "DM", descripcion: "Dominica", prefijoPais: "+1"},
                {id: 61, abreviatura: "EC", descripcion: "Ecuador", prefijoPais: "+593"},
                {id: 63, abreviatura: "EG", descripcion: "Egipto", prefijoPais: "+20"},
                {id: 205, abreviatura: "SV", descripcion: "El Salvador", prefijoPais: "+503"},
                {id: 2, abreviatura: "AE", descripcion: "Emiratos Árabes Unidos", prefijoPais: "+971"},
                {id: 65, abreviatura: "ER", descripcion: "Eritrea", prefijoPais: "+291"},
                {id: 197, abreviatura: "SK", descripcion: "Eslovaquia", prefijoPais: "+421"},
                {id: 195, abreviatura: "SI", descripcion: "Eslovenia", prefijoPais: "+386"},
                {id: 66, abreviatura: "ES", descripcion: "España", prefijoPais: "+34"},
                {id: 228, abreviatura: "US", descripcion: "Estados Unidos de América", prefijoPais: "+1"},
                {id: 62, abreviatura: "EE", descripcion: "Estonia", prefijoPais: "+372"},
                {id: 67, abreviatura: "ET", descripcion: "Etiopía", prefijoPais: "+251"},
                {id: 69, abreviatura: "FJ", descripcion: "Fiji", prefijoPais: "+679"},
                {id: 173, abreviatura: "PH", descripcion: "Filipinas", prefijoPais: "+63"},
                {id: 68, abreviatura: "FI", descripcion: "Finlandia", prefijoPais: "+358"},
                {id: 73, abreviatura: "FR", descripcion: "Francia", prefijoPais: "+33"},
                {id: 74, abreviatura: "GA", descripcion: "Gabón", prefijoPais: "+241"},
                {id: 82, abreviatura: "GM", descripcion: "Gambia", prefijoPais: "+220"},
                {id: 76, abreviatura: "GE", descripcion: "Georgia", prefijoPais: "+995"},
                {id: 79, abreviatura: "GH", descripcion: "Ghana", prefijoPais: "+233"},
                {id: 80, abreviatura: "GI", descripcion: "Gibraltar", prefijoPais: "+350"},
                {id: 75, abreviatura: "GD", descripcion: "Granada", prefijoPais: "+1"},
                {id: 86, abreviatura: "GR", descripcion: "Grecia", prefijoPais: "+30"},
                {id: 81, abreviatura: "GL", descripcion: "Groenlandia", prefijoPais: "+299"},
                {id: 84, abreviatura: "GP", descripcion: "Guadalupe", prefijoPais: "+590"},
                {id: 89, abreviatura: "GU", descripcion: "Guam", prefijoPais: "+1"},
                {id: 88, abreviatura: "GT", descripcion: "Guatemala", prefijoPais: "+502"},
                {id: 91, abreviatura: "GY", descripcion: "Guayana", prefijoPais: "+592"},
                {id: 78, abreviatura: "GG", descripcion: "Guernsey", prefijoPais: "+44"},
                {id: 83, abreviatura: "GN", descripcion: "Guinea", prefijoPais: "+224"},
                {id: 85, abreviatura: "GQ", descripcion: "Guinea Ecuatorial", prefijoPais: "+240"},
                {id: 90, abreviatura: "GW", descripcion: "Guinea-Bissau", prefijoPais: "+245"},
                {id: 77, abreviatura: "GF", descripcion: "Guyana Francesa", prefijoPais: "+594"},
                {id: 96, abreviatura: "HT", descripcion: "Haití", prefijoPais: "+509"},
                {id: 94, abreviatura: "HN", descripcion: "Honduras", prefijoPais: "+504"},
                {id: 92, abreviatura: "HK", descripcion: "Hong Kong", prefijoPais: "+852"},
                {id: 97, abreviatura: "HU", descripcion: "Hungría", prefijoPais: "+36"},
                {id: 102, abreviatura: "IN", descripcion: "India", prefijoPais: "+91"},
                {id: 98, abreviatura: "ID", descripcion: "Indonesia", prefijoPais: "+62"},
                {id: 105, abreviatura: "IR", descripcion: "Irán", prefijoPais: "+98"},
                {id: 104, abreviatura: "IQ", descripcion: "Iraq", prefijoPais: "+964"},
                {id: 99, abreviatura: "IE", descripcion: "Irlanda", prefijoPais: "+353"},
                {id: 37, abreviatura: "CC", descripcion: "Isla de Cocos", prefijoPais: "+61"},
                {id: 101, abreviatura: "IM", descripcion: "Isla de Man", prefijoPais: "+44"},
                {id: 184, abreviatura: "RE", descripcion: "Isla Reunión", prefijoPais: "+262"},
                {id: 106, abreviatura: "IS", descripcion: "Islandia", prefijoPais: "+354"},
                {id: 26, abreviatura: "BM", descripcion: "Islas Bermudas", prefijoPais: "+1"},
                {id: 32, abreviatura: "BV", descripcion: "Islas Buvet", prefijoPais: "+47"},
                {id: 121, abreviatura: "KY", descripcion: "Islas Caimán", prefijoPais: "+1"},
                {id: 52, abreviatura: "CX", descripcion: "Islas Christmas", prefijoPais: "+61"},
                {id: 116, abreviatura: "KM", descripcion: "Islas Comores", prefijoPais: "+269"},
                {id: 43, abreviatura: "CK", descripcion: "Islas Cook", prefijoPais: "+682"},
                {id: 72, abreviatura: "FO", descripcion: "Islas Feroe", prefijoPais: "+298"},
                {id: 87, abreviatura: "GS", descripcion: "Islas Georgias y Sandwich del Sur", prefijoPais: "+500"},
                {id: 93, abreviatura: "HM", descripcion: "Islas Heard y McDonald", prefijoPais: "+61"},
                {id: 70, abreviatura: "FK", descripcion: "Islas Malvinas", prefijoPais: "+500"},
                {id: 144, abreviatura: "MP", descripcion: "Islas Marianas", prefijoPais: "+1"},
                {id: 139, abreviatura: "MH", descripcion: "Islas Marshall", prefijoPais: "+692"},
                {id: 158, abreviatura: "NF", descripcion: "Islas Norfolk", prefijoPais: "+672"},
                {id: 189, abreviatura: "SB", descripcion: "Islas Salomón", prefijoPais: "+677"},
                {id: 190, abreviatura: "SC", descripcion: "Islas Seychelles", prefijoPais: "+248"},
                {id: 196, abreviatura: "SJ", descripcion: "Islas Svalbard y Jan Mayens", prefijoPais: "+47"},
                {id: 208, abreviatura: "TC", descripcion: "Islas Turks y Caicos", prefijoPais: "+1"},
                {id: 227, abreviatura: "UM", descripcion: "Islas Ultramarinas de Estados Unidos ", prefijoPais: "+246"},
                {id: 235, abreviatura: "VI", descripcion: "Islas Vírgenes Americanas", prefijoPais: "+1"},
                {id: 234, abreviatura: "VG", descripcion: "Islas Vírgenes Británicas", prefijoPais: "+1"},
                {id: 238, abreviatura: "WF", descripcion: "Islas Wallis y Futuna", prefijoPais: "+681"},
                {id: 100, abreviatura: "IL", descripcion: "Israel", prefijoPais: "+972"},
                {id: 107, abreviatura: "IT", descripcion: "Italia", prefijoPais: "+39"},
                {id: 108, abreviatura: "JM", descripcion: "Jamaica", prefijoPais: "+1"},
                {id: 111, abreviatura: "JP", descripcion: "Japón", prefijoPais: "+81"},
                {id: 109, abreviatura: "JE", descripcion: "Jersey", prefijoPais: "+44"},
                {id: 110, abreviatura: "JO", descripcion: "Jordania", prefijoPais: "+962"},
                {id: 122, abreviatura: "KZ", descripcion: "Kazajistán", prefijoPais: "+7"},
                {id: 112, abreviatura: "KE", descripcion: "Kenia", prefijoPais: "+254"},
                {id: 115, abreviatura: "KI", descripcion: "Kiribati", prefijoPais: "+686"},
                {id: 120, abreviatura: "KW", descripcion: "Kuwait", prefijoPais: "+965"},
                {id: 113, abreviatura: "KG", descripcion: "Kyrgystán", prefijoPais: "+996"},
                {id: 123, abreviatura: "LA", descripcion: "Laos", prefijoPais: "+856"},
                {id: 129, abreviatura: "LS", descripcion: "Lesoto", prefijoPais: "+266"},
                {id: 132, abreviatura: "LV", descripcion: "Letonia", prefijoPais: "+371"},
                {id: 124, abreviatura: "LB", descripcion: "Líbano", prefijoPais: "+961"},
                {id: 128, abreviatura: "LR", descripcion: "Liberia", prefijoPais: "+231"},
                {id: 133, abreviatura: "LY", descripcion: "Libia", prefijoPais: "+218"},
                {id: 126, abreviatura: "LI", descripcion: "Liechtenstein", prefijoPais: "+423"},
                {id: 130, abreviatura: "LT", descripcion: "Lituania", prefijoPais: "+370"},
                {id: 131, abreviatura: "LU", descripcion: "Luxemburgo", prefijoPais: "+352"},
                {id: 143, abreviatura: "MO", descripcion: "Macao", prefijoPais: "+853"},
                {id: 138, abreviatura: "MK", descripcion: "Macedonia", prefijoPais: "+389"},
                {id: 137, abreviatura: "MG", descripcion: "Madagascar", prefijoPais: "+261"},
                {id: 153, abreviatura: "MY", descripcion: "Malasia", prefijoPais: "+60"},
                {id: 151, abreviatura: "MW", descripcion: "Malawi", prefijoPais: "+265"},
                {id: 150, abreviatura: "MV", descripcion: "Maldivas", prefijoPais: "+960"},
                {id: 140, abreviatura: "ML", descripcion: "Mali", prefijoPais: "+223"},
                {id: 148, abreviatura: "MT", descripcion: "Malta", prefijoPais: "+356"},
                {id: 134, abreviatura: "MA", descripcion: "Marruecos", prefijoPais: "+212"},
                {id: 145, abreviatura: "MQ", descripcion: "Martinica", prefijoPais: "+596"},
                {id: 149, abreviatura: "MU", descripcion: "Mauricio", prefijoPais: "+230"},
                {id: 146, abreviatura: "MR", descripcion: "Mauritania", prefijoPais: "+222"},
                {id: 241, abreviatura: "YT", descripcion: "Mayotte", prefijoPais: "+262"},
                {id: 152, abreviatura: "MX", descripcion: "México", prefijoPais: "+52"},
                {id: 71, abreviatura: "FM", descripcion: "Micronesia", prefijoPais: "+691"},
                {id: 136, abreviatura: "MD", descripcion: "Moldavia", prefijoPais: "+373"},
                {id: 135, abreviatura: "MC", descripcion: "Mónaco", prefijoPais: "+377"},
                {id: 142, abreviatura: "MN", descripcion: "Mongolia", prefijoPais: "+976"},
                {id: 147, abreviatura: "MS", descripcion: "Montserrat", prefijoPais: "+1"},
                {id: 154, abreviatura: "MZ", descripcion: "Mozambique", prefijoPais: "+258"},
                {id: 155, abreviatura: "NA", descripcion: "Namibia", prefijoPais: "+264"},
                {id: 164, abreviatura: "NR", descripcion: "Nauru", prefijoPais: "+674"},
                {id: 163, abreviatura: "NP", descripcion: "Nepal", prefijoPais: "+977"},
                {id: 160, abreviatura: "NI", descripcion: "Nicaragua", prefijoPais: "+505"},
                {id: 157, abreviatura: "NE", descripcion: "Níger", prefijoPais: "+227"},
                {id: 159, abreviatura: "NG", descripcion: "Nigeria", prefijoPais: "+234"},
                {id: 166, abreviatura: "NU", descripcion: "Niue", prefijoPais: "+683"},
                {id: 162, abreviatura: "NO", descripcion: "Noruega", prefijoPais: "+47"},
                {id: 156, abreviatura: "NC", descripcion: "Nueva Caledonia", prefijoPais: "+687"},
                {id: 167, abreviatura: "NZ", descripcion: "Nueva Zelanda", prefijoPais: "+64"},
                {id: 168, abreviatura: "OM", descripcion: "Omán", prefijoPais: "+968"},
                {id: 161, abreviatura: "NL", descripcion: "Países Bajos", prefijoPais: "+31"},
                {id: 174, abreviatura: "PK", descripcion: "Pakistán", prefijoPais: "+92"},
                {id: 181, abreviatura: "PW", descripcion: "Palau", prefijoPais: "+680"},
                {id: 169, abreviatura: "PA", descripcion: "Panamá", prefijoPais: "+507"},
                {id: 172, abreviatura: "PG", descripcion: "Papúa Nueva Guinea", prefijoPais: "+675"},
                {id: 182, abreviatura: "PY", descripcion: "Paraguay", prefijoPais: "+595"},
                {id: 170, abreviatura: "PE", descripcion: "Perú", prefijoPais: "+51"},
                {id: 177, abreviatura: "PN", descripcion: "Pitcairn", prefijoPais: "+64"},
                {id: 171, abreviatura: "PF", descripcion: "Polinesia Francesa", prefijoPais: "+689"},
                {id: 175, abreviatura: "PL", descripcion: "Polonia", prefijoPais: "+48"},
                {id: 180, abreviatura: "PT", descripcion: "Portugal", prefijoPais: "+351"},
                {id: 178, abreviatura: "PR", descripcion: "Puerto Rico", prefijoPais: "+1"},
                {id: 183, abreviatura: "QA", descripcion: "Qatar", prefijoPais: "+974"},
                {id: 226, abreviatura: "UK", descripcion: "Reino Unido", prefijoPais: "+44"},
                {id: 39, abreviatura: "CF", descripcion: "República Centroafricana", prefijoPais: "+236"},
                {id: 54, abreviatura: "CZ", descripcion: "República Checa", prefijoPais: "+420"},
                {id: 40, abreviatura: "CG", descripcion: "República del Congo", prefijoPais: "+242"},
                {id: 38, abreviatura: "CD", descripcion: "República Democrática del Congo ", prefijoPais: "+243"},
                {id: 59, abreviatura: "DO", descripcion: "República Dominicana", prefijoPais: "+1"},
                {id: 187, abreviatura: "RW", descripcion: "Ruanda", prefijoPais: "+250"},
                {id: 185, abreviatura: "RO", descripcion: "Rumanía", prefijoPais: "+40"},
                {id: 186, abreviatura: "RU", descripcion: "Rusia", prefijoPais: "+7"},
                {id: 64, abreviatura: "EH", descripcion: "Sáhara Occidental", prefijoPais: "+212"},
                {id: 239, abreviatura: "WS", descripcion: "Samoa", prefijoPais: "+685"},
                {id: 12, abreviatura: "AS", descripcion: "Samoa Americana", prefijoPais: "+1"},
                {id: 117, abreviatura: "KN", descripcion: "San Kitts y Nevis", prefijoPais: "+1"},
                {id: 199, abreviatura: "SM", descripcion: "San Marino", prefijoPais: "+378"},
                {id: 176, abreviatura: "PM", descripcion: "San Pedro y Miquelón", prefijoPais: "+508"},
                {id: 232, abreviatura: "VC", descripcion: "San Vicente y las Granadinas", prefijoPais: "+1"},
                {id: 194, abreviatura: "SH", descripcion: "Santa Helena", prefijoPais: "+290"},
                {id: 125, abreviatura: "LC", descripcion: "Santa Lucía", prefijoPais: "+1"},
                {id: 204, abreviatura: "ST", descripcion: "Santo Tomé y Príncipe", prefijoPais: "+239"},
                {id: 200, abreviatura: "SN", descripcion: "Senegal", prefijoPais: "+221"},
                {id: 198, abreviatura: "SL", descripcion: "Sierra Leona", prefijoPais: "+232"},
                {id: 193, abreviatura: "SG", descripcion: "Singapur", prefijoPais: "+65"},
                {id: 206, abreviatura: "SY", descripcion: "Siria", prefijoPais: "+963"},
                {id: 201, abreviatura: "SO", descripcion: "Somalia", prefijoPais: "+252"},
                {id: 127, abreviatura: "LK", descripcion: "Sri Lanka", prefijoPais: "+94"},
                {id: 207, abreviatura: "SZ", descripcion: "Suazilandia", prefijoPais: "+268"},
                {id: 243, abreviatura: "ZA", descripcion: "Sudáfrica", prefijoPais: "+27"},
                {id: 191, abreviatura: "SD", descripcion: "Sudán", prefijoPais: "+249"},
                {id: 192, abreviatura: "SE", descripcion: "Suecia", prefijoPais: "+46"},
                {id: 41, abreviatura: "CH", descripcion: "Suiza", prefijoPais: "+41"},
                {id: 202, abreviatura: "SR", descripcion: "Surinam", prefijoPais: "+597"},
                {id: 212, abreviatura: "TH", descripcion: "Tailandia", prefijoPais: "+66"},
                {id: 222, abreviatura: "TW", descripcion: "Taiwán", prefijoPais: "+886"},
                {id: 223, abreviatura: "TZ", descripcion: "Tanzania", prefijoPais: "+255"},
                {id: 213, abreviatura: "TJ", descripcion: "Tayikistán", prefijoPais: "+992"},
                {id: 103, abreviatura: "IO", descripcion: "Territorio británico del Océano Índico"},
                {id: 179, abreviatura: "PS", descripcion: "Territorios Palestinos", prefijoPais: "+970"},
                {id: 210, abreviatura: "TF", descripcion: "Tierras Australes y Antárticas Francesas"},
                {id: 218, abreviatura: "TP", descripcion: "Timor Oriental", prefijoPais: "+670"},
                {id: 211, abreviatura: "TG", descripcion: "Togo", prefijoPais: "+228"},
                {id: 214, abreviatura: "TK", descripcion: "Tokelau", prefijoPais: "+690"},
                {id: 217, abreviatura: "TO", descripcion: "Tonga", prefijoPais: "+676"},
                {id: 220, abreviatura: "TT", descripcion: "Trinidad y Tobago", prefijoPais: "+1"},
                {id: 216, abreviatura: "TN", descripcion: "Túnez", prefijoPais: "+216"},
                {id: 215, abreviatura: "TM", descripcion: "Turkmenistán", prefijoPais: "+993"},
                {id: 219, abreviatura: "TR", descripcion: "Turquía", prefijoPais: "+90"},
                {id: 221, abreviatura: "TV", descripcion: "Tuvalu", prefijoPais: "+688"},
                {id: 224, abreviatura: "UA", descripcion: "Ucrania", prefijoPais: "+380"},
                {id: 225, abreviatura: "UG", descripcion: "Uganda", prefijoPais: "+256"},
                {id: 203, abreviatura: "SU", descripcion: "URSS", prefijoPais: "+7"},
                {id: 229, abreviatura: "UY", descripcion: "Uruguay", prefijoPais: "+598"},
                {id: 230, abreviatura: "UZ", descripcion: "Uzbekistán", prefijoPais: "+998"},
                {id: 237, abreviatura: "VU", descripcion: "Vanuatu", prefijoPais: "+678"},
                {id: 231, abreviatura: "VA", descripcion: "Vaticano", prefijoPais: "+379"},
                {id: 233, abreviatura: "VE", descripcion: "Venezuela", prefijoPais: "+58"},
                {id: 236, abreviatura: "VN", descripcion: "Vietnam", prefijoPais: "+84"},
                {id: 240, abreviatura: "YE", descripcion: "Yemen", prefijoPais: "+967"},
                {id: 242, abreviatura: "YU", descripcion: "Yugoslavia (antiguo país)", prefijoPais: "+38"},
                {id: 245, abreviatura: "ZR", descripcion: "Zaire (antiguo país)", prefijoPais: "+32"},
                {id: 244, abreviatura: "ZM", descripcion: "Zambia", prefijoPais: "+260"},
                {id: 246, abreviatura: "ZW", descripcion: "Zimbabwe", prefijoPais: "+263"}
            ]
        };
    }
    
}  