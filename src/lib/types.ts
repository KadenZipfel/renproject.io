export {};

declare global {
    const gtag: (...args: any) => void;
    const GA_MEASUREMENT_ID: string;
}
