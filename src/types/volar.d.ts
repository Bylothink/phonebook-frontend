import { Component } from "vue";

declare module "vue"
{
    interface GlobalComponents
    {
        Component: typeof Component;
    }
}
