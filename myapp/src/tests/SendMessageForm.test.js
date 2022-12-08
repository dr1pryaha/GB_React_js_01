import { render, screen } from "@testing-library/react";
import SendMessageForm from "../components/SendMessageForm";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store/index";

const onChange = jest.fn();

test("onChange is works", () => {
  render(
    <Provider store={store}>
      <SendMessageForm onChange={onChange} />
    </Provider>
  );
  // console.log(<SendMessageForm onChange={onChange} />);
  // const textboxes = screen.getAllByRole("textbox");
  // const myInput = textboxes[0];
  // console.log(myInput);
  const inputNode = screen.getByLabelText("Текст сообщения");
  console.log(inputNode);

  userEvent.type(screen.getByRole("inputNode", "React"));
  expect(onChange).toHaveBeenCalledTimes(5);
});
