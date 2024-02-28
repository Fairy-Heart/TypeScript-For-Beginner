class Person {
	private PersonName: string;

	constructor(){
		this.PersonName = 'Mavis';
	}
	public showName() {
		return this.PersonName;
	}
}

const DisplayName = new Person();

console.log(DisplayName.showName());
