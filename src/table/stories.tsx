import type { Meta, StoryObj } from "@storybook/react";

import { typography } from "@boondoggle.design/css-variants";
import { faker } from "@faker-js/faker";

import { Cell, Column, Row, Table, TableBody, TableHeader } from ".";
import { formatDate } from "../_utils/format-date";
import { Avatar } from "../avatar";
import { Box } from "../box";

/** -----------------------------------------------------------------------------
 * MockUserCell
 * ------------------------------------------------------------------------------- */

const MockUserCell = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_2"
        >
            <Avatar
                firstName={firstName}
                lastName={lastName}
                size={32}
            />
            <Box flexShrink="0">
                <Box
                    className={typography.body_sm}
                    fontWeight="medium"
                >
                    {firstName} {lastName}
                </Box>
                <Box
                    className={typography.body_sm}
                    color="text_low_contrast"
                >
                    {faker.internet.email()}
                </Box>
            </Box>
        </Box>
    );
};

/** -----------------------------------------------------------------------------
 * Stories
 * ------------------------------------------------------------------------------- */

const meta = {
    args: {},
    component: Table,
    parameters: {
        layout: "padded",
    },
    render: (props) => {
        return (
            <>
                <Table
                    aria-label="Files"
                    {...props}
                >
                    <TableHeader>
                        <Column
                            isRowHeader
                            width={300}
                        >
                            User
                        </Column>
                        <Column width={300}>Phone number</Column>
                        <Column width={150}>Job type</Column>
                        <Column width={150}>Job area</Column>
                        <Column width={300}>Job title</Column>
                        <Column width={150}>Job description</Column>
                        <Column width={150}>Zodiac sign</Column>
                        <Column width={300}>Bio</Column>
                        <Column
                            allowsSorting
                            width={150}
                        >
                            Date of birth
                        </Column>
                    </TableHeader>

                    <TableBody>
                        {Array.from({ length: 20 }).map((_, index) => {
                            return (
                                <Row key={index}>
                                    <Cell>
                                        <MockUserCell />
                                    </Cell>
                                    <Cell>{faker.phone.number()}</Cell>
                                    <Cell>{faker.person.jobType()}</Cell>
                                    <Cell>{faker.person.jobArea()}</Cell>
                                    <Cell>{faker.person.jobTitle()}</Cell>
                                    <Cell>{faker.person.jobDescriptor()}</Cell>
                                    <Cell>{faker.person.zodiacSign()}</Cell>
                                    <Cell>{faker.person.bio()}</Cell>
                                    <Cell>
                                        {formatDate(
                                            faker.date
                                                .birthdate()
                                                .toISOString(),
                                        )}
                                    </Cell>
                                </Row>
                            );
                        })}
                    </TableBody>
                </Table>
            </>
        );
    },
    title: "Table",
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RowsAsLinks: Story = {
    render: (props) => {
        return (
            <>
                <Table
                    aria-label="Files"
                    {...props}
                >
                    <TableHeader>
                        <Column
                            isRowHeader
                            width={300}
                        >
                            User
                        </Column>
                        <Column width={300}>Phone number</Column>
                        <Column width={150}>Job type</Column>
                        <Column width={150}>Job area</Column>
                        <Column width={300}>Job title</Column>
                        <Column width={150}>Job description</Column>
                        <Column width={150}>Zodiac sign</Column>
                        <Column width={300}>Bio</Column>
                        <Column
                            allowsSorting
                            width={150}
                        >
                            Date of birth
                        </Column>
                    </TableHeader>

                    <TableBody>
                        {Array.from({ length: 20 }).map((_, index) => {
                            return (
                                <Row
                                    href={faker.internet.url()}
                                    key={index}
                                >
                                    <Cell>
                                        <MockUserCell />
                                    </Cell>
                                    <Cell>{faker.phone.number()}</Cell>
                                    <Cell>{faker.person.jobType()}</Cell>
                                    <Cell>{faker.person.jobArea()}</Cell>
                                    <Cell>{faker.person.jobTitle()}</Cell>
                                    <Cell>{faker.person.jobDescriptor()}</Cell>
                                    <Cell>{faker.person.zodiacSign()}</Cell>
                                    <Cell>{faker.person.bio()}</Cell>
                                    <Cell>
                                        {formatDate(
                                            faker.date
                                                .birthdate()
                                                .toISOString(),
                                        )}
                                    </Cell>
                                </Row>
                            );
                        })}
                    </TableBody>
                </Table>
            </>
        );
    },
};
