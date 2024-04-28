import { subject } from "./Subject";

export interface observer{
    setMediator(subject: subject): void
    pressRedButton(subject: subject)
    update(subject:subject): void
}