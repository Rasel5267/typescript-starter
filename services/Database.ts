import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

export default async () => {
	try {
		mongoose.connect(`${MONGO_URI}`).then(result => {
			if(result){
				console.log('DB Connected')
			}
		})
	} catch (error) {
		console.log(error)
	}
}