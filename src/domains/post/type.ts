export interface createPost {
    title: string;
    caption: string;
    thumbnail: File | null;
    video: File | null;
    categorysId: string[];
}