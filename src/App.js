import './App.css';
import { Container, Header, Statistic, Form, StatisticLabel, StatisticValue,Segment,Grid, Icon, Button } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DsiplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
   <Container>
    <MainHeader title="Ewelina"></MainHeader>
    <DisplayBalance title="Your balance" value={600} size="small"/>
    <DisplayBalances/>
    <MainHeader title="History" type='h3'></MainHeader>
    <EntryLine isExpense={true} description="something" value={10}/>
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
    <NewEntryForm/>

    </Container>
  );
}

export default App;
