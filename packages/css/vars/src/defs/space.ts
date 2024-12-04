/* eslint-disable perfectionist/sort-objects */
// const RATIO = 1.61803398875;
// const BASE_INCREMENT = 0.0625; // 1px

// type GenerateScaleKeys<Count extends number, Result extends number[] = []> =
//     Result['length'] extends Count ? Result[number] : GenerateScaleKeys<Count, [...Result, Result['length'] + 1]>;

// function generateScale<Count extends number>(
//     baseIncrement: number,
//     count: Count,
// ): { [K in GenerateScaleKeys<Count>]: string } {
//     const series: { [key: number]: string } = {};
//     let currentValue = baseIncrement;

//     for (let i = 0; i < count; i++) {
//         series[i + 1] = `${currentValue}rem`;
//         currentValue *= RATIO
//     }

//     return series as { [K in GenerateScaleKeys<Count>]: string };
// }

// export const SPACE = generateScale(BASE_INCREMENT, 16);

export const SPACING = {
    space_0: "0",
    "space_0.25": "0.0625rem",
    "space_0.5": "0.125rem",
    "space_0.75": "0.1875rem",
    space_1: "0.25rem",
    "space_1.5": "0.375rem",
    space_2: "0.5rem",
    space_3: "0.75rem",
    space_4: "1rem",
    space_5: "1.25rem",
    space_6: "1.5rem",
    space_7: "1.75rem",
    space_8: "2rem",
    space_10: "2.5rem",
    space_12: "3rem",
};
