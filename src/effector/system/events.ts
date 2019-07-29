import { SystemState } from "./types";
import { SystemDomain } from "./domain";

export const updateSession = SystemDomain.event<SystemState>();
