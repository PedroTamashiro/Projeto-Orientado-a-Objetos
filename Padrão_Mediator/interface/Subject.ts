import { observer } from "./Observer";

export interface subject {
    redButton()
    attach(observer: observer): void
    detach(observer: observer): void
    notify(): void
}