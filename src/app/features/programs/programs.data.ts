export interface TourProgram {
  slug:string;
  title:string;
  destinations:string[];
  category:'Chile'|'Internacional';
  summary:string;
  highlights:string[];
  suggestedDays:string[];
  notes:string;
  image:string;
}
export const TOUR_PROGRAMS:readonly TourProgram[]=[
  {slug:'pucon-puerto-varas-chiloe',title:'Pucón, Puerto Varas y Chiloé',destinations:['Pucón','Puerto Varas','Chiloé'],category:'Chile',
  summary:'Una ruta que conecta volcanes, lagos y las tradiciones del sur de Chile. Ideal para cursos que buscan naturaleza, cultura y convivencia.',
  highlights:['Paisajes del volcán Villarrica','Lagos y miradores de Puerto Varas','Cultura y patrimonio chilote','Momentos grupales de integración'],
  suggestedDays:['Salida, bienvenida y ruta hacia el sur','Experiencias y recorridos en la zona de Pucón','Traslado y visita a Puerto Varas','Circuito cultural por Chiloé','Recorridos finales y retorno según itinerario acordado'],
  notes:'Circuito ilustrativo, no itinerario contratado. El orden de las actividades, la duración, el transporte, el alojamiento y los servicios incluidos se confirman en la cotización.',
  image:'/assets/images/content/foto-web-paisajes.jpg'},
  {slug:'pucon-bariloche-valdivia',title:'Pucón, Bariloche y Valdivia',destinations:['Pucón','San Carlos de Bariloche','Valdivia'],category:'Internacional',
  summary:'Paisajes de dos países, experiencias compartidas y panoramas de naturaleza para vivir una gira memorable.',
  highlights:['Aventura y paisajes en Pucón','Lagos y montañas patagónicas','Recorridos panorámicos en Bariloche','Visitas culturales en Valdivia'],
  suggestedDays:['Salida y viaje hacia Pucón','Actividades turísticas en la Araucanía','Cruce internacional y llegada a Bariloche','Exploración de circuitos patagónicos','Recorridos adicionales según programa','Regreso a Chile y visita a Valdivia','Retorno al lugar de origen'],
  notes:'Programa referencial sujeto a contratación y condiciones fronterizas. Documentos de viaje, permisos para menores y requisitos de ingreso deben verificarse antes de la salida.',
  image:'/assets/images/content/services/foto_web_1.jpg'},
  {slug:'brasil-camboriu-iguazu',title:'Brasil: Camboriú e Iguazú',destinations:['Camboriú','Foz de Iguazú'],category:'Internacional',
  summary:'Una propuesta que reúne destinos brasileños, paisajes costeros y la posibilidad de conocer uno de los grandes atractivos naturales de Sudamérica.',
  highlights:['Paisajes costeros y vida de playa','Experiencias recreativas grupales','Opciones de actividades culturales','Alternativas de visita a las cataratas'],
  suggestedDays:['Salida y traslado de acuerdo con el origen del grupo','Llegada y reconocimiento de destino','Experiencias y actividades en Camboriú','Actividades adicionales según propuesta','Traslados y visitas complementarias sujetas a factibilidad','Retorno al lugar de origen'],
  notes:'No todos los atractivos se incluyen necesariamente en un mismo viaje. La combinación de destinos, noches, traslados y servicios se evalúa antes de cotizar.',
  image:'/assets/images/content/services/foto_web_4.jpg'}
];