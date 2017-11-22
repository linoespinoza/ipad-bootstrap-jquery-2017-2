const person = {
	name: 'Lino Espinoza',
	role: 'Profesor en Ipad'
}

var centroDeEstudios = {
	name: 'Ipad',
	place: 'San Isidro'
}

function logTeacher(teacher, centroDeEstudios) {
	console.log(`${teacher.name} - ${centroDeEstudios.place}`);
}

logTeacher(person, centroDeEstudios);