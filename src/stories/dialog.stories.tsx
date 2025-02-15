import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ComponentType } from "react";

import { faker } from "@faker-js/faker";
import { Search as IconSearch } from "lucide-react";
import { useState } from "react";

import { Button } from "../components/button";
import {
    Dialog,
    DialogCloseButton,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/dialog";
import { Form } from "../components/form";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { SearchField } from "../components/search-field";

const ShortContent = () => (
    <p className="mb-2">
        A modal dialog component powered by{" "}
        <a href="https://react-spectrum.adobe.com/react-aria/Dialoghtml">
            React Aria Components
        </a>
    </p>
);

const LongContent = () => (
    <>
        <p className="mb-2">
            A modal dialog component powered by{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/Dialoghtml">
                React Aria Components
            </a>
        </p>
        {Array.from({ length: 10 }, () => {
            return (
                <p className="mb-2" key={faker.string.alphanumeric(4)}>
                    {faker.lorem.paragraphs(1)}
                </p>
            );
        })}
    </>
);

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    decorators: [
        (Story) => {
            return (
                <div>
                    <Story />
                    <div
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)",
                            backgroundSize: "100px 100px",
                            inset: 0,
                            position: "absolute",
                            zIndex: -1,
                        }}
                    />
                </div>
            );
        },
    ],
    parameters: {
        layout: "centered",
        viewport: { defaultViewport: "desktop" },
    },
    render: (props) => (
        <DialogTrigger>
            <Button>Open dialog</Button>
            <Dialog {...props}>
                {({ close }) => {
                    return (
                        <>
                            <DialogHeader>
                                <DialogTitle>Hello there</DialogTitle>
                                <DialogCloseButton />
                            </DialogHeader>

                            <DialogContent>
                                <LongContent />
                            </DialogContent>

                            <DialogFooter>
                                <Button
                                    className="ml-auto"
                                    onPress={() => close()}
                                    variant="secondary"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={() => {
                                        alert("Confirmed");
                                        close();
                                    }}
                                    type="submit"
                                >
                                    Confirm
                                </Button>
                            </DialogFooter>
                        </>
                    );
                }}
            </Dialog>
        </DialogTrigger>
    ),
    // Storybook's typescript is a bit sh*t, hence the type-casting
    subcomponents: {
        DialogCloseButton: DialogCloseButton as ComponentType<unknown>,
        DialogContent: DialogContent as ComponentType<unknown>,
        DialogFooter: DialogFooter as ComponentType<unknown>,
        DialogHeader: DialogHeader as ComponentType<unknown>,
        DialogTitle: DialogTitle as ComponentType<unknown>,
        DialogTrigger: DialogTrigger as ComponentType<unknown>,
    },
    title: "Components/Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
    },
};

export const WithShortContent: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <ShortContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
    },
};

export const WidthMd: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
        width: "md",
    },
};

export const WidthLg: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Hello there</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>

                    <DialogContent>
                        <LongContent />
                    </DialogContent>

                    <DialogFooter>
                        <Button
                            className="ml-auto"
                            onPress={() => close()}
                            variant="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onPress={() => {
                                alert("Confirmed");
                                close();
                            }}
                            type="submit"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </>
            );
        },
        width: "lg",
    },
};

export const LgPhone: Story = {
    parameters: {
        viewport: { defaultViewport: "mobile2" },
    },
};

export const SmPhone: Story = {
    parameters: {
        viewport: { defaultViewport: "mobile1" },
    },
};

const ITEMS = [
    { id: "chocolate", name: "Chocolate" },
    { id: "mint", name: "Mint" },
    { id: "strawberry", name: "Strawberry" },
    { id: "vanilla", name: "Vanilla" },
    { id: "caramel", name: "Caramel" },
    { id: "peanut-butter", name: "Peanut Butter" },
    { id: "coffee", name: "Coffee" },
    { id: "rocky-road", name: "Rocky Road" },
    { id: "cookies-and-cream", name: "Cookies and Cream" },
    { id: "neapolitan", name: "Neapolitan" },
    { id: "pistachio", name: "Pistachio" },
    { id: "black-raspberry", name: "Black Raspberry" },
    { id: "butter-pecan", name: "Butter Pecan" },
    { id: "cherry", name: "Cherry" },
    { id: "maple-walnut", name: "Maple Walnut" },
    { id: "peach", name: "Peach" },
    { id: "praline", name: "Praline" },
];

