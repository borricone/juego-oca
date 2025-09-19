(function(global){
  const LEVEL_QUESTIONS = {
    1: [
      {
        id: 'L1-01',
        level: 1,
        category: 'Geografía',
        prompt: '¿Cuál es la capital de España?',
        options: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
        answer: 0,
        explain: 'Madrid es la capital y ciudad más poblada del país.',
        feedback: {
          correct: '¡Exacto! Dominas las capitales.',
          incorrect: 'La capital de España es Madrid.'
        }
      },
      {
        id: 'L1-02',
        level: 1,
        category: 'Matemáticas',
        prompt: '¿Cuál es el resultado de 7 + 5?',
        options: ['12', '10', '11', '13'],
        answer: 0,
        explain: 'Sumar 7 y 5 da como resultado 12.'
      },
      {
        id: 'L1-03',
        level: 1,
        category: 'Ciencias',
        prompt: '¿Cómo se llama el proceso por el cual el agua pasa de líquida a vapor?',
        options: ['Condensación', 'Evaporación', 'Precipitación', 'Fusión'],
        answer: 1,
        explain: 'La evaporación ocurre cuando el agua se transforma en vapor por el calor.'
      },
      {
        id: 'L1-04',
        level: 1,
        category: 'Lengua',
        prompt: '¿Cuál de estas palabras es sinónimo de "feliz"?',
        options: ['Triste', 'Contento', 'Serio', 'Cansado'],
        answer: 1,
        explain: 'Contento es un sinónimo habitual de feliz.'
      },
      {
        id: 'L1-05',
        level: 1,
        category: 'Cultura general',
        prompt: '¿Cuál es el primer día laborable de la semana en España?',
        options: ['Domingo', 'Lunes', 'Sábado', 'Viernes'],
        answer: 1,
        explain: 'El calendario laboral habitual comienza en lunes.'
      },
      {
        id: 'L1-06',
        level: 1,
        category: 'Geometría',
        prompt: '¿Cuántos lados tiene un pentágono?',
        options: ['Cuatro', 'Cinco', 'Seis', 'Ocho'],
        answer: 1,
        explain: 'El prefijo "penta" significa cinco.'
      },
      {
        id: 'L1-07',
        level: 1,
        category: 'Ciencias',
        prompt: '¿Qué órgano del cuerpo humano se encarga de bombear la sangre?',
        options: ['Pulmones', 'Corazón', 'Estómago', 'Hígado'],
        answer: 1,
        explain: 'El corazón impulsa la sangre por todo el organismo.'
      },
      {
        id: 'L1-08',
        level: 1,
        category: 'Naturaleza',
        prompt: '¿Cuál de estos animales produce leche para alimentar a sus crías?',
        options: ['Serpiente', 'Gallo', 'Vaca', 'Rana'],
        answer: 2,
        explain: 'Las vacas son mamíferos y producen leche.'
      },
      {
        id: 'L1-09',
        level: 1,
        category: 'Lengua',
        prompt: '¿Cuál de estas palabras es un sustantivo?',
        options: ['Mesa', 'Rápido', 'Azul', 'Correr'],
        answer: 0,
        explain: '"Mesa" nombra un objeto, por lo que es un sustantivo.'
      },
      {
        id: 'L1-10',
        level: 1,
        category: 'Astronomía',
        prompt: '¿Qué planeta es conocido como el "planeta rojo"?',
        options: ['Venus', 'Júpiter', 'Marte', 'Mercurio'],
        answer: 2,
        explain: 'Marte recibe ese nombre por el color rojizo de su superficie.'
      },
      {
        id: 'L1-11',
        level: 1,
        category: 'Ciencias',
        prompt: '¿Qué instrumento se utiliza para medir la temperatura?',
        options: ['Regla', 'Termómetro', 'Balanza', 'Cronómetro'],
        answer: 1,
        explain: 'El termómetro mide la temperatura en diversas escalas.'
      },
      {
        id: 'L1-12',
        level: 1,
        category: 'Arte',
        prompt: '¿Cuál de los siguientes colores es un color primario?',
        options: ['Verde', 'Naranja', 'Azul', 'Morado'],
        answer: 2,
        explain: 'Los colores primarios en luz pigmento son rojo, azul y amarillo.'
      }
    ],
    2: [
      {
        id: 'L2-01',
        level: 2,
        category: 'Matemáticas',
        prompt: '¿Cuál es la raíz cuadrada de 81?',
        options: ['7', '8', '9', '6'],
        answer: 2,
        explain: '9 multiplicado por 9 es 81.'
      },
      {
        id: 'L2-02',
        level: 2,
        category: 'Geografía',
        prompt: '¿En qué continente se encuentra el río Nilo?',
        options: ['Asia', 'África', 'Europa', 'Oceanía'],
        answer: 1,
        explain: 'El Nilo recorre varios países del noreste africano.'
      },
      {
        id: 'L2-03',
        level: 2,
        category: 'Lengua',
        prompt: '¿Qué tipo de palabra es "rápidamente"?',
        options: ['Sustantivo', 'Adjetivo', 'Verbo', 'Adverbio'],
        answer: 3,
        explain: 'Los adverbios modifican verbos, adjetivos u otros adverbios.'
      },
      {
        id: 'L2-04',
        level: 2,
        category: 'Literatura',
        prompt: '¿Quién escribió "Don Quijote de la Mancha"?',
        options: ['Miguel de Cervantes', 'Lope de Vega', 'Benito Pérez Galdós', 'Federico García Lorca'],
        answer: 0,
        explain: 'Miguel de Cervantes publicó la obra en dos partes en 1605 y 1615.'
      },
      {
        id: 'L2-05',
        level: 2,
        category: 'Ciencias',
        prompt: '¿Cuál es la fórmula química del agua?',
        options: ['CO₂', 'H₂O', 'O₂', 'NaCl'],
        answer: 1,
        explain: 'El agua está formada por dos átomos de hidrógeno y uno de oxígeno.'
      },
      {
        id: 'L2-06',
        level: 2,
        category: 'Biología',
        prompt: '¿Qué parte de las plantas realiza principalmente la fotosíntesis?',
        options: ['Raíces', 'Flores', 'Hojas', 'Tallo'],
        answer: 2,
        explain: 'Las hojas contienen cloroplastos que captan la luz para la fotosíntesis.'
      },
      {
        id: 'L2-07',
        level: 2,
        category: 'Historia',
        prompt: '¿En qué año comenzó la Segunda Guerra Mundial?',
        options: ['1914', '1939', '1945', '1929'],
        answer: 1,
        explain: 'La guerra comenzó en 1939 con la invasión de Polonia.'
      },
      {
        id: 'L2-08',
        level: 2,
        category: 'Matemáticas',
        prompt: '¿Cuál es el resultado de 3/4 + 1/4?',
        options: ['1', '1/2', '3/4', '2'],
        answer: 0,
        explain: 'La suma de fracciones con igual denominador suma los numeradores: (3+1)/4 = 1.'
      },
      {
        id: 'L2-09',
        level: 2,
        category: 'Geología',
        prompt: '¿Cómo se llama la capa externa de la Tierra?',
        options: ['Manto', 'Núcleo externo', 'Núcleo interno', 'Corteza'],
        answer: 3,
        explain: 'La corteza terrestre es la capa sólida más externa del planeta.'
      },
      {
        id: 'L2-10',
        level: 2,
        category: 'Lengua',
        prompt: '¿Qué significa el prefijo "bio-"?',
        options: ['Calor', 'Vida', 'Luz', 'Agua'],
        answer: 1,
        explain: 'El prefijo griego "bio" alude a la vida.'
      },
      {
        id: 'L2-11',
        level: 2,
        category: 'Historia',
        prompt: '¿Cuál es el valor del número romano XL?',
        options: ['60', '40', '35', '45'],
        answer: 1,
        explain: 'XL equivale a 50 menos 10, es decir, 40.'
      },
      {
        id: 'L2-12',
        level: 2,
        category: 'Literatura',
        prompt: '¿Qué figura literaria consiste en repetir sonidos iniciales?',
        options: ['Metáfora', 'Aliteración', 'Hipérbole', 'Personificación'],
        answer: 1,
        explain: 'La aliteración repite sonidos iguales o parecidos al inicio de palabras.'
      }
    ],
    3: [
      {
        id: 'L3-01',
        level: 3,
        category: 'Geografía',
        prompt: '¿Cuál es la capital de Canadá?',
        options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
        answer: 1,
        explain: 'Ottawa es la capital administrativa de Canadá.'
      },
      {
        id: 'L3-02',
        level: 3,
        category: 'Física',
        prompt: '¿Qué científico propuso la teoría de la relatividad general?',
        options: ['Isaac Newton', 'Albert Einstein', 'Marie Curie', 'Niels Bohr'],
        answer: 1,
        explain: 'Albert Einstein presentó la relatividad general en 1915.'
      },
      {
        id: 'L3-03',
        level: 3,
        category: 'Matemáticas',
        prompt: '¿Cuál es la derivada de x³?',
        options: ['3x²', 'x²', 'x³', '2x'],
        answer: 0,
        explain: 'Al derivar x³ se obtiene 3x² siguiendo la regla de la potencia.'
      },
      {
        id: 'L3-04',
        level: 3,
        category: 'Arte',
        prompt: '¿Qué movimiento artístico se asocia con "Les Demoiselles d\'Avignon" de Picasso?',
        options: ['Impresionismo', 'Cubismo', 'Surrealismo', 'Dadaísmo'],
        answer: 1,
        explain: 'La obra marcó el inicio del cubismo.'
      },
      {
        id: 'L3-05',
        level: 3,
        category: 'Biología',
        prompt: '¿Cuál es la función principal de los ribosomas?',
        options: ['Sintetizar proteínas', 'Almacenar energía', 'Transportar oxígeno', 'Dirigir la división celular'],
        answer: 0,
        explain: 'Los ribosomas ensamblan aminoácidos para formar proteínas.'
      },
      {
        id: 'L3-06',
        level: 3,
        category: 'Historia',
        prompt: '¿Qué guerra finalizó con el Tratado de Versalles de 1919?',
        options: ['Guerra de Sucesión Española', 'Guerra Fría', 'Primera Guerra Mundial', 'Guerra de los Cien Años'],
        answer: 2,
        explain: 'El Tratado de Versalles puso fin oficialmente a la Primera Guerra Mundial.'
      },
      {
        id: 'L3-07',
        level: 3,
        category: 'Química',
        prompt: '¿Qué elemento químico tiene como símbolo "Au"?',
        options: ['Plata', 'Oro', 'Cobre', 'Azufre'],
        answer: 1,
        explain: 'Au proviene del latín aurum, que significa oro.'
      },
      {
        id: 'L3-08',
        level: 3,
        category: 'Geografía',
        prompt: '¿En qué continente se encuentra la cordillera del Himalaya?',
        options: ['América', 'Asia', 'África', 'Europa'],
        answer: 1,
        explain: 'El Himalaya se extiende principalmente por Asia, entre India, Nepal y China.'
      },
      {
        id: 'L3-09',
        level: 3,
        category: 'Matemáticas',
        prompt: '¿Cuál es el número primo más pequeño mayor que 50?',
        options: ['51', '52', '53', '57'],
        answer: 2,
        explain: '53 es el siguiente número primo después de 47.'
      },
      {
        id: 'L3-10',
        level: 3,
        category: 'Filosofía',
        prompt: '¿Qué filósofo griego fue maestro de Alejandro Magno?',
        options: ['Sócrates', 'Platón', 'Aristóteles', 'Epicuro'],
        answer: 2,
        explain: 'Aristóteles fue tutor de Alejandro en su juventud.'
      },
      {
        id: 'L3-11',
        level: 3,
        category: 'Energía',
        prompt: '¿Qué tipo de energía aprovecha una central mareomotriz?',
        options: ['Energía solar', 'Energía eólica', 'Energía de las mareas', 'Energía geotérmica'],
        answer: 2,
        explain: 'Estas centrales aprovechan el movimiento periódico de las mareas.'
      },
      {
        id: 'L3-12',
        level: 3,
        category: 'Literatura',
        prompt: '¿Quién es el autor de "La casa de Bernarda Alba"?',
        options: ['Antonio Machado', 'Federico García Lorca', 'Pío Baroja', 'Rafael Alberti'],
        answer: 1,
        explain: 'Federico García Lorca escribió esta obra teatral en 1936.'
      }
    ]
  };

  const ALL_QUESTIONS = Object.values(LEVEL_QUESTIONS).flat();

  function levelFromPosition(pos){
    const idx = Math.max(1, Number(pos) || 1);
    if(idx <= 16) return 1;
    if(idx <= 33) return 2;
    return 3;
  }

  function pickQuestion(level, usedIds){
    const pool = LEVEL_QUESTIONS[level] || [];
    if(!pool.length) return null;
    const usedSet = new Set(Array.isArray(usedIds) ? usedIds : []);
    let available = pool.filter(q => !usedSet.has(q.id));
    if(!available.length){
      if(Array.isArray(usedIds)) usedIds.length = 0;
      available = pool.slice();
    }
    const index = Math.floor(Math.random() * available.length);
    return available[index] || null;
  }

  function getQuestionForPosition(pos, usedByLevel){
    const level = levelFromPosition(pos);
    const store = usedByLevel && usedByLevel[level];
    const question = pickQuestion(level, store);
    return { level, question };
  }

  global.QuestionBank = {
    levelFromPosition,
    getQuestionForPosition,
    getQuestionByLevel(level, usedIds){
      return pickQuestion(level, usedIds);
    },
    getAll(){
      return ALL_QUESTIONS.slice();
    }
  };
})(window);
