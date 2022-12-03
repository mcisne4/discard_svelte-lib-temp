import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        style?: string | undefined;
        description?: string | null | undefined;
        format?: ((code: string) => string) | undefined;
        margin?: string | undefined;
        descriptionStyle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
export default class CodeBlock extends SvelteComponentTyped<CodeBlockProps, CodeBlockEvents, CodeBlockSlots> {
}
export {};
