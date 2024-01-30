export interface Resume {
    id: number;
    attributes: {
        url: string;
        updatedAt: string;
    };
}

export interface MappedResume {
    url: string;
    updatedAt: string;
}