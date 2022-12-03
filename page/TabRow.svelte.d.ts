import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        placement?: "top" | "bottom" | "none" | undefined;
        tabs: {
            name: string;
            active: boolean;
            onClick: Function;
        }[];
        tabStyle?: string | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TabRowProps = typeof __propDef.props;
export type TabRowEvents = typeof __propDef.events;
export type TabRowSlots = typeof __propDef.slots;
export default class TabRow extends SvelteComponentTyped<TabRowProps, TabRowEvents, TabRowSlots> {
}
export {};
