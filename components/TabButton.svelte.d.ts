import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        active?: boolean | undefined;
        placement?: "top" | "bottom" | "none" | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabButtonProps = typeof __propDef.props;
export type TabButtonEvents = typeof __propDef.events;
export type TabButtonSlots = typeof __propDef.slots;
export default class TabButton extends SvelteComponentTyped<TabButtonProps, TabButtonEvents, TabButtonSlots> {
}
export {};
