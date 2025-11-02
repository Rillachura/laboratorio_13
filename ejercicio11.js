const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};
auto.detalles();