import 'dotenv/config';
import express, { Application } from "express";

export default async(app: Application) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	return app;
}