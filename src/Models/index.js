class Moment {
	constructor(id, name, image, entry, date, address) {
		(this.id = id.toString()),
			(this.name = name),
			(this.image = image),
			(this.entry = entry),
			(this.date = date),
			(this.address = address)
	}
}

export default Moment;
