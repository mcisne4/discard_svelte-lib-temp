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
export type SvgCodeEditProps = typeof __propDef.props;
export type SvgCodeEditEvents = typeof __propDef.events;
export type SvgCodeEditSlots = typeof __propDef.slots;
export default class SvgCodeEdit extends SvelteComponentTyped<SvgCodeEditProps, SvgCodeEditEvents, SvgCodeEditSlots> {
}
export {};
