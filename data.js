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
  { id: 'angel', name: 'Angel', tier: '4★', element: 'Fuego', role: 'Asesino', rol: 'SubDPS', rango: 'A distancia', artefacto: 'Caida en desgracia', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Guardian de el dorado', dos: 'Gulgak', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'benjamin', name: 'Benjamin', tier: '4★', element: 'Rayo', role: 'Asesino', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Vuelo de halcon', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Raptor fidelis', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'bonnie', name: 'Bonnie', tier: '4★', element: 'Viento', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Miembro descoordinado de una banda militar', equipos: [[{ conjunto: 'nivel_de_gloton', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Guardian de el dorado', dos: 'Olvido', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'brisshell', name: 'Brisshell', tier: '5★', element: 'Tierra', role: 'Asesino', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Anhelo monstruoso', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], [{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Secuaz de piedra', dos: 'Scar', tres: 'Coloso ajustado', legendario: 'Reginula' } },
  { id: 'chloe', name: 'Chloe', tier: '5★', element: 'Viento', role: 'Luchador', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Tren a toda marcha', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'cloud', name: 'Cloud', tier: '4★', element: 'Hielo', role: 'Destructor', rol: 'DPS', rango: 'A distancia', artefacto: 'Aventurero soñador', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], monsters: { link: 'Sombra roja', dos: 'Secuaz de piedra', tres: 'Horda de chatarra', legendario: 'Sorin' } },
  { id: 'daisy', name: 'Daisy', tier: '4★', element: 'Tierra', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Fragancia forestal', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'ellie', name: 'Ellie', tier: '4★', element: 'Tierra', role: 'Destructor', rol: 'DPS', rango: 'A distancia', artefacto: 'Subidon de azucar', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Secuaz de piedra', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'esther', name: 'Esther', tier: '5★', element: 'Viento', role: 'Asesino', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Escoba de los vientos', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'flare', name: 'Flare', tier: '5★', element: 'Fuego', role: 'Destructor', rol: 'DPS/SubDPS', rango: 'A distancia', artefacto: 'Fuego de dragon exquisito', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'banquete_grandioso_de_gloton', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], monsters: { link: 'Guardian de el dorado', dos: 'Secuaz de hielo', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'francis', name: 'Francis', tier: '4★', element: 'Tierra', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Plenitud de amor', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'francis_verano', name: 'Francis Verano', tier: '5★', element: 'Tierra', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Un verano empapado de amor', equipos: [[{ conjunto: 'sirius', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Demonio', dos: 'Custos', tres: 'Odong de la ciénaga', legendario: 'Reginula' } },
  { id: 'gabi', name: 'Gabi', tier: '5★', element: 'Tierra', role: 'Luchador', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Aquel ante quien se arrodillan los dokkaebi', equipos: [[{ conjunto: 'viento_de_poniente', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Secuaz de piedra', dos: 'Scar', tres: 'Coloso ajustado', legendario: 'Reginula' } },
  { id: 'isabella', name: 'Isabella', tier: '5★', element: 'Hielo', role: 'Destructor', rol: 'DPS/SubDPS', rango: 'A distancia', artefacto: 'Superconductor estabilizado', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Neutralización'], monsters: { link: 'Sombra azul', dos: 'Secuaz de hielo', tres: 'Luppo de sombra lunar', legendario: 'Sorin' } },
  { id: 'jiwon', name: 'Jiwon', tier: '5★', element: 'Viento', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Melodia interpretada con fibras del corazon', equipos: [[{ conjunto: 'nivel_de_gloton', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Guardian de el dorado', dos: 'Olvido', tres: 'Gulgak', legendario: 'Reginula' } },
  { id: 'leeho', name: 'Leeho', tier: '4★', element: 'Fuego', role: 'Asesino', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Determinacion del cazador de tigres', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], [{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }]], monsters: { link: 'Guardian de el dorado', dos: 'Gulgak', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'mabel', name: 'Mabel', tier: '5★', element: 'Rayo', role: 'Destructor', rol: 'DPS', rango: 'A distancia', artefacto: 'Recompensa la bondad elimina la maldad', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Horda de chatarra', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'mina', name: 'Mina', tier: '5★', element: 'Fuego', role: 'Luchador', rol: 'DPS', rango: 'A distancia', artefacto: 'Kumiho ardiente', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'nagi', name: 'Nagi', tier: '5★', element: 'Viento', role: 'Destructor', rol: 'SubDPS', rango: 'A distancia', artefacto: 'Escama blanca del dragon serpenteante', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Neutralización'], monsters: { link: 'Demonio', dos: 'Horda limpia', tres: 'Amon', legendario: 'Reginula' } },
  { id: 'narae', name: 'Narae', tier: '5★', element: 'Hielo', role: 'Apoyo', rol: 'Apoyo', rango: 'A distancia', artefacto: 'Rocio bordador de llanuras', equipos: [[{ conjunto: 'senor_de_la_cienaga', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Blanquin', dos: 'Gulgak', tres: 'Amon', legendario: 'Sorin' } },
  { id: 'ophelia', name: 'Ophelia', tier: '5★', element: 'Hielo', role: 'Luchador', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Veredicto gelido', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Sombra roja', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Sorin' } },
  { id: 'penny', name: 'Penny', tier: '5★', element: 'Rayo', role: 'Luchador', rol: 'DPS', rango: 'A distancia', artefacto: 'Inversion inteligente', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Horda de chatarra', dos: 'Scar', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'reina', name: 'Reina', tier: '4★', element: 'Rayo', role: 'Destructor', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Caballeria implacable', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Raptor fidelis', dos: 'Gulgak', tres: 'Lechona', legendario: 'Reginula' } },
  { id: 'sangun', name: 'Sangun', tier: '5★', element: 'Viento', role: 'Luchador', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'Amigo de la naturaleza', equipos: [[{ conjunto: 'abismo', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Nagi', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Reginula' } },
  { id: 'sera', name: 'Sera', tier: '4★', element: 'Hielo', role: 'Luchador', rol: 'DPS', rango: 'Cuerpo a cuerpo', artefacto: 'La llave de futuras cerraduras', equipos: [[{ conjunto: 'juez', piezas: [1, 2, 3, 4] }], [{ conjunto: 'flores_en_todo_su_esplendor', piezas: [1, 4] }, { conjunto: 'tirano_del_bosque', piezas: [2, 3] }]], monsters: { link: 'Sombra azul', dos: 'Secuaz de hielo', tres: 'Horda de chatarra', legendario: 'Sorin' } },
  { id: 'verna', name: 'Verna', tier: '4★', element: 'Fuego', role: 'Luchador', rol: 'SubDPS', rango: 'Cuerpo a cuerpo', artefacto: 'Espada de fuego honesta', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'verna_verano', name: 'Verna Verano', tier: '5★', element: 'Fuego', role: 'Luchador', rol: 'DPS/SubDPS', rango: 'Cuerpo a cuerpo', artefacto: 'La llama que suena con la justicia', equipos: [[{ conjunto: 'noche_de_luna_llena', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Reducción de recarga'], monsters: { link: 'Duoxini', dos: 'Secuaz de hielo', tres: 'Scar', legendario: 'Reginula' } },
  { id: 'vivian', name: 'Vivian', tier: '5★', element: 'Fuego', role: 'Apoyo', rol: 'Apoyo', rango: 'Cuerpo a cuerpo', artefacto: 'Final sin fin', equipos: [[{ conjunto: 'arbol_milenario', piezas: [1, 2] }, { conjunto: 'noche_de_luna_llena', piezas: [3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Reducción de recarga', 'Apoyo'], monsters: { link: 'Demonio', dos: 'Amon', tres: 'Ragnadon', legendario: 'Reginula' } },
  { id: 'yeonhwa', name: 'Yeonhwa', tier: '4★', element: 'Rayo', role: 'Asesino', rol: 'SubDPS', rango: 'Cuerpo a cuerpo', artefacto: 'Loto sombrio', equipos: [[{ conjunto: 'rey_espiritual', piezas: [1, 2, 3, 4] }], []], rasgos: ['Daño a Jefes', 'Debilidad elemental', 'Daño Crítico', 'Daño de rayo'], monsters: { link: 'Guardian de el dorado', dos: 'Asaltante cuchara', tres: 'Amon', legendario: 'Reginula' } }
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

// Regiones para el filtro de monsterlings (hoja "regiones" del Excel)
const REGIONES = [];

// Lista completa de monsterlings. link: 'Sí' o 'No'. Región, efecto y cómo conseguirlo se completan en el Excel.
const MONSTERLINGS = [
  {"numero": 1, "nombre": "Reginula", "tipo": "legendario", "region": "", "link": "No", "efecto": "", "conseguir": ""},
  {"numero": 2, "nombre": "Sorin", "tipo": "legendario", "region": "", "link": "No", "efecto": "", "conseguir": ""},
  {"numero": 1, "nombre": "Champi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 2, "nombre": "Champi morado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 3, "nombre": "Mama champi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 4, "nombre": "Mama hoji", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 5, "nombre": "Babosin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 6, "nombre": "Manchado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 7, "nombre": "Recluta trasgo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 8, "nombre": "Teniente segundo trasgo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 9, "nombre": "Soldado trasgo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 10, "nombre": "Cabo trasgo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 11, "nombre": "Guerrero del lobo blanco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 12, "nombre": "Lobo negro", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 13, "nombre": "Mandibula de escarcha", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 14, "nombre": "Mandibula carmesi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 15, "nombre": "Asaltante tenedor", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 16, "nombre": "Rey baba", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 17, "nombre": "Reina escarlata", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 18, "nombre": "Taglock", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 19, "nombre": "Primo trasgo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 20, "nombre": "Luppo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 21, "nombre": "Luppo de sombra lunar", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 22, "nombre": "Baba coronada", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 23, "nombre": "Tio champi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 24, "nombre": "Tio champi verde", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 25, "nombre": "Topo excavador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 26, "nombre": "Topo excavador dorado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 27, "nombre": "Topo tunelador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 28, "nombre": "Champi marron", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 29, "nombre": "Champi verde azulado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 30, "nombre": "Champi verde", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 31, "nombre": "Champi naranja", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 32, "nombre": "Baba de chispas", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 33, "nombre": "Baba de chispas dorada", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 34, "nombre": "Fulminador del lobo blanco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 35, "nombre": "Topo gigante", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 36, "nombre": "Topo gigante excavador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 37, "nombre": "Papa champi verde", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 38, "nombre": "Custos", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 39, "nombre": "Guardian de el dorado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 40, "nombre": "Secuaz de piedra", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 41, "nombre": "Secuaz dorado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 42, "nombre": "Guerrero orco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 43, "nombre": "Secuaz orco rosa", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 44, "nombre": "Asaltante orco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 45, "nombre": "Dragon petreo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 46, "nombre": "Dragon ermitaño hojudo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 47, "nombre": "Dragon peñasco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 48, "nombre": "Dragon ermitaño vikingo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 49, "nombre": "Trol", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 50, "nombre": "Trol dañino", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 51, "nombre": "Urgash", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 52, "nombre": "Lobo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 53, "nombre": "Lobo labino", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 54, "nombre": "Lobomoth", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 55, "nombre": "Scar", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 56, "nombre": "Lobo gelido", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 57, "nombre": "Dragon ermitaño", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 58, "nombre": "Dragon ermitaño azulin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 59, "nombre": "Dragon ermitaño gigante", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 60, "nombre": "Cosechador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 61, "nombre": "Ejecutor", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 62, "nombre": "Fraile del vacio", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 63, "nombre": "Sombra del monje", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 64, "nombre": "Vectus", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 65, "nombre": "Cimatauro", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 66, "nombre": "Trol azulado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 67, "nombre": "Amon", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 68, "nombre": "Sombra de amon", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 69, "nombre": "Gorrik", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 70, "nombre": "Baba de hielo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 71, "nombre": "Baba triston", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 72, "nombre": "Baba de fuego", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 73, "nombre": "Reina baba", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 74, "nombre": "Emperatriz baba", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 75, "nombre": "Aracnida", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 76, "nombre": "Boscaracnida", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 77, "nombre": "Arañi explorador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 78, "nombre": "Montaraña", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 79, "nombre": "Arañuca", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 80, "nombre": "Padupa verde", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 81, "nombre": "Gargola", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 82, "nombre": "Gargola herbosa", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 83, "nombre": "Gargola de barro", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 84, "nombre": "Silfo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 85, "nombre": "Vampi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 86, "nombre": "Silfo leñoso", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 87, "nombre": "Silfo sanador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 88, "nombre": "Silfo leñoso jefe", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 89, "nombre": "Vampi de luna llena", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 90, "nombre": "Secuaz de hielo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 91, "nombre": "Minotauro de las llanuras", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 92, "nombre": "Asaltante cuchara", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 93, "nombre": "Lechona", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 94, "nombre": "Avardan", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 95, "nombre": "Mana de avardan", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 96, "nombre": "Junquito espectral", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 97, "nombre": "Junco espectral sagrado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 98, "nombre": "Junco espectral", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 99, "nombre": "Junco espectral de maleza", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 100, "nombre": "Kkaebi azul", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 101, "nombre": "Kkaebi verde", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 102, "nombre": "Jefe espectral", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 103, "nombre": "Semilla de odong", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 104, "nombre": "Odong", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 105, "nombre": "Odong del arce", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 106, "nombre": "Youkai arboreo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 107, "nombre": "Arremetida", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 108, "nombre": "Coneji", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 109, "nombre": "Coneji enmascarado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 110, "nombre": "Mapachi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 111, "nombre": "Mapachi enmascarado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 112, "nombre": "Espiritu de batalla", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 113, "nombre": "Espectro blanco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 114, "nombre": "Mascara sombria", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 115, "nombre": "Mascara cenicienta", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 116, "nombre": "Tortugui", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 117, "nombre": "Argenteo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 118, "nombre": "Odong de la cienaga", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 119, "nombre": "Duoxini", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 120, "nombre": "Demonio", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 121, "nombre": "Junco espectral negro", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 122, "nombre": "Coneji ronin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 123, "nombre": "Coneji blanqueador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 124, "nombre": "Mapachi ronin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 125, "nombre": "Mapachi blanqueador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 126, "nombre": "Tortugui ronin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 127, "nombre": "Rana saltarina", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 128, "nombre": "Rana de sal", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 129, "nombre": "Rana bestial", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 130, "nombre": "Borborg", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 131, "nombre": "Saporo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 132, "nombre": "Rerepollo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 133, "nombre": "Kimkimchi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 134, "nombre": "Mamaiz", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 135, "nombre": "Romamaiz", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 136, "nombre": "Flor de espino retorcida", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 137, "nombre": "Flor de sangre retorcida", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 138, "nombre": "Flor de sangre magullada", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 139, "nombre": "Manwol", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 140, "nombre": "Nokjung", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 141, "nombre": "Onsae", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 142, "nombre": "Ceniza", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 143, "nombre": "Hanul", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 144, "nombre": "Gulgak", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 145, "nombre": "Cria de espiritu", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 146, "nombre": "Espiritu ardilloso", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 147, "nombre": "Espiritu ventoso", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 148, "nombre": "Espiritu rencoroso", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 149, "nombre": "Espiritu resentido", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 150, "nombre": "Tigre de nieve fantasmal", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 151, "nombre": "Tigre de piedra fantasmal", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 152, "nombre": "Lagarto arquero", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 153, "nombre": "Lagarto arqueo soleado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 154, "nombre": "Lagarto guerrero", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 155, "nombre": "Lagarto guerrero jefe", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 156, "nombre": "Croco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 157, "nombre": "Dragon croco", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 158, "nombre": "Espadachin coneji", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 159, "nombre": "Sapo blindado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 160, "nombre": "Guerrero quelonio", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 161, "nombre": "Tortarbol", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 162, "nombre": "Sunek", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 163, "nombre": "Suhwa", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 164, "nombre": "Sombra roja", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 165, "nombre": "Sombra azul", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 166, "nombre": "Nagi", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 167, "nombre": "Ochob", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 168, "nombre": "Rojob", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 169, "nombre": "Hak-yu", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 170, "nombre": "Capq", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 171, "nombre": "Promo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 172, "nombre": "Bizpomo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 173, "nombre": "Piiipo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 174, "nombre": "Coloso", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 175, "nombre": "Coloso ajustado", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 176, "nombre": "Horda de chatarra", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 177, "nombre": "Horda limpia", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 178, "nombre": "Basurator", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 179, "nombre": "Silbinator", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 180, "nombre": "Agarrin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 181, "nombre": "Felicin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 182, "nombre": "Machacador", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 183, "nombre": "Titus", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 184, "nombre": "Mechrodon", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 185, "nombre": "Blanquin", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 186, "nombre": "Temerario", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 187, "nombre": "Temible", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 188, "nombre": "Lodo", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 189, "nombre": "Ragnadon", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 190, "nombre": "Raptor fidelis", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 191, "nombre": "Raptor altus", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 192, "nombre": "El mas alla", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""},
  {"numero": 193, "nombre": "Olvido", "tipo": "normal", "region": "", "link": "", "efecto": "", "conseguir": ""}
];

// Lista de artefactos. grado 5 = propio de un personaje; grado 4 = de uso general según el rol.
const ARTEFACTOS = [
  {"nombre": "Caida en desgracia", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "angel"},
  {"nombre": "Vuelo de halcon", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "benjamin"},
  {"nombre": "Miembro descoordinado de una banda militar", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "bonnie"},
  {"nombre": "Anhelo monstruoso", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "brisshell"},
  {"nombre": "Tren a toda marcha", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "chloe"},
  {"nombre": "Aventurero soñador", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "cloud"},
  {"nombre": "Fragancia forestal", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "daisy"},
  {"nombre": "Subidon de azucar", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "ellie"},
  {"nombre": "Escoba de los vientos", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "esther"},
  {"nombre": "Fuego de dragon exquisito", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "flare"},
  {"nombre": "Plenitud de amor", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "francis"},
  {"nombre": "Un verano empapado de amor", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "francis_verano"},
  {"nombre": "Aquel ante quien se arrodillan los dokkaebi", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "gabi"},
  {"nombre": "Superconductor estabilizado", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "isabella"},
  {"nombre": "Melodia interpretada con fibras del corazon", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "jiwon"},
  {"nombre": "Determinacion del cazador de tigres", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "leeho"},
  {"nombre": "Recompensa la bondad elimina la maldad", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "mabel"},
  {"nombre": "Kumiho ardiente", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "mina"},
  {"nombre": "Escama blanca del dragon serpenteante", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "nagi"},
  {"nombre": "Rocio bordador de llanuras", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "narae"},
  {"nombre": "Veredicto gelido", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "ophelia"},
  {"nombre": "Inversion inteligente", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "penny"},
  {"nombre": "Caballeria implacable", "grado": 5, "rol": "Destructor", "efecto": "", "personaje": "reina"},
  {"nombre": "Amigo de la naturaleza", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "sangun"},
  {"nombre": "La llave de futuras cerraduras", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "sera"},
  {"nombre": "Espada de fuego honesta", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "verna"},
  {"nombre": "La llama que suena con la justicia", "grado": 5, "rol": "Luchador", "efecto": "", "personaje": "verna_verano"},
  {"nombre": "Final sin fin", "grado": 5, "rol": "Apoyo", "efecto": "", "personaje": "vivian"},
  {"nombre": "Loto sombrio", "grado": 5, "rol": "Asesino", "efecto": "", "personaje": "yeonhwa"}
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
