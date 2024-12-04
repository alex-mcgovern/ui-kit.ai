import type { ListSchema } from "@boondoggle.design/types";

import type { Css } from "../../../src/css/index.css";

import { FlagAe } from "../../../src/icon-flag/ae";
import { FlagDe } from "../../../src/icon-flag/de";
import { FlagEs } from "../../../src/icon-flag/es";
import { FlagFr } from "../../../src/icon-flag/fr";
import { FlagOm } from "../../../src/icon-flag/om";
import { FlagSa } from "../../../src/icon-flag/sa";

type Options = {
    withSections?: boolean;
    withSlotLeft?: boolean;
    withSlotRight?: boolean;
};

const SLOT_PROPS: Css = { height: "space_4", width: "space_4" };

const getItems = ({ withSlotLeft, withSlotRight }: Options) => ({
    france: {
        id: "france",
        slotLeft: withSlotLeft ? <FlagFr {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagFr {...SLOT_PROPS} /> : undefined,
        textValue: "France",
    },
    germany: {
        id: "germany",
        slotLeft: withSlotLeft ? <FlagDe {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagDe {...SLOT_PROPS} /> : undefined,
        textValue: "Germany",
    },
    oman: {
        id: "oman",
        slotLeft: withSlotLeft ? <FlagOm {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagOm {...SLOT_PROPS} /> : undefined,
        textValue: "Oman",
    },
    saudi_arabia: {
        id: "saudi_arabia",
        slotLeft: withSlotLeft ? <FlagSa {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagSa {...SLOT_PROPS} /> : undefined,
        textValue: "Saudi Arabia",
    },
    spain: {
        id: "spain",
        slotLeft: withSlotLeft ? <FlagEs {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagEs {...SLOT_PROPS} /> : undefined,
        textValue: "Spain",
    },
    uae: {
        id: "uae",
        slotLeft: withSlotLeft ? <FlagAe {...SLOT_PROPS} /> : undefined,
        slotRight: withSlotRight ? <FlagAe {...SLOT_PROPS} /> : undefined,
        textValue: "United Arab Emirates",
    },
});

export const getListMockCountries = (options: Options = {}): ListSchema[] => {
    const { france, germany, oman, saudi_arabia, spain, uae } =
        getItems(options);

    return options.withSections
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
};
