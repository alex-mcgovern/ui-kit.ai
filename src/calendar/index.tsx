import type {
    CalendarProps as RACCalendarProps,
    DateValue as RACDateValue,
} from "react-aria-components";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant } from "@boondoggle.design/css-types";
import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons/faAngleRight";
import clsx from "clsx";
import {
    Calendar as RACCalendar,
    CalendarCell as RACCalendarCell,
    CalendarGrid as RACCalendarGrid,
    CalendarGridBody as RACCalendarGridBody,
    CalendarGridHeader as RACCalendarGridHeader,
    CalendarHeaderCell as RACCalendarHeaderCell,
    Heading as RACHeading,
} from "react-aria-components";

import { Icon } from "../icon";
import {
    calendarCSS,
    calendarCellCSS,
    calendarGridHeaderCSS,
    calendarGridHeaderCellCSS,
    calendarHeaderCSS,
    calendarHeadingCSS,
} from "./styles.css";

export const Calendar = <TDateValue extends RACDateValue>(
    props: RACCalendarProps<TDateValue>,
) => {
    return (
        <RACCalendar
            {...props}
            className={clsx(props.className, calendarCSS)}
        >
            <header className={calendarHeaderCSS}>
                <Button
                    slot="previous"
                    variant={ButtonVariant.GHOST}
                >
                    <Icon icon={faAngleLeft} />
                </Button>
                <RACHeading className={calendarHeadingCSS} />
                <Button
                    slot="next"
                    variant={ButtonVariant.GHOST}
                >
                    <Icon icon={faAngleRight} />
                </Button>
            </header>
            <RACCalendarGrid>
                <RACCalendarGridHeader className={calendarGridHeaderCSS}>
                    {(day) => (
                        <RACCalendarHeaderCell
                            className={calendarGridHeaderCellCSS}
                        >
                            {day}
                        </RACCalendarHeaderCell>
                    )}
                </RACCalendarGridHeader>
                <RACCalendarGridBody>
                    {(date) => (
                        <RACCalendarCell
                            className={({
                                isDisabled,
                                isFocused,
                                isFocusVisible,
                                isHovered,
                                isInvalid,
                                isOutsideMonth,
                                isOutsideVisibleRange,
                                isPressed,
                                isSelected,
                                isSelectionEnd,
                                isSelectionStart,
                                isUnavailable,
                            }) =>
                                calendarCellCSS({
                                    isDisabled,
                                    isFocused,
                                    isFocusVisible,
                                    isHovered,
                                    isInvalid,
                                    isOutsideMonth,
                                    isOutsideVisibleRange,
                                    isPressed,
                                    isSelected,
                                    isSelectionEnd,
                                    isSelectionStart,
                                    isUnavailable,
                                })
                            }
                            date={date}
                        />
                    )}
                </RACCalendarGridBody>
            </RACCalendarGrid>
        </RACCalendar>
    );
};
