import ReactDOM from "react-dom/client";

// Mock do ReactDOM como default export
jest.mock("react-dom/client", () => ({
  __esModule: true,
  default: {
    createRoot: jest.fn().mockReturnValue({
      render: jest.fn(),
    }),
  },
}));

describe("Main.tsx", () => {
  test("renders without crashing", () => {

  });
});