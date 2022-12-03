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
export type SvgCarrotProps = typeof __propDef.props;
export type SvgCarrotEvents = typeof __propDef.events;
export type SvgCarrotSlots = typeof __propDef.slots;
export default class SvgCarrot extends SvelteComponentTyped<SvgCarrotProps, SvgCarrotEvents, SvgCarrotSlots> {
}
export {};
