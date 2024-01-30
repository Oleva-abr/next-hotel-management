export type UpdateReviewDto = {
    reviewId: string;
    reviewText: string;
    userRating: number;
}

export type CreateReviewDto = {
    hotelroomId: string;
    reviewText: string;
    userRating: number;
    userId: string;
}