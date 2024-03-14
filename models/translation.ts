export interface Translate {
    success:  Success;
    contents: Contents;
}

export interface Contents {
    translated:  string;
    text:        string;
    translation: string;
}

export interface Success {
    total: number;
}