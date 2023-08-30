import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table } from 'react-bootstrap';
import {
  storeMissions,
  joinMission,
  leaveMission,
} from '../../redux/missionSlice';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          dispatch(storeMissions(data));
        });
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <Container fluid>
      <Table striped bordered hover style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>@in progress</td>
              <td>
                {mission.reserved ? (
                  <Button
                    type="button"
                    style={{
                      width: '130px',
                      border: '1px solid red',
                      color: 'red',
                    }}
                    variant="clear"
                    onClick={() => handleLeaveMission(mission.mission_id)}
                  >
                    Leave Mission
                  </Button>
                ) : (
                  <Button
                    type="button"
                    style={{ width: '130px', border: '1px solid black' }}
                    variant="clear"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Missions;
