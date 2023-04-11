import { Container, Header, Statistic, Form, StatisticLabel, StatisticValue,Segment,Grid, Icon, Button } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
const DisplayBalances=() =>{
    return ( 
        <Segment>
        <Grid columns={2} divided>
          <Grid.Row>
          <Grid.Column>
          <DisplayBalance color="green" title="Incoming" value={1050} />
            </Grid.Column>
          <Grid.Column>     
          <DisplayBalance color="red" title="Expensions" value={500} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
     );
}

export default DisplayBalances;