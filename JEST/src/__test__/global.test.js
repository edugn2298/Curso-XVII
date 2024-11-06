//Mi primera prueba unitaria
/*test("Probar cadenas de texto", () => {
  const text = "Hola mundo";
  expect(text).toMatch(/Hola/);
});

//Pruebas unitarias con funciones
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

test("Probar una función de callback", () => {
  expect(reverseString("Hola")).toBe("aloH");
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  //data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
*/

/*
  Crea un test unitario que verifique que el siguiente objeto:
  {
    nombre: "Jhon Doe",
    edad: 32,
    email: "hola@hola.com",
    cedula: "12345678"
    numero_telefono: "12345678"
  }

  Contenga las propiedades nombre, edad, email, cedula y numero_telefono
  verifique que nombre no contenga números o caracteres especiales
  verifique que edad sea igual o mayor a 18 años
  verifique que email sea un correo válido
  verifique que cedula y numero_telefono sean números
  verifique que cedula y numero_telefono tengan una longitud minima de de 8 caracteres
  verifique que cedula y numero_telefono tengan una longitud máxima de de 15 caracteres
*/

test("Probar un objeto de propiedades", () => {
  const data = {
    nombre: "Jhon Doe",
    edad: 32,
    email: "hola@hola.com",
    cedula: "123456789",
    numero_telefono: "123456789",
  };

  expect(data).toHaveProperty("nombre");
  expect(data).toHaveProperty("edad");
  expect(data).toHaveProperty("email");
  expect(data).toHaveProperty("cedula");
  expect(data).toHaveProperty("numero_telefono");

  expect(data.nombre).toMatch(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/);
  expect(data.edad).toBeGreaterThanOrEqual(18);
  expect(data.email).toMatch(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  expect(data.cedula).toMatch(/^[0-9]{8,15}$/);
  expect(data.numero_telefono).toMatch(/^[0-9]{8,15}$/);

  expect(data.cedula.length).toBeGreaterThanOrEqual(8);
  expect(data.numero_telefono.length).toBeGreaterThanOrEqual(8);

  expect(data.cedula.length).toBeLessThanOrEqual(15);
  expect(data.numero_telefono.length).toBeLessThanOrEqual(15);
});
