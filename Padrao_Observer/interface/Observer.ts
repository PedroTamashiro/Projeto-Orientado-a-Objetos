import { subject } from "./Subject";

export interface observer{
    update(subject: subject)
}