declare module "github-colors";
declare module "tocbot";

declare module "*.md" {
    const content: string;
    export default content;
}