import { isValidElement, type ReactNode } from "react";
import { Button } from "../components/button";
import { DialogTrigger } from "../components/dialog";
import { SlidersIcon } from "lucide-react";
import {
    Tooltip,
    TooltipTrigger,
} from "../components/tooltip";
import {
    Popover,
    PopoverDialog,
} from "../components/popover";
import { twMerge } from "tailwind-merge";
import { Label } from "../components/label";

export type StoryArgsList<T extends object = object> =
    Record<string, T>;

const PropsList = ({
    data,
    depth = 0,
}: {
    data: object;
    depth?: number;
}) => {
    const renderValue = (
        value: any,
        currentDepth: number,
    ) => {
        if (value === null || value === undefined) {
            return <span>{String(value)}</span>;
        } else if (
            typeof value === "string" ||
            typeof value === "number"
        ) {
            return <span>{value}</span>;
        } else if (typeof value === "boolean") {
            return <span>{value.toString()}</span>;
        } else if (Array.isArray(value)) {
            return <code>{`${value.length} items`}</code>;

            return (
                <ol>
                    {value
                        .slice(0, 3)
                        .map((item, index) => (
                            <li key={index}>
                                {renderValue(
                                    item,
                                    currentDepth,
                                )}
                            </li>
                        ))}
                    {value.length > 3 && (
                        <li>and {value.length - 3} more</li>
                    )}
                </ol>
            );
        } else if (
            isValidElement(value) &&
            typeof value !== "string"
        ) {
            if (typeof value.type === "string") {
                return <span>{`<${value.type} />`}</span>;
            }
            const componentName =
                value.type.displayName ||
                value.type.name ||
                "Anonymous";
            return <span>{`<${componentName} />`}</span>;
        } else if (typeof value === "object") {
            if (currentDepth >= 3) {
                return <span>Depth limit reached</span>;
            }
            return (
                <PropsList
                    data={value}
                    depth={currentDepth + 1}
                />
            );
        } else {
            return <span>Unsupported data type</span>;
        }
    };

    return (
        <ul
            className={twMerge(
                "min-w-48",
                depth > 0 ? "ml-4 list-disc" : "",
            )}
        >
            {Object.entries(data).map(([key, value]) => {
                return (
                    <li
                        key={key}
                        className="mb-2 w-full text-sm last:mb-0"
                    >
                        <strong>{key}:</strong>{" "}
                        {renderValue(value, depth)}
                    </li>
                );
            })}
        </ul>
    );
};

type RenderComponentFn<
    TArgs extends object,
    TArgsList extends object,
> = (props: {
    args: TArgs;
    storyArgs: TArgsList[keyof TArgsList];
}) => ReactNode;

export function StoryArgsListTemplate<
    TArgs extends object,
    TArgsList extends object,
>({
    args,
    argsList,
    renderComponent: RenderComponent,
}: {
    args: TArgs;
    argsList: TArgsList;
    renderComponent: RenderComponentFn<TArgs, TArgsList>;
}) {
    return (
        <div>
            {Object.entries(argsList).map(
                ([name, storyArgs]) => {
                    return (
                        <div
                            className="border-b-muted-200 mb-4 grid grid-cols-[12rem_auto]
                                items-center gap-4 border-b pb-4"
                        >
                            <div
                                className="border-r-muted-200 flex items-center justify-between gap-2
                                    border-r"
                            >
                                <Label>{name}</Label>
                                <DialogTrigger>
                                    <TooltipTrigger>
                                        <Button
                                            isIcon
                                            variant="tertiary"
                                        >
                                            <SlidersIcon />
                                        </Button>
                                        <Tooltip>
                                            Show props
                                        </Tooltip>
                                    </TooltipTrigger>
                                    <Popover showArrow>
                                        <PopoverDialog className="max-h-60 overflow-y-auto">
                                            <PropsList
                                                data={{
                                                    ...storyArgs,
                                                }}
                                            />
                                        </PopoverDialog>
                                    </Popover>
                                </DialogTrigger>
                            </div>

                            <div>
                                <RenderComponent
                                    args={args}
                                    storyArgs={storyArgs}
                                />
                            </div>
                        </div>
                    );
                },
            )}
        </div>
    );
}
