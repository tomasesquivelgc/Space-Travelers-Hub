import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';

function Missions() {
  return (
    <Table
      striped
      bordered
      style={{
        marginTop: '20px',
        boxSizing: 'border-box',
        width: '96vw',
        marginLeft: '2vw',
      }}
    >
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thaicom</td>
          <td>To be Fetched</td>
          <td>
            <Button
              type="button"
              style={{ width: '160px' }}
              variant="secondary"
            >
              NOT A MEMBER
            </Button>
          </td>
          <td>
            <Button
              type="button"
              style={{ width: '160px', border: '1px solid black' }}
              variant="clear"
            >
              Join Mission
            </Button>
          </td>
        </tr>
        <tr>
          <td>Telstar</td>
          <td>To be Fetched</td>
          <td>
            <Button type="button" style={{ width: '160px' }} variant="primary">
              ACTIVE MEMBER
            </Button>
          </td>
          <td>
            <Button
              type="button"
              style={{ width: '160px', border: '1px solid red', color: 'red' }}
              variant="clear"
            >
              Leave Mission
            </Button>
          </td>
        </tr>
        <tr>
          <td>Iridium NEXT</td>
          <td>To be Fetched</td>
          <td>
            <Button
              type="button"
              style={{ width: '160px' }}
              variant="secondary"
            >
              NOT A MEMBER
            </Button>
          </td>
          <td>
            <Button
              type="button"
              style={{ width: '160px', border: '1px solid black' }}
              variant="clear"
            >
              Join Mission
            </Button>
          </td>
        </tr>
        <tr>
          <td>Commercial Resupply Services</td>
          <td>To be Fetched</td>
          <td> </td>
          <td> </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Missions;
