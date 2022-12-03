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
export type SvgCodeProps = typeof __propDef.props;
export type SvgCodeEvents = typeof __propDef.events;
export type SvgCodeSlots = typeof __propDef.slots;
export default class SvgCode extends SvelteComponentTyped<SvgCodeProps, SvgCodeEvents, SvgCodeSlots> {
}
export {};
