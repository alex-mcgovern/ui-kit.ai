import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant, SizeVariant } from "@boondoggle.design/css-types";
import { faClock } from "@fortawesome/pro-solid-svg-icons/faClock";
import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";

import {
    TableActionsContainer,
    TableFiltersContainer,
    TableHeader,
    TableSearchContainer,
} from ".";
import {
    FilterButton,
    FilterButtonGroup,
    RemoveFilterButton,
} from "../filter-button-group";
import { Group } from "../group";
import { Icon } from "../icon";
import { Input } from "../input";
import { MenuButton } from "../menu-button";
import {
    SearchField,
    SearchFieldClearButton,
    SearchFieldIcon,
} from "../search-field";

const meta = {
    args: {
        children: (
            <>
                <TableSearchContainer>
                    <SearchField>
                        <Group>
                            <SearchFieldIcon />
                            <Input variant="unstyled" />
                            <SearchFieldClearButton />
                        </Group>
                    </SearchField>
                </TableSearchContainer>
                <TableFiltersContainer>
                    <FilterButtonGroup isFilterApplied={false}>
                        <MenuButton
                            items={[
                                { id: "item_1", name: "Item 1" },
                                { id: "item_2", name: "Item 2" },
                            ]}
                        >
                            <FilterButton>
                                <Icon
                                    color="text_low_contrast"
                                    icon={faClock}
                                />
                                Filter 1
                            </FilterButton>
                        </MenuButton>
                        <RemoveFilterButton />
                    </FilterButtonGroup>
                </TableFiltersContainer>
                <TableActionsContainer>
                    <Button
                        isSquare
                        name="secondary_action"
                        size={SizeVariant.SM}
                        variant={ButtonVariant.GHOST}
                    >
                        <Icon icon={faEllipsis} />
                    </Button>

                    <Button
                        name="primary_action"
                        size={SizeVariant.SM}
                    >
                        <Icon icon={faPlus} />
                        Primary action
                    </Button>
                </TableActionsContainer>
            </>
        ),
    },
    component: TableHeader,

    parameters: {
        layout: "padded",
    },
    title: "TableHeader",
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
