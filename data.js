// ============================================================
// DATOS DE LA GUÍA
// Aquí se añaden, corrigen o completan los personajes y equipos.
// No hace falta tocar index.html ni sw.js para cambiar datos.
//
// Para añadir un personaje, copia una línea existente, cambia
// los valores y guarda. El "id" debe ser en minúsculas, sin
// espacios (usa guion bajo), y debe coincidir con el nombre
// del icono: character_<id>_00.png
//
// Equipos: cada equipo tiene dos grupos como máximo. Cada grupo
// indica el conjunto y las piezas: 1 casco, 2 pechera,
// 3 guantes, 4 calzado.
// ============================================================

// Carpetas de los iconos
const CARPETA_ICONOS = "assets/images/Character_Icon/";
const CARPETA_ARTEFACTOS = "assets/images/Artifact_Icon/";
const CARPETA_EQUIPO = "assets/images/Equipment_Icon/";
const CARPETA_MONSTER = "assets/images/Monsterling_Icon/";

// Nombre de cada pieza dentro del archivo del icono
const PIEZA_ICONO = { 1: "casco", 2: "pechera", 3: "guantes", 4: "calzado" };

// Convierte un nombre en parte de un archivo: "caída en desgracia" -> "caida_en_desgracia"
function nombreArchivo(t) {
  return String(t)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

// Devuelve la ruta del icono de un personaje
function iconoDe(p) {
  return `${CARPETA_ICONOS}character_${p.id}_00.png`;
}

// Devuelve la ruta del icono del artefacto de un personaje
// Devuelve la ruta del icono de un artefacto (según su nombre)
function iconoArtefacto(nombre) {
  return `${CARPETA_ARTEFACTOS}artifact_${nombreArchivo(nombre)}_00.png`;
}

function artefactoIconoDe(p) {
  return iconoArtefacto(p.artefacto);
}

// Devuelve la ruta del icono de un monsterling (según su nombre)
function iconoMonster(nombre) {
  return `${CARPETA_MONSTER}${nombreArchivo(nombre)}.png`;
}

// Devuelve la ruta del icono de una pieza de un conjunto
function iconoConjunto(clave, pieza) {
  return `${CARPETA_EQUIPO}${clave}_${PIEZA_ICONO[pieza]}.png`;
}

// Conjuntos de equipamiento: efecto de 2 piezas y de 4 piezas (null si no tiene)
const CONJUNTOS = {
  'abismo': { nombre: 'Abismo', dos: 'Daño de viento +10 % durante 5 s al usar una habilidad especial', cuatro: 'Daño de viento +10 % durante 5 s al asestar un golpe crítico' },
  'arbol_milenario': { nombre: 'Arbol milenario', dos: 'Daño de fuego de todos los compañeros +7,5% durante 5s al usar una habilidad de apoyo', cuatro: null },
  'banquete_grandioso_de_gloton': { nombre: 'Banquete grandioso de gloton', dos: 'Res al fuego del objetivo -6% durante 5s al impactar con una habilidad de relevo', cuatro: null },
  'corazon_de_escarcha_eterna': { nombre: 'Corazón de escarcha eterna', dos: 'Daño de aturdimiento de ataque de rayo +7,5%', cuatro: null },
  'destructor_despiadado': { nombre: 'Destructor despiadado', dos: 'Los ataques básicos infligen 5% mas de daño de viento', cuatro: 'Al usar la habilidad suprema, la res a viento del objetivo se reduce en 10% durante 5s' },
  'devorador_del_abismo': { nombre: 'Devorador del abismo', dos: 'Daño de neutralización de ataque de hielo +7,5%', cuatro: null },
  'el_sin_nombre': { nombre: 'El sin nombre', dos: 'Los ataque básicos infligen 5% mas de daño de viento', cuatro: 'Al usar una habilidad suprema, la res a viento del objetivo se reduce un 10% durante 5s' },
  'espiritu_de_lucha_zorro_youkai': { nombre: 'Espiritu de lucha zorro youkai', dos: 'Res al rayo -6% durante 5s al usar una habilidad de relevo', cuatro: null },
  'flores_en_todo_su_esplendor': { nombre: 'Flores en todo su esplendor', dos: 'Daño de hielo +7,5% durante 5s al usar una habilidad especial', cuatro: null },
  'juez': { nombre: 'Juez', dos: 'Daño de hielo +10% durante 5s al usar una habilidad de cambio', cuatro: 'Daño de hielo +10% al atacar a un enemigo con aflicción de hielo' },
  'nivel_de_gloton': { nombre: 'Nivel de gloton', dos: 'Res de viento del objetivo -6% durante 5s al ejecutar con éxito una habilidad especial', cuatro: 'Índice de crítico de todos los compañeros +6% durante 5s al usar una habilidad de relevo' },
  'noche_de_luna_llena': { nombre: 'Noche de luna llena', dos: 'Daño de fuego +7,5% durante 5s al usar una habilidad especial', cuatro: 'Daño de fuego +7,5% al atacar a un enemigo con aflicción de fuego' },
  'piedra_ancestral': { nombre: 'Piedra ancestral', dos: 'Daño de neutralización de ataque de viento +7,5%', cuatro: null },
  'poder_imponente_del_monte_tai': { nombre: 'Poder imponente del monte tai', dos: 'Índice de crítico +5% durante 5s al usar una habilidad de cambio', cuatro: 'Daño de rayo +7,5% durante 5s al usar una habilidad especial' },
  'rey_espiritual': { nombre: 'Rey espiritual', dos: 'Daño de rayo +8 % durante 3 s al usar un ataque básico', cuatro: 'Daño de rayo +10 % al atacar a un enemigo con aflicción de rayo' },
  'ritos_del_general_victorioso': { nombre: 'Ritos del general victorioso', dos: 'Daño de neutralización de ataque de tierra +7,5%', cuatro: null },
  'rugido_de_hanul': { nombre: 'Rugido de hanul', dos: 'Daño de fuego +10 % durante 5 s al usar una habilidad suprema', cuatro: 'Daño crítico +10 % al atacar a un enemigo con aflicción de fuego' },
  'senor_de_la_cienaga': { nombre: 'Señor de la ciénaga', dos: 'Daño de hielo de todos los compañeros +5% durante 5s al conceder un escudo', cuatro: 'Daño de debilidad elemental recibido por el objetivo +10% durante 5s al atacar a un enemigo que sufra aflicción de hielo y aturdimiento' },
  'sirius': { nombre: 'Sirius', dos: 'Daño de tierra de todos los compañeros +7,5% durante 5s al usar una habilidad de apoyo', cuatro: 'Daño de apoyo +7,5% durante 5s al usar una habilidad de cambio' },
  'tirano_del_bosque': { nombre: 'Tirano del bosque', dos: 'Daño de hielo +7,5% durante 3s al usar un ataque básico', cuatro: 'Índice de crítico +5% durante 5s al atacar a un enemigo con aflicción de hielo' },
  'vanguardia_de_victoria': { nombre: 'Vanguardia de victoria', dos: 'Daño de debilidad elemental del objetivo recibido +10% durante 5s al atacar a un enemigo con aflicción de tierra', cuatro: null },
  'viento_de_poniente': { nombre: 'Viento de poniente', dos: 'Daño de tierra +8 % durante 3 s al usar un ataque básico', cuatro: 'Daño de tierra +10 % durante 5 s al usar una habilidad de cambio contra un enemigo con aflicción de tierra' }
};

const PERSONAJES = [
  { id: 'angel', name: 'Angel', tier: '4★', element: 'Fuego', role: 'Asesino', rango: 'A distancia', artefacto: 'Caida en desgracia', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Guardian de el dorado', dos: 'Gulgak', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'benjamin', name: 'Benjamin', tier: '4★', element: 'Rayo', role: 'Asesino', rango: 'Cuerpo a cuerpo', artefacto: 'Vuelo del halcon', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Raptor fidelis', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'bonnie', name: 'Bonnie', tier: '4★', element: 'Viento', role: 'Apoyo', rango: 'A distancia', artefacto: 'Miembro descoordinado de una banda militar', equipos: [[{ conjunto: 'nivel_de_gloton', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Guardian de el dorado', dos: 'Olvido', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'brisshell', name: 'Brisshell', tier: '5★', element: 'Tierra', role: 'Asesino', rango: 'Cuerpo a cuerpo', artefacto: 'Anhelo monstruoso', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], [{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Secuaz de piedra', dos: 'Scar', tres: 'Coloso ajustado', legendario: 'Reginula' } },
  { id: 'chloe', name: 'Chloe', tier: '5★', element: 'Viento', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'Choque del tren desbocado', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'cloud', name: 'Cloud', tier: '4★', element: 'Hielo', role: 'Destructor', rango: 'A distancia', artefacto: 'Aventurero soñador', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], monsters: { link: 'Sombra roja', dos: 'Secuaz de piedra', tres: 'Horda de chatarra', legendario: 'Sorin' } },
  { id: 'daisy', name: 'Daisy', tier: '4★', element: 'Tierra', role: 'Apoyo', rango: 'A distancia', artefacto: 'Fragancia forestal', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'ellie', name: 'Ellie', tier: '4★', element: 'Tierra', role: 'Destructor', rango: 'A distancia', artefacto: 'Subidon de azucar', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Secuaz de piedra', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'esther', name: 'Esther', tier: '5★', element: 'Viento', role: 'Asesino', rango: 'Cuerpo a cuerpo', artefacto: 'Escoba de los vientos', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'flare', name: 'Flare', tier: '5★', element: 'Fuego', role: 'Destructor', rango: 'A distancia', artefacto: 'Fuego de dragon exquisito', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'banquete_grandioso_de_gloton', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], monsters: { link: 'Guardian de el dorado', dos: 'Secuaz de hielo', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'francis', name: 'Francis', tier: '4★', element: 'Tierra', role: 'Apoyo', rango: 'A distancia', artefacto: 'Plenitud de amor', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'francis_verano', name: 'Francis Verano', tier: '5★', element: 'Tierra', role: 'Apoyo', rango: 'A distancia', artefacto: 'Un verano empapado de amor', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'gabi', name: 'Gabi', tier: '5★', element: 'Tierra', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'Aquel ante quien se arrodillan los dokkaebi', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Secuaz de piedra', dos: 'Scar', tres: 'Coloso ajustado', legendario: 'Reginula' } },
  { id: 'isabella', name: 'Isabella', tier: '5★', element: 'Hielo', role: 'Destructor', rango: 'A distancia', artefacto: 'Superconductor estabilizado', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Neutralización'], monsters: { link: 'Sombra azul', dos: 'Secuaz de hielo', tres: 'Luppo de sombra lunar', legendario: 'Sorin' } },
  { id: 'jiwon', name: 'Jiwon', tier: '5★', element: 'Viento', role: 'Apoyo', rango: 'A distancia', artefacto: 'Melodia interpretada con fibras del corazon', equipos: [[{ conjunto: 'nivel_de_gloton', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Guardian de el dorado', dos: 'Olvido', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'leeho', name: 'Leeho', tier: '4★', element: 'Fuego', role: 'Asesino', rango: 'Cuerpo a cuerpo', artefacto: 'Determinacion del cazador de tigres', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], monsters: { link: 'Guardian de el dorado', dos: 'Gulgak', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'mabel', name: 'Mabel', tier: '5★', element: 'Rayo', role: 'Destructor', rango: 'A distancia', artefacto: 'Recompensa la bondad, elimina la maldad', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Horda de chatarra', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'mina', name: 'Mina', tier: '5★', element: 'Fuego', role: 'Luchador', rango: 'A distancia', artefacto: 'Kumiho ardiente', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'nagi', name: 'Nagi', tier: '5★', element: 'Viento', role: 'Destructor', rango: 'A distancia', artefacto: 'Escama blanca del dragon serpenteante', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Neutralización'], monsters: { link: 'Demonio', dos: 'Horda limpia', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'narae', name: 'Narae', tier: '5★', element: 'Hielo', role: 'Apoyo', rango: 'A distancia', artefacto: 'Rocio bordador de llanuras', equipos: [[{ conjunto: 'senor_de_la_cienaga', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Blanquin', dos: 'Gulgak', tres: 'Amon', legendario: 'Sorin' } },
  { id: 'ophelia', name: 'Ophelia', tier: '5★', element: 'Hielo', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'Veredicto gelido', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Sombra roja', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Sorin' } },
  { id: 'penny', name: 'Penny', tier: '5★', element: 'Rayo', role: 'Luchador', rango: 'A distancia', artefacto: 'Inversion inteligente', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Horda de chatarra', dos: 'Scar', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'reina', name: 'Reina', tier: '4★', element: 'Rayo', role: 'Destructor', rango: 'Cuerpo a cuerpo', artefacto: 'Caballeria implacable', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Raptor fidelis', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'sangun', name: 'Sangun', tier: '5★', element: 'Viento', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'Amigo de la naturaleza', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'sera', name: 'Sera', tier: '4★', element: 'Hielo', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'La llave de futuras cerraduras', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], monsters: { link: 'Sombra azul', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Sorin' } },
  { id: 'verna', name: 'Verna', tier: '4★', element: 'Fuego', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'Espada de fuego honesta', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'verna_verano', name: 'Verna Verano', tier: '5★', element: 'Fuego', role: 'Luchador', rango: 'Cuerpo a cuerpo', artefacto: 'La llama que sueña con la justicia', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'vivian', name: 'Vivian', tier: '5★', element: 'Fuego', role: 'Apoyo', rango: 'Cuerpo a cuerpo', artefacto: 'Final sin fin', equipos: [[{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Reducción de recarga', 'Apoyo'], monsters: { link: 'Demonio', dos: 'Amon', tres: 'Ragnadon', legendario: 'Reginula' } },
  { id: 'yeonhwa', name: 'Yeonhwa', tier: '4★', element: 'Rayo', role: 'Asesino', rango: 'Cuerpo a cuerpo', artefacto: 'Loto sombrio', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Daño de rayo'], monsters: { link: 'Guardian de el dorado', dos: 'Asaltante cuchara', tres: 'Amon', legendario: 'Reginula' } }
];

// Descripciones de los roles (se muestran en Inicio)
const ROLES = [
  {
    nombre: 'Apoyo',
    descripcion: 'Destaca apoyando al equipo. El daño de apoyo aumenta en función del dominio de Apoyo del personaje de apoyo.'
  },
  {
    nombre: 'Asesino',
    descripcion: 'Destaca en infligir daño masivo al aprovechar los descuidos del enemigo. El daño de contención aumenta en función del dominio de Asesino del asesino.'
  },
  {
    nombre: 'Destructor',
    descripcion: 'Destaca en los combates contra jefes. El daño de neutralización aumenta en función del dominio de Destructor del destructor.'
  },
  {
    nombre: 'Luchador',
    descripcion: 'Destaca en batallas de combate cuerpo a cuerpo en las que luchan aliados y enemigos y reina el caos. El daño de refriega aumenta en función del dominio de Lucha del luchador.'
  }
];

// Equipos recomendados por elemento. Cada equipo son 3 personajes (id de PERSONAJES)
const EQUIPOS_RECOMENDADOS = [
  { elemento: 'Hielo', equipos: [
    ['narae', 'isabella', 'ophelia']
  ] },
  { elemento: 'Fuego', equipos: [
    ['mina', 'vivian', 'verna_verano'],
    ['angel', 'vivian', 'mina'],
    ['angel', 'vivian', 'verna_verano']
  ] },
  { elemento: 'Tierra', equipos: [
    ['brisshell', 'francis_verano', 'ellie'],
    ['brisshell', 'francis', 'ellie']
  ] },
  { elemento: 'Rayo', equipos: [
    ['yeonhwa', 'francis', 'benjamin'],
    ['yeonhwa', 'francis', 'mabel']
  ] },
  { elemento: 'Viento', equipos: [
    ['jiwon', 'nagi', 'esther'],
    ['jiwon', 'nagi', 'chloe']
  ] }
];

// ============================================================
// MAPAS
// Imágenes de mapas en assets/images/Map/
// Posiciones de los marcadores en porcentaje: x = izquierda, y = arriba (0 a 100)
// Tipos: traslado, pasaje, monster (icono del monsterling), coleccionable, cofre, puzzle, conocimiento
// Iconos de los demás tipos en assets/images/Map_Icon/ (traslado.png, pasaje.png, cofre.png...)
// ============================================================
const CARPETA_MAPAS = "assets/images/Map/";
const CARPETA_ICONOS_MAPA = "assets/images/Map_Icon/";

const TIPOS_MARCADOR = {
  traslado: { nombre: 'Puntos de traslado', color: '#4fc3f7', icono: 'traslado.png' },
  pasaje: { nombre: 'Pasajes', color: '#9575cd', icono: 'pasaje.png' },
  monster: { nombre: 'Monsterlings', color: '#e53935' },
  coleccionable: { nombre: 'Coleccionables', color: '#ffd54f', icono: 'coleccionable.png' },
  cofre: { nombre: 'Cofres', color: '#ff8a65', icono: 'cofre.png' },
  puzzle: { nombre: 'Puzzles', color: '#7dd87d', icono: 'puzzle.png' },
  conocimiento: { nombre: 'Conocimientos', color: '#f06292', icono: 'conocimiento.png' }
};

// Ejemplo de un mapa (se activa cuando tengas la imagen):
// { id: 'mapa1', nombre: 'Nombre del mapa', imagen: CARPETA_MAPAS + 'mapa1.png',
//   marcadores: [
//     { tipo: 'monster', nombre: 'Champi', x: 30, y: 40, descripcion: '' },
//     { tipo: 'coleccionable', nombre: 'Nombre del coleccionable', x: 55, y: 20, descripcion: 'Dónde está' }
//   ] }
const MAPAS = [
  { id: 'mapa1', nombre: 'Mapa 1', imagen: CARPETA_MAPAS + 'mapa1.png', marcadores: [] },
  { id: 'mapa2', nombre: 'Mapa 2', imagen: CARPETA_MAPAS + 'mapa2.png', marcadores: [] },
  { id: 'mapa3', nombre: 'Mapa 3', imagen: CARPETA_MAPAS + 'mapa3.png', marcadores: [] }
];

// >>> LISTAS (generado desde la plantilla de Excel) >>>
const PIEZA_NUM = { casco: 1, pechera: 2, guantes: 3, calzado: 4 };

// Regiones para el filtro de monsterlings (hoja "regiones" del Excel; si está vacía se usan las de la lista)
const REGIONES = ["Elendor", "Varhine", "Serenia", "Surah", "Namryung", "Muwon", "Sector 3"];

// Lista completa de monsterlings. link: 'Sí' o 'No'. efecto = efecto de rango.
const MONSTERLINGS = [
  {"numero": 1, "nombre": "Reginula", "tipo": "legendario", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 2, "nombre": "Sorin", "tipo": "legendario", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 1, "nombre": "Champi", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico de habilidades especiales +6.25 %\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 2, "nombre": "Champi morado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico de habilidades especiales +6.57 %\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 3, "nombre": "Mama champi", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Recupera un 2.4 % del máximo de PS al emplear una habilidad especial\n(Recarga: 15 s)", "conseguir": ""},
  {"numero": 4, "nombre": "Mama hoji", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Recupera un 2.52 % del máximo de PS al usar una habilidad especial\n(Recarga: 15 s)", "conseguir": ""},
  {"numero": 5, "nombre": "Babosin", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico contra enemigos físicos +6.25 %", "conseguir": ""},
  {"numero": 6, "nombre": "Manchado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico contra enemigos físicos +6.57 %", "conseguir": ""},
  {"numero": 7, "nombre": "Recluta trasgo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico +6.25 % durante 5 segundos al ejecutar un ataque básico 10 veces\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 8, "nombre": "Teniente segundo trasgo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico +6.57 % durante 5 segundos al ejecutar un ataque básico 10 veces\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 9, "nombre": "Soldado trasgo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño físico +6.25 % durante 5 segundos al usar 10 ataques básicos\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 10, "nombre": "Cabo trasgo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de supresión +6.25 % durante 5 segundos al ejecutar 10 ataques básicos\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 11, "nombre": "Guerrero del lobo blanco", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de refriega +6.25 % durante 5 segundos al asestar un golpe crítico\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 12, "nombre": "Lobo negro", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de refriega +6.57 % durante 5 segundos al asestar un golpe crítico\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 13, "nombre": "Mandibula de escarcha", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de hielo crítico +6.25 %", "conseguir": ""},
  {"numero": 14, "nombre": "Mandibula carmesi", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de hielo crítico +6.57 %", "conseguir": ""},
  {"numero": 15, "nombre": "Asaltante tenedor", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "RES a físico del objetivo -11 % durante 5 segundos al atacar con debilidad elemental del objetivo\n(Recarga: 15 s)", "conseguir": ""},
  {"numero": 16, "nombre": "Rey baba", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "DEF de todos los compañeros de grupo +8.25 % durante 5 s al atacar a enemigos de agua\n(Recarga: 10 s", "conseguir": ""},
  {"numero": 17, "nombre": "Reina escarlata", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "ATQ +5.78 % durante 10 s al atacar a enemigos de agua\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 18, "nombre": "Taglock", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "ATQ +5.5 % durante 10 s tras ejecutar con éxito 20 ataques\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 19, "nombre": "Primo trasgo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Restablece un 3.47 % de PS a todos los miembros del equipo al ejecutar 10 ataques básicos\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 20, "nombre": "Luppo", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de neutralización +11 % durante 10 segundos al asestar un golpe crítico\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 21, "nombre": "Luppo de sombra lunar", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "RES al hielo del objetivo -11.55 % durante 10 s al asestar un golpe crítico", "conseguir": ""},
  {"numero": 22, "nombre": "Baba coronada", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "ATQ contra enemigos físicos +4 %", "conseguir": ""},
  {"numero": 23, "nombre": "Tio champi", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de fuego de habilidad especial +8 %\n(Recarga: 15 segundos)", "conseguir": ""},
  {"numero": 24, "nombre": "Tio champi verde", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de fuego de habilidad especial +8.4 %\n(Recarga: 15 segundos)", "conseguir": ""},
  {"numero": 25, "nombre": "Topo excavador", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico +6.25 % contra objetivos derribados", "conseguir": ""},
  {"numero": 26, "nombre": "Topo excavador dorado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico +6.57 % contra objetivos derribados", "conseguir": ""},
  {"numero": 27, "nombre": "Topo tunelador", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de tierra +6.25 % contra objetivos derribados", "conseguir": ""},
  {"numero": 28, "nombre": "Champi marron", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico de habilidad especial +6.25 %\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 29, "nombre": "Champi verde azulado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño crítico de habilidad especial +6.57 %\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 30, "nombre": "Champi verde", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de neutralización de habilidad especial +6.25 %\n(Recarga: 15 segundos)", "conseguir": ""},
  {"numero": 31, "nombre": "Champi naranja", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de neutralización de habilidad especial +6.57 %\n(Recarga: 15 segundos)", "conseguir": ""},
  {"numero": 32, "nombre": "Baba de chispas", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico contra enemigos eléctricos +6.25 %", "conseguir": ""},
  {"numero": 33, "nombre": "Baba de chispas dorada", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Índice de crítico contra enemigos eléctricos +6.57 %", "conseguir": ""},
  {"numero": 34, "nombre": "Fulminador del lobo blanco", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de rayo de golpe crítico +8 %", "conseguir": ""},
  {"numero": 35, "nombre": "Topo gigante", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de supresión +8 % contra objetivos derribados", "conseguir": ""},
  {"numero": 36, "nombre": "Topo gigante excavador dorado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "Daño de supresión +8.4 % contra objetivos derribados", "conseguir": ""},
  {"numero": 37, "nombre": "Papa champi verde", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "ATQ de habilidades especiales +4 %\n(Recarga: 15 s)", "conseguir": ""},
  {"numero": 38, "nombre": "Custos", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "DEF del objetivo -8.25 % durante 5 s al asestar un golpe crítico con un ataque de tierra", "conseguir": ""},
  {"numero": 39, "nombre": "Guardian de el dorado", "tipo": "normal", "region": "Elendor", "link": "", "efecto": "ATQ +5.78 % para todos los compañeros durante 10 s al atacar a un jefe enemigo con su debilidad elemental\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 40, "nombre": "Secuaz de piedra", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de tierra del ataque +11 % al atacar con debilidad elemental", "conseguir": ""},
  {"numero": 41, "nombre": "Secuaz dorado", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de neutralización de ataque +11.55 % al atacar con debilidad elemental", "conseguir": ""},
  {"numero": 42, "nombre": "Guerrero orco", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.25 % contra enemigos normales\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 43, "nombre": "Secuaz orco rosa", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.57 % contra enemigos normales\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 44, "nombre": "Asaltante orco", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Índice de crítico +6.25 % contra enemigos normales\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 45, "nombre": "Dragon petreo", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño crítico +6.25 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 46, "nombre": "Dragon ermitaño hojudo", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño crítico +6.57 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 47, "nombre": "Dragon peñasco", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de habilidad especial +6.25 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 48, "nombre": "Dragon ermitaño vikingo", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de habilidad especial +6.57 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 49, "nombre": "Trol", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de neutralización de habilidad suprema +6.25 %", "conseguir": ""},
  {"numero": 50, "nombre": "Trol dañino", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de neutralización de habilidad suprema +6.57 %", "conseguir": ""},
  {"numero": 51, "nombre": "Urgash", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de debilidad elemental de habilidad suprema +8 %", "conseguir": ""},
  {"numero": 52, "nombre": "Lobo", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.25 % durante 5 segundos al asestar un golpe crítico", "conseguir": ""},
  {"numero": 53, "nombre": "Lobo albino", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.57 % durante 5 segundos al asestar un golpe crítico", "conseguir": ""},
  {"numero": 54, "nombre": "Lobomoth", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de contención +8 % durante 10 segundos al asestar un golpe crítico", "conseguir": ""},
  {"numero": 55, "nombre": "Scar", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño +8 % contra los jefes enemigos durante 5 segundos al asestar un golpe crítico", "conseguir": ""},
  {"numero": 56, "nombre": "Lobo gelido", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de habilidad especial +8.4 % durante 10 segundos al asestar un golpe crítico", "conseguir": ""},
  {"numero": 57, "nombre": "Dragon ermitaño", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.25 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 58, "nombre": "Dragon ermitaño azulin", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño físico +6.57 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 59, "nombre": "Dragon ermitaño gigante", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de ataque básico +6.25 % durante 5 segundos al recibir 10 golpes", "conseguir": ""},
  {"numero": 60, "nombre": "Cosechador", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Índice de crítico +6.25 % durante 5 s al recibir un impacto\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 61, "nombre": "Ejecutor", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "DEF +4.69 % durante 5 s al recibir un impacto\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 62, "nombre": "Fraile del vacio", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de debilidad elemental +6.25 % durante 5 segundos al recibir un impacto\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 63, "nombre": "Sombra del monje", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de debilidad elemental +6.57 % durante 5 segundos al recibir un impacto\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 64, "nombre": "Vectus", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "ATQ +4 % durante 10 segundos al recibir un impacto\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 65, "nombre": "Cimatauro", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño crítico +11 % contra jefes enemigos aturdidos", "conseguir": ""},
  {"numero": 66, "nombre": "Trol azulado", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Daño de fuego +11.55 % contra jefes enemigos aturdidos", "conseguir": ""},
  {"numero": 67, "nombre": "Amon", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "El índice de crítico de todos los compañeros +11 % durante 10 segundos al atacar a un jefe enemigo 10 veces", "conseguir": ""},
  {"numero": 68, "nombre": "Sombra de amon", "tipo": "normal", "region": "Varhine", "link": "", "efecto": "Índice de crítico de todos los compañeros +11.55 % durante 10 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 69, "nombre": "Gorrik", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Recupera un 2.4 % del máximo de PS al ejecutar 10 ataques básicos", "conseguir": ""},
  {"numero": 70, "nombre": "Baba de hielo", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de debilidad elemental +6.25 % contra enemigos de hielo", "conseguir": ""},
  {"numero": 71, "nombre": "Baba triston", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño crítico contra enemigos físicos +6.57 %", "conseguir": ""},
  {"numero": 72, "nombre": "Baba de fuego", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de debilidad elemental +6.25 % contra enemigos de fuego", "conseguir": ""},
  {"numero": 73, "nombre": "Reina baba", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño físico +8 % durante 5 segundos al atacar a un enemigo físico", "conseguir": ""},
  {"numero": 74, "nombre": "Emperatriz baba", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "ATQ +4.2 % durante 10 segundos al atacar a enemigos físicos\n(Recarga: 20 segundos)", "conseguir": ""},
  {"numero": 75, "nombre": "Aracnida", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "DEF +4.69 % durante 5 segundos al derrotar a 10 enemigos", "conseguir": ""},
  {"numero": 76, "nombre": "Boscaracnida", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño +6.25 % contra los enemigos normales durante 5 segundos al derrotar a 10 enemigos.", "conseguir": ""},
  {"numero": 77, "nombre": "Arañi explorador", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño +6.57 % contra los enemigos normales durante 5 segundos al derrotar a 10 enemigos.", "conseguir": ""},
  {"numero": 78, "nombre": "Montaraña", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño crítico +6.25 % durante 5 segundos al derrotar a 10 enemigos", "conseguir": ""},
  {"numero": 79, "nombre": "Arañuca", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de tierra +8 % durante 10 segundos al derrotar a 10 enemigos", "conseguir": ""},
  {"numero": 80, "nombre": "Padupa verde", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "DEF +4.2 % durante 10 s al derrotar a 10 enemigos", "conseguir": ""},
  {"numero": 81, "nombre": "Gargola", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "DEF del objetivo -4.69 % durante 5 s al usar un contrataque aéreo", "conseguir": ""},
  {"numero": 82, "nombre": "Gargola herbosa", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño físico de contraataque aéreo +6.25 %", "conseguir": ""},
  {"numero": 83, "nombre": "Gargola de barro", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño físico de contraataque aéreo +6.57 %", "conseguir": ""},
  {"numero": 84, "nombre": "Silfo", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de tierra +6.25 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 85, "nombre": "Vampi", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de tierra +6.57 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 86, "nombre": "Silfo leñoso", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño crítico +6.25 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 87, "nombre": "Silfo sanador", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de hielo +6.25 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 88, "nombre": "Silfo leñoso jefe", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Índice de crítico +6.25 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 89, "nombre": "Vampi de luna llena", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Índice de crítico +6.57 % contra objetivos aéreos", "conseguir": ""},
  {"numero": 90, "nombre": "Secuaz de hielo", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Índice de crítico de ataque de debilidad elemental +11 %", "conseguir": ""},
  {"numero": 91, "nombre": "Minotauro de las llanuras", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de viento +11 % contra jefes enemigos aturdidos", "conseguir": ""},
  {"numero": 92, "nombre": "Asaltante cuchara", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "RES al rayo del objetivo -11 % durante 5 segundos al atacar con debilidad elemental", "conseguir": ""},
  {"numero": 93, "nombre": "Lechona", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de rayo +11.55 % durante 10 segundos al atacar con debilidad elemental", "conseguir": ""},
  {"numero": 94, "nombre": "Avardan", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Daño de habilidad suprema de todos los compañeros de grupo +11 % durante 10 s al recibir un impacto de un jefe enemigo", "conseguir": ""},
  {"numero": 95, "nombre": "Mana de avardan", "tipo": "normal", "region": "Serenia", "link": "", "efecto": "Restablece un 3.47 % de PS para todos los miembros del equipo al atacar a un jefe enemigo aturdido\n(Recarga: 10 segundos)", "conseguir": ""},
  {"numero": 96, "nombre": "Junquito espectral", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño crítico de habilidad de cambio +6.25 %", "conseguir": ""},
  {"numero": 97, "nombre": "Junco espectral sagrado", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño crítico de habilidad de cambio +6.57 %", "conseguir": ""},
  {"numero": 98, "nombre": "Junco espectral", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Índice de crítico de habilidad de cambio +6.25 %", "conseguir": ""},
  {"numero": 99, "nombre": "Junco espectral de maleza", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de hielo +6.57 % contra jefes enemigos aturdidos", "conseguir": ""},
  {"numero": 100, "nombre": "Kkaebi azul", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño crítico de habilidad suprema +6.25 %", "conseguir": ""},
  {"numero": 101, "nombre": "Kkaebi verde", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego de habilidad suprema +6.25 %", "conseguir": ""},
  {"numero": 102, "nombre": "Jefe espectral", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño +6.25 % contra los enemigos normales durante 5 segundos al usar la habilidad suprema", "conseguir": ""},
  {"numero": 103, "nombre": "Semilla de odong", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de tierra de habilidad de cambio +6.25 %", "conseguir": ""},
  {"numero": 104, "nombre": "Odong", "tipo": "normal", "region": "Surah", "link": "", "efecto": "ATQ de habilidad de cambio +5.5 %", "conseguir": ""},
  {"numero": 105, "nombre": "Odong del arce", "tipo": "normal", "region": "Surah", "link": "", "efecto": "ATQ de habilidad de cambio +5.78 %", "conseguir": ""},
  {"numero": 106, "nombre": "Youkai arboreo", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego de habilidad de cambio +6.25 %", "conseguir": ""},
  {"numero": 107, "nombre": "Arremetida", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego de habilidad de cambio +6.57 %", "conseguir": ""},
  {"numero": 108, "nombre": "Coneji", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño físico +6.25 % durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 109, "nombre": "Coneji enmascarado", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño físico +6.57 % durante 5 s al usar una evasión de contrataque", "conseguir": ""},
  {"numero": 110, "nombre": "Mapachi", "tipo": "normal", "region": "Surah", "link": "", "efecto": "RES a físico del objetivo -6.25 % durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 111, "nombre": "Mapachi enmascarado", "tipo": "normal", "region": "Surah", "link": "", "efecto": "RES a físico del objetivo -6.57 % durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 112, "nombre": "Espiritu de batalla", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego +6.25 % contra jefes enemigos", "conseguir": ""},
  {"numero": 113, "nombre": "Espectro blanco", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego +6.57 % contra jefes enemigos", "conseguir": ""},
  {"numero": 114, "nombre": "Mascara sombria", "tipo": "normal", "region": "Surah", "link": "", "efecto": "ATQ del objetivo +4 % durante 10 s al atacar a un jefe enemigo\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 115, "nombre": "Mascara cenicienta", "tipo": "normal", "region": "Surah", "link": "", "efecto": "ATQ del objetivo -4 % durante 10 s al atacar a un jefe enemigo\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 116, "nombre": "Tortugui", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de habilidad de apoyo de todos los compañeros de grupo +6.25 % durante 5 s al recibir un impacto de un jefe enemigo", "conseguir": ""},
  {"numero": 117, "nombre": "Argenteo", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de habilidad de apoyo de todos los compañeros de grupo +6.57 % durante 5 s al recibir un impacto de un jefe enemigo", "conseguir": ""},
  {"numero": 118, "nombre": "Odong de la cienaga", "tipo": "normal", "region": "Surah", "link": "", "efecto": "RES a la tierra del objetivo -8 % durante 10 s al usar una habilidad de cambio", "conseguir": ""},
  {"numero": 119, "nombre": "Duoxini", "tipo": "normal", "region": "Surah", "link": "", "efecto": "RES a fuego del objetivo -11 % durante 10 s al atacar con una habilidad especial de fuego", "conseguir": ""},
  {"numero": 120, "nombre": "Demonio", "tipo": "normal", "region": "Surah", "link": "", "efecto": "Daño de fuego de habilidad especial +11.55 % al atacar con una habilidad especial de fuego", "conseguir": ""},
  {"numero": 121, "nombre": "Junco espectral negro", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de hielo +8 % contra jefes enemigos aturdidos", "conseguir": ""},
  {"numero": 122, "nombre": "Coneji ronin", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de viento +6.25 % durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 123, "nombre": "Coneji blanqueador", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de viento +6.57 % durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 124, "nombre": "Mapachi ronin", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño +6.25 % contra jefes enemigos durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 125, "nombre": "Mapachi blanqueador", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño +6.57 % contra jefes enemigos durante 5 s al usar un contrataque con evasión", "conseguir": ""},
  {"numero": 126, "nombre": "Tortugui ronin", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño físico +6.25 % durante 5 s al recibir un impacto de un jefe enemigo\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 127, "nombre": "Rana saltarina", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Índice de crítico de contrataque aéreo +6.25 %", "conseguir": ""},
  {"numero": 128, "nombre": "Rana de sal", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Índice de crítico de contrataque aéreo +6.57 %", "conseguir": ""},
  {"numero": 129, "nombre": "Rana bestial", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño crítico de contrataque aéreo +6.25 %", "conseguir": ""},
  {"numero": 130, "nombre": "Borborg", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "DEF +6 % durante 5 s al atacar a un jefe enemigo 10 veces", "conseguir": ""},
  {"numero": 131, "nombre": "Saporo", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "DEF +6.3 % durante 5 s al atacar a un jefe enemigo 10 veces", "conseguir": ""},
  {"numero": 132, "nombre": "Rerepollo", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de tierra +6.25 % contra enemigos normales\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 133, "nombre": "Kimkimchi", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de tierra +6.57 % contra enemigos normales\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 134, "nombre": "Mamaiz", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño crítico +6.25 % contra enemigos normales\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 135, "nombre": "Romamaiz", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño crítico +6.57 % contra enemigos normales\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 136, "nombre": "Flor de espino retorcida", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de rayo +6.25 % al atacar a un enemigo de rayo 10 veces", "conseguir": ""},
  {"numero": 137, "nombre": "Flor de sangre retorcida", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "RES al rayo del objetivo -6.25 % durante 5 s al atacar a un enemigo de rayo 5 veces\n(Recarga: 20 s)", "conseguir": ""},
  {"numero": 138, "nombre": "Flor de sangre magullada", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "RES al rayo del objetivo -6.57 % durante 5 s al atacar a un enemigo de rayo 5 veces", "conseguir": ""},
  {"numero": 139, "nombre": "Manwol", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Índice de crítico +11 % durante 5 s al usar una evasión de contrataque", "conseguir": ""},
  {"numero": 140, "nombre": "Nokjung", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Índice de crítico +11.55 % durante 5 s al usar una evasión de contrataque", "conseguir": ""},
  {"numero": 141, "nombre": "Onsae", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño crítico +11 % durante 5 s al asestar un golpe crítico con una habilidad suprema", "conseguir": ""},
  {"numero": 142, "nombre": "Ceniza", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño crítico +11.55 % durante 5 s al asestar un golpe crítico con una habilidad suprema", "conseguir": ""},
  {"numero": 143, "nombre": "Hanul", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "Daño de habilidad de cambio de todos los compañeros de grupo +11 % durante 10 segundos al asestar un golpe crítico contra un jefe enemigo", "conseguir": ""},
  {"numero": 144, "nombre": "Gulgak", "tipo": "normal", "region": "Namryung", "link": "", "efecto": "DEF del objetivo -8.67 % durante 5 s al asestar un golpe crítico a un enemigo jefe", "conseguir": ""},
  {"numero": 145, "nombre": "Cria de espiritu", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 146, "nombre": "Espiritu ardilloso", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 147, "nombre": "Espiritu ventoso", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 148, "nombre": "Espiritu rencoroso", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 149, "nombre": "Espiritu resentido", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 150, "nombre": "Tigre de nieve fantasmal", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 151, "nombre": "Tigre de piedra fantasmal", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 152, "nombre": "Lagarto arquero", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 153, "nombre": "Lagarto arqueo soleado", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 154, "nombre": "Lagarto guerrero", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 155, "nombre": "Lagarto guerrero jefe", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 156, "nombre": "Croco", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 157, "nombre": "Dragon croco", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 158, "nombre": "Espadachin coneji", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 159, "nombre": "Sapo blindado", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 160, "nombre": "Guerrero quelonio", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 161, "nombre": "Tortarbol", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 162, "nombre": "Sunek", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 163, "nombre": "Suhwa", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 164, "nombre": "Sombra roja", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 165, "nombre": "Sombra azul", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 166, "nombre": "Nagi", "tipo": "normal", "region": "Muwon", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 167, "nombre": "OchoB", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 168, "nombre": "RojoB", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 169, "nombre": "Hak-yu", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 170, "nombre": "CapQ", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 171, "nombre": "Promo", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 172, "nombre": "Bizpomo", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 173, "nombre": "Piiipo", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 174, "nombre": "Coloso", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 175, "nombre": "Coloso ajustado", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 176, "nombre": "Horda de chatarra", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 177, "nombre": "Horda limpia", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 178, "nombre": "Basurator", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 179, "nombre": "Silbinator", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 180, "nombre": "Agarrin", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 181, "nombre": "Felicin", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 182, "nombre": "Machacador", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 183, "nombre": "Titus", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 184, "nombre": "Mechrodon", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 185, "nombre": "Blanquin", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 186, "nombre": "Temerario", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 187, "nombre": "Temible", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 188, "nombre": "Lodo", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 189, "nombre": "Ragnadon", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 190, "nombre": "Raptor fidelis", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 191, "nombre": "Raptor altus", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 192, "nombre": "El mas alla", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 193, "nombre": "Olvido", "tipo": "normal", "region": "Sector 3", "link": "", "efecto": "", "conseguir": ""}
];

// Lista de artefactos. sub = sub estadística. pase = artefacto del pase (se muestra arriba del listado).
const ARTEFACTOS = [
  {"nombre": "Amigo de la naturaleza", "grado": 5, "rol": "Luchador", "sub": "Índice de crítico 21%", "efecto": "Se obtiene Tigremoto al contratacar.\nTigremoto\nEl daño de viento aumenta un 2.5 % al golpear con un ataque de viento básico 3 vez/veces (acumulaciones máximas: 25, duración: 20 s).", "personaje": "sangun", "pase": false},
  {"nombre": "Anhelo monstruoso", "grado": 5, "rol": "Asesino", "sub": "Índice de crítico 21%", "efecto": "Aumenta el ATQ un 12% cuando el potenciador de daño de contencion esta activo. (duracion: 20 s).\nAumenta la habilidad de apoyo y el daño de habilidad de cambio un 20%\nAumenta el daño de tierra un 20% al usar una habilidad de apoyo o una habilidad de cambio. (acumulaciones maximas:2, duracion: 20 s, las nuevas acumulaciones restablecen la duracion)", "personaje": "brisshell", "pase": false},
  {"nombre": "Aquel ante quien se arrodillan los dokkaebi", "grado": 5, "rol": "Luchador", "sub": "Índice de crítico 21%", "efecto": "El daño de ataque básico aumenta un 10 %.\nEl daño de tierra aumenta un 30 % al usar un ataque de tierra básico (duración: 4 s).", "personaje": "gabi", "pase": false},
  {"nombre": "Aventurero soñador", "grado": 4, "rol": "Destructor", "sub": "Daño crítico 33.75%", "efecto": "Durante 10 s tras usar una habilidad especial, el daño de hielo del siguiente (y solo del siguiente) ataque de hielo básico aumenta un 18 % (recarga: 30 s).", "personaje": "cloud", "pase": false},
  {"nombre": "Caballeria implacable", "grado": 4, "rol": "Destructor", "sub": "PS 2,319", "efecto": "Espíritu de caballería se concede en las siguientes situaciones (acumulaciones máximas: 3):\n- Al usar una habilidad de relevo\n- Al usar una habilidad de cambio\n- Al usar una habilidad especial\n- Concede 3 acumulaciones al usar una habilidad suprema\nEspíritu de caballería\nTras un ataque básico, se consumen todas las acumulaciones, el daño de rayo aumenta un 3 % y el daño de ataque básico aumenta un 3 % por acumulación (acumulaciones máximas: 3, duración: 4 s, cada acumulación tiene su propio tiempo de recuperación).\nTodas las acumulaciones se eliminan al final del combate.", "personaje": "reina", "pase": false},
  {"nombre": "Caida en desgracia", "grado": 4, "rol": "Asesino", "sub": "ATQ 20.25%", "efecto": "El ATQ aumenta un 7 % si el personaje equipado es de tipo a distancia.\nUsar una habilidad especial aumenta el daño de Habilidad de apoyo un 7 % y el daño de Ataques básicos un 7 % (duración: 10 s).", "personaje": "angel", "pase": false},
  {"nombre": "Determinacion del cazador de tigres", "grado": 4, "rol": "Asesino", "sub": "ATQ 20.25%", "efecto": "Impactar con un ataque de fuego aumenta el daño de ataque básico y el de habilidad de cambio un 2 %, mientras que el daño de habilidad especial disminuye un 10 % (acumulaciones máximas: 5, recarga: 0,02 s, duración: 3 s).", "personaje": "leeho", "pase": false},
  {"nombre": "Escama blanca del dragon serpenteante", "grado": 5, "rol": "Destructor", "sub": "ATQ 27%", "efecto": "Otorga Escama blanca al usar una habilidad de cambio (Duración: 15 s, Recuperación: 100 s)\nEscama blanca\naumenta el daño de viento un 15 %.\nAumenta el daño de ataque básico un 30 % si se aplica Inmunidad al daño mientras Escama blanca está activa. (Duración: 10 s)", "personaje": "nagi", "pase": false},
  {"nombre": "Escoba de los vientos", "grado": 5, "rol": "Asesino", "sub": "Daño crítico 45%", "efecto": "Aumenta el ATQ un 10 %.\nUsar una habilidad especial aumenta el daño de viento un 35 % (duración: 10 s).", "personaje": "esther", "pase": false},
  {"nombre": "Espada de fuego honesta", "grado": 4, "rol": "Luchador", "sub": "ATQ 20.25%", "efecto": "Obtener un efecto de conversión de elemento de ataque aumenta el daño de fuego un 4 % (recarga: 10 s, duración: 3 s).\nGolpear a un enemigo con un ataque de fuego restablece la duración del efecto y aumenta el daño de fuego un 1 % (acumulaciones máximas: 5, recarga: 0,2 s, duración: 3 s).", "personaje": "verna", "pase": false},
  {"nombre": "Final sin fin", "grado": 5, "rol": "Apoyo", "sub": "PS 2,319", "efecto": "Otorga Miedo escenico a todos los compañeros cuando el personaje equipado impacta con ataque de fuego usando su habilidad de apoyo.\nMiedo escenico.\nAumenta el ATQ en una cantidad equivalente al 39% del potenciador de daño de apoyo del personaje equipado, hasta un maximo del 25%. Si el compañero con el efecto es un personaje de tipo Fuego, el daño critico aumentara un 45% adicional (duracion 12 s).", "personaje": "vivian", "pase": false},
  {"nombre": "Fragancia forestal", "grado": 4, "rol": "Apoyo", "sub": "PS 3,091", "efecto": "Activar una habilidad de apoyo aumenta el daño de tierra de todos los compañeros un 10 % (duración: 7 s).", "personaje": "daisy", "pase": false},
  {"nombre": "Fuego de dragon exquisito", "grado": 5, "rol": "Destructor", "sub": "Potenciador de daño de fuego 27%", "efecto": "Usar un ataque de cambio otorga Piedra de llama.\nPiedra de llama\nEl daño de neutralización aumenta un 5 % (recarga: 5 s, duración: 5 s).\nMientras Piedra de llama está activa, obtener un potenciador de daño de fuego la mejora a Piedra de llama inscrita.\nPiedra de llama inscrita\nEl daño de neutralización aumenta un 15 % y el ATQ aumenta un 30 % (duración: 10 s).", "personaje": "flare", "pase": false},
  {"nombre": "Halo celestial de protección", "grado": 4, "rol": "Apoyo", "sub": "DEF 15.75%", "efecto": "Aumenta el ratio de PS base de los escudos que otorga el lanzador un 11 %.\nAdemás, otorgar un escudo también restaura los PS de todos los compañeros el equivalente al 15 % de los PS máx. del lanzador (recarga: 30 s).", "personaje": "", "pase": false},
  {"nombre": "Halo celestial de sabiduría", "grado": 4, "rol": "Apoyo", "sub": "Carga del medidor de suprema 11.25%", "efecto": "Carga la habilidad suprema un 2 % en los siguientes casos (10 s de recarga en cada caso):\n- Asestar un golpe crítico\n- Usar una habilidad especial\n- Usar un ataque de cambio", "personaje": "", "pase": false},
  {"nombre": "Halo celestial de vida", "grado": 5, "rol": "Apoyo", "sub": "DEF 21%", "efecto": "Aumenta un 11 % el daño de Habilidad suprema.\nGolpear a un enemigo aumenta el ATQ de todos los compañeros un 6 %. (Recarga: 0,2 s, duración: 15 s).", "personaje": "", "pase": true},
  {"nombre": "Inversion inteligente", "grado": 5, "rol": "Luchador", "sub": "Carga del medidor de suprema 15%", "efecto": "Aumenta el índice de crítico del personaje equipado un 6 %.\nUsar una habilidad especial aumenta el daño de ataque básico del lanzador un 15 % (duración: 5 s).\nEl daño de rayo aumenta un 40 % al obtener un efecto potenciador de daño de habilidad usando un ataque básico (duración: 3 s).", "personaje": "penny", "pase": false},
  {"nombre": "Kumiho ardiente", "grado": 5, "rol": "Luchador", "sub": "Daño crítico 45%", "efecto": "La carga del medidor de suprema aumenta un 12 %.\nLlama de kumiho se obtiene en las siguientes situaciones:\n- Al usar una habilidad suprema\n- Al invocar a un esbirro\n- Al ejecutar un ataque básico de fuego 4 veces (recarga: 11 s)\nLlama de kumiho\nEl daño de Ataques básicos aumenta un 6 % (acumulaciones máximas: 3, duración: 12 s, cada acumulación tiene su propia duración).\nAl alcanzar 3 acumulaciones, el daño de fuego aumenta un 38 % (duración: 25 s).", "personaje": "mina", "pase": false},
  {"nombre": "La llama que sueña con la justicia", "grado": 5, "rol": "Luchador", "sub": "Daño crítico 45%", "efecto": "Cada vez que obtienes un efecto de conversión de elemento de ataque ganas una Flor de llama floreciente.\nFlor de llama floreciente\nAumenta el ATQ un 25 % durante 3 s. Cada vez que consigues un potenciador de daño de fuego, la duración se restablece y concede Floración. (Recarga: 0,9 s)\nFloración\nAumenta el daño de Ataques básicos un 30 % y el daño de Habilidad especial un 10 %. (Duración: 3 s).", "personaje": "verna_verano", "pase": false},
  {"nombre": "La llave de futuras cerraduras", "grado": 4, "rol": "Luchador", "sub": "Daño crítico 33.75%", "efecto": "Usar una habilidad suprema otorga Poder desatado.\nPoder desatado\nEl daño de hielo aumenta un 18 % (recarga: 30 s, duración: 10 s).\nCuando el daño crítico supera el 50 %, el daño de ataque básico y el de habilidad de cambio aumentan un 1 % por cada 1 % por encima del umbral (hasta el 30 %, recarga: 30 s, duración: 10 s).", "personaje": "sera", "pase": false},
  {"nombre": "Loto sombrio", "grado": 4, "rol": "Asesino", "sub": "ATQ 20.25%", "efecto": "Otorga Asalto cuando el personaje equipado impacta con una habilidad de apoyo, lo que aumenta el daño de rayo un 5 % y el índice de crítico un 3 %. Cambiar al personaje equipado elimina Asalto después de 1 s.", "personaje": "yeonhwa", "pase": false},
  {"nombre": "Lucha Frenética", "grado": 5, "rol": "Luchador", "sub": "ATQ 27%", "efecto": "Aumenta el daño de Habilidad especial un 10 %.\nGolpear a un enemigo aumenta el daño crítico un 4 %. (Acumulaciones máximas: 2, recarga: 0,2 s, duración: 10 s).", "personaje": "", "pase": true},
  {"nombre": "Lucha sangrienta", "grado": 4, "rol": "Luchador", "sub": "DEF 15.75%", "efecto": "Golpear a un enemigo aumenta el índice de crítico un 1 %. (Acumulaciones máximas: 10, recarga: 0,1 s, duración: 50 s).\nAsestar un golpe crítico elimina todas las acumulaciones de efectos.", "personaje": "", "pase": false},
  {"nombre": "Melodia interpretada con fibras del corazon", "grado": 5, "rol": "Apoyo", "sub": "Carga del medidor de suprema 15%", "efecto": "Usar una habilidad de cambio otorga Vitalidad al jugador y a los compañeros.\nVitalidad\nAumenta el daño de ataque básico, de habilidad especial y de habilidad suprema un 2.5 % por segundo cuando la resistencia está al 90 % o más (acumulaciones máximas: 20, recarga: 60 s, duración: 30 s).", "personaje": "jiwon", "pase": false},
  {"nombre": "Miembro descoordinado de una banda militar", "grado": 4, "rol": "Apoyo", "sub": "DEF 15.75%", "efecto": "Cuando el personaje equipado impacta con una habilidad de relevo, se le concede Escala musical a él y a todos los compañeros (recarga: 0,5 s).\nEscala musical\nEl daño de viento aumenta un 1.5 % (acumulaciones máximas: 7, duración: 2 s).", "personaje": "bonnie", "pase": false},
  {"nombre": "Oscuridad opresiva", "grado": 5, "rol": "Asesino", "sub": "ATQ 27%", "efecto": "Usar una habilidad de apoyo o de cambio aumenta el daño crítico un 8 % (acumulaciones máximas: 2, duración: 15 s, las nuevas acumulaciones reinician la duración).", "personaje": "", "pase": true},
  {"nombre": "Oscuridad siniestra", "grado": 4, "rol": "Asesino", "sub": "DEF 15.75%", "efecto": "Usa una Habilidad especial aumenta el daño de ataque basico un 10% (recarga:0,2 s, duracion: 10 s).\nGolpear a un enemigo con un ataque basico aumenta el daño de habilidad suprema un 5% (acumulaciones maximas 2, recarga: 0,2 s, duracion: 10 s, las acumulaciones nuevas reinician la duracion).", "personaje": "", "pase": false},
  {"nombre": "Plenitud de amor", "grado": 4, "rol": "Apoyo", "sub": "PS 2,319", "efecto": "El daño de tierra del personaje equipado aumenta un 5 %.\nOtorgar un efecto de mejora a otro compañero también concede Elixir especial al jugador y al compañero.\nElixir especial\nEl daño crítico de los personajes afectados aumenta en una cantidad equivalente al 50 % del potenciador de daño de tierra del personaje equipado hasta un 30 % (duración: 10 s).", "personaje": "francis", "pase": false},
  {"nombre": "Presagio de despertar", "grado": 4, "rol": "Destructor", "sub": "PS 2,319", "efecto": "Recibir un impacto aumenta el daño de neutralización un 5 % (Recarga: 15 s, duración: 10 s).", "personaje": "", "pase": false},
  {"nombre": "Recompensa la bondad, elimina la maldad", "grado": 5, "rol": "Destructor", "sub": "Índice de crítico 21%", "efecto": "Aumenta el ATQ un 10 %.\nEl daño de rayo se incrementa un 5 % al obtener un potenciador de daño de neutralización. (Acumulaciones máximas: 3, Duración: 3 s, las nuevas acumulaciones restablecen la duración)\nCon las acumulaciones máximas, el daño de rayo aumenta un 35 % y el daño crítico se incrementa un 22 % adicional.", "personaje": "mabel", "pase": false},
  {"nombre": "Rocio bordador de llanuras", "grado": 5, "rol": "Apoyo", "sub": "DEF 21%", "efecto": "Cuando el personaje equipado concede un escudo a un compañero, su daño de ataque básico aumenta un 12 %. (Duración: 14 s).\nSi el compañero en cuestión es un personaje de hielo, el daño infligido con ataques básicos aumenta un 20 % adicional y el daño crítico se incrementa un 25 %. (Duración: 14 s).", "personaje": "narae", "pase": false},
  {"nombre": "Subidon de azucar", "grado": 4, "rol": "Destructor", "sub": "ATQ 20.25%", "efecto": "Cuando no se controla al personaje equipado, su ATQ aumenta un 4 % cada segundo (duración: 1,1 s).\nCuando el personaje equipado obtiene un potenciador de daño de neutralización, su ATQ aumenta un 2 % (acumulaciones máximas: 3, duración: 5 s, las nuevas acumulaciones reinician la duración).", "personaje": "ellie", "pase": false},
  {"nombre": "Superconductor estabilizado", "grado": 5, "rol": "Destructor", "sub": "Potenciador de daño de hielo 27%", "efecto": "Obtiene Sistema superconductor al activar Congelacion con una habilidad de cambio.\nSistema superconductor\nMientras Sistema superconductor esta activo, el daño critico aumenta un 54% y el daño de ataque basico aumenta un 133,2% del potenciador de daño de neutralizacion (hasta un 60%)(duracion: 12 s).\nAdemas, al usar una habilidad especial mientras Sistema superconductor esta activo, el ATQ aumenta un 81,2% del potenciador de daño de neutralizacion hasta un 35%. Este efecto solo se aplica a las habilidad especiales y despues se elimina.", "personaje": "isabella", "pase": false},
  {"nombre": "Temblores tronidos", "grado": 5, "rol": "Destructor", "sub": "ATQ 27%", "efecto": "Usar una habilidad de cambio aumenta el daño de neutralización un 7 % (recarga: 2 s, duración: 10 s).\nInfligir un ataque contra un enemigo aumenta el ATQ un 3 % (acumulaciones máximas: 3, recarga: 0,2 s, duración: 3 s, las nuevas acumulaciones reinician la duración).", "personaje": "", "pase": true},
  {"nombre": "Choque del tren desbocado", "grado": 5, "rol": "Luchador", "sub": "Daño crítico 45%", "efecto": "Al usar una Habilidad especial o Habilidad suprema, el daño de Habilidad especial de Viento aumenta un 74,8% y el daño de ataque basico de Viento aumenta un 49,8% (recarga: 10 s, duracion: 10s).", "personaje": "chloe", "pase": false},
  {"nombre": "Un verano empapado de amor", "grado": 5, "rol": "Apoyo", "sub": "Potenciador de daño de tierra 27%", "efecto": "Al usar una habilidad de apoyo, el índice de crítico de todos los compañeros aumenta un 6 %. Si el compañero que recibe el efecto es un personaje de Tierra, su daño de ataque básico aumentará un 20 % adicional. (Duración: 6 s)", "personaje": "francis_verano", "pase": false},
  {"nombre": "Veredicto gelido", "grado": 5, "rol": "Luchador", "sub": "Daño crítico 45%", "efecto": "Golpear a un enemigo con una habilidad especial aumenta el daño de hielo un 20 % (duración: 4 s, recarga: 20 s). Golpear a un enemigo con un ataque básico mientras dure el efecto aumenta el daño de habilidad especial un 40 % (duración: 1.8 s).", "personaje": "ophelia", "pase": false},
  {"nombre": "Vuelo del halcon", "grado": 4, "rol": "Asesino", "sub": "ATQ 20.25%", "efecto": "Usar una habilidad especial otorga Pesadilla.\nPesadilla\nTras obtener Pesadilla, el daño de rayo aumenta un 3 %. Al usar una habilidad de apoyo o de relevo, el daño de rayo aumenta un 3 % adicional (acumulaciones máximas: 3, duración: 20 s).\nSi se alcanza el máximo de 3 acumulaciones de Pesadilla durante la vigencia del efecto, concede Ritmo.\nRitmo\nEl daño de habilidad especial aumenta un 10 %. Usar una habilidad especial eliminará Ritmo. (Duración: 15 s).", "personaje": "benjamin", "pase": false}
];

// Piezas de cada conjunto de equipamiento, con su efecto y dónde conseguirlas
const PIEZAS_EQUIPO = [
  {"conjunto": "abismo", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "abismo", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "abismo", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "abismo", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "arbol_milenario", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "arbol_milenario", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "banquete_grandioso_de_gloton", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "banquete_grandioso_de_gloton", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "corazon_de_escarcha_eterna", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "corazon_de_escarcha_eterna", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "destructor_despiadado", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "destructor_despiadado", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "destructor_despiadado", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "destructor_despiadado", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "devorador_del_abismo", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "devorador_del_abismo", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "el_sin_nombre", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "el_sin_nombre", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "el_sin_nombre", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "el_sin_nombre", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "espiritu_de_lucha_zorro_youkai", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "espiritu_de_lucha_zorro_youkai", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "flores_en_todo_su_esplendor", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "flores_en_todo_su_esplendor", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "juez", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "juez", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "juez", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "juez", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "nivel_de_gloton", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "nivel_de_gloton", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "nivel_de_gloton", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "nivel_de_gloton", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "noche_de_luna_llena", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "noche_de_luna_llena", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "noche_de_luna_llena", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "noche_de_luna_llena", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "piedra_ancestral", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "piedra_ancestral", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "poder_imponente_del_monte_tai", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "poder_imponente_del_monte_tai", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "poder_imponente_del_monte_tai", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "poder_imponente_del_monte_tai", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "rey_espiritual", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "rey_espiritual", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "rey_espiritual", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "rey_espiritual", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "ritos_del_general_victorioso", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "ritos_del_general_victorioso", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "rugido_de_hanul", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "rugido_de_hanul", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "rugido_de_hanul", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "rugido_de_hanul", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "senor_de_la_cienaga", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "senor_de_la_cienaga", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "senor_de_la_cienaga", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "senor_de_la_cienaga", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "sirius", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "sirius", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "sirius", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "sirius", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "tirano_del_bosque", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "tirano_del_bosque", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "tirano_del_bosque", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "tirano_del_bosque", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "vanguardia_de_victoria", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "vanguardia_de_victoria", "pieza": "calzado", "efecto": "", "conseguir": ""},
  {"conjunto": "viento_de_poniente", "pieza": "casco", "efecto": "", "conseguir": ""},
  {"conjunto": "viento_de_poniente", "pieza": "pechera", "efecto": "", "conseguir": ""},
  {"conjunto": "viento_de_poniente", "pieza": "guantes", "efecto": "", "conseguir": ""},
  {"conjunto": "viento_de_poniente", "pieza": "calzado", "efecto": "", "conseguir": ""}
];
// <<< LISTAS <<<
