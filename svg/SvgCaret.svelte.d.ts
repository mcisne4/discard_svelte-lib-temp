import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SvgCaretProps = typeof __propDef.props;
export type SvgCaretEvents = typeof __propDef.events;
export type SvgCaretSlots = typeof __propDef.slots;
export default class SvgCaret extends SvelteComponentTyped<SvgCaretProps, SvgCaretEvents, SvgCaretSlots> {
}
export {};
