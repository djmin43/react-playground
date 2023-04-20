type ConvertToBase64FileProps = {
  fileName: string;
  base64ImageString: string;
  type?: string;
};

export const convertBase64ToFile = async ({
  fileName,
  base64ImageString,
  type = "image/png",
}: ConvertToBase64FileProps) => {
  return fetch(base64ImageString)
    .then((res) => res.blob())
    .then(
      (blob) =>
        new File([blob], fileName, {
          type,
        })
    );
};
