class Usuario {
    constructor (nombre, apellido, libros= {}, mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName = () => console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`);
    addMascota = (mascota) => {this.mascotas.push(mascota)};
    countMascotas = () => console.log(this.mascotas.length);
    addBook(nombre, autor){
        this.libros.push({
            nombre: nombre,
            autor: autor,
        })
    }
    getBookNames = () => this.libros.map[libros.nombre];
}

const usuario = new Usuario("Pepe", "Ramirez", {nombre: "El señor de los anillos", autor: "J.R.R. Tolkien", nombre: "El Socio", autor: "John Grisham"}, ["pajaro", "perro"]);

console.log(usuario);