import axios from 'axios';
import { FixerLatestResponse, SymbolsResponse } from './types';

const BASE_URL = 'http://data.fixer.io/api';

export class FixerClient {
  private accessKey: string;

  constructor({ accessKey }: { accessKey: string }) {
    this.accessKey = accessKey;
  }

  private async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }

  public async getLatest(): Promise<FixerLatestResponse> {
    const url = `${BASE_URL}/latest?access_key=${this.accessKey}`;
    return this.get(url);
  }

  public async getSymbols(): Promise<SymbolsResponse> {
    const url = `${BASE_URL}/symbols?access_key=${this.accessKey}`;
    return this.get(url);
  }
}

export * from './constants';
export * from './types';

export default FixerClient;
