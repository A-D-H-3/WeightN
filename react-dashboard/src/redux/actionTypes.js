// all action types are simply strings by the same name and follow this format
export const GET_USERNAME = "GET_USERNAME";
export const UPDATE_LOG = "UPDATE_LOG";
export const UPDATE_GRAPH_LOG = "UPDATE_GRAPH_LOG";

// Note
// The reason we inititialize a `const` with the exact same name as the string itself is so Visual Studio Code can see the export and keep us from misspelling the string later on
// In other words, we write the string only once and then use it multiple times in other areas by referring to its const which Visual Studio Code is aware of.

export const RESET_FLAG = "RESET_FLAG";
