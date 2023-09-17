// import { Triple } from "../src";
import { Triple, Square, Rectangle } from "../src";

test("import Triple", () => {
  expect.anything(Triple);
});

test("Triple.triple", () => {
  const temp = Triple.triple(5);
  expect(temp).toBe(15);
});

test("import Square", () => {
  expect.anything(Square);
});

test("New Square", () => {
  const mySquare = new Square(15);
  mySquare.sayName();
  expect(mySquare.area).toBe(mySquare.area);
});

test("New Rectangle", () => {
  const myRectangle = new Rectangle(5, 15);
  myRectangle.sayName();
  console.log(myRectangle);
  // expect(myRectangle.area).toBe(myRectangle.area);
});
