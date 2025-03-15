import type { OptionsSchema } from "@ui-kit.ai/components";

import { GlobeIcon } from "lucide-react";

type Options = {
    withIcon?: boolean;
    withSections?: boolean;
};

const getItems = ({ withIcon }: Options) => ({
    france: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "france",
        textValue: "France",
    },
    germany: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "germany",
        textValue: "Germany",
    },
    oman: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "oman",
        textValue: "Oman",
    },
    saudi_arabia: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "saudi_arabia",
        textValue: "Saudi Arabia",
    },
    spain: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "spain",
        textValue: "Spain",
    },
    uae: {
        icon: withIcon === true ? <GlobeIcon /> : undefined,
        id: "uae",
        textValue: "United Arab Emirates",
    },
});

export function getMockOptions<TType extends "listbox" | "menu">(
    options: Options = {},
): OptionsSchema<TType>[] {
    const { france, germany, oman, saudi_arabia, spain, uae } =
        getItems(options);

    return options.withSections === true
        ? [
              {
                  id: "europe",
                  items: [france, germany, spain],
                  textValue: "Europe",
              },
              {
                  id: "mena",
                  items: [uae, saudi_arabia, oman],
                  textValue: "MENA",
              },
          ]
        : [france, germany, spain, uae, saudi_arabia, oman];
}
