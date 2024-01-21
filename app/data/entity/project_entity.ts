export interface Project {
    id: number
    attributes: {
        name: string;
        description: string;
        category: string;
        url: string;
        githubUrl: string;
        image: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string
                        }
                        small: {
                            url: string
                        }
                        medium: {
                            url: string
                        }
                        large: {
                            url: string
                        }
                    }
                }
            }
        };
    }
}
