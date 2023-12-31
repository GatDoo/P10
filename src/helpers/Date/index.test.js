/**
 * 
 */
import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // Test unitaire mois de Janvier
            const date = new Date("2022-01-01");
            const month = getMonth(date);
            expect(month).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // Test unitaire mois de Juillet
            const date = new Date("2022-07-08");
            const month = getMonth(date);
            expect(month).toBe("juillet");
        });
        it("the function return undefined for 2022-15-36 as date", () => {
            // Test unitaire pour date aléatoire
            const date = new Date("2022-31-48");
            const month = getMonth(date);
            expect(month).not.toBeDefined();
        });
    });
})

