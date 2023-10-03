import Adhesion from './assets/adhesión.png';
import Alquiler from './assets/alquiler.png';
import Informatico from './assets/informático.png';
import Servicios from './assets/servicios.png';


export const imgs = [
	Adhesion,
	Alquiler,
	Informatico,
	Servicios
];

export const categories = {
	adhesion: 'Adhesión',
	alquiler: 'Alquiler',
	informatico: 'Informatico',
	servicios: 'Servicios',

};

const {
	adhesion,
	alquiler,
	informatico,
	servicios,

} = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Cuál es una característica clave de los contratos de adhesión?',
		category: adhesion,
		correct_answer: 'Los términos y condiciones son establecidos unilateralmente por una de las partes.',
		incorrect_answers: [
			'Ambas partes negocian libremente los términos del contrato.',
			'Los contratos de adhesión son siempre verbales, no escritos.',
			'Los contratos de adhesión son exclusivos de las transacciones comerciales.'
		]
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: 'Seleccione el objeto de un contrato tipo Alquiler   ',
		category: alquiler,
		correct_answer:
			'Departamento',
		incorrect_answers: [
			'Derecho penal',
			'cirugía laparoscópica ',
			'Pablo Neruda',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿Qué es un contrato informático?',
		category: informatico,
		correct_answer: 'Un acuerdo legal que regula las transacciones relacionadas con software, hardware o servicios informáticos.',
		incorrect_answers: [
			'Un contrato de compraventa de bienes raíces.',
			'Un contrato que solo se aplica a la compra de computadoras.',
			'Un acuerdo verbal sin implicaciones legales.'
		]
	},
	{
		id: 4,
		difficulty: 'Fácil',
		question: '¿Qué es una "cláusula de no competencia" en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Una disposición que prohíbe al proveedor de servicios competir directamente con el cliente en el mismo mercado o industria durante un período específico.',
		incorrect_answers: [
			'Una cláusula que permite al proveedor de servicios competir con el cliente en cualquier momento.',
			'Una disposición que solo se aplica a servicios de corta duración.',
			'Una disposición que no tiene ningún propósito en un contrato de servicios.'
		]
	},
	{
		id: 5,
		difficulty: 'Fácil',
		question: '¿Qué es un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Un acuerdo legal que permite a una persona o entidad utilizar una propiedad a cambio de un pago periódico.',
		incorrect_answers: [
			'Un contrato que solo se aplica a la compra de bienes raíces.',
			'Un acuerdo verbal sin implicaciones legales.',
			'Un contrato para vender una propiedad.'
		]
	},
	{
		id: 6,
		difficulty: 'Fácil',
		question: '¿Qué es un contrato de servicios?',
		category: servicios,
		correct_answer: 'Un acuerdo legal que estipula la prestación de servicios a cambio de una compensación o pago.',
		incorrect_answers: [
			'Un contrato para la compra de bienes raíces.',
			'Un acuerdo verbal sin implicaciones legales.',
			'Un contrato para la venta de productos.'
		]
	},
	{
		id: 7,
		difficulty: 'Moderado',
		question: '¿Cuál es la importancia de incluir cláusulas de propiedad intelectual en un contrato informático?',
		category: informatico,
		correct_answer: 'Proteger los derechos de autor y la propiedad intelectual asociada al software o contenido digital.',
		incorrect_answers: [
			'Garantizar que el software se pueda vender a cualquier precio.',
			'Establecer restricciones para el uso del hardware.',
			'No es necesario incluir estas cláusulas en un contrato informático.'
		]
	},
	{
		id: 8,
		difficulty: 'Moderado',
		question: '¿Qué elementos suelen incluirse en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Descripción de los servicios, duración del contrato, términos de pago y responsabilidades de las partes.',
		incorrect_answers: [
			'Lista de compras personales.',
			'Plan de marketing de la empresa.',
			'No es necesario incluir ningún elemento específico.'
		]
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Qué es una "licencia de software" en el contexto de contratos informáticos?',
		category: informatico,
		correct_answer: 'Un permiso otorgado por el titular de los derechos de autor para usar el software bajo ciertas condiciones.',
		incorrect_answers: [
			'Una cláusula que prohíbe el uso de cualquier software.',
			'Un contrato que solo se aplica a la compra de hardware.',
			'Un documento legal que no está relacionado con software.'
		]
	},
	{
		id: 10,
		difficulty: 'Difícil',
		question: '¿Cuál es la importancia de las cláusulas de indemnización en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Proteger a las partes contra reclamaciones legales y responsabilidades por incumplimientos o daños.',
		incorrect_answers: [
			'Determinar el precio de los servicios.',
			'Establecer reglas de confidencialidad.',
			'No tienen ninguna importancia en un contrato de servicios.'
		]
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué es un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Un acuerdo legal que permite a una persona o entidad utilizar una propiedad a cambio de un pago periódico.',
		incorrect_answers: [
			'Un contrato que solo se aplica a la compra de bienes raíces.',
			'Un acuerdo verbal sin implicaciones legales.',
			'Un contrato para vender una propiedad.'
		]
	},
	{
		id: 12,
		difficulty: 'Fácil',
		question: '¿Qué derechos tiene el cliente en un contrato de servicios?',
		category: servicios,
		correct_answer: 'El derecho a recibir los servicios según lo acordado y a que se le respeten sus derechos legales.',
		incorrect_answers: [
			'El derecho a vender los servicios a terceros.',
			'El derecho a cancelar el contrato en cualquier momento sin motivo.',
			'No tiene ningún derecho en un contrato de servicios.'
		]
	},
	{
		id: 13,
		difficulty: 'Fácil',
		question: '¿Qué derechos tiene el cliente en un contrato de servicios?',
		category: servicios,
		correct_answer: 'El derecho a recibir los servicios según lo acordado y a que se le respeten sus derechos legales.',
		incorrect_answers: [
			'El derecho a vender los servicios a terceros.',
			'El derecho a cancelar el contrato en cualquier momento sin motivo.',
			'No tiene ningún derecho en un contrato de servicios.'
		]
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: '¿Qué diferencia hay entre un contrato de alquiler a corto plazo y uno a largo plazo?',
		category: alquiler,
		correct_answer: 'La duración del contrato, siendo el corto plazo generalmente menos de un año y el largo plazo más de un año.',
		incorrect_answers: [
			'El tipo de propiedad involucrada.',
			'El número de cláusulas en el contrato.',
			'No hay diferencia entre ellos.'
		]
	},
	{
		id: 15,
		difficulty: 'Moderado',
		question: '¿Qué es una "cláusula de terminación" en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Una disposición que establece las condiciones bajo las cuales cualquiera de las partes puede dar por terminado el contrato.',
		incorrect_answers: [
			'Una cláusula que prohíbe la terminación del contrato en cualquier momento.',
			'Una disposición que solo se aplica a servicios a largo plazo.',
			'Una disposición sin importancia en un contrato de servicios.'
		]
	},
	{
		id: 16,
		difficulty: 'Moderado',
		question: '¿Qué se entiende por "cláusula abusiva" en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Una disposición que causa un desequilibrio significativo entre los derechos y obligaciones de las partes en detrimento del consumidor.',
		incorrect_answers: [
			'Una cláusula que beneficia al consumidor en todos los casos.',
			'Una disposición que solo se aplica a contratos escritos a mano.',
			'Una cláusula que siempre es legal y justa.'
		]
	},
	{
		id: 17,
		difficulty: 'Fácil',
		question: '¿Qué es un "contrato de mantenimiento" en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Un acuerdo que establece las obligaciones del proveedor de servicios para mantener y reparar equipos o sistemas durante un período específico.',
		incorrect_answers: [
			'Un contrato que solo se aplica a servicios de corta duración.',
			'Un acuerdo que solo se aplica a servicios de consultoría.',
			'Un documento sin importancia en un contrato de servicios.'
		]
	},
	{
		id: 18,
		difficulty: 'Fácil',
		question: '¿Qué derechos tiene el arrendatario en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'El derecho a ocupar la propiedad de acuerdo con los términos del contrato y a que se le respeten sus derechos legales.',
		incorrect_answers: [
			'El derecho a vender la propiedad.',
			'El derecho a realizar modificaciones estructurales en la propiedad.',
			'No tiene ningún derecho en un contrato de alquiler.'
		]
	},
	{
		id: 19,
		difficulty: 'Fácil',
		question: '¿Qué es un "acuerdo de nivel de servicio (SLA)" en un contrato de servicios?',
		category: servicios,
		correct_answer: 'Un acuerdo que establece los compromisos y expectativas de calidad entre el proveedor de servicios y el cliente.',
		incorrect_answers: [
			'Un acuerdo exclusivo para la compra de equipos.',
			'Un contrato que prohíbe la prestación de servicios.',
			'Un documento sin importancia en un contrato de servicios.'
		]
	},
	{
		id: 20,
		difficulty: 'Moderado',
		question: '¿Cuál es la principal responsabilidad del proveedor de software en un contrato informático?',
		category: informatico,
		correct_answer: 'Garantizar que el software funcione correctamente y cumpla con las especificaciones acordadas.',
		incorrect_answers: [
			'Proporcionar el hardware necesario para ejecutar el software.',
			'Definir las políticas de seguridad de la empresa.',
			'No tiene ninguna responsabilidad en un contrato informático.'
		]
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Qué legislación protege a los consumidores contra cláusulas abusivas en los contratos de adhesión en la Unión Europea?',
		category: adhesion,
		correct_answer: 'Directiva sobre Cláusulas Abusivas en los Contratos celebrados con Consumidores.',
		incorrect_answers: [
			'Ley de Contratos de Adhesión de la Unión Europea.',
			'Reglamento sobre Contratos de Consumo.',
			'Directiva sobre Contratos de Adhesión en la UE.'
		]
	},
	// -------------------
	{
		id: 22,
		difficulty: 'Difícil',
		question: '¿Cuál es el propósito principal de un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Ofrecer una transacción más eficiente y conveniente para ambas partes.',
		incorrect_answers: [
			'Maximizar los beneficios para una sola parte.',
			'Evitar cualquier forma de contrato.',
			'No hay un propósito definido en un contrato de adhesión.'
		]
	},
	{
		id: 23,
		difficulty: 'Moderado',
		question: '¿Qué debería hacer un consumidor si encuentra una cláusula abusiva en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Informar a las autoridades de protección al consumidor y buscar asesoramiento legal.',
		incorrect_answers: [
			'Aceptar los términos sin cuestionar.',
			'Ignorar la cláusula y continuar con la transacción.',
			'Cancelar el contrato por completo sin notificar a nadie.'
		]
	},
	{
		id: 24,
		difficulty: 'Moderado',
		question: '¿Cuál es una característica común de los contratos de adhesión en las transacciones de consumo?',
		category: adhesion,
		correct_answer: 'Suelen ser redactados por la parte más poderosa de la transacción y ofrecen poco espacio para la negociación.',
		incorrect_answers: [
			'Siempre son redactados por abogados especializados en contratos.',
			'Los consumidores pueden modificar libremente los términos del contrato.',
			'No tienen ninguna cláusula de rescisión.'
		]
	},
	{
		id: 25,
		difficulty: 'Fácil',
		question: '¿Cuál es el propósito principal de una cláusula de rescisión en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Permitir a una de las partes terminar el contrato en ciertas condiciones o plazos específicos.',
		incorrect_answers: [
			'Obligar a ambas partes a cumplir el contrato sin excepciones.',
			'Establecer sanciones monetarias por incumplimiento del contrato.',
			'Ofrecer beneficios adicionales a ambas partes.'
		]
	},
	{
		id: 26,
		id: 9,
		difficulty: 'Moderado',
		question: '¿Qué es una cláusula de arbitraje en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Una disposición que establece que cualquier disputa se resolverá a través de un proceso de arbitraje en lugar de un juicio en tribunales.',
		incorrect_answers: [
			'Una cláusula que prohíbe a ambas partes discutir los términos del contrato.',
			'Una disposición que permite a cualquiera de las partes cambiar los términos del contrato en cualquier momento.',
			'Una cláusula que obliga a ambas partes a llegar a un acuerdo antes de rescindir el contrato.'
		]
	},
	{
		id: 27,
		id: 10,
		difficulty: 'Difícil',
		question: '¿Cuál es la diferencia clave entre un contrato de adhesión y un contrato de negociación bilateral?',
		category: adhesion,
		correct_answer: 'En un contrato de adhesión, una parte establece los términos y la otra acepta o rechaza sin negociación significativa, mientras que en un contrato de negociación bilateral, ambas partes negocian libremente los términos.',
		incorrect_answers: [
			'Ambos tipos de contratos son idénticos en todos los aspectos.',
			'En un contrato de adhesión, ambas partes negocian los términos en igualdad de condiciones.',
			'Un contrato de adhesión solo se aplica a transacciones comerciales, mientras que un contrato de negociación bilateral se utiliza en todas las demás situaciones.'
		]
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: '¿Cuál es el papel de la "letra pequeña" en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Contiene detalles importantes y cláusulas específicas que pueden afectar los derechos y obligaciones de las partes.',
		incorrect_answers: [
			'Solo está presente para hacer que el contrato parezca más largo.',
			'No tiene ningún propósito en un contrato de adhesión.',
			'Siempre beneficia al consumidor sin excepción.'
		]
	},
	{
		id: 29,
		difficulty: 'Moderado',
		question: '¿Qué debe hacer un consumidor antes de firmar un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Leer cuidadosamente todos los términos y condiciones y buscar asesoramiento legal si es necesario.',
		incorrect_answers: [
			'Firmar el contrato de inmediato para garantizar la transacción.',
			'Ignorar los términos y condiciones y confiar en la otra parte.',
			'Pedir a la otra parte que cambie los términos del contrato según sus preferencias.'
		]
	},
	{
		id: 30,
		difficulty: 'Difícil',
		question: '¿Cuál es el propósito de una cláusula de elección de foro en un contrato de adhesión?',
		category: adhesion,
		correct_answer: 'Determinar en qué jurisdicción se resolverán las disputas relacionadas con el contrato.',
		incorrect_answers: [
			'Exigir que ambas partes lleguen a un acuerdo antes de resolver cualquier disputa.',
			'Permitir que una de las partes cambie los términos del contrato en cualquier momento.',
			'Establecer una fecha de vencimiento para el contrato.'
		]
	},
	{
		id: 31,
		difficulty: 'Fácil',
		question: '¿Qué es una "cláusula de rescisión anticipada" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Una disposición que permite a una de las partes terminar el contrato antes de su vencimiento en ciertas condiciones.',
		incorrect_answers: [
			'Una cláusula que prohíbe la rescisión del contrato en cualquier momento.',
			'Una cláusula que solo se aplica a alquileres a largo plazo.',
			'Una disposición sin importancia en un contrato de alquiler.'
		]
	},
	{
		id: 32,
		difficulty: 'Difícil',
		question: '¿Cuál es la importancia de un "inventario de entrada" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Documentar el estado de la propiedad al inicio del contrato y evitar disputas sobre daños en el futuro.',
		incorrect_answers: [
			'Determinar el precio del alquiler.',
			'Establecer las reglas de convivencia entre vecinos.',
			'No tiene ninguna importancia en un contrato de alquiler.'
		]
	},
	{
		id: 33,
		difficulty: 'Moderado',
		question: '¿Qué debería hacer un arrendatario antes de firmar un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Examinar cuidadosamente el contrato, realizar una inspección de la propiedad y hacer preguntas al arrendador si es necesario.',
		incorrect_answers: [
			'Firmar el contrato de inmediato para asegurar la propiedad.',
			'Ignorar los términos del contrato y ocupar la propiedad de inmediato.',
			'No es necesario realizar ninguna acción antes de firmar.'
		]
	},
	{
		id: 34,
		difficulty: 'Fácil',
		question: '¿Qué es un "arrendamiento renovable" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Un contrato que se renueva automáticamente al final de cada período de alquiler, a menos que una de las partes lo cancele.',
		incorrect_answers: [
			'Un contrato que prohíbe cualquier forma de renovación.',
			'Un acuerdo de alquiler a corto plazo.',
			'Una disposición que solo se aplica a alquileres a largo plazo.']
	},
	{
		id: 35,
		difficulty: 'Moderado',
		question: '¿Cuál es el propósito de una "cláusula de aumento de alquiler" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Establecer las condiciones bajo las cuales el arrendador puede aumentar el monto del alquiler durante el contrato.',
		incorrect_answers: [
			'Determinar la duración total del contrato.',
			'Prohibir cualquier forma de aumento de alquiler.',
			'No tiene ningún propósito en un contrato de alquiler.'
		]
	},
	{
		id: 36,
		difficulty: 'Fácil',
		question: '¿Cuál es el término comúnmente utilizado para referirse a un "inquilino" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Arrendatario.',
		incorrect_answers: [
			'Propietario.',
			'Comprador.',
			'Arrendador.'
		]
	},
	{
		id: 37,
		difficulty: 'Difícil',
		question: '¿Qué es un "avalista" en un contrato de alquiler?',
		category: alquiler,
		correct_answer: 'Una persona que asume la responsabilidad de pagar el alquiler si el arrendatario principal no lo hace.',
		incorrect_answers: [
			'El arrendador de la propiedad.',
			'Una persona que realiza reparaciones en la propiedad.',
			'Una cláusula de rescisión del contrato.'
		]
	},
	{
		id: 38,
		difficulty: 'Fácil',
		question: '¿Qué es la "mantención de software" en un contrato informático?',
		category: informatico,
		correct_answer: 'El servicio de actualización y corrección de errores en el software durante un período determinado.',
		incorrect_answers: [
			'El proceso de fabricación de software desde cero.',
			'La eliminación de software obsoleto.',
			'Un término obsoleto sin relevancia en los contratos modernos.'
		]
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿Cuál es el propósito de una "cláusula de confidencialidad" en un contrato informático?',
		category: informatico,
		correct_answer: 'Proteger la información confidencial que se comparte durante la ejecución del contrato.',
		incorrect_answers: [
			'Obligar a las partes a revelar toda la información.',
			'Establecer sanciones monetarias por incumplimiento del contrato.',
			'No tiene ningún propósito en un contrato informático.'
		]
	},
	{
		id: 40,
		difficulty: 'Moderado',
		question: '¿Cuál es el objetivo de una "cláusula de resolución de disputas" en un contrato informático?',
		category: informatico,
		correct_answer: 'Establecer un procedimiento para resolver disputas entre las partes sin recurrir a litigios costosos.',
		incorrect_answers: [
			'Garantizar que ambas partes tengan siempre razón en cualquier disputa.',
			'Prohibir cualquier forma de resolución de disputas.',
			'No tiene ningún objetivo específico.'
		]
	},
	{
		id: 41,
		difficulty: 'Fácil',
		question: '¿Qué papel desempeña un "acuerdo de nivel de servicio (SLA)" en un contrato informático?',
		category: informatico,
		correct_answer: 'Establecer estándares y expectativas para el rendimiento y la disponibilidad del servicio o software.',
		incorrect_answers: [
			'Definir la propiedad intelectual del software.',
			'Determinar el costo total del contrato.',
			'No tiene ningún papel en un contrato informático.'
		]
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question: '¿Qué es un "acuerdo de licencia de usuario final (EULA)" en un contrato informático?',
		category: informatico,
		correct_answer: 'Un contrato que establece los términos y condiciones de uso del software por parte del usuario final.',
		incorrect_answers: [
			'Un acuerdo para la compra de hardware.',
			'Un acuerdo que solo se aplica a desarrolladores de software.',
			'Un documento sin importancia en el mundo de los contratos informáticos.'
		]
	},
	{
		id: 43,
		difficulty: 'Moderado',
		question: '¿Cuál es el propósito de una "cláusula de garantía" en un contrato informático?',
		category: informatico,
		correct_answer: 'Garantizar que el software cumpla con ciertos estándares de rendimiento y calidad.',
		incorrect_answers: [
			'Establecer un período de gracia para el pago del contrato.',
			'Exigir que ambas partes lleguen a un acuerdo antes de resolver cualquier disputa.',
			'No tiene ningún propósito específico en un contrato informático.'
		]
	},
	{
		id: 44,
		difficulty: 'Fácil',
		question: '¿Qué se entiende por "soporte técnico" en un contrato informático?',
		category: informatico,
		correct_answer: 'El servicio proporcionado por el proveedor para ayudar al usuario con problemas relacionados con el software o hardware.',
		incorrect_answers: [
			'La entrega de hardware de reemplazo en caso de falla.',
			'Un contrato exclusivo para el mantenimiento del hardware.',
			'No tiene ninguna importancia en un contrato informático.'
		]
	},
	{
		id: 45,
		difficulty: 'Moderado',
		question: '¿Cuál es el propósito de una "cláusula de no competencia" en un contrato informático?',
		category: informatico,
		correct_answer: 'Prohibir que una de las partes compita directamente con la otra en el mismo mercado o industria durante un período específico.',
		incorrect_answers: [
			'Establecer sanciones monetarias por incumplimiento del contrato.',
			'Garantizar que ambas partes tengan acceso a la propiedad intelectual del otro.',
			'No tiene ningún propósito en un contrato informático.'
		]
	},
	

];
