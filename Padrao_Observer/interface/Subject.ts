import { observer } from "./Observer";

export interface subject {
    attach(observer: observer): void
    detach(observer: observer): void
    notify(): void
}