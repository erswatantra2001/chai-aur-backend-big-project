import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true,
        unique: true 
    },
    videoFile: {
        type: String,
        required: true,
        uniques: true
    },
    thumbnail: {
        type: String,
        required: true,
        unique: true 
    },
    duration: {
        type: Number,
        required: true 
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    isPublished: {
        type: Boolean,
        required: true,
        unique: true 
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model("Video", videoSchema);