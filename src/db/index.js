import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('moments.db');

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS moments (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, entry TEXT NOT NULL, date TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)',
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const insertMoments = (
	name,
	image,
	entry,
	date,
	address,
	latitude,
	longitude
) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO moments (name, image, entry, date, address, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)',
				[name, image, entry, date, address, latitude, longitude],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const fetchMoments = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM moments',
				[],
				(_, result) => {
					let data = [];
					var len = result.rows.length;
					for (let i = 0; i < len; i++) {
						let row = result.rows.item(i);
						data.push(row);
					}
					resolve(data);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const deleteMoments = (name) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM moments WHERE name=?',
				[name],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};
