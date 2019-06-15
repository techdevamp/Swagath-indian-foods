export class AppConstants {
    public static get baseURL(): string {
      return 'http://localhost:8080';
  }

  public static get imageURL(): string {
    return AppConstants.baseURL.concat('/readData/getImageByImageName/');
  }
}
