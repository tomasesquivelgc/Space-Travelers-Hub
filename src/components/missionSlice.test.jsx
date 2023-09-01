/* eslint-disable camelcase */
import missionReducer, {
  storeMissions,
  joinMission,
  leaveMission,
} from '../redux/missionSlice';

describe('Mission Slice', () => {
  it('should create an action to store missions', () => {
    const missions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: true,
      },
    ];

    const expectedAction = {
      type: 'missions/storeMissions',
      payload: missions,
    };

    expect(storeMissions(missions)).toEqual(expectedAction);
  });

  it('should create an action to join a mission', () => {
    const missions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: false,
      },
    ];

    const mission_id = '1';
    const action = joinMission(mission_id);
    const nextState = missionReducer(missions, action);
    expect(nextState[0].reserved).toBe(true);
    expect(nextState[1].reserved).toBe(false);
  });

  it('should create an action to leave a mission', () => {
    const missions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: true,
      },
    ];

    const mission_id = '2';
    const action = leaveMission(mission_id);
    const nextState = missionReducer(missions, action);
    expect(nextState[0].reserved).toBe(false);
    expect(nextState[1].reserved).toBe(false);
  });
});
