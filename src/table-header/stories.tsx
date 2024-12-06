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
import { FieldGroup } from "../../packages/components/field-group/src/components/field-group";
import { Input } from "../../packages/components/input/src/components/input";
import { Menu } from "../../packages/components/menu/src/components/menu";
import {
    FilterButton,
    FilterButtonGroup,
    RemoveFilterButton,
} from "../filter-button-group";
import { Icon } from "../icon";
import {
    SearchField,
    SearchFieldClearButton,
    SearchFieldIcon,
} from "../../packages/components/search-field/src/components/search-field";

const meta = {
    args: {
        children: (
            <>
                <TableSearchContainer>
                    <SearchField>
                        <FieldGroup>
                            <SearchFieldIcon />
                            <Input variant="unstyled" />
                            <SearchFieldClearButton />
                        </FieldGroup>
                    </SearchField>
                </TableSearchContainer>
                <TableFiltersContainer>
                    <FilterButtonGroup isFilterApplied={false}>
                        <Menu
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
                        </Menu>
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
