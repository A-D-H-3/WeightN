// all action types are simply strings by the same name and follow this format
export const GET_USERNAME = 'GET_USERNAME';

// Note
// The reason we inititialize a `const` with the exact same name as the string itself is so Visual Studio Code can see the export and keep us from misspelling the string later on
// In other words, we write the string only once and then use it multiple times in other areas by referring to its const which Visual Studio Code is aware of.