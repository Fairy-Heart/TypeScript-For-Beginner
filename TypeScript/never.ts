function ErrorMessage(message : string): never {
	throw new Error(`${message}`);
}
ErrorMessage('Test');
