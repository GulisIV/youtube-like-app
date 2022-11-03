import { MemoryRouter } from "react-router-dom";
import { render, queryByAttribute } from "@testing-library/react";

export const renderWithRouter = (component, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    ...render(component, { wrapper: MemoryRouter }),
  };
};

export const getById = queryByAttribute.bind(null, "id");
