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