const FilterTemplate = (props: ComponentProps<typeof Dialog>) => {
    const [searchString, setSearchString] = useState("");

    const filtered = ITEMS.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
    });

    return (
        <DialogTrigger>
            <Button>Open dialog</Button>
            <Dialog {...props}>
                <DialogHeader>
                    <DialogTitle>Filter me</DialogTitle>
                    <SearchField
                        aria-label="search"
                        autoFocus
                        className="-mr-3 ml-auto w-60"
                        onChange={setSearchString}
                    >
                        <Input icon={<IconSearch />} />
                    </SearchField>
                </DialogHeader>

                <DialogContent>
                    {/* <ListBox
                                renderEmptyState={() => {
                                    return (
                                        <p className="my-auto text-center">
                                            No items found
                                        </p>
                                    );
                                }}
                            >
                                {filtered.map((item) => (
                                    <ListBoxItem key={item.id}>
                                        {item.name}
                                    </ListBoxItem>
                                ))}
                            </ListBox> */}
                </DialogContent>

                <DialogFooter>
                    <Button
                        className="ml-auto"
                        onPress={() => close()}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                        type="submit"
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </DialogTrigger>
    );
};

export const FilterableDialog: Story = {
    args: {
        className: "min-h-[75dvh]",
        width: "lg",
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col items-center justify-center gap-8">
                <Story />
                <div className="w-[30rem] rounded border border-gray-200 bg-white p-2 shadow-lg">
                    <p className="mb-2">
                        This is designed to be similar to the &quot;package
                        versions dialog&quot; in trusty-frontend.
                    </p>
                    <p className="mb-2">
                        Note that the min-height on the `Dialog` has been
                        overriden using a className.
                    </p>
                    <p className="mb-2">
                        Also note that at the time of writing (2024-08-28), the
                        styling on the inner content is not correct.
                    </p>
                </div>
            </div>
        ),
    ],
    render: FilterTemplate,
};

const CONFIRMATION_TEXT = "DELETE";

const strLabel = (v: string) => `Type "${v}" to confirm`;

export const ConfirmationDialog: Story = {
    args: {
        children: ({ close }) => {
            return (
                <>
                    <DialogHeader>
                        <DialogTitle>Delete account</DialogTitle>
                        <DialogCloseButton />
                    </DialogHeader>
                    <DialogContent>
                        <p>
                            <strong>Warning</strong>: Deleting your account
                            will:
                        </p>
                        <ul className="list-inside list-disc">
                            <li>Delete all personal data.</li>
                            <li>Delete all favorites and settings.</li>
                            <li>Anonymise all of your contributions.</li>
                        </ul>
                    </DialogContent>
                    <DialogFooter>
                        <Form
                            className="mb-4 w-full"
                            onSubmit={() => {
                                alert("Account deleted");
                                close();
                            }}
                        >
                            {/* <TextField
                                className="mb-2"
                                isRequired
                                name="confirmation_text"
                                validate={(v) =>
                                    v === CONFIRMATION_TEXT
                                        ? true
                                        : "The text you entered doesn't match"
                                }
                            >
                                <Label>{strLabel(CONFIRMATION_TEXT)}</Label>
                                <Input />
                            </TextField> */}
                            <Button
                                className="w-full"
                                isDestructive
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </DialogFooter>
                </>
            );
        },
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col items-center justify-center gap-8">
                <Story />
                <div className="w-[30rem] rounded border border-gray-200 bg-white p-2 shadow-lg">
                    <p className="mb-2">
                        This is a typical &quot;type X to confirm&quot; dialog.
                    </p>
                    <p className="mb-2">
                        Note that it uses a non-standard footer.
                    </p>
                </div>
            </div>
        ),
    ],
};
