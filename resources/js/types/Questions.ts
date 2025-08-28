export default interface Question {
    category_id: number;
    id: number;
    statement: string;
    year: string;
    image_path?: string;
}
