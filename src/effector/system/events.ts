import { SystemState } from "./types";
import { SystemDomain } from "./domain";

export const updateSession = SystemDomain.event<SystemState>();
export const clearSession = SystemDomain.event();
