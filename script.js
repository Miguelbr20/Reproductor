// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); 
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');


const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); 

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); 
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); 

let songs = [
    {
        id: 1,
        title: "No tiene sentido",
        artist: "Beéle",
        album: "Single",
        albumArtUrl: "https://beele-borondo-2025.playurbano.com/wp-content/uploads/2025/05/Beele-Algo-Bueno.jpg",
        audioSrc: "audio/No tiene sentido.mp3",
        videoBgSrc: "videos/Jonas_Martha.mp4", 
        lyrics: [
            { time: 7, text: "Baby, ¿qué tú espera'?" },
            { time: 11, text: "Si tú y yo conectamo la primera vez que nos vimo a lo' ojo'" },
            { time: 15, text: "No hay manera (¡óyelo!)" },
            { time: 17, text: "De que me olvide de esa piel canela" },
            { time: 21, text: "Quedaron secuela' de esa noche" },
            { time: 24, text: "Que tú y yo paramo el tiempo" },
            { time: 27, text: "Frente a frente, cuerpo a cuerpo" },
            { time: 31, text: "Yo no sé por qué tan lejos" },
            { time: 35, text: "Ma, ah-ah" },
            { time: 38, text: "No tiene sentido que con esto que sentimo" },
            { time: 41, text: "Tú esté' por otro camino, no es normal" },
            { time: 44, text: "Bebé, tú allá y yo acá" },
            { time: 47, text: "Eso no tiene sentido, baby, si ya coincidimo" },
            { time: 50, text: "Y un par de cosas vivimo, no es normal" },
            { time: 53, text: "Bebé, tú allá y yo acá" },
            { time: 56, text: "Eso no tiene sentido" },
            { time: 59, text: "Eso no tiene sentido" },
            { time: 62, text: "No tiene sentido" },
            { time: 65, text: "No tiene sentido" },
            { time: 68, text: "Dime, mami, qué fue, qué se le hizo" },
            { time: 71, text: "Que hace tiempo no te localizo" },
            { time: 74, text: "Manda ubi, que yo te aterrizo (uh, uh)" },
            { time: 77, text: "Te pienso y me erizo (ay-eh)" },
            { time: 80, text: "A tu nombre yo me desahogo el video que hicimo" },
            { time: 83, text: "A veces lo utilizo" },
            { time: 86, text: "Las ganas en el cielo" },
            { time: 89, text: "Y la ropa en el piso" },
            { time: 92, text: "Bebé, hace tiempo que no te veo" },
            { time: 95, text: "Que no me escribe', que no te leo" },
            { time: 98, text: "Con mi mente a veces peleo" },
            { time: 101, text: "Porque me dice que me olvide, baby" },
            { time: 104, text: "Que tú y yo paramo el tiempo" },
            { time: 107, text: "Frente a frente, cuerpo a cuerpo" },
            { time: 110, text: "Yo no sé por qué tan lejos" },
            { time: 113, text: "Ma, ah-ah" },
            { time: 116, text: "No tiene sentido que con esto que sentimo" },
            { time: 119, text: "Tú esté' por otro camino, no es normal" },
            { time: 115, text: "Bebé, tú allá y yo acá" },
            { time: 125, text: "Eso no tiene sentido, baby, si ya coincidimo" },
            { time: 128, text: "Y un par de cosas vivimo, no es normal" },
            { time: 131, text: "Bebé, tú allá y yo acá" },
            { time: 134, text: "Eso no tiene sentido (wuh, wuh, wuh)" },
            { time: 137, text: "Eso no tiene sentido (ay-eh)" },
            { time: 140, text: "No tiene sentido" },
            { time: 143, text: "No tiene sentido" }
        ]
    },
    {
        id: 2,
        title: "No tiene sentido",
        artist: "Beéle",
        album: "Single",
        albumArtUrl: "https://beele-borondo-2025.playurbano.com/wp-content/uploads/2025/05/Beele-Algo-Bueno.jpg",
        audioSrc: "audio/Mi refe.mp3",
        videoBgSrc: "videos/mi_refe.mp4", 
        lyrics: [
    { time: 17, text: "To' el mundo ya supone que tú y yo somo' algo (oh)" },
    { time: 24, text: "Confirman en la calle que contigo es que salgo (uh)" },
    { time: 30, text: "¿Entonce' pa' qué mentirno' má'? (Ah)" },
    { time: 33, text: "No sé pa' qué seguir disimulando más (no)" },
    { time: 37, text: "Qué importe un culo lo que piensen los demás (ay-yeah)" },
    { time: 41, text: "Tú y yo nacimos pa' estar juntos" },
    { time: 44, text: "Yo me pregunto" },
    { time: 46, text: "¿Pa' qué putas esconderno'?" },
    { time: 49, text: "Dejemo' tanto misterio para verno'" },
    { time: 52, text: "Yo te gusto, tú me gustas" },
    { time: 54, text: "Eso hace rato se sabe" },
    { time: 57, text: "Delante de la gente bésame" },
    { time: 60, text: "¿Pa' qué putas esconderno'?" },
    { time: 63, text: "Dejemo' tanto misterio para verno'" },
    { time: 66, text: "Yo te gusto, tú me gustas" },
    { time: 68, text: "Eso hace rato se sabe" },
    { time: 71, text: "Delante de la gente bésame" },
    { time: 74, text: "Vo'a presumir que estás dura" },
    { time: 77, text: "Yo tu gángster, tú mi chula" },
    { time: 80, text: "Contigo me pasa" },
    { time: 82, text: "Que no me importa lo que comenten" },
    { time: 85, text: "Si nos llegan a la altura" },
    { time: 87, text: "Tienes vibra de alma pura" },
    { time: 89, text: "Para el mal, ella es mi cura" },
    { time: 90, text: "Su cintura está demente" },
    { time: 93, text: "Yo me enamoré, eh, eh, eh, eh" },
    { time: 96, text: "De ti más me enamoro, oh, oh, oh, oh (ah)" },
    { time: 101, text: "Pon la espalda en la pared, eh, eh, eh, eh (eoh)" },
    { time: 104, text: "Sin pensar que alguien nos vio, oh, oh, oh, oh" },
    { time: 108, text: "De ti yo me enamoré, eh, eh, eh, eh (aye)" },
    { time: 111, text: "De ti más me enamoro, oh, oh, oh, oh" },
    { time: 116, text: "Pon la espalda en la pared, eh, eh, eh, eh" },
    { time: 119, text: "Sin pensar que alguien nos vio, oh, oh, oh, oh (no, no)" },
    { time: 123, text: "¿Pa' qué putas esconderno'?" },
    { time: 127, text: "Dejemo' tanto misterio para verno'" },
    { time: 130, text: "Yo te gusto, tú me gustas" },
    { time: 132, text: "Eso hace rato se sabe" },
    { time: 135, text: "Delante de la gente bésame" },
    { time: 138, text: "¿Pa' qué putas esconderno'?" },
    { time: 141, text: "O-O-Ovy On The Drums" }
]
    },
    
     {
        id: 3,
        title: "Miguel Papasito",
        artist: "KAROL G",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/47206947/r/il/16ad2b/5639412394/il_1588xN.5639412394_n1tb.jpg",
        audioSrc: "audio/Papasito.mp3",
        videoBgSrc: "videos/Miguel.mp4", 
    lyrics: [
    { time: 15, text: "Ovy On The Drums" },
    { time: 18, text: "I saw you there, looking so good tonight" },
    { time: 22, text: "I swear to God, I'm dying to kiss you" },
    { time: 26, text: "My heart, bebé, it's beating so, so fast" },
    { time: 30, text: "I didn't know how much that I need you" },
    { time: 34, text: "You're getting closer, and now my legs just started shaking" },
    { time: 39, text: "Would be delicious to have a taste of you right now" },
    { time: 43, text: "If I could try, it would make me so psychotic" },
    { time: 47, text: "For that addiction, I would need a rehab" },
    { time: 51, text: "Miguel Papacito, ay, qué rico tú" },
    { time: 54, text: "I want you and not just for a little" },
    { time: 57, text: "Touching your body is my desire, uh" },
    { time: 60, text: "Please don't be mad si me le robo un besito" },
    { time: 64, text: "Y es que quiero algo más, que suene más oficial" },
    { time: 68, text: "Hacerte mi propiedad, y no quiero que se me haga tarde, sí" },
    { time: 72, text: "No está mal, lo que hacemos es genial" },
    { time: 76, text: "Fotico en la Polaroid, te la dejo pa' que me recuerdes" },
    { time: 80, text: "I'm gonna hold you so, so tight, it's my deseo" },
    { time: 84, text: "I'm gonna play your Juliet, and you my Romeo" },
    { time: 88, text: "'Cause no one loves you like me, with you I feel so lucky" },
    { time: 92, text: "Baby, te quiero pa' mí" },
    { time: 95, text: "Love me hard with sentimiento" },
    { time: 98, text: "Stay together and live la vida loca" },
    { time: 102, text: "Let's go and live it with no regrets and shadows" },
    { time: 106, text: "For that addiction, I would need a rehab" },
    { time: 110, text: "Miguel Papacito, ay, qué rico tú" },
    { time: 113, text: "I want you and not just for a little" },
    { time: 116, text: "Touching your body is my desire, uh" },
    { time: 119, text: "Please don't be mad si me le robo un besito" },
    { time: 123, text: "Ay" },
    { time: 125, text: "Amor" },
    { time: 127, text: "You're my dream come true" },
    { time: 131, text: "Miguel Papacito, ay, qué rico tú" },
    { time: 134, text: "Te quiero pa' mí, no pa' un ratico" },
    { time: 137, text: "Desear tu cuerpo es mi delito, uh" },
    { time: 140, text: "No se me enoje si le robo un besito" }
]
     },
     {
        id: 4,
        title: "Verano Rosa",
        artist: "KAROL G, Feid",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/47206947/r/il/16ad2b/5639412394/il_1588xN.5639412394_n1tb.jpg",
        audioSrc: "audio/Verano Rosa.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 16, text: "Estoy a ley de una señal, márcame al celular" },
    { time: 20, text: "Que estoy caliente y sin ti me vo'a quemar" },
    { time: 24, text: "Dime qué era lo que tú hacías con ella en vez de llegar" },
    { time: 28, text: "Este party no es lo mismo si no estás" },
    { time: 32, text: "Hoy las botellas son a tu nombre" },
    { time: 35, text: "Hoy hago lo que sea por mirarte" },
    { time: 38, text: "Así lo haya intentado con otros hombres" },
    { time: 41, text: "Nadie lo hace como tú lo haces" },
    { time: 45, text: "Hoy las botellas son a tu nombre" },
    { time: 48, text: "Hoy hago lo que sea por mirarte" },
    { time: 51, text: "Así lo hayas intentado con otros hombres" },
    { time: 54, text: "Nadie lo hace como tú lo haces (¡wuh!)" },
    { time: 58, text: "I really love cuando él me dice: \"Hola mami, ¿qué más?\"" },
    { time: 62, text: "Rápido yo le respondo que dónde hay que llegar" },
    { time: 66, text: "Me acuerdo de ti sin ropa y no sé cómo explicar" },
    { time: 70, text: "Que fuimos un verano rosa, un verano pa no olvidar" },
    { time: 74, text: "Esa tanguita de la perla, mami, hoy se te cae" },
    { time: 78, text: "Ese topcito transparente deja ver lo que hay" },
    { time: 82, text: "Ya se te notan los gains, eso allá abajo está tight" },
    { time: 86, text: "Y no hay ninguna como tú, bebé, como tú no hay" },
    { time: 90, text: "Estoy a ley de una señal, márcame al celular" },
    { time: 94, text: "Que estoy caliente y sin ti me vo'a quemar" },
    { time: 98, text: "Dime qué era lo que tú hacías con ella en vez de llegar" },
    { time: 102, text: "Este party no es lo mismo si no estás" },
    { time: 106, text: "Hoy las botellas son a tu nombre" },
    { time: 109, text: "Hoy hago lo que sea por mirarte" },
    { time: 112, text: "Así lo haya intentado con otros hombres" },
    { time: 115, text: "Nadie lo hace como tú lo haces (¡wuh!)" },
    { time: 119, text: "Que tú me corres a otro nivel, baby, responde, no seas cruel" },
    { time: 123, text: "Volvamos la casa como un motel, así que alista las Duracell" },
    { time: 127, text: "Para donde tú quieras coger, mai, yo le llego" },
    { time: 131, text: "Los recuerdo que yo te guardé, hoy me los bebo" },
    { time: 135, text: "Esa noche no se me olvida, tú guayándome y yo prendida" },
    { time: 139, text: "Y aunque yo he querido borrarlo, estás presente y pasan los días" },
    { time: 143, text: "Yo sé que quieres buscarme" },
    { time: 145, text: "Tú estás loquito por darme" },
    { time: 147, text: "Y yo que pienso dejarme" },
    { time: 151, text: "Estoy a ley de una señal, márcame al celular" },
    { time: 155, text: "Que estoy caliente y sin ti me vo'a quemar" },
    { time: 159, text: "Dime qué era lo que tú hacías con ese en vez de llegar" },
    { time: 163, text: "Este party no es lo mismo si no estás" },
    { time: 167, text: "Hoy las botellas son a tu nombre" },
    { time: 170, text: "Hoy hago lo que sea por mirarte" },
    { time: 173, text: "Así lo haya intentado con otros hombres" },
    { time: 176, text: "Nadie lo hace como tú lo haces" }
]
     },
     {
        id: 5,
        title: "Si Antes Te Hubiera Conocido",
        artist: "KAROL G",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/47206947/r/il/16ad2b/5639412394/il_1588xN.5639412394_n1tb.jpg",
        audioSrc: "audio/Si Antes Te Hubiera Conocido.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 18, text: "¿Qué hubiera sido?" },
    { time: 21, text: "Si antes te hubiera conocido" },
    { time: 24, text: "Seguramente" },
    { time: 26, text: "Estarías bailando esta conmigo" },
    { time: 29, text: "No como amigos" },
    { time: 31, text: "Sino como otra cosa" },
    { time: 34, text: "Usted cerca me pone peligrosa" },
    { time: 37, text: "Por un besito hago cualquier cosa" },
    { time: 40, text: "La novia suya me pone celosa" },
    { time: 43, text: "Y aunque es hermosa, ey" },
    { time: 45, text: "No te va a tratar como yo" },
    { time: 47, text: "No te va a besar como yo" },
    { time: 49, text: "No está tan rica así como yo" },
    { time: 51, text: "Ella es tímida y yo no" },
    { time: 53, text: "Con estas ganas que tengo yo" },
    { time: 55, text: "Me atrevo a comerme a los do'" },
    { time: 58, text: "Hoy estás jangueando con ella" },
    { time: 61, text: "Pero, mmm, después tal vez no" },
    { time: 65, text: "¿Qué hubiera sido?" },
    { time: 68, text: "Si antes te hubiera conocido" },
    { time: 71, text: "Seguramente" },
    { time: 73, text: "Estarías bailando esta conmigo" },
    { time: 76, text: "No como amigos, ey" },
    { time: 80, text: "¿Qué hubiera sido?" },
    { time: 83, text: "Ay, si antes te hubiera conocido" },
    { time: 86, text: "Seguramente" },
    { time: 88, text: "Estarías bailando esta conmigo" },
    { time: 91, text: "No como amigos, ey" },
    { time: 95, text: "Y yo te veo y no sé cómo actuar" },
    { time: 98, text: "Bebé, pa' conquistarte que me pasen el manual" },
    { time: 102, text: "Espero lo que sea, yo no me voy a quitar" },
    { time: 105, text: "Tengo fe que esos ojito' un día me van a mirar" },
    { time: 109, text: "Yo me caso contigo" },
    { time: 111, text: "Mi nombre suena bien con tu apellido" },
    { time: 114, text: "'Toy esperando el primer descuido" },
    { time: 117, text: "Pa' presentarte como mi marido" },
    { time: 121, text: "Yo me caso contigo" },
    { time: 123, text: "Mi nombre suena bien con tu apellido" },
    { time: 126, text: "'Toy esperando el primer descuido" },
    { time: 129, text: "Pa' presentarte como mi marido" },
    { time: 133, text: "No has entendido que" },
    { time: 135, text: "No te va a tratar como yo" },
    { time: 137, text: "No te va a besar como yo" },
    { time: 139, text: "No está tan rica así como yo" },
    { time: 141, text: "Ella es tímida y yo no" },
    { time: 143, text: "Con estas ganas que tengo yo" },
    { time: 145, text: "Me atrevo a comerme a los do'" },
    { time: 148, text: "Hoy estás jangueando con ella" },
    { time: 151, text: "Pero, mmm, después tal vez no" },
    { time: 155, text: "¿Qué hubiera sido?" },
    { time: 158, text: "(Si antes te hubiera conocido) ey, ¿Cómo?" },
    { time: 161, text: "Seguramente" },
    { time: 163, text: "Estarías bailando esta conmigo" },
    { time: 166, text: "No como amigos, no, no, no" },
    { time: 170, text: "Ey, ey, ey (si antes te hubiera conocido)" },
    { time: 173, text: "Chiqui-cha, chiqui-cha, chiqui-cha, chiqui-cha (seguramente)" },
    { time: 176, text: "(Estarías bailando esta conmigo)" },
    { time: 178, text: "(No como amigos)" },
    { time: 180, text: "(¿Qué hubiera sido?)" },
    { time: 182, text: "(Si antes te hubiera conocido)" }
]
     },
     {
        id: 6,
        title: "Provenza",
        artist: "KAROL G",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/47206947/r/il/16ad2b/5639412394/il_1588xN.5639412394_n1tb.jpg",
        audioSrc: "audio/Provenza.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 17, text: "Baby, ¿qué más?" },
    { time: 20, text: "Hace rato que no sé na' de ti" },
    { time: 23, text: "Taba con alguien, pero ya estoy free" },
    { time: 26, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" },
    { time: 29, text: "Tú dime, dónde está'" },
    { time: 32, text: "Que hace rato que no sé na' de ti" },
    { time: 35, text: "Taba con alguien, pero ya estoy free" },
    { time: 38, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" },
    { time: 43, text: "Papi, nos perdemo', nos parqueamo' y lo prendemo'" },
    { time: 46, text: "Pa la seca algo bebemo, y cuando nos emborrachemo'" },
    { time: 49, text: "Una de reguetón ponemo' y nos vamo' a donde nos podamos querer" },
    { time: 53, text: "Nos podamos comer (eh-ah)" },
    { time: 57, text: "Papi, nos perdemo', nos parqueamo' y lo prendemo'" },
    { time: 60, text: "Pa la seca algo bebemo', y cuando nos emborrachemo'" },
    { time: 63, text: "Una de reguetón ponemo' y nos vamo' a donde nos podamos querer" },
    { time: 67, text: "Nos podamos comer" },
    { time: 72, text: "Baby, ¿qué más?" },
    { time: 75, text: "Hace rato que no sé na' de ti (wuh, yeh)" },
    { time: 78, text: "Taba con alguien, pero ya estoy free ('toy free)" },
    { time: 81, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" },
    { time: 84, text: "Tú dime, dónde está' (tú dime, tú dime)" },
    { time: 87, text: "Que hace rato que no sé na' de ti (na de ti)" },
    { time: 90, text: "Taba con alguien, pero ya estoy free (wuh)" },
    { time: 93, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" },
    { time: 98, text: "¿Qué malo puede pasar?" },
    { time: 100, text: "¿Que nos vaya mal? Estoy afuera, sal" },
    { time: 103, text: "Tenemos cosas pendientes por repasar" },
    { time: 106, text: "Tú ere' un polvito difícil de reemplazar (sí)" },
    { time: 109, text: "No sé si te convenza (ey)" },
    { time: 111, text: "Nos damo' un rocecito por Provenza" },
    { time: 114, text: "Y si la cosa se pone tensa, en mi cama la recompensa" },
    { time: 117, text: "O viceversa, ¿por qué lo piensas?" },
    { time: 120, text: "Pasamo' por el barrio por hierba" },
    { time: 123, text: "Ponlo en la hookah pa que se disuelva" },
    { time: 126, text: "La química todavía se conserva" },
    { time: 129, text: "Y yo te lo hago rico para que vuelva'" },
    { time: 132, text: "Aunque mañana me voy" },
    { time: 134, text: "Aprovéchame, que aquí estoy" },
    { time: 136, text: "Puesta pa ti" },
    { time: 138, text: "Por eso te escribí" },
    { time: 143, text: "Baby, ¿qué más?" },
    { time: 146, text: "Hace rato que no sé na de ti" },
    { time: 149, text: "Taba con alguien, pero ya estoy free (huh)" },
    { time: 152, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" },
    { time: 155, text: "Tú dime, dónde está' (tú dime, tú dime)" },
    { time: 158, text: "Que hace rato que no sé na' de ti (na de ti)" },
    { time: 161, text: "Taba con alguien, pero ya estoy free (wuh)" },
    { time: 164, text: "Puesta pa revivir viejos tiempo', no salgo hace tiempo" }
]
     },
     {
        id: 7,
        title: "LUNA",
        artist: "Feid",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/45238099/r/il/eef7bc/5245841123/il_1588xN.5245841123_orw4.jpg",
        audioSrc: "audio/LUNA.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 10, text: "Yeah, yeah, yeah" },
    { time: 12, text: "ATL Jacob, ATL Jacob" },
    { time: 15, text: "Te busco y no sé dónde estás" },
    { time: 18, text: "Estoy buscando respuestas" },
    { time: 21, text: "¿Cuándo fue la última vez que te vi sonreír?" },
    { time: 25, text: "Te decía \"mi reina\"" },
    { time: 27, text: "Te temblaban las piernas" },
    { time: 29, text: "Contigo las noches, no, no eran pa dormir" },
    { time: 33, text: "A veces lo ignoro, fumo y bebo solo" },
    { time: 36, text: "Siempre pensé que no te debiste ir" },
    { time: 39, text: "Cambiaste plata por oro, eras mi tesoro" },
    { time: 42, text: "No supe qué día te olvidaste de mí" },
    { time: 45, text: "Y-y de mí, y-y yo de ti" },
    { time: 47, text: "No supe qué día te olvidaste de mí" },
    { time: 49, text: "Y-y de mí, y-y yo de ti" },
    { time: 51, text: "No supe qué día te olvidaste de mí" },
    { time: 53, text: "Y-y de mí, y-y de mí" },
    { time: 55, text: "No supe qué día te olvidaste de mí" },
    { time: 57, text: "Y-y de mí, y-y yo de ti" },
    { time: 60, text: "Yeh, yeh" },
    { time: 63, text: "A veces te extraño, ma, te quiero perdonar" },
    { time: 66, text: "Bebé, me tiraste pa la lona" },
    { time: 68, text: "Me dejaste en cero toda la estamina" },
    { time: 71, text: "No me llames cuando te sientas sola" },
    { time: 74, text: "Bebé, yo sé que también extrañas los carros" },
    { time: 77, text: "Hacer el amor cuando estábamos farros, yeh" },
    { time: 80, text: "Todo era mentira cuando tú me decías: \"Baby, te extraño\"" },
    { time: 84, text: "Que duraríamos años, baby, dolió tu engaño" },
    { time: 88, text: "Ojalá que se acabe este tema y por fin yo me olvide de ti" },
    { time: 93, text: "Te busco y no sé dónde estás" },
    { time: 96, text: "Estoy buscando respuestas" },
    { time: 99, text: "¿Cuándo fue la última vez que te vi sonreír?" },
    { time: 103, text: "Te decía \"mi reina\"" },
    { time: 105, text: "Te temblaban las piernas" },
    { time: 108, text: "No supe qué día te olvidaste de mí" },
    { time: 111, text: "Y-y de mí, y-y yo de ti" },
    { time: 113, text: "No supe qué día te olvidaste de mí" },
    { time: 115, text: "Y-y de mí, y-y yo de ti" },
    { time: 117, text: "No supe qué día te olvidaste de mí" },
    { time: 119, text: "Y-y de mí, y-y de mí" },
    { time: 121, text: "No supe qué día te olvidaste de mí" },
    { time: 123, text: "Y-y de mí, y-y yo de ti" },
    { time: 126, text: "No supe qué día te olvidaste de mí" },
    { time: 130, text: "Yeah-eh" },
    { time: 133, text: "Ah-ah-ah" }
]
     },
     {
        id: 8,
        title: "Normal",
        artist: "Feid",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/45238099/r/il/eef7bc/5245841123/il_1588xN.5245841123_orw4.jpg",
        audioSrc: "audio/Normal.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 12, text: "He querido borrarte, pero sueño contigo" },
    { time: 15, text: "Quisiera que entendiera' lo que hiciste conmigo" },
    { time: 18, text: "Yo dándote cien y tú me dabas cincuenta" },
    { time: 21, text: "Yo durmiendo contigo y tú con otro te acuestas" },
    { time: 24, text: "Te extraño, pero perdonarte qué mucho me cuesta" },
    { time: 27, text: "Qué mucho me cuesta" },
    { time: 31, text: "Normal, si te sientes solita y me extrañas" },
    { time: 34, text: "Y se te sale mi nombre" },
    { time: 36, text: "Difícil que llore' por mí en otra cama" },
    { time: 38, text: "Dime quién te va a creer" },
    { time: 40, text: "La nena no quiere Cartier" },
    { time: 42, text: "Quiere buscarme en otra piel" },
    { time: 44, text: "Vive en la disco to' los fine' de semana" },
    { time: 47, text: "Pa' ver si me vuelve a ver" },
    { time: 52, text: "Normal, si te sientes solita y me extrañas" },
    { time: 55, text: "Y se te sale mi nombre" },
    { time: 57, text: "Difícil que llore' por mí en otra cama" },
    { time: 59, text: "Dime quién te va a creer" },
    { time: 61, text: "La nena no quiere Cartier" },
    { time: 63, text: "Quiere buscarme en otra piel" },
    { time: 65, text: "Vive en la disco to' los fine' de semana" },
    { time: 68, text: "A ver si me vuelve a ver" },
    { time: 73, text: "La nena no quiere un nene sano" },
    { time: 75, text: "A ella le gustan los gato' malo'" },
    { time: 77, text: "Y yo en una casita llena 'e gata' en Los Cabo'" },
    { time: 80, text: "Ese culo se fue y están lloviendo los chavo'" },
    { time: 83, text: "Ahora me estoy perreando una gata mejor" },
    { time: 86, text: "Si le duele el cora', que se tome un Panadol (uy)" },
    { time: 89, text: "Partido que juego, partido que meto gol" },
    { time: 92, text: "Y está' otra vez llamando, diciendo que el alcohol" },
    { time: 95, text: "Te tiene así, pensando en mí" },
    { time: 97, text: "Que qué putas me pasó que me perdí" },
    { time: 100, text: "Bebé, si en la foto te ve' feliz" },
    { time: 103, text: "Ojalá y algún día sientas lo que yo sentí" },
    { time: 106, text: "Pa' que veas que es" },
    { time: 110, text: "Normal, si te sientes solita y me extrañas" },
    { time: 113, text: "Y se te sale mi nombre" },
    { time: 115, text: "Difícil que llore' por mí en otra cama" },
    { time: 117, text: "Dime quién te va a creer" },
    { time: 119, text: "La nena no quiere Cartier" },
    { time: 121, text: "Quiere buscarme en otra piel" },
    { time: 123, text: "Vive en la disco to' los fine' de semana (yeah)" },
    { time: 126, text: "Pa' ver si me vuelve a ver" },
    { time: 131, text: "Normal, si te sientes solita y me extrañas" },
    { time: 134, text: "Y se te sale mi nombre" },
    { time: 136, text: "Difícil que llore' por mí en otra cama" },
    { time: 138, text: "Dime quién te va a creer" },
    { time: 140, text: "La nena no quiere Cartier" },
    { time: 142, text: "Quiere buscarme en otra piel" },
    { time: 144, text: "Vive en la disco to' los fine' de semana" },
    { time: 147, text: "A ver si me vuelve a ver" }
]
     },
     {
        id: 9,
        title: "Bubalu",
        artist: "Feid",
        album: "Single",
        albumArtUrl: "https://i.etsystatic.com/45238099/r/il/eef7bc/5245841123/il_1588xN.5245841123_orw4.jpg",
        audioSrc: "audio/Bubalu.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 25, text: "Another banger" },
    { time: 27, text: "Ya no quiero estar sin ti" },
    { time: 30, text: "Farrear no es lo mismo si no estás aquí" },
    { time: 34, text: "No me di cuenta y te perdí" },
    { time: 37, text: "Tú te estaba' alejando y yo nunca lo vi" },
    { time: 41, text: "Dulcecita flow Trululu, cremita de coconut" },
    { time: 45, text: "Un masajito pa que después me suelte ese Bubbaloo" },
    { time: 49, text: "La cama hace \"tu-tu-tu\", pa mí que me hizo vudú" },
    { time: 53, text: "De toa las mujere' que hay en el mundo, la más chimba eres tú" },
    { time: 57, text: "Me hace' falta tú, tú, tú, tú, tú (yeah-yeah)" },
    { time: 60, text: "A tu foto le hago zum, zum, zum, zum, zum (yeah)" },
    { time: 63, text: "Qué rico ese Bubbaloo-loo-loo-loo-loo" },
    { time: 66, text: "El coro dice: \"ru, ru, ru, ru, ru\"" },
    { time: 69, text: "Dulcecita flow Trululu, cremita de coconut" },
    { time: 73, text: "Un masajito pa que después me suelte ese Bubbaloo" },
    { time: 77, text: "La cama hace \"tu-tu-tu\", pa mí que me hizo vudú" },
    { time: 81, text: "De toa las mujere' que hay en el mundo, la más chimba eres tú, yeah" },
    { time: 85, text: "Ese culito en el jet ski en Montego Bay" },
    { time: 88, text: "De champán toda la mojé" },
    { time: 91, text: "Se quitó el kini y se le ve to por el agua cristalina" },
    { time: 95, text: "Y yo con par de tragos encima" },
    { time: 98, text: "Tocándote underwater, en la otra mano un caipirinha" },
    { time: 102, text: "Pidió vape pa volar, le roté" },
    { time: 105, text: "Y enseguida se prendió y qué rico pasé" },
    { time: 109, text: "Cuando te vi en Benidorm, en el mar, se enganchó las Oakley" },
    { time: 113, text: "Nos parchamo en el hotel, la probé y es" },
    { time: 117, text: "Dulcecita flow Trululu, cremita de coconut" },
    { time: 121, text: "Un masajito pa que después me suelte ese Bubbaloo (bbaloo-bba)" },
    { time: 125, text: "La cama hace \"tu-tu-tu\", pa mí que me hizo vudú" },
    { time: 129, text: "De toa las mujere' que hay en el mundo, la más chimba eres tú (uh-uh-uh-uh-uh)" },
    { time: 133, text: "Omoge na one of one (uh-uh)" },
    { time: 136, text: "Wetin you put for your back" },
    { time: 139, text: "Any girl like you Omoge (no one)" },
    { time: 142, text: "When you no dey by my side" },
    { time: 145, text: "I dey miss you die baby, oh" },
    { time: 148, text: "Na your matter I dey carry for my head alone" },
    { time: 152, text: "I dey miss you, my baby, Oromao" },
    { time: 155, text: "There's something about her, ah" },
    { time: 158, text: "Baby girl, you confirm" },
    { time: 161, text: "If e no be her then me no want am" },
    { time: 164, text: "Me thank Jah for the day wey me and her jam" },
    { time: 168, text: "There's something about that day wey we start all the kissing (yeah)" },
    { time: 172, text: "Sexing (yeah-yeah), cuddling (yeah)" },
    { time: 175, text: "Recording this got me yearning" },
    { time: 178, text: "If you got another man I'll be celosa" },
    { time: 182, text: "Me just want you make you come Ku Lo Sa" },
    { time: 186, text: "Dulcecita flow Trululu, cremita de coconut" },
    { time: 190, text: "Un masajito pa que después me suelte ese Bubbaloo (bbaloo-bba)" },
    { time: 194, text: "La cama hace \"tu-tu-tu\", pa mí que me hizo vudú (ah-ah)" },
    { time: 198, text: "De toa las mujere' que hay en el mundo, la más chimba eres tú" },
    { time: 202, text: "Me hace' falta tú, tú, tú, tú, tú (yeah-yeah)" },
    { time: 205, text: "A tu foto le hago zum, zum, zum, zum, zum (yeah)" },
    { time: 208, text: "Qué rico ese Bubbaloo-loo-loo, loo-loo" },
    { time: 211, text: "Contigo el cielo era azul-zul-zul-zul" },
    { time: 215, text: "Dulcecita flow Trululu, cremita de coconut" },
    { time: 219, text: "Un masajito pa que después me suelte ese Bubbaloo" }
]
     },
     {
        id: 10,
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        album: "Single",
        albumArtUrl: "https://image.europafm.com/clipping/cmsimages02/2024/08/16/9294E86F-E1F5-4DC5-B9BE-533ED2CB983E/lady-gaga-bruno-mars-derrochan-talento-aires-vintage-die-with-smile_98.jpg?crop=1440,810,x0,y67&width=1900&height=1069&optimize=low&format=webply",
        audioSrc: "audio/Die With A Smile.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 9, text: "Ooh" },
    { time: 12, text: "I, I just woke up from a dream" },
    { time: 16, text: "Where you and I had to say goodbye" },
    { time: 19, text: "And I don't know what it all means" },
    { time: 22, text: "But since I survived, I realized" },
    { time: 26, text: "Wherever you go, that's where I'll follow" },
    { time: 29, text: "Nobody's promised tomorrow" },
    { time: 32, text: "So I'ma love you every night like it's the last night" },
    { time: 36, text: "Like it's the last night" },
    { time: 40, text: "If the world was ending, I'd wanna be next to you" },
    { time: 44, text: "If the party was over and our time on Earth was through" },
    { time: 48, text: "I'd wanna hold you just for a while and die with a smile" },
    { time: 53, text: "If the world was ending, I'd wanna be next to you" },
    { time: 59, text: "Ooh" },
    { time: 64, text: "Ooh, lost, lost in the words that we scream" },
    { time: 68, text: "I don't even wanna do this anymore" },
    { time: 71, text: "'Cause you already know what you mean to me" },
    { time: 75, text: "And our love's the only war worth fighting for" },
    { time: 79, text: "Wherever you go, that's where I'll follow" },
    { time: 82, text: "Nobody's promised tomorrow" },
    { time: 85, text: "So I'ma love you every night like it's the last night" },
    { time: 89, text: "Like it's the last night" },
    { time: 93, text: "If the world was ending, I'd wanna be next to you" },
    { time: 97, text: "If the party was over and our time on Earth was through" },
    { time: 101, text: "I'd wanna hold you just for a while and die with a smile" },
    { time: 106, text: "If the world was ending, I'd wanna be next to you" },
    { time: 112, text: "Right next to you" },
    { time: 114, text: "Next to you" },
    { time: 116, text: "Right next to you" },
    { time: 118, text: "Oh-oh, oh" },
    { time: 123, text: "If the world was ending, I'd wanna be next to you" },
    { time: 127, text: "If the party was over and our time on Earth was through" },
    { time: 131, text: "I'd wanna hold you just for a while and die with a smile" },
    { time: 136, text: "If the world was ending, I'd wanna be next to you" },
    { time: 141, text: "If the world was ending, I'd wanna be next to you" },
    { time: 147, text: "Ooh" },
    { time: 152, text: "I'd wanna be next to you" }
]
     },
     {
        id: 11,
        title: "Shape of You",
        artist: "Ed Sheeran ",
        album: "Single",
        albumArtUrl: "https://e7.pngegg.com/pngimages/737/849/png-clipart-ed-sheeran-sticker-telegram-rapper-ed-child-hand.png",
        audioSrc: "audio/Shape of You.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 16, text: "The club isn't the best place to find a lover" },
    { time: 19, text: "So the bar is where I go" },
    { time: 21, text: "Me and my friends at the table doing shots" },
    { time: 24, text: "Drinking fast and then we talk slow" },
    { time: 27, text: "Come over and start up a conversation with just me" },
    { time: 30, text: "And trust me I'll give it a chance now" },
    { time: 33, text: "Take my hand, stop, put Van the Man on the jukebox" },
    { time: 36, text: "And then we start to dance, and now I'm singing like" },
    { time: 39, text: "Girl, you know I want your love" },
    { time: 41, text: "Your love was handmade for somebody like me" },
    { time: 44, text: "Come on now, follow my lead" },
    { time: 46, text: "I may be crazy, don't mind me" },
    { time: 48, text: "Say, boy, let's not talk too much" },
    { time: 50, text: "Grab on my waist and put that body on me" },
    { time: 53, text: "Come on now, follow my lead" },
    { time: 55, text: "Come, come on now, follow my lead" },
    { time: 59, text: "I'm in love with the shape of you" },
    { time: 61, text: "We push and pull like a magnet do" },
    { time: 63, text: "Although my heart is falling too" },
    { time: 65, text: "I'm in love with your body" },
    { time: 68, text: "And last night you were in my room" },
    { time: 70, text: "And now my bedsheets smell like you" },
    { time: 72, text: "Every day discovering something brand new" },
    { time: 75, text: "I'm in love with your body" },
    { time: 78, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 80, text: "I'm in love with your body" },
    { time: 82, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 84, text: "I'm in love with your body" },
    { time: 86, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 88, text: "I'm in love with your body" },
    { time: 91, text: "Every day discovering something brand new" },
    { time: 94, text: "I'm in love with the shape of you" },
    { time: 99, text: "One week in we let the story begin" },
    { time: 102, text: "We're going out on our first date" },
    { time: 104, text: "You and me are thrifty, so go all you can eat" },
    { time: 107, text: "Fill up your bag and I fill up a plate" },
    { time: 110, text: "We talk for hours and hours about the sweet and the sour" },
    { time: 114, text: "And how your family is doing okay" },
    { time: 117, text: "And leave and get in a taxi, then kiss in the backseat" },
    { time: 120, text: "Tell the driver make the radio play, and I'm singing like" },
    { time: 123, text: "Girl, you know I want your love" },
    { time: 125, text: "Your love was handmade for somebody like me" },
    { time: 128, text: "Come on now, follow my lead" },
    { time: 130, text: "I may be crazy, don't mind me" },
    { time: 132, text: "Say, boy, let's not talk too much" },
    { time: 134, text: "Grab on my waist and put that body on me" },
    { time: 137, text: "Come on now, follow my lead" },
    { time: 139, text: "Come, come on now, follow my lead" },
    { time: 143, text: "I'm in love with the shape of you" },
    { time: 145, text: "We push and pull like a magnet do" },
    { time: 147, text: "Although my heart is falling too" },
    { time: 149, text: "I'm in love with your body" },
    { time: 152, text: "And last night you were in my room" },
    { time: 154, text: "And now my bedsheets smell like you" },
    { time: 156, text: "Every day discovering something brand new" },
    { time: 159, text: "I'm in love with your body" },
    { time: 162, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 164, text: "I'm in love with your body" },
    { time: 166, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 168, text: "I'm in love with your body" },
    { time: 170, text: "(Oh-I-oh-I-oh-I-oh-I)" },
    { time: 172, text: "I'm in love with your body" },
    { time: 175, text: "Every day discovering something brand new" },
    { time: 178, text: "I'm in love with the shape of you" },
    { time: 183, text: "Come on, be my baby, come on" },
    { time: 185, text: "Come on, be my baby, come on" },
    { time: 187, text: "Come on, be my baby, come on" },
    { time: 189, text: "Come on, be my baby, come on" },
    { time: 191, text: "Come on, be my baby, come on" },
    { time: 193, text: "Come on, be my baby, come on" },
    { time: 195, text: "Come on, be my baby, come on" },
    { time: 197, text: "Come on, be my baby, come on" },
    { time: 201, text: "I'm in love with the shape of you" },
    { time: 203, text: "We push and pull like a magnet do" },
    { time: 205, text: "Although my heart is falling too" },
    { time: 207, text: "I'm in love with your body" },
    { time: 210, text: "And last night you were in my room" },
    { time: 212, text: "And now my bedsheets smell like you" },
    { time: 214, text: "Every day discovering something brand new" },
    { time: 217, text: "I'm in love with your body" },
    { time: 220, text: "Come on, be my baby, come on" },
    { time: 222, text: "Come on (I'm in love with your body), be my baby, come on" },
    { time: 224, text: "Come on, be my baby, come on" },
    { time: 226, text: "Come on (I'm in love with your body), be my baby, come on" },
    { time: 228, text: "Come on, be my baby, come on" },
    { time: 230, text: "Come on (I'm in love with your body), be my baby, come on" },
    { time: 233, text: "Every day discovering something brand new" },
    { time: 236, text: "I'm in love with the shape of you" }
]

    },
    {
        id: 12,
        title: "Lissette por Excelencia",
        artist: "PXNDX",
        album: "Single",
        albumArtUrl: "https://images.seeklogo.com/logo-png/21/1/pxndx-logo-png_seeklogo-219075.png",
        audioSrc: "audio/Narcisista por Excelencia.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 28, text: "¿Sabes qué es la inseguridad?" },
    { time: 31, text: "¿Sabes lo que es sentir la soledad?" },
    { time: 34, text: "Mi peor error fue haber" },
    { time: 36, text: "Aceptado mi fealdad" },
    { time: 39, text: "Porque ahora ya no tengo" },
    { time: 41, text: "Dónde esconder el miedo" },
    { time: 44, text: "Y el miedo sigue vivo" },
    { time: 46, text: "Se la vive aquí conmigo" },
    { time: 50, text: "Yo me baso en la apariencia" },
    { time: 52, text: "Con placer y sin conciencia" },
    { time: 55, text: "Esperando que algún día" },
    { time: 57, text: "Tu atención fijes en mí" },
    { time: 60, text: "Es por eso que ahora visto así" },
    { time: 63, text: "Quiero ser elegante y estilero hasta el fin" },
    { time: 66, text: "No podré proyectarlo; me lo tengo que creer" },
    { time: 71, text: "Suponiendo que en la gente" },
    { time: 73, text: "La belleza es natural" },
    { time: 76, text: "Pues belleza es la palabra" },
    { time: 78, text: "Que aún no logro concretar" },
    { time: 82, text: "Disfraz, disfraz" },
    { time: 84, text: "Narcisista artificial" },
    { time: 87, text: "Disfraz, disfraz" },
    { time: 89, text: "Todo es mental" },
    { time: 94, text: "¿Cómo me peinaré esta noche?" },
    { time: 97, text: "¿Qué ropa me combinará mejor?" },
    { time: 100, text: "Tener tu interés" },
    { time: 102, text: "Convertirlo en amor" },
    { time: 105, text: "Quisiera poder saber qué piensas" },
    { time: 108, text: "¿Me veré bien o acaso me veo mal?" },
    { time: 111, text: "Sé que es patético" },
    { time: 113, text: "Pero en mí es normal" },
    { time: 117, text: "Suponiendo que en la gente" },
    { time: 119, text: "La belleza es natural" },
    { time: 122, text: "Pues belleza es la palabra" },
    { time: 124, text: "Que aún no logro concretar" },
    { time: 128, text: "Disfraz, disfraz" },
    { time: 130, text: "Narcisista artificial" },
    { time: 133, text: "Disfraz, disfraz" },
    { time: 135, text: "Todo es mental" },
    { time: 140, text: "Suponiendo que en la gente" },
    { time: 142, text: "La belleza es natural" },
    { time: 145, text: "Pues belleza es la palabra" },
    { time: 147, text: "Que aún no logro concretar" },
    { time: 151, text: "Disfraz, disfraz" },
    { time: 153, text: "Narcisista artificial" },
    { time: 156, text: "Disfraz, disfraz" },
    { time: 158, text: "Todo es mental" }
]
    },
    {
        id: 13,
        title: "Mil horas",
        artist: "Andrés Calamaro",
        album: "Single",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojgPKYY40UNtM0-m8L1bSg6XH5XfheXhAhg&s",
        audioSrc: "audio/Mil horas.mp3",
        videoBgSrc: "", 
    lyrics: [
    { time: 3, text: "Hace frío y estoy lejos de casa" },
    { time: 6, text: "Hace tiempo que estoy sentado sobre esta piedra" },
    { time: 9, text: "Yo me pregunto" },
    { time: 11, text: "¿Para qué sirven las guerras?" },
    { time: 16, text: "Tengo un cohete en el pantalón" },
    { time: 19, text: "Vos estás tan fría, como la nieve a mi alrededor" },
    { time: 22, text: "Vos estás tan blanca" },
    { time: 24, text: "Y yo no sé qué hacer" },
    { time: 29, text: "La otra noche, te esperé bajo la lluvia dos horas" },
    { time: 32, text: "Mil horas, como un perro" },
    { time: 35, text: "Y cuando llegaste, me miraste y me dijiste: Loco" },
    { time: 38, text: "Estás mojado, ya no te quiero" },
    { time: 44, text: "En el circo, vos ya sos una estrella" },
    { time: 47, text: "Una estrella roja que todo se lo imagina" },
    { time: 50, text: "Si te preguntan, vos no me conocías" },
    { time: 53, text: "No, no" },
    { time: 58, text: "Yo tengo un cohete en el pantalón" },
    { time: 61, text: "Vos estás tan fría, como la nieve a mi alrededor" },
    { time: 64, text: "Vos estás tan blanca" },
    { time: 66, text: "Que yo no sé qué hacer" },
    { time: 71, text: "Te esperé bajo la lluvia, no, no, no" },
    { time: 77, text: "La otra noche, te esperé bajo la lluvia dos horas" },
    { time: 80, text: "Mil horas, como un perro" },
    { time: 83, text: "Y cuando llegaste, me miraste y me dijiste: Loco" },
    { time: 86, text: "Estás mojado, ya no te quiero" },
    { time: 92, text: "La otra noche, te esperé bajo la lluvia dos horas" },
    { time: 95, text: "Mil horas, como un perro" },
    { time: 98, text: "Y cuando llegaste, me miraste y me dijiste: Loco" },
    { time: 101, text: "Estás mojado, ya no te quiero" }
]
    },
    {
        id: 14,
        title: "TANTO GANAS TANTO PIERDES",
        artist: "Verde 70",
        album: "Single",
        albumArtUrl: "",
        audioSrc: "audio/TANTO GANAS TANTO PIERDES.mp3",
        videoBgSrc: "https://us.123rf.com/450wm/kostiuchenko/kostiuchenko1808/kostiuchenko180800258/106102413-numeral-70-seventy-isolated-on-white-background-3d-render.jpg", 
    lyrics: [
    { time: 38, text: "Y si te digo que ahora vivo" },
    { time: 41, text: "Con la certeza de que no piensas en mí" },
    { time: 44, text: "Y que me consta que es muy cierto" },
    { time: 47, text: "Que nuestro amor por fin se ha muerto" },
    { time: 50, text: "Que no es tan nuevo para mí" },
    { time: 54, text: "Pero digamos que en tu ausencia" },
    { time: 57, text: "Te escribo una última canción" },
    { time: 60, text: "Mentiría si dijera" },
    { time: 62, text: "Que a mi la vida que aún me queda no la podré vivir sin vos" },
    { time: 66, text: "Y sabes bien como soy yo" },
    { time: 70, text: "Si aquí se termina este cuento" },
    { time: 73, text: "Pues vida es la que tú prefieras y cada quien a su manera" },
    { time: 77, text: "Esta vez no te pido nada porque nada es lo que debes" },
    { time: 81, text: "Tanto ganas tanto pierdes" },
    { time: 84, text: "Tanto ganas tanto pierdes" },
    { time: 89, text: "Y si te digo que ahora sigo" },
    { time: 92, text: "Que es una pena no volver a coincidir" },
    { time: 95, text: "Si bien las tardes son distintas" },
    { time: 98, text: "Yo les dedico una sonrisa" },
    { time: 101, text: "Apenas me acuerdo de ti" },
    { time: 105, text: "Pero digamos que ahora mismo" },
    { time: 108, text: "Entre los ruidos y silencios de mi voz" },
    { time: 111, text: "Mis labios te hablan de alegría" },
    { time: 114, text: "Es que me abrazo a la ironía" },
    { time: 117, text: "De que otro día será mejor" },
    { time: 120, text: "Y sabes bien como soy yo" },
    { time: 124, text: "Si aquí se termina este cuento" },
    { time: 127, text: "Pues vida es la que tú prefieras y cada quien a su manera" },
    { time: 131, text: "Esta vez no te pido nada" },
    { time: 133, text: "Porque nada es lo que debes" },
    { time: 136, text: "Tanto ganas tanto pierdes" },
    { time: 139, text: "Tanto ganas tanto pierdes" },
    { time: 145, text: "Y sabes bien como soy yo" },
    { time: 148, text: "Si aquí se termina este cuento" },
    { time: 151, text: "Pues vida es la que tú prefieras y cada quien a su manera" },
    { time: 155, text: "Esta vez no te pido nada" },
    { time: 157, text: "Porque nada es lo que debes" },
    { time: 160, text: "Tanto ganas tanto pierdes" },
    { time: 163, text: "Tanto ganas tanto pierdes" },
    { time: 168, text: "Tanto ganas" },
    { time: 171, text: "Tanto ganas tanto tanto pierdes" },
    { time: 174, text: "Tanto pierdes" }
]
    },
    {
        id: 15,
        title: "En La Inmensidad",
        artist: "Verde 70",
        album: "Single",
        albumArtUrl: "",
        audioSrc: "audio/En la inmensidad.mp3",
        videoBgSrc: "https://us.123rf.com/450wm/kostiuchenko/kostiuchenko1808/kostiuchenko180800258/106102413-numeral-70-seventy-isolated-on-white-background-3d-render.jpg", 
    lyrics: [
    { time: 22, text: "Hace poco me di cuenta que te pienso cada día" },
    { time: 26, text: "Que en las noches que te ausentas me estoy jugando la vida" },
    { time: 30, text: "Los minutos se hacen días, llenos de melancolía" },
    { time: 34, text: "Las palabras son del viento sin tu amor solo serian" },
    { time: 38, text: "Frases hechas a la nada disparadas al olvido" },
    { time: 42, text: "Como una bala perdida no tendrán ningún sentido" },
    { time: 46, text: "Disparar hacia el vacío le hace daño al corazón" },
    { time: 50, text: "Decir la verdad al viento, y el tiempo hiere a la razón" },
    { time: 56, text: "Por eso me pierdo la vida y te busco en la inmensidad, de la eternidad" },
    { time: 60, text: "De una frase sin camino, encontrándole un destino, si me escuchas llegará" },
    { time: 65, text: "Por eso me juego la vida y te juro que la oscuridad, de mi soledad" },
    { time: 69, text: "Aunque dure mucho tiempo los minutos se hagan años, si me escuchas cesará" },
    { time: 76, text: "Hace poco me di vuelta, para volver a mirarte" },
    { time: 80, text: "Para volver a contarte una canción desesperada" },
    { time: 84, text: "Me enteré de cosas nuevas, sigo preso en tus encantos" },
    { time: 88, text: "Soy un ave errante que solo sabe quererte tanto" },
    { time: 92, text: "Un alma que se revuelca de la pena de no verte" },
    { time: 96, text: "Del dolor de no tenerte y se empecina en no perderte" },
    { time: 100, text: "Que dispara día y noche frases para estar cerca de tí" },
    { time: 104, text: "Sin tus ganas de escucharme no se que va a ser de mí" },
    { time: 110, text: "Por eso me pierdo la vida y te busco en la inmensidad, de la eternidad" },
    { time: 114, text: "De una frase sin camino, encontrándole un destino, si me escuchas llegará" },
    { time: 119, text: "Por eso me juego la vida y te juro que la oscuridad, de mi soledad" },
    { time: 123, text: "Aunque dure mucho tiempo los minutos se hagan años, si me escuchas cesará" },
    { time: 130, text: "Por eso me pierdo la vida y te busco en la inmensidad, de la eternidad" },
    { time: 134, text: "De una frase sin camino, encontrándole un destino, si me escuchas llegará" },
    { time: 139, text: "Por eso me juego la vida y te juro que la oscuridad, de mi soledad" },
    { time: 143, text: "Aunque dure mucho tiempo los minutos se hagan años, si me escuchas cesará" },
    { time: 150, text: "Por eso me pierdo la vida y te busco" },
    { time: 152, text: "Por eso me pierdo la vida y te busco" },
    { time: 154, text: "Por eso me pierdo la vida y te busco" },
    { time: 156, text: "Por eso me pierdo la vida y te busco" },
    { time: 159, text: "Por eso me pierdo la vida y te busco" },
    { time: 161, text: "Por eso me pierdo la vida y te busco" },
    { time: 163, text: "Por eso me pierdo la vida y te busco" },
    { time: 165, text: "Por eso me pierdo la vida y te busco" },
    { time: 167, text: "Por eso me pierdo la vida y te busco" },
    { time: 169, text: "Por eso me pierdo la vida y te busco" }
]
    },
    {
        id: 16,
        title: "Numb",
        artist: "Linkin Park",
        album: "Single",
        albumArtUrl: "",
        audioSrc: "audio/Numb.mp3",
        videoBgSrc: "https://i.pinimg.com/1200x/94/f1/3c/94f13cde2582e597f200c176d624c9e1.jpg", 
    lyrics: [
    { time: 23, text: "I'm tired of being what you want me to be" },
    { time: 26, text: "Feeling so faithless, lost under the surface" },
    { time: 29, text: "I don't know what you're expecting of me" },
    { time: 32, text: "Put under the pressure of walking in your shoes" },
    { time: 36, text: "(Caught in the undertow, just caught in the undertow)" },
    { time: 39, text: "Every step that I take is another mistake to you" },
    { time: 42, text: "(Caught in the undertow, just caught in the undertow)" },
    { time: 46, text: "I've become so numb, I can't feel you there" },
    { time: 49, text: "Become so tired, so much more aware" },
    { time: 52, text: "I'm becoming this, all I want to do" },
    { time: 55, text: "Is be more like me and be less like you" },
    { time: 60, text: "Can't you see that you're smothering me?" },
    { time: 63, text: "Holding too tightly, afraid to lose control" },
    { time: 66, text: "'Cause everything that you thought I would be" },
    { time: 69, text: "Has fallen apart right in front of you" },
    { time: 73, text: "(Caught in the undertow, just caught in the undertow)" },
    { time: 76, text: "Every step that I take is another mistake to you" },
    { time: 79, text: "(Caught in the undertow, just caught in the undertow)" },
    { time: 82, text: "And every second I waste is more than I can take" },
    { time: 86, text: "I've become so numb, I can't feel you there" },
    { time: 89, text: "Become so tired, so much more aware" },
    { time: 92, text: "I'm becoming this, all I want to do" },
    { time: 95, text: "Is be more like me and be less like you" },
    { time: 100, text: "And I know I may end up failing too" },
    { time: 103, text: "But I know you were just like me" },
    { time: 106, text: "With someone disappointed in you" },
    { time: 110, text: "I've become so numb, I can't feel you there" },
    { time: 113, text: "Become so tired, so much more aware" },
    { time: 116, text: "I'm becoming this, all I want to do" },
    { time: 119, text: "Is be more like me and be less like you" },
    { time: 124, text: "I've become so numb, I can't feel you there" },
    { time: 126, text: "(I'm tired of being what you want me to be)" },
    { time: 129, text: "I've become so numb, I can't feel you there" },
    { time: 131, text: "(I'm tired of being what you want me to be)" }
]
    }

];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
