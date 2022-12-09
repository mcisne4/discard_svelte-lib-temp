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
export type SvgMoonProps = typeof __propDef.props;
export type SvgMoonEvents = typeof __propDef.events;
export type SvgMoonSlots = typeof __propDef.slots;
export default class SvgMoon extends SvelteComponentTyped<SvgMoonProps, SvgMoonEvents, SvgMoonSlots> {
}
export {};
