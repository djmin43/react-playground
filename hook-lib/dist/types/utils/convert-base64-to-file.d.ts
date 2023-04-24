type ConvertToBase64FileProps = {
    fileName: string;
    base64ImageString: string;
    type?: string;
};
export declare const convertBase64ToFile: ({ fileName, base64ImageString, type, }: ConvertToBase64FileProps) => Promise<File>;
export {};
