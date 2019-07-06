export class AppConstants {
    public static get baseURL(): string {
      return 'https://agile-dawn-98487.herokuapp.com';
      // return 'http://localhost:8080';
    }

  public static get imageURL(): string {
    return AppConstants.baseURL.concat('/readData/getImageByImageName/');
  }
}
