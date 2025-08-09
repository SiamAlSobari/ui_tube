export type Post = {
    id:string
    title: string;
    caption: string;
    thumbnailUrl: string;
    createdAt: string;
    updatedAt: string;
    media: Media
}


export type Media = {
    id:string 
    videoUrl: string
}


export interface createPost {
    title: string;
    caption: string;
    thumbnail: File | null;
    video: File | null;
    categoryIds: string[];
}