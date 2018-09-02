const add = (a, b) => a + b;
const generateGreeting = (name = "Anonimo") => `Hello ${name}!`;


test("should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test("hola nombre", () => {
  const saludo = generateGreeting("Toni");
  expect(saludo).toBe("Hello Toni!");
});

test("hola nombre para no nombre", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonimo!");
});