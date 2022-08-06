export interface Article{ 
    id : number;
    title: string;
    description: string;
}
export interface ArticlesState{
    list: Article[];
    error: string;
    isSuccess: boolean;
    isLoading: boolean;
}