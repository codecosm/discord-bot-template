//* Command

/** 
    The interface for a command object, which holds the name, description and command function.

    @property {string} name - The name of the command (the keyword that the user writes after the prefix when sending a command message).
    @property {string} description - The description of the command; it's optional but can be helpful.
    @property {function} execute - The function to be executed when the command is initiated by a user.
*/

export interface Command {
	name: string;
	description: string;
	execute: Function;
}
