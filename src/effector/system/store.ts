import { SystemState } from "./types";
import { SystemDomain } from "./domain";
import { updateSession } from "./events";

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: ''
};

export const SystemStore = SystemDomain.store<SystemState>(initialState)
  .on(updateSession, (state, payload) => ({ ...state, ...payload }));
