import axios from 'axios';
import { FootballClient } from '..';

describe('FootballClient', () => {
  const footballClient = new FootballClient({ apiKey: '' });

  describe('getCompetitions', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getCompetitions();
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getCompetitions();
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });

  describe('getCompetition', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getCompetition(1);
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getCompetition(1);
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });

  describe('getTeams', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getTeams();
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getTeams();
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });

  describe('getTeamsByCompetition', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getTeamsByCompetition(1);
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getTeamsByCompetition(1);
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });

  describe('getTeam', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getTeam(1);
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getTeam(1);
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });

  describe('getMatchesByTeam', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await footballClient.getMatchesByTeam(1);
      expect(data).toEqual({});
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await footballClient.getMatchesByTeam(1);
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });
});
