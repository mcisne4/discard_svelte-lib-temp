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
export type SvgSunProps = typeof __propDef.props;
export type SvgSunEvents = typeof __propDef.events;
export type SvgSunSlots = typeof __propDef.slots;
export default class SvgSun extends SvelteComponentTyped<SvgSunProps, SvgSunEvents, SvgSunSlots> {
}
export {};
