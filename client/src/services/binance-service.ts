import axios, { AxiosResponse } from "axios";

export default class BinanceService {
  public static async getHntData(): Promise<AxiosResponse> {
    return await axios
      .get(`https://api.binance.com/api/v3/ticker/24hr?symbol=HNTUSDT`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  }
}
