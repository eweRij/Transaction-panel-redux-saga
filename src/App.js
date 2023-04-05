import './App.css';
import { Container, Header, Statistic, Form, StatisticLabel, StatisticValue,Segment,Grid, Icon, Button } from 'semantic-ui-react';

function App() {
  return (
   <Container><Header as="h1">EWELINA</Header>
   <Statistic size="small">
    <Statistic.Label>Your balance</Statistic.Label>
    <Statistic.Value>5,25</Statistic.Value>
    </Statistic>
    <Segment>
      <Grid columns={2} divided>
        <Grid.Row>
        <Grid.Column>
          <Statistic size="tiny" color='green'>
          <Statistic.Label style={{textAlign:"center"}}>Incoming</Statistic.Label>
          <Statistic.Value >1050</Statistic.Value>
          </Statistic>
          </Grid.Column>
        <Grid.Column>     
        <Statistic size="tiny" color='red'>
          <Statistic.Label style={{textAlign:"center"}}>Expenses</Statistic.Label>
          <Statistic.Value >500</Statistic.Value>
          </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Header as="h3">History</Header>
    <Segment color="red">
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>10$</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment color="green">
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something2</Grid.Column>
          <Grid.Column width={3} textAlign='right'>20$</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment color="red">
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something3</Grid.Column>
          <Grid.Column width={3} textAlign='right'>15$</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Form unstackable>
      <Form.Group>
        <Form.Input icon={"tags"} label="Description" placeholder="New shinny thing" width={12}/>
        <Form.Input icon={"dollar"} label="Value" placeholder="100.00" width={4}/>
        
      </Form.Group>
      <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Ok</Button>
        </Button.Group>
    </Form>

    </Container>
  );
}

export default App;
