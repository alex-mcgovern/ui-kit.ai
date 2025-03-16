import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, expect, vi } from "vitest";
import failOnConsole from "vitest-fail-on-console";

expect.extend(matchers);

// Add missing stuff to JSDom
beforeAll(() => {
    if (typeof Element !== "undefined") {
        Element.prototype.scrollTo = vi.fn();
    }
    global.ResizeObserver = class ResizeObserver {
        disconnect() {
            // noop
        }
        observe() {
            // noop
        }
        unobserve() {
            // noop
        }
    };
});

failOnConsole({
    shouldFailOnDebug: true,
    shouldFailOnError: true,
    shouldFailOnInfo: true,
    shouldFailOnLog: true,
    shouldFailOnWarn: true,
});

afterEach(() => {
    cleanup();
});
