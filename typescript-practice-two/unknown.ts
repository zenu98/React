let userInput: unknown;

userInput = 4;
userInput = "seo";

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
