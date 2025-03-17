import {
    FieldGroup,
    Heading,
    Input,
    LinkButton,
    TagLink,
    TextField,
    TextFieldCopyButton,
} from "@ui-kit.ai/components";
import {
    Palette,
    BotIcon,
    type LucideProps,
    Download,
    Zap,
    ArrowRight,
    Copy,
} from "lucide-react";

function HomepageCard({
    description,
    icon: Icon,
    title,
}: {
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    title: string;
    description: string;
}) {
    return (
        <div className="border border-muted-300 px-6 py-4 rounded-md">
            <div className="flex-1">
                <div className="flex gap-2 items-center mb-2">
                    <Icon className="bg-muted-100 p-1.5 rounded-full size-8 text-secondary -ml-1.5" />
                    <Heading level={3} className="text-lg mb-0">
                        {title}
                    </Heading>
                </div>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <section className="my-16">
                <div className="flex items-center gap-1 mb-2 -ml-1.5">
                    <TagLink
                        slotLeft={<Zap />}
                        slotRight={<ArrowRight className="-ml-1.5" />}
                        className="h-6"
                    >
                        Build faster with the ui-kit.ai MCP server
                    </TagLink>
                    <p className="mb-0"></p>
                </div>
                <Heading level={1}>A component library for the AI age.</Heading>
                <p className="mb-2">
                    Beautiful components built with React Aria Components,
                    optimized for fast iteration in AI powered workflows.
                </p>

                <div className="flex gap-2 mt-6 w-min ">
                    <LinkButton slotRight={<ArrowRight className="-ml-1.5" />}>
                        Docs
                    </LinkButton>
                    <TextField
                        isReadOnly
                        className="min-w-52 shrink-0"
                        value="npm i @ui-kit.ai/components"
                    >
                        <FieldGroup>
                            <Input className="font-mono" isBorderless />
                            <TextFieldCopyButton />
                        </FieldGroup>
                    </TextField>
                    {/* <code className="bg-muted-200 inline-flex px-2.5 gap-1.5 items-center h-ui-element rounded">
                        <Copy className="size-4" />
                    </code> */}
                </div>
            </section>
            <section className="my-16 grid grid-cols-1 gap-4 md:grid-cols-4">
                <HomepageCard
                    icon={Palette}
                    title="Themeable"
                    description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                />
                <HomepageCard
                    icon={BotIcon}
                    title="Ready for AI"
                    description="Supercharge your LLM for UI development with our MCP server."
                />
                <HomepageCard
                    icon={Download}
                    title="Simple distribution"
                    description="1 package. No CLI. Minimal config. Spend more time shipping and less configuring."
                />
                <HomepageCard
                    icon={Palette}
                    title="Themeable"
                    description="Customise your application's look & feel with CSS variables powered by Tailwind CSS v4."
                />
            </section>
        </>
    );
}
