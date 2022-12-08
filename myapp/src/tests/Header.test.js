import { pages } from "../components/Header";

test("returns property from pages", () => {
  expect(pages[0]).toHaveProperty("name");
});
