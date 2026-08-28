// Banco de preguntas del quiz — 2 por sección (conceptos, señales, protocolo, líneas de ayuda)
const QUIZ_DATA = [
  {
    pregunta: "¿El suicidio se puede prevenir?",
    opciones: [
      "Sí, en la mayoría de los casos hablar y actuar a tiempo ayuda",
      "No, si alguien lo decidió no hay nada que hacer"
    ],
    correcta: 0,
    correccion: "El suicidio casi siempre es prevenible. La ideación suicida suele ser temporal, aunque el dolor se sienta permanente."
  },
  {
    pregunta: "Preguntarle directamente a alguien si está pensando en suicidarse...",
    opciones: [
      "Puede plantarle la idea en la cabeza",
      "No aumenta el riesgo; suele aliviar y abrir la conversación"
    ],
    correcta: 1,
    correccion: "Preguntar directamente no induce el pensamiento. Al contrario, suele aliviar a la persona al sentirse escuchada."
  },
  {
    pregunta: "¿Cuál de estas es una señal de alerta temprana?",
    opciones: [
      "Regalar pertenencias valiosas y despedirse de forma inusual",
      "Estar más ocupado que de costumbre con el trabajo"
    ],
    correcta: 0,
    correccion: "Despedirse, regalar objetos importantes o 'poner en orden' asuntos personales son señales que ameritan atención."
  },
  {
    pregunta: "El aislamiento social repentino en alguien que antes era sociable es...",
    opciones: [
      "Algo normal que no requiere seguimiento",
      "Una posible señal de alerta que vale la pena conversar"
    ],
    correcta: 1,
    correccion: "Los cambios bruscos de comportamiento, como aislarse, son señales que merecen una conversación cercana y sin juicio."
  },
  {
    pregunta: "Si alguien está en peligro inmediato (ya tiene un método a la mano), lo primero es...",
    opciones: [
      "Esperar a que se calme por sí solo/a",
      "No dejarla sola y contactar a servicios de emergencia"
    ],
    correcta: 1,
    correccion: "Ante peligro inmediato, no se debe dejar sola a la persona y hay que buscar ayuda profesional o de emergencia de inmediato."
  },
  {
    pregunta: "Al acompañar a alguien con señales de alerta (sin urgencia inmediata), lo más útil es...",
    opciones: [
      "Escuchar sin juzgar y ayudarla a buscar apoyo profesional",
      "Decirle que se distraiga y no piense más en eso"
    ],
    correcta: 0,
    correccion: "Escuchar sin juzgar, validar lo que siente y acompañarla a buscar ayuda profesional es el paso más útil."
  },
  {
    pregunta: "En Panamá, la línea nacional de ayuda para crisis emocional y prevención del suicidio es la...",
    opciones: [
      "Línea 147, disponible las 24 horas",
      "Línea 900, solo en horario de oficina"
    ],
    correcta: 0,
    correccion: "La Línea 147 'Tu Vida Importa' del MIDES está disponible gratis las 24 horas, los 7 días de la semana."
  },
  {
    pregunta: "Si tú o alguien está en peligro de vida inmediato en Panamá, ¿a qué número se debe llamar?",
    opciones: [
      "Al 147 únicamente",
      "Al 911, el número de emergencias"
    ],
    correcta: 1,
    correccion: "Para peligro de vida inmediato, el 911 conecta con servicios de emergencia que pueden actuar de inmediato."
  }
];
