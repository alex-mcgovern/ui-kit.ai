export default null;
// import { render } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
// import { expect, it, vi } from "vitest";

// // import { Radio } from "../../../RadioGroup";
// import { Form } from "../form";
// // import { FormRadioGroup } from "../form-radio-group";
// import { FormResetOnSubmit } from "../form-reset-on-submit";

// it("submits form with `FormRadioGroup`", async () => {
//     const user = userEvent.setup();
//     const onSubmit = vi.fn().mockImplementation(() => null);

//     const { getByLabelText, getByText } = render(
//         <Form onSubmit={onSubmit}>
//             <FormRadioGroup name="immigration_status">
//                 <Label>Immigration status</Label>
//                 <Radio value="citizen">Citizen</Radio>
//                 <Radio value="permanent_resident">
//                     Permanent resident
//                 </Radio>
//                 <Radio value="visa_holder">
//                     Visa holder
//                 </Radio>
//             </FormRadioGroup>
//             <Button type="submit">Submit</Button>
//         </Form>,
//     );

//     const field = getByLabelText("Citizen");
//     await user.click(field);

//     const button = getByText("Submit");
//     await user.click(button);

//     expect(onSubmit).toHaveBeenCalledWith(
//         { immigration_status: "citizen" },
//         expect.anything(),
//     );
// });

// it("`FormRadioGroup` clears when reset after submission", async () => {
//     const user = userEvent.setup();
//     const onSubmit = vi.fn().mockImplementation(() => null);

//     const { getByLabelText, getByText } = render(
//         <Form onSubmit={onSubmit}>
//             <FormResetOnSubmit />
//             <FormRadioGroup name="immigration_status">
//                 <Label>Immigration status</Label>
//                 <Radio value="citizen">Citizen</Radio>
//                 <Radio value="permanent_resident">
//                     Permanent resident
//                 </Radio>
//                 <Radio value="visa_holder">
//                     Visa holder
//                 </Radio>
//             </FormRadioGroup>
//             <Button type="submit">Submit</Button>
//         </Form>,
//     );

//     const field = getByLabelText("Citizen");
//     await user.click(field);

//     const button = getByText("Submit");
//     await user.click(button);

//     expect(onSubmit).toHaveBeenCalledWith(
//         { immigration_status: "citizen" },
//         expect.anything(),
//     );

//     expect(field).not.toBeChecked();
// });

// it("handles `defaultValues` prop passed to `Form` correctly with `FormRadioGroup`", async () => {
//     const user = userEvent.setup();
//     const onSubmit = vi.fn().mockImplementation(() => null);

//     const { getByLabelText, getByText } = render(
//         <Form
//             onSubmit={onSubmit}
//             options={{
//                 defaultValues: {
//                     immigration_status: "citizen",
//                 },
//             }}
//         >
//             <FormRadioGroup name="immigration_status">
//                 <Label>Immigration status</Label>
//                 <Radio value="citizen">Citizen</Radio>
//                 <Radio value="permanent_resident">
//                     Permanent resident
//                 </Radio>
//                 <Radio value="visa_holder">
//                     Visa holder
//                 </Radio>
//             </FormRadioGroup>
//             <Button type="submit">Submit</Button>
//         </Form>,
//     );

//     const field = getByLabelText("Citizen");
//     expect(field).toBeChecked();

//     const button = getByText("Submit");
//     await user.click(button);

//     expect(onSubmit).toHaveBeenCalledWith(
//         { immigration_status: "citizen" },
//         expect.anything(),
//     );
// });

// it("handles `value` prop passed to `FormRadioGroup`", async () => {
//     const user = userEvent.setup();
//     const onSubmit = vi.fn().mockImplementation(() => null);

//     const { getByLabelText, getByText } = render(
//         <Form onSubmit={onSubmit}>
//             <FormRadioGroup
//                 name="immigration_status"
//                 value="citizen"
//             >
//                 <Label>Immigration status</Label>
//                 <Radio value="citizen">Citizen</Radio>
//                 <Radio value="permanent_resident">
//                     Permanent resident
//                 </Radio>
//                 <Radio value="visa_holder">
//                     Visa holder
//                 </Radio>
//             </FormRadioGroup>
//             <Button type="submit">Submit</Button>
//         </Form>,
//     );

//     const field = getByLabelText("Citizen");
//     expect(field).toBeChecked();

//     const button = getByText("Submit");
//     await user.click(button);

//     expect(onSubmit).toHaveBeenCalledWith(
//         { immigration_status: "citizen" },
//         expect.anything(),
//     );
// });

// it("handles `defaultValue` prop passed to `FormRadioGroup`", async () => {
//     const user = userEvent.setup();
//     const onSubmit = vi.fn().mockImplementation(() => null);

//     const { getByLabelText, getByText } = render(
//         <Form onSubmit={onSubmit}>
//             <FormRadioGroup
//                 name="immigration_status"
//                 defaultValue="citizen"
//             >
//                 <Label>Immigration status</Label>
//                 <Radio value="citizen">Citizen</Radio>
//                 <Radio value="permanent_resident">
//                     Permanent resident
//                 </Radio>
//                 <Radio value="visa_holder">
//                     Visa holder
//                 </Radio>
//             </FormRadioGroup>
//             <Button type="submit">Submit</Button>
//         </Form>,
//     );

//     const field = getByLabelText("Citizen");
//     expect(field).toBeChecked();

//     const button = getByText("Submit");
//     await user.click(button);

//     expect(onSubmit).toHaveBeenCalledWith(
//         { immigration_status: "citizen" },
//         expect.anything(),
//     );
// });
