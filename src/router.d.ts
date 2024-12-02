import Vue, {AsyncComponent, ComponentOptions, DefineComponent, defineComponent} from "vue";

export type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent | DefineComponent | defineComponent