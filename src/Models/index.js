class Moment {
	constructor(id, name, image, entry, date, address, latitude, longitude) {
		(this.id = id.toString()),
			(this.name = name),
			(this.image = image),
			(this.entry = entry),
			(this.date = date),
			(this.address = address),
			(this.latitude = latitude),
			(this.longitude = longitude);
	}
}

export default Moment;
