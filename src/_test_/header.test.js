// const { createElement } = require("react");
// const {
//   cleanup,
//   // fireEvent,
//   render,
//   screen,
// } = require("@testing-library/react");

// const { Header } = require("../components/header/header");
// afterEach(cleanup);

// describe("Header", () => {
//   it("can render a header", () => {
//     render(
//       createElement(Header, { siteName: "Resty-sure", headerColor: [0, 0, 0] })
//     );

//     // JSX equivalent
//     // const testComponent = render(<Header siteName="Test Site" headerColor={[0, 0, 0]} />);

//     expect(screen.queryByText("RESTy-Sure")).toBeTruthy();
//   });
// });

// describe("Footer", () => {
//   it("can render a footer", () => {
//     render(
//       createElement(Footer));
//     expect(screen.queryByText("Clicks: 1")).toBeTruthy();
//   });
// });
