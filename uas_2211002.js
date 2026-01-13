class GuitarSpec {
    constructor(builder, model, type, backWood, topWood) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getBuilder() {
        return this.builder;
    }

    getModel() {
        return this.model;
    }

    getType() {
        return this.type;
    }

    getBackWood() {
        return this.backWood;
    }

    getTopWood() {
        return this.topWood;
    }
}

class Guitar {
    constructor(serialNumber, price, spec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = spec; // objek GuitarSpec
    }

    getSerialNumber() {
        return this.serialNumber;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getSpec() {
        return this.spec;
    }
}

const spec = new GuitarSpec(
    "Fender",
    "Stratocaster",
    "Electric",
    "Alder",
    "Maple"
);

const guitar = new Guitar(
    "SN001",
    12000000,
    spec
);

console.log(guitar.getSerialNumber()); // SN001
console.log(guitar.getSpec().getBuilder()); // Fender
