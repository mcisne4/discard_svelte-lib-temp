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
export type SvgHomeProps = typeof __propDef.props;
export type SvgHomeEvents = typeof __propDef.events;
export type SvgHomeSlots = typeof __propDef.slots;
export default class SvgHome extends SvelteComponentTyped<SvgHomeProps, SvgHomeEvents, SvgHomeSlots> {
}
export {};
