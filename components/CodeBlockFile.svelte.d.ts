import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        style?: string | undefined;
        filename: string;
        margin?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeBlockFileProps = typeof __propDef.props;
export type CodeBlockFileEvents = typeof __propDef.events;
export type CodeBlockFileSlots = typeof __propDef.slots;
export default class CodeBlockFile extends SvelteComponentTyped<CodeBlockFileProps, CodeBlockFileEvents, CodeBlockFileSlots> {
}
export {};
