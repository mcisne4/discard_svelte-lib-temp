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
export type SvgCodePageProps = typeof __propDef.props;
export type SvgCodePageEvents = typeof __propDef.events;
export type SvgCodePageSlots = typeof __propDef.slots;
export default class SvgCodePage extends SvelteComponentTyped<SvgCodePageProps, SvgCodePageEvents, SvgCodePageSlots> {
}
export {};
