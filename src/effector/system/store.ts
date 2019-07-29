import { SystemState } from "./types";
import { SystemDomain } from "./domain";
import { clearSession, updateSession } from "./events";

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: 'anonymous'
};

export const SystemStore = SystemDomain.store<SystemState>(initialState)
  .on(updateSession, (state, payload) => ({ ...state, ...payload }))
  .reset(clearSession);
