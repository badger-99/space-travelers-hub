import { MemoryRouter } from "react-router";
import Navigation from "./Navigation";
import { render } from "@testing-library/react";

test('snapshot of nav bar', () => {
  const nav = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )

  expect(nav).toMatchSnapshot();
})